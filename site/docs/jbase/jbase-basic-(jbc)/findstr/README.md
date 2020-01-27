# FINDSTR

**Created At:** 9/4/2017 12:13:36 PM  
**Updated At:** 10/25/2018 7:50:08 AM  
**Original Doc:** [272273-findstr](https://docs.jbase.com/36868-jbase-basic/272273-findstr)  
**Original ID:** 272273  
**Internal:** No  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />
<badge text='string operations' vertical='middle' />

# Description

The **FINDSTR** statement locates a string as a substring of a dynamic array element. It is similar in operation to the [FIND](./../find) statement. It takes the general form :

```
FINDSTR expression1 IN Var1 {, expression2} SETTING Var2 {,Var3 {, Var4}} THEN | ELSE statement(s)
```

Where:

- **expression1** evaluates to the string with which to search every element of the dynamic array,
- **Var1** is the actual dynamic array that will be searched. **FINDSTR** will normally locate the first occurrence of **expression1** unless **expression2** is specified. If specified then **expression2** will cause a specific occurrence of **expression1** to be located.
- The three variables **Var2, Var3, Var4** are used to record the Field, Value and Sub-Value positions in which **expression1** was found.


If **expression1** is found as a substring of any element of **Var1** then **Vars 2, 3**and **4** are set to the position in which it was found and the THEN clause of the statement is executed if it is present. If **expression1** is not found within any element of the dynamic array then **Vars 2,3** and **4** are undefined and the ELSE clause of the statement is executed.

## Note:


> The statement may omit either the THEN clause or the ELSE clause but may not omit both. It is valid for the statement to contain both clauses if required.


An example of use is as:

```
     V.ARRAY = 'ABC' :@FM: 'DEF' :@VM: 'XYZ'  : @SM: 'XYZ'

     FINDSTR 'XY' IN V.ARRAY SETTING V.FLD, V.VAL THEN
         CRT "FIELD: " : V.FLD, "POSITION: ": V.VAL
     END

     ELSE
         CRT "NOT FOUND"
     END
```

to display:

```
FIELD: 2        POSITION: 2
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
