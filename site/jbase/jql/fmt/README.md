# FMT

**Tags:**
<badge text='jql' vertical='middle'/>

## Description

The FMT keyword defines an alternative format for reported data.

```
Format
    field       FMT fmt.spec
where
    field       is the field or expression to which the new format
                is to be applied.
    fmt.spec    is the new format specification. This must be enclosed
                in single or double quotes.
```

The default format for reported data is taken from the dictionary entry for field or, for evaluated expressions, the first field referenced in the expression. The FMT field qualifier can be used to set an alternative format specification.

## Notes

This is based on the PI/Open syntax of the FMT command and not the D3 version.

### Examples

```
LIST ORDERS SITE.NAME FMT "32L"
```

This command reports records from the ORDERS file using a non-default format specification for the SITE.NAME field.

Back to [jQL](jbase-query-language-jql-)
