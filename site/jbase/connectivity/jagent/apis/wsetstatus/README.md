# WSETSTATUS

<PageHeader />

The **WSETSTATUS** subroutine allows you to modify the response code.

## Command Syntax

```
CALL WSETSTATUS(STATUSCODE)
```

### Syntax Elements

The WSETSTATUS subroutine expects a numeric response code. No validation is performed on the status code.  The default code is a 200 (Success).

### Example

```
CALL WSETSTATUS(405);*Method not allowed
```

### Notes

>See [link](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for list of valid codes

[Back to jAgent APIs](./../README.md)
