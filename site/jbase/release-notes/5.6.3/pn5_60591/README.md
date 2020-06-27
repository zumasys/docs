# PN5_60591

<PageHeader />  

## Description

jQL: Issue with A/F correlative using Repeat function

## Current Release Behavior

Prior to this patch, A/F correlatives of the form:

```
A;11:8R(G1-2)
F;11;8R(G1-2);:
```

would not repeat attribute 8.

This was a case where the jQL parser was not operating on the right-hand side of the formula when there was a conversion.

Back to [5.6.3 release Notes](./../README.md)

<PageFooter />
