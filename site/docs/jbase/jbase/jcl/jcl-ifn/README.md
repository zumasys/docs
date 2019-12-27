# JCL IFN

**Created At:** 5/28/2018 11:04:48 AM  
**Updated At:** 6/11/2018 4:16:42 AM  
**Original Doc:** [318702-jcl-ifn](https://docs.jbase.com/45792-jcl/318702-jcl-ifn)  
**Original ID:** 318702  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command allows conditional execution of commands depending on the result of numeric comparisons. It takes the general form:

```
IFN reference operator expression command
```

where:

- reference can be a direct or indirect reference to a buffer or select register, or an A command without a surround character. Using an A command will not move a value but simply provides a reference to the parameter to be tested.
- operator performs a value comparison. Operators are:



| Operator<br> | Description<br> |
| --- | --- |
| <br>=<br> | equal to<br> |
| #<br> | not equal to<br> |
| &lt;<br> | less than<br> |
| &gt;<br> | greater than<br> |
| [<br> | less than or equal to<br> |
| ]<br> | greater than or equal to<br> |


- expression can be one of the following:
    - A direct or indirect reference to a buffer or select register.
    - A string. If the string contains embedded spaces or the first character is an exclamation mark (!), percent sign (%) or ampersand (&), enclose the string in single or double quotes.
- command is a valid jCL  command.




## Note: 


> IFN tests numbers by value, rather than their ASCII  sequence of characters. Leading zeros are ignored, as are trailing decimal zeros. For example, if %1 contains 00123.000, IFN %1 = 123 will be true.
> 
> If a submitted value equates to null or is non-numeric, zero will be used. Leading plus or minus signs are allowed.




###### EXAMPLE 1

```
IFN %1 > 50 G 100
```

If %1 is greater than 50, control will be transferred to label 100.



###### EXAMPLE 2

```
IFN %1 [ 0 G 100
```

If %1 is less than or equal to 0, control will be transferred to label 100.



###### EXAMPLE 3

```
IFN A < %3 G 100
```

If the current parameter is less than %3, control will be transferred to label 100.



Back to [JCL Commands](./../jcl-commands)


