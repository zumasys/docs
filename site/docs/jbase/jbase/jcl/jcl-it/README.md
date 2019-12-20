# JCL IT

**Created At:** 5/28/2018 11:12:03 AM  
**Updated At:** 6/11/2018 4:15:27 AM  
**Original Doc:** [318726-jcl-it](https://docs.jbase.com/45792-jcl/318726-jcl-it)  


## Description 

The command reads a tape record into the primary input buffer. It takes the general form:

```
IT{C}{A}
```

where:

- C performs an EBCDIC to ASCII  conversion before the data is put into the buffer.
- A masks 8-bit ASCII  characters to 7 bits (resets the most significant bit to a 0).




## Note: 


> The IT command will read a tape record into the primary input buffer. The new data will be placed at the beginning of the buffer and will replace all existing buffer data.




###### EXAMPLE


| Command  | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| IT<br> | ABC<br> | tape data<br> |




Back to [JCL Commands](jcl-commands)


