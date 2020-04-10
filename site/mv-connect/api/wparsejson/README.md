# WPARSEJSON

<PageHeader />

The WPARSEJSON is a simple jSON parsing subroutine.  It has been been replaced with WOBJ.

### COMMAND SYNTAX

```
CALL WPARSEJSON(JSON,FIELD,VALUE,ERR)
```

### SYNTAX ELEMENTS


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| JSON | This is the jSON string. |
| FIELD | The field name you wish to get. |
| VALUE | The returned value |
| ERR | Any returned errors |


#### EXAMPLE

```
JSON=\{ "field1":"value1","field2":"value2" }\
CALL WPARSEJSON(JSON,"field1",VALUE,RERR)
* VALUE will equal "value1"
```

### NOTES

This is a very simple parser.  It cannot handle nested objects or arrays.  It is better to use WOBJ to parse jSON.

  
<PageFooter />
