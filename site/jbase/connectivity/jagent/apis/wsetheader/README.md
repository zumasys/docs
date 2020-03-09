# WSETHEADER

**Created At:** 6/2/2017 6:00:30 PM  
**Updated At:** 9/16/2018 11:28:28 PM  
**Original Doc:** [wsetheader](https://docs.jbase.com/34473-docs/wsetheader)  
**Original ID:** 257604  
**Internal:** No  

The **WSETHEADER** subroutine allows you to set return headers.

## Command Syntax

```
CALL WSETHEADER(HEADERNAME,HEADERVALUE)
```

### Syntax Elements

The WSETHEADER subroutine expects two strings as input parameters.  The first parameter defines the header name you wish to set and the second parameter assigns the value.

### Example

```
CALL WSETHEADER("Token","111-22-3333")
```

[Back to jAgent APIs](./../README.md)
