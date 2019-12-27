# SELECT 

**Created At:** 6/8/2018 2:02:48 PM  
**Updated At:** 6/6/2019 11:54:37 AM  
**Original Doc:** [select](https://docs.jbase.com/46350-jql/select)  
**Original ID:** 321322  
**Internal:** No  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

The statement generates an implicit list of record keys or specified fields based on the selection criteria specified. It takes the general form:

```
SELECT file-specifier {record-list} {selection-criteria} {sort-criteria} {output-criteria} {USING file-specifier} {(options}
```

where options are:

- **C**{**n**} Display running counters of the number of records selected and records processed. Unless modified by **n**, the counter increments after every 500 records processed or the total number of records if less than 500.
- **n** specifies a number other than 500 by which to increment. For example, **C25**increments the counter after every 25 records processed.




## Note: 


> The records will not be sorted unless you specify a sort criteria clause.




If an **output-criteria** clause is specified, the generated list will comprise the data (field) values defined by the clause, rather than the selected record keys.

If in jSHELL, when the command terminates, the total number of entries in the generated list is displayed and the list is made available to the next command, as indicated by the **&gt;**prompt.

If the **BY-EXP** or**BY-EXP-DSND** connectives are used on a multivalued field, the list will have the format:

**record-key]multivalue#**

where **multivalue#** is the position of the multivalue within the field specified with **BY-EXP**or **BY-EXP-DSND**. **multivalue#** can be accessed by a **READNEXT id,val** statement in a jBC program.



### EXAMPLE 1

```
SELECT SALES WITH S.CODE = "ABC]"
23 Records selected

>LIST SALES WITH VALUE > "1000"
```

Select all the records in SALES file with an S.CODE value that starts with ABC. Then, using the list, report on the records in the SALES file which have a VALUE field greater than 1000.

### 


### EXAMPLE 2

```
SELECT SALES WITH S.CODE = "ABC]"
23 Records selected

>SAVE-LIST SALES.ABC
```

Select all the records in SALES file with an S.CODE value that starts with ABC. Then save the list as SALES.ABC.

### EXAMPLE 3

This example illustrates how to select specific multivalues from a select-list generated with a BY-EXP clause.

First, generate 10 records like this:

```
make-demo-file 10 DEMOFILE JP
```

That command creates a jPlus hashed file called DEMOFILE with 10 data records created from random data, and a dictionary with the appropriate entries to access the data. Other than the usual header fields like name, address, phone, email, it also has 4 correlated multivalued fields in 11 thru 14 -- hardware, operating system, system type and number of users.

To see which records contain a hardware type of "HP", issue these jQL statements:

```
jsh ~ -->SSELECT DEMOFILE BY-EXP HARDWARE "HP"

 6 Records selected

>LIST DEMOFILE FIRSTNAME LASTNAME HARDWARE OS SYSTEMTYPE NUMUSERS ID-SUPP HDR-SUPP
```

Which will output something similar to:

```
First Name.............. Last Name........... Hardware....... OS............. MVDBASE................. Num Users

HARRY                    WALKER               HP              HPUX            jBASE                    1342
RON                      GATES                HP              LINUX RH7       D3                       986
PHILIP                   JOHNSON              HP              LINUX RH8       D3                       1566
AMANDA                   SMOOCH               HP              SOLARIS         IN2                      1096
DELLA                    JONES                HP              LINUX RH7       QM                       1601

 5 Records Listed
```



To see the actual value number, create this dictionary item:

```
ID: VALUENO
001 A
002 11
003
004
005
006
007
008 A;NV
009 R
010 7
```

You can then add that dictionary to the LIST statement after doing the SELECT, e.g.

```
LIST DEMOFILE FIRSTNAME LASTNAME VALUENO HARDWARE OS SYSTEMTYPE NUMUSERS ID-SUPP HDR-SUPP
```

The output then becomes:

```
First Name.............. Last Name........... VALUENO Hardware....... OS............. MVDBASE................. Num Users

HARRY                    WALKER                     3 HP              HPUX            jBASE                    1342
RON                      GATES                      3 HP              LINUX RH7       D3                       986
PHILIP                   JOHNSON                    1 HP              LINUX RH8       D3                       1566
AMANDA                   SMOOCH                     1 HP              SOLARIS         IN2                      1096
DELLA                    JONES                      3 HP              LINUX RH7       QM                       1601

 5 Records Listed
```



### EXAMPLE 4

Using the same file from Example 3, this jBC program generates an exploded select-list and then displays the record ID, the HARDWARE multivalue and its value number.

```
001     PROGRAM mvtest
002     OPEN "DEMOFILE" TO demofile ELSE STOP 201, "DEMOFILE"
003     EQU hardware TO 11
004     EXECUTE "SELECT DEMOFILE BY-EXP HARDWARE"
005     LOOP
006         READNEXT id, value_number ELSE EXIT
007         READ record FROM demofile, id THEN
008             CRT "ID: ":id, "Hardware: ":record<hardware, value_number>"#10":"Value number=":value_number
009         END
010     REPEAT
```



Back to [JQL](jbase-query-language-jql-)
