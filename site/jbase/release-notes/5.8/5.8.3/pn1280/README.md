# PN1280

<PageHeader />

## Description

Make the IF command case insensitive.

## Previous Release Behavior

For example:

```
if A = 10 G 1000
```

would produce an 'Invalid statement` error.

## Current Release Behavior

The IF command can be specified in any case, e.g. if, IF iF, If

This change also allows the IFN statement to be case insensitive.

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
