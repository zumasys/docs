# Sort Criteria Clause  

<PageHeader />

The sort criteria clause allows you to specify the presentation order of the records in the report.

## Syntax

```
BY field
BY-DSND field
BY-EXP field {print-limiter}
BY-EXP-DSND field {print limiter}
```

**print limiter** has the form:

```
{relational operator} “value string” {{logical connective} {relational operator} “value string”}...
```

**field** is the name of a data definition records.

| <!----> |  <!----> |
| --- | --- |
| BY      |  Specifies a single value sort that will order the records according to an ascending sequence based on the first value in the specified field |  
| BY-DSND | Specifies a single value sort the which will order the records according to a descending sequence based on the first value in the specified field |  
| BY-EXP  | Specifies a multivalue sort that will order the multivalues of the specified field according to an ascending sequence based on the first subvalue in each multivalues element |  
| BY-EXP-DSND | Specifies a multivalues sort that will order the multivalues of the specified field according to a descending sequence based on the first subvalue in each multivalued element |  

## Comments

Each sort clause comprises a sort connective followed by a field name.  
The sort connective can specify an ascending or descending sort sequence of single or multivalued fields.  
If you include more than one sort of criteria clause, the processor ranks the clauses in a left to right, most to least important hierarchical sequence.  
Always used as the least important sort value, unless explicitly included in the SORT criteria is the record key.  
The precise sorting sequence depends on whether a field is left - right justified.  

## Default sort order  

If you do not specify a sort criteria clause for a sorting command, the report is output in ascending order by record key.  
Field 9 of the file definition (pointer) record specifies left or right justification of the key.  

The default is a left justified sort.

### To be completed

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />
