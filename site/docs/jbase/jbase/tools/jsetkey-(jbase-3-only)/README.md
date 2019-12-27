# jsetkey (jBASE 3 only)

**Created At:** 8/30/2018 2:15:33 PM  
**Updated At:** 5/17/2019 9:16:06 AM  
**Original Doc:** [jsetkey](https://docs.jbase.com/48399-tools/jsetkey)  
**Original ID:** 336928  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description 

The jsetkey utility is used to display, set or remove jBASE environment variables in the Windows current user registry.


| Command<br> | Description<br> |
| --- | --- |
| jsetkey &lt;keyname&gt;=&lt;value&gt;<br> | set Key to the specified value<br> |
| jsetkey -b &lt;keyname&gt;=&lt;file&gt;<br> | set binary Key to data from a file<br> |
| jsetkey &lt;keyname&gt;<br> | display a value<br> |
| jsetkey -d &lt;keyname&gt;<br> | delete Key<br> |
| jsetkey -u<br> | update user values from the default<br> |
| jsetkey -i<br> | initialize a clients local registry<br> |
| jsetkey<br> | display all registry values<br> |


If -m option is also used, then the Global machine values are used instead of the current users settings.



## Note: 


> This command is only available on jBASE 3.

