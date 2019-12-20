# PN5_60747

**Created At:** 4/18/2018 12:29:10 PM  
**Updated At:** 4/18/2018 12:30:01 PM  
**Original Doc:** [pn5_60747](https://docs.jbase.com/release-notes/pn5_60747)  


### Description

Utilities: The **config-strings** command fails to display emulation lines after commented lines



### Previous Release Behavior

User comment lines added to Config\_EMULATE that ended in ":" would cause config-strings to parse the emulation section incorrectly.



### Current Release Behavior

The **config-strings** command now parses the designated emulation section correctly showing all settings.

Note that this did not affect the actual emulation setting in the jBASE session, only the display of the settings from **config-strings**.
