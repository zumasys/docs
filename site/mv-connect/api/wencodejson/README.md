# WENCODEJSON

<PageHeader />

The `WENCODEJSON` subroutine will encode a string to properly be in a JSON value.

## WENCODEJSON Syntax

```
CALL WENCODEJSON(OPTION,INSTR,OUTSTR)
```

### Syntax Elements

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| OPTION    | Leave blank.  Placeholder for future features |
| INSTR     | The string you wish to encode                 |
| OUTSTR    | The encoded string.                           |

## WENCODEJSON Example

```
CALL WENCODEJSON("",'"',OUTSTR)
* OUTSTR = \u0022   (Encoding for ")
```

## WENCODEJSON Notes

The `WENCODEJSON` function is primarily used internally by the other subroutines (such as `WBUILDJSON` and `WOBJ`).  You can although call it yourself if you are doing your own string building.

<PageFooter />
