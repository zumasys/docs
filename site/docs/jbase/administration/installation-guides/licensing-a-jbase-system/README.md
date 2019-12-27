# Licensing a jBASE System

**Created At:** 11/2/2018 2:28:19 PM  
**Updated At:** 4/30/2019 4:40:42 PM  
**Original Doc:** [346237-licensing-a-jbase-system](https://docs.jbase.com/36690-installation-guides/346237-licensing-a-jbase-system)  
**Original ID:** 346237  
**Internal:** No  

**Tags:**
<badge text='jinstallkey -v' vertical='middle' />
<badge text='evaluation' vertical='middle' />

For unlicensed installations use the **jInstallKey**command with a Standard or Evaluation license key to activate jBASE. This should not be necessary if jBASE was installed with the Linux or Windows installer.

*Note: you may have to be administrator as the permissions to the **system.properties** file is typically read-only.*

For example, to install a System license key:

```
jInstallKey -s <key>
```

To install an Eval license key:

```
jInstallKey -e <key>
```



To view the help page for **jInstallKey**:

```
jInstallkey -?
```

Once the system is licensed, use the **jLicenseUpgrade** command to add or update System, Eval, Multisession or Websession licensing.

#### Examples

```
jLicenseUpgrade -add -multisession <key>
jLicenseUpgrade -update -system <key>
jLicenseUpgrade -update -multisession <key>
jLicenseUpgrade -update -eval <key>
```



To view the help page for **jLicenseUpgrade**:

```
jLicenseUpgrade -?
```



The **jlicensinginfo** command can be used to verify that the license details are correct.



#### Note

*Manually editing the **system.properties**file is strongly discouraged.*
