# PN5_60679

**Created At:** 12/27/2017 8:44:23 AM  
**Updated At:** 2/16/2018 7:07:53 PM  
**Original Doc:** [pn5_60679](https://docs.jbase.com/release-notes/pn5_60679)  


### Description

Add an option to the **create-account** command to set the emulation for the account.



### Previous Release Behavior

The **create-account** command would always inherit the emulation from the environment of the current session. This created incompatibility issues when the account was created from the **jbaseadm** account, which uses the **jbase** emulation by default.



### Current Release Behavior

The **create-account** command now has a **-e** option which can be used to set the emulation for the account. If the option is not used then the emulation is inherited from the environment of the current session.

Example:

```
create-account -e d3 COLLECTIONS
```
