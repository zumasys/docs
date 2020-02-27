# JCL X

**Created At:** 5/29/2018 2:28:19 PM  
**Updated At:** 6/11/2018 4:26:08 AM  
**Original Doc:** [318944-jcl-x](https://docs.jbase.com/45792-jcl/318944-jcl-x)  
**Original ID:** 318944  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command halts execution of the program and returns control to the shell.

```
X{text}{+}
```

where:

- text is any text to be displayed on exit.
- + suppress a NEWLINE at exit or after text output.




## Note: 


> The X command returns control directly to the shell.




###### EXAMPLE 1

```
F-OPEN  1 SALES
XCannot Open  SALES file!
```

The X command stops execution of the program if the file SALES cannot be opened, and displays a suitable message.



See also List processing

Back to [JCL Commands](./../jcl-commands)



###### 

