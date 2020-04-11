# PN5_60709

<PageHeader />

### Description

Allow **jdiag** to recognize the emulation from files of the form: Config\_EMULATE\_name



### Previous Release Behavior

jBASE allows the user to create custom emulation files of the form:

```
Config_EMULATE_name
```

where **name** is the custom emulation name.

When a file of this form is present in the $JBCRELEASEDIR/config (%JBCRELEASEDIR%\config on Windows) directory, and JBCEMULATE was set to **name**, then the output from the **jdiag** command would contain:

```
WARNING: JBCEMULATE Label 'name' not found in file 'C:\jbase5\config\Config_EMULATE'
```



### Current Release Behavior

The warning now displays as:

```
WARNING: Using alternative emulation file 'C:\jbase5\config\Config_EMULATE_name'
```



When creating a custom emulation, all entries must be entered explicitly, **dup** entries are not recognized.

  
<PageFooter />
