# PN1456

<PageHeader />

## Description

A query filter involving one or more predicates and including AND WITHOUT *A0 (or @ID) = "some_value" only selects "some_value" instead of excluding "some_value".

## Previous Release Behavior

```text
make-demo-file 10 mdf jd
COUNT mdf WITH *A0 AND WITHOUT *A0 = "01"

 1 Records counted
```

## Current Release Behavior

```text
 9 Records counted
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
