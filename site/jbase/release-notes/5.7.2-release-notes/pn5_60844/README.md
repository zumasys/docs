# PN5_60844

**Created At:** 3/8/2019 11:03:49 AM  
**Updated At:** 3/8/2019 11:05:27 AM  
**Original Doc:** [pn5_60844](https://docs.jbase.com/5-7-2-release-notes/pn5_60844)  
**Original ID:** 370731  
**Internal:** No  

## Description

Add new options to display all configuration settings and to output in JSON format

### Release Behavior

Options did not exist

### Current Release Behavior

```
jsh ~ -->config-strings -h

Description: Displays jBASE Config_EMULATE settings.
Usage:      config-strings {options}
            config-strings -h | -help | -?

Options:
   -a -all, display all configuration options indicating which ones
            are set and which are unassigned.
   -c -compact, display in compact format: key = value
   -e -emulation <<mode>>, display section for emulation <<mode>>
   -j{n} -json{n}, output is in JSON, where "n" specifies the JSON format.
                   Refer to the documentation for the $tojson() method.
                   This option produces an array with 2 elements:
                      array[0] is a header object, e.g.
                           {
                               "emulation":"jbase",
                               "system":"athens",
                               "date":"06 feb 2019",
                               "time":"15:24:52",
                               "user":"theaetetus"
                           },
                      array[1] is an object with the emulation settings
   -l -list, list sections in config_EMULATE
   -@, display @ values

 Examples:
    config-strings           display current emulation settings.
    config-strings -j        display current emulation settings, output as JSON
    config-strings -a        display all configuration settings
    config-strings -a -j1    display all settings, output as JSON and is formatted
    config-strings -e prime  display settings for the prime emulation
    config-strings -e d3 -@  display settings and @ values for the d3 emulation
    config-strings -l        list sections in Config_EMULATE.
```

Back to [5.7.2 Release Notes](./../README.md)
