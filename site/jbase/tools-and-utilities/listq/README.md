# LISTQ  

<PageHeader />

## Description  

The **LISTQ** utility displays information about Q-pointer chains.

[JEDIFILENAME_MD](./../../environment-variables/jedifilename_md/README.md) and [JEDIFILENAME_SYSTEM](./../../environment-variables/jedifilename_system/README.md) are required to be valid for this utility to work, otherwise an error message is displayed.

## Syntax

```
LISTQ <<filename>>
```

where **filename** is a valid Q-pointer is the current MD.

## Example - Windows

```
jsh SandBox ~ -->LISTQ QFILE
=============================
System file: D:\jBASE5\SYSTEM
Q-to-Q resolution is not enabled.
=============================
Level: 1
Home: D:\jBASE5\SandBox
MD:   D:\jBASE5\SandBox\MD
ID:   QFILE
Item: Q^jBASEAdmin^MD

    Level: 2
    Home: D:\jBASE5\jBASEAdmin
    MD:   D:\jBASE5\jBASEAdmin\MD
    ID:   MD
    Item: Q

Destination file: D:\jBASE5\jBASEAdmin\MD
```

## Example - Linux

```
jsh SandBox ~ -->LISTQ QFILE
=========================
System file: /dbms/SYSTEM
Q-to-Q resolution is enabled.
=========================
Level: 1
Home: /dbms/SandBox
MD:   /dbms/SandBox/MD]D
ID:   QFILE
Item: Q^Train^JBP

Destination file: /dbms/Train/JBP
```

Back to [Tools and Utilities](./../README.md)

<PageFooter />
