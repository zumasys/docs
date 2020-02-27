# DELETELIST

**Created At:** 8/23/2017 1:25:23 PM  
**Updated At:** 10/24/2018 11:00:24 PM  
**Original Doc:** [268475-deletelist](https://docs.jbase.com/36868-jbase-basic/268475-deletelist)  
**Original ID:** 268475  
**Internal:** No  

**Tags:**
<badge text='lists' vertical='middle' />

## Description 

The **DELETELIST** statement will delete the previously stored list named by expression.

```
DELETELIST expression
```

Where the**expression** should evaluate to the name of a list that has been stored with either the [WRITELIST](./../writelist) statement or the **SAVE-LIST** command from the shell.

An example of use is as:

```
List = "JobList"
DELETELIST List
```

The above will delete the pre-saved list called JobList.

Go back to [jBASE BASIC](./../README.md)
