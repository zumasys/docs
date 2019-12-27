# JEDIFILENAME_MD

**Created At:** 11/3/2017 3:50:39 PM  
**Updated At:** 1/15/2019 10:43:38 AM  
**Original Doc:** [jedifilename_md](https://docs.jbase.com/41717-environment-variables/jedifilename_md)  
**Original ID:** 284170  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />
<badge text='environment variables' vertical='middle' />
<badge text='jql' vertical='middle' />
<badge text='pointers' vertical='middle' />

## Description

This variable should be used if you require the use of a MD or VOC file to hold Q pointers, jCL programs, paragraphs or entries for jQL (jBASE Query Language). If you have loaded an account-save into your home directory then you might wish to set this variable. This will then allow you to:

- Execute jCL programs and paragraphs directly from the MD/VOC (using **jsh**or EXECUTE/CHAIN etc.)
- Support Q-pointers and F-pointers in the MD/VOC file (may need [**JEDIFILENAME\_SYSTEM**](./../jedifilename_system))
- On systems with 14 char filename limits, create cross reference items for executables from the original name to the new name.




## Values

Valid file path.  While it is not required, it is strongly advised that this value be set to the complete path of the MD and not a relative path (as an example, **/home/MD]D**should be used instead of **./MD]D**).



## Default

None

## Setting

As per normal environment variable, so it can be set at any time by the commands:

**Unix**

```
export JEDIFILENAME_MD=/usr/GLOBAL/MD]D
```

**Windows**

```
set JEDIFILENAME_MD=D:\GLOBAL\MD]D
```
