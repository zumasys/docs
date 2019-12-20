# PN5_60690

**Created At:** 1/1/2018 11:44:59 AM  
**Updated At:** 2/16/2018 7:09:54 PM  
**Original Doc:** [pn5_60690](https://docs.jbase.com/release-notes/pn5_60690)  


### Description

Spooler: SETPTR doesn't inherit Hold status from SP-ASSIGN



### Previous Release Behavior

As the following dialog illustrates, when the SETPTR mode is not set then the Hold status is not inherited from the SP-ASSIGN...

```
jsh home ~ -->SP-ASSIGN =FILE HS
jsh home ~ -->SP-ASSIGN ?

LINE# OPTIONS  CP FORM# REPORT# QUEUENAME

    1 HS        1     2       0 FILE

jsh home ~ -->SETPTR ,132,62,0,0,,
Unit Number   :0
Page Width    :132
Page Depth    :62
Top Margin    :0
Bottom Margin :0
Print mode    : 1 - Spooled Output

Default spool banner : "P#0000"
Destination printer  : $JBCRELEASEDIR%stmp%s%q_%j.txt
Initial Job State    : PRINT

jsh home ~ -->SP-ASSIGN ?

LINE# OPTIONS  CP FORM# REPORT# QUEUENAME

    1           1     2       0 FILE
```

Notice the 'Print mode' from SETPTR lost the Hold status, also confirmed with the subsequent SP-ASSIGN ?



### Current Release Behavior

```
jsh home ~ -->SP-ASSIGN =FILE HS
jsh home ~ -->SETPTR ,132,62,0,0,,
Unit Number   :0
Page Width    :132
Page Depth    :62
Top Margin    :0
Bottom Margin :0
Print mode    : 3 - Output to HOLD file ( P#0000 )

Default spool banner : "P#0000"
Destination printer  : $JBCRELEASEDIR%stmp%s%q_%j.txt
Initial Job State    : HOLD

jsh home ~ -->SP-ASSIGN ?

LINE# OPTIONS  CP FORM# REPORT# QUEUENAME

    1 HS        1     2       0 FILE
```
