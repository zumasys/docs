# jBASE 5 Licensing Overview

<PageHeader />

With jBASE 5, prior to release 5.8, the licensing model has been designed to simplify the components that are required while maintaining flexibility with regards to license maintenance and allowing the licensing model to be expanded as licensing requirements and paradigms evolve.

## Server Licenses  

A Server license provides a single connection from a single IP address to the database. Note that multiple connects will consume multiple Server users.

Every jBASE 5 installation must have a Server license installed.

By default a Server license will be enabled for either ODBC or jDBC depending on customer preference. The Server license will also include any optional products that have been enabled. The user count for the option must equal the total number of Server users on the license.

### ODBC

Option where JDBC was taken as taken on the initial license.

### JDBC

Option where ODBC was taken on the initial license.

### Transaction Journaling

jBASE standard transaction journaling.

### Dataguard

Transaction Journaling must be ordered or already be on the licenses before Dataguard can be added. Dataguard includes all the functionality to enable the use of JR Secure files, Checkpoints, On-line Backup and Restore and full Warmstart Recovery.

### JEE\/JCA & jRemote Java bundle

jBASE provides a bi-directional interface to JEE by means of the JEE compliant jRemote Inbound and jRemote Outbound resource adapters. The JEE Connector Architecture (JCA) specification, to which these resource adapters conform, specifies the mechanisms and contracts required for this transactional interaction.

JCA provides a Java technology solution to the problem of connectivity between the many application containers and today's enterprise information systems (EIS).

jRemote Java is a new client technology option for jBASE which provides an API to expose BASIC functions like subroutines, execute commands and access files from Java. It is based on an efficient object protocol and uses a secure connection based on TCP/IP, SSL and ACE (Adaptive Communication Environment).

### jRemote C\#

jRemote C\# is a client technology which provides an API to expose BASIC functions like subroutines, execute commands and access files from Microsoft .NET. It is based on an efficient object protocol and uses a secure connection based on TCP/IP, SSL and ACE (Adaptive Communication Environment).

## Multisession Licenses  

A Multisession license allows for up to ten concurrent sessions from a single IP address or system name to the database.

### Enabling Multisession Functionality

To enable multi-session functionality there must be a HostName entry in the \$JBCRELEASEDIR\/multisession (%JBCRELEASEDIR%\\multisession on Windows) directory that matches the client system name or IP Address.  

Use the 'jprocdisp {portnumber}' command to obtain the HostName that is recognized by jBASE licensing.  

In the case where the client IP\/hostname is not known, or if you just want the multi-session licenses to be allocated on a first come first served basis, you can set the environment variable

```
JBASE_DYNAMIC_MULTISESSION=1
```

This will extend the multisession licensing such that, if the client host name is not already in the multisession directory, and there are still available license entries, then a new entry will be dynamically created for this host. Upon exit, if this is the last connection from that client then the entry will be removed.

## Websession Licenses

A Websession license allows up to a ten sessions which may originate from one or more Web Servers or Terminal Servers.

For example with three of these licenses the Web Server would have 30 concurrent sessions available.

The number of defined IP addresses or hosts for the Web Servers and/or Terminal Servers will be specified when the license is created.

For example, a Websession license could be defined to allow up to 30 concurrent sessions, from up to 3 client Web Servers or terminal servers. These 30 sessions would be a central pool that is available to all 3 of the client systems up to a maximum of 30 sessions.

The maximum number of client systems that can be connected via Websession licensing is 15.

The maximum number of licenses available for a Websession license is 4095 blocks of 10 sessions each i.e. a maximum of 40,950 sessions.

There is a minimum requirement for Websession licenses where at least one Server license must be purchased.

### Enabling Websession Functionality

To enable Websession functionality there must be a HostName entry in the \$JBCRELEASEDIR\/websession (%JBCRELEASEDIR%\\websession on Windows) directory that matches the client system names or IP Addresses for the Web Servers or Terminal Servers.  

Use the 'jprocdisp {portnumber}' command to obtain the HostName that is recognized by jBASE licensing.

