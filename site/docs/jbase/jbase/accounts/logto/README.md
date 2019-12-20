# LOGTO

**Created At:** 7/5/2018 8:34:08 AM  
**Updated At:** 1/16/2019 1:29:36 AM  
**Original Doc:** [325584-logto](https://docs.jbase.com/46964-accounts/325584-logto)  


## Description

Switches to the specified user account.

```
LOGTO account-name
```

Where account-name is the pseudo account (defined in the SYSTEM File) or, under Unix, the user account to switch to.

Execution of this command changes environment variables differently depending upon the type of account (pseudo or real) and the OS being used, as shown in the table :




| Variable<br> | Effect of LOGTO<br> |
| --- | --- |
| HOME<br> | changed to the directory of the specified account<br> |
| JBCDEV\_BIN<br> | under Windows, only reset if set prior to LOGTO.  Under Unix pseudo accounts, this is always set.  For Unix accounts, this is not set.<br> |
| JBCDEV\_LIB<br> | under Windows, only reset if set prior to LOGTO.  Under Unix pseudo accounts, this is always set.  For Unix accounts, this is not set.<br> |
| JBCLOGNAME<br> | under Windows (and Unix pseudo accounts), set to the name of the account you log to.  With Unix accounts, LOGNAME is set.<br> |
| JBCOBJECTLIST<br> | reset, but only if set prior to LOGTO<br> |
| JEDIFILEPATH<br> | HOME is changed to the directory of the specified account<br> |
| LOGNAME<br> | with Unix accounts, set to the name of the account you LOGTO<br> |
| PATH<br> | jBASE automatically appends %HOME%\bin (or $HOME/bin for Unix systems), so by definition it is changed after LOGTO<br> |
| PWD<br> | same as HOME<br> |




## Note:  


> For use under Windows, the user must have a valid SYSTEM File entry defined for the command to work.  In addition, this command does not work when it is run from "cmd.exe".
> 
> This command does not directly support any options. However, it is possible to specify options specific to the new account's environment via the SYSTEM File entry.
> 
> This command **cannot** be used in the command stream for PH-START or in the Primary input buffer of a jCL command.


### 


### Example

```
LOGTO homer
```

Logs off the current account and into the account "homer".



[Accounts](325724-accounts)
