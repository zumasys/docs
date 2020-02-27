# JCL F -FREE

**Created At:** 5/28/2018 10:28:43 AM  
**Updated At:** 6/11/2018 4:17:56 AM  
**Original Doc:** [318630-jcl-f-free](https://docs.jbase.com/45792-jcl/318630-jcl-f-free)  
**Original ID:** 318630  
**Internal:** No  

**Tags:**
<badge text='unlock' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='free' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command releases a record lock set by the F-UREAD command. It takes the general form:

```
F-FREE {file-buffer {key}}
```

or

```
F-F {file-buffer {key}} 
```

where:

- file-buffer specifies a file buffer (1 to 9) assigned by an F-OPEN  command.
- key is the key of the record to be unlocked. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.




## Note: 


> If file-buffer is not specified, all record locks set by the jCL  program on the current port, within the current context level will be released. If key is not specified, any outstanding locks for the current file will be released.
> 
> Record locks are also released by F-WRITE  or F-DELETE commands, and at the end of the jCL  program. Use the LIST-LOCKS command to see which records are currently locked.




##### EXAMPLE 1

```
F-FREE
```

Unlocks all records previously locked by this jCL  program.



##### EXAMPLE 2

```
F-FREE 1
```

Unlocks the record specified by the key in field zero of file buffer 1.



##### EXAMPLE 3

```
F-F 1 Key
```

Unlocks the record "Key" in the file associated with file buffer 1.



Back to [JCL Commands](./../jcl-commands)




