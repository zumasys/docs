# CONV

**Tags:**
<badge text='jql' vertical='middle'/>

## Description

The CONV keyword defines an alternative conversion for reported data.

```
Format
    field CONV conv.spec

where

    field       is the field or expression to which the new conversion
                is to be applied.

    conv.spec   is the new conversion specification.  This mus be enclosed
                in single or double quotes.
```
The default conversion for reported data is taken from the dictionary entry for field or, for evaluated expressions, the first field referenced in the expression. The CONV field qualifier can be used to set an alternative conversion specification.

### Examples

```
LIST ORDERS ORDER.DATE CONV "D4-"
```

Back to [jQL](jbase-query-language-jql-)
