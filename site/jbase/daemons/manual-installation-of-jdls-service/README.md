# MANUAL INSTALLATION OF JDLS SERVICE

**Created At:** 7/6/2017 10:07:47 PM  
**Updated At:** 11/20/2017 9:13:59 PM  
**Original Doc:** [manual-installation-of-jdls-service](https://docs.jbase.com/30301-jbase/manual-installation-of-jdls-service)  
**Original ID:** 262612  
**Internal:** No  




jBASE 5.5.0 for Windows uses 'shared memory which must be initialized prior to using many jBASE functions, such as jShell. Typically, this function is performed by the 'jBASE Distributed Locking Service' (jDLS). 'jDLS' is designed to be run as a Windows Service.

When jBASE is installed using Express and Advanced install modes, the 'jDLS' service is installed and started automatically.  The service is started using default options (background operation, process-based locks).

If you need to manually install the service (for example, when using the Minimal install mode) the 'jServControl' command can be used. From an elevated Windows Command (DOS) prompt type the command:

```
jServControl -s auto -p %JBCRELEASEDIR%\bin\jdls.exe jDLS install start
```

The command prompt must be started using the 'Run as Administrator' option.

jDLS can now be managed as a normal Windows service.

### 


### RELATED TOPICS:

[UPGRADING FROM A PREVIOUS VERSION](./../../administration/installation-guides/upgrading-from-a-previous-version)

[INSTALLING THE COMPILER](installing-the-windows-compiler)

[CREATING ACCOUNTS AND USERS](./../../administration/installation-guides/create-accounts-and-users)

[MANUAL LICENSE KEY INSTALLATION](./../../administration/installation-guides/manual-license-key-installation)


