# PN5_60602

<PageHeader />

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

  
<PageFooter />
