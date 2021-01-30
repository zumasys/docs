# jBASE ODBC Connector

<PageHeader />

**Tags:**
<badge text='sql' vertical='middle' />
<badge text='odbc' vertical='middle' />
<badge text='jagent' vertical='middle' />


## Installation

### Package contents

The ODBC Connector is a separate product to the core jBASE install package deployed on Windows. It is not required to install jBASE to use the connector although it does make testing easier. A self-contained installer (from now on mentioned as ODBC installer) is available which installs and registers the ODBC driver. Below is the list of release packages containing the ODBC Connector:

- 64-bit Windows jBASE 5.7< (**jodbc64.msi** and **jodbc32_WIN64.msi** version 1.3)
- 64-bit Windows jBASE 5.8< (**jodbc64.msi** version 2.0.1)

[Click here to visit the downloads page for jBASE/Windows/ODBC ](https://www.zumasys.com/downloads/#jbase)

Prior to version 2 there were two separate installs for 64 and 32 bit. Version 2.0.1 combines both versions as well as some important updates for date/time handling and bind parameters.

### Note
>The 32 bit client is required when using certain products such as Excel and Access even when running on a 64 bit compuer.

The ODBC installer deploys the following files:

| | |
| :------ | :------ |
| **Driver/Setup**
| jodbc.dll | jBASE ODBC driver library |
| libjODBCSetup.dll | jBASE ODBC Setup library |
| **Supporting**
| libjcf.dll | JCF (jBASE Communication Foundation) library |
| ACE.dll | ACE (Adaptive Communication Environment) libraries |
| ACE\_SSL.dll | |
| lib-ssl1\_1-x64.dll | OpenSSL libraries
| libcrypto-1\_1-x64.dll | |
| libeay32.dll | Older SSL libraries |
| ssleay32.dll | |
| icuuc40.dll | ICU (International Components for Unicode) libraries
| icudt40.dll | |
| msvcr71.dll | MS VC run-time library required by the OpenSSL libraries. Note: the version of the MSVC run-time may change on subsequent versions of the jBASE ODBC Connector (e.g. msvcr80.dll)

## Note

> The ODBC installer copies the 64 bit ODBC **Driver/Setup** libraries to the Windows\System32 directory and the 32 bit driver to the Windows\SysWOW64 directory.

>For version 1.x the **Supporting** libraries are installed in the **jBASE ODBC Connector** directory under **Program Files** and **ProgramFiles (x86)** for the 64 and 32 bit versions respectively. For version 2.x the driver/setup registration/installer program - **jODBCManager.exe** - is installed in the **Program Files\jBASE ODBC Connector** directory. The remaining dlls are are installed in the aforementioned Windows directories.


**ODBC Setup library** is a separate library implementing the ODBC Setup API required by the driver manager to display graphical components such as connection dialogs. Connection dialogs enables users to configure DSNs inside Windows’ ODBC Manager (odbcad32.exe) or input connection details when requested by the driver.

### Windows Registration

The ODBC installer will automatically register the ODBC driver and ODBC Setup libraries. The registration process is required to inform the ODBC Manager about the location of the ODBC driver libraries. The ODBC installer will also add the **jBASE ODBC Connector** directory to the global user environment variable PATH. This is necessary for version 1.x as the jBASE ODBC driver depends on the other shared libraries as e.g. JCF, ACE, etc.

## Configuration

### Addming/Configuring DSNs

ODBC applications usually obtain the connection details from DSNs which may be configured via Microsoft’s ODBC Data Source Administrator (also known as ODBC Manager / odbcad32.exe or Control Panel Administrative Tools Data Sources (ODBC)).

![251010-introduction-to-odbc: 1556898171724-createnewodbcdatasource](../1556898171724-createnewodbcdatasource.jpg)

Select the **jBASE ODBC Driver**.

The jBASE ODBC Data Source setup will then appear.

![1-introduction-to-odbc: initial_odbc_manager_config](../initial_odbc_manager_config.jpg)

If you are setting up a connection for the first time it is recommended to fill in the **Server** and **Port** and clicking **<u>T</u>est** to test the connection.
Note, the port value of **20002** is the default if not explicitly set when starting **jbase_agent** (for more information: [click here](../../jagent/introduction-to-jagent/#starting-and-configuring-jagent)).

![1-introduction-to-odbc: initial_odbc_manager_config](../odbc_manager_test_connect.jpg)


If you see this following message: 

![2-introduction-to-odbc: initial_odbc_manager_config](../odbc_manager_failed_connect.jpg)
 
check that the server you are trying to reach is running jbase_agent and you have the correct server/IP address and port (it may not be running on 20002). If you have **telnet** available you can test if the server/port is available:

```telnet 10.10.17.168 20002```

Likewise if you have **curl**

```curl 10.10.17.168:20002```

You can also try opening a web page using *server:port* although the http option would need to be enabled (this is the default).

## Example configuration
![3-introduction-to-odbc: 1556897912210-odbc_test](../1556897912210-odbc_test.jpg)

The **User Catalog** refers to the [JSQLFILENAME_CATALOG](../../../environment-variables/jsqlfilename_catalog/#jsqlfilename-catalog) which is you would normally set as part of [configuring jAgent](../../jagent/jagent-administration/#jagent-configuration-file), although it is not *required*, but can be specified here if you wish to use an existing jAgent service but point to a different set of tables (files).

### Note.
> Specifying an alternate **User Catalog** may not be sufficient as the tables (files) to which it refers may not be accessible with the existing jAgent environment.

For more information on the implications of the other settings (**User**, **Password**, **Account**, **SSL**, **Compression**) refer to the following [link](../../jagent/introduction-to-jremote/#additional-connection-properties).

### Connection strings

Connection strings, as defined by the ODBC SQL CLI, specify the connection parameters supplied to the server when attempting to establish a connection.

All connection attributes are defined in a single string separated by semicolons.

jBASE ODBC Connector accepts the following attributes:

**DSN**=&lt;Data source name&gt;  
**SERVER**=&lt;Server address&gt;  
**PORT**=&lt;jAgent port number&gt;  
**UID**=&lt;User ID&gt;  
**PWD**=&lt;User/Account Password&gt;  
### Note.
> The UID/PWD are only verified if using [Account authentication](../../jagent/introduction-to-jagent/#setting-up-user-authentication).

**Optional**  
ACCOUNT=&lt;jBASE Account&gt; (User authentication will be used if this field is blank)  
DRIVER=jBASE ODBC Driver (Name of ODBC driver, must be jBASE ODBC Driver)  
DESCRIPTION=&lt;DSN description&gt;  
SCHEMA=&lt;Schema name&gt; (Not used. Reserved for future use)  
SSL=&lt;Enable SSL encryption&gt; (1 = Enable SSL, 0 = Disable SSL [default])  
SSL\_CERTIFICATE=&lt;Path to SSL certificate file&gt;  
SSL\_KEY=&lt;Path to SSL public key file&gt;  
COMPRESSION=&lt;Enable data compression&gt; (1 = Enable comp., 0 = Disable comp. [default])  
COMP\_THRESHOLD=&lt;Compression threshold&gt;            (Compression threshold, default = 1024 byte)  

USER\_CATALOG=&lt;location of catalog file&gt;                   (Created using sqlcatman)  

DSN, DRIVER, UID and PWD are attributes defined by the SQL CLI, all other attributes are jBASE ODBC Connector specific attributes. Attributes highlighted in bold are mandatory attributes.

**Example**:

DSN=jBASE_WIN_5.8;SERVER=127.0.0.1;PORT=20002;UID=test;PWD=test

In most case, if all parameters have been defined, then:

DSN=jBASE_WIN_5.8

should suffice for the above example.

## Developing Client Applications

ODBC CLI is an API written in C but other frameworks like e.g. .NET provide ODBC wrapper classes.

The following example is written in Visual Basic .NET and uses the System.Data.Odbc module read data from a jBASE file:

``` vbnet
Imports System
Imports System.Data.Odbc
Module Module1
    Sub Main()
        Dim connectionString As String = "DSN=jBASE_WIN_5.8;UID=test;PWD=test"
        Dim SQL As String = "SELECT * FROM ODBCTEST"
        Dim conn As New OdbcConnection(connectionString)
        Dim cmd As New OdbcCommand(SQL)
        cmd.Connection = conn
        conn.Open()
        Dim reader As OdbcDataReader = cmd.ExecuteReader()
        While reader.Read()
            Console.Write(("ID:" + reader.GetString(0).ToString()))
            Console.Write(" ,")
            Console.Write(("NAME:" + reader.GetString(1).ToString()))
            Console.Write(" ,")
            Console.WriteLine(("AGE:" + reader.GetInt32(2).ToString()))
        End While
        reader.Close()
        conn.Close()
    End Sub
End Module
```

SQLGetFunction() provides a list of supported SQL CLI methods.

Stored procedures are supported via the ODBC CALL statement and provide way of calling jBASE subroutines.

## Troubleshooting

- ***Error while installing the ODBC driver:***

In order to obtain more information about the error, open a command prompt to

List installer options:

***jodbc64.msi /?***

Install driver with verbose logging:

***jodbc64.msi /lv jodbc\_install.log***

Ensure that the necessary system components listed in the ***System Requirements*** section are installed.

- ***When adding a DSN, the jBASE ODBC driver does not appear in the list of ODBC drivers:***

The ODBC driver has not been registered correctly. Use the command line ***jODBCManager*** application located in the installation directory to re-install the ODBC driver. Ensure that the files driver libraries supplied to jODBCManager exist in the specified directories.

- ***Error while attempting to Add or Configure a DSN:***

*“The setup routines for the jBASE ODBC Driver could not be loaded due to system error 126: **Could not load the setup or translator library** or **The specified module could not be found**”*

Check that the [Package Contents](./#package-contents) are in their respective locations and that the **SYSTEM** defined **PATH** environment variable includes the relevant **jBASE ODBC Connector** directory (depending on whether you are attempting the 32 or 64 bit version).

e.g. C:\Program Files\jBASE ODBC Connector

Additionally, ensure that the **PATH** length does not exceed the maximum length.

*“The setup routines for the jBASE ODBC Driver could not be loaded due to system error 126: **Component not found in the registry**”*

The ODBC driver has not been registered correctly. Use the jODBCManager as described above to re-install the driver.

- ***Error while attempting to test the connection:***

“*Specified driver could not be loaded due to system error …”*

A typical error is 193 which usually means one of the **Supporting** libraries could not be found in the **SYSTEM** defined **PATH** or an incorrect version of one of the libraries is being loaded due to the **PATH** precendence. In this case it is best to open a **CMD** command prompt as *System Administrator* and manually set a new **PATH** and test.

```
C:\WINDOWS\system32> set PATH=%ProgramFiles(x86)%\jBASE ODBC Connector;%SystemRoot%\SysWOW64
C:\WINDOWS\system32> odbcad32.exe
```
The **odbcad32.exe** will launch the **OBC Data Source Administrator (32-bit)**. Try to test/add a new **jBASE ODBC Driver** instance. If this succeeds and you have verified the **PATH** and installed components check there are no other versions of all the relevant dlls and any of the paths preceding the **jBASE ODBC Connector** in your **SYSTEM** defined **PATH**.


[ODBC Quick Start](../odbc-quick-start/README.md)

<PageFooter />
