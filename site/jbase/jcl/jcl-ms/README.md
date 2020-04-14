# jCL MS

<PageHeader />

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='secondary' vertical='middle' />
<badge text='copy' vertical='middle' />

## Description

This command moves the entire content of the secondary input buffer to the primary input buffer. It takes the general form :

```
MS
```

## Note

> MS copies the entire content of the secondary input buffer and inserts the parameters before the parameter currently pointed to in the primary input buffer. The primary input buffer must be active when MS is executed. After the move, the secondary input buffer will be empty.

Hold file numbers are returned as Entry #n, where "n" is the hold file number.

### Example

```
PQN
HSP-ASSIGN HS
P
HCOPY SALES ABC (P
P
S10
...
MS
...
```

The COPY command on line 4 creates a print file and the hold file number is written to the SIB. The S10 command on line 6 positions the PIB buffer pointer to parameter 10. The MS command on line 8 moves the contents of the SIB into the PIB starting at the 10th parameter of the PIB.

Back to [jCL.](./../README.md)
  
<PageFooter />