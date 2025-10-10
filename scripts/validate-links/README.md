# Documentation Scripts

This directory contains utility scripts for maintaining the Zumasys documentation.

## validate-links.js

A Node.js script that validates all markdown links in the documentation to ensure they:

1. Point to existing files/directories
2. End with `/README.md` (not just the directory name)
3. Use correct relative paths

### Usage

**Check for issues (validation only):**

```bash
cd site
npm run validate-links
```

**Automatically fix issues:**

```bash
cd site
npm run validate-links -- --fix
```

**Run with verbose output:**

```bash
cd site
npm run validate-links -- --fix --verbose
```

**Create backup files (optional, useful if not using git):**

```bash
cd site
npm run validate-links -- --fix --backup
```

Or run directly from the project root:

```bash
node scripts/validate-links.js
node scripts/validate-links.js --fix
node scripts/validate-links.js --fix --verbose
node scripts/validate-links.js --fix --backup  # Create .backup files
```

To save output to a file (Windows PowerShell):

```powershell
npm run validate-links 2>&1 | Tee-Object -FilePath link-validation-report.txt
npm run validate-links -- --fix 2>&1 | Tee-Object -FilePath link-fix-report.txt
```

Or (Unix/Linux/Mac):

```bash
npm run validate-links 2>&1 | tee link-validation-report.txt
npm run validate-links -- --fix 2>&1 | tee link-fix-report.txt
```

### What it checks

The script scans all `README.md` files in the following directories:

- `rover/`
- `pos-connect/`
- `smartsuite/`

For each markdown link it finds, it validates:

1. **Invalid Paths** - Links that point to non-existent files or directories
2. **Missing /README.md** - Links that point to a directory but don't include `/README.md` at the end

### Auto-Fix Mode (--fix)

When run with the `--fix` flag, the script will automatically correct:

1. **Missing /README.md suffixes** - Appends `/README.md` to directory links
2. **Broken links with findable targets** - Searches for the target article and updates the path
3. **Preserves anchors** - Keeps any `#section` anchors in the URL

The script will:

- Make changes directly to files (use Git to review and revert if needed)
- Skip issues that can't be automatically fixed
- Provide a summary of what was fixed and what requires manual attention

**Note:** Backups are not created by default since the project is version controlled. Use `--backup` flag if you want `.backup` files created.

### Output

The script provides detailed output showing:

- File path where the issue was found
- Line and column number of the problematic link
- The link text and URL
- Issue type and description
- Suggested fix (when applicable)

#### Example Output

```text
File: rover/PUR-OVERVIEW/PUR-REPORT/PO-F2/README.md
  Line 24:49 - [ PO.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E)
    ✗ Target path does not exist
    
  Line 6:17 - [ Form Details ](PO-F2-1)
    ⚠ Link should end with /README.md
      → Suggestion: PO-F2-1/README.md
```

### Exit Codes

- `0` - All links are valid
- `1` - Issues were found

This makes the script suitable for use in CI/CD pipelines.

### Technical Details

The script:

- Uses Node.js built-in modules only (no external dependencies)
- Handles relative paths correctly
- Ignores external URLs (http://, https://, mailto:)
- Ignores anchor-only links (#)
- Provides color-coded terminal output for better readability
- Collects and displays summary statistics

### Common Issues Found

1. **Incorrect relative paths** - Often caused by overly complex `../` navigation that points to wrong locations
2. **Missing /README.md suffix** - Links like `[Text](folder-name)` should be `[Text](folder-name/README.md)`
3. **Broken links after file reorganization** - Links that weren't updated when files were moved

### Best Practices

Based on the script's findings, follow these guidelines:

1. Always end directory links with `/README.md`:

   ```markdown
   ✗ [PO Entry](PO-E)
   ✓ [PO Entry](PO-E/README.md)
   ```

2. Use relative paths from the current file:

   ```markdown
   ✗ [PO.E](../../../../../../../../../../../rover/AP-OVERVIEW/...)
   ✓ [PO.E](../../PUR-ENTRY/PO-E/README.md)
   ```

3. Keep directory structure in mind when creating links
4. Run this script before committing changes to documentation
5. Add it to your CI/CD pipeline to catch link issues early

### Integration with Development Workflow

1. **Before committing**: Run `npm run validate-links` to catch issues locally
2. **In CI/CD**: Add this script to your GitHub Actions workflow
3. **After reorganization**: Always run this script after moving files or restructuring directories

### Future Enhancements

Potential improvements for this script:

- Generate an auto-fix mode to correct common issues
- Create a JSON report for programmatic consumption
- Check for orphaned files (files not linked from anywhere)
- Validate external URLs (with optional rate limiting)
- Check for duplicate content or circular references
