# jsetkey (jBASE 3 only)

<PageHeader />

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

Back to [Tools and Utilities](./../README.md)

<PageFooter />
