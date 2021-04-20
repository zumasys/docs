# jcompile

<PageHeader />

```bash
jcompile -{abcefhjmrvxEHJRSX?} {-bBaseAddres} {-lLibraryName} {-oOutputExec} {-Ffiledir} {-sOutputSharedName} {-BBaseAddres}
   {-DCompileDefine} {-IIncludePath} {-LLibraryPath} {-Jq{d|i|o|s|x}} {-JJ}  {-O[1-4]} filename {filename {filename ...}}
```

| Option | Description                                                                                                                     |
| ---    | ---                                                                                                                             |
| -a     | Compile SUBROUTINE's to be archive linked.                                                                                      |
| -c     | Compile into to object file and exit.                                                                                           |
| -e     | Exclude default jBASE and operating system libraries                                                                            |
| -g     | Always generate case sensitive strings                                                                                          |
| -h     | Short help.                                                                                                                     |
| -j     | Always use jBASE emulation, ignore JBCEMULATE setting.                                                                          |
| -llib  | Link with library.                                                                                                              |
| -n     | No debug symbols in BASIC code                                                                                                  |
| -oexec | Define name of output executable. Can also define the name of a shared library, in which case an executable is not created.     |
| -p     | Use a pre-existing def file for export list.                                                                                    |
| -P     | Use the new pre-processor                                                                                                       |
| -slib  | Define name of output shared library. This option will also prevent the creation of an executable. Use instead of the -o option if the shared library has a non-standard extension to its name. |
| -v     | Verbose output showing external commands executed.                                                                              |
| -x     | Exclude the libjbase during build of shared libraries. Used only when building libjbase itself.                                 |
| -X     | Exclude the libjbaseutil during build of shared libraries.                                                                      |
| -DDef  | Definition to pass to the C or jBC compiler. Typically used in the source code for conditional compilations.                    |
| -E     | Create an executable only, not a shared library.                                                                                |
| -Fdir  | Tell the jbccom compiler the source came from another file.                                                                     |
| -H     | Verbose help.                                                                                                                   |
| -Idir  | Define a directory for finding the include files used during the compilation of C or jBC source files.                          |
| -JJ    | Generate JIMI statistics in the sourcename.sqm file                                                                             |
| -Jq{?} | Indicate that the code contains embedded SQL statements for either:<br>d   DB2<br>i   Ingres (not fully supported)<br>o   Oracle<br>s   Sybase (not fully supported)<br>x   Informix (not fully supported)  |
| -Ldir  | Define a directory used by the linker to find any libraries defined with the -l option.                                         |
| -On    | Define the optimisation level , where n is 1 to 4 as follows :<br>-O1   Provides no optimisation and addition of OS debug libraries.<br>-O2   Default option, no optimisation, full jBC debug information.<br>-O3   Limited jBC debug trace points , C optimiser called.<br>-O4   Full optimisation with limited jBC debugger.  |
| -R     | Don't link an executable with the jmainfunction.o object. This is used when the main() function is already defined in an object. |
| -S     | Create source files from jBC source and exit. This allows you to examine the C sources created from the jBC source.              |

**filename** - can have one of the following extensions :
| <!---->      | <!---->                      |
| ---          | ---                          |
| filename.a   | archive library to link with |
| filename.b   | jBC source file              |
| filename.c   | C source file                |
| filename.cpp | C++ source file              |
| filename.l   | lex/flex source file         |
| filename.o   | compiled object file         |
| filename.obj | compiled object file         |
| filename.y   | Yacc/Bison source file       |

## Notes

- Optimization levels by default are set to level 2. Once an application has been debugged and is ready for release then Optimization level 4 should be invoked.
- Any options not listed here are automatically passed to the C compilation system. All options must be preceded by a hyphen character

## Simple Examples

```bash
jcompile invoices.b
```

The simplest form of the command compiles the jBC source program invoices.b, held in the current directory then writes the resultant
executable code into an invoices, and invoices.so and an invoices.so.el in the same directory on Linux, an invoices.exe and an invoices.dll in the same directory on Windows.

```bash
jcompile -JO4 myjbc.b cfunctions.c anobject.o -o myapp
```

This command compiles the jBC code in the file myjbc.b, the C code in cfunctions.c, and links the resultant object code with the existing object code anobject.o to produce the UNIX executable myapp. The optional parameter -JO4 informs the compiler that full optimization is to be carried out on the jBC and C code.

### Compilation and execution environment variables

The jBC compiler and executables produced using jcompile recognize a number of UNIX environment variables. Environment variables are normally maintained using your current command shell but may also be manipulated from jBC and C programs. They are used to inform any commands you execute of specific options or configuration requirements. The compiler uses environment variables to specify runtime emulations, compilation options and directory paths for locating source code when debugging.

To minimize the effort of using and configuring the compilation system, the jbc command assumes sensible defaults for all configurable options. Most programmers will only be concerned with the compilation option for emulation.

### JBCEMULATE

When importing code from existing environments, this variable tells the compiler what system it originally ran on. Note that programs and subroutines imported from different systems may be freely mixed. The R83 default will suit almost all code.  

### PATH

The path variable contains a list of all directories that contain executable programs. The jBASE release path should be included in the path list so as jBASE commands can be seen and executed. The path for you should also be added to the path list. For example :

```
export PATH=$HOME/bin:$PATH (UNIX )
set PATH=%home%\bin;%PATH% (Windows)
```

### Shared libraries  

#### LIB  

Windows  

#### LIBPATH  

AIX  

#### LD\_LIBRARY\_PATH  

Linux  

These environment variables should be set to contain paths to located shared and archived libraries, for linking with subroutines and main programs.

#### Note

>An .el or .exp file built by the CATALOG command is different in structure to an .el or an .exp file built direct from jBuildSLib.

### CFUNCTION Example

EncodeKey.b

```
DEFC INT Crypt(VAR)
LOOP
   CRT "Enter key ":
   INPUT CKEY
WHILE CKEY NE " DO
*
* Encrypt key
*
   IF Crypt(CKEY) THEN
      CRT "Encryption successful ": CKEY
   END ELSE
      CRT "Encryption failed ": CKEY
   END

REPEAT
```

EncodeKeyC.c  

```C
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

[Back to Compilation](../README.md)

<PageFooter />
