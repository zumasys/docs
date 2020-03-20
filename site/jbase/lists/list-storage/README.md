# List Storage

**Created At:** 7/9/2018 12:26:38 PM  
**Updated At:** 7/13/2018 9:25:19 AM  
**Original Doc:** [list-storage](https://docs.jbase.com/47026-lists/list-storage)  
**Original ID:** 325913  
**Internal:** No  

## Description

The jBASEWORK file is a temporary file which contains information specific to jBASE processes and ports while executing applications. This file should not be accessed while any jBASE processes are active.

The jBASEWORK file also contains default or numbered select lists. These select lists are temporary and so do not need to be deleted. Named select list may also be stored in the jBASEWORK file dependent upon configuration.

The jBASEWORK can be safely deleted when no users are executing jBASE programs.

The jBASEWORK files can be configured to another directory by using the [JBASEUNIQUE](./../../../environment-variables/jbaseunique) environment variable or the JBCBASETMP environment variable.

### Named Select Lists

Depending upon the JBCLISTFILE environment variable and existence of a POINTER-FILE select lists are stored in one of three possible places.

1. First, if the environment file JBCLISTFILE is configured and is valid then the save list is stored with an identifier of the list name. If JBCLISTID is set then the identifier is **SEL\*AccountName\*ListName**.
2. If the JBCLISTFILE is not defined or is not valid, and a POINTER-FILE exists, then the list is stored as named in the POINTER-FILE.
3. If JBCLISTFILE is not set and the POINTER-FILE does not exist, then the list is saved in the jBASEWORK file as **SEL\*AccountName\*ListName**. To store lists in jBASEWORK with an id of just the list name, set a Q-pointer or F-pointer called POINTER-FILE to jBASEWORK.

Back to [List Processing](./../list-processing)
