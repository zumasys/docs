# CONFIGURE MV DASHBOARD

**Created At:** 6/20/2017 4:13:53 PM  
**Updated At:** 11/21/2017 9:29:59 AM  


Now that you have installed the MV Dashboard, you should be able to connect to the application server's configuration utility using your favorite web browser. This is where you will configure your database connection, install the base multivalue database and activate your software.

## **Connecting to the Configuration Utility**

To connect, open your web browser and point it to the name or IP address of your database server. Make sure to include the TCP port number that you selected during the installation in the address bar. For example, if you accepted the default port, your web address might be:

http://my.pickserver.com:8180/config

Login to the MultiValue Application Server as the user "admin" with the password "admin".

The MV Dashboard Configuration Utility displays. The tabs at the top of the screen allow you to navigate through the various configuration screens.



## Configuring your Database Connection

Now that you have connected to the configuration utility, you are ready to configure your database connection. The Database tab provides the interface for setting-up all of the parameters specific to your multivalue database.

To configure your database connection:

1. Select the Database tab.
2. Select the platform from the provided list.


### JBASE

1. Provide the following parameters in the Required Parameters section of the screen.


| jBASE Path | Specifies the full operation system path to your jBASE installation (JBRELEASEDIR). Typically, the path is as shown below (but can vary depending on your jBASE installation):/opt/jbase5/5.2 for Linux and AIXC:\jBASE5 for Windows |
| --- | --- |
| jBASEAccount | Specifies the database account name that houses your application server software. When initially configuring the software, use this field to set the account name. |
| Account Parent Directory | The parent directory in which the dashboard account directory will be created |


2. (Optional) Provide the following parameters in the Optional Parameters section of the screen.


| Segment Size | Specifies the maximum length of the data string that is sent to the multivalue database during any request. The default value for this field is 3000, but it can be adjusted up or down as needed. Typically, this field would be adjusted down if you are experiencing any data loss with data inside the request URI. |
| DBRetries | Specifies the number of times that the software will attempt to connect to your multivalue database before giving up and displaying an error message. A common reason that the system would not be able to connect to the database would be that the system has exceeded its licensed number of user sessions. Typically, this is set to 3 or some other similar number. |


3. Click Save Changes.

After the software has validated your entries in the required parameters section, the database tab expands to allow you to install the base multivalue database software.

### QM

1. Provide the following parameters in the Required Parameters section of the screen.


| QM Path | Specifies the full operation system path to your QM executable. Typically, the path is as shown below (but can vary depending on your QM installation):/usr/qmsys/bin/qm for Linux and AIXC:\QMSYS\bin\qm.exe for Windows |
| QMAccount | Specifies the database account name that houses your application server software. When initially configuring the software, use this field to set the account name. |


2. (Optional) Provide the following parameters in the Optional Parameters section of the screen.


| Working Directory | Specifies the initial working directory that is used for the software. This can be set to any temporary storage directory or the installation directory of the application server software. |
| Segment Size | Specifies the maximum length of the data string that is sent to the multivalue database during any request. The default value for this field is 3000, but it can be adjusted up or down as needed. Typically, this field would be adjusted down if you are experiencing any data loss with data inside the request URI. |
| DBRetries | Specifies the number of times that the software will attempt to connect to your multivalue database before giving up and displaying an error message. A common reason that the system would not be able to connect to the database would be that the system has exceeded its licensed number of user sessions. Typically, this is set to 3 or some other similar number. |


3. Click Save Changes.

After the software has validated your entries in the required parameters section, the database tab expands to allow you to install the base multivalue database software.

### UNIVERSE

1. Provide the following parameters in the Required Parameters section of the screen.


| Universe Command Path | Specifies the full operation system path to your Universe command executable (uv). Typically, the path is as shown below (but can vary depending on your Universe installation):/usr/uv/bin/uv for Linux and AIXUv.exe for Windows |
| UniverseAccount | Specifies the name of the Universe account (directory) that will hold your software. When initially configuring the software, use this field to set the account name. |
| Account Parent Directory | The parent directory in which the dashboard account directory will be created |


2. (Optional) Provide the following parameters in the Optional Parameters section of the screen.


