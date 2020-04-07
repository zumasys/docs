# WOBJ

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

The WOBJ subroutine is a basic object library for consuming and creating json objects.

#### **COMMAND SYNTAX**

```
CALL WOBJ(OBJECT,ACTION,NODE,VALUE,OPTIONS,RERR)
```

#### **SYNTAX ELEMENTS**


| Parameter<br> | Description<br> |
| --- | --- |
| OBJECT<br> | Internal representation of a json object. Must be passed each time WOBJ is called.<br> |
| ACTION<br> | String specifying the action you wish to perform on the json object (see below)<br> |
| NODE<br> | Path to a node in the json object. Elements are separated by dots , standard notation for javascript objects. Null is the root node of the object.<br> |
| VALUE<br> | Value passed to SET actions or returned by GET and other actions.<br> |
| OPTIONS<br> | Options for an action (see below). Separate multiple options with @AM.<br> |
| RERR<br> | Returned errors (error level in RERR&lt;1&gt;, error message in RERR&lt;2&gt;). Error level 1 is a warning; level 2 indicates a failure; level -1 indicates the NODE is not valid.<br> |


#### ACTION


| Action<br> | Description<br> |
| --- | --- |
| FROMSTRING<br> | Parse a json string into the internal representation used by WOBJ. The VALUE argument contains the json string to parse, and the OBJECT argument returns the internal representation of that object.<br> |
| TOSTRING<br> | Return a json string format from the internal object representation. The VALUE argument contains the returned json string.<br> |
| GET<br> | Returns the value of a node in the json object. If the node contains an object or an array, a json string representation of the node is returned.<br> |
| SET.STRING<br> | Set the value of a property in the json object to a string. VALUE contains the string.<br> |
| SET.NUMBER<br> | Set the value of a property in the json object to a number. VALUE must contain a valid number.<br> |
| SET.BOOLEAN<br> | Set the value of a property in the json object to a boolean. VALUE must be 'true' or 'false'.<br> |
| SET.NULL<br> | Sets the value of a property in the json object to null. VALUE is not used.<br> |
| SET.OBJECT<br> | Creates an object at specified node, or changes existing node to an object. Use this to build nested object structures. VALUE must be a json string representation of the object.<br> |
| SET.ARRAY<br> | Creates an array at specified node, or changes existing node to an array. Use this to build new arrays. VALUE must be a json string representation of the array.<br> |
| DELETE<br> | Delete a node in the json object.<br> |
| LENGTH<br> | Return the number of elements in a node. If a node contains a simple value, returns 1. If a node is not found, or contains no elements, returns 0.<br> |
| TYPE<br> | Return the type of value or object in a node. Returns NUMBER, STRING, BOOLEAN, NULL, OBJECT, ARRAY or UNDEFINED.<br> |
| KEYS<br> | Return a list of keys in a node. Keys are separated by sub-value-marks.<br> |
| VERSION<br> | Returns the version of WOBJ. Current version is 1.1.<br> |


#### OPTIONS


| Option<br> | Description<br> |
| --- | --- |
| PRETTIFY<br> | Use with the TOSTRING action to add indentation and new-lines to make output more readable.<br> |
| DEBUG<br> | Use to display debug messages to the screen.<br> |


Click on [this link](https://github.com/patrickaaronpayne/demowobj/blob/master/DEMOWOBJ.B) to see a sample program on github.






