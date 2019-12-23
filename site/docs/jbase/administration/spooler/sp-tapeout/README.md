# SP-TAPEOUT

**Created At:** 9/18/2018 8:15:28 AM  
**Updated At:** 1/24/2019 8:21:32 AM  
**Original Doc:** [sp-tapeout](https://docs.jbase.com/44205-spooler/sp-tapeout)  

**Tags:**
<badge text='spooler tape ' vertical='middle' />

## Description 

Reads spooled print jobs from a tape device and requeues them to the current formqueue assignment. The command takes the general form:

```
SP-TAPEOUT (n
```

where **n** is the number of print jobs to read and requeue.



### EXAMPLE

Attach the tape device using the [T-ATT](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/tap2_T_ATT.htm) command and use [T-FWD](./../../../jbase/tape/t-fwd), if required, to position the tape media to the required print job record.

Assign the required formqueue by using the SP-ASSIGN command.

Execute the SP-TAPEOUT command.

```
SP-TAPEOUT (4
```

This command will read the next four print job files and spool them to the currently assigned formqueue.



Back to [Spooler](./../jbase-spooler).
