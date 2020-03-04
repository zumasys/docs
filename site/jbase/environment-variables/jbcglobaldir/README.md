# JBCGLOBALDIR

**Created At:** 11/3/2017 3:40:30 PM  
**Updated At:** 7/17/2018 1:50:41 PM  
**Original Doc:** [jbcglobaldir](https://docs.jbase.com/41717-environment-variables/jbcglobaldir)  
**Original ID:** 284165  
**Internal:** No  

**Tags:**
<badge text='directories' vertical='middle' />
<badge text='global files' vertical='middle' />

## Description

Defines the directory for jBASE global files.



## Values

Valid file path



## Default

The default is the same as JBCRELEASEDIR



## Setting

On UNIX it should be setup in the .profile.

On Windows it should be set before running any jBASE program.



## Note:


> JBCGLOBALDIR is the primary search directory for many jBASE elements (e.g.  licensing, spooler, 'proc' directory, etc.). For all practical purposes, this  variable retains certain dependencies with JBCRELEASEDIR, therefore it should  not ever be set to a different location.

