# WSETCONTENTTYPE

<PageHeader />

The `WSETCONTENTTYPE` subroutine sets the `Content-Type` header.  This is a alternative to using `WSETHEADER` subroutine.

## WSETCONTENTTYPE Syntax

```
CALL WSETCONTENTTYPE(CONTENTTYPE)
```

### Syntax Elements

| Parameter   | Description                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| CONTENTTYPE | Pass in what you want the content type to be. This will set the header `Content-Type`. |

## WSETCONTENTTYPE Example

```
CALL WSETCONTENTTYPE("application/json")
```

## WSETCONTENTTYPE Notes

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type "Mozilla documentation") to see a list of valid Content Types.

<PageFooter />
