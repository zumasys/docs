# PN1337

<PageHeader />

## Description

An IF-THEN-ELSE expression where the result expressions are compound (e.g. 'str1':'str2') processes the compound expression before the IF-THEN-ELSE

## Previous Release Behavior

In an I-type:

```
IF 1 THEN 'one' ELSE 'not':'one'
```

Produces 'oneone'

## Current Release Behavior

Produces 'one'

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
