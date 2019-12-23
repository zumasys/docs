# JQL AND REMOTE FILES

**Created At:** 4/13/2018 10:22:59 AM  
**Updated At:** 4/24/2019 9:06:36 PM  
**Original Doc:** [307818-jql-and-remote-files](https://docs.jbase.com/44204-remote-files/307818-jql-and-remote-files)  


## Description 

Normally, when a jQL statement is run on a remote file, it will scan the file over the network, which causes lots of network traffic and is quite slow. As a way round this, jRFS allows jQL commands to be executed on the Server and just results get sent back over the network. This is much more efficient use of the network and is much quicker.

To enable this functionality, the following environment variable must be  set:

```
JRFS_REMOTE_JQL=1 
```

This will tell jBASE to execute the JQL command on a remote file on the server machine. A second environment variable should be set on the SERVER if the STUB file on the client and the remote file on the server have different filenames:

```
JRFS_LOCALPATH_JQL=1 
```

This will tell jBASE to enable use of remote file path.



Back to [Remote Files](./../jbase-remote-file-service-%28jrfs%29).
