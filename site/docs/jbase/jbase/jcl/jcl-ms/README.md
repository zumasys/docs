# JCL MS

**Created At:** 5/28/2018 11:13:30 AM  
**Updated At:** 6/1/2018 5:25:21 PM  
**Original Doc:** [318729-jcl-ms](https://docs.jbase.com/45792-jcl/318729-jcl-ms)  
**Original ID:** 318729  
**Internal:** No  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='secondary' vertical='middle' />
<badge text='copy' vertical='middle' />

## Description 

This command moves the entire content of the secondary input buffer to the primary input buffer. It takes the general form :

```
MS
```

## Note: 


> MS copies the entire content of the secondary input buffer and inserts the parameters before the parameter currently pointed to in the primary input buffer. The primary input buffer must be active when MS is executed. After the move, the secondary input buffer will be empty.


Hold file numbers are returned as Entry #n, where "n" is the hold file number.



###### EXAMPLE

```
001 PQN
002 HSP-ASSIGN HS
003 P
004 HCOPY SALES ABC (P
005 P
006 S10
008 MS
...
```

The COPY command on line 4 creates a print file and the hold file number is written to the SIB. The S10 command on line 6 positions the PIB buffer pointer to parameter 10. The MS command on line 8 moves the contents of the SIB into the PIB starting at the 10th parameter of the PIB.

Back to [JCL Commands](./../jcl-commands).
