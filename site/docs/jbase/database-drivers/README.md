# Database Drivers

**Created At:** 7/6/2018 10:20:58 AM  
**Updated At:** 9/13/2018 2:43:02 PM  
**Original Doc:** [database-drivers](https://docs.jbase.com/30301-jbase/database-drivers)  
**Original ID:** 325728  
**Internal:** No  

## Description

The jBASE design provides for database independence by allowing end users to code additional database drivers thus enabling a infinite number of database types to be used by the same application. In addition jBASE provides an example of how to interface to the jBASE jEDI drivers.

## Example of an application interface into jBASE JEDI DRIVERS

Copy the "jediCExample.c" program from the "src" subdirectory in the jBASE release directory and compile.

## UNIX #1

```
cc jediCExample.c -o CExample -I$JBCRELEASEDIR/include -ljedi -lld
```

## Windows #1

```
cl /Zi -o CExample jediCExample.c /I%JBCRELEASEDIR%\include libjbase.lib
```

Execute CExample as:

```
CExample -Options InputFile OutputFile
```

where Options may be:

- -c Clear OutputFile before copy,
- -d Delete records from InputFile after copy,
- -o Overwrite OutputFile records.

## Example of jBASE JEDI Driver

Copy the "jediDExample.c" program from the "src" subdirectory in the jBASE release directory and compile.

## UNIX #2

```
cc jediDExample.c -c -I$JBCRELEASEDIR/include
jBuildSLib jediDExample.o -o $HOME/lib/ddrivers.so
```

## Windows #2

```
cl /Zi /c jediDExample.c /I%JBCRELEASEDIR%\include
jBuildSLib jediDExample.obj -o %HOME%\lib\libdrivers.dll
```

## Create jBASE File Pointer

```
ED . EXAMPLE
001 JBC__SOB ExampleInit .d
```

## Create standard directory with ".d" suffix

```
mkdir EXAMPLE.d
```

## Edit jBASE File Pointer

```
ED EXAMPLE 1 2 3
```

## List directory EXAMPLE.d

```
jdir or ls EXAMPLE.d
```

## Example jBASE JEDI Subroutine Driver

Copy the "GEN\_SUB.b" program from the "src" subdirectory in the jBASE release directory and compile.

```
jbc -c GEN_SUB.b
jBuildSLib -o $HOME/lib/libGEN.so GEN_SUB.o
jBuildSLib -o %HOME%\lib\libGEN.so GEN_SUB.obj
```

## Create normal HASH files

```
CREATE-FILE GENFILE 1 1
```

## Create jBASE File Pointer

```
ED . GENFILEX
JBC__SOB JediInitSUB GEN_SUB GENFILE
```

## Edit jBASE File Pointer

```
ED GENFILEX 1 2 3
```

## List hash file.

```
LIST GENFILE
```

## Example jBASE JEDI Subroutine Driver for ORACLE on Windows 

Copy the "ORA\_SUB.b" program and "sqlsubs.pc" from the "src" subdirectory in the jBASE release directory and precompile with ORACLE compiler and then compile.

Set library path to include Oracle libraries

```
set lib=%ORACLE_HOME%\pro21\lib;%lib%
```

Set jBASE environment variables for ORACLE NT libraries and precompiler options.

```
set JBC_SQLPREPROC=proc21 mode=oracle iname=
set JBC_SQLLIBS=/MD SQLLIB17.LIB
```

Copy jBASE jmv.exe to move.exe as required by jbc -Jqo options

```
cp C:\JBASE30\bin\jmv.exe C:\JBASE30\bin\move.exe
```

In SQL\*PLUS create SQL table:

```
SQL> CREATE TABLE ORATABLE ( ORAID VARCHAR(8) NOT NULL PRIMARY KEY, ORARECORD VARCHAR2(1500));
```

Precompile sqlsubs error functions:

```
proc21 mode=oracle iname=sqlsubs.pc
```

Compile sqlsubs.c in to a .obj

```
cl /c /Zi /D_X86=1 /DWIN32 sqlsubs.c /IC:\JBASE30\include
```

Precompile the ORA\_SUB.b subroutine:

```
jbc -c -Jqo -Jv ORA_SUB.b
```

Build a dynamic linked library contain your subroutine and error functions:

```
jBuildSLib -o libORA.dll ORA_SUB.obj sqlsubs.obj -l SQLLIB17.LIB
```

Copy dll and def to your %HOME% "lib" subdirectory so it can be found by jEDI:

```
cp libORA.dll %HOME%\lib
cp libORA.def %HOME%\lib
cp libORA.lib %HOME%\lib
```

Create jBASE File Pointer

```
ED . EXAMPLE1
Top
.I
000+ JBC__SOB JediInitORA ORA_SUB ORATABLE
000+
.FI
```

Access SQL table via jEDI subroutine driver

```
ED ORATABLE A B C
LIST ORATABLE
COUNT ORATABLE
```

In SQL\*PLUS check updates

[Back to Knowledgebase](./../README.md)
