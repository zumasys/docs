# JBC

**Created At:** 11/1/2017 12:26:23 AM  
**Updated At:** 11/27/2017 6:51:38 AM  
**Original Doc:** [jbc](https://docs.jbase.com/49435-compilation/jbc)  
**Original ID:** 283763  
**Internal:** No  




```
jbc {-option {...-option}} file {file ...}
```




| Option<br> | Description<br> |
| --- | --- |
| -C<br> | Generate object file (.o) and terminate<br> |
| -JO1<br> | Optimization level 1.  No code optimizations are performed and debug information is produced for both the C debugger and the jBASE debugger.<br> |
| -JO2<br> | Optimization level 2 (default) .Debug information is produced for the jBC debugger but not for the C debugger. Minimal optimization occurs.<br> |
| -JO3<br> | Optimization level 3. Debug information is produced for the jBC debugger. Optimization of jBC occurs and matrix boundary checking is removed. The C code is optimized by the standard optimizations of the resident C compiler.<br> |
| -JO4<br> | Optimization level 4. Full optimization. No debugging information is produced. The jBC code is fully optimized and no run time checking is done on array boundaries and the like. All symbol information is removed from the final executable and all available (safe) optimizations are performed by the resident C compiler.<br> |
| -Jd<br> | Delete any intermediate object files produced in the compilation process.<br> |
| -Ja&lt;lib.a&gt;<br> | The object files (.o) files produced in the compilation process are placed in the library lib.a (Unix only)<br> |
| -JA&lt;lib.a&gt;<br> | As -Ja except that the jbcbuildlib command is executed against lib.a. This option is used on libraries containing subroutines called using CALL @var. (Unix only)<br> |
| -JLS<br> | Force subroutines to be static-linked. This means that the executing program will have knowledge of the subroutines at compile time. Without this option the subroutines will be searched for at runtime. ( Unix only )<br> |
| -Jla<br> | Link with conventional Archive libraries. In modern implementations this options is fairly useless and in fact some implementations of jbc will ignore this flag altogether. However it can be useful if the developer wishes to ship and executable program that is entirely self sufficient. Note that programs linked with archive libraries are much larger than those linked with shared libraries. (Unix Only)<br> |
| -Jo<br> | This option eliminates the need for the -o destfile option. It names the destination file by removing the suffix of the first .b file given to the jbc compiler.<br> |
| -Jv<br> | Verbose mode. All compilation stages are reported and the -v option is passed to compilation stages that support it.<br> |
| -Js<br> | Produce compilation statistics for each .b file.<br> |
| -JC[Abilm:stuv]<br> | The -JC option introduces options that are meant only for the jbccom compiler.<br> |
| -Jq{d|i|m|o|x}<br> | This option tells the compiler that the source code contains embedded SQL statements for a particular database. The sub-options are:<br><br>| d<br> | IBM DB2<br> |<br>| i<br> | Ingres<br> |<br>| m<br> | Microsoft SQL<br> |<br>| o<br> | Oracle<br> |<br>| x<br> | Informix<br> |<br><br>Also see Embedded SQL for jBC.<br> |
| -S<br> | Generate C code and terminate.<br> |




**Notes:**

- Optimization levels by default are set to level 2. Once an application has been debugged and is ready for release then Optimization level 4 should be invoked.
- Some of the options only refer to Unix platforms.
- Any options not listed here are automatically passed to the C compilation system. All options must be preceded by a hyphen character


**Simple Examples**

```
jbc invoices.b
```

The simplest form of the command compiles the jBC source program invoices.b, held in the current directory then writes the resultant
executable code into the default file a.out in the same directory.

```
jbc -JO4 myjbc.b cfunctions.c anobject.o -o myapp
```

This command compiles the jBC code in the file myjbc.b, the C code in cfunctions.c, and links the resultant object code with the existing object code anobject.o to produce the UNIX executable myapp. The optional parameter -JO4 informs the compiler that full optimization is to be carried out on the jBC and C code.



### COMPILATION AND EXECUTION ENVIRONMENT VARIABLES

The jBC compiler and executables produced using jbc recognize a number of UNIX environment variables. Environment variables are normally maintained using your current command shell but may also be manipulated from jBC and C programs. They are used to inform any commands you execute of specific options or configuration requirements. The compiler uses environment variables to specify runtime emulations, compilation options and directory paths for locating source code when debugging.

To minimize the effort of using and configuring the compilation system, the jbc command assumes sensible defaults for all configurable options. Most programmers will only be concerned with the compilation option for emulation.



### JBCEMULATE

When importing code from existing environments, this variable tells the compiler what system it originally ran on. Note that programs and subroutines imported from different systems may be freely mixed. The R83 default will suit almost all code. Values: ROS, R83, PRI, ULT, ADS, FUJ, UNV, UND, SEQ



### PATH

The path variable contains a list of all directories that contain executable programs. The jBASE release path should be included in the path list so as jBASE commands can be seen and executed. The path for you should also be added to the path list. For example :

export PATH=$HOME/bin:$PATH (Unix )
set path=%home%\bin;%PATH% (Windows)

LIB NT/Win95
LIBPATH AIX
SHLIB\_PATH HPUX
LD\_LIBRARY\_PATH UNIX

This environment variable should be set to contain paths to located shared and archived libraries, for linking with subroutines and main programs.



### COMPILER ERROR MESSAGES

The jbc error messages are not available for users to change. Foreign language versions of the compiler are however available. The format of a jbc error (or warning) message is as follows:

**[ErrorCount ( RefNum)]: "FileName", LineNum (Offset) Near .. "ErrorMessage" Line Of Source Code Containing The Error ^**Where:


| ErrorCount<br> | the number of errors seen so far.<br> |
| RefNum<br> | the reference number of the error message.<br> |
| FileName<br> | the name of the source file where the error was found.<br> |
| LineNum<br> | the line number in the file where error was found.<br> |
| Offset<br> | the approx. character offset in the line. Tabs count as 8 chars.<br> |
| Near<br> | the token in error. This may be a KEYWORD.<br> |
| ErrorMessage<br> | meaningful message explaining the error.<br> |
| ^<br> | pointer to the source code where the lexical analyzer stopped.<br> |




### JBASE PREPROCESSOR - JPP

The jpp is a sophisticated macro pre processor which provides complex conditional compilation facilities, supporting compiler directives compatible with C and BASIC compilers.

```
EQUATE symbol TO substitute #define symbol or -JCDsymbol
EQUATE Day TO REM(DATE(),7) #ifdef symbol
EQUATE MonDay TO 1 
IF Day = MonDay THEN CRT "Monday" #endif
```

### JBASE CROSS COMPILER - JBCCOM CONVERTS BASIC TO C

C preprocessor - cpp C Macro Preprocessor
C Compiler - ccom
Assembler optimiser - coptim
Assembler - as
Linker - ld


| Suffix<br> | Meaning<br> |
| --- | --- |
| .b<br> | jBASE Basic source file.<br> |
| .c<br> | "C" source file.<br> |


Unix


| Suffix<br> | Meaning<br> |
| --- | --- |
| .o<br> | Unix Object file.<br> |
| .a<br> | Archive library file.<br> |
| .so<br> | Shared library file. (SVR4)<br> |
| .sl<br> | Shared library file. (HPUX)<br> |
| .o<br> | Shared library file. (AIX)<br> |
| .so.el<br> | Export library<br> |


NT/Win95


| Suffix<br> | Meaning<br> |
| --- | --- |
| .obj<br> | NT Object file.<br> |
| .dll<br> | Dynamic linked library file.<br> |
| .lib<br> | Linked library for linking.<br> |
| .def<br> | Library definition file.<br> |
| .exe<br> | Executable file.<br> |
| .exp<br> | Export List<br> |


Note: A .el or .exp file built by the CATALOG command is different in structure to a .el or a .exp file built direct from jBuildSLib.

### CFUNCTION EXAMPLE

EncodeKey.b

```
DEFC INT Crypt(VAR)
LOOP
   CRT "Enter key ":
   INPUT KEY
WHILE KEY NE " DO
*
* Encrypt key
*
   IF Crypt(KEY) THEN
   CRT "Encryption successful ":KEY
   END ELSE
   CRT "Encryption failed ":KEY
   END

REPEAT
EncodeKeyC.c
#include jsystem.h
#include crypt.h

INT32 Crypt( UserString )
VAR *UserString;
{
char *Source;
char *Result;

/*
** Check for unassigned variable
*/

if ( UserString == NULL )
return(0);

/*
** Ensure null terminated string
*/

CONV_SFB(UserString);

/*
** Point to Source string
*/

Source = (char *) UserString->VAR_STRING_ADDR;

#ifdef DEBUGX
fprintf(stderr,"String before encryption %s\n",Source);
#endif

/*
** Encrypt Source using "az" as salt
*/

Result = crypt(Source, "az");

#ifdef DEBUGX
fprintf(stderr,"String after encryption %s\n",Result);
#endif

/*
** Copy result back to UserString
*/

STORE_VBS(UserString,(STRING *) Result+2);

return(1);
}
```
