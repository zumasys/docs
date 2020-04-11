# Method: $merge() arrays

<PageHeader />

## Description

The **$merge()** method combines (concatenates) one array with another array.

## Syntax

```
array2 = $merge(array1)
```

## 
Return value

A merged (concatenated) array.

## Examples

```
array1 = new array
array1->$append("grey")
array1->$append("red")
array2 = new array
array2->$append("green")
array2->$append("red")
colors = array2->$merge(array1)
crt colors
```

Result:

```
["green","red","grey","red"]
```

## Notes

Arrays can only be merged into other arrays, you cannot merge an object with an array (and vice versa). Attempting to do so will produce unpredictable results.

Arrays can have duplicate entries. If it is necessary to remove duplicate entries from a merged set of arrays then you will need to code this as follows:

```
for i = 0 to array2->$size() - 1
    val = array2->@i
    rc = array1->$locate(val)
    if rc lt 0 then array1->$append(val)
next i
```

  
<PageFooter />
