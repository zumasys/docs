# PN5_60625

**Created At:** 10/2/2017 3:08:01 PM  
**Updated At:** 10/16/2017 9:50:54 PM  
**Original Doc:** [pn5_60625](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60625)  
**Original ID:** 279083  
**Internal:** No  

## Description

Active select-list not retained after invoking SPOOLER() function

### Previous Release Behavior

```
PROGRAM sp3
CRT SPOOLER(3)

jsh home ~ -->SP-ASSIGN
jsh home ~ -->SELECT MD SAMPLE 42

 42 Records selected

>sp3
Non-numeric value -- ZERO USED ,
Variable 'savelist' , Line    62 , Source jsp_getstatus.b
Trap from an error message, error message name = NON_NUMERIC
Line 62 , Source jsp_getstatus.b
jBASE debugger->
```

### Current Release Behavior

```
jsh home ~ -->SP-ASSIGN
jsh home ~ -->SELECT MD SAMPLE 42

 42 Records selected

>sp3
0²STANDARD²²1
>COUNT MD

 42 Records counted

jsh home ~ -->
```

Back to [5.6.2 release Notes](./../README.md)
