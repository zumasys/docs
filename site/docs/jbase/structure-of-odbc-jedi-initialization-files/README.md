# Structure of ODBC jEDI Initialization Files

**Created At:** 11/22/2019 7:47:42 PM  
**Updated At:** 1/3/2020 5:11:12 PM  
**Original Doc:** [structure-of-odbc-jedi-initialization-files](https://docs.jbase.com/structure-of-odbc-jedi-initialization-files)  
**Original ID:** 497463  
**Internal:** Yes  


## jEDIdrivers.ini File Structure

The parameters below are found within the [**General**] section of the **jEDIdrivers.ini**file (note the parameters ARE case sensitive):


| <!----> | <!----> |
| --- | --- |
| **File Parameter** | **Parameter Definition** |
| JRLAlock = 0 | Specifies that jBASE will handle the locking of records (currently the *jEDI*drivers do not handle locking at the *RDBMS*level) |
| FullyExpanded = 0 | Controls how multi-values are stored across primary and secondary tables |
| PasswdsEncrypted = 0 | Specifies whether or not passwords for *RDBMS*logins are encrypted |
| TblSep = \_\_ | Specifies the literal separator character(s) used between primary and secondary tables |
| VMCSep = \_\_ | Specifies the literal separator character(s) used between the literal string "VMC", and the name of a multi/sub-value group association name used for storing the value count of a repeating group. |
|  CSVdir = /home/myuser/csv | Specifies the directory where CSV definitions are stored for controlling the mapping between attributes and columns |


At the bottom of this section there is an example of a valid **jEDIdrivers.ini** file. In the section titled [**ODBC**], the settings *default*, *mssql*, and *msmatrix* are simply the name of the given *ODBC*driver connection information strings. These strings specify the *DSN,*User ID, and database name the driver uses to connect to the target *RDBMS*. Their names can be any lowercase alphabetical string (*no spaces allowed*), however, it's best to name them something that helps identify the driver they correspond to.

### Note

It is highly recommended to have a **default** connect setting (see example **jEDIdrivers.ini** file below). Otherwise, the **CONNECT** qualifier will be required when performing a **CREATE-FILE**.

The sections following the [**ODBC**] section (ODBC\_*label*) are used for storing the password information needed to connect the *ODBC*drivers to their corresponding *RDBMS* server. The names of these sections correspond to the names of the driver connection strings within the [**OD****BC**] section, with the literal "ODBC\_" string followed by the name of the driver connection string (ie. In the example **jEDIdrivers.ini** file below, since the name of the first driver connection string in the [**ODBC**] section is named "default", the section name for the first password information section is "ODBC\_default").

### Note

Although the password can be part of the connection string (**PWD=*password***), it cannot be encrypted in the connection string. If you wish to use an encrypted password, the encrypted password must be in the section denoted by ODBC\_*label.*

To generate an encrypted password, use the j**EDIDKencrypt**command. After the encrypted password is outputted to your terminal, copy it, and use it to set the psswd parameter under your specified ODBC\_*label*field. **jEDIDKencrypt** syntax:

jEDIDKencrypt &lt;password&gt;

Additionally, the settings under [**General**] can be repeated with alternate values under the ODBC\_label sections. For example you may have **PasswdsEncrypted = 1**under [**General**] but have **PasswordsEncrypted = 0** under one or more of your ODBC\_label sections.

Example **jEDIdrivers.ini** file:

```
[General]
JRLAlock = 0
FullyExpanded = 0
PasswdsEncrypted = 0
TblSep = __
VMCSep = __
CSVdir = /dbms/JEDICSV

[ODBC]
default = DSN=MySQL;UID=user;DATABASE=db
mssql = DSN=MSSQL;UID=sa_new;DATABASE=ds_Portal_prod
msmatrix = DSN=MSSQL;UID=sa_new;DATABASE=hs_label_matrix

[ODBC_default]
passwd = expswrd

[ODBC_mssql]
PasswdsEncrypted = 1
passwd = xiCixHC0SM1UMR5e2zdCq+iU66cPSU30

[ODBC_matrix]
passwd = expswrd
```

### Note

Any value, or part thereof, can make use of an environment variable. Environment variables are always in the format of $*variable*, and the / character for the CSVdir is the same for both Linux/Unix and Windows.

In the file example above, if environment variable JBCDATADIR was set to /dbms, the CVSdir parameter would look like the following:

CSVdir = $JBCDATADIR/JEDICSV

## odbc.ini File Structure

Below is an example of an **odbc.ini** file. The **odbc.ini** file can contain descriptions for more than one *ODBC* driver. The section titles [**MySQL**] and [**MSSQL**] within this file correspond to the *DSN* parameters in the **jEDIdrivers.ini** file.

### Note

The parameters displayed under each driver section differ depending on which *RDBMS* driver is being defined.

Example odbc.ini file:

```
[MySQL]
Description    = DSN for jEDI
Driver         = MySQL
Server         = 172.17.0.5
Port           = 3306
Socket         = /var/lib/mysql/mysql.sock
Database       = db
Option         = 3

[MSSQL] 
Driver = ODBC Driver 17 for SQL Server 
Server = tcp:172.16.100.48 
MARS_Connection=Yes
```

## odbcinst.ini File Structure

Below is an example of an **odbcinst.ini** file. This file defines the UNIX shared library *ODBC* drivers for their corresponding *DSN*'s driver setting in the **odbc.ini** file. The **odbcinst.ini** is typically created/updated when installing an *ODBC*driver for a specific *RDBMS*.

Example odbcinst.ini file:

```
#Example driver definition
#Driver from the mysql-connector-odbc package
#Setup from the unixODBC package
[MySQL]
Description=ODBC for MySQL
Driver=/usr/lib/libmyodbc5.so
Setup=/usr/lib/libodbcmyS.so
Driver64=/usr/lib64/libmyodbc5.so
Setup64=/usr/lib64/libodbcmyS.so
FileUsage=1

#Example driver definition
#Driver from the mssql-connector-odbc package
#Setup from the unixODBC package
[ODBC Driver 17 for SQL Server]
Description=Microsoft ODBC Driver 17 for SQL Server
Driver=/opt/microsoft/msodbcsql17/lib64/libmsodbcsql-17.3.so.1.1
UsageCount=1
```

----------------------------------------------------------------------------------------------------------------------------

[Introduction to the ODBC jEDI](./../introduction-to-the-odbc-jedi)

[Installing the ODBC jEDI on Linux/Unix](./../installing-the-odbc-jedi-on-linux&unix)

[Installing the ODBC jEDI on Windows](./../installing-the-odbc-jedi-on-windows)

[Structure of ODBC jEDI Mapping Files](./../structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Linux/Unix](./../configuring-the-odbc-jedi-on-linux&unix)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](./../using-the-odbc-jedi)
