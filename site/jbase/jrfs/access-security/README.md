# ACCESS SECURITY

<PageHeader />

## Description

Access security can be enabled by adding the following line to the jnet\_config file:

```
accesschk=on 
```

The following settings only apply if access security has been enabled.

### 


### jnet\_access 

This file has to be configured on the server and specifies which client shall be granted access. One line has to be added which varies depending on whether the server host is a Windows or a UNIX machine.

UNIX:

```
hostname client_u_name server_u_name servername {umask}  
```

e.g:

```
10.44.5.70 jdean jason jRFS 
```

Windows:

```
hostname client_u_name server_u_name servername password 
```

e.g:

```
10.44.5.70 jdean jason jRFS mypwd 
```

If the server is on a Windows host then the password must be specified. By default, the jnet\_access file is located under the config path in the release directory. If this file is being placed on a different location, then the following environment variable must point to this path:

```
JBCNETACCESS= <path to jnet_access file> 
```

### 


### usejnetok 

A second access security mechanism exists which will use host security instead of the previously described method. It involves editing the jnet\_config configuration file and adding the following line in the file. In order to enable this type of access security (accesschk must still be enabled).

```
usejnetok=on 
```

This option is a UNIX feature only and should not be set on Windows servers.



Back to [Remote Files](./../jbase-remote-file-service-%28jrfs%29)

  
<PageFooter />
