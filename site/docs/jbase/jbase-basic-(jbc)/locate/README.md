# LOCATE

**Created At:** 9/15/2017 9:27:51 AM  
**Updated At:** 1/19/2020 9:05:25 AM  
**Original Doc:** [locate](https://docs.jbase.com/36868-jbase-basic/locate)  
**Original ID:** 276937  
**Internal:** No  

## Description

The **LOCATE** statement finds the position of an element within a specified dimension of a dynamic array. It takes the general form:

```
LOCATE expression1 IN expression2{<expression3{,expression4}>} {, expression5} {BY expression6} SETTING Var THEN|ELSE statements
LOCATE(expression1, expression2{,expression3{,expression4{,expression5}}}; Var{; expression6}) THEN|ELSE statements
LOCATE(expression1, expression2{,expression3{,expression5}}; Var{; expression6}) THEN|ELSE statements   (Prime*** syntax)
```

Where:

- **expression1** evaluates to the string that will be searched for in **expression2**.
- **expression2** evaluates to the dynamic array within which **expression1** will be searched for.
- If **expression3** is specified then a multivalue search is performed on **expression2**.
- If both **expression3** and **expression4** are specified then a subvalue search is performed on **expression2**.
- **expression5** indicates the field, value or subvalue from which the search will begin.
- **BY expression6** causes the search to expect the elements to be arranged in a specific order, which can considerably improve the performance of some searches. The available string values for **expression6** are:

| String | Definition
| --- | --- |
| AL | Values are in ascending left justified order |
| AR | Values are in ascending right justified order |
| AN | Values are in ascending numeric order |
| DL | Values are in descending left justified order |
| DR | Values are in right descending right justified order|
| DN | Values are in descending numeric order|

- **Var** will be set to the position of the Field, MultiValue or SubValue in which **expression1** was found. If it was not found and **expression6** was not specified then **Var** will be set to one position past the end of the searched dimension. If **expression6** specified the order of the elements then **Var** will be set to the position before which the element should be inserted to retain the specified order.
- The statement must include one of or both of the **THEN** and **ELSE** clauses. If **expression1** is found in an element of the dynamic array, it executes the statements defined by the **THEN** clause. If **expression1** is not found in an element of the dynamic array, it executes the statements defined by the **ELSE** clause.

### INTERNATIONAL MODE

When the **LOCATE** statement is used in International Mode, the statement will use the currently configured locale to determine the rules by which each string is considered less than or greater than the other will.

An example of use may be as:

```
Name = "Nelson"
LOCATE Name IN ForeNames BY "AL" SETTING Pos ELSE
    INS Name BEFORE ForeNames<Pos>
END
```

The following example builds a multi-value list of Fibonacci numbers within the first 1,000,000 positive integers and then prompts the user to see if the numbers entered are in the list. This example uses **expression3** in the **LOCATE** statement.

```
    fib = ""
    a = 0
    b = 1
    LOOP WHILE b < 1000000 DO
        fib<1,-1> = b
        c = b
        b = a + b
        a = c
    REPEAT

    LOOP
        CRT "Enter number":
        INPUT n
    WHILE NUM(n) AND n NE "" DO
        CRT n:
        LOCATE n IN fib<1> BY "AN" SETTING pos THEN
            CRT " is a fibonacci number at position ":pos:"."
        END ELSE
            CRT " is NOT a fibonacci number."
        END
    REPEAT
```

### NOTES

When dealing with sorted numeric data that are to be considered as non-numeric (e.g. part numbers), use the "AL" or "DL" sort specification.

When dealing with sorted numeric data, always use the "AN" or "DN" sort specification, especially when locating values that are decimal numbers.

The Universe syntax can be obtained in any emulation by setting the **use\_uv\_locate** configuration option in the **Config\_EMULATE** file under the appropriate emulation section as defined by the **JBCEMULATE** environment variable, e.g. **use\_uv\_locate = true**

See also: [FIND](./../find), [FINDSTR](./../findstr)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
