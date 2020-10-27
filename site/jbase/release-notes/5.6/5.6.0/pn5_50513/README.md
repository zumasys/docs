# PN5_50513

<PageHeader />

## Description

Case Independence: The 'not equal' operator (# <> >< NE) fails when comparing a variable with the concatenation of a literal and a variable

The issue could be seen by running the following test:

```
set/export JBCEMULATE=caseinsensitive
```

```
    PROGRAM not_equal_test
    firstname = 'daniel'
    lastname = 'klein'

* Test literal:
    variablename = 'danielklein'
    IF 'daniel':lastname = name THEN CRT '*equal*' ELSE CRT 'not equal'
    IF 'daniel':lastname # name THEN CRT 'not equal' ELSE CRT '*equal*'

* Test variable:literal
    name = 'kleindaniel'
    IF lastname:'daniel' = name THEN CRT '*equal*' ELSE CRT 'not equal'
    IF lastname:'daniel' # name THEN CRT 'not equal' ELSE CRT '*equal*'
```

## Previous Release Behavior

Output from test program:

```
*equal*
not equal
*equal*
not equal
```

## Current Release Behavior

Output from test program:

```
*equal*
*equal*
*equal*
*equal*
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
