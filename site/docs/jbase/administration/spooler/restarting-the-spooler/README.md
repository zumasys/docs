# Restarting the Spooler

**Created At:** 9/18/2018 9:51:23 AM  
**Updated At:** 1/24/2019 8:55:38 AM  
**Original Doc:** [restarting-the-spooler](https://docs.jbase.com/44205-spooler/restarting-the-spooler)  


## Description 

Individual jBASE despooler processes can be restarted by either using the SP-RESUME command directly, or from the [SP-JOBS](./../sp-jobs) menu. For example:

```
SP-RESUME LASER
```

Alternatively, all defined form queue despooler processes can be started at once by using the **REST-SPOOLER**command. For example:

```
REST-SPOOLER
```

### 


### Unix

If the restart of despooler processes is required at system boot time, a script (for example, jSpoolInit) should be created to restart the required formqueue despoolers. Place the script in the /etc/init.d (or similar) directory and then set a link in the /etc/rc2.d (or similar) directory back to the script in the /etc/init.d directory. The script should use multiple invocations of SP-RESUME to restart selected formqueue despoolers or alternatively, it can use the REST-SPOOLER command to resume all defined printer queues.



### Example

```
jSpoolInit
JBCRELEASEDIR=/usr/jbc
export JBCRELEASEDIR
PATH=/etc:/bin:/usr/bin:$JBCRELEASEDIR/bin
LD_LIBRARY_PATH=$JBCRELEASEDIR/lib
#AIX use LIBPATH
export PATH LD_LIBRARY_PATH
case "$1" in
"start")
echo "Starting jBASE despoolers"
SP-RESUME STANDARD or :REST-SPOOLER
;;
"stop") ;;
esac
```

### **Windows**

To restart the spooler at boot time then create a Windows Scheduled Task.
