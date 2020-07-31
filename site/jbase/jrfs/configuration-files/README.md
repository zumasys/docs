# Configuration Files

<PageHeader />

**Tags:**
<badge text='jrfs configuration' vertical='middle' />

Templates for all jRFS configuration files can be found in the "config" subdirectory of the jBASE release directory. It is recommended that the template files are copied to a read only directory and accessed using the [JBCNETDIR](./../../environment-variables/jbcnetdir/README.md) environment variable. The following files are used for configuration:

| <!----> | <!----> |
| --- | --- |
| **jnet\_config**<br>   | jConnect client and server configuration file<br> |
| **jnet\_map**<br>      | jConnect client and server configuration file<br> |
| **jnet\_env**<br>      | jConnect server environment map file<br> |
| **jrfs\_config**<br>   | jRFS client and server configuration file |

Special Environment Variables

| <!----> | <!----> |
| --- | --- |
| JBCNETACCESS | specify the location of the jRFS security access file |
| JBCNETDIR | specify the location of the jRFS configuration files |
| JRFS\_REMOTE\_JQL | set to 1 to allow jQL to be executed remotely |
| JRFS\_LOCALPATH\_JQL | set to 1 to allow remote pointer to have a different name than the remote file |
| JRFS\_SERVERNAME | allows the jRFS client to override the service port |
| JRFS\_HOSTNAME | allows the jRFS client to override the target host |

Back to [Remote Files](./../jbase-remote-file-service/README.md)

<PageFooter />
