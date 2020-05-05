# PN60853

<PageHeader />

## Description

Compiler fails to note a variable declared as a dimensioned array. This is when the array was passed as a parameter to a subroutine.

### Previous Release Behavior

There are special cases to handle in the compiler for known dimensioned arrays. The dimensioned arrays are scanned for in the compiler looking for COMMON, DIM and DIMENSION statements.

For the default emulation, if you pass a dimensioned array as a parameter, you always need a corresponding DIM statement like this

```
SUBROUTINE mysub(parm1 , MAT parm2)
DIM parm2(100,200)
```

In this case, the compiler would know that parm2 is a dimensioned array from the DIM statement.

However, for the emulations that support resizeable dimensioned arrays, the DIM statement is not needed. In this case, the compiler would fail to notice the dimensioned array passed in the SUBROUTINE statement ('parm2' in the above example) was a dimensioned array and so the special processing would fail.

### Current Release Behavior

All dimensioned arrays passed via the SUBROUTINE statement are now correctly identified as dimensioned arrays.

Back to [5.7.2 Release Notes](./../jbase-5.7.2.1-release-notes/README.md)

<PageFooter />
