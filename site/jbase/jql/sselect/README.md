# SSELECT

**Created At:** 6/8/2018 2:04:42 PM  
**Updated At:** 7/13/2018 10:13:16 AM  
**Original Doc:** [sselect](https://docs.jbase.com/46350-jql/sselect)  
**Original ID:** 321326  
**Internal:** No  

## Description

SSELECT generates an implicit list of record keys or specified fields, based on the selection criteria specified. It takes the general form:

```
SSELECT file-specifier {record-list} {selection-criteria} {sort-criteria} {output-criteria} {USING file-specifier} {(options}
```

where options are:

- **C{n}** Display running counters of the number of records selected and records processed. Unless modified by **n**, the counter increments after every 500 records processed or the total number of records if less than 500.
- **n** specifies a number other than 500 by which to increment. For example, C25 increments the counter after every 25 records processed.

## Note

> The records will be sorted in key order unless a sort criteria clause is specified.

If **output-criteria** is defined, the generated list will comprise the data (field) values defined by the clause, rather than the selected record keys.

When the command terminates, the total number of entries in the generated list is displayed and the list is made available to the next command. This is indicated by the "&gt;" prompt if in jSHELL.

If the **BY-EXP** or **BY-EXP-DSND** connectives are used on a multivalued field, the list will have the format:

**record-key]multivalue#**

where multivalue# is the position of the multivalue within the field specified by BY-EXP or BY-EXP-DSND. multivalue# can be accessed by a READNEXT Var,n statement in a jBC program.

### Example 1

```
SSELECT SALES WITH S.CODE = "ABC]"
23 Records selected
>LIST SALES WITH VALUE > "1000"
```

Select all the records in SALES file with an S.CODE value that starts with ABC. Sort the list into key order. Then, using the list, report on the records in the SALES file which have a VALUE field greater than 1000.

### Example 2

```
SSELECT SALES WITH S.CODE = "ABC]" BY P.CODE
23 Records selected
>SAVE-LIST SALES.ABC
```

Select all the records in SALES file with an S.CODE value that starts with ABC. Sort the list into P.CODE order and then save the list as SALES.ABC.

See also the [SELECT](https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/jql2_SELECT.htm) command.

Back to [jQL](jbase-query-language-jql-)

  
<PageFooter />
