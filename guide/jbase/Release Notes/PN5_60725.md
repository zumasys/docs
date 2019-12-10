# PN5_60725

**Created At:** 3/16/2018 10:40:45 AM  
**Updated At:** 3/16/2018 10:41:28 AM  


### Description

jBC: Allow the jBC debugger to access EQUATE'd variables



### Previous Release Behavior

EQUATE'd variables were not accessible in the jBASE debugger.

For example:

```
C:\home\bp>type equate_test.b
    DIM array(10)
    MAT array = 1
    EQU x TO array(6)
    x = 42
    DEBUG

C:\home\bp>equate_test
DEBUG statement seen
Source changed to C:\home\bp\equate_test.b
0005     DEBUG
jBASE debugger->/array(6)
  array(6)                  : 42
jBASE debugger->/x
No variables to match expression 'x'
jBASE debugger->
```



### Current Release Behavior

```
C:\home\bp>equate_test
DEBUG statement seen
Source changed to C:\home\bp\equate_test.b
0005     DEBUG
jBASE debugger->/array(6)
  array(6)                  : 42
jBASE debugger->/x
  x                         : 42
jBASE debugger->
```
