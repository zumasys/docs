# OFF

<PageHeader />

## Description

The **OFF** command will close down all current jBASE programs, but will stop if encounters a non-jBASE program. Thus to be fully effective, only jBASE programs should be running.

On UNIX for example, the .profile might have:

```
exec MAIN.PROG
```

or

```
exec jsh
```

If the .profile looks like this:

```
MAIN.PROG
```

or

```
jsh
```

The UNIX shell will be kept active and the effect of the **OFF** command will be to return to the UNIX shell.

Back to [Tools and Utilities](./../README.md)

<PageFooter />
