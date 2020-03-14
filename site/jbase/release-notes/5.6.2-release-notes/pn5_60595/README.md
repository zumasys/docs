# PN5_60595

**Created At:** 10/2/2017 11:09:08 AM  
**Updated At:** 11/20/2017 4:55:53 PM  
**Original Doc:** [pn5_60595](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60595)  
**Original ID:** 279038  
**Internal:** No  

## Description

Runtime: Prevent the jShell dot-stacker commands from clashing with user commands

### Previous Release Behavior

The jShell dot-stacker commands would override user commands. For example, if a user had a command called **.DATE** then the jShell would interpret that as a **.D** command and perform the dot-stacker function instead of the user's command.

### Current Release Behavior

The jShell no longer overrides user commands, however if a user command  matches a pattern recognized by the dot-stacker then the user's command  will still be overridden.

Back to [5.6.2 release Notes](./../README.md)
