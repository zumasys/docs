The WOBJ subroutine is a basic object library for consuming and creating json objects.

#### COMMAND SYNTAX
```
CALL WOBJ(OBJECT,ACTION,NODE,VALUE,OPTIONS,RERR)
```

#### SYNTAX ELEMENTS
<table>
    <thead>
        <tr>
            <th width=25%>Parameter
            </th>
            <th>Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td >OBJECT
            </td>
            <td>Internal representation of a json object. Must be passed each time WOBJ is
                called.
            </td>
        </tr>
        <tr>
            <td >ACTION
            </td>
            <td>String specifying the action you wish to perform on the json object (see below)
            </td>
        </tr>
        <tr>
            <td >NODE
            </td>
            <td>Path to a node in the json object. Elements are separated by dots , standard
                notation for javascript objects. Null is the root node of the object.
            </td>
        </tr>
        <tr>
            <td >VALUE
            </td>
            <td>Value passed to SET actions or returned by GET and other actions.
            </td>
        </tr>
        <tr>
            <td >OPTIONS
            </td>
            <td>Options for an action (see below). Separate multiple options with @AM.
            </td>
        </tr>
        <tr>
            <td >RERR
            </td>
            <td>Returned errors (error level in RERR<1>, error message in RERR<2>). Error level
                        1 is a warning; level 2 indicates a failure; level -1 indicates the NODE is not valid.
            </td>
        </tr>
    </tbody>
</table>

#### ACTION
<table>
    <thead>
        <tr>
            <th width=25%>Action
            </th>
            <th>Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>FROMSTRING
            </td>
            <td>Parse a json string into the internal representation used by WOBJ. The VALUE
                argument contains the json string to parse, and the OBJECT argument returns the internal representation
                of that object.
            </td>
        </tr>
        <tr>
            <td>TOSTRING
            </td>
            <td>Return a json string format from the internal object representation. The VALUE
                argument contains the returned json string.
            </td>
        </tr>
        <tr>
            <td>GET
            </td>
            <td>Returns the value of a node in the json object. If the node contains an object
                or an array, a json string representation of the node is returned.
            </td>
        </tr>
        <tr>
            <td>SET.STRING
            </td>
            <td>Set the value of a property in the json object to a string. VALUE contains the
                string.
            </td>
        </tr>
        <tr>
            <td>SET.NUMBER
            </td>
            <td>Set the value of a property in the json object to a number. VALUE must contain
                a valid number.
            </td>
        </tr>
        <tr>
            <td>SET.BOOLEAN
            </td>
            <td>Set the value of a property in the json object to a boolean. VALUE must be
                'true' or 'false'.
            </td>
        </tr>
        <tr>
            <td>SET.NULL
            </td>
            <td>Sets the value of a property in the json object to null. VALUE is not used.
            </td>
        </tr>
        <tr>
            <td>SET.OBJECT
            </td>
            <td>Creates an object at specified node, or changes existing node to an object. Use
                this to build nested object structures. VALUE must be a json string representation of the object.
            </td>
        </tr>
        <tr>
            <td>SET.ARRAY
            </td>
            <td>Creates an array at specified node, or changes existing node to an array. Use this to build new arrays.
                VALUE must be a json string representation of the array.
            </td>
        </tr>
        <tr>
            <td>DELETE
            </td>
            <td>Delete a node in the json object.
            </td>
        </tr>
        <tr>
            <td>LENGTH
            </td>
            <td>Return the number of elements in a node. If a node contains a simple value,
                returns 1\. If a node is not found, or contains no elements, returns 0.
            </td>
        </tr>
        <tr>
            <td>TYPE
            </td>
            <td>Return the type of value or object in a node. Returns NUMBER, STRING, BOOLEAN,
                NULL, OBJECT, ARRAY or UNDEFINED.
            </td>
        </tr>
        <tr>
            <td>KEYS
            </td>
            <td>Return a list of keys in a node. Keys are separated by sub-value-marks.
            </td>
        </tr>
        <tr>
            <td>VERSION
            </td>
            <td>Returns the version of WOBJ. Current version is 1.1.
            </td>
        </tr>
    </tbody>
</table>

#### OPTIONS
<table>
    <thead>
        <tr>
            <th width=25%>Option
            </th>
            <th>Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PRETTIFY
            </td>
            <td>Use with the TOSTRING action to add indentation and new-lines to make output
                more readable.
            </td>
        </tr>
        <tr>
            <td>DEBUG
            </td>
            <td>Use to display debug messages to the screen.
            </td>
        </tr>
    </tbody>
</table>

Click on [this link](https://github.com/patrickaaronpayne/demowobj/blob/master/DEMOWOBJ.B) to see a sample program on
github.