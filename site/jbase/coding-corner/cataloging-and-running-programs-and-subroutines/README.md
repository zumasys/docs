# Cataloging and Running Programs/Subroutines

<PageHeader />

## Understanding BASIC/CATALOG on jBASE

jBASE differs to other MultiValue platforms in many ways and one of the primary areas is BASIC run-time. In jBASE all programs must be cataloged to run. For example, the use of:

```
 RUN BP MYPROG
```

Will attempt to execute the catalog of MYPROG.

*Note: if your BP file is a directory and does not have an OBJECT data level and the program name does not end in “.b” then the RUN operation will attempt to catalog on the fly if the catalog is not already available.*

jBASE does not use the MD/VOC or have a global catalog area used by users in one or more accounts. Instead the native environment variables are used provide the executable path.

For example (Linux)

e.g.

```
 PATH=/myaccount/bin:$PATH
 export JBCOBJECTLIST=/myaccount/lib:$ JBCOBJECTLIST
```

Note

A CATALOG jBASE produces binary executables (in the case of PROGRAMs) and shared objects (in the case of SUBROUTINEs).

*Note: that PROGRAMs are cataloged into both executables and shared objects which will be explained later in this section.*

## Command not found  or Unable to perform CALL to subroutine (or wrong version being executed/called)

The first trouble-shooting step if a program/subroutine can’t be found (or is not the expected version) is to perform a jshow -c

e.g.

```
 jshow -c MYSUB
```

If this command returns nothing then you need to check your [PATH](../../environment-variables/path/README.md) and [JBCOBJECTLIST](../../environment-variables/jbcobjectlist/README.md).

You may also need to check the permissions of the bin and lib directories where the program might be cataloged.

There are various ways to control how [PATH](../../environment-variables/path/README.md) and [JBCOBJECTLIST](../../environment-variables/jbcobjectlist/README.md) can be set (system wide, profile scripts, etc). One of them is to store the desired paths in attributes 25, 26 in the [SYSTEM](../../environment-variables/system-file/README.md) entry of each account (if your application is account based).

## Why does my main program also have a shared object?

When you catalog a non-subroutine it will generate an executable and a shared object in the target bin directory. The reason for this is that in jBASE when a program performs an EXECUTE/PERFORM of another cataloged program it will load the shared library version for performance and thread related reasons. The exception to this is if you execute with a new shell:

e.g.

```
 EXECUTE @IM:'kMYPROG'
```

## Where did my CATALOG result go?

The destination bin and lib when cataloging programs/subroutines is determined by:

env

```
 export JBCDEV_BIN=/myaccount/bin
 JBCDEV_LIB=/myaccount/lib
```

If these environment variables are not set then they default to $HOME/bin and $HOME/lib.

## Unable to DECATALOG or CATALOG: “…already defined…”

An important issue when programming in jBASE BASIC (jBC) is that the item-id to the program is not necessarily the name used to catalog.

For example

e.g.

```
 MYSUB
 001 SUBROUTINE MYSUB
 002 …
```

```
 MYSUB2
 001 SUBROUTINE MYSUB
 002 …
```

Both of the above examples will attempt to product a shared object referencing a subroutine “MYSUB”.

This is a common issue when making a copy of a program and neglecting to change the SUBROUTINE statement.

The [PORTBAS](../../migration-station/articles/portbas/README.md) utility can be used to either rectify or report the status of any such occurrences.

Without making any changes, if you attempt to [CATALOG](../../jbase-basic-(jbc)/catalog/README.md) both of these the second one will fail reporting that MYSUB has already been cataloged and refer you to the object code that was used for that catalog at which point you need to determine which one is correct and which one should be modified and recompiled/cataloged.

## jSHOW shows multiple results

The jSHOW command (when used with the -c option) looks at your current PATH and JBCOBJECTLIST to discover a program/subroutine. As mentioned previously non-subroutine programs when cataloged results in an executable and a shared object so this will show as a duplicate.

However, there may be situations where due to a change to JBCDEV\_LIB (possibly when logging to different accounts) a program/subroutine with the same name is cataloged to a different bin/lib which is also in your PATH/JBCOBJECTLIST.

jBASE will use the first one it finds (which may not be the one you want). If this is the case, you will need to either reorganize your PATH/JBOBJECTLIST or possibly perform a DECATALOG on the version(s) you don’t want (be sure to set your JBCDEV\_BIN and JBCDEV\_LIB accordingly when performing these tasks).

[Back to Coding Corner](./../README.md)

<PageFooter />
