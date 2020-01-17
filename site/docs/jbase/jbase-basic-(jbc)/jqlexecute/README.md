# JQLEXECUTE

**Created At:** 9/14/2017 1:01:14 PM  
**Updated At:** 11/27/2018 10:13:05 AM  
**Original Doc:** [276783-jqlexecute](https://docs.jbase.com/36868-jbase-basic/276783-jqlexecute)  
**Original ID:** 276783  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='query language' vertical='middle' />

# Description

**JQLEXECUTE** starts executing a compiled jQL statement. It takes the general form:

```
JQLEXECUTE(Statement, SelectVar)
```

Where:

- **Statement** is the valid result of a call to a [JQLCOMPILE](./../jqlcompile)
- **SelectVar** is a valid select list used to limit the statement to a predefined set of items. For example:


```
SELECT PROGRAMMERS WITH IQ_IN_PTS > 250
LIST PROGRAMMERS NAME
```



This function returns -1 in the event of a problem, such as an incorrect statement variable. It will cause the **statement** to run against the database and produce a result set for use with [JQLFETCH](./../jqlfetch).

For a practical example of use, see the **jexport.b** program in the **$JBCRELELEASEDIR/****samples/JQLBASIC** directory.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
