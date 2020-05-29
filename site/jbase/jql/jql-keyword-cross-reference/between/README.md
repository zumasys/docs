# BETWEEN  

<PageHeader />

The **BETWEEN** operator is used to compare a field or EVAL expression against two other fields, EVAL expressions or literal values to check whether the value of the first item falls between the other two values.

## Syntax

```
field BETWEEN value1 value2
```

where:

**field** is the first field or EVAL expression to be compared.  
**value1** is the lower of the values to be returned.  
**value2** is the higher of the values to be returned.  

## Example

```
LIST ORDERS WITH PART.NO BETWEEN "75" "110" DATE CUSTNO PART.NO
```

Back to [Cross Reference](./../README.md)

<PageFooter />
