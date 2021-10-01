# PN1331

<PageHeader />

## Description  

An A correlative with N( dict) fails as " dict" is searched for instead of "dict".

## Previous Release Behavior

```
A;N( FIRSTNAME)
incurs the following error
Named Attribute  FIRSTNAME not found.
```

## Current Release Behavior

A-correlative works as if:

```
A;N(FIRSTNAME)
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
