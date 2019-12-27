# JCL O

**Created At:** 5/28/2018 11:15:49 AM  
**Updated At:** 6/11/2018 4:17:46 AM  
**Original Doc:** [318733-jcl-o](https://docs.jbase.com/45792-jcl/318733-jcl-o)  
**Original ID:** 318733  
**Internal:** No  

**Tags:**
<badge text='output' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Descritpion 

This command outputs a text string to the terminal. It takes the general form:

```
O{text}{+}
```

where:

- text is the text to be displayed.
- + inhibits a NEWLINE at the end of the output and leaves the cursor positioned to the right of the last character displayed. This is often used when prompting for input.




## Note: 


> The O command has largely been replaced by the T command, which also provides cursor positioning and special display features.


If no text is supplied, a blank line will be output.



###### EXAMPLE 1


| Command  | Terminal Output |
| --- | --- |
| OSALES SYSTEM<br> | SALES SYSTEM<br> |




###### EXAMPLE 2


| Command  | Terminal Output  |
| --- | --- |
| OEnter Password + IP:<br> | Enter Password :<br> |


### 


Back to [JCL Commands](./../jcl-commands)
