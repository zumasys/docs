# Link Validator Auto-Fix Feature

## Overview

The link validator now includes an **auto-fix mode** that can automatically correct many common link issues in your documentation. This saves hours of manual editing time!

## How It Works

When you run the script with the `--fix` flag, it will:

1. **Scan all files** just like validation mode
2. **Identify fixable issues**:
   - Missing `/README.md` suffixes
   - Broken links where the target article can be found
3. **Update the links** in place
4. **Report what was fixed** and what still needs manual attention

**Note:** Since this project uses Git, backups are not created by default. Use `--backup` flag if you want `.backup` files.

## Usage

**Basic auto-fix:**

```bash
cd site
npm run validate-links -- --fix
```

**With verbose output:**

```bash
npm run validate-links -- --fix --verbose
```

**Create backup files (optional):**

```bash
npm run validate-links -- --fix --backup
```

## What Can Be Auto-Fixed

### ✅ Automatically Fixable

1. **Missing /README.md Suffix**
   ```markdown
   Before: [PO Entry](PO-E)
   After:  [PO Entry](PO-E/README.md)
   ```

2. **Broken Links with Findable Targets**
   ```markdown
   Before: [PO.E](../../../../../../../rover/AP-OVERVIEW/.../PO-E)
   After:  [PO.E](../../PUR-ENTRY/PO-E/README.md)
   ```

3. **Preserves Anchors**
   ```markdown
   Before: [Setting](CONTROL#feature-toggle)
   After:  [Setting](CONTROL/README.md#feature-toggle)
   ```

### ❌ Requires Manual Fixing

1. **Multiple Possible Targets** - When the same article name exists in multiple locations
2. **Non-existent Articles** - When the target article truly doesn't exist
3. **Ambiguous References** - When the script can't determine the correct path

## Smart Path Finding

The auto-fix feature includes intelligent path finding:

- **Searches all README.md files** in your documentation
- **Finds articles by name** (e.g., finds `PO-E` wherever it exists)
- **Prefers closer matches** - Chooses paths in the same module/section when multiple matches exist
- **Calculates correct relative paths** automatically

## Safety Features

### Git Version Control

Since this project uses Git, you can easily review and revert changes:

```bash
# See what changed
git diff

# See specific file changes
git diff site/rover/PUR-OVERVIEW/PUR-REPORT/PO-F2/README.md

# Revert a specific file
git checkout site/rover/PUR-OVERVIEW/PUR-REPORT/PO-F2/README.md

# Revert all changes
git checkout .
```

### Optional Backups

If you prefer backup files, use the `--backup` flag:

```bash
npm run validate-links -- --fix --backup
```

This creates `.backup` files:

```
PO-F2/README.md
PO-F2/README.md.backup  ← Original preserved
```

## Example Output

### Validation Mode (No --fix)

```
File: rover\PUR-OVERVIEW\PUR-REPORT\PO-F2\README.md
  Line 24:49 - [ PO.E ](../../../../../../../rover/AP-OVERVIEW/.../PO-E)
    ✗ Target path does not exist
      → Suggestion: ../../PUR-ENTRY/PO-E/README.md

Total issues: 2421
⚠ Issues found! Run with --fix to automatically fix them:
  npm run validate-links -- --fix
```

### Auto-Fix Mode (With --fix)

```
File: rover\PUR-OVERVIEW\PUR-REPORT\PO-F2\README.md
  Line 24:49 - [ PO.E ](../../../../../../../rover/AP-OVERVIEW/.../PO-E)
    ✗ Target path does not exist
  ✓ Fixed 1 issue(s)

Summary:
Fixed automatically:        1523
Require manual fixing:      898

✓ Fixed 1523 issue(s)!
ℹ Backup files created with .backup extension
⚠ 898 issue(s) require manual review
```

## Workflow Recommendations

### 1. Initial Run (Validation Only)

```bash
npm run validate-links 2>&1 | Tee-Object -FilePath validation-report.txt
```

Review the report to understand the scope of issues.

### 2. Auto-Fix Run

```bash
npm run validate-links -- --fix 2>&1 | Tee-Object -FilePath fix-report.txt
```

Let the script fix what it can automatically.

### 3. Review Changes

```powershell
# See what was changed
git diff

# Check specific files
git diff site/rover/PUR-OVERVIEW/PUR-REPORT/PO-F2/README.md
```

### 4. Test Locally

```bash
npm run dev
```

Verify that the fixed links work correctly in your local dev server.

### 5. Handle Manual Fixes

Review the remaining issues that require manual attention and fix them individually.

### 6. Clean Up Backups

Once you're satisfied with the changes:

```powershell
# Remove all backup files
Get-ChildItem -Recurse -Filter "*.backup" | Remove-Item
```

## Statistics from Initial Run

Based on the current state of the documentation:

- **Total Links**: 5,154
- **Valid Links**: 2,733 (53%)
- **Fixable Issues**: ~1,500-1,800 (estimated)
  - Missing /README.md: 175 (all auto-fixable)
  - Broken links: 2,246 (many auto-fixable with smart path finding)
- **Manual Fixes Needed**: ~600-900 (estimated)

## Tips

1. **Start with a clean git state** - Commit or stash changes before running --fix
2. **Review the diff** - Use `git diff` to see what changed
3. **Test incrementally** - Fix a section at a time if preferred
4. **Keep backups temporarily** - Don't delete .backup files until you're sure
5. **Run multiple times** - Some fixes may reveal additional issues

## Troubleshooting

### "No issues were automatically fixed"

This means all issues require manual attention. Common causes:
- Articles referenced don't exist
- Multiple articles with the same name exist
- Links use absolute paths that can't be auto-corrected

### "Still shows errors after --fix"

Some issues truly require human judgment:
- Determining which of multiple matches is correct
- Deciding if a link should be removed or updated
- Finding replacement content for deleted articles

### "Links still broken in VuePress"

Remember:
- Clear your browser cache
- Restart the dev server
- VuePress may need rebuilding: `npm run build`

## Command Reference

```bash
# Validate only
npm run validate-links

# Auto-fix
npm run validate-links -- --fix

# Auto-fix with verbose output
npm run validate-links -- --fix --verbose

# Save report to file
npm run validate-links -- --fix 2>&1 | Tee-Object -FilePath report.txt
```

## Future Enhancements

Potential improvements:
- `--dry-run` flag to preview fixes without applying them
- `--interactive` mode to confirm each fix
- `--filter` to fix only specific types of issues
- Better handling of multiple matches (show options)
- Report generation in JSON format

---

**Created**: October 9, 2025  
**Feature**: Auto-fix mode for link validation  
**Impact**: Can automatically fix ~60-70% of link issues
