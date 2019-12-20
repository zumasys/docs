# REMOTE FILE SERVICE

**Created At:** 9/14/2018 7:56:01 AM  
**Updated At:** 4/24/2019 10:14:17 PM  
**Original Doc:** [339365-remote-file-service](https://docs.jbase.com/44204-remote-files/339365-remote-file-service)  

**Tags:**
<badge text='client requests to remote files' vertical='middle' />
<badge text='remote files' vertical='middle' />

## Description 

The jRFS process must be running on the target system before access via R pointers can be achieved. The jRFS process, once initiated on the target system, waits passively for a client request from another system. When a client request is detected, the server then spawns another process to handle the request. The spawned process performs a security check of the connecting client and if successful then becomes a remote user process as determined by the remoteusername. The remote user process then attempts to open the specified file via the standard jEDI interface. The result of the file open is returned to the client process. The remote user process will continue to handle all further remote file operations for the client process. The remote user process continues to be active until all opened remote files are closed and the client issues a disconnect or an error/shutdown signal is received, in which case all files still open are closed using the jEDI interface.

Before the jRFS process can being to accept client requests the services file must be updated to include an entry for the server. This entry describes the connection type and an arbitrary connecting port. A port should be chosen which does not clash with any existing services on both the server and client systems.

```
e.g. jRFS 5001/tcp
```

**Unix**
The jRFS can be initiated at boot time or manually as root by installing the script, jRFS.init.d, located in the "src" subdirectory of the jBASE release directory.

**NT**
The jRFS process can be installed as a service by the jRFSInstall.exe and removed from the services by the jRFSRemove.exe. Once installed and configured the jRFS can be started by the services applet in the control panel. To install and start the jRFS the user must have administrator privileges.

Once started the jRFS process attempts to read the jRFS configuration file, jrfs\_config, This configuration file contains flags which can be asserted to "flag" the jRFS and client request modules to produce trace information for remote file operations. The trace facility can be useful for determining successful Rpointer resolution or confirmation that a remote file operation has been successfully constructed, sent and received. The jRFS process passes control to the jConnect library, which reads the jConnect configuration file, jnet\_config. This configuration file contains flags which can be utilized to specify the security mechanism for client requests and also "flag" the jConnect library to provide trace information. The jConnect trace information can be used to ascertain why a client connect request has been denied.



### Note:

The trace features can severely degrade performance and also generate large trace files. The trace features should only be enabled when required and care taken to allow sufficient space in the log file partition.










