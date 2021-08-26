# jBASE Accounts: System File

<PageHeader />

**Tags:**
<badge text='system' vertical='middle' />
<badge text='account' vertical='middle' />

## Description

The location of the jBASE SYSTEM file is determined by the [JEDIFILENAME\_SYSTEM](./../jedifilename_system) environment variable. The environment variable is usually setup when the user logs on. By default, jBASE uses a hash file named SYSTEM, in a subdirectory named src, in the jBASE release directory as defined by the environment variable [JBCRELEASEDIR](./../jbcreleasedir).

Use of the SYSTEM file also depends upon the setting of the environment or registry variable JEDIFILENAME\_MD, which describes the users MD/VOC file. This environment variable should be set to the users required MD file. e.g. To use an MD file in the users home directory set the environment variable, [JEDIFILENAME\_MD](./../jedifilename_md) to $HOME/MD or %HOME%\MD.

In its minimum form, a record in the SYSTEM file must contain two fields. Field 1 contains the character "D" to specify a local account, and field 2 contains the absolute path of the account directory. For example:

```
ACCOUNTX
001 D
002 C:\users\accountx or /accounts/accountx
```

Fields 7 and 20 through 37, of the SYSTEM record, are used by the jBASE LOGTO and PASSWORD commands. All other fields are reserved.  

The full format of a SYSTEM record is as follows and will be described in subsequent sections on this page:

ID:  AccountName

```
001 Type
002 Absolute Account Path
003 Reserved
004 Reserved
005 Reserved
006 Reserved
007 Encrypted Password (optional)
008 Reserved
009 Reserved
010 Reserved
011 - 019 Reserved
020 ESYSTEM_START
021 JBCEMULATE
022 HOME
023 JBCDEV_BIN
024 JBCDEV_LIB
025 PATH
026 JBCOBJECTLIST
027 JEDIFILEPATH
028 JEDIFILENAME_MD
029 JBC_TCLRESTART
030 JBC_ENDRESTART
031 JBCRESTARTPROG
032 JBCLOGINPROG
033 JBCLOGNAME
034 JBASE_I18N
035 JBCPORTNO (multi-valued range)
036 OTHER ENVIRONMENT VARIABLES (multi-valued)
037 ESYSTEM_END
```

### Encrypted Password (Field 7)

This optional field should only be maintained through the jBASE PASSWORD command. The PASSWORD command prompts for an Account Name which must be a valid entry in the SYSTEM file (i.e. the file defined by the [JEDIFILENAME\_SYSTEM](./../jedifilename_system) environment variable). The password must be entered twice for verification that it was entered correctly. Be aware that entry of this password is case sensitive (e.g. "MyPassword" is different than "mypassword").

## Extended System File Values  

The SYSTEM File for jBASE 4 and jBASE 5 has 16 new attributes that are used to define the assignment of environment variables in the LOGTO process. These values are stored in attributes 21 through 36 and are encapsulated by attribute 20, "ESYSTEM\_START",and attribute 37, "ESYSTEM\_END".

```
...
020 ESYSTEM_START
021 JBCEMULATE
022 HOME
023 JBCDEV_BIN
024 JBCDEV_LIB
025 PATH
026 JBCOBJECTLIST
027 JEDIFILEPATH
028 JEDIFILENAME_MD
029 JBC_TCLRESTART
030 JBC_ENDRESTART
031 JBCRESTARTPROG
032 JBCLOGINPROG
033 JBCLOGNAME
034 JBASE_I18N
035 JBCPORTNO (multi-valued range)
036 Other Environment Variables (multi-valued)
037 ESYSTEM_END
...
```

For attributes 21 - 35 simply specify the value.  
For attribute 36 specify: env\_var1=valueX]env\_var2=valueY]...       **]** = value mark

In most cases, if a value is not included then the environment variable will remain the same as it was prior to the LOGTO. However, it is best to assign values explicitly rather than relying on this behavior.

An example of use is as:

```
D
C:\accounts\payables

















ESYSTEM_START
jbase
C:\accounts\payables
C:\accounts\payables\bin
C:\accounts\payables\lib
C:\accounts\payables\bin;%PATH%
C:\accounts\payables\lib
C:\accounts\payables;C:\globals
C:\globals\MD]D







JBCNETDIR=C:\globals\jrfs]JBCNETACCESS=C:\globals\jrfs\netaccess
ESYSTEM_END
```

## Note

> The Extended SYSTEM File values (ESYSTEM\_START+1 thru ESYSTEM\_START+15) are held internally within the jBASE process. These settings are NOT passed to the Operating System where 'expansion' is performed. In order to set environment variables containing references passed to the Operating System for 'expansion',use ESYSTEM\_START+16.
>
> Environment variables set in ESYSTEM\_START+16 override any corresponding values set in ESYSTEM\_START+1 through ESYSTEM\_START+15.
>
> Certain environment variables are controlled by LOGTO (e.g. HOME) and should not be assigned in ESYSTEM\_START+16.

Back to [Environment Variables](./../../environment-variables/README.md)

Back to [Accounts](./../README.md)

<PageFooter />
