# PN5_60593

**Created At:** 10/2/2017 10:58:08 AM  
**Updated At:** 11/22/2017 11:03:20 AM  
**Original Doc:** [pn5_60593](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60593)  
**Original ID:** 279035  
**Internal:** No  

## Description

jBC: D3 style input timeout

### Previous Release Behavior

In D3 emulation, the jBC statements:

```
IN c FOR 0 ELSE CRT "No input provided."
INPUT reply FOR 0 ELSE CRT "No reply entered."
```

would wait indefinitely until something was entered.

### Current Release Behavior

When the FOR value is set to zero the statement will execute the ELSE clause.

Programs requiring this behavior must be compiled in D3 emulation.

Back to [5.6.2 release Notes](./../README.md)
