# PN1406

<PageHeader />

## Description

A jQL query using WITH NO (criteria) fails

## Previous Release Behavior

```text
make-demo-file 10 mdf jd
COUNT mdf WITH NO (mdf = '01''02')
Error in Statement "COUNT mdf WITH NO (mdf = '01''02')"
Parse Error: .
```

## Current Release Behavior

```text
 8 Records counted
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
