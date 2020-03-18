# READLIST

**Created At:** 9/27/2017 2:23:15 PM  
**Updated At:** 11/26/2018 10:18:07 PM  
**Original Doc:** [278658-readlist](https://docs.jbase.com/36868-jbase-basic/278658-readlist)  
**Original ID:** 278658  
**Internal:** No  

**Tags:**
<badge text='lists handling' vertical='middle' />
<badge text='record handling' vertical='middle' />

## Description

**READLIST** allows the program to retrieve a previously stored list, into a variable. It takes the general form:

```
READLIST variable1 FROM expression {SETTING variable2} THEN|ELSE statement
```

Where:

- **variable1** is the variable into which the list will be read.
- **expression** should evaluate to the name of a previously stored list to retrieve. If specified, **variable2** will be set to the number of elements in the list.
- If the statement succeeds in retrieving the list, then the statements associated with any **THEN** clause will be executed. If the statement fails to find the list, then the statements associated with any **ELSE** clause will be executed.

The **READLIST** statement is identical in function to the [GETLIST](./../getlist) statement.

An example of use is as:

```
READLIST MyList FROM "MyList" ELSE STOP
LOOP
* Loop until there are no more elements
WHILE READNEXT Key FROM MyList DO
......
REPEAT
```

See also: [DELETELIST](./../deletelist), [FORMLIST](./../formlist), [WRITELIST](./../writelist)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