| Segment Size | Specifies the maximum length of the data string that is sent to the multivalue database during any request. The default value for this field is 3000, but it can be adjusted up or down as needed. Typically, this field would be adjusted down if you are experiencing any data loss with data inside the request URI. |
| DBRetries | Specifies the number of times that the software will attempt to connect to your multivalue database before giving up and displaying an error message. A common reason that the system would not be able to connect to the database would be that the system has exceeded its licensed number of user sessions. Typically, this is set to 3 or some other similar number. |


3. Click Save Changes.

### UNIDATA

1. Provide the following parameters in the Required Parameters section of the screen.


| UniData Command Path | Specifies the full operation system path to your Universe command executable (uv). Typically, the path is as shown below (but can vary depending on your Universe installation):/usr/ud81/bin/udt for Linux and AIXudt.exe for Windows |
| Unix User ID: | The Unix user that will own the UniData account directory. If the specified user does not exist, a new Unix user will be created.mvdb |
| Unix Group ID: | The primary Unix group for the user specified above. If the specified group does not exist, a new group will be created.mvdb |
| UniDataAccount | Specifies the name of the UniData directory name that will hold your software. When initially configuring the software, use this field to set the account name. Do not enter a full path in this field |
| Account Parent Directory | The parent directory in which the dashboard account directory will be created |


2. (Optional) Provide the following parameters in the Optional Parameters section of the screen.


| Segment Size | Specifies the maximum length of the data string that is sent to the multivalue database during any request. The default value for this field is 3000, but it can be adjusted up or down as needed. Typically, this field would be adjusted down if you are experiencing any data loss with data inside the request URI. |
| DBRetries | Specifies the number of times that the software will attempt to connect to your multivalue database before giving up and displaying an error message. A common reason that the system would not be able to connect to the database would be that the system has exceeded its licensed number of user sessions. Typically, this is set to 3 or some other similar number. |


3. Click Save Changes.

### D3

1. Provide the following parameters in the Required Parameters section of the screen.


| D3 Path | Specifies the full operation system path to your D3 executable. Typically, the path is as shown below (but can vary depending on your D3 installation):/usr/bin/d3 for Linux and AIXC:\Program Files\MultiValue\D3\D3Programs\D3tcl.exe for Windows (the Windows path must always end with \D3tcl.exe) |
| D3 User ID | (For Linux & AIX Only) Specifies the D3 user name that is used to access the database account that houses your multivalue software. This value cannot currently be changed. |
| D3Password | (For Linux & AIX Only) Specifies the password for the MVDASHBOARD user account. When initially configuring the software, use this field to set the initial password for the account.This user account will automatically be created and used to access your D3 system.NOTE: To change the password after its initial configuration, it is necessary to first update the password in D3 and then modify this parameter from this configuration utility. |
| D3Account | Specifies the database account name that houses your application server software. When initially configuring the software, use this field to set the account name. |
| D3 VME | (For Linux & AIX Only) Specifies the name of the D3 Virtual Machine Environment (VME) that should be used for the dashboard software. Typically, this should be set to "pick0". |


2. (Optional) Provide the following parameters in the Optional Parameters section of the screen.


| Working Directory | Specifies the initial working directory that is used for the software. This can be set to any temporary storage directory or the installation directory of the application server software. |
| Segment Size | Specifies the maximum length of the data string that is sent to the multivalue database during any request. The default value for this field is 3000, but it can be adjusted up or down as needed. Typically, this field would be adjusted down if you are experiencing any data loss with data inside the request URI. |
| DBRetries | Specifies the number of times that the software will attempt to connect to your multivalue database before giving up and displaying an error message. A common reason that the system would not be able to connect to the database would be that the system has exceeded its licensed number of user sessions. Typically, this is set to 3 or some other similar number. |


3. Click Save Changes.

After the software has validated your entries in the required parameters section, the database tab expands to allow you to install the base multivalue database software.

## Installing the Base Package

After the configuration utility has validated your entries in the required parameters section, the database tab expands to allow you to install the base multivalue database software. This section of the Database tab is used to install or re-install the core software package to your multivalue database. This section is typically only necessary during the initial installation process, however it could also be used as part of an upgrade process or re-initialization of the software.


