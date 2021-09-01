# jBASE 5.8 Installation Options for Unattended Install

<PageHeader />

## Additional customization

The unattended jBASE install can be further customized by adding an "installation options" section into the JSON definition.

Valid installation options are:

```json
installation_options->installation_path
installation_options->jbaseadmdir
installation_options->symlink
installation_options->jdls_options          ;* this should be 'port' or 'process'
installation_options->telnet_options        ;* boolean = yes, no, true, false, 0, 1
installation_options->jrcs_options          ;* boolean or port#
installation_options->spooler_options       ;* boolean
installation_options->create_admin_user     ;* boolean
installation_options->create_admin_account  ;* boolean
installation_options->create_system_file    ;* boolean
installation_options->admin_user
installation_options->admin_group
```

## Note

> Information about each jBASE installation is saved in /usr/lib/jbase/jbase_versions.json on Linux or C:\ProgramData\jbase\jbase_versions.json on Windows.  
> This includes the installation_options.  
> A user could first execute the interactive installation, then examine installation_options from jbase_versions.json to use as a template for an unattended installation.

## Example - Linux

```json
    },
    "installation_options" :
    {
      "installation_path":"/opt/jbase5/5.8.3",
      "symlink":"/opt/jbase5/CurrentVersion",
      "jdls_options":"port",
      "telnet_options":"true",
      "jrcs_options":"true",
      "create_system_file":"true",
      "spooler_options":"true",
      "create_admin_user":"true",
      "admin_user":"jbase",
      "admin_group":"jbase",
      "create_admin_account":"true",
      "jbaseadmdir":"/jbasedata/jbaseadmin"
    }
```

Back to [Unattended Install](./../README.md)

<PageFooter />
