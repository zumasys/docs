# PN1441

<PageHeader />

## Description

A jQL query on an indexed file fails with internal error 9 if the query involves parentheses

## Previous Release Behavior

```text
make-demo-file mdf 
CREATE-INDEX mdf FIRSTNAME 
COUNT mdf WITH (FIRSTNAME = 'PAT' OR FIRSTNAME = 'HERVE')

Error in Statement "COUNT mdf WITH (FIRSTNAME = 'PAT' OR FIRSTNAME = 'HERVE')"
Internal jQL Error 9.
```

## Current Release Behavior

Query now works as expected.

```text
 ... Records counted.
```

## Notes

This is new behaviour when compared to [PN1405](./../pn1405/README.md)

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
