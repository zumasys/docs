# JQLCOMPILE

**Created At:** 9/14/2017 12:46:46 PM  
**Updated At:** 11/27/2018 8:45:16 AM  
**Original Doc:** [276773-5-jqlcompile](https://docs.jbase.com/36868-jbase-basic/276773-5-jqlcompile)  
**Original ID:** 276773  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='query language' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

**JQLCOMPILE** compiles a jQL statement. It takes the general form:

```
JQLCOMPILE(Statement, Command, Options, Messages)
```

Where:

- **Statement** is the variable, which will receive the compiled statement, used by a majority of functito execute and work on the result set etc.
- **Command** is the actual jQL query to be compiled (such as [SELECT](./../select) or something similar).
- **Option**: you must specify **JQLOPT\_USE\_SELECT** to supply a select list to the [JQLEXECUTE](./../jqlexecute) function; the compile builds a different execution plan if using select lists.
- If the statement fails to compile, the **message** dynamic array is in the **STOP** format, therefore **STOP** messages can be programmed and printed. Provides a history of compilation for troubleshooting purposes; Returns -1 if there is a problem found in the statement and 0 for no problem.

Using **RETRIEVE** to obtain data records as the verb rather than an existing jQL verb, will ensure that the right options are set internally. In addition, using any word that is not a jQL reserved word as the verb will work in the same way as **RETRIEVE**.

Simply put : implement a **PLOT** command that passes the entire command line into **JQLCOMPILE** and the results will be the same as if the first word were replaced with **RETRIEVE**.

For a practical example of use, see the **jexport.b** program in the **$JBCRELELEASEDIR/****samples/JQLBASIC** directory.

Go back to [jBASE BASIC](./../README.md)
