# WSETHEADER

<PageHeader />

The `WSETHEADER` subroutine allows you to set return headers.

## WSETHEADER Syntax

```
CALL WSETHEADER(HEADERVALUE,HEADERNAME)
```

### Syntax Elements

| Parameter   | Description                                     |
| ----------- | ----------------------------------------------- |
| HEADERVALUE | Set this to what you wish to assign the header. |
| HEADERNAME  | Set to the name of the header you want.         |

## WSETHEADER Example

```
CALL WSETHEADER("111-22-3333","Token")
```

<PageFooter />
