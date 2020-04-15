# COUNT

<PageHeader />

## Description

The **COUNT** function returns the number of times that one string occurs in another. It is used as:

```
COUNT(expression1, expression2)
```

Where **expression1** is the character string to be searched for occurrences.

## Note

> Both **expression1** and **expression2** may evaluate to any data type but logically they will evaluate to character strings.

The count is made on overlapping occurrences as a pattern match from each character in expression1.

This means that the string **jjj** occurs 3 times in the string **jjjjj**.

An example of use is as:

```
Calc = "6 * 3 / 4 * 2"
CRT "There are ": COUNT(Calc, "*") : " multiplications"
```

See also : [DCOUNT.](./../dcount)

Go back to [jBASE BASIC](./../README.md)

<PageFooter />
