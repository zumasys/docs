# Introduction to the ODBC jEDI

<PageHeader />

## Technical Definitions

The following terms/abbreviations will be penned in italics in the following sections and child documents to indicate that they are defined within this section:

- ODBC - Open Database Connectivity
- RDBMS - Relational Database Management System
- ANSI - American National Standards Institute
- SQL - Structured Query Language; A standardized query language for requesting information from a relational database
- DSN - Data Source Name
- jQL - jBASE’s version of the ENGLISH/ACCESS query language from Reality/PICK
- jEDI - jBASE External Device Interface

## Technical Prerequisites

Due to the technical nature of this document, prerequisite knowledge of the following is considered essential:

- jBASE and concepts of MultiValue databases
- Concepts of at least one *RDBMS*

If additional knowledge of jBASE is needed, please review the [Introduction to jBASE](./../../../faq/jbase-fundamentals/README.md) documentation for information on commands and utilities used in this walk-through.

Additionally, in order to properly perform the steps listed in the installation and configuration sections of this document, you will need a licensed system running jBASE 5.6 or greater. If you do not yet have a valid licensed jBASE system, please contact Zumasys licensing to obtain the components needed to construct one.

## Overview

The *ODBC jEDI* driver/tool-set adds the new *ODBC* file type to jBASE, and gives users the ability to create jBASE files that map jBASE records to tables of any given target *RDBMS*. The data formatting and mapping of jBASE table columns to target *RDBMSs* is done automatically, so that from the jBASE perspective, your *ODBC* file looks like any other jBASE file (All commands used to interact with a file (jED, COPY, OPEN '&lt;file&gt;', etc) work just like a *hashed* file.

There are several drivers (shared objects), one for each *RDBMS*, that rely on the *jEDI* to generate the mapping between the dynamic array on the jBASE side, to the columns in tables on the *RDBMS* side. These drivers connect to the independent *RDBMS*s via the *ODBC* jEDI module.

The *ODBC jEDI* driver suite relies on various initialization files and environment variables critical for the proper function of the utility. Valid composition of these files and variables is essential for the proper connection and mapping of the jBASE record structure to the desired target *RDBMS* table, and vice versa.

----------------------------------------------------------------------------------------------------------------------------

[Installing the ODBC jEDI on Linux/UNIX](./../installing-the-odbc-jedi-on-linux&unix)

[Installing the ODBC jEDI on Windows](./../installing-the-odbc-jedi-on-windows)

[Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files)

[Structure of ODBC jEDI Mapping Files](./../structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Linux/UNIX](./../configuring-the-odbc-jedi-on-linux&unix)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](./../using-the-odbc-jedi)

Back to [ODBC](./../README.md)

<PageFooter />
