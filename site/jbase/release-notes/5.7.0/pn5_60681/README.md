# PN5_60681

<PageHeader />

### Description

jQL: **MCC** conversion code issues



### Previous Release Behavior

Two issues:

1. The **MCC** code would consume all memory when there were @SVMs in the data.
2. The **Umlaute** character would cause unpredictible behavior, e.g.


```
001 A
002 0
003
004
005
006
007
008 A;(N(attn)(MCC;û;u))
009 L
010 14

Because "Umlaute" can have the same ASCII values as jBASE delimiters, using MCC on something like...

        (char)0xfb 'û'

would cause unpredictable behavior.
```



### Current Release Behavior

Both issues are fixed.

  
<PageFooter />
