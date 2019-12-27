# WSETCONTENTTYPE

**Created At:** 6/27/2017 7:58:14 PM  
**Updated At:** 11/23/2017 8:28:00 AM  
**Original Doc:** [wsetcontenttype](https://docs.zumasys.com/36566-mv-connect-api/wsetcontenttype)  
**Original ID:** 261443  
**Internal:** No  


The WSETCONTENTTYPE subroutine sets the Content-Type header.  This is a alternative to using WSETHEADER subroutine.

#### COMMAND SYNTAX

```
CALL WSETCONTENTTYPE(CONTENTTYPE)
```

#### SYNTAX ELEMENTS


| Parameter | Description |
| --- | --- |
| CONTENTTYPE | Pass in what you want the content type to be. This will set the header Content-Type. |




#### EXAMPLE

```
CALL WSETCONTENTTYPE("application/json")
```

#### NOTES

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type "Mozilla documentation") to see a list of valid Content Types.
