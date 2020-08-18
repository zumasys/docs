# WGETINFO

<PageHeader />

The `WGETINFO` subroutine allows you return directly information from `WWW.INFO` common.

## WGETINFO Syntax

```
CALL WGETINFO(POS,VALUE)
```

### Syntax Elements

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| POS       | [WWW.INFO](../www.info/README.md) Dynamic position you wish to get. |
| VALUE     | Returned Value                                                      |

## WGETINFO Example

```
* Dynamically find all Variables passed by client
CALL WGETINFO(25,VAR.NAMES)
NUM.VARS=DCOUNT(VAR.NAMES,@AM)
FOR V=1 TO NUM.VARS
  VAR.NAME=VAR.NAMES<V>
  CALL WGETVAR(VALUE,VAR.NAME)
    PRINT VAR.NAME:"=":VALUE
NEXT V
```

## WGETINFO Notes

See [WWW.INFO](../www.info/README.md) for details on the common.

<PageFooter />
