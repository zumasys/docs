# TERM

**Created At:** 9/11/2018 12:55:47 PM  
**Updated At:** 12/28/2018 2:08:01 PM  
**Original Doc:** [338989-term](https://docs.jbase.com/46963-utilities/338989-term)  
**Original ID:** 338989  
**Internal:** No  

## Description

The jBASE **TERM** command enables users to specify different terminal types to handle terminal characteristics. The command is as:

```
TERM {type | parameters}
```

where:

- **type** specifies the terminal type. The type must be one of the terminal types defined in the [terminfo database](https://https://static.zumasys.com/jbase/r99/knowledgebase/howto/general/common/CreateTerminfo/index.htm). If you wish to specify a known terminal type, e.g. vt220, as a different name, then this can be achieved by linking the new name, e.g. V, to the terminfo entry for vt220.
- **parameters** are specified as:
  - **tlength** is the terminal length
  - **tdepth** is the terminal display lines per page
  - **plength** is the printer length
  - **pdepth** is the display lines per page

## Note

> An SP-ASSIGN may result in the printer line length and lines per page being reset because of the WIDTH and DEPTH parameters associated with the specified queue's formtype.

An example of use is as:

```
TERM vt220
```

Terminal characteristics for terminfo type vt220 are invoked.

```
TERM 132,,,,,,112,30
```

The terminal line length is set to 132 columns, any paged output to the printer will be formatted into 112 columns and 30 lines per page.

Back to [Utilities](./../utilities)
