# JRFS Quick Start guide

<PageHeader />

## Description

This guide covers a basic configuration of jRFS. It describes a configuration up between a client machine (omega) and a server (demo), both running Windows.

### The jRFS Service

Both client and server machines must have an entry in %SYSTEMROOT%\system32\drivers\etc\services that follows the schema:

```
<service name> <port number>/<protocol>[aliases...] [#<comment>]
```

For jRFS the entry required is:

```
jRFS    5001/tcp    jRFS      #jBASE Remote file service
```

### Client Setup

On the client machine, omega, we create a Q pointer called RFSDEMO. This necessitates an [MD/VOC file](./../../accounts/the-md&voc-file/README.md) being set up on the client. The Q-pointer item is:

```
RFSDEMO
001 Q
002 ACCDEMO (local SYSTEM account name entry)
003 JCUSTOMERS (Actual remote filename to be accessed)
```

In the [SYSTEM](./../../../environment-variables/system-file) file on the client machine we must define the "account" ACCDEMO. The ‘R’ pointer identifies it as a remote reference.

```
ACCDEMO
001 R
002 
003
004 DEMO (hostname of remote machine)
```

There are 4 files concerned with configuration of jRFS:

| <!----> | <!----> |
| --- | --- |
| jnet\_config<br> | jConnect client and server configuration file.<br> |
| jnet\_map<br> | jConnect client mapping file.<br> |
| jnet\_env<br> | jConnect server environment map file.<br> |
| jrfs\_config<br> | jRFS client and server configuration file.<br> |

jRFS provides some very useful logging capabilities that are the quickest way to debug your setup. The log entries will tell you what the jConnect software is looking for at the point of failure so that you can rectify the specific problem. **jnet\_config** is where these logs are turned on as follows:

`jnet_config`

```
trace=on
log=on
logfile=c:\temp\netlog.txt
```

This will have the effect of writing detailed log information to the logfile specified above. Each access attempt will append multiple lines of text to the log.

The **jnet\_map** file allows for mapping a local username to a different username on the remote host. Any access to the remote files will then be carried out using the permissions of that user.

`jnet_map`

```
LOCAL:omega jRFS steve steve
REMOTE:demo jRFS jrfsuser
```

According to the logs, jRFS expects an entry to contain username as both the local, and remote username i.e. ‘steve steve’ in this case. This is mapped by the REMOTE entry to the user ‘jrfsuser’ on the host ‘demo’.

The **jrfs\_config** file allows to turn on a screen trace which outputs messages to stdout which can be useful in noting progress. This is done by putting in settings as follows:

```
jrfs_config
trace=on
display=on
```

**jnet\_env** and **jnet\_access** require no changes on the client machine.

### Server setup

Create an account entry in the SYSTEM file on the server as follows:

```
ACCDEMO
001 D
002 C:\JBASE30\JDP\DEMO (path to account directory)
```

This will be the directory where the file to be accessed exists i.e. JCUSTOMERS in this example.

These settings will write corresponding logfile on server machine. Compare with client log when debugging.

```
jnet_config
trace=on
log=on
logfile=C:\temp\netlog.txt
accesschk=on
```

This last setting causes a security check to be performed to see if the connecting machine/user id is allowed access.

**On UNIX:**

There are two methods available, ruserok provided by the OS, and jnetok method provided by jRFS. The first method is normally sufficient for user’s needs. This involves adding the client hostname to the /etc/hosts.equiv file on the server, along with a reference to which users are allowed access, as follows:

```
/etc/hosts.equiv
jbase2 jbaseadmmikeonly this user will be allowed in from jbase2
jbase1 + all users allowed from jbase1
```

**On Windows:**

Only the jnetok method is supported on Windows, which will require the **jnet\_access**file to be configured. This file contains account and password to map to, note that account must have profile set up with home directory. In this case account=jrfsuser and password=jbase

```
jnet_access
omega Steve jrfsuser jRFS jbase
```

No changes are required to **jrfs\_config**, **jnet\_env** or **jnet\_map**.

This should be enough to get a simple demo working between two machines. The only potential problems are regarding user names on the Server, the logs ought to make any issues to be resolved obvious.

