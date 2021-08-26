# PN5_60888

<PageHeader />

## Description

A previously cataloged subroutine could get its shared library reused by a subsequent catalog of a different subroutine

### Previous Release Behavior

If you have more than one shared library as part of cataloging multiple subroutines and you decatalog all the subroutines in at least one shared library that is not the last in the lib.el (non-Windows) or lib.def (Windows) and then catalog a subroutine which will not fit in any of the existing shared libraries you can end up with subroutines without a valid shared-library as it has been reused by the re-catalog of the previously decataloged (or never before cataloged) subroutine(s).

For example,

```
1. Create a new lib and CATALOG a subroutine.
2. Edit the lib's jLibDefinition and change the maxsize value to "1"
3. CATALOG a different subroutine
4. DECATALOG the first subroutine
5. CATALOG the first subroutine
```

This would result in two lib0 shared libraries.

### Current Release Behavior

The catalog process now checks that a new shared library (if required) has not already been allocated.

Back to [5.7.3 Release Notes](./../jbase-5.7.3-release-notes/README.md)

<PageFooter />
