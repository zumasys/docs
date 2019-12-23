# CLEARSELECT

**Created At:** 8/14/2017 9:27:02 AM  
**Updated At:** 10/24/2018 10:59:24 PM  
**Original Doc:** [266855-clearselect](https://docs.jbase.com/36868-jbase-basic/266855-clearselect)  


# Description 

The **CLEARSELECT** statement is to clear active select lists.

```
CLEARSELECT {ListName | ListNumber}
```

Where:

- **ListName** must evaluate to a jBASE BASIC list variable,
- **ListNumber** is one of the numbered lists in the range 0 to 11.


# Note:


> If neither ListName nor ListNumber are specified then it clears the default list (0).


An example of use is as:

```
0001     A = "good" : @AM : "bad" : @AM : "ugly"
0002     B = "night" : @AM : "day"
0003
0004     SELECT A TO 3
0005     SELECT B TO blist
0006
0007     adone = 0; bdone = 0
0008
0009     LOOP
0010         READNEXT Ael FROM 3 ELSE adone = 1
0011         READNEXT Bel FROM blist ELSE bdone = 1
0012     UNTIL adone AND bdone DO
0013         CRT Ael, Bel
0014         CLEARSELECT 3
0015         CLEARSELECT blist
0016     REPEAT
```

to display: good night



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
