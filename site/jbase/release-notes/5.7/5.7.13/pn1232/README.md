# PN1232

<PageHeader />

## Description

A query using a complex F-correlative which calculated percentage profit would only return a value for the first multi-value in a record:

```
001 A
002 0
003 Profit ]Percent]-------
004
005
006
007 F;LPV;38;/;(MR2)
008 F;38;40;-;C10000;*;C1;C2;4R;CK;=;4R;CT;=;+;*;-;*
009 R
010 7
```

## Previous Release Behavior

```
Page    1

  Orig                   Profit
 Clerk          ID       Percent
-------- --------------- -------

15       952-19094-35736   43.46
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
                            0.00
```

## Current Release Behavior

```
Page    1

  Orig                   Profit
 Clerk          ID       Percent
-------- --------------- -------

15       952-19094-35736   43.46
                           61.70
                           41.38
                           42.45
                           46.81
                           48.60

```

Back to [5.7.13 Release Notes](./../README.md)
  
<PageFooter />
