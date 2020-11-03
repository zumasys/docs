# WOBJ

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

The `WOBJ` subroutine is a basic object library for consuming and creating JSON objects.

## WOBJ Syntax

```
CALL WOBJ(OBJECT,ACTION,NODE,VALUE,OPTIONS,RERR)
```

### WOBJ Parameters

| Parameter | Description                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| OBJECT    | Internal representation of a JSON object. Must be passed each time `WOBJ` is called.                         |
| ACTION    | String specifying the action you wish to perform on the JSON object (see [below](#wobj-actions)).            |
| NODE      | Path to a `NODE` in the json object. Elements are separated by `.`. `NULL` is the root `NODE` of the object. |
| VALUE     | Value passed to `SET` actions or returned by `GET` and other actions.                                        |
| OPTIONS   | Options for an action (see [below](#wobj-options)). Separate multiple options with `@AM`.                    |
| RERR      | Returned errors (error level in `RERR<1>`, error message in `RERR<2>`).                                      |

The table below defines the error levels returned in `RERR`.

| Error Level | Description                        |
| ----------- | ---------------------------------- |
| 1           | A warning                          |
| 2           | Indicates a failure                |
| -1          | Indicates the `NODE` is not valid. |

#### WOBJ Actions

| Action      | Description                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FROMSTRING  | Parse a JSON string for use by `WOBJ`. `VALUE` contains the JSON string to parse, and `OBJECT` returns the internal variable.                                  |
| FROMJSON    | Alias for `FROMSTRING` (version 2.0)                                                                                                                           |
| TOSTRING    | Return a JSON string format from the internal variable. The `VALUE` argument contains the returned JSON string.                                                |
| TOJSON      | Alias for `TOSTRING` (Version 2.0)                                                                                                                             |
| GET         | Returns the value of a `NODE` in the JSON object. If the `NODE` contains an object or an array, a JSON string is returned.                                     |
| SET.STRING  | Set the value of a property in the JSON object to a `string`. `VALUE` contains the string.                                                                     |
| SET.NUMBER  | Set the value of a property in the JSON object to a `number`. `VALUE` must contain a valid number.                                                             |
| SET.BOOLEAN | Set the value of a property in the JSON object to a `boolean`. `VALUE` must be `true` or `false`.                                                              |
| SET.NULL    | Sets the value of a property in the JSON object to `NULL`. `VALUE` is not used.                                                                                |
| SET.OBJECT  | Creates an object at specified `NODE`, or changes existing `NODE` to an object. Use this to build nested objects. `VALUE` must be a JSON string of the object. |
| SET.ARRAY   | Creates an array at specified `NODE`, or changes existing `NODE` to an array. Use this to build new arrays. `VALUE` must be a JSON string of the array.        |
| DELETE      | Delete a `NODE` in the JSON object.                                                                                                                            |
| LENGTH      | Return the number of elements in a `NODE`. If a `NODE` contains a simple value, returns `1`. If a `NODE` is not found, or contains no elements, returns `0`.   |
| TYPE        | Return the type of value or object in a `NODE`. Returns `NUMBER`, `STRING`, `BOOLEAN`, `NULL`, `OBJECT`, `ARRAY` or `UNDEFINED`.                               |
| KEYS        | Return a list of keys in a `NODE`. Keys are separated by `@SVM`.                                                                                               |
| VERSION     | Returns the version of `WOBJ`.                                                                                                                                 |

#### WOBJ Options

| Option   | Description                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| PRETTIFY | Use with the `TOSTRING` action to add indentation and new-lines to make output more readable.                                 |
| DEBUG    | Use to display debug messages to the screen.                                                                                  |
| UDO      | **Version 2.0.** `1` - turns on UDO support. `0` - turns off udo support even if `WOBJ.CONFIG` item is set to use UDO.        |
| NATIVE   | **Version 2.0.** This turns off any platform object enhancements such as UDO support.  This overrides the `WOBJ.CONFIG` item. |

#### WOBJ Config File (Version 2.0)

There is now a optional config file to set default options for `WOBJ`.  This is a pick item stored in the `MD`/`VOC` called `WOBJ.CONFIG`.

| Attribute | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| 001       | `P` - Defined as a config item.                                                            |
| 002       | Platform `OBJECT` support.*                                                                |
| 003       | Optional `WOBJ` binary to use in `MVDBTOOLKIT`.  This allows you to use a different WOBJ.* |

> *Regarding Attribute 2, currently the only option is `UDO` to turn on Universe and/or Unidata UDO support.  This only work if the platform supports UDO.  In the future, jBASE objects and QM collections will be added.

> *Regarding Attribute 3, you must use the include `MVDBTOOLKIT.BP MVDBTOOLKIT.WOBJ.CHOOSE.WOBJ` and variable `WOBJ.RTNE` will be set to the proper routine.  You then use `WOBJ` via `CALL WOBJ` vs `CALL WOBJ.RTNE`. This feature is used by the standalone `MVDBTOOLKIT` to use its own `MVDBTOOLKIT.WOBJ` included library.

## Wobj Sample

```
 JSON = \{ "firstname": "Bob", "lastname":"Smit" }\

 PRINT "PARSE JSON"
 CALL WOBJ(OBJ,"FROMSTRING","",JSON,"",RERR)
 PRINT RERR

 PRINT "GET KEYS"
 CALL WOBJ(OBJ,"KEYS","",OBJ.KEYS,"",RERR)
 PRINT RERR

 PRINT OBJ.KEYS

 PRINT "LOOP THRU KEYS"
 FOR X=1 TO DCOUNT(OBJ.KEYS,@SVM)
    THIS.KEY=OBJ.KEYS<1,1,X>
    CALL WOBJ(OBJ,"GET",THIS.KEY,KEY.VALUE,"",RERR)
    PRINT THIS.KEY,KEY.VALUE
 NEXT X

 PRINT "Add an array"
 CALL WOBJ(OBJ,"SET.ARRAY","samplearray","[]","",RERR)
 GOSUB show.json

 PRINT "Create new objects to put in array"
 FOR X=1 TO 5
     CALL WOBJ(SOBJ,"FROMSTRING","","{}","",RERR)
     CALL WOBJ(SOBJ,"SET","objectdesc","SubObject ":X,"",RERR)
     CALL WOBJ(SOBJ,"SET.NUMBER","count",X,"",RERR)
     CALL WOBJ(SOBJ,"TOSTRING","",SOBJ.JSON,"",RERR)
     CALL WOBJ(OBJ,"SET.OBJECT","samplearray[-1]",SOBJ.JSON,"",RERR)
 NEXT X

 GOSUB show.json

 PRINT "Count number of elements in an array"
 CALL WOBJ(OBJ,"LENGTH","samplearray",ARRAY.LENGTH,"",RERR)
 PRINT "Number elements=":ARRAY.LENGTH

 PRINT "Full path to an item"
 CALL WOBJ(OBJ,"GET","samplearray[2].objectdesc",VALUE,"",RERR)
 PRINT "value=":VALUE

 PRINT "Dynamically get values"
 FOR X=1 TO ARRAY.LENGTH
     PRE="samplearray[":X-1:"]"
     CALL WOBJ(OBJ,"GET",PRE:'.objectdesc',VALUE,"",RERR)
     PRINT X,VALUE
     * OR GET THE OBJECT
     CALL WOBJ(OBJ,"GET",PRE,SOBJ.JSON,"",RERR)
     * IT WILL BE JSON
     CALL WOBJ(SOBJ,"FROMSTRING","",SOBJ.JSON,"",RERR)
     CALL WOBJ(SOBJ,"GET","objectdesc",VALUE,"",RERR)
     PRINT X,VALUE
 NEXT X

 PRINT "Set Boolean"
 CALL WOBJ(OBJ,"SET.BOOLEAN","boolean","TRUE","",RERR)
 PRINT "Set Null"
 CALL WOBJ(OBJ,"SET.NULL","nulltest","","",RERR)
 GOSUB show.json

 STOP

 show.json: *
 CALL WOBJ(OBJ,"TOSTRING","",OUT.JSON,"PRETTIFY",RERR)
 PRINT OUT.JSON
 RETURN
 ```
 


<PageFooter />
