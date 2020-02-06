# MS Conversion

**Created At:** 6/8/2018 1:44:45 PM  
**Updated At:** 7/13/2018 1:20:09 PM  
**Original Doc:** [ms-conversion](https://docs.jbase.com/46351-conversion-processing/ms-conversion)  
**Original ID:** 321303  
**Internal:** No  

## Description

The MS code allows an alternate sort sequence to be defined for sort fields. It takes the general from:

```
MS
```

Use of the MS code is only relevant when used in a field 8 pre-process code and applied to a field that is specified in a sort clause. In all other cases it will be ignored.

The sort sequence to be used is defined in a special record named SEQ that you must create in the ERRMSG file. Field 1 of this record contains a sequence of ASCII characters that define the order for sorting.

### Example

```
SEQ (defined in ERRMSG file)
001 aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ9876543210 ,.?!"";:+-*/^=()[]{}<>@#$%&"~\|
```

INV.CODE (data definition record)

```
001 A
.
.
008 MS
```

```
SORT SALES BY INV.CODE INV.CODE ID-SUPP
```

```
SALES....
AbC789
ABC789
ABC788
dEF123
```

Back to [Conversion Processing](./../conversion-processing)
