# JCL MVA

**Created At:** 5/28/2018 11:14:36 AM  
**Updated At:** 6/1/2018 5:31:03 PM  
**Original Doc:** [318731-jcl-mva](https://docs.jbase.com/45792-jcl/318731-jcl-mva)  
**Original ID:** 318731  
**Internal:** No  

**Tags:**
<badge text='copy' vertical='middle' />
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='file' vertical='middle' />

## Description 

This command copies a value from the source to the destination buffer and stores it as a multivalue. It takes the general form:

```
MVA destination source
```

where:

- destination is a direct or indirect reference to a buffer or select register which is to receive the data.
- source is the data to be copied. The source can be a direct or indirect reference to a buffer or select register, or a literal string.




## Note:


> New values will be copies to the destination in ascending ASCII  sequence. If a new value already exists in the destination buffer, it will not be copied. If the source data is multivalued, it will be copied to the destination without modification. This might create duplicate values and invalidate the ascending sequence.
> 
> If the destination is the input buffer, the buffer pointer will be left at the beginning of the destination parameter.




###### EXAMPLE 1

PIB contains: ABC^DEF^GHI


| Command<br> | File Buffer 1 Before<br> | File Buffer 1 After<br> |
| --- | --- | --- |
| MVA &1.1 %3<br> | 000 Key<br>001 FFF]HHH<br>002 YYY<br> | 000 Key<br>001 FFF]GHI]HHH<br>YYY<br> |




###### EXAMPLE 2

File buffer 2 contains:

```
000 Key
001 GG]YY
002 AAA
```


| Command  | File Buffer 1 Before  | File Buffer 1 After  |
| --- | --- | --- |
| MVA &1.1 &2.1<br> | 000 Key<br>001 FFF]HHH<br>002 YYY<br> | 000 Key<br>001 FFF]GG]YY]HHH<br>YYY<br> |




Back to [JCL Commands](./../jcl-commands) .




