# WOBJ

**Created At:** 3/26/2018 10:01:16 PM  
**Updated At:** 4/19/2018 8:58:41 AM  
**Original Doc:** [wobj](https://docs.jbase.com/34473-docs/wobj)  
**Original ID:** 305297  
**Internal:** No  

The **WOBJ** subroutine is a basic object library for consuming and creating JSONobjects.

## Command Syntax

```
CALL WOBJ(OBJECT,ACTION,NODE,VALUE,OPTIONS,RERR)
```

### Syntax Elements

| Parameter | Description |
| --- | --- |
| OBJECT | Internal representation of a JSON object. Must be passed each time WOBJ is called. |
| ACTION | String specifying the action you wish to perform on the json object (see below) |
| NODE | Path to a node in the json object. Elements are separated by dots , standard notation for javascript objects. Null is the root node of the object. |
| VALUE | Value passed to SET actions or returned by GET and other actions. |
| OPTIONS | Options for an action (see below). Separate multiple options with @AM. |
| RERR | Returned errors (error level in RERR&lt;1&gt;, error message in RERR&lt;2&gt;). Error level 1 is a warning; level 2 indicates a failure; level -1 indicates the NODE is not valid. |

### Action

| Action | Description |
| --- | --- |
| FROMSTRING | Parse a JSON string into the internal representation used by WOBJ. The VALUE argument contains the JSON string to parse, and the OBJECT argument returns the internal representation of that object. |
| TOSTRING | Return a JSON string format from the internal object representation. The VALUE argument contains the returned JSON string. |
| GET | Returns the value of a node in the JSON object. If the node contains an object or an array, a JSON string representation of the node is returned. |
| SET.STRING | Set the value of a property in the JSON object to a string. VALUE contains the string. |
| SET.NUMBER | Set the value of a property in the JSON object to a number. VALUE must contain a valid number. |
| SET.BOOLEAN | Set the value of a property in the JSON object to a boolean. VALUE must be 'true' or 'false'. |
| SET.NULL | Sets the value of a property in the JSON object to null. VALUE is not used. |
| SET.OBJECT | Creates an object at specified node, or changes existing node to an object. Use this to build nested object structures. VALUE must be a JSON string representation of the object. |
| SET.ARRAY | Creates an array at specified node, or changes existing node to an array. Use this to build new arrays. VALUE must be a JSON string representation of the array. |
| DELETE | Delete a node in the JSON object. |
| LENGTH | Return the number of elements in a node. If a node contains a simple value, returns 1. If a node is not found, or contains no elements, returns 0. |
| TYPE | Return the type of value or object in a node. Returns NUMBER, STRING, BOOLEAN, NULL, OBJECT, ARRAY or UNDEFINED. |
| KEYS | Return a list of keys in a node. Keys are separated by sub-value-marks. |
| VERSION | Returns the version of WOBJ. Current version is 1.1. |

### Options

| Option | Description |
| --- | --- |
| PRETTIFY | Use with the TOSTRING action to add indentation and new-lines to make output more readable. |
| DEBUG | Use to display debug messages to the screen. |

[Back to jAgent APIs](./../README.md)