## License Allocation

License tokens are allocated based on the following criteria

A user connects from a PC or terminal. If their IP or host does not exist in the Multisession License list; the Server License count is incremented.

A user connects from a PC or terminal. Their IP or host is defined in the Multisession License list; the Multisession license count is incremented and they acquire their own Multisession License token 1 of 10.

A user connects from a PC or terminal. They have acquired a Multisession License as above; they are now allocated another Multisession License token 2 of 10.

A user connects from a PC or terminal. They have already acquired 10 Multisession licenses. A license will NOT be allocated from the Server License pool.

A connection is made from a Web Server or Terminal Server. The IP or host is defined as the Websession License client system; the Websession License count is incremented and the system acquires a Websession License token 1 of 10.

A connection is made from a Web Server or Terminal Server. A Websession License has been acquired as above; a further Websession License token is allocated 2 of 10.

A connection is made from a Web Server or Terminal Server as above. 10 Websession License tokens have been allocated; a second Websession License will be allocated if one is available. If the total number of Websession Licenses have been consumed the following error will be displayed:

```
ERROR! Websession license limit reached for this session '192.168.0.102'
```

A license will NOT be allocated from either the Multisession or Server License pools.

## Installing jBASE License Keys

jBASE License information is stored in the 'system.properties' file located in '%JBCRELEASEDIR%\\config' on Windows and in '\$JBCRELEASEDIR\/config' on UNIX\/Linux systems.

Each system will have a 'jruntime.<system name>' key that controls standard jBASE functionality for the components that have been enabled for the system.

If a system has multi-session capability enabled then there will also be a second 'jruntime.multisession' key that controls the activity from client systems which have been enabled for multi-session access.

Both keys must exist in the 'system.properties' file for multi-session connections to be enabled.

To install the license keys, insert the key as the last line in the 'system.properties' file, using a standard text editor such as 'Notepad' on Windows or 'vi' on UNIX\/Linux systems. Do not use 'jed or ED'.

Do not make any other changes to the 'system.properties' file. Particularly do not amend or remove the existing 'jruntime.license = whatever' line.

Once the key has been installed the last few lines of the 'system.properties' file should look something like this:

```
#################################################################

jruntime.license = qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT
jruntime.<system name> = <key information>
jruntime.multisession = <key information>
```

If you are installing or updating a license key on a UNIX/Linux system that already has a jBASE 5.x license installed then the existing shared memory needs to be reinitialized as, even if you reload jBASE, the shared memory with the original license configuration will still persist.

Ensure all jBASE processes are stopped so that the shared memory does not have any attached users then:

```
[5.2@rh5_64 tools]$ jshminfo

Shared Memory Properties, Key 0x4a520064, Id 4423697
Size 436504
create Pid 1267
last Pid 1284
attached 1
atime Sun Sep 18 13:20:04 2011
dtime Sun Sep 18 13:20:02 2011
ctime Sun Sep 18 13:17:34 2011
owner alan (500)
creat alan (500)
mode 0666
seq 0
key 0x4a520064

Shared Memory Info, Key 0x4a520064, Id 4423697

header size 1336, Max 8192
Initialised Sun Sep 18 13:17:34 2011
Revision 1
total_size_shm 436504
jdls table size 411928
size_cache_table 16384
jrla active 0, Pid 0
jdls active 0, Pid 0
time_stamp_active 0
jdls lock count 3020
jdls lock groups 151
jdls locks/group 20
jdls group size 2728 bytes (hdr 8, lock entry 136)
jdls semcount 0
jdls sem Key 0x4a520064, Id 0, 0

[5.2@rh5_64 tools]$ ipcrm -m 4423697
```

Once this is done you can install the new license key and restart jBASE.

A reboot will accomplish the same thing, as will running "jlicenseupgrade -r".

### Querying License Activity

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

The ‘jproclic’ tool shows the number of active processes, and the type of license they are holding (Standard\/Multisession\/Background), e.g.

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

[Back to jBASE Licensing](./../README.md)

<PageFooter />
