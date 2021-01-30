# Developing with the jBASE ODBC Connector

<PageHeader />

**Tags:**
<badge text='sql' vertical='middle' />
<badge text='odbc' vertical='middle' />

## Assumptions

Fore more information about the ODBC API and how to use it, refer to

[https://docs.microsoft.com/en-us/sql/odbc/reference/syntax/odbc-api-reference](https://docs.microsoft.com/en-us/sql/odbc/reference/syntax/odbc-api-reference?view=sql-server-2017)

If the ODBC driver is to be used to develop client applications accessing a jBASE instance, the following prerequisite knowledge is required:

- C/C++
- General DBMS knowledge
- jBASE and concepts of Multivalue databases

Optionally
- Secure Sockets Layer (SSL) protocol

## System requirements

The **jBASE ODBC Connector** is supported on the following platforms:

- jBASE 5.x for Windows

The following system components must be installed prior to installing the ODBC Connector:

- Visual C++ run-time components -  version 8.0.50727.762 or higher

These run-time libraries can be downloaded from Microsoft and are supplied with the following package:

***Visual C++ 2005 SP1 Redistributable Package (x86)***

Note that these run-time components are already included in:

***Microsoft .NET Framework 2.0 SP1 or higher***

Installation of the Visual C++ 2005 SP1 redistributable package is not required if this version of .NET has already been installed.

## References/Imports

To start coding with the **jBASE ODBC Connector** API you will need to add the **jodbc.dll** to your project/solution which should be located in the **system32** directory in the default Windows installation (e.g. typically **C:\WINDOWS**).

[ODBC Quick Start](../odbc-quick-start/README.md)

<PageFooter />
