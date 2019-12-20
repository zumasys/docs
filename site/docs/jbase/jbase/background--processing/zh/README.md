# ZH

**Created At:** 6/14/2018 2:22:52 PM  
**Updated At:** 7/19/2018 12:07:29 PM  
**Original Doc:** [zh](https://docs.jbase.com/46465-background-processing/zh)  


## Description 

The jBASE ZH command can be used to start a jBASE background task process and direct output a hold file. The command takes the form:

```
ZH {port} {command}
```

The user will then be prompted as:

```
ENTER ACCOUNT FOR PH TASK ?{userid/account-name}
ENTER COMMAND TO EXECUTE ?{command}
ENTER DATA ASSOCIATED WITH COMMAND
USE "<" FOR A NULL LINE
>{input}
```

where:

- port is the port number, on which to run the jBASE background task process.
- command is the command for the jBASE background task process to execute.
- userid/account-name is the name to use when executing the jBASE background task process.
- input is the data to supply to jBC program INPUT statements. Each input should be placed on a separate line.




Background tasks started with ZH can run concurrently by setting the following environment variable:

```
set Z_DISABLE_QUEUEING=1 [Windows] 
export Z_DISABLE_QUEUEING=1 [Linux/Unix]
```

Setting this environment variable disables the queueing behavior so that background jobs started with Z / ZH will run concurrently provided there are available ports in the PH-LINES list.

Back to [jBTP](jbtp)
