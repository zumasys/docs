# JCL DEBUG

**Created At:** 5/28/2018 10:23:13 AM  
**Updated At:** 6/11/2018 4:17:37 AM  
**Original Doc:** [318625-jcl-debug](https://docs.jbase.com/45792-jcl/318625-jcl-debug)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command turns debug function on or off. It takes the general form:

```
DEBUG [ON|OFF]
```



## Note: 


> When the DEBUG function is turned on, the jCL  program will be suspended before each command (line) is executed. Displayed will be the program name and the next command to be executed. A prompt will appear expecting one of the following commands:



| Command | Description  |
| --- | --- |
| &lt;Enter&gt;<br> | execute current line<br> |
| ?<br> | display list of available commands<br> |
| e<br> | toggle last error display<br> |
| f<br> | toggle file buffer display<br> |
| h<br> | display list of available commands<br> |
| i<br> | toggle input buffer display<br> |
| n<br> | toggle next line display between one and two lines<br> |
| o<br> | toggle output buffer display<br> |
| q<br> | quit (terminate) program<br> |
| x<br> | exit DEBUG function<br> |


After each input, the program name and the next line to be executed will be redisplayed, together with any additional information requested (for example, the content of the input buffers).



Back to [JCL Commands](jcl%20commands)



### 

