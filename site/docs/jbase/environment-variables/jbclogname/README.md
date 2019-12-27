# JBCLOGNAME

**Created At:** 11/3/2017 3:31:03 PM  
**Updated At:** 4/20/2019 8:50:38 AM  
**Original Doc:** [jbclogname](https://docs.jbase.com/41717-environment-variables/jbclogname)  
**Original ID:** 284163  
**Internal:** No  

**Tags:**
<badge text='accounts' vertical='middle' />

## Description

The **account name**as perceived by commands such as **WHO** or conversions such as **U50BB** will normally be returned as the login name of the user (**LOGNAME** variable). However, if it is desired that users login with personal usernames but execute as if they were all on the same account, this variable may be set to override their username. The account name will be returned as whatever this environment variable is set to.



## Values

Any valid character string.



## Default

None.



## Setting

It must be set before running any jBASE process.

On UNIX it is typically assigned in the **.profile** or **.bash\_profile**.

On Windows it is typically assigned in the user's environment.

```
export JBCLOGNAME=OBIWAN   [Unix]
set JBCLOGNAME=OBIWAN      [Windows]
```


