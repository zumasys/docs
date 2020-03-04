# WINDOWS TELNET TROUBLESHOOTING

**Created At:** 4/19/2018 6:52:58 PM  
**Updated At:** 5/2/2018 7:28:13 PM  
**Original Doc:** [311300-windows-telnet-troubleshooting](https://docs.jbase.com/30301-jbase/311300-windows-telnet-troubleshooting)  
**Original ID:** 311300  
**Internal:** No  

## Event Log

The jBASE TCP Remote Logon Services report error messages to the Application Event Log.  This log can be viewed using the Event Viewer application which can usually be launched by double clicking its icon in the Program Manager group:  Administrative Tools.  Make sure the Application event log is selected. (Its entry in the Log menu should have a check mark beside it... if not, select it.)

All jBASE TCP Remote Logon Services entries begin with the tag “jBASE”.  Most of the error messages are self explanatory.  Any error codes mentioned are standard Windows error codes as returned by GetLastError().  jBASE Support or your VAR should be able to help you with any errors here.

On rare occasions you may have a service failure.  These are logged by the Service Control Manager in the System Log.

## Typical Issues

### Eventlog says: jBASE Command Starter: CreateProcess: 5

This means that an account with Administrator privileges tried to logon, but that account does not have sufficient rights to execute transcmd.exe. The error cannot be caught sooner as Administrator accounts have a large number of privileges that allow all other operations up to this point to succeed.

### Service Manager can’t find .exe or Start failed: 2

Usually this error means that you’ve moved the software after you installed it.  Services cannot be moved after installation as an absolute path name is stored.  To correct the problem, remove, then reinstall the software.

### Access denied when accessing a drive mounted with NET USE

Because Windows wasn’t initially designed with the idea of more than one interactive user logged on at the same time, oddities often occur when accessing remote drives via a drive letter in the shared drive map. Most users seem to have better results when accessing remote drives via the SUBST command.  Accessing remote drives via UNC names also works and is recommended.

### Login failure messages in the Event Log every minute

This is due to a bug in Compaq’s Insight Manager program.  Compaq has provided a work-around:  Upgrade to version 2.60b or newer of the Insight Manager product, then use the Control Panel for the Insight Manager product to disable telnet detection.  Compaq is working on a better solution.

### Program exits immediately with no output

The most likely problem is that you have a needed DLL missing from your PATH. Because telnetd users need to see the error messages in a non-GUI form, we set things so that Windows will not let an error pop-up box occur for this error, but rather cause the error code to be returned to the calling program.  In most instances this setting has the desired effect of letting a remote error see the error message, however, for reasons unknown to us, Microsoft has made the CMD.EXE suppress the error message for a missing DLL.

Back to [Windows Telnet](./../windows-telnet-%28telnetd.exe%29)
