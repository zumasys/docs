# FMT

<PageHeader />

The **FMT** keyword defines an alternative [output format](./../../../jbc/output-formatting/README.md) for the specified field.  

## Syntax

```
field FMT format.spec
```

where:

**field** is the field or EVAL expression to which the alternative format is to be applied.  
**format.spec** is the format specification to be applied.  

## Example

```
LIST BOOK_SALES EVAL "FORENAME : ' ' : SURNAME" AS FullName FMT "T15"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
