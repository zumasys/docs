# PN1314

<PageHeader />

## Description

A jQL expression involving multiple (( )) surrounding IF/WITH predicates requires that the inner IF/WITH is outside the inner (  )

## Previous Release Behavior

```
Error in Statement "LIST mdf ((WITH FIRSTNAME = 'RAPH'))"
Parse Error: .
```

### Current Release Behavior

```
LIST mdf ((WITH FIRSTNAME = 'RAPH'))
is now interpreted as
LIST mdf (WITH (FIRSTNAME = 'RAPH'))
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
