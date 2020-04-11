# XTD

**Created At:** 10/4/2017 12:52:10 PM  
**Updated At:** 1/5/2018 6:42:10 PM  
**Original Doc:** [279580-xtd](https://docs.jbase.com/36868-jbase-basic/279580-xtd)  
**Original ID:** 279580  
**Internal:** No  

## Description

The **XTD** function converts hexadecimal numbers into its decimal equivalent. It takes the general from:

```
XTD(expression)
```

Where:

**expression** should evaluate to a valid hexadecimal string.

The conversion process will halt at the first character that is not a valid base 16 character in the set [0- 9, A-F or a-f].

An example of use is as:

```
INPUT USER_VAL

CRT XTD(USER_VAL)
```

See also: [DTX](./../dtx) .

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
