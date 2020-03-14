# Embedded SQL for jBASE BASIC

**Created At:** 10/4/2017 1:15:08 PM  
**Updated At:** 1/5/2018 6:42:42 PM  
**Original Doc:** [279582-embedded-sql-for-jbase-basic](https://docs.jbase.com/36868-jbase-basic/279582-embedded-sql-for-jbase-basic)  
**Original ID:** 279582  
**Internal:** No  

## Overview

The name "SQL" is an abbreviation for "Structured Query Language". The SQL language enables the defining, manipulating and controlling of data in a relational database. A relational database is a database that appears to the user as a collection of tables. A table is defined to be an unordered collection of rows. Finally the SQL terminology tends to refer to records as rows and fields within a record as a columns within a row.

## Implementation

Embedded SQL is a version of SQL designed for direct incorporation into hosts programs or specifically in the case of jBASE, into jBASE BASIC programs.

An Embedded SQL jBASE BASIC program contains normal jBASE BASIC code statements plus an Embedded SQL declare section, zero or more embedded cursor definitions, zero or more embedded exception declarations and one or more Embedded SQL statements.

Embedded SQL declarations, definitions and statements are prefixed by the reserved words **EXEC SQL**. This part of the Embedded SQL standard also enables the jBASE BASIC preprocessor to recognize and distinguish SQL statements from the normal jBASE BASIC code statements. The Embedded SQL statements are terminated by a semicolon.

Embedded SQL statements can include references to jBASE BASIC variables. The jBASE BASIC variables must be prefixed with a colon to distinguish them from SQL column names. The jBASE BASIC variables cannot be qualified or subscripted and must refer to scalars, i.e. character strings or numbers, not arrays or expressions.

All jBASE BASIC variables that will be referenced in Embedded SQL statements must be defined within an Embedded SQL declare section, the jBASE BASIC variable definitions are limited to simple forms. i.e. no expressions or arrays.

An Embedded  SQL cursor must not appear in an Embedded SQL statement before it has been defined by an Embedded SQL cursor definition.

Any jBASE BASIC variables that will be referenced in Embedded SQL statements must have a data type that is compatible with the SQL data type of the column with which they are to be compared or assigned. However this requirement does not prevent jBASE BASIC variables from using the same name as Embedded SQL column references.

Embedded SQL statement exceptions can be handled either by utilizing the [SYSTEM(0)](./../system-functions) function or predetermined by the SQL WHENEVER statement.

An example of using Embedded SQL for Oracle would be creating a file ' PartEntry.b' as :

```
*
* Declare jBASE BASIC vars to use in Embedded SQL statements ( A )

EXEC SQL BEGIN DECLARE SECTION;
INT PartNo;
STRING(20) PartName;
STRING(16) User;
STRING(16) Passwd;
EXEC SQL END DECLARE SECTION;
*
* Predetermine action on SQLERROR ( B )
EXEC SQL WHENEVER SQLERROR DO SQL_ERROR() ;

* Connect to database supplying user and password ( C )
User = "demo" ; Passwd = "demo99"
EXEC SQL CONNECT :User IDENTIFIED BY :Passwd;

* Create Parts table ( D )
EXEC SQL CREATE TABLE Parts
(
PartNo INTEGER NOT NULL PRIMARY KEY,
PartName CHAR(20)
);

* Loop until no more PartNos
LOOP

* Prompt for PartNo
CRT "Part Number : ":
INPUT PartNo
WHILE PartNo NE '' DO

* Prompt for PartName
CRT "Part Name :":
INPUT PartName

* Add PartNo and PartName into Parts table ( E )
EXEC SQL INSERT INTO Parts VALUES (:PartNo, :PartName );
REPEAT

* Commit updates to database ( F )
EXEC SQL COMMIT ;
```

## (A) Declare variables to use within Embedded SQL statements

This section declares jBASE BASIC variables so that they can be used within Embedded SQL statements. All references to these variables within the Embedded SQL statement must be prefixed by a colon. This feature of the Embedded SQL standard is used by the jBASE BASIC preprocessor to identify jBASE BASIC variables when parsing the Embedded SQL statement. The jBASE BASIC variables must be the same data type as the source or target Embedded SQL columns.

## ( B ) Predetermine action on SQLERROR

This section configures the action to take on detecting an error with the previous executed Embedded SQL statement. Every SQL statement should in principle be followed by a test of the returned SQLCODE value. This can be achieved by utilizing the [SYSTEM(0)](./../system-functions) function, which returns the result of the last SQL statement, or alternatively using the Embedded SQL WHENEVER statement to predetermine the action for all subsequent Embedded SQL statements. The [SYSTEM(0)](./../system-functions) function will return three different possible values, i.e

| Code | Error |
| --- | --- |
| &lt; 0 | Embedded SQL statement failed. |
| 0 | Embedded SQL statement successful. |
| 100 | NOT FOUND. No rows where found. |

The format of the Embedded SQL WHENEVER statement is as follows:

```
EXEC SQL WHENEVER Condition Action ;
```

Where:

## Condition

NOT FOUND

SQLERROR

## Action

DO Function - Oracle implementation.

CALL Function - Ingres and Informix implementations.

GOTO proglab\_Label – IBM DB2 and Microsoft SQL Server implementations.

CONTINUE

## Function

User defined function.

SQLERROR() - Display Embedded SQL error then return to program.

SQLABORT() - Display Embedded SQL error then exit program.

## Label

Label in executing program:

```
DOSQLERR:
DEFC INT SQL_ERROR
CALL SQL_ERROR
STOP
```

## ( C ) Connect to database supplying user and password

This section connects the specified user and or passwd combination to the SQL database. This command can be Embedded SQL implementation dependent. The user must be correctly configured for the target database.

## ( D ) Create Parts table

This section creates an SQL table called Parts. The table has two constituent data types, these are defined as an integer value PartNo and a character string PartName. The PartNo is defined as a non null unique value and is defined as the primary key. This definition provides a close match to the usual format of a record and id. The only data type that is truly common to all hosts and their languages is fixed length character strings, the integer value used here is for demonstration purposes and is not recommended.

## ( E ) Add PartNo and PartName into table Parts

This Embedded SQL statement inserts the values entered for PartNo and PartName into the SQL table Parts. PartNo is inserted as the first column whereas PartName is inserted as the second column of each row. Effectively PartNo is the record id and PartName is the first field in the record PartNo. The jBASE BASIC pre-processor parses the Embedded SQL statements and provides code to convert any specified jBASE BASIC variables to the format required by the Embedded SQL implementation. Any returned parameters are then converted back into jBASE BASIC variables.

## ( F ) Commit updates to database

This Embedded SQL statement makes all updates by Embedded SQL statements since the last SQL commit statement visible to other users or programs on the database. If a program executes an Embedded SQL statement and no transaction is currently active then one is automatically started. Each subsequent SQL statement update by the same program without an intervening commit or rollback, is considered part of the same transaction. A transaction terminates by either an Embedded SQL COMMIT, normal termination, or an Embedded SQL ROLLBACK statement, abnormal termination.

An abnormal termination does not change the database with respect to any of the Embedded SQL updates executed since the last commit or rollback. Database updates made by a given transaction do not become visible to any other distinct transaction until and unless the given transaction completes with a normal termination. i.e. an Embedded SQL COMMIT statement.

## Embedded SQL Compiler Options

In order to compile jBASE BASIC programs containing Embedded SQL statements the jBASE compiler option "Jq" must be invoked with the jBASE BASIC compiler command. The "Jq" option also expects an SQL implementation specifier, as described below.

| -jq type | RDBMS |
| --- | --- |
| d | IBM DB2 |
| m | Microsoft SQL Server (Windows only) |
| o |  Oracle |
| i | Ingres |
| s | Sysbase |
| x | Informix |

For instance to compile the PartEntry.b for an Oracle SQL implementation database, the code would be :

```
jcompile -Jqo PartEntry.b
```

In this example the SQL specifier is "o" for Oracle. Other specifiers are added as and when Embedded SQL implementations are required. e.g. The "i" option informs the jBASE compiler to invoke mechanisms for the Ingres Embedded SQL implementation. Although the Embedded SQL standard is the same, each SQL provider requires different manipulative techniques in order to compile and connect to the database.

The jcompile compiler pre-processes the jBASE BASIC program parsing the normal jBASE BASIC and Embedded SQL statements to produce an intermediate C program. The SQL implementation dependent pre-processor is then invoked to convert the Embedded SQL statements to the implementation defined internal functions. The resulting program is then is then compiled and linked.

The jBASE BASIC compilation should be executed in a user account which has been enabled for the required Embedded SQL implementation. Attempting to compile in an account not enabled for the required SQL implementation may cause compilation failure as certain environment variables for the implementation may not have been modified for the correct directory paths, etc.

## Troubleshooting

When attempting to compile a program with Embedded SQL and an error along the lines of...

```
Command failed: nsqlprep PartEntry.sqc

SQL Pre Processor error -1

```

...this is an indication that either the embedded SQL kit has not been correctly loaded, and does not have the 'nsqlprep' command, or the 'nsqlprep' command does exist but it is not visible to the PATH environment variable.

Go back to [jBASE BASIC](./../README.md)
