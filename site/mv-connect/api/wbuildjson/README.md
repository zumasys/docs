# WBUILDJSON

<PageHeader />

> Note: This function has been depreciated and it is recommend you use [WOBJ](../wobj/README.md) instead.

The `WBUILDJSON` is a very simple JSON building subroutine.  It basically handles encoding of your values.  This subroutine has been replaced by [WOBJ](../wobj/README.md).

## WBUILDJSON Syntax

```
CALL WBUILDJSON(JSON,FIELD,VALUE,ERRORS)
```

### Syntax Elements

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| JSON      | This is the JSON string that is being built |
| FIELD     | The field you wish to set                   |
| VALUE     | The value you wish to set the field to.     |
| ERRORS    | Any returned errors.                        |

## WBUILDJSON Example

```
JSON="{"
CALL WBUILDJSON(JSON,"status","ok",RERR)
JSON:="}"
* JSON NOW EQUALS: { "status":"ok" }
```

## WBUILDJSON Notes

This is a very simple function.  In order to build arrays you must manually build the strings.  This function has been replaced with the much more powerful [WOBJ](../wobj/README.md) subroutine.  This function remains for backwards compatibility.

<PageFooter />
