# WWW.INFO

<PageHeader />

`WWW.INFO` is a common variable that stores all the web information.  It is not recommended you directly access the common due to platform/emulation issues.  Instead you can use the [WGETINFO](../wgetinfo/README.md) function to gain access to any of the commons

| Common Position | Description                         | Subroutine   |
| --------------- | ----------------------------------- | ------------ |
| 25              | All passed variable names.          |              |
| 26              | All passed variable values.         | `WGETVAR`    |
| 27              | All passed cookie names.            |              |
| 28              | All passed cookie values.           | `WGETCOOKIE` |
| 29              | Server Name                         |              |
| 30              | Cgi Path                            |              |
| 31              | Server Port                         |              |
| 32              | Body                                | `WGETBODY`   |
| 33              | All Passed Headers Names            |              |
| 34              | All Passed Header Values            | `WGETHEADER` |
| 35              | Rest Params (params after Resource) | `WGETPARAM`  |
| 36              | Config file                         | `WGETCONFIG` |
  
<PageFooter />
