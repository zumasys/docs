# Advanced jRFS Configuration 

**Created At:** 9/14/2018 9:47:00 AM  
**Updated At:** 4/24/2019 10:17:06 PM  
**Original Doc:** [advanced-jrfs-configuration](https://docs.jbase.com/44204-remote-files/advanced-jrfs-configuration)  
**Original ID:** 339375  
**Internal:** No  

**Tags:**
<badge text='linux advanced jrfs config' vertical='middle' />

## Configuring Additional jRFS Services (UNIX/Linux only)

This document provides the necessary guidelines and instructions to configure additional (separate) jRFS services on the same host machine. At the present time this functionality is only available on unix platforms, however any client machine (Windows included) can be configured to access the remote data. It is assumed that jRFS is already up and running under the default service and that the reader has prerequisite knowledge of configuring jRFS in general.

One instance where this would be useful is having two (or more) web applications accessing different sets of data via jRFS on the same database server. The need may arise   where changing (and debugging) the configuration of one of the applications without disturbing the other is necessary, which would require stopping and restarting the jRFS service. Other reasons would be for testing or training purposes. In other words, having one jRFS service running for the 'live' production account and another for the test account. Stopping the test account's jRFS service will have no effect on the 'live' production account, and vice versa.

All steps for the server configuration must be performed on the server as 'root'.

For purposes of these instructions assume that the new service is called jRFS\_NEW, and the port for all socket connections is 5011, however any unused (or unreserved) port number can be used.

### Server Configuration

**1) Create a new directory to hold the jRFS configuration files for the new service:**

Copy the **jnet\_config**,**jrfs\_config**, and **jnet\_env**files from the templates in the **$JBCRELEASEDIR/config** directory. If desired, you can also copy the **jnet\_access** file to this directory or to a directory in a more secure location. Since **jnet\_access** is not necessary for the task at hand we will not mention it further.

**2) Define the server port number to 'listen' for jRFS requests:**

Add an entry to the **/etc/services** file as follows:

```
jRFS_NEW  5011/tcp
```

**3) Create the executable to be used to start the service:**

Copy the **$JBCRELEASEDIR/jRFS** executable to **jRFS\_NEW**. You should place this new executable in a location other than**/usr/jbc/bin** in the event that jBASE needs to be reinstalled. Ensure that permissions are set such that it is executable for all users, i.e. 'rwx--x--x'.

Caveat: In the event that jBASE changes the internal implementation of jRFS, you should be aware that any upgrades to future jBASE releases should include re-copying this executable to its new location.

**4) Create a new script to be used to start and stop the service:**

Copy the **/usr/jbc/src/jRFS.init.d** script to **jRFS\_NEW.init.d**. You should place this new script in a location other than **/usr/jbc/src** in the event that jBASE needs to be reinstalled. The caveat from step 3) applies here as well.

Make the following changes to the new script:

a) Change the assignment of JBCNETDIR and JBCNETACCESS to point to the new directory created in step 1).

b) Change the line

```
ExecRFS=jRFS
```

to

```
ExecRFS=jRFS_NEW
```

c) Change the line

```
PV_PROCESSES=`ps -ef | grep -v grep | grep "jRFS -b" | $PV_AWK '{ print $2 }'`
```

to

```
PV_PROCESSES=`ps -ef | grep -v grep | grep "jRFS_NEW -b" | $PV_AWK '{ print $2 }'`
```

Note that the service is not started at this time.



**5) Modify the server configuration files created in step 1):**

The only file you need to change is the **jnet\_env** file where the servername **jRFS** must be changed to the new jRFS service which is listening for jRFS requests (jRFS\_NEW in this case). For example, if you wanted all users to connect using the username 'webuser', the line would read:

```
ENV:jRFS_NEW webuser *
```

Make any other configuration changes at this point. One useful change is to assign a unique filepath to the **logfile** parameter in the **jnet\_config** and **jrfs\_config** configuration files in the event you would need to turn tracing on.

**6) Start the new service:**

This is accomplished by running the **jRFS\_NEW.init.d** script created in step 4), i.e. **jRFS\_NEW.init.d start.** Instructions for running this script on a reboot are provided in the script.

### Client Configuration

To configure a client machine to use an alternate jRFS service (jRFS\_NEW in this case):

**1) Define the port number to send out jRFS requests:**

Add an entry to the **/etc/services** file (unix), **%SYSTEMROOT%\system32\drivers\etc\services** (Windows) as follows:

```
jRFS_NEW  5011/tcp
```

Alternatively (and more restrictive), you could define the server port number in the **jrfs\_config** file by adding the line:

```
serverport=port_number
```

where **port\_number** is the port number to which the new jRFS service is listening on the host machine. However, once this is defined in this manner you are effectively restricting jRFS access to only those host machines listening on that port.

**2) Define how users of the client machine map to users on the host machine:**

Add an entry to the **jnet\_map** file by changing the server name to the new service name (jRFS\_NEW in this case) in which the new service is 'listening'. For example, if the server IP address is 123.456.78.9 then

```
LOCAL:123.456.78.9 jRFS_NEW  *  *
REMOTE:123.456.78.9 jRFS_NEW webuser
```

would map all users from the 'local' (client) machines to 'webuser' on the remote machine that is listening on port 5011 which is the port number associated with the service name jRFS\_NEW (defined in the host's /**etc/services** file set up in step 2) of the server configuration).

**3) Create the SYSTEM file and MD/VOC entries:**

To make this all work, create an entry in the SYSTEM file (the file defined by JEDIFILENAME\_SYSTEM) where field &lt;2&gt; contains the jRFS service name (jRFS\_NEW in this case). An example SYSTEM file entry would be

```
STARFLEETCOMMAND
<1> R
<2> - jRFS_NEW
<3>
<4> 123.456.78.9
```

Note that field &lt;2&gt; contains a dash concatenated with a space concatenated with the service name. The dash is a place holder for when you are not specifying an account. The alternative format for field &lt;2&gt; is

```
<2> account_name  jRFS_service_name
```

Note that no dash is required here. A detailed explaination of this can be found [here](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/sup22_JRFS.htm#RemoteFilePointers).

Extending this example, to access a file called SPACESTATIONS on the remote host through the jRFS\_NEW server, the MD/VOC entry would be

```
ID: SPACESTATIONS
<1> Q
<2> STARFLEETCOMMAND
<3> SPACESTATIONS
```

It is assumed that the SPACESTATIONS file is visible in the server user's home directory or is defined in the **jnet\_env** server configuration file with the [JEDIFILEPATH](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/env2_JEDIFILEPATH.htm) environment variable.

### Note

A client machine can not make concurrent jRFS requests to more than one jRFS service on a particular remote host without changing the **jnet\_map** client configuration file. In other words, **jnet\_map** can only be set to use one jRFS service at a time for a particular host. There is no restriction as to the number of remote hosts you can connect to, only the number of jRFS services per remote host.

  
<PageFooter />
