# WENCODEJSON

**Created At:** 6/27/2017 7:49:15 PM  
**Updated At:** 11/22/2017 12:28:49 PM  
**Original Doc:** [wencodejson](https://docs.jbase.com/34473-docs/wencodejson)  
**Original ID:** 261442  
**Internal:** No  

The **WENCODEJSON** subroutine will encode a string to properly be in a JSON value.

## Command SYntax

```
CALL WENCODEJSON(OPTION,INSTR,OUTSTR)
```

### Syntax Elements

| Parameter | Description |
| --- | --- |
| OPTION | Leave blank.  Placeholder for future features |
| INSTR | The string you wish to encode |
| OUTSTR | The encoded string. |

#### Example

```
CALL WENCODEJSON("",'"',OUTSTR)
* OUTSTR = \u0022   (Encoding for ")
```

#### Notes

>The WENCODEJSON function is primarily used internally by the other subroutines (such as WBUILDJSON and WOBJ), although it can be called independently if you are performing your own string building.

[Back to jAgent APIs](./../README.md)
