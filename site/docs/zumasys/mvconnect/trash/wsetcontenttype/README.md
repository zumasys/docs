# WSETCONTENTTYPE

**Created At:** 6/26/2017 11:42:42 PM  
**Updated At:** 6/27/2017 11:04:57 PM  
**Original Doc:** [261255-wsetcontenttype](https://docs.zumasys.com/36617-trash/261255-wsetcontenttype)  


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
