# WSETSTATUS

<PageHeader />

The WSETSTATUS subroutine allows you to modify the response code.

## Command Syntax

```
CALL WSETSTATUS(CODE)
```

### Syntax Elements


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| CODE | Set to the response code you wish to return.  Default is 200 (Success) |

### Example

```
CALL WSETSTATUS(405); * Method not allowed
```

### Notes

See [link](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for list of codes

<PageFooter />
