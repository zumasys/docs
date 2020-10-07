# PN5_50508

<PageHeader />

## Description

This change fixes an error where the incorrect environment variable was specified when setting a flag which is used by multi-session licensing

## Previous Release Behavior

JBASE_TELNET_FLAG set to a value of "1"

Previous "jlicensinginfo" output:

```
jsh support ~ -->jlicensinginfo

         Licence Type                   5 (Evaluation)
         Total Standard Licenses        10

         Actual free    standard        9
         Actual used    standard        1
                        multisession    2
                        websession      0
         Expiry date                    Thu Aug 31 01:00:01 2017

         Licensed products              Runtime
                                        Compiler
                                        JDK
                                        WebBuilder
                                        JDP
                                        JAGENT
                                        TRANSLOG
                                        VBOBJEX
                                        JIDE
                                        JRFS
                                        COMWRAPPER
                                        JDBC
                                        SERVER
                                        ODBC
                                        JET
                                        JRFILE
                                        JR SECURE
                                        WARMSTART
                                        OLBACKUP
                                        JRemoteC#
                                        JRemoteJava
                                        CALLJEE
                                        DB_ORACLE
                                        DB_DB2
                                        DB_MSSQL

         Num. multisession licenses     5 (Max 10 connections per session)
          zumlab.jinternal.com          2 sessions(s) in-use

jsh support ~ -->
```

## Current Release Behavior

JBC_TELNET_FLAG set to a value of "1"

Current "jlicensinginfo" output:

```
jsh support ~ -->jlicensinginfo

         Licence Type                   5 (Evaluation)
         Total Standard Licenses        10

         Actual free    standard        9
         Actual used    standard        1
                        multisession    3
                        websession      0
         Expiry date                    Thu Aug 31 01:00:01 2017

         Licensed products              Runtime
                                        Compiler
                                        JDK
                                        WebBuilder
                                        JDP
                                        JAGENT
                                        TRANSLOG
                                        VBOBJEX
                                        JIDE
                                        JRFS
                                        COMWRAPPER
                                        JDBC
                                        SERVER
                                        ODBC
                                        JET
                                        JRFILE
                                        JR SECURE
                                        WARMSTART
                                        OLBACKUP
                                        JRemoteC#
                                        JRemoteJava
                                        CALLJEE
                                        DB_ORACLE
                                        DB_DB2
                                        DB_MSSQL

         Num. multisession licenses     5 (Max 10 connections per session)
          192.168.1.2                   2 sessions(s) in-use
          192.168.1.122                 1 sessions(s) in-use
         Total 2 license(s) used out of 5
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
