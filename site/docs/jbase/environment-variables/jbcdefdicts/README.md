# JBCDEFDICTS

**Created At:** 6/8/2018 12:24:45 PM  
**Updated At:** 8/22/2018 8:46:34 AM  
**Original Doc:** [jbcdefdicts](https://docs.jbase.com/41717-environment-variables/jbcdefdicts)  
**Original ID:** 321281  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Specifies one or more files that are used to hold dictionary items for use by [jQL](./../../jql/jql). When JBCDEFDICTS is set, jQL will scan each specified file for dictionary items that cannot be located in the dictionary of the queried file. When JBCDEFDICTS is not set, jQL will scan just the the dictionary of the queried file then the MD/VOC.

## Values

Colon separated file paths (Unix)

Semicolon separated file paths (Windows)



## Default

None.



## Setting

**Unix**

```
export JBCDEFDICTS=/home/PRIVATEDICT]D:/usr/globals/GLOBALDICT]D
```



**Windows**

```
set JBCDEFDICTS=C:\home\PRIVATEDICT]D;C:\globals\GLOBALDICT]D
```
