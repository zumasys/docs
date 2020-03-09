# WSETCONTENTTYPE

**Created At:** 6/2/2017 5:43:48 PM  
**Updated At:** 11/21/2017 3:23:21 AM  
**Original Doc:** [257603-wsetcontenttype](https://docs.jbase.com/34473-docs/257603-wsetcontenttype)  
**Original ID:** 257603  
**Internal:** No  

The **WSETCONTENTTYPE** subroutine sets the Content-Type header.  This is a alternative to using WSETHEADER subroutine.

## Command Syntax

```
CALL WSETCONTENTTYPE(CONTENTTYPE)
```

### Syntax Elements

The WSETCONTENTTYPE subroutine expects a string parameter argument. This will set the response header Content-Type. No validation is performed for content types.

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type "Mozilla documentation") to see a list of valid Content Types

### Example

```
CALL WSETCONTENTTYPE("application/json")
```

[Back to jAgent APIs](./../README.md)