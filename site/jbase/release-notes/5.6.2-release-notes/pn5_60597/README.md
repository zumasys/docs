# PN5_60597

**Created At:** 10/2/2017 11:12:10 AM  
**Updated At:** 10/17/2017 7:05:20 AM  
**Original Doc:** [pn5_60597](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60597)  
**Original ID:** 279039  
**Internal:** No  


### Description

Spooler enhancement to be able to assign the port number range for **jlp** (print job) and **jspprint** (print queue) processes



### Previous Release Behavior

Printer jobs would always take the next available (lowest) port number, locking out users with dedicated port numbers.



### Current Release Behavior

Printer  jobs will use the port range defined by a new environment variable,  JBC\_SPOOLER\_PORT\_BASE, port range 5000-6000 being the default and lowest  possible range.

This new environment variable defines the base port number for **jlp** and **jspprint** processes.

For example:

```
set JBC_SPOOLER_PORT_BASE=6000     [Windows]
export JBC_SPOOLER_PORT_BASE=6000  [Linux/Aix/Sun]
```

is the equivalent to setting the port number range 6000-7000 when launching a print job.
