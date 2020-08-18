# WPARSEJSON

<PageHeader />

> Note: This function has been depreciated and it is recommend you use [WOBJ](../wobj/README.md) instead.

The `WPARSEJSON` is a simple JSON parsing subroutine.  It has been been replaced with [WOBJ](../wobj/README.md).

## WPARSEJSON Syntax

```
CALL WPARSEJSON(JSON,FIELD,VALUE,ERR)
```

### Syntax Elements

| Parameter | Description                     |
| --------- | ------------------------------- |
| JSON      | This is the JSON string.        |
| FIELD     | The field name you wish to get. |
| VALUE     | The returned value              |
| ERR       | Any returned errors             |

## WPARSEJSON Example

```
JSON=\{ "field1":"value1","field2":"value2" }\
CALL WPARSEJSON(JSON,"field1",VALUE,RERR)
* VALUE will equal "value1"
```

## WPARSEJSON Notes

This is a very simple parser.  It cannot handle nested objects or arrays.  It is better to use [WOBJ](../wobj/README.md) to parse JSON.

<PageFooter />
