# WRITELIST

**Created At:** 10/4/2017 11:56:15 AM  
**Updated At:** 1/5/2018 6:31:51 PM  
**Original Doc:** [279569-writelist](https://docs.jbase.com/36868-jbase-basic/279569-writelist)  
**Original ID:** 279569  
**Internal:** No  

## Description

**WRITELIST** allows the program to store a list held in a jBASE BASIC variable to the global list file. It takes the general form:

```
WRITELIST variable ON|TO expression {SETTING setvar} {ON ERROR statements}
```

Where:

**variable** is the variable in which the list is held.

**expression** should evaluate to the required list name. If **expression** is null, it writes the list to the default external list.

If the **SETTING** clause is specified and the write fails, it sets **setvar** to one of t[hese values](./../incremental-file-errors).

An example of use is as:

```
WRITELIST MyList ON "MyList"
```

See also: [DELETELIST](./../deletelist), [READLIST](./../readnext), [FORMLIST](./../formlist)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
