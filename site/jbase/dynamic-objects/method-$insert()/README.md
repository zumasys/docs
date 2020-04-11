# Method: $insert()

<PageHeader />

## Description

The **$insert()** method inserts a value before a specified position in an array.

## Syntax

```
arr->$insert(value, position) 
```

## Arguments

| Argument | Description |
| --- | --- |
| value | the value to insert |
| position | the relative position, from the beginning of the array, to insert the value. |

## Return values

The current object

## Examples

```
arr = new array
arr->0 = "greg"
arr->1 = "patrick"
arr->2 = "daniel"
*
* Insert a new value at the very start of the array
arr->$prepend("At the start of array")
*
* Insert a value at the end of the array
arr->$append("At the end of the array")
*
* At the moment "greg" is at position [1] (from 0) and "patrick" is
* at position [2]. Insert "Ian" between them i.e. before "2".
arr->$insert("Ian" , 2)
*
* Check it worked.
crt arr->$tojson(5)
```

Results:

```
[
    "At the start of array",
    "greg",
    "Ian",
    "patrick",
    "daniel",
    "At the end of the array"
]
```

## Notes

Arrays are zero-based, so the first element is at position 0, the second at position 1, and so on.

If **position** &lt;= 0 then value is inserted at the beginning of the array.

See also [$delete()](./../method-$delete%28%29)

  
<PageFooter />