#### CLIENT Machine – ‘jbase2’

jnet\_config

```
trace=on
#tracemask=0x000f
log=on
logfile=/home/jbaseadmmike/RFS.log
```

jnet\_map

```
LOCAL:sun jRFS jbaseadmmike jbaseadmmike
REMOTE:sun jRFS omega
```

jrfs\_config

```
trace=on
display=on
#tracemask=0x000f
#log=on
#logfile=
```

#### SERVER Machine – ‘sun’

jnet\_config

```
trace=on
#tracemask=0x000f
log=on
logfile=/home/omega/RFS.log
accesschk=on
```

jnet\_env

```
ENV:jRFS omega jbaseadmmike
JEDIFILENAME_SYSTEM=/home/omega/SYSTEM
JEDIFILEPATH=/home/omega/data
```

### Using jEDI stub files

If attempting to open remote files, which are actually stub files interfacing into an external database, it may be necessary to set up jnet\_env on the server side in order to set up environment variables for jRFS.

For example using Oracle stub files on NT,  a ‘cannot find orasql8.dll’ error with jRFS in the title bar, indicated that the file was not found in the PATH. A possible solution is the following in jnet\_env:

```
ENV:jRFS jrfsuser Steve
PATH=c:\testing\bin;C:\Oracle\Ora81\bin;C:\Program…
```

This specifies to use these variables when a request comes in for the specified local and remote username. Setting this and stop/starting jRFS Service fixed this.

**Accessing remote files via jDP**

jDP advertises files from the MD configured for the user (via JEDIFILENAME\_MD), as well as via HOME and JEDIFILEPATH. Hence the Q pointers which reference the remote files shown earlier should be visible. So far I haven’t been able to do this. In jDP I can ‘see’ local ‘F’ pointered files so the resolution via the MD is working OK. However I can’t ‘see’ even local or remotely defined Q ptr files from jDP, even though they both work OK from jsh.

An alternative method is to create jRFS stub files on the client machine. These will direct the request across to the remote machine specified. One stub file is created for each corresponding remote file. In the case of jDP, it only advertises dictionary files hence we need a dictionary stub to refer to the remote dict.

Using JED . RFSREM (and RFSREM]D) to create stubs:

File RFSREM contains

```
001 JBC__SOB JediInitREMOTE STEVE DEMO
```

and file RFSREM]D contains

```
001 JBC__SOB JediInitREMOTE STEVE]D DEMO
```

STEVE is actually an Oracle stub file created on the server using:

```
CREATE-FILE STEVE TYPE=ORA CREATESUB=ORA_DYN
```

This will create a data and dict stub file and create the corresponding table called STEVE within Oracle itself.

At this point RFSREM will appear in the list of advertised ‘tables’ in jDP (as long as RFSREM]D is in the JEDIFILEPATH or HOME). This means that an ODBC connection can be made via jDP, jRFS and the jEDI interface into Oracle!

jRFS Client Log File

```
May 05 18:06:31:320[Connect] connect request for host DEMO, server jRFS
May 05 18:06:31:320[Connect] HostId not null DEMO
May 05 18:06:31:320[GetUser] GetUserName succesful, username Steve, size 6
May 05 18:06:31:320[Connect] RemoteId null defaulted to User Steve
May 05 18:06:31:320[NameMap] mapping host demo, server jRFS, user Steve, client Steve
May 05 18:06:31:320[NameMap] searching C:\JBASE30\config\jnet_map for map string 'LOCAL:demo jRFS Steve Steve'
May 05 18:06:31:320[NameMap] map string found
May 05 18:06:31:320[NameMap] remote host demo, remote server jRFS, remote user jrfsuser
May 05 18:06:31:320[GetAddr] find addr for host demo, server jRFS
May 05 18:06:31:320[GetAddr] looking for server jRFS by name
May 05 18:06:31:320[GetAddr] server using port 5001
May 05 18:06:31:320[GetAddr] provider is \dev\tcp
May 05 18:06:31:320[GetAddr] transport address : 020013890a00021b
May 05 18:06:31:320[ChkConnect] creating connect request info
May 05 18:06:31:320[ChkConnect] connect info Host demo, User Steve, Remote jrfsuser, Server jRFS
May 05 18:06:31:320[ChkConnect] connect ok, handle 248
May 05 18:06:31:320[Send] send data, fd 248
May 05 18:06:31:320[Recwait] receive message, fd 248
May 05 18:06:31:320[Send] send data, fd 248
May 05 18:06:31:320[Recwait] receive message, fd 248
May 05 18:06:31:320[Send] send data, fd 248
May 05 18:06:31:320[Recwait] receive message, fd 248
May 05 18:06:31:320[Send] send data, fd 248
May 05 18:06:31:320[Recwait] receive message, fd 248
May 05 18:06:31:320[Recmore] request more data, buffer 123
May 05 18:06:33:320[Send] send data, fd 248
May 05 18:06:33:320[Recwait] receive message, fd 248
May 05 18:06:33:320[Send] send data, fd 248
May 05 18:06:33:320[Recwait] receive message, fd 248
May 05 18:06:33:320[Disconnect] disconnect request, fd 248
```

