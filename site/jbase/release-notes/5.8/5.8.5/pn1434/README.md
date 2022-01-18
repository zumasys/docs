# PN1434

<PageHeader />

## Description

A jQL query with two or more WITH NO clauses causes a Parse Error: WITH.

## Previous Release Behavior

Create a file using make-demo-file.  

Edit a record and replace the first two attributes with null.

```text
COUNT mdf WITH NO FIRSTNAME AND WITH NO LASTNAME
Error in Statement "COUNT mdf WITH NO FIRSTNAME WITH NO LASTNAME"
Parse Error: WITH.
```

## Current Release Behavior

```text
1 Records counted
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
