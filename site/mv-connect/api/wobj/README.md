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

Click on [this link](https://github.com/patrickaaronpayne/demowobj/blob/master/DEMOWOBJ.B) to see a sample program on github.

<PageFooter />