| IMPORTANT | <ul><li>The multivalue system must be running to install the base package.</li><li>Logging on to the multivalue system into the base account must leave the user at TCL. If you are unable to do this, please contact Zumasys support for assistance.</li></ul> |


To install the base multivalue software:

### JBASE

1. Provide the following parameters in the Install Dashboard Software section of the screen.


| Package Directory | Specifies the system directory that contains the core software packages. These packages were installed with your software and the correct directory typically displays automatically. |


2. Click Install.

If the installation process succeeds, a success message and the database software version are displayed.

### QM

1. Provide the following parameters in the Install Dashboard Software section of the screen.


| Account Parent Directory | The parent directory in which the dashboard account directory will be created. This is a required field that the system will make no attempt to auto-fill. An example of a likely entry might be /u |
| Package Directory | Specifies the system directory that contains the core software packages. These packages were installed with your software and the correct directory typically displays automatically. |


2. Click Install.

If the installation process succeeds, a success message and the database software version are displayed.

### UNIVERSE

1. Provide the following parameters in the Install Dashboard Software section of the screen.


| Package Directory | Specifies the system directory that contains the core software packages. These packages were installed with your software and the correct directory typically displays automatically. |


2. Click Install.

If the installation process succeeds, a success message and the database software version are displayed.

### UNIDATA

1. Provide the following parameters in the Install Dashboard Software section of the screen.


| Package Directory | Specifies the system directory that contains the core software packages. These packages were installed with your software and the correct directory typically displays automatically. |


2. Click Install.

If the installation process succeeds, a success message and the database software version are displayed.

### D3

1. Provide the following parameters in the Install Dashboard Software section of the screen.


| DMUsername | Specifies the user name of your DM user, or any user with full database privileges. This field defaults to the value DM, and typically does not need to be changed. |
| DMPassword | Specifies the password for your DM database user as configured above. If your DM user does not have a password, leave this field blank.NOTE: This field should not be used for your DM account password. The DM account password is entered in the Acct. Password field (below). |
| DM User Behavior | Specifies the behavior of the DM user account. If you are prompted to enter an account name when logging into your system as the DM user (using a telnet or ssh connection), select the Prompts for Master Dict option. If instead you are automatically logged into the DM account, select the Automatic LOGTO DM option. |
| Acct. Password | Specifies the password assigned to your DM account (as indicated above). If your DM database account does not employ a password, leave this field blank. |
| Package Directory | Specifies the system directory that contains the core software packages. These packages were installed with your software and the correct directory typically displays automatically. |


2. Click Install.

If the installation process succeeds, a success message and the database software version are displayed.

## **Activating the Dashboard**

To Activate MV Dashboard:

1. Select the Activate tab.
2. Enter the license key provided to you by Zumasys.
3. Click Update.



| NOTE<br> | On Windows, after entering the license key, the MV Dashboard service needs to be restarted to enable REST calls for MV Connect. |


## **Other Features Available from the Configuration Utility**

The following tabs provide various information on your system, allow you to set configuration utility security and install new applications to the dashboard.

## **Status Tab**

The Status tab is intended to provide the software's administrator a summary of its health and configuration status. When logging into the configuration interface, this screen is displayed to give a quick, graphical view into the status of the Application Server.

### **STATUS ICONS**

The first section of the Status tab displays five icons that indicate the current status of the software.


| System Status | Displays the overall status of the system.<ul><li>Green indicates that all of the configuration has been completed and verified.</li><li>Yellow indicates that the configuration appears to be complete, but for some reason the configuration is invalid.</li><li>Red indicates that the system is not fully configured and/or usable.</li></ul> |
| Server Installed | Displays the status of the basic server software installation as completed by the installation script.<ul><li>Green indicates that the software has been fully installed.</li><li>Yellow indicates that a problem has been detected with the installation of the software.</li><li>Red indicates that the software has not been installed.</li></ul> |
| Server Activated | Displays the activation status of the software.<ul><li>Green indicates that the software has been activated.</li><li>Yellow indicates that activation has been completed or started, but it is not valid.</li><li>Red indicates that the software has not been activated.</li></ul> |
| Database Configured | Displays the database configuration status.<ul><li>Green indicates that the software has been configured and that the configuration appears to be valid.</li><li>Yellow indicates that the software has been configured, but a problem was detected.</li><li>Red indicates that the software has not been configured.</li></ul> |
| MV Software | Displays the status of the multivalue software part of the installation. |


