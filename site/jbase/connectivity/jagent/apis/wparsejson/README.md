# WPARSEJSON

<PageHeader />

**WPARSEJSON** is a simple jSON parsing subroutine.  It has been been replaced by WOBJ.

## Command Syntax

```
CALL WPARSEJSON(JSON,FIELD,VALUE,ERR)
```

### Syntax Elements

| Parameter | Description |
| --- | --- |
| JSON | This is the jSON string. |
| FIELD | The field name you wish to get. |
| VALUE | The returned value |
| ERR | Any returned errors |

#### Examople

```
JSON=\{ "field1":"value1","field2":"value2" }\
CALL WPARSEJSON(JSON,"field1",VALUE,RERR)
* VALUE will equal "value1"
```

### Notes

>This is a very simple parser.  It cannot handle nested objects or arrays.  It is recommended to use WOBJ to parse jSON.

[Back to jAgent APIs](./../README.md)
