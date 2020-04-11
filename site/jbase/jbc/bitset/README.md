# BITSET

**Created At:** 11/3/2017 2:39:08 PM  
**Updated At:** 12/24/2018 4:09:38 PM  
**Original Doc:** [284141-bitset](https://docs.jbase.com/36868-jbase-basic/284141-bitset)  
**Original ID:** 284141  
**Internal:** No  

**Tags:**
<badge text='bitset' vertical='middle' />

## Description

**BITSET** sets the value of a specified bit in the bit table to one and returns the value of the bit before it was changed. It takes the general form:

```
BITSET(table_no)
```

Where:

**table\_no** specifies the bit to be SET. If **table\_no** evaluates to zero, it sets all elements in the table to one and the returned value is one.

For each purpose, **BITSET** maintains a unique table of 128 bits (numbered 1 to 128) and treats each bit in the table as a two-state flag - the value returned will always be zero or one.
**BITSET** returns the previous value of the bit - you can check and set a flag in one step.
**BITSET** also provides some special functions if you use one of the following **table\_no** values:

- -1 sets the BREAK key Inhibit bit
- -2 sets the Command Level Restart feature
- -3 sets the Break/End Restart feature

An example of use is as:

```
OLD.VALUE = BITSET (112)
CRT OLD.VALUE
```

If table entry 112 is zero, returns a value of zero, sets bit 112 to one, and prints zero. If table entry 112 is one, returns a value of one, and prints one.

See also: [BITRESET](./../bitreset).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
