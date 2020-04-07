# WSEND

<PageHeader />

The **WSEND** subroutines send body data back to the client, usually in HTML or JSON.

## Command Syntax

```
CALL WSEND(DATATOSEND)
```

### Syntx Elements

The WSEND subroutine expects a string as an input parameter.  You can call this program multiple times during a Web Call.

### Example

```
CALL WSEND("Hello World")
```

[Back to jAgent APIs](./../README.md)
