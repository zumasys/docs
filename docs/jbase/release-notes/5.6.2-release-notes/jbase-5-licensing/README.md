# jBASE 5 Licensing

**Created At:** 6/9/2017 6:33:57 PM  
**Updated At:** 10/7/2019 1:16:15 PM  


## Description 

With jBASE 5, the licensing model has been redesigned in order to simplify the components that are required while maintaining flexibility with regards to license maintenance and allowing the licensing model to be expanded as licensing requirements and paradigms evolve.

Among the options available with jBASE licensing are:

1. Install a permanent jBASE license as part of the product installation (Please refer to [Windows](jbase-56-windows-installation-guide) or [Linux](jbase-56-linux-installation-guide) Installation guide ),
2. Install an evaluation license as part of the product installation (Please refer to [Windows](jbase-56-windows-installation-guide) or [Linux](jbase-56-linux-installation-guide)  Installation guide ),
3. [Upgrade a evaluation license to a permanent license,](305038-installing-jbase-license-keys)
4. [Upgrade a standard edition permanent license and add MultiSession license](305038-installing-jbase-license-keys).


## 


## License types 

### Server Licenses 

A Server license provides a single connection from a single IP address to the database. Note that multiple connects will consume multiple Server users.

Every jBASE 5 installation must have a Server license installed.

By default a Server license will be enabled for both ODBC and jDBC. The Server license will also include any optional products that have been enabled. The user count for the option must equal the total number of Server users on the license.



***ODBC***

Option where ODBC is available by default on the initial license.



***JDBC***

Option where JDBC is available by default on the initial license.



***Transaction Journaling***

jBASE standard transaction journaling.



***Dataguard***

Transaction Journaling must be ordered or already be on the licenses before Dataguard can be added. Dataguard includes all the functionality to enable the use of JR Secure files, Checkpoints, On-line Backup and Restore and full Warmstart Recovery.



***JEE/JCA & jRemote Java bundle***

jBASE provides a bi-directional interface to JEE by means of the JEE compliant jRemote Inbound and jRemote Outbound resource adapters. The JEE Connector Architecture (JCA) specification, to which these resource adapters conform, specifies the mechanisms and contracts required for this transactional interaction.

JCA provides a Java technology solution to the problem of connectivity between the many application containers and today's enterprise information systems (EIS).

jRemote Java is a new client technology option for jBASE which provides an API to expose BASIC functions like subroutines, execute commands and access files from Java. It is based on an efficient object protocol and uses a secure connection based on TCP/IP, SSL and ACE (Adaptive Communication Environment).



***jRemote C#***

jRemote C# is a client technology which provides an API to expose BASIC functions like subroutines, execute commands and access files from Microsoft .NET. It is based on an efficient object protocol and uses a secure connection based on TCP/IP, SSL and ACE (Adaptive Communication Environment).



### Multisession Licenses 

A Multisession license allows for up to ten concurrent sessions from a single IP address or system name to the database.



**Enabling Multisession Functionality**

To enable multi-session functionality there must be a **HostName** entry in the **JBCRELEASEDIR/multisession** (**%JBCRELEASEDIR%\multisession**on Windows) directory that matches the client system name or IP Address. Use the 'jprocdisp {portnumber}' command to obtain the **HostName** that is recognized by jBASE licensing.

In the case where the client IP/hostname is not known, or if you just want the multi-session licenses to be allocated on a first come first saved basis, you can set the environment variable.



**JBASE\_DYNAMIC\_MULTISESSION=1.**

This will extend the multisession licensing such that, if the client host name is not already in the multisession directory, and there are still available license entries, then a new entry will be dynamically created for this host. Upon exit, if this is the last connection from that client then the entry will be removed.



### Websession Licenses

A Websession license allows up to a ten sessions which may originate from one or more Web Servers or Terminal Servers.

For example with three of these licenses the Web Server would have 30 concurrent sessions available.

The number of defined IP addresses or hosts for the Web Servers and/or Terminal Servers will be specified when the license is created.

For example, a Websession license could be defined to allow up to 30 concurrent sessions, from up to 3 client Web Servers or terminal servers. These 30 sessions would be a central pool that is available to all 3 of the client systems up to a maximum of 30 sessions.

The maximum number of client systems that can be connected via Websession licensing is 15.

The maximum number of licenses available for a Websession license is 4095 blocks of 10 sessions each i.e. a maximum of 40,950 sessions.

There is a minimum requirement for Websession licenses where at least one Server license must be purchased.



**Enabling Websession Functionality**

