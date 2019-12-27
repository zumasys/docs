# LOGGING SETTINGS

**Created At:** 4/5/2018 5:13:42 PM  
**Updated At:** 4/5/2018 5:18:05 PM  
**Original Doc:** [logging-settings](https://docs.jbase.com/44253-profiles/logging-settings)  
**Original ID:** 306599  
**Internal:** No  


## Description 

The logging setting wraps the current mechanism and simply sets the appropriate environment for jBASE.




| Setting | Description |
| --- | --- |
| logging\_enabled<br> | Enable error logging (**JBASE\_ERRMSG\_TRACE**).<br> |
| enhanced\_logging<br> | Default legacy jBASE logging use [0], new version added in 5.6.0.1 use [1], [emu log\_runtime\_errors] (**JBASE\_EMU\_ENHANCED\_LOGGING**).<br> |
| location\_jbase\_error\_message\_file<br> | Hash file that holds error codes and messages (**JBCERRFILE**).<br> |
| log\_deffinition\_file      <br> | Text file used to recreate the jBASE error message file (**JBASE\_ENV\_LOG\_DEFINITION\_FILE**).<br> |
| error\_redirected<br> | Set to 1 to redirect standard error to standard out. Useful for capturing output that would normally be sent to the screen (**JBC\_STDERR**).<br> |


```
"logging": {
"logging_enabled": true,
"enhanced_logging": false,
"location_jbase_error_message_file": "%JBCRELEASEDIR%\\jbcmessages",
"log_deffinition_file": "%JBCRELEASEDIR%\\jbcinit.err",
"error_redirected":  "false"
}
```



Back to [Profiles](./../jbase-profiles)
