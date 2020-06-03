# TO

<PageHeader />

The **TO** keyword used in a [SELECT](./../../select/README.md), [SSELECT](./../../sselect/README.md) to specify the select list to be created.

## Syntax

```
TO list.number
```

where:

**list.number** is an integer from 0 to 10, whch designates the list to be created.

If the **TO** keyword is not present, the default list, 0, will be created.

## Example

```
SELECT PARTS WITH STOCK > 100 TO 1
```

See also [FROM](./../from/README.md)

Back to [Cross Reference](./../README.md)

<PageFooter />
