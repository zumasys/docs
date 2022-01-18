# PN5_50528

<PageHeader />

## Description

jQL: Incorrect results when using BY-EXP expressions with Print Limiting

## Previous Release Behavior

If a limiting expression was used with BY-EXP, e.g.:

```text
LIST filename BY-EXP MYCOL EQ "42" ...
```

If the result was coming from a correlative or an I-type, the expresson was applied to the whole attribute rather than each multi-value.

## Current Release Behavior

The current behavior is to apply the correlative/I-type to each multi-value.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
