# WGETHEADER  

<PageHeader />

The `WGETHEADER` subroutine allows you retrieve headers sent by the client.

## WGETHEADER Syntax

```
CALL WGETHEADER(HEADERVALUE,HEADERNAME)
```

### Syntax Elements

| Parameter   | Description                               |
| ----------- | ----------------------------------------- |
| HEADERVALUE | This is the returned value of the header. |
| HEADERNAME  | Set to the name of the header you want.   |

## WGETHEADER Example

```
CALL WGETHEADER(TOKEN,"Token")
* TOKEN will have the passed header
```

<PageFooter />
