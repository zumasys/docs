# JCL PQ-SELECT

**Created At:** 5/28/2018 10:17:27 AM  
**Updated At:** 6/6/2019 8:24:02 AM  
**Original Doc:** [jcl-pq-select](https://docs.jbase.com/45792-jcl/jcl-pq-select)  


## Description 

This command when executed from a **jCL** program, loads a list of keys into a select register. It takes the general form:

```
PQ-SELECT  register-number
```

Where register-number is the number of the select register (1 to 5) in which the keys are to be placed.



## Note:


> To use **PQ-SELECT**  a list **must** first be constructed using one of the list processing commands such as SELECT, SSELECT , QSELECT, BSELECT, GET-LIST, FORM-LIST, SEARCH or ESEARCH. Put the PQ-SELECT  command in the stack so that it will be processed as part of the external job stream when the required list is active.
> 
> Retrieve the list elements one at a time, using a "!n" direct or an indirect reference.
> 
> PQ-SELECT  cannot be executed directly from the shell.




##### EXAMPLE

```
001 PQN
002 HSSELECT SALES
003 STON
004 HPQ-SELECT  1
005 P
006 10 MV %1 !1
007 IF # %1 X Done
008 T %1
009 GO  10
```



This example selects all the records in the SALES file, loads the record-list into select register 1 and displays the keys one at a time.

Back to [JCL Commands](./../jcl-commands)
