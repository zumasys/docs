# SUBSTRINGS

**Created At:** 9/28/2017 2:13:24 PM  
**Updated At:** 1/5/2018 6:24:32 PM  
**Original Doc:** [278846-substrings](https://docs.jbase.com/36868-jbase-basic/278846-substrings)  
**Original ID:** 278846  
**Internal:** No  

## Description

The **SUBSTRINGS** function returns a dynamic array of elements, which are sub-strings of the corresponding elements in a supplied dynamic array.

```
SUBSTRINGS(dynarr, Start, Length)
```

Where:

**dynarr** should evaluate to a dynamic array.

**Start** specifies the position from which characters are extracted from each array element. It should evaluate to an integer greater than zero.

**Length** specifies the number of characters to extract from each dynamic array element. If **Length** exceeds the number of characters remaining in an array element then all characters from **Start** position are extracted.

## International Mode

When using the **SUBSTRINGS** function in International Mode, **Start** and **Length** will be used as character count values, rather than byte count.

The following example shows how each element of a dynamic array can be changed.

```
t = ""
t<1> = "AAAAA"
t<2> = "BBBBB" : @VM : "CCCCC" : @SVM: "DDDDD"
t<3> = "EEEEE" : @VM : @SVM
r1 = SUBSTRINGS (t,3,2)
r2 = SUBSTRINGS(t,4,20)
r3 = SUBSTRINGS(t,0,1)
```

The above program creates 3 dynamic arrays. v represents a value mark. s represents a sub-value mark:

```
r1  <1>AA
    <2>BB v CC s DD
    <3>EE v s  
r2  <1>AA
    <2>BB v CC s DD
    <3>EE v s  
r3  <1>A
    <2>B v C s D
    <3>E v s
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
