# CLEARSELECT

<PageHeader />

## Description

The **CLEARSELECT** statement is to clear active select lists.

```
CLEARSELECT {ListName | ListNumber}
```

Where:

- **ListName** must evaluate to a jBASE BASIC list variable,
- **ListNumber** is one of the numbered lists in the range 0 to 11.

## Note

> If neither **ListName** nor **ListNumber** are specified then it clears the default list (0).

An example of use is as:

```
    strArray1 = "good" : @AM : "bad" : @AM : "ugly"
    strArray2 = "night" : @AM : "day"

    SELECT strArray1 TO 3
    SELECT strArray2 TO blist

    adone = @FALSE; bdone = @FALSE

    LOOP
        READNEXT string1 FROM 3 ELSE adone = @TRUE
        READNEXT string2 FROM blist ELSE bdone = @TRUE
    UNTIL adone AND bdone DO
        CRT "End result is '" : string1, string2 : "'"
        CLEARSELECT 3
        CLEARSELECT blist
    REPEAT

```

to display:

```
End result is 'good     night'
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
