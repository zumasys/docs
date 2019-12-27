# BITCHANGE

**Created At:** 11/3/2017 1:56:04 PM  
**Updated At:** 1/5/2018 6:45:38 PM  
**Original Doc:** [284130-bitchange](https://docs.jbase.com/36868-jbase-basic/284130-bitchange)  
**Original ID:** 284130  
**Internal:** No  


# Description 

**BITCHANGE** toggles the state of a specified bit in the local bit table, and returns the original value of the bit. It takes the general from:

```
BITCHANGE(table_no)
```

Where:

table\_no specifies the position in the table of the bit to be changed.

For each process, it maintains a unique table of 128 bits (numbered 1 to 128) and treats each bit in the table as a two-state flag - the value returned will always be zero or one.

**BITCHANGE** returns the value of the bit before it was changed. You can therefore check and set (or reset) a flag in one step.
**BITCHANGE** also provides some special functions if you use one of the following table\_no values:

- -1 toggles (enables/disables) the BREAK key Inhibit bit.
- -2 toggles (enables/disables) the Command Level Restart feature.
- -3 toggles (enables/disables) the Break/End Restart feature.


An example of use is as:

```
OLD.VAL = BITCHANGE (100)
CRT OLD.VAL
```

If bit 100 in the table is zero, it sets to one and displays zero; the reverse will apply if set to one..



Go back to [jBASE BASIC.](./../jbase-basic-programmers-reference-guide)
