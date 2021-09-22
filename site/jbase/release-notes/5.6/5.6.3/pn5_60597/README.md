# PN5_60597

<PageHeader />

## Description

Spooler enhancement to be able to assign the port number range for **jlp** (print job) and **jspprint** (print queue) processes

### Previous Release Behavior

Printer jobs would always take the next available (lowest) port number, locking out users with dedicated port numbers.

### Current Release Behavior

Printer  jobs will use the port range defined by a new environment variable,  JBC\_SPOOLER\_PORT\_BASE, port range 5000-6000 being the default and lowest  possible range.

This new environment variable defines the base port number for **jlp** and **jspprint** processes.

For example:

```
set JBC_SPOOLER_PORT_BASE=6000     [Windows]
export JBC_SPOOLER_PORT_BASE=6000  [Linux/AIX]
```

is the equivalent to setting the port number range 6000-7000 when launching a print job.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
