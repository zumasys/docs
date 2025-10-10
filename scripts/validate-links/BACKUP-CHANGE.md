# Script Update: Removed Default Backups

## Change Summary

Updated `validate-links.js` to **not create backup files by default** since the project is version controlled with Git.

## Rationale

- ✅ Project uses Git for version control
- ✅ Git provides better change tracking than backup files
- ✅ Easy to review changes with `git diff`
- ✅ Simple to revert with `git checkout`
- ✅ Cleaner workspace (no `.backup` files cluttering directories)

## New Behavior

### Default (No Backups)

```bash
npm run validate-links -- --fix
```

Output:
```
ℹ No backups will be created (project is version controlled)
  Use --backup flag to create backups if needed

✓ Fixed 1523 issue(s)!
ℹ Use 'git diff' to review changes
```

### With Backups (Optional)

```bash
npm run validate-links -- --fix --backup
```

Output:
```
ℹ Backups will be created as .backup files

✓ Fixed 1523 issue(s)!
ℹ Backup files created with .backup extension
```

## Command Line Flags

| Flag        | Shorthand | Description                             |
| ----------- | --------- | --------------------------------------- |
| `--fix`     | `-f`      | Enable auto-fix mode                    |
| `--verbose` | `-v`      | Show detailed output for each fix       |
| `--backup`  | `-b`      | Create `.backup` files before modifying |

## Git Workflow (Recommended)

### 1. Commit Current State
```bash
git add .
git commit -m "Before link fixes"
```

### 2. Run Auto-Fix
```bash
npm run validate-links -- --fix
```

### 3. Review Changes
```bash
git diff --stat
git diff site/rover/
```

### 4. Test Changes
```bash
npm run dev
# Test links in browser
```

### 5. Commit or Revert

**If changes look good:**
```bash
git add .
git commit -m "Fix documentation links"
```

**If you want to undo:**
```bash
git checkout .
```

**If you want to undo specific files:**
```bash
git checkout site/rover/PUR-OVERVIEW/PUR-REPORT/PO-F2/README.md
```

## When to Use --backup Flag

Use the `--backup` flag if:

- You're testing the script on a non-git-controlled directory
- You want double-protection before making changes
- You're not comfortable with git revert commands
- Company policy requires file backups

Most users won't need the `--backup` flag since Git provides superior version control.

## Updated Documentation

The following files were updated to reflect this change:

- ✅ `scripts/validate-links.js` - Added `CREATE_BACKUPS` flag
- ✅ `scripts/README.md` - Updated usage instructions
- ✅ `scripts/QUICK-REFERENCE.md` - Updated commands
- ✅ `scripts/AUTO-FIX-GUIDE.md` - Updated safety section

## Benefits

1. **Cleaner workspace** - No `.backup` files to manage
2. **Better tracking** - Git shows exactly what changed
3. **Simpler workflow** - No need to clean up backup files
4. **Industry standard** - Using VCS for backups is best practice
5. **Flexible** - Can still create backups with `--backup` flag

## Migration Notes

If you previously ran the script with auto-backups:

```powershell
# Find existing backup files
Get-ChildItem -Recurse -Filter "*.backup"

# Remove them if no longer needed
Get-ChildItem -Recurse -Filter "*.backup" | Remove-Item
```

---

**Updated**: October 9, 2025  
**Change Type**: Non-breaking (backups now optional)  
**Impact**: Improved user experience and cleaner workspace
