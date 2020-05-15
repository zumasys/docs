# CONV

<PageHeader />

The **CONV** keyword defines an alternative conversion for a field.

## Syntax

```
field CONV conversion
```

where:

**field** is the field or EVAL expression to which the alternative conversion is to be applied.  
**conversion** is the [conversion](./../../../conversion-processing/conversion-processing/README.md) specification to be used.  

## Example

```
>LIST ORDERS CUST.NAME VALUE DATE CONV "D4/"
```

would result in the ORDER DATE being output in "DD/MM/YYYY" or "MM/DD/YYYY" format, depending on locale.

Back to [Cross Reference](./../README.md)

<PageFooter />
