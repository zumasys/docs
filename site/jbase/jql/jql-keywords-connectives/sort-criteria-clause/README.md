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

## Sort Order of Left justified Data

When sorting a left justified field the data is compared one character at a time, left to right. For this reason number two will follow number 11 in an ascending sequence. The number 02 would appear before 11 in an ascending sequence.  
The sort connectives for single valued fields sort the record orders according to the value of a field. 

The two sort connectives for single value fields are:  

```
BY for an ascending sort
BY-DSND for a descending sort
```

If using a single value sort connective with a field that contains multivalues or subvalues, it only uses the first value in the field as the sort key.

## Sorting Multivalued Fields

The sort connectives for multivalued fields sort values within a field.  
The two sort connectives for multivalues are:  

```
BY-EXP for ascending order
BY-EXP-DSND for descending order
```

If using a multiple value sort connective with a file, which contains subvalues, it only uses the first subvalue in each multivalue as the sort key.  
The treatment of each value is as if it were the only value so that each value occupies a line of output in the report. This effectively “explodes” a record into multiple records. You can limit the values for sorting and output by including a print limiter with the multivalue sort connectives.
When using a SELECT-type command with BY-EXP the formatting of the records list appears:

```
record-key]multi-value#
```

Where: **multi-value#** is the position of the multivalue within the field. The READNEXT statement in a jBASIC program can use this value.  

### Example 1

```
SORT SALESORDER WITH S.CODE = “ABC]”ORD.COST => ‘500’ BY S.CODE ORD.COST
```

Selects the records in the ORDER file in which the ORD.COST file contains the values of the order and must sort the orders greater than or equal to 500. The output in the records is in ORD.COST order.  

### Example 2

```
SORT ORDER WITH ORD.COST = ‘500’ BY ORD.COST BY-DSND ORD.ID
```

### Example 3

```
SORT ORDER BY-EXP ORD.ID
```

Selects all the records in the Order file and outputs the detail lines in key order within P.CODE order.  

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />
