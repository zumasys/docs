# PN5_60960

<PageHeader />

## Description

[DB-PAUSE](./../../../../tools-and-utilities/db-pause/README.md) and other utilties no longer have a defined database

## Previous Release Behavior

jBASE had a concept of having different named databases. This concept had a number of flaws in the design. Although few customers used this facility, the multiple-database option could cause problems.

## Current Release Behavior

jBASE no longer supports the concept of multiple databases directly. A customer can still have multiple databases isolated from each other on the same platform using other means, such as [JEDIFILEPATH](./../../../../environment-variables/jedifilepath/README.md) and different OS account logins.

DB-PAUSE is still supported fully (and DB-RESUME et-al), but the DB-PAUSE no longer has the "-n databasename" option as an attempt to support multiple database.

The -n option has been removed from the following commands

[DB-PAUSE](./../../../../tools-and-utilities/db-pause/README.md)  
[DB-RESUME](./../../../../tools-and-utilities/db-resume/README.md)  
DB-START  
DB-SHUTDOWN  
[DB-STATUS](./../../../../tools-and-utilities/db-start/README.md)  
DB-WARMSTART  

The DB-REMOVE command has been deprecated.

The folder $JBCRELEASEDIR/databases will no longer be used.

Back to [5.8.0 Release Notes](./../README.md)

<PageFooter />
