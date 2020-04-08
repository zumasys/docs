# PN5_60747

<PageHeader />

### Description

Utilities: The **config-strings** command fails to display emulation lines after commented lines



### Previous Release Behavior

User comment lines added to Config\_EMULATE that ended in ":" would cause config-strings to parse the emulation section incorrectly.



### Current Release Behavior

The **config-strings** command now parses the designated emulation section correctly showing all settings.

Note that this did not affect the actual emulation setting in the jBASE session, only the display of the settings from **config-strings**.
