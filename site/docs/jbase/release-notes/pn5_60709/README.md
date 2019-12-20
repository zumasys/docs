# PN5_60709

**Created At:** 2/20/2018 1:00:58 PM  
**Updated At:** 2/20/2018 1:03:58 PM  
**Original Doc:** [pn5_60709](https://docs.jbase.com/release-notes/pn5_60709)  


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
