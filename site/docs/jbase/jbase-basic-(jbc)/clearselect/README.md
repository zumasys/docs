# CLEARSELECT

**Created At:** 8/14/2017 9:27:02 AM  
**Updated At:** 10/24/2018 10:59:24 PM  
**Original Doc:** [266855-clearselect](https://docs.jbase.com/36868-jbase-basic/266855-clearselect)  
**Original ID:** 266855  
**Internal:** No  


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
     A = "good" : @AM : "bad" : @AM : "ugly"
     B = "night" : @AM : "day"

     SELECT A TO 3
     SELECT B TO blist

     adone = 0; bdone = 0

     LOOP
         READNEXT Ael FROM 3 ELSE adone = 1
         READNEXT Bel FROM blist ELSE bdone = 1
     UNTIL adone AND bdone DO
         CRT Ael, Bel
         CLEARSELECT 3
         CLEARSELECT blist
     REPEAT
```

to display: good night



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
