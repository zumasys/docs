# PATH

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

The **PATH** environment variable contains a list of all directories that contain executable programs. As a minimum, this should contain the shell default values plus the path of the jBASE **bin** directory (i.e.**$JBCRELEASEDIR/bin** on unix, **%JBCRELEASEDIR%\bin** on Windows) so that jBASE commands are seen by the shell. You will also wish to explicitly add the path of your application executable directory (such as ${HOME}/bin).

## Values

Any directory the user has privileges for.

## Default

The default depends entirely upon your system and how it has been set up.

## Setting

Normal environment variable, so it can be set at any time by the commands:

## UNIX

```
export PATH=$PATH:$JBCRELEASEDIR/bin:/apps/bin
```

## Windows

```
set PATH=%PATH%;%JBCRELEASEDIR%/bin;C:\apps\bin
```

## Notes

If you receive a Windows warning that your path is too long then see this [page](./../notes-on-environment-variables-for-the-jbase-compiler).

Go Back to [Environment Variables](./../README.md)

  
<PageFooter />
