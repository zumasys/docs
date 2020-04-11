# jRFS CONFIGURATION FILES

**Created At:** 4/2/2018 11:43:43 PM  
**Updated At:** 4/19/2018 12:18:18 PM  
**Original Doc:** [306076-jrfs-configuration-files](https://docs.jbase.com/44204-remote-files/306076-jrfs-configuration-files)  
**Original ID:** 306076  
**Internal:** No  

**Tags:**
<badge text='remote files' vertical='middle' />
<badge text='jrfs' vertical='middle' />

## Description 

The jRFS Server and client both use configuration files stored by default in the directory:

UNIX: $JBCRELEASEDIR/config

Windows: %JBCRELEASEDIR%\config

> ### Note
>
> These files may be stored in a different location, as long as the environmental variable is set as:
>
> JBCNETDIR= &lt;path to directory containing configuration files&gt;

## Configuration Files

jnet\_config - This file contains the configuration of how the client and server “Connect” to each other.

jnet\_map - This file is used to map your client user information to the server user information. For each map required you need 2 lines, first your local client information and second the remote server information. As you can tell, this mapping is only required on the client side.

jrfs\_config - This file contains configuration for the jRFS process.


Back to [Remote Files](./../jbase-remote-file-service-%28jrfs%29).

  
<PageFooter />
