# PN708

<PageHeader />

## Description

Case insensitivity issue with CATALOG/DECATALOG of subroutines/functions/methods 

## Previous Release Behavior

In a case-insensitive emulation, attempting to re-CATALOG/DECATALOG a subroutine, function or method in UPPERCASE that was previously CATALOG'd in lowercase (and vice versa) would fail.

For example:

```
[home@zumasys ~]$ export JBCEMULATE=D3
[home@zumasys ~]$ jsh
jsh ~ -->LIST-ITEM BP HELLOWORLD

    HELLOWORLD
001 SUBROUTINE HELLOWORLD
002 PRINT "Hello, world!"
003 RETURN

jsh ~ -->BASIC BP HELLOWORLD
HELLOWORLD
Source file HELLOWORLD compiled successfully
jsh ~ -->CATALOG BP HELLOWORLD
HELLOWORLD
Object HELLOWORLD cataloged successfully
Library /home/danielk/lib/lib0.so.1 rebuild okay
jsh ~ -->catalog bp helloworld
helloworld
The subroutine helloworld is already defined in HELLOWORLD.o
 ** Unable to catalog object helloworld **
jsh ~ -->
```

## Current Release Behavior

```
jsh danielk ~ -->BASIC BP HELLOWORLD
HELLOWORLD
Source file HELLOWORLD compiled successfully
jsh danielk ~ -->CATALOG BP HELLOWORLD
helloworld
Object HELLOWORLD ( changed to helloworld ) cataloged successfully
Library /home/danielk/lib/lib0.so.166 rebuild okay
jsh danielk ~ -->catalog bp helloworld
helloworld
Object helloworld cataloged successfully
Library /home/danielk/lib/lib0.so.167 rebuild okay
jsh danielk ~ -->
```

## Notes

UPPERCASE or MixEdCaSE names are internally changed to lowercase

This behavior is effective for subroutines, functions and methods and is triggered by the Config_EMULATE setting case_insensitive_os_file_ids = true.

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />
