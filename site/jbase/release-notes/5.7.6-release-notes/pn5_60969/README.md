# PN5_60969

<PageHeader /> 

## Description

Enhance the reporting and recovery of errors caused by the fork() command failing.

### Previous Release Behavior

Occasionally an application doing a **PERFORM** or **EXECUTE** would use an external non-jBASE program causing us to start a new process. This invokes the fork() function on Linux and AIX. Very sporadically this would fail and an error message generated. Unfortunately the error number given was 0, meaning it is difficult to ascertain the problem. For example, when this happened, this would be the response from jBASE.

```
** Warning [ PERFORM_ERROR ] ***
Unix error number 0 while attempting PERFORM , Line    1234 , Source MYTEST
Trap from error message, error message name = PERFORM_ERROR
Soruce changed to /home/greg/BP/MYTEST
0012 EXECUTE CHAR(255):"k":"/home/greg/bin/scripts/dosomething"
jBASE debugger->
```

### Current Release Behavior

The first thing to fix is the error number. Following this change, we will get a meaningful error number to help ascertain the root cause of the problem.

Second, we log the error. So, executing the command **LIST-RUNTIME-ERRORS** should show the error we generate something like this

```
PAGE    1                                                                                   17:54:25  16 JAN 2020

Date.......    Time....    Error Message.................    Call Stack..........

16 JAN 2020    17:53:27    Error when trying to fork() a     jsh.b:153
                           new process, error number 123


 1 Records Listed
```

Thirdly, the root cause could be a momentary lack of resources. So to try to alleviate the errors, we will retry the fork() request up to 5 times before entering the debugger.

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
