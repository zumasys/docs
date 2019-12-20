# LOCATE

**Created At:** 9/15/2017 9:27:51 AM  
**Updated At:** 11/14/2019 2:03:15 PM  
**Original Doc:** [locate](https://docs.jbase.com/36868-jbase-basic/locate)  


# Description

The **LOCATE** statement finds the position of an element within a specified dimension of a dynamic array. It takes the general form:

```
LOCATE expression1 IN expression2{<expression3{,expression4}>}, {, expression5} {BY expression6} SETTING Var THEN|ELSE statement(s)
LOCATE(expression1, expression2{,expression3{,expression4}}; Var{; expression6}) THEN|ELSE statements
LOCATE(expression1, expression2{,expression3{,expression5}}; Var{; expression6}) THEN|ELSE statements       (Universe syntax)
```

Where:

- **expression1**evaluates to the string that will be searched for in **expression2**.
- **expression2**evaluates to the dynamic array within which **expression1**will be searched for.
- If **expression3** is specified then a multivalue search is performed on **expression2**.
- If both **expression3**and **expression4**are specified then a subvalue search is performed on **expression2**.
- **expression5**indicates the field, value or subvalue from which the search will begin.
- **BY expression6** causes the search to expect the elements to be arranged in a specific order, which can considerably improve the performance of some searches. The available string values for **expression6**are:



| AL<br> | Values are in ascending left justified order<br> |
| --- | --- |
| AR<br> | Values are in ascending right justified order<br> |
| AN<br> | Values are in ascending numeric order<br> |
| DL<br> | Values are in descending left justified order<br> |
| DR<br> | Values are in right descending right justified order<br> |
| DN<br> | Values are in descending numeric order<br> |


- **Var**will be set to the position of the Field, MultiValue or SubValue in which **expression1**was found. If it was not found and **expression6**was not specified then **Var**will be set to one position past the end of the searched dimension. If **expression6**specified the order of the elements then **Var**will be set to the position before which the element should be inserted to retain the specified order.
- The statement must include one of or both of the **THEN**and **ELSE**clauses. If **expression1**is found in an element of the dynamic array, it executes the statements defined by the **THEN**clause. If **expression1**is not found in an element of the dynamic array, it executes the statements defined by the **ELSE**clause.


# INTERNATIONAL MODE

When the **LOCATE** statement is used in International Mode, the statement will use the currently configured locale to determine the rules by which each string is considered less than or greater than the other will.

An example of use may be as:

```
Name = "Nelson"
LOCATE Name IN ForeNames BY "AL" SETTING Pos ELSE
    INS Name BEFORE ForeNames<Pos>
END
```



The following example builds a multi-value list of Fibonacci numbers within the first 1,000,000 positive integers and then prompts the user to see if the numbers entered are in the list. This example uses **expression3**in the **LOCATE**statement.

```
001     fib = ""
002     a = 0
003     b = 1
004     LOOP WHILE b < 1000000 DO
005         fib<1,-1> = b
006         c = b
007         b = a + b
008         a = c
009     REPEAT
010
011     LOOP
012         CRT "Enter number":
013         INPUT n
014     WHILE NUM(n) AND n NE "" DO
015         CRT n:
016         LOCATE n IN fib<1> BY "AN" SETTING pos THEN
017             CRT " is a fibonacci number at position ":pos:"."
018         END ELSE
019             CRT " is NOT a fibonacci number."
020         END
021     REPEAT
```



# NOTES

When dealing with sorted numeric data that are to be considered as non-numeric (e.g. part numbers), use the "AL" or "DL" sort specification.

When dealing with sorted numeric data, always use the "AN" or "DN" sort specification, especially when locating values that are decimal numbers.

The Universe syntax can be obtained in any emulation by setting the **use\_uv\_locate** configuration option in the **Config\_EMULATE**file under the appropriate emulation section as defined by the **JBCEMULATE**environment variable, e.g. **use\_uv\_locate = true**



See also: [FIND](271550-find), [FINDSTR](272273-findstr)

Go back to [jBASE BASIC](263498-jbase-basic).
