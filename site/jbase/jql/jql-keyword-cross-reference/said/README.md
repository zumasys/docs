# SAID, SPOKEN, ~  

<PageHeader />

The **SAID** selection operator compares a field or EVAL expression against another field, EVAL expression or literal value and tests for the first item having the Soundex code given by the second.  

## Syntax

```
field SAID value
```

where:

**field** is the first field or EVAL expression to be compared.  
**value** is the second field, EVAl expression or literal value to be compared

## Example

In the following example:

```
LIST BOOK_SALES WITH SURNAME SAID 'COIL'
```

should find all items where the surname is "COYLE", "COLEY", "COWLEY".

Back to [Cross Reference](./../README.md)

<PageFooter />
