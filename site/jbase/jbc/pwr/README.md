# PWR

<PageHeader />
  
**Tags:**
<badge text='mathematical operations' vertical='middle' />

## Description

The **PWR** function raises a number to the n'th power. It takes the general form:

```
PWR(expression1, expression2)
```

or

```
expression1 ^ expression2
```

Where both **expression1** and **expression2** should evaluate to numeric arguments. The function will return the value of **expression1** raised to the value of **expression2**.

## Note

> If **expression1** is negative and **expression2** is not an integer then a maths library error is displayed and the function returns the value 0. The error message displayed is:
>
> pow: DOMAIN error
>
> All calculations are performed at the maximum precision supported on the host machine and truncated to the compiled precision on completion.


Examples of use may be as:

```
A = 4
B = 31
CRT "4 GB is ":A^B
```

or

```
A = 4
B = 31
CRT "4 GB is": PWR(A, B)
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
