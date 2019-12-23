# Literal Operand 

**Created At:** 6/12/2018 7:51:42 AM  
**Updated At:** 6/12/2018 2:47:28 PM  
**Original Doc:** [321521-literal-operand](https://docs.jbase.com/46351-conversion-processing/321521-literal-operand)  


## Description 

Specifies a literal string or numeric constant enclosed in double quotes. It takes the general form:

```
"literal"
```

where literal is a text string or a numeric constant.



## Note: 


> A number not enclosed in double quotes is assumed to be a field number (FMC).




### EXAMPLES

```
A;N(S.CODE) + "100"
```

Adds 100 to each value (subvalue) in the field defined by S.CODE.

```
A;N(S.CODE):"SUFFIX"
```

Concatenates the string "SUFFIX" to each value (subvalue) returned by S.CODE.



Back to [A-Corelatives](./../a-correlatives)
