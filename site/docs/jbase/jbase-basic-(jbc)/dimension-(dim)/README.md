# DIMENSION (DIM)

**Created At:** 9/6/2017 7:44:51 AM  
**Updated At:** 10/30/2018 2:26:22 PM  
**Original Doc:** [276028-dimension-dim](https://docs.jbase.com/36868-jbase-basic/276028-dimension-dim)  

**Tags:**
<badge text='dimensioned array' vertical='middle' />

# Description 

The **DIM** statement is used to declare arrays to the compiler before referencing.

```
DIM{ENSION} variable(number{, number, ... }){, variable(number {,number, ...}) ...}
```

Where:

- **variable** may be any valid variable name neither declared nor previously used.
- The **numbers** define the size of each dimension and must be either constants or the subject of an [EQUATE](./../equate) statement.


A single **DIM** statement may declare a number of arrays by separating their declarations with a comma.

## Note:


> - The array must be declared before it is referenced in the program source (compilation as opposed to execution). If using a variable as an undeclared dimensioned array the compiler will display an error message.
> - The array variable must be used as a normal variable or dynamic array before dimensioning, as the compiler will detect this as an error.
> - Dimensioning to a variable requires **resize\_array = true**to be set as a configuration option in the **$JBCRELEASEDIR/config/Config\_EMULATE**file.
> - When arrays are referenced directly as in A = Array(7), the compiler will optimize the reference as if it was a single undimensioned variable.


The statements in the code snippet below show how arrays can be declared.

```
EQUATE DimSize1 TO 29
DIM Array1(10,10), Array2(5, 20, 5, 8)
DIM Age(DimSize1)
```



See also: [COMMON](./../common)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
