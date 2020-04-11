# JSON SECTIONS

<PageHeader />

## Description

jSON configuration files can hold the following sections. If any sections are missing, jBASE will simply use default values or an environment variable if available.


| Section | Description |
| --- | --- |
| General | where your MD, SYSTEM files etc… are defined. |
| Environment             | List of environment variables, usually for non-standard behavior. |
| Logging                       | Where and how to log errors in jBASE |
| Debugger\_overide   | List of errors to not go into the debugger. |

> **Note:**jBASE .JSON configuration files support macro expansion, which means you can use any existing environment variables in you configuration, e.g. you could set the system file property to **"system": "%HOME%\\SYSTEM"**

Back to [Profiles](./../jbase-profiles)

  
<PageFooter />
