# PN5_60602

**Created At:** 10/2/2017 12:46:16 PM  
**Updated At:** 11/28/2017 8:56:52 AM  
**Original Doc:** [pn5_60602](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60602)  
**Original ID:** 279056  
**Internal:** No  

## Description

jInstallKey incapable of stacking multiple licenses

### Current Release Behavior

jInstallKey's sole purpose is to activate jBASE.

The command now allows a user to add or replace a Standard or Evaluation License Key in the system.properties file.

Use the jLicenseUpgrade command to install any additional keys, see [patch PN5\_60601](./../pn5_60601/README.md).

```
New options:

Usage      : jInstallKey <<-option>> <<key>>
Options    : -r - reset (clear) current license details in IPC shared memory
             -e - evaluation key
             -s - standard key
```

Back to [5.6.2 release Notes](./../README.md)
