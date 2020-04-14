# DELETELIST

<PageHeader />

**Tags:**
<badge text='lists' vertical='middle' />

## Description

The **DELETELIST** statement will delete the previously stored list named by expression.

```
DELETELIST expression
```

Where **expression** should evaluate to the name of a list that has been stored with either the [WRITELIST](./../writelist) statement or the **SAVE-LIST** command from the shell.

An example of use is as:

```
List = "JobList"
DELETELIST List
```

The above will delete the pre-saved list called JobList.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
