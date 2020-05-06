# PN703

<PageHeader />

## Description

The licensing scheme has problems when the hostname exceeds 15 characters

## Previous Release Behavior

On Windows platforms, if the name of the system exceeded 15 characters, there would be a problem with jBASE licensing as that was restricted to 15 characters.

## Current Release Behavior

jBASE now uses alternate system calls to find the host name and these do not have any such restriction, although jBASE has enforced an arbirary limit of 255 characters.

Back to [5.7.7 Release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />
