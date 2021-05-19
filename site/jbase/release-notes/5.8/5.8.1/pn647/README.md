# PN647

<PageHeader />

## Description

In a subroutine which is used with a trigger, the fourth parameter has always been documented as "Flags" and "This parameter not yet implemented".  See [Trigger API](./../../../../triggers/trigger-api/README.md)

## Previous Release Behavior

The **Flags** parameter was not populated.

## Current Release Behavior

This parameter is now implemented as follows:

**Flags**: Extra optional details about the update. This is a string passed as 2 attributes as follows:  

**Flags<1>** : A Multi-value list of options as shown below. There can be zero or more multi-values. Each multi value describes one option as follows:  

"LOCK"    A record lock is being taken with a READU statement, or the lock is being maintained and not released with a WRITEU statement.  
"NOWAIT"  The READU statement contains a LOCKED clause meaning it will not wait should a lock be taken.  
"FIELD"   A single field number (attribute) is being requested to be read or written, e.g. a WRITEV or READV statement.  

**Flags<2>** : If Flags<1> contains "FIELD" then this will be the attribute number.  

For example, if your application does this:

```
READVU rec FROM FILEVAR,"ITEMID",3 LOCKED
   PRINT "The record is already locked"
END THEN
......
```

Then the 'Flags' parameter will contain this:

```
LOCK]NOWAIT]FIELD^3
```

Back to [5.8.1 Release Notes](./../README.md)
  
<PageFooter />
