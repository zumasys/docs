# jConnect Library

<PageHeader />

**Tags:**
<badge text='remote access control' vertical='middle' />

## UNIX

The jConnect library provides for two mutually exclusive security mechanisms. The default mechanism is the standard UNIX ruserok mechanism usually utilized by ftp, rcp, etc. This mechanism first checks the /etc/hosts.equiv file and then the target users .rhosts file to determine whether further processing is allowed. An alternative method, which can be configured in the jnet\_config configuration file, is to use the jnetok mechanism. The jnetok mechanism requires that certain components included in the client connect request match an entry in the /etc/jnet\_access file. For security purposes this file should only be readable by root. If required, the location of the jnet\_access file can be defined by the environment variable JBCNETACCESS.

## Windows

The jConnect library provides user security on Windows by the jnet\_access file. This file should be placed in a NTFS directory set with administrator read only privileges. The directory location should then be configured into a system environment variable JBCNETACCESS.

### Note

Both security mechanisms utilize the connecting hostname as listed in the hosts file, the remoteusername and the client username as supplied by the client connect request. The jnetok mechanism also requires the correct servername before permission is granted to continue the client connection. The jConnect library will deny access to clients whose remoteusername resolves to a user id of less than one hundred.

Once the security check has completed successfully the jConnect library then proceeds to set the groupid, userid and home directory along with certain other required environment variables. The jConnect library then attempts to match the client connect request components with an entry in the jnet\_env file. If successful then any related environment entries are setup before returning control back to the jBASE Remote File Service modules.

Back to [Remote Files](./../jbase-remote-file-service/README.md)  

<PageFooter />
