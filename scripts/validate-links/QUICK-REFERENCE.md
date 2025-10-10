# Link Validator - Quick Reference

## Run the Script

**Check only (no changes):**

```bash
cd site
npm run validate-links
```

**Auto-fix issues:**

```bash
cd site
npm run validate-links -- --fix
```

**Auto-fix with verbose output:**

```bash
cd site
npm run validate-links -- --fix --verbose
```

**Create backups (optional):**

```bash
cd site
npm run validate-links -- --fix --backup
```

## Understanding Output

### ✗ Invalid Path (Red)
The target file/directory doesn't exist. The link is completely broken.

**Action**: Find the correct location and update the link.

### ⚠ Missing /README.md (Yellow)
The directory exists but the link doesn't end with `/README.md`.

**Action**: Append `/README.md` to the link.

**Example**:
```markdown
# Before
[PO Entry](PO-E)

# After
[PO Entry](PO-E/README.md)
```

## Common Fixes

### Fix #1: Add /README.md

```markdown
❌ [Text](folder-name)
✅ [Text](folder-name/README.md)
```

### Fix #2: Simplify Relative Paths

```markdown
❌ [PO.E](../../../../../../../rover/AP-OVERVIEW/.../PO-E)
✅ [PO.E](../../PUR-ENTRY/PO-E/README.md)
```

### Fix #3: Use Relative Paths, Not Absolute

```markdown
❌ [Guide](/pos-connect/README.md)
✅ [Guide](../pos-connect/README.md)
```

## Save Results

### Windows PowerShell
```powershell
npm run validate-links 2>&1 | Tee-Object -FilePath report.txt
```

### Linux/Mac
```bash
npm run validate-links 2>&1 | tee report.txt
```

## Tips

1. **Commit before fixing** - Create a clean git state: `git add . && git commit`
2. **Review with git diff** - See exactly what changed: `git diff`
3. **Test locally** - Verify fixes work in local dev server
4. **No backups needed** - Project is version controlled (use `--backup` if desired)
5. **Check VuePress routing** - Remember VuePress drops `/README.md` in URLs

## Exit Codes

- `0` = All links valid ✓
- `1` = Issues found ✗

Perfect for CI/CD pipelines!
