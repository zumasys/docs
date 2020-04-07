# WENCODEJSON

<PageHeader />

The WENCODEJSON subroutine will encode a string to properly be in a JSON value.

### COMMAND SYNTAX

```
CALL WENCODEJSON(OPTION,INSTR,OUTSTR)
```

### SYNTAX ELEMENTS


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| OPTION | Leave blank.  Placeholder for future features |
| INSTR | The string you wish to encode |
| OUTSTR | The encoded string. |


#### EXAMPLE

```
CALL WENCODEJSON("",'"',OUTSTR)
* OUTSTR = \u0022   (Encoding for ")
```

#### NOTES

The WENCODEJSON function is primarily used internally by the other subroutines (such as WBUILDJSON AND WOBJ).  You can although call it yourself if you are doing your own string building.
