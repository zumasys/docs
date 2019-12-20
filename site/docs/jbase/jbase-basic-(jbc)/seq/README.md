# SEQ

**Created At:** 11/6/2017 2:53:23 PM  
**Updated At:** 1/5/2018 6:52:00 PM  
**Original Doc:** [284378-seq](https://docs.jbase.com/36868-jbase-basic/284378-seq)  


# Description

The **SEQ** function returns numeric ASCII value of a character. It takes the general form:

```
SEQ(expression)
```

Where:

expression may evaluate to any data type. However, the SEQ function will convert the expression to a string and operate on the first character of that string.

**SEQ** operates on any character in the integer range 0 to 255

# INTERNATIONAL MODE

The SEQ function will return numeric values beyond 255 for UTF-8 byte sequences representing any Unicode values above 0x000000ff.

An example of use is as:

```
EQU ENQ TO 5
* Get next comms code

INPUT A, 1 FOR 200 ELSE BREAK
IF SEQ (A) = ENQ THEN 
* Respond to ENQ char here 
```



Go back to [jBASE BASIC](263498-jbase-basic).


