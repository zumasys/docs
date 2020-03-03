# PN5_60927

**Created At:** 1/13/2020 1:54:18 PM  
**Updated At:** 1/15/2020 2:04:04 PM  
**Original Doc:** [pn5_60927](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60927)  
**Original ID:** 516223  
**Internal:** No  


### Description

Check if the command being cataloged clashes with another command found in the user's PATH



### Previous Release Behavior

If you CATALOG a command such as 'rm', then the command would always catalog nicely. The problem is that in some cases (e.g. 'rm') this clashes with another command found in your PATH environment variable. Without you realising it, your scripts that depend on 'rm' suddenly find they use your new cataloged version of 'rm' instead of the previously used OS version.

This behavior is not a problem when CATALOG'ing a subroutine, and so this change only applies to executable files.

While the description talks about the Linux 'rm' command, it is a problem with any command you catalog that has a duplicate elsewhere in your PATH environment variable.



### Current Release Behavior

A warning is now issued and you are given the option to proceed or abort the CATALOG. This new behaviour can be modified using the new (O) and (W) options -- see later.

This is an example of attempting to CATALOG your own version of the 'rm' command, which clashes with the OS version

```
$ CATALOG BP rm
rm
Warning. Attempt to CATALOG a command that already exists in another directory in PATH.
    /bin/rm
CATALOG will create the following files
    /home/jbase/bin/rm
    /home/jbase/bin/rm.so
There was 1 potential duplicate.
Do you want to continue with CATALOG? : N
$
```

Below is another example of cataloging your own version of WHO, which is not an OS command, but is a jBASE command

```
$ CATALOG BP WHO
WHO
Warning. Attempt to CATALOG a command that already exists in another directory in PATH.
    /home/jbase/5.0_rels/jbcdevdevelopment/bin/WHO
    /home/jbase/5.0_rels/jbcdevdevelopment/bin/WHO.so
CATALOG will create the following files
    /home/jbase/bin/WHO
    /home/jbase/bin/WHO.so
There were 2 potential duplicates.
Do you want to continue with CATALOG? : N
```

There are 2 new options now available with CATALOG.

The (O) option will override the "Do you wish to continue with CATALOG?" prompt and so the catalog will always go ahead despite any warnings.

The (W) option will suppress the warning messages entirely and not do any checks. Using this option gives the same behaviour as prior to this patch.

### Notes

If the CATALOG output is despooleed or captured in a BASIC program then the "Do you want to continue with CATALOG?" prompt will not be given.

The JED editor provides 2 new options, **W** and **O**, which can be used in the same way as the **(W** and **(O** options described above, e.g.

```
Command> fibcw
```

will suppress the warning messages. The **O** overrides **W** if both are specified.
