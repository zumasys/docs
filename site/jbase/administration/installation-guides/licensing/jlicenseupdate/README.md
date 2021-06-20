# jlicenseupdate

<PageHeader />

**jlicenseupdate** is a new utility to allow conventional jBASE licenses to be installed or updated on jBASE 5.8 and above until such time as this form of licensing is deprecated.

## Syntax

```bash
bash-4.2$ jlicenseupdate -h

Command:     jLicenseUpdate / jLicenseUpgrade
Description: Updates the license keys in: /opt/jbase5/global/config/jbase_config.json
                                      or: C:\jBASE5\global\config\jbase_config.json
Usage:       jLicenseUpdate <<option>> <<key type>> <<new key>>

Options:
    -v | -view     View current license keys
    -a | -add      Add a new key
    -u | -update   Update existing key
    -r | -reset    Force jBASE to update the licensing details
    -f | -force    Automatically answer yes to any questions
    -h | -help     This page

Key Types:
    -e | -eval
    -s | -system
    -m | -multisession
    -w | -websession
```

## Examples

```bash
    jLicenseUpdate -view
    jLicenseUpdate -add -multisession <new key>
    jLicenseUpdate -update -system <new key>
    jLicenseUpdate -update -multisession <new key>
    jLicenseUpdate -add -eval <new key>
```

## Note

>If you are downgrading numbers of users/sessions then all jBASE processes must be stopped.

Back to [Licensing](./../README.md)

<PageFooter />
