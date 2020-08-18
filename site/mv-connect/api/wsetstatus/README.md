# WSETSTATUS

<PageHeader />

The `WSETSTATUS` subroutine allows you to modify the response code.

## WSETSTATUS Syntax

```
CALL WSETSTATUS(CODE)
```

### Syntax Elements

| Parameter | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| CODE      | Set to the response code you wish to return.  Default is `200` (Success) |

## WSETSTATUS Example

```
CALL WSETSTATUS(405); * Method not allowed
```

## WSETSTATUS Notes

See [link](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for list of codes

<PageFooter />
