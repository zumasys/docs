# PN5_60605

**Created At:** 10/2/2017 12:59:38 PM  
**Updated At:** 11/24/2017 4:27:26 AM  
**Original Doc:** [pn5_60605](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60605)  
**Original ID:** 279060  
**Internal:** No  

## Description

The jBASE **who** command conflict with Unix/Linux 'who'

### Previous Release Behavior

Running the 'who' command would always run the jBASE version regardless of what shell the user is in.

This was due to the installer placing $JBCRELEASEDIR/bin before /usr/bin.

### Current Release Behavior

The 'who' command now runs as expected from within the jShell and OS shells.

Back to [5.6.2 release Notes](./../README.md)
