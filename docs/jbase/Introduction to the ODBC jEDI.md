# Introduction to the ODBC jEDI 

**Created At:** 11/14/2019 9:45:58 PM  
**Updated At:** 11/26/2019 9:09:53 PM  


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


If additional knowledge of jBASE is needed, please review the [Introduction to jBASE](/30301-jbase) documentation for information on commands and utilities used in this walk-through.

Additionally, in order to properly perform the steps within the configuration walk-through section of this document, you will need an installed and licensed system running jBASE 5.6 or greater. If you need help completing this task, please review the jBASE installation Guide for [Windows](https://docs.jbase.com/43995-transactional-journaling/windows-installation) or [Linux](https://docs.jbase.com/43995-transactional-journaling/jbase-56-linux-installation-guide).

## Overview

The *ODBC**jEDI* driver/tool-set adds the new *ODBC* file type to jBASE and enables its users to create jBASE files that communicate to new and existing tables within a specified target *RDBMS*. The mapping of table columns and data formatting to this target *RDBMS* is done automatically, so that from the jBASE perspective, your *ODBC* file looks like any other jBASE file (All commands used to interact with a file (ED, COPY, OPEN '&lt;file&gt;', etc) work just like a *hashed* file).

There are several drivers (shared objects), one for each *RDBMS*, that rely on the *jEDI* to generate the mapping between the dynamic array on the jBASE side, to the columns in tables on the *RDBMS* side. These drivers connect to the independent *RDBMS*s via the *ODBC* jEDI module.

The *ODBC jED**I* driver suite relies on various initialization files and environment variables critical for the proper function of the utility. Valid composition of these files and variables is essential for the proper connection and mapping of the jBASE record structure to the desired target *RDBMS*table, and vice versa*.*

----------------------------------------------------------------------------------------------------------------------------

Installing the ODBC jEDI on Linux/Unix

Installing the ODBC jEDI on Windows

[Structure of ODBC jEDI Initialization Files](/structure-of-odbc-jedi-initialization-files)

[Structure of ODBC JEDI Mapping Files](/structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Linux/Unix](/configuring-the-odbc-jedi-on-linux-unix)

[Configuring the ODBC jEDI on Windows](/configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](/using-the-jedi-odbc)
