# JEDIFILENAME_SYSTEM

<PageHeader />

## Description

The JEDIFILENAME_SYSTEM environment variable defines the location of the SYSTEM file. The SYSTEM file contains records that define the home directories of jBASE accounts, and is used by the JLOGIN, LOGTO, JFILESAVE and other jBASE commands. It is also needed to resolve Q-pointers defined in the MD/VOC file. While the SYSTEM file is optional in jBASE, it's use is recommended. By default Q-pointers are resolved by using the **$JBCRELEASEDIR/src/SYSTEM** file. This can be changed by setting the JEDIFILENAME_SYSTEM variable to an alternative hash file or directory.

While it is not required, it is strongly advised that this value be set to the **complete** path of the system file and not a relative path (as an example, **/home/islandjim/SYSTEM]D** should be used instead of **./SYSTEM]D**).

## Values

Valid file path.

## Default

None.

## Setting

As per normal environment variable, so it can be set at any time by the commands:

### UNIX

```
export JEDIFILENAME_SYSTEM=/home/globals/SYSTEM]D
```

### Windows

```
SET JEDIFILENAME_SYSTEM=D:\home\globals\SYSTEM]D
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
