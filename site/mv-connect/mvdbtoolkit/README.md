# MVDBToolkit

MVDBToolkit contains a series of functions to assist in cross platform MV development.  It wraps platform specific functions with toolkit specific functions.  Platform differences are handled via inline includes. 

## Table of Contents

| Function                                                      | Description                       |
| -----------------------------------------                     | --------------------------------- |
| [MVMAKE](./mvmake/README.md)                                  | Install new Package               |
| [MVDBTOOLKIT.CONFIG](./mvdbtoolkit-config/README.md)          | Configuration Tool                |
| [MVDBTOOLKIT.TEST](./mvdbtoolkit-test/README.md)              | Test/QC program                   |
| [MVDBTOOLKIT.EXECUTE](./mvdbtoolkit-execute/README.md)        | Execute O/S commands              |
| [MVDBTOOLKIT.WFILEIO](./mvdbtoolkit-wfileio/README.md)        | Read/Write/Delete O/S commands    |
| [MVDBTOOLKIT.WGETENV](./mvdbtoolkit-wgetenv/README.md)        | Get O/S environment Variables     |
| [MVDBTOOLKIT.WPLATFORM](./mvdbtoolkit-wplatform/README.md)    | Get Config information            |
| [MVDBTOOLKIT.SWAP](./mvdbtoolkit-swap/README.md)              | Cross platform SWAP statement     |

## Config Entry

A JSON configuration record is stored in the dictionary of MVDBTOOLKIT.BP called MV.PLATFORM.JSON.  This item is initially populated by MVDBTOOLKIT.CONFIG.  If you wish to make changes you can edit the item directly.

```json
{
  "platform": "LINUX",      /* WINDOWS or LINUX */
  "mvtype": "D3",           /* MV type.  D3, UNIVERSE, UNIDATA, JBASE, QM */
  "filedelim": "/",         /* Platform filesystem delimiter / or \ */
  "tmpdir": "/tmp",         /* Temp directory to use */
  "curllocation": ""        /* curl binary to use */
  }
  ```
