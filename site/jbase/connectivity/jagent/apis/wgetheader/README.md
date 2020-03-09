# WGETHEADER

**Created At:** 6/2/2017 6:21:31 PM  
**Updated At:** 11/27/2017 11:19:11 PM  
**Original Doc:** [wgetheader](https://docs.jbase.com/34473-docs/wgetheader)  
**Original ID:** 257607  
**Internal:** No  

The **WGETHEADER** subroutine allows you to retrieve sent headers.

## Command Syntax

```
CALL WGETHEADER(HEADERVALUE,HEADERNAME)
```

### Syntax Elements

The WGETHEADER subroutine expects HEADERNAME to be sent and will return HEADERVALUE if found.

### Example

```
CALL WGETHEADER(REQESTMETHOD,"REQUEST_METHOD")
```

### Notes

>The headers sent from the connector are determined by the connector config file.  This is to protect from Header Injection attacks. If you need additional headers, refer to your connector config file and add the header.
>
>You can also get a list of supplied headers by calling WGETOPTIONS with a parameter of 34.

[Back to jAgent APIs](./../README.md)
