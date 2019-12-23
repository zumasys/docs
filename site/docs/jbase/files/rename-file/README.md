# RENAME-FILE

**Created At:** 7/20/2018 1:39:19 PM  
**Updated At:** 8/23/2018 12:22:51 PM  
**Original Doc:** [rename-file](https://docs.jbase.com/42462-distributed-files/rename-file)  


## Description 

The **RENAME-FILE**command allows the user to rename a file, its dictionary and its associated control file**\*** with a single command.

The command takes the general form:

```
RENAME-FILE filename
```

where filename is the name the file to be renamed. The file type must be one of the supported jBASE [file types](./../create-file).

**\*** A control file is the file ending in **]I**and is created when an index or trigger is created on the main file. Thus, the name of the control file will be the **filename]I**where **filename** is the name of the file.

## Note: 


> RENAME-FILE doesn't require a '(' when specifying the destination file name.  The destination file name must not exist or the rename will fail.
> 
> RENAME-FILE assumes that the dictionary section of the specified file exists. The command will fail if it cannot open the dictionary section. It will rename the data section *and* the dictionary section. If you only want to move the data or dictionary portion of a file, use jmv.
> 
> RENAME-FILE calls an internal function to perform the rename. If transaction journaling is active, the rename is logged as a MOVEFILE transaction.
> 
> RENAME-FILE does not work on files that contain operating system meta-characters (e.g. "SALES\*MAR").




### EXAMPLES

An example of use may be as:

```
RENAME-FILE File1
TO:New.File1

Renamed file .\File1 to .\New.File1
Renamed file .\File1]I to .\New.File1]I
Renamed file .\File1]D to .\New.File1]D
```

Renames the file **File1**, its dictionary and its control file to **New.File1**
