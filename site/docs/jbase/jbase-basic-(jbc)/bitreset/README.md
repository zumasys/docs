# BITRESET

**Created At:** 11/3/2017 2:33:12 PM  
**Updated At:** 1/5/2018 6:47:16 PM  
**Original Doc:** [284140-bitreset](https://docs.jbase.com/36868-jbase-basic/284140-bitreset)  
**Original ID:** 284140  
**Internal:** No  


# Description

**BITRESET** resets the value of a specified bit in the local bit table to zero and returns the previous value of the bit. It takes the general form:

```
BITRESET(table_no)
```

Where:

table\_no specifies the position in the table of the bit for reset. If table\_no evaluates to zero, it resets all elements in the table to zero and returns the value zero.

For each process, **BITRESET** maintains a unique table of 128 bits (numbered 1 to 128) and treats each bit in the table as a two-state flag - the value returned will always be zero or one.

**BITRESET** returns the previous value of the bit – you can reset and check a flag in one step. **BITRESET** also provides some special functions if you use one of the following table\_no values:

- -1 resets the BREAK key Inhibit bit
- -2 resets the Command Level Restart feature
- -3 resets the Break/End Restart feature


An example of use is as:

```
OLD.VALUE = BITRESET (112)
CRT OLD.VALUE
```

If table entry 112 is one, it returns a value of one, resets bit 112 to 0, and prints one. If table entry 112 is zero, returns a value of 0, and prints 0.



See also: [BITSET](./../bitset).

Go back to [jBASE BASIC.](./../jbase-basic-programmers-reference-guide)
