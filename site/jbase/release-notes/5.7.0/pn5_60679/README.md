# PN5_60679

<PageHeader />

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

  
<PageFooter />
