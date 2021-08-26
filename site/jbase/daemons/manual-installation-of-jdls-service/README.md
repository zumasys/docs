# Manual Installation of jDLS Service

<PageHeader />

jBASE 5.5.0 onwards for Windows uses shared memory which must be initialized prior to using many jBASE functions, such as jShell. Typically, this function is performed by the 'jBASE Distributed Locking Service' (jDLS). 'jDLS' is designed to be run as a Windows Service.

When jBASE is installed using Express and Advanced install modes, the 'jDLS' service is installed and started automatically.  The service is started using default options (background operation, process-based locks).

If you need to manually install the service (for example, when using the Minimal install mode), the 'jServControl' command can be used.  

From an elevated Windows Command (DOS) prompt type the command:

```
jServControl -s auto -p %JBCRELEASEDIR%\bin\jdls.exe jDLS install start
```

The command prompt must be started using the 'Run as Administrator' option.

jDLS can now be managed as a normal Windows service.

## Related Topics

[Upgrading from a Previous jBASE Version](./../../administration/installation-guides/upgrading-from-a-previous-version/../README.md)

[Installing the Compiler](./../../administration/installation-guides/windows/windows-compiler-installation/README.md)

[Creating Accounts and Users](./../../administration/installation-guides/create-accounts-and-users/README.md)

[Manual License Key Installation](./../../administration/installation-guides/licensing/manual-license-key-installation/README.md)

Back to [Daemons](./../README.md)

<PageFooter />