### **SERVER SUMMARY INFORMATION**

The second section of the Status tab displays general information regarding the installation of your application server software.


| Server Version | Displays the version of the MultiValue Application Server that you are running. |
| System ID | Displays the system ID issued by Zumasys and uniquely identifies your installation of the software. |
| Configured Handlers | Lists all of the installed URI Handlers. These handers are used internally to map URIs to installed application packages. |
| Included Modules | The application server software is implemented using a modular design allowing for easy expansion in the future. This section includes a list of all of the currently configured modules. |
| Default Handler | Displays which application is executed by default when no application handler is defined in the request URI. |
| Default Resource | Displays which application program is executed if no application resource is defined in the request URI. |


### **INSTALLED APPLICATIONS**

The third section of the Status tab lists all of the applications that are currently installed and configured using the MultiValue Application Server.

### **SECURITY TAB**

The Security tab allows you to change the Admin password. This is the password used to access both the configuration utility at /config, and also any multivalue applications that are accessible using the sdbc handler. You can identify these applications by looking for /sdbc/ in the request URI.

### **DOCS TAB**

The Docs tab provides more information about the configuration and setup of the MultiValue Application Server.

### **APPS TAB**

The Apps tab displays your list of installed applications and can be used to install new applications.

- The Installed Applications section displays the package name, version and handler name for all of the software packages that you have installed into the application server.
- The Install New Application section allows you to install new applications. To install a new application, enter the full system path to the package file that was provided by Zumasys in the Package Path field and click Install. Once the installation has completed, you can access the new software package using its handler name in the request URI.


# RUNNING THE DASHBOARD IN FLASHED MODE

As installed, MV Dashboard control programs and subroutines are not flash-compiled. Complete these instructions to run the dashboard in flashed mode.

To run the dashboard in flashed mode:

1. Log onto the MVDB account of the D3 server on which the dashboard is installed.

2. Run these commands:

```
COMPILE RSS.BP (O 
COMPILE MVBP.BP (OW 
COMPILE WDB.BP (OW 
COMPILE MVDB.SUBS (O
```



3. Change attribute 1 in the COMPILE.SETUP item (controls the manner in which the Dashboard code editor compiles widget subroutines) in the MVDB.CONTROL file in the MVDB account from:

```
BASIC %FILENAME% %ITEMNAME%
```

to:

```
COMPILE %FILENAME% %ITEMNAME% (O
```

4. Save the updated item.

The dashboard will now run in flashed mode and will flash compile any new or modified widget subroutines.


| WARNING<br> | If you choose to run the Dashboard in flashed mode, make sure that all subroutines called from your existing application are flash-compiled as well. |


# **DISABLING FLASHED MODE**

Complete these instructions to disable flashed mode. To disable flashed mode:

1. Change attribute 1 in the COMPILE.SETUP item in the MVDB.CONTROL file in the MVDB account from:


```
COMPILE %FILENAME% %ITEMNAME% (O
```

to:

```
BASIC %FILENAME% %ITEMNAME%
```

2. Save the updated item.

3. Un-flash the programs by running the following commands:

```
DEOPTIMIZE DICT RSS.BP 
DEOPTIMIZE DICT MVBP.BP 
DEOPTIMIZE DICT WDB.BP 
DEOPTIMIZE DICT MVDB.SUBS
```

Flashed mode is disabled.



# **STARTING MV DASHBOARD**


| NOTE<br> | D3 must be running in order to start the dashboard. |


Complete the instructions below to start MV Dashboard.

To start MV Dashboard:

1. Open your web browser and point to the name or IP address of your database server. Make sure to include the TCP port number that you selected during the installation. For example, if you accepted the default port, your web address might be:

http://my.pickserver.com:8180/

2. The MV Dashboard Login screen displays. Enter your Login name and password and then click the Login button. By default the Login name and Password are both set to "admin".

MV Dashboard is started.
