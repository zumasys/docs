# JBASE_PIVOT_YEAR

**Created At:** 19/2/2020 5:45:39 PM  
**Updated At:** 19/2/2019 5:45:12 PM  
**Original Doc:** n/a
**Original ID:** n/a
**Internal:** No  

## Description

Set pivot year for full year calculation when doing a MD conversion on a 2 digit year.  Default is 30.  This means if YY < 30 then it is caluclated as 19YY, else 20YY.

## Default

30

## Setting

## UNIX

```
export JBASE_PIVOT_YEAR=40
```

## Windows

```
set JBASE_PIVOT_YEAR=40
```

## Note

> The 30 will be replaced with this option.

Back to [Environment Variables](./../README.md)
