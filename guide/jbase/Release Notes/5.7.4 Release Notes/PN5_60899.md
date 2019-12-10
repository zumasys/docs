# PN5_60899

**Created At:** 9/23/2019 10:08:02 AM  
**Updated At:** 10/6/2019 11:03:58 AM  


### Description

New options to**jbase\_agent** to enable debugging of server side jBC code and also to start the jbase\_agent thread in a specific account.



### Previous Release Behavior

If a jBC program/subroutine entered the debugger, the debug I/O was directed back to the calling client (i.e. jremote, http-request) making it impossible to interact with the debugger.

Additionally it was not easy to control the startup directory for the jbase\_agent service.



### Current Release Behavior

The new **-d** option now redirects the debugger to the terminal/device that initiated jbase\_agent.

Additionally the following **-J** options - available for cataloged jBASE programs - can be used to further enhance the debugging experience:

```
jbase_agent -d -JD --config=./jagent_config
```

*Note: the **-d** option is required when using the **-J** options*

*The new **-a** option now lets you designate a starting jBASE account (and hence starting directory) for the jbase\_agent worker threads.*

```
jbase_agent -a JBASEADM
```
