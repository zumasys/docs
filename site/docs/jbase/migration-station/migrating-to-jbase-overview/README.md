# Migrating to jBASE: Overview

**Created At:** 10/31/2017 9:23:16 PM  
**Updated At:** 5/24/2019 6:40:16 PM  


# 


jBASE is a packaged set of tools, which provides support for MultiValue applications.

These tools enable legacy applications to move from being applications executing within rigid proprietary environments or operating systems to become native applications executing on one or more open platforms.

Once an application has been moved to jBASE, it then executes directly upon the base operating system, UNIX or Windows. All application main programs become either UNIX or Windows native executables, (Windows .exes) and all application subroutines become either UNIX .so files, shared libraries or Windows DLLs, dynamic linked libraries.

In addition jBASE provides full legacy application support for Visual Basic .NET, C#, Visual C++ and Java, via jRCS or jAgent. This enables legacy applications to be redesigned at the front end for presentation via a desktop or laptop in parallel with the original character based application, so that applicable legacy subroutines can continue to be utilized from both arenas.

Another advantage of jBASE is the capability to provide Multivalue applications with access to other databases, e.g. Oracle and DB2. This is possible because of the unique jBASE design which separates the application from the database, thus allowing an application to attain read/write access to many different database systems.

An interface is also provided to enable external applications to access any database, which is available to any jBASE application.

![](./jbaddiagram.jpg)


| **Migrating to jBASE**<br> |
| --- |
| Installation ([Windows](323805-windows-jbase-installation)) ([Linux](jbase-linux-installation-guide))<br> | Installing jBASE<br> |
| [Environment Variables](introduction-to-environment-variables)<br> | Setting environment variables<br> |
| [Migration](migration-checklist)<br> | Migration steps (Includes Video Tutorial)<br> |
| [Restoring Data](restoring-data) ([D3](migrating-to-jbase-d3-system)) ([Universe](migrating-to-jbase-universe))<br> | Restoring legacy data into a jBASE environment<br> |
| [Emulation](emulation)<br> | Emulation settings<br> |
| [Data Conversion](368880-creating-migrating-accounts-and-converting-programs) | Converting legacy directories, files, programs, procs and MD items |
| [PORTBAS](portbas)<br> | Migrating BASIC source code<br> |
| [Keywords](keywords)<br> | Compiler reserved words<br> |
| [Compilation](compiling)<br> | Compiling BASIC programs and subroutines<br> |
| [SYSTEM Functions](282982-system-functions)<br> | The jBASE SYSTEM function<br> |
| [Performance](performance)<br> | Monitoring the performance of jBASE applications<br> |




### OPEN SYSTEMS

- Inter-operate in a non-proprietary way with other systems
- Enable use of 3rd party hardware or software
- Use industry standards where ever possible




### PLATFORM INDEPENDENT

- Most portable language is C, library code written in ANSI C.
- Utilities have been coded in BASIC for ease and speed of maintenance.




### ENVIRONMENT INDEPENDENT

- jBASE does NOT sit between the application and UNIX or Windows.
- The application executes directly upon the base operating system.
- jBASE produces native machine executables and shared libraries UNIX.so, Windows .dll.
- jBASE does NOT produce intermediate object code to be interpreted.
- The application becomes a machine code executable. An application is just another executable or shared library that can then inter-operate.
- No interim manipulation required to obtain access to the native environment.
- jBASE applications can exploit the wide variation of tools provided on platforms, e.g. Source Code control, editors, windows applications.




### DATABASE INDEPENDENT

- Enable applications users to read and write from any database or device. For example, DB2 or ORACLE.
- Release interface specifications and examples for coding drivers or application.
- Provide tools to access SQL databases via embedded SQL.

