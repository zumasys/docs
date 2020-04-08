# LOGGING SETTINGS

<PageHeader />

## Description

The logging setting wraps the current mechanism and simply sets the appropriate environment for jBASE.

| Setting | Description |
| --- | --- |
| logging\_enabled | Enable error logging (**JBASE\_ERRMSG\_TRACE**). |
| enhanced\_logging | Default legacy jBASE logging use [0], new version added in 5.6.0.1 use [1], [emu log\_runtime\_errors] (**JBASE\_EMU\_ENHANCED\_LOGGING**). |
| location\_jbase\_error\_message\_file | Hash file that holds error codes and messages (**JBCERRFILE**). |
| log\_deffinition\_file       | Text file used to recreate the jBASE error message file (**JBASE\_ENV\_LOG\_DEFINITION\_FILE**). |
| error\_redirected | Set to 1 to redirect standard error to standard out. Useful for capturing output that would normally be sent to the screen (**JBC\_STDERR**). |


``` json
"logging": {
"logging_enabled": true,
"enhanced_logging": false,
"location_jbase_error_message_file": "%JBCRELEASEDIR%\\jbcmessages",
"log_deffinition_file": "%JBCRELEASEDIR%\\jbcinit.err",
"error_redirected":  "false"
}
```

Back to [Profiles](./../jbase-profiles)
