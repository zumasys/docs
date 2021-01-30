# TypeDelay

<PageHeader />

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Allows you to specify the time delay, in seconds, between each simulated typed character. The default is to delay every 0.1 seconds. A value of 0 shows no delay. It's general use is as:

```
typedelay expression
```

were expression is the number of seconds delay between each character. A value of 0 means no delay.

An example of use may be as:

```
TYPEDELAY 1.2
INPUT "procrastinate" TO 0
TYPERATE 0.05
INPUT "---------------------"
```

to show the user taking a long time to enter a complicated word , 1.2 seconds per character. The second line entered is a number of ----- characters and as this is probably done by auto-repeat from the users keyboard.

[Back to jKeyAuto](./../jkeyauto/README.md)

<PageFooter />
