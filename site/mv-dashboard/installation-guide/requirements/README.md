# Requirements

<PageHeader />

This section details the requirements for installing and running MultiValue Dashboard.

## Platforms
Supported platforms for MultiValue Dashboard are:

MVDashboard/Connect installs a O/S component called mvappsvr (Web Listener).  This component is supported on the following platforms.  The listener is dependent on xinetd on linux and inetd on Aix.  Redhat/CentOS 7 has introduced systemctl services and often xinetd is not installed by default.  The installer will recognize this and request you install the required package.  If you are running on other versions of Linux the installer "may" work but is not supported by the default installer.  This issue is usually related to the automatic installation of the services.

| Platform                 | Supported  | 1.7.0 |  
| ---                      | :-:        | :-:   |  
| AIX 6                    | x          |      |  
| AIX 7.1                  | x          |      |  
| AIX 7.2                  | x          |      |  
| RHEL/CentOS 6            | x          |      |  
| RHEL/CentOS 7            | x          | Requires xinetd     |  
| RHEL/CentOS 8            | x          | Requires Xinetd     |
| Windows 7/Server 2008 R2 | x          | |
| Windows 8/Server 2012 R2 | x          |     |
| Windows 10/Server 2016   | x          |     |
| Windows Server 2019      | x          | |

* D3
  * Linux
  * Windows
  * Aix
* jBASE
  * Linux
  * Windows
  * Aix
* OpenQM
  * Linux
  * Windows
* UniData
  * Linux
  * Windows
  * Aix
* UniVerse
  * Linux
  * Windows
  * Aix

## Browser
MultiValue Dashboard is supported on the following browsers:

* Internet Explorer
* Firefox
* Safari
* Chrome
* Edge

## Disk Space
MultiValue Dashboard requires 150 MB of free space.

## Firewalls

The O/S listener by default listens on port 8180 and is a http service.  If you have a firewall or other security software such as Selinux you will need to add this port and service to your exception lists.

<PageFooter />
