# PN5_60702

**Created At:** 2/19/2018 11:56:26 AM  
**Updated At:** 2/19/2018 11:57:12 AM  
**Original Doc:** [pn5_60702](https://docs.jbase.com/release-notes/pn5_60702)  


### Description

jQL crashes when TOTAL'ing an A;IF/THEN in dict&lt;7&gt;



### Previous Release Behavior

Something like...

```
ID: TOT.CHARGES
001 S
002 0
003 Total]Charges
004
005
006
007 A;IF 6 = "0" THEN "" ELSE 6]MR2
008
009 R
010 12
```

would crash jQL.



### Current Release Behavior

Allow A/S type dictionaries with A-correlatives in dict&lt;7&gt; to be used in totals.

Allow conversions in dict&lt;7&gt; to be applied when totalling.

This new behavior will only be applied if:

- Dictionary is A/S type
- Attribute 7 is an a correlative
- Last part of the conversion is some form of formatter, e.g.


```
A;<<formula>>]formatter
```
