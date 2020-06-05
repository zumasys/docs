# jEDI Development Kit Installation

<PageHeader />

## Overview

At the time of writing the current jEDIDK installation packages consist solely of a compressed file with directories and files. The directories are:

- bin
- lib
- jEDIparams
- Templates
- Scripts
- CSV
- Documentation

Additionally a sample jEDIdrivers.ini is provided to help get started with the configuration.  

The bin and lib can be extracted on top of existing directories but specifically they must be recognized by the PATH, JBCOBJECTLIST and (depending on the operating system) LIBPATH / SHLIB_PATH / LD_LIBRARY_PATH.  

In the case of Windows it is often necessary to include the lib directory in the PATH.  

The other directories can usually be found by the jEDIDK based on settings in jEDIdrivers.ini but specifically the Scripts and Templates should be in the same location.  

## License Key Request and Installation  

The jEDI Driver Kit has its own license key requirement. To request a license key you must run jEDILicRequest on the machine requiring the license. This will generate a key and generated date which should be relayed to your sales or support contact or emailed to licenses@jbase.com with a subject of "jEDI Development Kit license request".  

A license key will be generated from that and should be installed thus:  

```
jEDILicInstall <license_code>
```

Back to [jEDIJDK](./../README.md)

<PageFooter />
