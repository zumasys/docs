# WOBJ

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

The WOBJ subroutine is a basic object library for consuming and creating json objects.

## Command Syntax

```
CALL WOBJ(OBJECT,ACTION,NODE,VALUE,OPTIONS,RERR)
```

### Syntax Elements

| Parameter | Description |
| --- | --- |
| OBJECT | Internal representation of a json object. Must be passed each time WOBJ is called. |
| ACTION | String specifying the action you wish to perform on the json object (see below) |
| NODE | Path to a node in the json object. Elements are separated by dots , standard notation for javascript objects. Null is the root node of the object. |
| VALUE | Value passed to SET actions or returned by GET and other actions. |
| OPTIONS | Options for an action (see below). Separate multiple options with @AM. |
| RERR | Returned errors (error level in RERR&lt;1&gt;, error message in RERR&lt;2&gt;). Error level 1 is a warning; level 2 indicates a failure; level -1 indicates the NODE is not valid. |

#### Action

| Action | Description |
| --- | --- |
| FROMSTRING | Parse a json string into the internal representation used by WOBJ. The VALUE argument contains the json string to parse, and the OBJECT argument returns the internal representation of that object. |
| FROMJSON       | Alias for FROMSTRING (version 2.0) |
| TOSTRING | Return a json string format from the internal object representation. The VALUE argument contains the returned json string. |
| TOJSON       | Alias for TOSTRING (Version 2.0) |
| GET | Returns the value of a node in the json object. If the node contains an object or an array, a json string representation of the node is returned. |
| SET.STRING | Set the value of a property in the json object to a string. VALUE contains the string. |
| SET.NUMBER | Set the value of a property in the json object to a number. VALUE must contain a valid number. |
| SET.BOOLEAN | Set the value of a property in the json object to a boolean. VALUE must be 'true' or 'false'. |
| SET.NULL | Sets the value of a property in the json object to null. VALUE is not used. |
| SET.OBJECT | Creates an object at specified node, or changes existing node to an object. Use this to build nested object structures. VALUE must be a json string representation of the object. |
| SET.ARRAY | Creates an array at specified node, or changes existing node to an array. Use this to build new arrays. VALUE must be a json string representation of the array. |
| DELETE | Delete a node in the json object. |
| LENGTH | Return the number of elements in a node. If a node contains a simple value, returns 1. If a node is not found, or contains no elements, returns 0. |
| TYPE | Return the type of value or object in a node. Returns NUMBER, STRING, BOOLEAN, NULL, OBJECT, ARRAY or UNDEFINED. |
| KEYS | Return a list of keys in a node. Keys are separated by sub-value-marks. |
| VERSION | Returns the version of WOBJ. Current version is 1.1. |

#### Options

| Option | Description |
| --- | --- |
| PRETTIFY | Use with the TOSTRING action to add indentation and new-lines to make output more readable. |
| DEBUG | Use to display debug messages to the screen. |
| UDO       | Version 2.0.  UDO=1 turns on UDO support.  UDO=0 turn off udo support even if WOBJ.CONFIG item is set to use UDO. |
| NATIVE    | Version 2.0.  This turns off any platform object enhancements such as UDO support.  This overrides WOBJ.CONFIG item |

#### Config file (Version 2.0)

There is now a optional config file to set default options for WOBJ.  This is a pick item stored in the MD/VOC called WOBJ.CONFIG.

| Attribute | Description                                                    |
| --------- | -------------------------------------------------------------- |
|     1     | P - Defined as a config item.                                  |
|     2     | Platform OBJECT support.  Currently only option is UDO to turn on Universe and/or Unidata UDO support.  This only work if the platform supports UDO.  In the future, jBASE objects and QM collections will be added. |
|     3     | Optional WOBJ binary to use in MVDBTOOLKIT.  This allows you to use a different WOBJ.  You must use the include MVDBTOOLKIT.BP MVDBTOOLKIT.WOBJ.CHOOSE.WOBJ and variable WOBJ.RTNE will be set to the proper routine.  You then use wobj via CALL WOBJ vs CALL WOBJ.RTNE. This feature is used by the standalone MVDBTOOLKIT to use it's own MVDBTOOLKIT.WOBJ included library |

Click on [this link](https://github.com/patrickaaronpayne/demowobj/blob/master/DEMOWOBJ.B) to see a sample program on github.

<PageFooter />
