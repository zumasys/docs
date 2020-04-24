# Field Qualifiers  

<PageHeader />

By default, formatting & conversion are defined by a field’s DICTionary entry.  

If the behaviour defined in the DICTionary needs to be overridden for any reason, there are a number of different qualifiers that may be used in jQL statements.

## Syntax  

| jQL Field Qualifier        | Description |
| ---                        | ---         |  
| AS                         | Specifies a synonym for a field name or a name for an EVAL expression |  
| ASSOC                      | Associates a field expression with an association of multi-values |  
| ASSOC.WITH                 | Associates a field expression with another multi-value |  
| COL.HDG                    | Defines a column heading |  
| CONV                       | Defines a conversion |  
| DISPLAY.LIKE               | Copies the display characteristics of another field |  
| MULTI.VALUE, MULTIVALUED   | Specifies a multi-valued field expression |  
| SINGLE.VALUE, SINGLEVALUED | Specifies a single-valued field expression |                                             |  

### Example

```
>LIST HAT.TYPE HAT.SIZE DISPLAY.LIKE PRICE COL.HDG “Hat sizes available”

HAT.TYPE    Hat sizes available
Trilby      10
Top Hat     13
```

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />
