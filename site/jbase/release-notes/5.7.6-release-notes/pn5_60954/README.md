# PN5_60954

**Created At:** 1/14/2020 10:22:17 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60954](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60954)  
**Original ID:** 516416  
**Internal:** No  

## Description

The new pre-processor was not recognising the '!' character as a potential system keyword.

### Previous Release Behavior

The pre-processor has to pre-parse the source code and make it ready for the main compiler. In this case it wasn't recognising the '!' character as a potential system keyword, and only recognised it as either a comment or a maths symbol

### Current Release Behavior

The anomaly is fixed and the example shown below now compiles.

This example shows 2 rather strange anomalies in the multi-value language at work.

First anomaly. The '!' symbol at the start of a statement means it is a comment that follows until end of line. However the '!' symbol anywhere else is a logical OR operator.

This first anomaly is what created the problem when trying to fix the second anomaly, whereby the '&lt;' and '&gt;' also have dual meaning. In one case they can be attribute extraction such as A = B&lt;2&gt; , in the second case they can mean less-than or greater-than, as in IF ANS &lt; 1 ! ANS &gt; 10 THEN DEBUG.  
It is while trying to resolve this anomaly that the pre-processor became confused with the meaning of '!', the first anomaly.

```
LTMP=125
IF LTMP<32 ! (LTMP>126 & LTMP LT 255) THEN CRT 'Hello'
```

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
