# JCL IF  S

**Created At:** 5/28/2018 11:04:16 AM  
**Updated At:** 6/6/2019 8:22:41 AM  
**Original Doc:** [318701-jcl-if-s](https://docs.jbase.com/45792-jcl/318701-jcl-if-s)  
**Original ID:** 318701  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command conditionally executes a command depending on the presence or absence of an active select list. It takes the general form:

```
IF {#} S command
```

where:

- # tests for the absence of an active select list.
- command is a valid jCL  command.




## Note: 


> IF S  will execute command if there is an active select list. IF # S will execute command if there is not an active select list.




###### EXAMPLE

```
021 HSELECT SALES WITH VALUE > "1000"
022 PH
023 IF S  G 100
```

If the **SELECT** command generates an active select list, control will be transferred to label 100.