To enable Websession functionality there must be a **HostName** entry in the **JBCRELEASEDIR/websession** (**%JBCRELEASEDIR%\websession**on Windows) directory that matches the client system names or IP Addresses for the Web Servers or Terminal Servers. Use the 'jprocdisp {portnumber}' command to obtain the **HostName** that is recognized by jBASE licensing.



## License Allocation

License tokens are allocated based on the following criteria

- A user connects from a PC or terminal. If their IP or host does not exist in the Multisession License list; the Server License count is incremented.
- A user connects from a PC or terminal. Their IP or host is defined in the Multisession License list; the Multisession license count is incremented and they acquire their own Multisession License token 1 of 10.
- A user connects from a PC or terminal. They have acquired a Multisession License as above; they are now allocated another Multisession License token 2 of 10.
- A user connects from a PC or terminal. They have already acquired 10 Multisession licenses. A license will NOT be allocated from the Server License pool.
- A connection is made from a Web Server or Terminal Server. The IP or host is defined as the Websession License client system; the Websession License count is incremented and the system acquires a Websession License token 1 of 10.
- A connection is made from a Web Server or Terminal Server. A Websession License has been acquired as above; a further Websession License token is allocated 2 of 10.
- A connection is made from a Web Server or Terminal Server as above. 10 Websession License tokens have been allocated; a second Websession License will be allocated if one is available. If the total number of Websession Licenses have been consumed the following error will be displayed:



> ERROR! Websession license limit reached for this session '192.168.0.102'
> 
> A license will NOT be allocated from either the Multisession or Server License pools.






## Querying License Activity

To determine the number of licenses and the licensing components enabled on a system, use the 'jlicensinginfo' command:

```
jsh Administrator ~ -->jlicensinginfo

Licence Type 1
Uname northrend
Total Licenses 3
Licenses Free 2

Licensed products Runtime
Compiler
JDK
WebBuilder
JDP
JAGENT
TRANSLOG
VBOBJEX
COMWRAPPER
JDBC
SERVER
ODBC
JRemoteC#
JRemoteJava
CALLJEE

Num. multisession licenses 2
192.168.1.101 0 sessions(s) in-use
192.168.1.192 0 sessions(s) in-use

jsh Administrator ~ -->
```



There is also a 'jprocdisp' utility which provides further information regarding the hostname of connected sessions:

```
jBASE 5.2 Monitor (2.5) - Linux                                                                   13:33:33  07 SEP 2010
 
Port       User     Pid      Files Perf  Del  Read Write Open   Mem   Cpu  Prog
   1       alan   15156      3 (3)    1    1    13     4   12  532K  0.00  1 E jsh (jsh.b,111)
   2       alan   15106      3 (3)    0    1     4     0    6  880K  0.00  1 I jsh (CommandNext.b,103)
*  3       alan   15162      3 (3)    0    1    15     0    4  504K  0.01  1 mw42 (mw42.b,764)
   4       alan   15159      3 (3)    0    1    16     0    4  500K  0.00  1 I mw42 (mw42.b,232)
q[5.2@bmlinux config]$
[5.2@bmlinux config]$
[5.2@bmlinux config]$
[5.2@bmlinux config]$ jprocdisp 2
 
File=/home/alan/5.0_rels/jbc5.2.6/proc/port0-499/2
Last Update Time 4s ago
PortAllocated : Yes
        Port Number     2       Pid 15106   (Active)
        HostName ukhml-v890new.europe.temenosgro
        Perform Level   1       Background      0
        Account         alan    User            alan
        Memory Free     489712  Memory Used     411472
        OPEN            6       READ            4       WRITE           0
        DELETE          1       CLEARFILE       0       EXECUTE         0       INPUT           1
        Spool status
        App Open Files  3       OS Open Files   3
        block file              block key
        Thread 0 - Program at keyboard INPUT
                jsh
```



The ‘jproclic’ tool shows the number of active processes, and the type of license they are holding (Standard/Multisession), e.g.

```
procdir '/home/alan/5.0_rels/jbc5.2.7/proc'

Port 3          Pid 12572        (Active)      M        Update Time 2s ago
Port 9          Pid 11879        (Not Running) S        Update Time 35s ago
Port 4          Pid 12575        (Active)      M        Update Time 1s ago
Port 8          Pid 11876        (Active)      S        Update Time 3s ago
Port 1          Pid 12566        (Active)      M        Update Time 4s ago
Port 2          Pid 12569        (Active)      M        Update Time 3s ago
 
Total Ports 513, allocated 8, active 6, not active 2, License  standard 1,  multisession 5
```


