# jEDI Development Kit Overview

<PageHeader />

When the architects of jBASE were doing their initial design they took into account that many customer requirements mandated mainstream relational database systems (e.g. Oracle, DB2, SQL Server). So, from the very beginning, the "environment" was separated from the "I/O" of the database. This concept is known as the jEDI: jBASE External Device Interface.

Built-in to jBASE are several jEDIs which regular jBASE users use all the time (most likely) without realizing. For example the typical J4 hash type (the default on most jBASE installations) which is the stock standard multi-value hash file is a jEDI driver in a sense. The main difference, other than the fact that it does not connect to an external database, is that it is built-in to the jBASE libraries as opposed to being a "shared library". A better example is jRFS: jBASE Remote File System. This jEDI does in fact connects to an external database, it just happens to be a jBASE database running on another server.

The original intention of using the jEDI as a relational gateway was that each file definition would have its own jEDI driver, i.e. one subroutine/shared-library per file to handle the transformation of mapping the multi-value data to columns/tables. Although this allows for explicit tuning for each file it becomes unwieldly and also potentially stresses the memory of the server as all these libraries need to be loaded into memory.

This is where the jBASE jEDI Driver Kit (jEDIDK) comes in. It uses a translation record to map the multi-value data to the columns and tables in the target database. This translation interface takes care of all the complex disassembly and reassembly of the multi-value record to RDBMS tables. This design concept can be reused no matter which jEDIDK type you use. The current suite of jEDIDK types are:

- ODBC    -   Generic for any ODBC compliant database
- PLSORA  -   Oracle using PL/SQL packages[1]  
- OCIORA  -   Oracle using the OCI api
- OLESQL  -   SQL Server using a mixture of OLEDB and T-SQL
- DB2EXP  -   DB2 using CLI (this is similar to ODBC)

[1] Does not conform completely to FullyExpanded = 2 (see [jEDIdrivers.ini](./../jedidrivers/README.md))

Back to [jEDIJDK](./../README.md)

<PageFooter />
