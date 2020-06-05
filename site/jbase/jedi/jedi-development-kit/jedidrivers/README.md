# jEDIDK - jEDIDrivers.ini  

<PageHeader />

The jEDIDK relies on a control file called jEDIdrivers.ini. There are 2 places it is expected to be:

1. In the user’s HOME directory.  [1]  
2. In /etc (non-Windows) or %SYSTEMROOT% (Windows)  

It is recommended to use option 2 to standardize the jEDIDK for all users.  

On non-Windows platforms this file is preceded by a period (.) as per typical control/definition files (unless stored in /etc). The file is based on Windows .ini files in that it is broken up into [sections].  

Note: The back-slash (\\) character is used as an ESCape character so on Windows, the directory separator must be \\\ (i.e. escaping a \\).  

Environment variables can be used thus: $(HOME).  

Be wary of using the HOME directory as a LOGTO in jBASE will change the HOME environment variable. You would need to place a jEDIdrivers.ini file in each account directory. This may be useful if you want different jEDI behavior based on the account.  

Below is a layout of a jEDIdrivers.ini file (in table format) with explanations:  

| <!----> | <!----> |
| --- | --- |
| [General]        | Primary section for non-driver or global settings |
| JRLAlock         | Use jBASE locking daemon for managing locked records |
| FullyExpanded    | Controls how multi-values are held in the RDBMS.<br>2 – Complete flattening out of multi-values<br>1 – Complete flattening out but the first multi-value is also stored in the primary table<br>0 – First value of a multi-value group is stored in the primary table. Subsequent values are stored in the nested tables |
| TrapErrs         | 0/1 flag to control if invalid records are rejected or stored in an EXCEPTIONS table.<br>Can be overridden under an RDBMS section |
| PasswdsEncrypted | 1/0 to denote whether the password for the RDBMS user is encrypted in the .ini<br>Can be overridden under an RDBMS section |
| TblSep           | Character to use as a separator for the nested table name (i.e. primary_table#mv_table#smv_table)<br>Default is # |
| VMCSep           | As per TblSep this character is used on the MV/SMV count columns (e.g. VMC#assoc_name) |
| JdkHome          | Directory where templates/parameters are located |
| JdkTempPath      | Directory to write work files during the CREATE-FILE process |
| CSVdir           | CSV definition directory |
| jCreateCSV_opts  | Options to pass to jCreateCSV from JEDI_CSV |

| <!----> |
| --- |
| The following are relevant to all RDBMS sections |

| <!----> | <!----> |
|--- | --- |
| server        | Network name/address for RDBMS |
| database      | RDBMS database name |
| user          | RDBMS user |
| passwd        | RDBMS user's password  |
| [OLESQL]      | Section header for OLESQL |
| sqlcmd        | Command to execute an sql script.<br>On older releases of SQL Server this command was “osql”.<br>New releases use “sqlcmd” |
| JdkOlesqlHome | Directory where templates/parameters are located specific to OLESQL |
| [PLSORA]      | Section header for PLSORA |
| JdkPlsOraHome | Directory where templates/parameters are located specific to PLSORA |
| [ODBC]        | Section header for ODBC |

| <!----> |
| --- |
| The ODBC driver works slightly differently to the other drivers in that it uses connection strings defined by an identifier which then forms its own section as shown below. Additionally, the data types used by the jEDIDK can be overridden under a section header corresponding to the RDBMS provider name. An example (DB2) has been provided. |
| default = DSN=ODBCSQL;UID=sa;DATABASE=master |
| [ODBC_default]  |
| passwd = master |

| <!----> | <!----> |
|--- | --- |
| [DB2]     | Section header for the DB2 database.<br>This section is used specifically for defining column type pseudonyms. |
| date      | DATE |
| time      | TIME |
| Timestamp | TIMESTAMP |
| [DB2EXP]  | Section header for the DB2EXP driver.<br>This driver works the same as the ODBC driver as far as RDBMS settings go. |

## ODBC Specific

As shown in the previous table the ODBC configuration (and likewise DB2EXP) is separated into two distinct sections:

1. [ODBC]
2. [ODBC_dnsname]

Where dnsname is your own name to denote an ODBC DSN. The default dnsname is “default” (i.e. making [ODBC_default]).

To use a specific dnsname use the CONNECT option during CREATE-FILE:

```
CREATE-FILE [DATA] <filename> TYPE=ODBC [CSV=<csvname>] CONNECT=<dnsname>
```

Back to [jEDIJDK](./../README.md)

<PageFooter />
