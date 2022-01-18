# PN1405

<PageHeader />

## Description

A jQL query involving WITHOUT (dict = "somevalue") fails with Parse Error.

## Previous Release Behavior

```text
make-demo-file mdf 10 jd

COUNT mdf WITHOUT (mdf = '01')
Error in Statement "COUNT mdf WITHOUT (mdf = '01')"
Parse Error: .
```

## Current Release Behavior

```text
 9 Records counted
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
