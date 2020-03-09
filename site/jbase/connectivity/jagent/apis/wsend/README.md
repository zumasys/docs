# WSEND

**Created At:** 6/2/2017 6:28:25 PM  
**Updated At:** 11/20/2017 9:01:17 PM  
**Original Doc:** [wsend](https://docs.jbase.com/34473-docs/wsend)  
**Original ID:** 257608  
**Internal:** No  

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
