# SLEEP

**Created At:** 8/30/2018 1:37:03 PM  
**Updated At:** 5/16/2019 6:30:17 PM  
**Original Doc:** [sleep](https://docs.jbase.com/48575-jkeyauto/sleep)  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Suspends execution for a specified number of seconds, or with the special ON or OFF operands can turn the execution of the SLEEP command on or off. Note that the -s option to jkeyauto can also be used to turn off execution of the SLEEP statement by default - in this case the SLEEP ON will subsequently over-ride this.

It's general use is as:

```
 SLEEP {expression} | ON | OFF
```

- **ON** - When "SLEEP ON" is executed all SLEEP statements will be executed as normal.
- **OFF**- When "SLEEP OFF" is executed, all SLEEP statements will be ignored.
- **expression** The time to sleep expressed as a number of seconds. If the sleep time "expression" is not specified, it defaults to 1 second.


A non-integer value to sleep may be set for fractions of a second. The actual sleep time will depend upon the granularity of the system clock and the load on the system.

Typically, resolutions to the nearest 1/100th of a second are usually possible.

An example of use may be as:

```
value=0.6
time1=$UBOOT
sleep value*2
print "Sleep: Request = ":value*2:" secs, actual = ":$UBOOT-time1
```
