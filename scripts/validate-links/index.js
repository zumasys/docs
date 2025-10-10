#!/usr/bin/env node

/**
 * Markdown Link Validator and Auto-Fixer for Zumasys Documentation
 * 
 * This script scans all README.md files in rover, pos-connect, and smartsuite folders
 * and validates that all markdown links:
 * 1. Point to existing files/directories
 * 2. End with /README.md (not just the directory name)
 * 3. Use correct relative paths
 * 
 * With --fix flag, it will automatically correct fixable issues.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = path.join(__dirname, '..', '..', 'site');
const SCAN_FOLDERS = ['rover', 'pos-connect', 'smartsuite'];

// Parse command line arguments
const args = process.argv.slice(2);
const FIX_MODE = args.includes('--fix') || args.includes('-f');
const VERBOSE = args.includes('--verbose') || args.includes('-v');
const CREATE_BACKUPS = args.includes('--backup') || args.includes('-b');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

// Statistics
const stats = {
  totalFiles: 0,
  totalLinks: 0,
  invalidPaths: 0,
  missingReadme: 0,
  validLinks: 0,
  fixed: 0,
  unfixable: 0,
};

// Store all README.md files for searching
let allReadmeFiles = [];

/**
 * Find all README.md files recursively in a directory
 */
function findReadmeFiles(dir) {
  const results = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Skip node_modules, hidden directories, obsolete, and duplicates
        if (item.name !== 'node_modules' && 
            item.name !== 'obsolete' && 
            item.name !== 'duplicates' && 
            !item.name.startsWith('.')) {
          results.push(...findReadmeFiles(fullPath));
        }
      } else if (item.isFile() && item.name === 'README.md') {
        results.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`${colors.red}Error reading directory ${dir}: ${error.message}${colors.reset}`);
  }
  
  return results;
}

/**
 * Extract markdown links from file content
 * Returns array of { text, url, line, column, fullMatch }
 */
function extractMarkdownLinks(content) {
  const links = [];
  // Match markdown links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  
  const lines = content.split('\n');
  
  lines.forEach((line, lineIndex) => {
    let match;
    const regex = new RegExp(linkRegex);
    while ((match = regex.exec(line)) !== null) {
      const text = match[1];
      const url = match[2];
      const fullMatch = match[0];
      
      // Only process relative links (not external URLs, anchors, or mailto)
      if (!url.startsWith('http://') && 
          !url.startsWith('https://') && 
          !url.startsWith('mailto:') &&
          !url.startsWith('#')) {
        links.push({
          text,
          url,
          line: lineIndex + 1,
          column: match.index + 1,
          fullMatch,
        });
      }
    }
  });
  
  return links;
}

/**
 * Try to find the correct path for a broken link by searching for the target article
 */
