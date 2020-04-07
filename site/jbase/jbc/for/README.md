# FOR

**Created At:** 10/6/2017 2:31:46 PM  
**Updated At:** 1/5/2018 6:43:17 PM  
**Original Doc:** [279813-for](https://docs.jbase.com/36868-jbase-basic/279813-for)  
**Original ID:** 279813  
**Internal:** No  

## Description

The **FOR** statement allows the construction of looping constructs within the program, which is controlled by a counting variable; this can be terminated early by expressions tested after every iteration.

It takes the general form:

```
FOR var = expression1 TO expression2 {STEP expression3}

{WHILE | UNTIL expression4}...NEXT {var}
```

Where:

**var** is the counting variable used to control the loop. The first time the loop is entered **var** is assigned the value of **expression1**, which must evaluate to a numeric value. After each iteration of the loop, **var** is automatically incremented by one.

**expression2** must also evaluate to a numeric value as it causes the loop to terminate when the value of **var** is greater than the value of this expression. **expression2** is evaluated at the start of every iteration of the loop and compared with the value of **expression1**.

If the **STEP expression3** clause is included within the statement, **var** will automatically be incremented by the value of **expression3** after each iteration of the loop. **expression3** is evaluated at the start of each iteration. **expression3** may be negative, in which case the loop will terminate when **var** is less than **expression2**.

The statement may optionally include either an evaluated **WHILE** or **UNTIL** clause (not both), before each iteration of the loop. When the **WHILE** clause is specified, the loop will only continue with the next iteration if **expression4** evaluates to Boolean TRUE.

When the **UNTIL** clause is specified the loop will only continue with the next iteration if **expression4** evaluates to Boolean FALSE.

Because **expression2** and **expression3** must be evaluated upon each iteration of the loop, it is recommended that complex expressions be placed here only if they may change within each iteration. If the values they yield will not change then best assign the value of these expressions to a variable before coding the loop statement, as with **expressions 3** and **4**. This can offer large performance increases where complex expressions are in use.

An example of use would be as below:

```
FOR count = 1 TO 20 STEP 2
    CRT count
NEXT count
```

See also: [BREAK](./../break), [CONTINUE](./../continue).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
