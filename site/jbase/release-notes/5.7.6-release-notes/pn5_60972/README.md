# PN5_60972

**Created At:** 1/22/2020 10:14:16 AM  
**Updated At:** 1/22/2020 10:17:04 AM  
**Original Doc:** [pn5_60972](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60972)  
**Original ID:** 521073  
**Internal:** No  

## Description

**PH-STATUS** facelift

### Previous Release Behavior

The **PH-STATUS** command's user interface was extremely limited.

### Current Release Behavior

\* The output is now sorted: **BY STATUS-ALPHA BY-DSND START-DATE BY-DSND START-TIME BY LINE**

\* The output can be restricted by specifying one or more valid status codes as options. For example, to display only Active tasks:

```
ph-status (a
```

\* The command-line options are case insensitive

\* A select-list can be passed to it

\* A check is done to ensure that a task marked as Active is still active; if it isn't then the status is changed to **X**. This could happen if the port was logged off or the task was killed in an abnormal manner.

\* Added help page which can be envoked with -h or -?

\* The **PH-HISTORY** file is now created as a Dynamic File

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
