# TERMINFO

**Created At:** 7/13/2018 8:33:02 AM  
**Updated At:** 8/22/2018 9:50:51 AM  
**Original Doc:** [326793-terminfo](https://docs.jbase.com/41717-environment-variables/326793-terminfo)  

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='terminal' vertical='middle' />

## Description

The TERMINFO environment variable is used for terminal handling. The environment variable is supported only on platforms that provide full support for terminfo libraries.



## Values

The TERMINFO environment variable defines a directory where the terminal settings are read from.

## Default

On UNIX, the default varies depending on a system and how it has been set up.

## 
Setting

Normal environment variable, so it can be set at any time by the commands:

**UNIX**

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$JBCRELEASEDIR/lib
```



**Windows**

```
set TERMINFO=C:\term
```
