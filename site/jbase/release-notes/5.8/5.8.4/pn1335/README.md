# PN1335

<PageHeader />

## Description

BASIC FMT returns CHAR(251) and space padding when wrapping is implied.

With 'wrap_r_just=true' set in Config_EMULATE, the right justified columns in jQL wrap.  

For example, 12345 right justified in a field of 3 will wrap as:

```
 123
  45
```

If a variable is defined in a jBC program such as:

```
A = FMT('12345','3R')
```

it returns 123 char(251) space 45 as the value for A.  
In UniVerse, this would return 123.  
As FMT is a UniVerse\/PI Open style function, we will follow their convention.

## Previous Release Behavior

```
A = FMT('12345','3R') returns 123 char(251) space 45 as value for A
```

## Current Release Behavior

```
A = FMT('12345','3R') returns 123 as value for A
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
