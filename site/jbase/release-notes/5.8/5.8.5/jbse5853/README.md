# JBSE-5853

<PageHeader />

## Description

In some emulations, an object property is created as a numeric instead of as a string

## Previous Release Behavior

In the supplied example, the property "zipcode" is created as a numeric object rather than the expected string:

```text
    jbse5853.jabba
001     program jbse5853
002 *
003     obj1 = new object("Brent")
004     zipcode = '12345'
005     obj1->zip1 = zipcode
006     json = obj1->$tojson()
007     crt json
008 end

jsh SandBox ~ -->jbse5853
{"zip1":12345}
```

## Current Release Behavior

```text
jsh SandBox ~ -->jbse5853
{"zip1":"12345"}
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
