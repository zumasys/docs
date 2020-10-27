# PN5_50524

<PageHeader />

## Description

Spooler: Update help page for the Windows lp command.

## Previous Release Behavior

```
usage: lp [-flnz ] [-d Device ] [ file ... ]
        -d<Device>  print to Windows print queue <Device>
        -f  suppress addition of trailing FormFeed
        -g  remove any leading FormFeed
        -h<File>    print the header file <File>
        -j<Description>  Description displayed in Windows Printer properties
        -l  suppress addition of Line Feed after FormFeed
        -n  suppress CR -> CRLF translation
        -r  send reset to printer
        if no device is specified then the default printer is used
```

## Current Release Behavior

```
usage: lp {-flnz} {-d Device} {file ... }
        -d<Device>  print to Windows print queue <Device>
        -f  suppress addition of trailing FormFeed
        -g  remove any leading FormFeed
        -h<File>  print the header file <File>
        -j<File>  specify the input file to use for printing, default is [stdin]
        -l  suppress addition of Line Feed after FormFeed
        -n  suppress CR -> CRLF translation
        -r  send reset to printer
        -z  debug mode, creates JBCRELEASEDIR\tmp\jlp.log when JBCJLPDEBUG=1
        If no device is specified then the default printer is used.
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