jRFS Database Server Log File

```
May 05 18:10:19:476[Accept] client address 10.0.1.14
May 05 18:10:19:476[Accept] client name OMEGA
May 05 18:10:19:476[Accept] accepted on handle 224
May 05 18:10:19:476[Accept] CreateNewProcess to handle request, jRFS -i
May 05 18:10:19:476[Accept] CreateNewProcess successful
May 05 18:10:19:412[Accept] accept request using host , server jRFS
May 05 18:10:19:412[Accept] client address 10.0.1.14
May 05 18:10:19:412[Accept] client name OMEGA
May 05 18:10:19:412[Accept] accepted on handle 224
May 05 18:10:19:412[ChkAccept] checking connect request, Fd 224, Server jRFS, ClientHost omega
May 05 18:10:19:412[AccessChk] using jnetok access check
May 05 18:10:19:412[AccessChk] using network detected hostname omega
May 05 18:10:19:412[AccessChk] searching c:\jbase30\config\jnet_access for access string 'omega Steve jrfsuser jRFS'
May 05 18:10:19:412[AccessChk] access string found
May 05 18:10:19:412[AccessChk] Logging on user using Username jrfsuser, No Domain, Passwd ***
May 05 18:10:19:412[AccessChk] Result of LogonUser 1, error 183
May 05 18:10:19:412[AccessChk] LogonUser successful
May 05 18:10:19:412[AccessChk] Result of Impersonate user 1, error 183
May 05 18:10:19:412[AccessChk] Impersonate user sucessful
May 05 18:10:19:412[AccessChk] Now executing as user JRFSUSER
May 05 18:10:19:412[ChkAccept] security check passed
May 05 18:10:19:412[ChkAccept] umask set to 0
May 05 18:10:19:412[Environ] creating environment for client Steve, server jRFS, user jrfsuser
May 05 18:10:19:412[GetUid] getuid for user jrfsuser 
May 05 18:10:19:412[AccessChk] Successfully got info into Buffer
May 05 18:10:19:412[AccessChk] Home directory for user jrfsuser is C:\jbase30\jdp\demo
May 05 18:10:19:412[GetUid] established user jrfsuser, user directory C:\jbase30\jdp\demo
May 05 18:10:19:412[Environ] changed directory dir C:\jbase30\jdp\demo
May 05 18:10:19:412[Environ] set variable PWD=C:\jbase30\jdp\demo
May 05 18:10:19:412[Environ] set variable HOME=C:\jbase30\jdp\demo
May 05 18:10:19:412[Environ] set variable PATH=C:\JBASE30\bin
May 05 18:10:19:412[Environ] set variable LIB=C:\JBASE30\lib
May 05 18:10:19:412[Environ] searching C:\JBASE30\config\jnet_env for environment string 'ENV:jRFS jrfsuser Steve'
May 05 18:10:19:412[Environ] no entry found for environment string
May 05 18:10:19:412[ChkAccept] accept check successful
May 05 18:10:19:412[Recwait] receive message, fd 224
May 05 18:10:19:412[Send] send data, fd 224
Etc etc
May 05 18:10:21:412[DisconSeen] confirming disconnect, fd 224
```

<PageFooter />
