# PN1239

<PageHeader />

## Description

With `null_eq_zero = true`, a jQL query will match on `0` whereas jSQL will not.

## Previous Release Behavior

With **null_eq_zero = true**,

```
make-demo-file testfile 10 jd
```

Null out attribute 15 in one record.

```
SQLSELECT BIRTHDATE FROM mdf WHERE BIRTHDATE <> '0'
```

Returns 10 rows

## Current Release Behavior

Returns 9 rows.

## Notes

Dictionary must be either right justified or extended dictionary set to a numeric.

Back to [5.8.2 Release Notes](./../README.md)
  
<PageFooter />