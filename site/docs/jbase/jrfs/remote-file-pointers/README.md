# REMOTE FILE POINTERS

**Created At:** 9/14/2018 7:54:33 AM  
**Updated At:** 4/24/2019 10:15:09 PM  
**Original Doc:** [339364-remote-file-pointers](https://docs.jbase.com/44204-remote-files/339364-remote-file-pointers)  
**Original ID:** 339364  
**Internal:** No  

**Tags:**
<badge text='daemons' vertical='middle' />
<badge text='remote files' vertical='middle' />

Remote file pointers is one mechanism by which a client application can access files located on a remote system.

A Q pointer is created in the MD file and set to point to a SYSTEM file entry as normal for Q pointers. e.g.

```
QPTR
001 Q
002 AccountName
003 FileName
```

The Q pointer is resolved in the normal way to the SYSTEM file entry. However the SYSTEM file entry is an R pointer, usually of the following form.

```
AccountName
001 R
002
003
004 HostName
```

The full format of an R pointer SYSTEM entry is as follows:

```
AccountName
001 R
002 {RemoteAccountName} {ServerName}
003
004 {HostName}
```

Where:

- **RemoteAccountName** - Optional Remote Host SYSTEM file reference.
- **ServerName** - Optional network service name.
- **HostName** - Remote HostName or IP Address.


If the optional RemoteAccountName is specified then searching for remote relative filenames will start in the directory path specified by the SYSTEM entry on the remote host. If the specified RemoteAccountName is not a valid accountname entry in the remote SYSTEM file then the open request will fail with file not found If left blank then searching for remote relative filenames will begin in the home directory of the network userid.

The optional ServerName is used to specify an alternative network service required by locating a matching entry in the services file. If left blank the server name will default to jRFS, which is then used to reference the services file and find the required network service. Note that a dash, "-", should be used as a place holder to signify a blank RemoteAccountName when only an alternate ServerName is specified.

The HostName is optional and if specified is used to determine the network address of the target system by locating a matching entry in the hosts file. If left blank the target system name will default to the local host node name or on some systems localhost, which is then used to reference the hosts file and find the network address of the local system. The HostName may also be entered as a dotted IP address.

In order to gain access to the remote system via the jRFS, the client must provide a remoteusername. This remoteusername will either be the same as the client user name or a mapped alternative, see later. The supplied remoteusername must be a valid user name on the remote system or the connection will be denied. The remoteusername is also used to determine file access permissions.

The combination of the second attribute from the remote Dpointer, or the remote home directory of the remoteusername, and the third attribute from the Qpointer produces the filepath for the file referenced by the Qpointer. However if the third attribute from the Qpointer is an absolute path then this reference will be used on the remote system.

Alternatively, to eliminate the need for the SYSTEM and MD entries (or if you do not maintain SYSTEM and/or MD files), you can create a remote file stub in a directory that is visible from the JEDIFILEPATH environment variable. For example,



```
ID: FileName   (this is the name you would use to access the remote file)
<1> JBC__SOB JediInitREMOTE RemoteFileName RemoteSystemName
```



[ Note the two underscore characters between 'JBC' and 'SOB'. ]



[Remote File Service](./../remote-file-service)

[jCONNECT Library](./../jconnect-library)

[Client Connections](./../client-connections)

[Configuration Files](./../configuration-files)

[Advanced jRFS Configuration (LINUX/UNIX only)](./../advanced-jrfs-configuration)

###  
