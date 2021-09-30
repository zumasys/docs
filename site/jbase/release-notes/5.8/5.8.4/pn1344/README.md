# PN1344

<PageHeader />

## Description

F-Correlatives in 'universe' emulation need integer calculation

## Previous Release Behavior

Universe processes all its calculations in F correlatives as integers, we need to emulate this.  
For example, this simple calculation gives the answer 3, instead of 3.3333

```
008 F:C100;C30;/
```

## Current Release Behavior

F-correlatives will perform maths on integers if this is set in Config_EMULATE

```
    integer_f_corr = true
```

The 'universe' emulation has been changed to reflect this.

[Back to 5.8.4 Release Notes](./../README.md)
  
<PageFooter />
