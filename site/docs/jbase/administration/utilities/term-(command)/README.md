# TERM (Command)

**Created At:** 12/28/2018 8:52:29 AM  
**Updated At:** 12/28/2018 9:01:24 AM  
**Original Doc:** [term-command](https://docs.jbase.com/46963-utilities/term-command)  
**Original ID:** 354672  
**Internal:** No  


The **TERM**command enables users to specify different terminal types to handle terminal characteristics.



### COMMAND SYNTAX

**TERM {type | parameters}**



### SYNTAX ELEMENTS

**type** specifies the terminal type. The type must be one of the terminal types defined in the [terminfo database](https://https://static.zumasys.com/jbase/r99/knowledgebase/howto/general/common/CreateTerminfo/index.htm). If you wish to specify a known terminal type, e.g. vt220, as a different name, then this can be achieved by linking the new name, e.g. V, to the terminfo entry for vt220.

**parameters** are specified as follows:

tlength, tdepth, reserved, reserved, reserved, reserved, plength, pdepth.

where:


| <!----> | <!----> |
| --- | --- |
| tlength<br> | terminal line length<br> |
| tdepth<br> | terminal display lines per page<br> |
| plength<br> | printer line length<br> |
| pdepth<br> | printer display lines per page<br> |
| reserved<br> | reserved for future use<br> |




### NOTES

An [SP-ASSIGN](./../../spooler/sp-assign) may result in the printer line length and lines per page being reset because of the WIDTH and DEPTH parameters associated with the specified queue's [formtype](./../../spooler/sp-type).



### EXAMPLE

```
TERM vt220
```

Terminal characteristics for terminfo type vt220 are envoked.



```
TERM 132,,,,,,112,30
```

The terminal line length is set to 132 columns, any paged output to the printer will be formatted into 112 columns and 30 lines per page.

* * *
