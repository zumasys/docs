# Execute

**Created At:** 8/30/2018 1:27:50 PM  
**Updated At:** 5/16/2019 6:28:02 PM  
**Original Doc:** [336876-execute](https://docs.jbase.com/48575-jkeyauto/336876-execute)  
**Original ID:** 336876  
**Internal:** No  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Begins execution of an external program. The jkeyauto program will wait until the loaded program completes. The external program cannot be controlled in any other way by the jkeyauto program. The EXECUTE and PERFORM statements provide the same functionality and are synonyms for each other.

The statement executes the program through the default shell, so any meta-characters such as \* " &gt; will be treated specially by the shell. The command is as:

```
execute|perform expression_perf {capturing variable} {setting variable}
```

where:

- **expression\_perf** shows what program you want to execute.
- **capturing** allows you to optionally specify a variable where the output of the command will be captured. Without this option the output of the command goes to the same terminal output as jkeyauto.
- **setting** allows you to optionally specify a variable which will be set to the exit() code of the executed program. If the program exited due to a signal, then this variable is set to "Snnn" where nnn is the signal number. This setting variable is similar to using the internal $? Variable which also contains the exit() code of the last program executed.

Examples of use may be as:

```
perform "who am i" CAPTURING output SETTING rc
if rc ne 0 then crt "who failed !!" ; exit 0
print "_who am i_ tells me the I am " : output
```

The result of the execution can also be examined with the $? environment variable which is an internal variable set to the exit code of the last program executed.

Or

```
perform "LIST MD IF \*A1 \> \'1234\'" SETTING s1
```

if it is undesired for the \* &gt; or ' characters as special character, so the normal shell convention of preceding them with a back slash to "delimit" the shell meta-characters is followed.

[Back to jKeyAuto](./../README.md)

  
<PageFooter />
