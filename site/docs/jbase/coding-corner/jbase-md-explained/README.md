# jBASE MD Explained

**Created At:** 3/13/2018 8:40:30 PM  
**Updated At:** 4/19/2019 8:27:57 AM  
**Original Doc:** [304066-jbase-md-explained](https://docs.jbase.com/coding-corner/304066-jbase-md-explained)  
**Original ID:** 304066  
**Internal:** No  

## jBASE and the MD / VOC file

Unlike other MultiValue platforms jBASE does not rely on an MD/VOC file for commands or access to data files. The only exception is PROC, Paragraphs and Q-pointers

PROCs can be executed with the **jpq** command or **jpqn** command.

Paragraphs can be executed with the **para** command.

## JEDIFILENAME\_MD

A common confusion about the MD when migrating an existing account is that although it may be restored in the same area as all the other files jBASE still needs to *know* which file is the MD.

e.g. if your data was restored as /dbms/MYACCOUNT

```
export JEDIFILENAME_MD=/dbms/MYACCOUNT/MD]D
```

However, another common usage is:

```
export JEDIFILENAME_MD=$HOME/MD]D    [UNIX]
set JEDIFILENAME_MD=%HOME%/MD]D      [Windows]
```

Which instructs jBASE to look for the **MD** in your **HOME** directory (i.e. when changing from one account to another).

Note that you can use **VOC** instead of **MD**:

```
export JEDIFILENAME_MD=$HOME/VOC]D
```

If you are going to be utilizing jBASE accounts (in SYSTEM) then the better approach is to set the JEDIFILEPATH\_MD in attribute 28 of the SYSTEM file:

```
028 /dbms/MYACCOUNT/MD]D
```

&lt;refer to [jBASE Accounts and the SYSTEM file](./../../environment-variables/system-file) for more information&gt;

## JEDIFILEPATH

Another confusion with the **MD** is if you have defined **JEDIFILENAME\_MD**, jBASE still needs to know how to find the physical MD file. In the same way commands/cataloged programs are found (**PATH**, **JBCOBJECTLIST**).

e.g.

```
export JEDIFILEPATH=/dbms/MYACCOUNT:/dbms/ACCUTERM
```

As with the MD and the SYSTEM entry you can define **JEDIFILEPATH** in attribute 27 of the SYSTEM entry.

## Commands and Files

While PATH and JEDIFILEPATH can be used for commands and file access you can still use the MD/VOC for PQ{N} procs, PAragraphs and for files you can use a variety of pointers:

```
QFILE
001 Q
002 MYACCCOUNT
003 MYFILE
```

```
INVOICES
001 F
002 /dbms/MYACCOUNT/INVOICES
003 /dbms/MYACCOUNT/INVOICES]D
```

```
BP
001 DIR
002 /dbms/MYACCOUNT/BP
```

```
LISTU
001 PQ
002 C execute cataloged program
003 HSORTUSERS
004 P
```

## jshow &lt;command&gt;

The jshow command will show how jBASE determines if command is executable and from where:

Below is an example of the standard LISTU command being superseded by an MD proc:

```
jshow LISTU

jCL script:          /dbms/MD/LISTU
Executable (DUP!!):  /opt/jbase/CurrentVersion/bin/LISTU.so
jBC main() version 5.6 Thu Nov 30 14:17:41 2017
Executable (DUP!!):  /opt/jbase/CurrentVersion/bin/LIST
jBC main() version 5.6 Thu Nov 30 14:17:41 2017
```

## UpdateMD

For a consistent Multi-value experience after migrating an account you should run UpdateMD to populate the MD with various connectives and dictionaries for commands like LIST, SORT, LISTDICT, LISTFILES, etc.

[Back to Coding Corner](./../README.md)