function findCorrectPath(sourceFile, brokenUrl) {
  // Extract the target article name from the broken URL
  const urlParts = brokenUrl.split('/');
  let targetName = urlParts[urlParts.length - 1];
  
  // If the last part is README.md, use the directory name before it
  if (targetName.toLowerCase() === 'readme.md') {
    targetName = urlParts[urlParts.length - 2];
  }
  
  if (!targetName) return null;
  
  // Search for README.md files that match the target name (case-insensitive)
  const sourceDir = path.dirname(sourceFile);
  const targetNameLower = targetName.toLowerCase();
  const candidates = allReadmeFiles.filter(file => {
    const parentDir = path.basename(path.dirname(file));
    return parentDir.toLowerCase() === targetNameLower;
  });
  
  if (candidates.length === 0) return null;
  
  // If we find exactly one match, calculate the relative path
  if (candidates.length === 1) {
    const relativePath = path.relative(sourceDir, candidates[0]);
    // Normalize path separators for markdown (use forward slashes)
    return relativePath.split(path.sep).join('/');
  }
  
  // If multiple matches, try to find the closest one (same parent directory tree)
  const sourceRelative = path.relative(BASE_DIR, sourceFile);
  const sourceParts = sourceRelative.split(path.sep);
  
  let bestMatch = null;
  let bestScore = 0;
  
  for (const candidate of candidates) {
    const candidateRelative = path.relative(BASE_DIR, candidate);
    const candidateParts = candidateRelative.split(path.sep);
    
    // Count common parent directories
    let score = 0;
    for (let i = 0; i < Math.min(sourceParts.length, candidateParts.length); i++) {
      if (sourceParts[i] === candidateParts[i]) {
        score++;
      } else {
        break;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = candidate;
    }
  }
  
  if (bestMatch) {
    const relativePath = path.relative(sourceDir, bestMatch);
    return relativePath.split(path.sep).join('/');
  }
  
  return null;
}

/**
 * Check if a path exists with case-insensitive matching
 * Returns the actual path if found, null otherwise
 */
function findPathCaseInsensitive(targetPath) {
  // First try exact match
  if (fs.existsSync(targetPath)) {
    return targetPath;
  }
  
  // Try to find the path case-insensitively by traversing each part
  const parts = targetPath.split(path.sep);
  let currentPath = parts[0] + path.sep; // Start with drive letter on Windows or / on Unix
  
  for (let i = 1; i < parts.length; i++) {
    if (!parts[i]) continue; // Skip empty parts
    
    if (!fs.existsSync(currentPath)) {
      return null;
    }
    
    try {
      const items = fs.readdirSync(currentPath);
      const matchingItem = items.find(item => 
        item.toLowerCase() === parts[i].toLowerCase()
      );
      
      if (matchingItem) {
        currentPath = path.join(currentPath, matchingItem);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
  
  return fs.existsSync(currentPath) ? currentPath : null;
}

/**
 * Check if a sibling directory reference is missing the ../
 * Returns the corrected path if found, null otherwise
 */
function checkSiblingDirectory(sourceFile, brokenUrl) {
  // Only check simple paths (not ones already starting with ../)
  if (brokenUrl.startsWith('../') || brokenUrl.startsWith('./')) {
    return null;
  }
  
  // Try adding ../ to see if it exists
  const sourceDir = path.dirname(sourceFile);
  const siblingPath = path.resolve(sourceDir, '..', brokenUrl);
  const actualSiblingPath = findPathCaseInsensitive(siblingPath);
  
  if (actualSiblingPath) {
    // Return the corrected relative path
    return '../' + brokenUrl;
  }
  
  return null;
}

/**
 * Validate a single link from a source file
 */
function validateLink(sourceFile, link) {
  const issues = [];
  
  // Remove any anchor/hash from the URL
  const urlWithoutAnchor = link.url.split('#')[0];
  
  // Skip empty links
  if (!urlWithoutAnchor) {
    return issues;
  }
  
  // Resolve the absolute path
  const sourceDir = path.dirname(sourceFile);
  const targetPath = path.resolve(sourceDir, urlWithoutAnchor);
  
  // Check if path exists (case-insensitive)
  const actualPath = findPathCaseInsensitive(targetPath);
  const exists = actualPath !== null;
  
  if (!exists) {
    // Check if it would exist with /README.md appended (case-insensitive)
    const withReadme = path.join(targetPath, 'README.md');
    const actualWithReadme = findPathCaseInsensitive(withReadme);
    const withReadmeExists = actualWithReadme !== null;
    
    if (withReadmeExists) {
      issues.push({
        type: 'missing-readme',
        message: `Link should end with /README.md`,
        suggestion: `${urlWithoutAnchor}/README.md`,
        fixable: true,
      });
      stats.missingReadme++;
    } else {
      // Check if it's a sibling directory reference missing ../
      const siblingPath = checkSiblingDirectory(sourceFile, urlWithoutAnchor);
      
      if (siblingPath) {
        issues.push({
          type: 'invalid-path',
          message: `Missing '../' for sibling directory`,
          suggestion: siblingPath,
          fixable: true,
        });
        stats.invalidPaths++;
      } else {
        // Try to find the correct path by searching all files
        const correctPath = findCorrectPath(sourceFile, urlWithoutAnchor);
        issues.push({
          type: 'invalid-path',
          message: `Target path does not exist`,
          suggestion: correctPath,
          fixable: !!correctPath,
        });
        stats.invalidPaths++;
      }
    }
  } else {
    // Path exists - check if it's a directory without /README.md
    const stat = fs.statSync(actualPath);
    
    if (stat.isDirectory()) {
      const readmePath = path.join(actualPath, 'README.md');
      const actualReadmePath = findPathCaseInsensitive(readmePath);
      if (actualReadmePath) {
        issues.push({
          type: 'missing-readme',
          message: `Link points to directory but should end with /README.md`,
          suggestion: `${urlWithoutAnchor}/README.md`,
          fixable: true,
        });
        stats.missingReadme++;
      } else {
        issues.push({
          type: 'invalid-path',
          message: `Directory exists but has no README.md`,
          suggestion: null,
          fixable: false,
        });
        stats.invalidPaths++;
      }
    } else {
      // File exists and is accessible
      stats.validLinks++;
    }
  }
  
  return issues;
}

/**
 * Fix issues in a file
 */
function fixFileIssues(filePath, fileIssues) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let fixed = 0;
    
    // Sort issues by line and column in reverse order to maintain positions
    const sortedIssues = fileIssues
      .filter(item => item.issues.some(i => i.fixable))
      .sort((a, b) => {
        if (a.link.line !== b.link.line) {
          return b.link.line - a.link.line;
        }
        return b.link.column - a.link.column;
      });
    
    for (const { link, issues } of sortedIssues) {
      const fixableIssue = issues.find(i => i.fixable);
      if (!fixableIssue || !fixableIssue.suggestion) continue;
      
      // Preserve any anchor from the original URL
      const anchor = link.url.includes('#') ? '#' + link.url.split('#')[1] : '';
      const newUrl = fixableIssue.suggestion + anchor;
      
      // Create the new link
      const oldLink = `[${link.text}](${link.url})`;
      const newLink = `[${link.text}](${newUrl})`;
      
      // Replace in content
      const oldContent = content;
      content = content.replace(oldLink, newLink);
      
      if (content !== oldContent) {
        fixed++;
        if (VERBOSE) {
          console.log(`    ${colors.green}✓ Fixed:${colors.reset} ${link.url} → ${newUrl}`);
        }
      }
    }
    
    if (fixed > 0) {
      // Create backup if requested
      if (CREATE_BACKUPS) {
        const backupPath = filePath + '.backup';
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(filePath, backupPath);
        }
      }
      
      // Write fixed content
      fs.writeFileSync(filePath, content, 'utf-8');
      stats.fixed += fixed;
      return fixed;
    }
    
    return 0;
  } catch (error) {
    console.error(`${colors.red}Error fixing ${filePath}: ${error.message}${colors.reset}`);
    return 0;
  }
}

/**
 * Process a single README.md file
 */
function processFile(filePath) {
  const relativePath = path.relative(BASE_DIR, filePath);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const links = extractMarkdownLinks(content);
    
    stats.totalLinks += links.length;
    
    if (links.length === 0) {
      return;
    }
    
    const fileIssues = [];
    
    for (const link of links) {
      const issues = validateLink(filePath, link);
      
      if (issues.length > 0) {
        fileIssues.push({ link, issues });
      }
    }
    
    // Report issues for this file
    if (fileIssues.length > 0) {
      console.log(`\n${colors.cyan}File: ${relativePath}${colors.reset}`);
      
      for (const { link, issues } of fileIssues) {
        console.log(`  ${colors.yellow}Line ${link.line}:${link.column}${colors.reset} - [${link.text}](${link.url})`);
        
        for (const issue of issues) {
          if (issue.type === 'invalid-path') {
            console.log(`    ${colors.red}✗ ${issue.message}${colors.reset}`);
            if (!issue.fixable && !FIX_MODE) {
              stats.unfixable++;
            }
          } else if (issue.type === 'missing-readme') {
            console.log(`    ${colors.yellow}⚠ ${issue.message}${colors.reset}`);
          }
          
          if (issue.suggestion && !FIX_MODE) {
            console.log(`      ${colors.green}→ Suggestion: ${issue.suggestion}${colors.reset}`);
          }
        }
      }
      
      // Fix issues if in fix mode
      if (FIX_MODE) {
        const fixedCount = fixFileIssues(filePath, fileIssues);
        if (fixedCount > 0) {
          console.log(`  ${colors.green}✓ Fixed ${fixedCount} issue(s)${colors.reset}`);
        } else {
          const unfixableCount = fileIssues.filter(item => 
            item.issues.some(i => !i.fixable)
          ).length;
          if (unfixableCount > 0) {
            console.log(`  ${colors.red}✗ ${unfixableCount} issue(s) require manual fixing${colors.reset}`);
            stats.unfixable += unfixableCount;
          }
        }
      }
    }
  } catch (error) {
    console.error(`${colors.red}Error processing ${relativePath}: ${error.message}${colors.reset}`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Zumasys Documentation Link Validator${colors.reset}`);
  if (FIX_MODE) {
    console.log(`${colors.magenta}  🔧 AUTO-FIX MODE ENABLED${colors.reset}`);
  }
  console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
  console.log(`\nScanning directories: ${SCAN_FOLDERS.join(', ')}\n`);
  
  const allFiles = [];
  
  for (const folder of SCAN_FOLDERS) {
    const folderPath = path.join(BASE_DIR, folder);
    
    if (!fs.existsSync(folderPath)) {
      console.warn(`${colors.yellow}Warning: Folder not found: ${folder}${colors.reset}`);
      continue;
    }
    
    const files = findReadmeFiles(folderPath);
    allFiles.push(...files);
    console.log(`Found ${files.length} README.md files in ${folder}/`);
  }
  
  stats.totalFiles = allFiles.length;
  allReadmeFiles = allFiles; // Store for path searching
  
  console.log(`\n${colors.blue}Processing ${stats.totalFiles} files...${colors.reset}`);
  
  if (FIX_MODE) {
    if (CREATE_BACKUPS) {
      console.log(`${colors.yellow}ℹ Backups will be created as .backup files${colors.reset}\n`);
    } else {
      console.log(`${colors.yellow}ℹ No backups will be created (project is version controlled)${colors.reset}`);
      console.log(`${colors.yellow}  Use --backup flag to create backups if needed${colors.reset}\n`);
    }
  }
  
  // Process each file
  for (const file of allFiles) {
    processFile(file);
  }
  
  // Print summary
  console.log(`\n${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}  Summary${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
  console.log(`Total files scanned:        ${stats.totalFiles}`);
  console.log(`Total links found:          ${stats.totalLinks}`);
  console.log(`${colors.green}Valid links:                ${stats.validLinks}${colors.reset}`);
  console.log(`${colors.yellow}Missing /README.md:         ${stats.missingReadme}${colors.reset}`);
  console.log(`${colors.red}Invalid paths:              ${stats.invalidPaths}${colors.reset}`);
  
  if (FIX_MODE) {
    console.log(`${colors.green}Fixed automatically:        ${stats.fixed}${colors.reset}`);
    console.log(`${colors.red}Require manual fixing:      ${stats.unfixable}${colors.reset}`);
  }
  
  const totalIssues = stats.missingReadme + stats.invalidPaths;
  console.log(`\nTotal issues:               ${totalIssues}`);
  
  if (FIX_MODE && stats.fixed > 0) {
    console.log(`\n${colors.green}✓ Fixed ${stats.fixed} issue(s)!${colors.reset}`);
    if (CREATE_BACKUPS) {
      console.log(`${colors.yellow}ℹ Backup files created with .backup extension${colors.reset}`);
    } else {
      console.log(`${colors.cyan}ℹ Use 'git diff' to review changes${colors.reset}`);
    }
    
    if (stats.unfixable > 0) {
      console.log(`${colors.yellow}⚠ ${stats.unfixable} issue(s) require manual review${colors.reset}`);
    }
  } else if (FIX_MODE && stats.fixed === 0) {
    console.log(`\n${colors.yellow}No issues were automatically fixed.${colors.reset}`);
    if (stats.unfixable > 0) {
      console.log(`${colors.red}${stats.unfixable} issue(s) require manual fixing.${colors.reset}`);
    }
  } else if (!FIX_MODE && totalIssues > 0) {
    console.log(`\n${colors.yellow}⚠ Issues found! Run with --fix to automatically fix them:${colors.reset}`);
    console.log(`  ${colors.cyan}npm run validate-links -- --fix${colors.reset}`);
  }
  
  if (!FIX_MODE && totalIssues > 0) {
    process.exit(1);
  } else if (FIX_MODE && stats.unfixable > 0) {
    process.exit(1);
  } else if (totalIssues === 0) {
    console.log(`\n${colors.green}✓ All links are valid!${colors.reset}`);
    process.exit(0);
  } else {
    process.exit(0);
  }
}

// Run the script
main();
