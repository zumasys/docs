# EQUATE

**Created At:** 8/28/2017 8:20:00 AM  
**Updated At:** 10/24/2018 11:01:29 PM  
**Original Doc:** [269196-equate](https://docs.jbase.com/36868-jbase-basic/269196-equate)  
**Original ID:** 269196  
**Internal:** No  

**Tags:**
<badge text='program variables' vertical='middle' />

## Description

**EQUATE** is used to declare a symbol equivalent to a literal, variable or simple expression. It takes the general form:

```
EQU{ATE} symbol TO expression
```

where:

- **symbol** is the name of the symbol to use;.can be any name that would be valid for a variable, and
- **expression** can be a literal, a variable or a simple expression.

## Note

> Sensible use of **EQUATE** symbols can make a program easier to maintain, read, and even more efficient.
>
> Efficiency can be enhanced because the address of an EQUATEd value is computed during compilation and is substituted for each occurrence of the symbol name. Unlike the address of a variable, which must be computed for each access during run time, the address of a symbol is always known. This significantly reduces the processing overhead involved in accessing a particular value.

The snippet of code below illustrates how to enhance readability by referring to say, QTY rather than INV\_LINE(4). Simply "EQUATE QTY TO INV\_LINE(4)" at an early stage in the program. This can also help with maintenance of the program, particularly in situations where record layouts might change.

For example, if the quantity field moves to INV\_LINE(6), you only have to change one line in the  program.

```
 COMMON FLAG
 EQUATE NO_CHARGE TO FLAG
 EQUATE CR TO CHAR (13), TRUE TO 1, FALSE TO 0
 EQUATE PRICE TO INV_LINE(7), TAX TO 0.175
 EQUATE DASHES TO "-------"
 IF NO_CHARGE = TRUE THEN PRICE = 0
 CRT "Tax =":PRICE * TAX:CR:DASHES
```

Go back to [jBASE BASIC](./../README.md)
