# BITCHECK

**Created At:** 11/3/2017 2:03:38 PM  
**Updated At:** 1/5/2018 6:45:49 PM  
**Original Doc:** [284132-bitcheck](https://docs.jbase.com/36868-jbase-basic/284132-bitcheck)  


# Description 

**BITCHECK** returns the current value of a specified bit from the local bit table. It takes the general form:

```
BITCHECK(table_no)
```

Where:

table\_no specifies the position in the table of the bit for checking.

For each process, the function maintains a unique table of 128 bits (numbered 1 to 128) and treats each bit in the table as a two-state flag - the value returned will always be zero or one.**BITCHECK** also provides some special functions if one of the following table\_no values is used:

- -1 returns the setting of the BREAK key Inhibit bit
- -2 returns the setting of the Command Level Restart feature
- -3 returns the setting of the Break/End Restart feature




Go back to [jBASE BASIC.](./../jbase-basic-programmers-reference-guide)
