# PN5_60627

**Created At:** 10/3/2017 12:40:45 PM  
**Updated At:** 2/11/2019 8:44:28 PM  

**Tags:**
<badge text='jsh_prompt' vertical='middle' />

### Description

Allow the jsh prompt to be configured via an environment variable



### Previous Release Behavior

The jsh prompt was not particularly configurable, there were 3 options...

First, use the **-pPROMPT** option when starting the jsh.

Second, edit **$JBCRELEASEDIR/tmp/jutil\_ctrl/jsh\_o\_portno**.

Third, the commands **set jps1 newprompt** and **set jps2 newprompt** could be used to change the primary and/or secondary default prompts but those commands could only be entered within the jShell.

None of those options were particularly useful in a real-world environment.



### Current Release Behavior

You can now utilize the**JSH\_PROMPT** environment variable to contain up to 3 values delimited by a comma, as in

```
set JSH_PROMPT=JSH_PROMPT="$%%s $%%a $%%c -->","$%%>>>",jsh [Windows]
export JSH_PROMPT=JSH_PROMPT="$%s $%a $%c -->","$%>>>",jsh  [Linux]
```

1. The first field shown in the example is the primary prompt which the jsh user initially sees
2. The second field shown is the secondary prompt which the jsh user sees when a select list is present
3. The third field shown is the jsh mode of operation, either **jsh**, **msh** or **sh**


Field 2 and 3 are optional and will take the usual defaults if not specified.

Note that, on Windows, you must escape the % symbol.

Fields 1 and 2 can accept values from the following table:


| **$Value** <br> | **Replaced With**<br> |
| --- | --- |
| EnvVar<br> | the value of the specified Environment Variable<br> |
| %a<br> | the user account name<br> |
| %m<br> | the phrase "(Cmd)" if the shell is in command mode<br> |
| %n<br> | a new line sequence<br> |
| %C<br> | the current working directory<br> |
| %c<br> | the current working directory with any portion matching the home directory replaced with ~<br> |
| %p<br> | the port number<br> |
| %e<br> | the entry number in the stack currently being edited<br> |
| %d<br> | the current date in dd mmm yyyy format<br> |
| %t<br> | the time of day in hh:mm:ss format<br> |
| %u<br> | the host name as defined by the UNIX command uname (UNIX only)<br> |
| %y<br> | the tty name (UNIX only)<br> |
| %s<br> | the name of the jshelltype that will execute the commands at the prompt<br> |
| chars<br> | all other characters are taken as literals and included in the prompt<br> |


The  **-pPROMPT** option to jsh has also been enhanced so that it can take up to 3 fields in the same format as the **JSH\_PROMPT** environment variable.
