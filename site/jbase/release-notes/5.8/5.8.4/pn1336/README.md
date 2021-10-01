# PN1336

<PageHeader />

## Description

If a TRANS() function uses a dictionary instead of a number for the ATTR parameter and the dictionary is a D type the attribute the dictionary points to should be used as the ATTR parameter instead of the result of the D type.

## Previous Release Behavior

```
TRANS('mdf',@ID,ZIP,'X')
```

Returns an empty column value.

## Current Release Behavior

Returns the same as the ZIP dictionary.

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
