# Install MV Dashboard and MV Connect UNIX

<PageHeader />

**Tags:**
<badge text='connect' vertical='middle' />
<badge text='dashboard' vertical='middle' />
<badge text='mvdashboard' vertical='middle' />
<badge text='mvconnect' vertical='middle' />

<iframe width="640" height="360" src="https://www.youtube.com/embed/qUA49EaLvC8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

MV Connect is web application development environment for Multi-Value Pick systems.  MV Connect is included in the MV Dashboard product installer and is used to create MV Dashboard.  Therefore much of the installation instructions discuss MV Dashboard but once it is installed you can move on to the MV Connect specific instructions.

## Requirements

This section details the requirements for installing and running MV Dashboard.

## Platforms

A list of supported platforms for MV Dashboard is available at: [www.zumasys.com/products/multivalue-dashboard/support](http://www.zumasys.com/products/multivalue-dashboard/support)

## Disk Space

MV Dashboard requires 150 MB of free space.

## Installing MV Dashboard (MV Connect)

To begin the installation of MV Dashboard, you must download and run the appropriate installer for your system. The installer can be accessed from a link provided in the email we sent after you signed up for MV Dashboard.

## Installing MV Dashboard on Linux and AIX

Complete these instructions to install the dashboard on Linux or AIX. To install the Dashboard on Linux or AIX:

1. Download the installation bin file into desired directory on your MultiValue server.  If you have curl or wget on your server you can download the installer
   1. Browse to http://www.zumasys.com/downloads
   2. Right click on the version you want and choose "Copy Link"
   3. In Linux/AIX

   ```bash
   # wget <paste link>
   # ; or with curl
   # curl -O <paste link>
2. Go to the directory where you downloaded the installer and run the installation package. For example:

```bash
[root@mvblinux203 tmp]# ./mvapps-version.bin
```

### Note #1

>The mvapps-*version*.bin files needs to be executable. As such, you may need to modify its file permissions using the **chmod +x mvapps-version.bin** command  

Once the package is loaded, the following prompt displays:

```
Press enter to start the installation process.
```

3. Press Enter.

The license agreement displays. Review the license agreement. Note that you may need to press the Space bar several times to review the license agreement in its entirety.

When complete, the following prompt displays:

```
To continue, type “YES” to accept this license agreement:
```

4. Enter **yes** to accept the license agreement.

The installer checks for previous installations. If an existing version of MV Dashboard exists, you will be directed to uninstall that version before installing the newer version.

Otherwise, the following prompt displays:

```
Installation Directory

Please specify the installation directory, or press ENTER to accept the  default path. Installation Directory [/usr/local/mvappsvr]: /usr/local/mvappsvr does not exist, Create? [n]:
```

5. Enter **y** to create the directory or enter **n** to specify a different installation directory.

The following prompt displays:

```
Logfile location

Please specify the location where any log files should be stored. Generally, the log files will not take up very much space unless you have enabled any of the debugging options. Logfile Directory [/usr/local/mvappsvr/logs]:
```

6. Press Enter to accept the default directory (in this example, /usr/local/mvappsvr/logs) or type a directory of your choosing and press Enter.

The following prompt displays:

```
TCP Port Number

Specify the TCP port to use for the application server. The standard port for an internet web server is "80", however there may already be a web server running on that port. By default, this software will use TCP port "8180". TCP Port Number [8180]:
```

7. Press Enter to accept the default port (8180) or type a port of your choosing and press Enter. Then enter **y** when asked to confirm the selection.

The following prompt displays:

```
Select a user for installation

 This software needs to be installed using the same system user as the one associated with the MultiValue machine. Typically, this is the user "pick" or “root” or some variant. The installer has located your systems configuration file and has made its best guess as to the user for installing the dashboard. Confirm that this is correct, or enter the user that the installer should use. In the case of D3, the user ID specified must match the user ID that the D3 virtual machine uses. Select a user id: [pick]:
```

### Note #2

>If doing a D3 installations, and no User ID has been specified in your D3 configuration file, the following prompt displays instead:This software needs to be installed using the same system user as the one associated with the D3 virtual machine. Typically, this is the user "pick", or some variant.Your D3 configuration file was located, but it does not contain a line for 'user'. Please specify the user ID that the D3 virtual machine uses.Select a user id: [root]: |

8. Press Enter to accept the default user (*pick*if a User ID has been specified in your D3 configuration file, *root*otherwise) or type a user name of your choosing and press Enter. Then enter **y** when asked to confirm the selection.

The following prompt displays:

```
Installation Summary

Please review the installation summary below. If the parameters are correct, enter "y" to complete the installation process with your selected parameters. Installation directory: /usr/local/mvappsvr Log file directory: /usr/local/mvappsvr/logs TCP Port: 8180 Install User: pick Begin Installation? [n] :
```

9. Enter **y** to complete installation process. The following prompt displays:

```
To complete the installation, your inetd subsystem needs to be re-started. This will not interrupt any active user processes and can be done safely while the system is in use. If you would like, the installer will automatically execute the command below to restart the service. To accept this option, enter "y" at the prompt. To restart the service at a later time, enter "n" or just press enter.
```

Linux Command:

```bash
/etc/init.d/xinetd restart
```

AIX Command:

```bash
/usr/bin/refresh -s inetd
```

```
Automatically restart inetd? [n]:
```

10. Enter **y** if you want to automatically restart inetd or enter **n** to restart inetd at a later time.

The installation of MV Dashboard is complete.  Continue on to [Configure MV Dashboard](./../../configuration/README.md).

<PageFooter />
