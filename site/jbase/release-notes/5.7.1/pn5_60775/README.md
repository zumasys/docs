# PN5_60775

<PageHeader />

## Description

Provide case insensitivity for IF statement comparisons

### Previous Release Behavior

A PROC such as:

```
PQN
IP
IF A = Y X
```

would not allow the entry of a lower case 'y'.

### Current Release Behavior

IF statement comparisons are now case insensitive.

Pattern matches are not affected; patterns must match exactly.

PROC statements like:

```
IF A = Y
IF A = all
```

now allow:

```
Y or y
ALL, all, All, aLl, ...
```

However, if you have

```
IF A = (1N/a2N)
```

then this will match entries like:

```
1/a22
9/a99
```

but will not match:

```
1/A22
9/A99
```

Requires **generic\_d3 = true** in Config\_EMULATE

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
