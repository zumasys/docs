# SEQS

**Created At:** 9/28/2017 9:23:34 AM  
**Updated At:** 1/5/2018 6:17:09 PM  


# Description

The **SEQS** function is used to convert a dynamic array of ASCII characters to their numeric string equivalents. It takes the general form:

```
SEQS(dynamic.array)
```

Where:

dynamic.array specifies the ASCII characters to be converted. If dynamic.array evaluates to null, it returns null. If any element of dynamic.array is null, it returns null for that element.

If the subroutine syntax is used, the resulting dynamic array is returned as return.array.

Using the **SEQS**function to convert a character outside its range results in a run-time message, and the return of an empty string.

An example of use is as:

```
G="T":@VM:"G"
A=SEQS (G)
PRINT A
PRINT SEQS("G")
```

to display: 84 71 71

# **INTERNATIONAL MODE**

The **SEQ** function will return numeric values beyond 255 for UTF-8 byte sequences representing any Unicode values above 0x000000ff.



Go back to [jBASE BASIC](263498-jbase-basic).
