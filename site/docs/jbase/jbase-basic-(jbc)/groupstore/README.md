# GROUPSTORE

**Created At:** 1/22/2020 1:29:09 PM  
**Updated At:** 11/22/2020 1:29:09 PM

**Internal:** No  

**Tags:**
<badge text='groupstore' vertical='middle' />

## Description

The **GROUPSTORE** statement inserts, deletes or replaces one group of characters for another in a string.

It takes the general form:

```
GROUPSTORE from.var IN to.var USING start,replace{,delim}
```

Where:

- **from.var** is the string which will be inserted into the **to.var** variable.,
- **to.var** is the string which will be amended,
- **start** is the starting group number in **to.var** which will be replaced. If **start** is less than 0 , then the absolute value of **start** is used. If **start** is zero, then it defaults to 1. If **start** exceeds the number of groups in **to.var**, then delimiters will be added as necessary.
- **replace** is the number of groups in **to.var** that will be replaced. If **replace** is greater than 0, then **replace** groups of **from.var** will replace **replace** groups in **from.var** If **replace** is 0 , then all of **from.var** will be inserted. If **replace** is less than 0, the absolute value of **replace** is used.
- **delim** optionally specifies the delimiting character to use, with an attribute mark (CHAR(254)) as a default. If the string is more than one character, only the first character is used.

## Example

Examples of use are:

```
    string = "1*2*3*4*5"
    *
    GROUPSTORE "A*B*C" IN string USING 2, 3, "*"
    CRT "Result of GROUPSTORE #1 is : " : string
    *
    string = "1*2*3*4*5"
    *
    GROUPSTORE "A*B" IN string USING 2, -3, "*"
    CRT "Result of GROUPSTORE #2 is : " : string
```

to display:

```
Result of GROUPSTORE #1 is : 1*A*B*C*4*5
Result of GROUPSTORE #2 is : 1*A*B*5
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
