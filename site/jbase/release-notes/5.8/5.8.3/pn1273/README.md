# PN1273

<PageHeader />

## Description

A mechanism was required to defer a real file OPEN. This is because some jAgent routines may open thousands of files into named common, yet only use a few of them.  

These OPENs would occur for every REST request

## Previous Release Behavior

Mechanism not available

## Current Release Behavior

You can now defer a file open in a couple of ways.  

Note that when enabled, the OPEN will NEVER take the ELSE clause.  

If we test for the existence of a file, this would take away the usefulness of the deferred OPEN statement. Hence when enabled, the ELSE clause is never taken.  
The first way to enable deferred OPENs is like this:

```
    INCLUDE JBC.h
    JBASEDeferredOpen(1)
    OPEN "filename" TO ....
    JBASEDeferredOpen(0)
```

In the above example, passing (1) will enable deferred OPEN, and (0) will disable deferred OPEN.  
The return code will show the current status of deferred OPENs, and you can test for this as follows without changing the status:

```
    INCLUDE JBC.h
    IF JBASEDeferredOpen(-1) EQ 0 THEN
        PRINT "OPENs are NOT deferred"
    END ELSE
        PRINT "OPENs are currently deferred"
    END
```

The second way is to use a class method like this in a jabbascript file

```
    if $file::deferredopen() eq 0 then
        print "OPENs are not deferred"
        print "Turning ON deferred OPENs
        $file::deferredopen(1)
    end else
        print "OPENs are currently deferred"
    end
```

It is vitally important you only have deferred OPEN in a select block of code. Do not leave the deferred OPEN enabled for periods of time. Enable deferred OPEN, perform all the OPENs you want, and then turn OFF deferred OPEN.  

This is because:

- Your application may look for the existence of a file using OPEN, and with OPEN deferred, it will never take the ELSE clause
- Internal to jBASE there is code that tests for the existence of a file and that will fail if it thinks it exists because deferred OPENs are enabled.

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
