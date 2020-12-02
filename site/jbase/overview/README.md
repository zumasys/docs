# jBASE Overview

<PageHeader />

jBASE is a packaged set of tools, which provides support for Multivalued applications.  
These tools enable legacy applications to move from being applications executing within rigid proprietary environments or operating systems to become native applications executing on one or more open platforms.  
Once an application has been moved to jBASE, it then executes directly upon the base operating system, UNIX or Windows. All application main programs become either UNIX or Windows native executables, (Windows .exes) and all application subroutines become either UNIX .so files, shared libraries or Windows DLLs, dynamic linked libraries.  
In addition, jBASE provides full legacy application support for Visual Basic .NET, C#, Visual C++ and Java, via jRCS or jRemote/jAgent. This enables legacy applications to be redesigned at the front end for presentation via a desktop or laptop in parallel with the original character-based application, so that applicable legacy subroutines can continue to be utilized from both arenas.  
Another advantage of jBASE is the capability to provide Multivalued applications with access to other databases, e.g. Oracle, DB2, Mongo. This is possible because of the unique jBASE design which separates the application from the database, thus allowing an application to attain read/write access to many different database systems.  
An interface is also provided to enable external applications to access any database, which is available to any jBASE application.  

## Open Systems  

- Inter-operate in a non-proprietary way with other systems.
- Enable use of 3rd party hardware or software.
- Use industry standards wherever possible.  

## Platform Independent  

- Most portable language is C, library code written in ANSI C, C++.
- Utilities have been coded in BASIC for ease and speed of maintenance.

## Environment Independent  

- jBASE does NOT sit between the application and UNIX or Windows.
- The application executes directly upon the base operating system.
- jBASE produces native machine executables and shared libraries UNIX.so, Windows .dll.
- jBASE does NOT produce intermediate object code to be interpreted.
- The application becomes a machine code executable. An application is just another executable or shared library that can then inter-operate.
- No interim manipulation required to obtain access to the native environment.
- jBASE applications can exploit the wide variation of tools provided on platforms, e.g. Source Code control, editors, windows applications.

## Database Independent

- Enable applications users to read and write from any database or device. For example, DB2 or ORACLE.
- Release interface specifications and examples for coding drivers or application.
- Provide tools to access SQL databases via embedded SQL.

## Design  

![jBASE Design](./jbase_diagram.png)

## Platforms  

- Red Hat Linux 7/8
- AIX 6/7
- Windows 2012/2016/2019

Back to [Knowledgebase](./../README.md)

<PageFooter />
