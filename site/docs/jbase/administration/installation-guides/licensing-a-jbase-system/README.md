# Licensing a jBASE System

**Created At:** 11/2/2018 2:28:19 PM  
**Updated At:** 12/31/2019 11:26:03 AM  
**Original Doc:** [346237-licensing-a-jbase-system](https://docs.jbase.com/36690-installation-guides/346237-licensing-a-jbase-system)  
**Original ID:** 346237  
**Internal:** No  

**Tags:**
<badge text='jinstallkey -v' vertical='middle' />
<badge text='evaluation' vertical='middle' />

If running the jBASE installer then you will be able to enter the license keys during installation.

To upgrade an existing licensed system use the **jInstallKey** command with a Standard or Evaluation license key.

*Note: you may have to be root/administrator as the permissions to the **system.properties** file (e.g. the file that contains the license keys) is typically read-only.*

All commands must be entered from an Operating System shell.

To install a System license key:

```
. /opt/jbase/CurrentVersion/src/jbase_env.sh       [Linux]
%JBCRELEASEDIR%\jbase_env.cmd                      [Windows]
jInstallKey -s <key>
jLicenseUpgrade -r
```

To install an Evaluation license key:

```
. /opt/jbase/CurrentVersion/src/jbase_env.sh       [Linux]
%JBCRELEASEDIR%\jbase_env.cmd                      [Windows]
jInstallKey -e <key>
jLicenseUpgrade -r
```

To view the help pages for **jInstallKey** and **jLicenseUpgrade**:

```
jInstallkey -?
jLicenseUpgrade -?
```

Once the system is licensed, use the **jLicenseUpgrade** command to add or update Multisession or Websession licensing.

## Examples

```
jLicenseUpgrade -add -multisession <key>
jLicenseUpgrade -update -multisession <key>
```

When all keys are upgraded:

```
jLicenseUpgrade -r
```

Use the **jlicensinginfo** to verify that the license details are correct.

## Note

>*Manually editing the **system.properties** file is strongly discouraged.*
