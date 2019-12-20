# PWR

**Created At:** 9/22/2017 2:37:52 PM  
**Updated At:** 11/27/2018 9:43:44 AM  
**Original Doc:** [277641-pwr](https://docs.jbase.com/36868-jbase-basic/277641-pwr)  

**Tags:**
<badge text='mathematical operations' vertical='middle' />

# Description

The **PWR** function raises a number to the n'th power. It takes the general form:

```
PWR(expression1, expression2)
```

or

```
expression1 ^ expression2
```

Where both **expression1** and **expression2** should evaluate to numeric arguments. The function will return the value of **expression1** raised to the value of **expression2**.

## Note: 


> If expression1 is negative and expression2 is not an integer then a maths library error is displayed and the function returns the value 0. The error message displayed is:
> 
> pow: DOMAIN error
> 
> All calculations are performed at the maximum precision supported on the host machine and truncated to the compiled precision on completion.


Examples of use may be as:

```
A = 2
B = 31
CRT "2 GB is ":A^B
```

or

```
A = 2
B = 31
CRT "2 GB is": PWR(A, B)
```



Go back to [jBASE BASIC](263498-jbase-basic).
