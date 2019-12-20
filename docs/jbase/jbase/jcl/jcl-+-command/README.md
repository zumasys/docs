# JCL + command

**Created At:** 5/28/2018 9:54:33 AM  
**Updated At:** 6/11/2018 4:29:50 AM  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='input' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

+ Adds an integer value to the current parameter in the active input buffer. It takes the general form:

```
+n
```

Where n is the integer to be added.

## Note: 


> If the number of characters in a parameter increases as a result of the + command, the other parameters will be moved to the right. If a parameter is preceded by a + sign, the sign will be replaced by a zero. If the buffer pointer is at the end of the buffer, a new parameter will be created. If the referenced parameter is non-numeric, a zero is used.


##### 


##### EXAMPLE 1

Command PIB Before PIB After

```
+30 AAA^+20^333 AAA^050^333
a a
```

##### 


##### EXAMPLE 2

Command PIB Before PIB After

```
+100 BBB^AA^44 BBB^100^44
a a
```



EXAMPLE 3

Command PIB Before PIB After

```
+51 ABC^0000^55 ABC^0051^55
a a
```



Back to [JCL Commands](jcl-commands)


