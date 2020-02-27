# Installing the ODBC jEDI on Linux/Unix

**Created At:** 12/20/2019 4:47:27 PM  
**Updated At:** 2/6/2020 9:51:30 PM  
**Original Doc:** [installing-the-odbc-jedi-on-linuxunix](https://docs.jbase.com/installing-the-odbc-jedi-on-linuxunix)  
**Original ID:** 509163  
**Internal:** Yes  


In order to install the ODBC jEDI you will need a licensed system running jBASE 5.6 or greater, and the *ODBC* *jEDI*tool-set installation package. If you do not yet have a valid licensed jBASE system, and/or the *ODBC* *jEDI*tool-set installation package, please contact Zumasys licensing to obtain them.

Additionally you will also need the unixODBC package installed. This would typically be a yum or apt-get install.

```
$ sudo yum install -y unixODBC.x86_64
```

You will also need drivers for your target RDBMS. The following link has a table and links to many popular database drivers:

[http://www.unixodbc.org/drivers.html](http://www.unixodbc.org/drivers.html)

The installation package is comprised of two components, the **ODBCjEDI_***version***-UNIX.jpkg** and **GNU\_Linux\_jPKGINSTALLER\_***version***\_jBASE\_***jbaserel***\_x86\_64.bin**; both can be removed from the target file system after successful installation. 

After downloading the *ODBC* *jEDI*tool-set installation package, do the following to ensure successful installation:

1. Save the installation package's components to a desired location on your file-system

## Note

For this example, **jBASEInstall/** will be the location our components are stored after initial download.

2. Run the install for the package installer (as root)

## Note: if you already have the jpkginstall command you can proceed to step 2.

```
~/jBASEInstall$ sudo su
~/jBASEInstall# . /opt/jbase/CurrentVersion/jbase_env.sh
~/jBASEInstall# ./GNU_Linux_jPKGINSTALLER_1.1.0_jBASE_5.7.4_x86_64.bin

-------------------------------------------------------------------------------
jPKGINSTALLER Release 1.1.0 Installation
-------------------------------------------------------------------------------
The jBASE package installer module is used to create and install jBASE add-on components.

The installer utilises the jBASE "jabba" languange and specific features and therefore requires 5.7.3 or higher.


Press  to start the installation process or [C]ancel

-------------------------------------------------------------------------------
Type of Installation
-------------------------------------------------------------------------------

[E]xpress  :  Install jPKGINSTALLER with typical options
[N]ormal   :  Install jPKGINSTALLER with typical options (prompted)

[C]ancel installation

Install type:E


-------------------------------------------------------------------------------
Installation Summary
-------------------------------------------------------------------------------

Release directory     : /opt/jbase/CurrentVersion
Bin directory         : /opt/jbase/CurrentVersion/bin
Lib directory         : /opt/jbase/CurrentVersion/lib

jPKGINSTALLER owner           : jbaseadm

jPKGINSTALLER group           : jbase



Begin installation? ([Y]es/[N]o) :Y
```

3. Navigate to where your *ODBC* *jEDI*tool-set components are located on your file system. As per step 2, run the install as "root"

```
~$ cd /jBASEInstall
~/jBASEInstall$ sudo su
~/jBASEInstall# . /opt/jbase/CurrentVersion/jbase_env.sh
~/jBASEInstall$ jpkginstall ODBCjEDI_3.0.2
```

4. If you do not yet have the **config/** or **CSV/** directories created within your $**JBCDATADIR** directory, you will be prompted and asked if you'd like to create them. Enter Yes to have the installer create the directories for you. If you already have these directories set up, the installer will skip to step 5.

```
Unpacking...

Installation cannot complete: $JBCDATADIR/config cannot be opened

Do you want to create it now? Yes

The default location for storing csv definitions ($JBCDATADIR/CSV) cannot be opened

Would you like to create it now? Yes
```

5. You will be prompted and asked if you'd like to view the installer release notes. Enter No to continue with the installation.

```
Unpacking...    ODBC jEDI Installation

View release notes? No
```

6. You will be prompted with the following *DSN* fields to fill out. The installer will use the data entered into these fields to attempt to connect to a valid data source. If you don't yet have one, you will need to set one up.

```
CSV directory:
Table Separator:
VMC Separator:
Passwords Encrypted:
UID:
Password:
Database:
```

### Field Descriptions

*DSN* - Data Source Name

CSV directory - Directory where csv definitions will be held for generating stubs

Table Separator - Character used to join the primary table and the multi/sub-value table (where applicable)

VMC Separator - Character used to join the VMC column with the multi/sub-value group name (where applicable)

Passwords Encrypted - Controls whether or not the user password will be encrypted in the jEDIdrivers.ini file

UID - User ID for the *DSN* specified
Password - Password for the *DSN* specified

Database - Database name for the *DSN* specified

Below is an example of filled out *DSN* fields:

```
DSN:                    SQLServerDSN    SQL Server Native Client 11.0
CSV directory:          /jBASE/CSV  
Table Separator:        _
VMC Separator:          _  
Passwords Encrypted:    Yes
UID:                    sa
Password:               **********
Database:               master
```

7. You will be prompted one last time and asked if you want to continue with your installation. Enter Yes to test your *DSN* connection. If the connection is successful, you will be told the installation has succeeded. If not, you will need to verify your *DSN* and the *DSN*fields in step 6 were set up correctly.

```
Continue with installation? Yes

Verifying installation... Success.
```

----------------------------------------------------------------------------------------------------------------------------

[Introduction to the ODBC jEDI](./../introduction-to-the-odbc-jedi)

[Installing the ODBC jEDI on Windows](./../installing-the-odbc-jedi-on-windows)

[Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files)

[Structure of ODBC jEDI Mapping Files](./../structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Linux/Unix](./../configuring-the-odbc-jedi-on-linux&unix)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](./../using-the-odbc-jedi)
