# jRFS Quick Start guide

<PageHeader />

## Description

This guide covers a basic configuration of jRFS. It describes a configuration up between a client machine (omega) and a server (demo), both running Windows.

## The jRFS Service

Both client and server machines must have an entry in %SYSTEMROOT%\system32\drivers\etc\services that follows the schema:

```
<service name> <port number>/<protocol>[aliases...] [#<comment>]
```

For jRFS the entry required is:

```
jRFS    5001/tcp    jRFS      #jBASE Remote file service
```

## Client Setup

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

## Server setup

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

## UNIX

There are two methods available, ruserok provided by the OS, and jnetok method provided by jRFS. The first method is normally sufficient for user’s needs. This involves adding the client hostname to the /etc/hosts.equiv file on the server, along with a reference to which users are allowed access, as follows:

```
/etc/hosts.equiv
jbase2 jbaseadmmikeonly this user will be allowed in from jbase2
jbase1 + all users allowed from jbase1
```

## Windows

Only the jnetok method is supported on Windows, which will require the **jnet\_access**file to be configured. This file contains account and password to map to, note that account must have profile set up with home directory. In this case account=jrfsuser and password=jbase

```
jnet_access
omega Steve jrfsuser jRFS jbase
```

No changes are required to **jrfs\_config**, **jnet\_env** or **jnet\_map**.

This should be enough to get a simple demo working between two machines. The only potential problems are regarding user names on the Server, the logs ought to make any issues to be resolved obvious.

### Client Machine – ‘jbase2’

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

### Server Machine – ‘sun’

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

Back to [Remote Files](./../jbase-remote-file-service/README.md)

<PageFooter />
