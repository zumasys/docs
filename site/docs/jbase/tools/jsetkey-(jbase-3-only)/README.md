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


| Command | Description |
| --- | --- |
| jsetkey &lt;keyname&gt;=&lt;value&gt; | set Key to the specified value |
| jsetkey -b &lt;keyname&gt;=&lt;file&gt; | set binary Key to data from a file |
| jsetkey &lt;keyname&gt; | display a value |
| jsetkey -d &lt;keyname&gt; | delete Key |
| jsetkey -u | update user values from the default |
| jsetkey -i | initialize a clients local registry |
| jsetkey | display all registry values |

If -m option is also used, then the Global machine values are used instead of the current users settings.

## Note

> This command is only available on jBASE 3.

[Back to Tools](./../README.md)