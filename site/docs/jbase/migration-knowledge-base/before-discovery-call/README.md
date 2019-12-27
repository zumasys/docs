# Before Discovery Call

**Created At:** 8/10/2017 11:48:09 PM  
**Updated At:** 8/11/2017 3:14:51 PM  
**Original Doc:** [before-discovery-call](https://docs.jbase.com/36040-migration-knowledge-base/before-discovery-call)  
**Original ID:** 266637  
**Internal:** Yes  


# 


***1.. Complete as possible the Customer Information Sheet***

- Zumasys fields : Customer, Project Description, Project Manager, Zumasys Salesman, MV Tech
- Executive Contact is person who can make financial and planning decisions
- Application Contact is person or people who know the client application and will be the actual person that does testing and knows the application.
- Technical Contact is the person or people to contact for information regarding hardware such as printers, firewalls and networking and other peripherals
- Software support is the person or people to contact for program support or changes not related directly to the conversion such as fax/email.  This is normally Jim Albright or Ed Olfield for Shims conversions.


***2.. Find out about access to their current system or be prepared for GotoAssist with root access to the computer.***

- Either get complete information on how to get root access to their existing computer or be sure they understand that during the call we will need to have GotoAssist access to their terminal with root access to their computer


***3.. If possible, find out firewall information and get admin login credentials for it or have them prepared to get access to it during the call***

# The ultimate goal for this discovery is the following items:


| How do we create the printers in Linux on  their new jBASE box?<br> | hosts.txt and linuxprinters.txt on zumUVSHIMS<br> |
| --- | --- |
| How do we set those printers up in jBASE?<br> | uvlp and .drv items on zumUVSHIMS<br> |
| What UV.ACCOUNT and respective directories represent the SYSTEM and /dbms directories on the new jBASE box?<br> | ZUMACCT process will create<br> |
| What is needed to setup the mail relay?<br> | ???<br> |
| We will need to get a list of users to convert and possible ssh information<br> | /etc/passwd.  Created using mrgpasswd on AIX<br> |
| We will need to get a list of INDEXes (non-Universe)<br> | LIST-INDEX for non-Universe machines<br> |




## Customer Information Sheet

Highlighted items should be collected prior to discovery


| Date / Time of discovery with customer<br> | *01/01/2014  8:00 EST*<br> |
| Customer<br> | *Customer Name*<br> |
| Project Description<br> | *Shims on AIX to jBASE on the Cloud with BUaaS*<br> |
| Project Manager / Project Coordinator<br> |  <br> |
| Zumasys Salesman<br> | <br> |
| Zumasys MV Tech<br> | Dan Ell [dane@zumasys.com](mailto:dane@zumasys.com)  Ext. 429<br> |
| Executive Contact (Project Decisions)<br> | <br> |
| Application Contact (App test and questions)<br> | <br> |
| Technical Contact (Hardware, Network, Printers)<br> | <br> |
| Software Support (Program mods) (i.e. jim A, Ed O)<br> | <br> |
| Access to their existing UNIVERSE computer<br> | <br> |
| Access to current firewall or contact for firewall<br> | <br> |
| jBASE single license and multi-session users<br>(Multi-session means more than 1 screen from a PC)<br> | <br> |
| User / Password for SHIMS testing<br>(usually shims,no password)<br> | <br> |
| Terminal Emulation(s) used (prefer vt220)<br> | <br> |
| Accounts to be converted<br> | <br> |
| Accounts NOT to be converted<br> | <br> |




# Discovery process

## How do we access your current box in the future?


| <br> |


Do you have public access ssh?                                                                                                                                              
What type of VPN?
Is there public access to the VPN?
Do you know the public IP?
Can we whitelist a public ssh port with user “zumasys”?

## What PC Terminal Emulators will be used for the new system?


| <br> |


Accuterm 7.1 or better is best.

## Who will need outside access (VPN credentials)?


| <br> |


Home-based Remote users? Outside of the main location or outside of site-site tunnels?

## How many branches?


| <br> |


“netstat -rn” and check for subnets

## What “tcl” processes do you do outside of the menu system?


| <br> |


Programs run other than the typical GET-LIST, SELECT, SORT type of reporting command

##  “Tcl” password?


| <br> |


Programs run other than the typical GET-LIST, SELECT, SORT type of reporting command

## What other servers / systems interface to your database server?


| <br> |


Do you have external catalog systems or servers that are fed information from your main database server that we need to replace or at least accommodate?

## When do you do monthend and who do we need to contact?


| <br> |


Need to get a snapshot the night before and then with everyone off system get snapshot just before month-end

## Backups/Schedule/Retention


| -Backup schedule (what time does the backup start? Frequency (5 days or 7 days? Retention for archives (monthly, yearly)?<br>-Bandwidth?<br> |


Discuss further on backups & Bandwidth

## What type of internet connection? Speed?


| <br> |


Rated via [www.speedtest.net](http://www.speedtest.net) from their box

## Zumasys must run a transfer rate test to a Zumasys site and observe results


| <br> |


Need to test a sample transfer from the customer’s on-prem to our cloud

## What Platform are you currently on?


| <br> |


AIX?
Intel based server?
Other platform like HPUX, SUN, etc.

## What version of the O/S are they using?


| <br> |


On AIX, “oslevel -r”, on Redhat/Centos “cat /etc/redhat-release”

## Server IP Address


| <br> |


On AIX, “ifconfig -a”, on Redhat/Centos “ifconfig”

## Do they have support for screen, ssh, rsync and bash?


| <br> |


“which screen”,”which ssh”, “which rsync”, “which bash”

## Disk space used and available?


| <br> |


On AIX “df -k”, on Redhat/Centos “df -h”

## Disk space used by Application


| <br> |


cd to account base directory (Usually /dbms on shims)
On AIX “du -sk”, on Redhat/Centos “du -sh”

## Sendmail relay host


| <br> |


“grep DS /etc/mail/sendmail.cf”

## Current Backup media


| <br> |


Ony necessary if unusual process needed.  I.e.  No virtual tape or rsync

## What type of terminal emulations will need to be supported?


| <br> |


The standard is vt220

## Will they be using dumb terminals?


| <br> |


## If yes, how are they connected to the current system?


| <br> |


RAN boxes, serial direct connection, portserver

## What email / fax solution will be used for the new system?


| <br> |


the standard is email from server with Esker for faxing



## Printers           




| <br> |




On Universe “cat /var/spool/uv/sp.config”
Find out if serial printers on RAN or other proprietary boxes are going to be converted to Portserves, Printservers or combination of the two.  Parallel Printers (not on a printserver) need to have a printserver and possibly some proprietary such as Genicom will need special adapter.



## What user or users will be needed to test shims on the system




| <br> |

 
Get the linux login, shims login and passwords and prompts needed
 
## Accounts to be converted and not converted
 

| <br> |

 
On AIX “du -sk /dbms/\*”, on Linux “du -sh /dbms/\*” gives list of account directories and space
cd /usr/lpp/iv ; /usr/lpp/uv/bin/uv then &lt;esc&gt; from menu and LIST-ITEM UV.ACCOUNT for list of accounts
 
## If converting to on-site server, is UPS sufficient for new server?
 

| <br> |

 
## Hardware and Software needs discovered?
 

| <br> |

 
Printservers, PortServers, Terminal Emulators, Firewall clients, UPS, etc
 
## How do they handle these common errors….
 
JBASE\_ERRMSG\_DIVIDE\_ZERO   Divide by zero !!-- ZERO returned
 
JBASE\_ERRMSG\_NON\_NUMERIC              Non-numeric value -- ZERO USED
 
JBASE\_ERRMSG\_ZERO\_USED      Invalid or uninitialised variable -- ZERO USED
 
# Third Party Product List
 
Licensing, installation and transfer of third party products is the responsibility of the customer.  However, third party products are important elements of your system and must be address during the migration project planning.  While Zumasys does not control or take responsibility for Third Party Products, we will incorporate these dependencies into the overall project plan and help to manage these elements.
  
The following table can be used to identify and plan for the migration of third party products:
  

| Product Name<br> | Vendor<br> | Contact<br> | License/Transfer Fee<br> | Installation/Services<br> |
| <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |
|  <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> | <br> |

 
Insert additional rows as required
  
## List of common third party products
 
- Parts catalogs
- Shipping Systems
- Tax calculation systems
- Address verification systems
- EDI
- Pricing
- Customer portals
- Document management/imaging
- Faxing
- Bulk Email
- FTP servers
- Web Services

  
## Items left for future discovery?
 

|  <br> |

  

 









