# PN906

<PageHeader />

## Description

Add the ability to run a program as unlicensed

## Previous Release Behavior

There have been occasions when a user has run out of licenses because of some ongoing problem. In an attempt to resolve the problem, the user cannot log on and check the system.

## Current Release Behavior

The user can add the **-JU** option to the command to get an un-licensed version and any jBASE command, for example **jsh**.

This option can only be used on one jBASE process at a time. However, most jBASE programs can run as inside the calling process, so if you start a jBASE shell like this **jsh -JU**, then most jBASE programs can still be run with this one-process restriction, as they will run inside the same process as **jsh**.

The jBASE process with the **-JU** option will run for a maximum of 60 minutes after which you will see the following message and be logged out.

```
jBASE: Maximum free time for program started with -JU is 60 minutes
       You are now being logged off.
```

If you time out like this, you can simply re-start the process again.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
