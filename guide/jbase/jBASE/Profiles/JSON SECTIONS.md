# JSON SECTIONS


**Created At:** 4/5/2018 4:55:54 PM  
**Updated At:** 4/5/2018 5:01:23 PM  


## Description 

jSON configuration files can hold the following sections. If any sections are missing, jBASE will simply use default values or an environment variable if available.


| Section<br> | Description<br> |
| --- | --- |
| General | where your MD, SYSTEM files etc… are defined.<br> |
| Environment            <br> | List of environment variables, usually for non-standard behavior.<br> |
| Logging                      <br> | Where and how to log errors in jBASE<br> |
| Debugger\_overide  <br> | List of errors to not go into the debugger.<br> |





> **Note:**jBASE .JSON configuration files support macro expansion, which means you can use any existing environment variables in you configuration, e.g. you could set the system file property to **"system": "%HOME%\\SYSTEM"**




Back to [Profiles](jbase-profiles57)
