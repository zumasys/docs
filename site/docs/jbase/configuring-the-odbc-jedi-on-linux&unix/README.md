# Configuring the ODBC jEDI on Linux/Unix

**Created At:** 11/15/2019 5:28:05 PM  
**Updated At:** 11/26/2019 6:16:35 PM  
**Original Doc:** [configuring-the-odbc-jedi-on-linux-unix](https://docs.jbase.com/configuring-the-odbc-jedi-on-linux-unix)  
**Original ID:** 494585  
**Internal:** Yes  


For Linux/Unix operating systems, the **jEDIdrivers.ini**, **odbc.ini**, and **odbcinst.ini** files all need to be properly configured for correct function of the utility. These files are located in either the **/etc** directory for global settings, **$JBCDATADIR/config**, or in the user's **$HOME** directory. Moreover, since the *ODBC* *jEDI* is comprised of a set of bin (executable) and lib (driver libraries and subroutines) binary-object files, you must ensure the lib directory path is added to your **LD\_LIBRARY\_****PATH**environment variable (before beginning the steps listed below). The full path of the bin directory is located within your **PATH**environment variable, and the full path of the lib directory is located within your **JBCOBJECTLIST**environment variable.

For the configuration example below, we will be configuring MySQL and MSSQL *ODBC*drivers by doing the following:

1. Navigate to the **/etc** directory (where the **odbc.ini** and **odbcinst.ini** files live)

```
# cd /etc
```

2.  Open the **odbc.ini** file up for editing

```
# vi odbc.ini
~
~
~
~
~
```

3. Update the file parameters to reflect the correct *ODBC* driver parameter values (these will depend on which driver you're setting up). Use the file description in the **odbc****.ini** file definition section of the [Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files) document to identify what needs to be changed.

```
[MSSQL]
Driver = ODBC Driver 17 for SQL Server
Server = tcp:172.16.100.48
MARS_Connection = Yes

[MySQL]
Description    = DSN for jEDI
Driver         = MySQL
Server         = 172.17.0.2
Port           = 3306
Socket         = /var/lib/mysql/mysql.sock
Database       = db
Option         = 3
~
~
~
~
~
```

4. Open the **odbcinst.ini** file up for editing

```
# vi odbcinst.ini
~
~
~
~
~
```

6. Update the file parameters to reflect the correct *ODBC* driver parameter values (these will depend on which driver you're setting up). Use the file description in the **odbcinst****.ini** file definition section of the [Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files) document to identify what needs to be changed.

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

7. Optionally create a **jEDIdrivers.ini** in **/etc**, or navigate to the **$JBCDATADIR/config** directory.

```
# cd $JBCDATADIR/config
```

8. Once you know the location of the file, open it up for editing

```
# vi jEDIdrivers.ini
~
~
~
~
~
```

9. Update the file parameters to reflect the correct *ODBC* driver parameter values (these will depend on which driver you're setting up). Use the parameter descriptions in the **jEDIdrivers****.ini** file definition section of the [Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files) document to identify what needs to be changed, and how to correspond the *ODBC*driver parameters to the driver definitions within the **odbc.ini** file.

```
[General]
JRLAlock = 0
FullyExpanded = 0
PasswdsEncrypted = 0
TblSep = __
VMCSep = __
CSVdir = /dbms/JEDICSV

[ODBC]
mysql = DSN=MySQL;UID=user;DATABASE=db
mssql = DSN=MSSQL;UID=sa_new;DATABASE=ds_Portal_prod
msmatrix = DSN=MSSQL;UID=sa_new;DATABASE=hs_label_matrix

[ODBC_mysql]
passwd = expswrd

[ODBC_mssql]
passwd = expswrd

[ODBC_matrix]
passwd = expswrd
```

10. Optionally create multiple **.jEDIdrivers.ini** files if you wish to have individual settings per user.

### Note

On Linux/Unix, the name of the file has a leading period

----------------------------------------------------------------------------------------------------------------------------

[Introduction to the ODBC jEDI](./../introduction-to-the-odbc-jedi)

Installing the ODBC jEDI on Linux/Unix

Installing the ODBC jEDI on Windows

[Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files)

[Structure of ODBC JEDI Mapping Files](./../structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](./../using-the-odbc-jedi)
