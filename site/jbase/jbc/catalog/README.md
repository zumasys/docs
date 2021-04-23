# CATALOG

<PageHeader />

## Description

The **CATALOG** command is used to create executables and shared libraries from the application source code. Once catalogued, programs can be run like any other command on the system. The RUN command is maintained for compatibility sake, the catalog command is to be used instead. The command usually takes the form:

```
CATALOG SourceFilename Itemlist
```

Library and binary files will be created for the application ID. In the lib directory there is a jLibDefinition file ( will be created the first time you catalog a subroutine if the file doesn’t already exist), which describes how to build subroutines into shared libraries. The entries in the jLibDefinition file are described below:

- libname naming convention for shared object files,
- exportname export list of shared objects. Used as cross reference to find subroutine functions.
- maxsize maximum size of a shared object library before creating another. When the maximum size of a shared library object is reached then a new shared library object will be created by the **CATALOG** command. The new shared library objects are named according to the definition of libname and are numbered sequentially. For example:

libname=lib%a%n.so,

Where %a = account or directory name and %n = number in sequence.

If subroutines were cataloged in the user account name, ‘username’, then the shared object libraries produced would be named, libusername0.so libusername1.so libusername2.so and so on.

## Note #1

> To guard against libraries being cataloged incorrectly, perhaps under the wrong user account name, the definition of libname should be changed to libusername%n.so. This will ensure that any shared objects are created using the proper user account name.

The shared library objects, .so files, contain the executables for subroutine source code. The shared library objects are linked at runtime by the jBASE call function, which utilises the dynamic linker programming interface. The dynamic linker will link shared libraries at the start of program execution time, or when requested by the jBASE call function.

For example, each executable created using the jBASE compiler will be linked with the jBASE jEDI library functions, libjedi.so, at compilation time. This shared library enables database record retrieval and update and will be loaded into memory by the dynamic linker when an application executable starts execution.

Executables and shared library objects can be removed from the bin and lib directories by using the [DECATALOG](./../decatalog-and-delete-catalog) command.

The shared library containing any subroutines required by the executing program will only be loaded into memory when initially requested by the subroutine call. Only one copy of any shared library is required in memory at any time, thus reducing program memory requirements.

The $HOME/lib directory also contains a directory where all the subroutine objects, .o files, are held.

These are required for making the shared library, .so files.

The $HOME/lib directory also contains an export list, .el file, built by the **CATALOG** command, which is used as a cross reference when dynamically linking shared objects at run time.

The main application program executables are placed into the $HOME/bin directory.

To enable the application executables to be found the $HOME/bin path should be added to the PATH environment variable.

To enable the executing application to call the correct application subroutines the JBCOBJECTLIST or LD\_LIBRARY\_PATH environment variable should be assigned to the application shared library path, $HOME/lib. If the main application program or any subroutine programs make calls to subroutines in other directories then the path of the shared library directories should also be added to the JBCOBJECTLIST or LD\_LIBRARY\_PATH environment variable.

It is recommended that executables or subroutines of the same name are not available from different directories. This can make application execution very confusing and is reliant on assigning the lib or bin directories to the environment variable in the correct sequence. The assignment of the environment variables should be included and exported in the .profile script file.

## Note #2

>As of jBASE 5.7.6 and later, CATALOG will issue a warning if the command being cataloged clashes with another command found in the user's PATH.  
>[See also PN5_60927](./../../release-notes/5.7/5.7.6/pn5_60927/README.md)  
>There are 2 new options now available with CATALOG:  
>The (O) option will override the "Do you wish to continue with CATALOG?" prompt and so the catalog will always go ahead despite any warnings.  
>The (W) option will suppress the warning messages entirely and not do any checks. Using this option gives the same behaviour as prior to this patch.  
>The jED editor provides 2 new options, W and O, which can be used in the same way as the (W and (O options described above.  

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
