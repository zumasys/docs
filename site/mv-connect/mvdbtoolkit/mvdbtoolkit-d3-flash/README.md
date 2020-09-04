# MVDBTOOLKIT.D3.FLASH
<PageHeader />

MVDBTOOLKIT.D3.FLASH will let you set the flash compile option for d3.  When this is true the package installer will add a (O to all compile/basic statements when installing packages.

## Usage

Command

MVDBTOOLKIT.D3.FLASH

Once you have turned this on you can update MVConnect to re-install MVDB and it will re-compile everything as flash.

```
MVDB-STAGING-GIT:MVDBTOOLKIT.PACKAGE.INSTALLER
Packages url: https://raw.githubusercontent.com/zumasys/MVConnect/master/package
s.json
Getting package list...200 OK
Number packages: 3
   1 mvdb 2.0.0
     Primary MVConnect/MVDBToolkit package.
   2 mvdbtoolkit 2.0.0
     MVDBTOOLKIT Cross Platform Tools
   3 mvsendgrid 1.0.0
     SendGrid API to send Emails
Package # to install, return for more, q to quit ?1
```

You can verify FLASH is on with wresttest.  This is returning system(36).  Zero means non flash while any positive number is the flash level.

```
"d3flash": "2"
```
</PageFooter>
