# FIND

**Created At:** 8/31/2017 7:38:59 AM  
**Updated At:** 10/25/2018 7:47:13 AM  
**Original Doc:** [271550-find](https://docs.jbase.com/36868-jbase-basic/271550-find)  
**Original ID:** 271550  
**Internal:** No  

**Tags:**
<badge text='string operations' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />

## Description

The **FIND** statement allows the location of a specified string within a dynamic array. It takes the general form:

```
FIND expression1 IN Var1 {, expression2} SETTING Var2 {, Var3 {, Var4}} THEN | ELSE statement(s)
```

Where:

- **expression1** evaluates to the string with which to compare every element of the dynamic array.
- **Var1** is the dynamic array that will be searched.


The **FIND** command will normally find the first occurrence of **expression1**, unless **expression2** is specified. If specified, then **expression2** will cause a specific occurrence of **expression1** to be located. The three variables **Var2**, **Var3**, **Var4** are used to record the Field, Value and Sub-Value positions in which **expression1** was found.

If **expression1** is found in any element of **Var1** then ***Vars*** **2, 3** and **4** are set to the position in which it was found and any THEN clause of the statement is executed. If **expression1** is not found within any element of the dynamic array then ***Vars*** **2, 3** and **4** are undefined and the ELSE clause of the statement is executed.

## Note:


> The statement may omit either the THEN clause or the ELSE clause but may not omit both. It is valid for the statement to contain both clauses if required.


An example of use is as:

```
     V.ARRAY = 'ABC' :@FM: 'DEF' :@VM: 'XYZ' : @SM: 'XYZ'

     FIND 'XYZ' IN V.ARRAY SETTING V.FLD, V.VAL THEN
         CRT "XYZ is in field: " : V.FLD, "value: ": V.VAL
     END

     ELSE
         CRT "NOT FOUND"
     END
```

to display:

```
XYZ is in field 2     value 2
```



See also: [LOCATE](./../locate), [FINDSTR](./../findstr)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
