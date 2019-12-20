# JCL D

**Created At:** 5/28/2018 10:21:16 AM  
**Updated At:** 6/11/2018 4:23:33 AM  
**Original Doc:** [318618-jcl-d](https://docs.jbase.com/45792-jcl/318618-jcl-d)  

**Tags:**
<badge text='display' vertical='middle' />
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description 

This command displays the current parameter of the active input buffer or specific parameters from the PIB. It takes the general form:

```
D{n}{+}
```

Where:

- n specifies the number of the PIB parameter to be displayed. If n is set to 0 (zero), all parameters in the primary input buffer will be displayed.
- + inhibits a NEWLINE at the end of output.




## Note: 


> D with no other qualifiers will display the current parameter of the active input buffer. The pointer position will not be changed.




##### EXAMPLE 1


| Command<br> | Active Input Buffer<br> | Display<br> |
| --- | --- | --- |
| D<br> | ABC^DEF^GHI<br><br>^<br> | DEF<br> |




##### EXAMPLE 2


| Command  | Active Input Buffer  | Display |
| --- | --- | --- |
| D3<br> | ABC^DEF^GHI<br> | GHI<br> |




##### EXAMPLE 3


| Command<br> | Active Input Buffer<br> | Display<br> |
| --- | --- | --- |
| D0<br> | ABC^DEF^GHI<br> | ABC^DEF^GHI<br> |




Go back to [JCL Commands](jcl-coimmands)
