# PN1353

<PageHeader />

## Description  

Multiple conversions in an F-correlative involving a multivalue attribute are not operating on all values.

## Previous Release Behavior

The following correlative repeats operations on attribute 6 for the first round conversions but not the second:

```
F;6;(G0*2);(TORD-ITEMS*AC;X;10;10);6;(G0*2);(TORD-ITEMS*AC;X;9;9);-
```

## Current Release Behavior

Behaes as expected

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
