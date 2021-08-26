# PN5_50520

<PageHeader />

## Description

jSQL: ODBC dictionary parsing issue

## Previous Release Behavior

Prior to this patch, spaces in attribute 2 of a dictionary item would cause the dictionary to be flagged as invalid and the statement would fail, e.g.

```
jsh danielk ~ -->SQLSELECT FIRSTNAME,LASTNAME FROM CUST
WARNING, Dict item [FIRSTNAME][A/1 /First Name//////L/24] is invalid and will be ignored
Error in Statement "SELECT  FIRSTNAME, LASTNAME FROM CUST"
Error in attribute definition item FIRSTNAME
Parse Error: Not numeric.
```

## Current Release Behavior

Spaces are allowed in attribute 2 of dictionary items.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
