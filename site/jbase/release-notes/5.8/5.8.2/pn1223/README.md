# PN1223

<PageHeader />

## Description

Any action that creates a new form queue or changes an existing form queue updates a script that can be used to regenerate the spooler configuration.

The name of the script is `create-form-queues` on Linux/AIX and `create-form-queues.bat` on Windows and is stored under the [jspooler](./../../../../spooler/sp-newtab/README.md) directory.
  
The script:

* does not set any [spooler security](./../../../../spooler/sp-security/README.md) settings.  
* can be edited to ensure that the spooler queues are created as desired.  
* can be generated manually using the [sp-fqscript](./../../../../spooler/sp-fqscript/README.md) command.  

Back to [5.8.2 Release Notes](./../README.md)
  
<PageFooter />
