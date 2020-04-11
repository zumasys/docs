# Method: $fromfile()

<PageHeader />

## Description

The **$fromfile()** static method creates an object from an operating system file. The file must be in a valid JSON format.

## Syntax

```
classname::$fromfile(source file)
```

**classname** can be any class.

## Arguments

| Argument | Description |
| --- | --- |
| source file | the full or relative path of an operating system file |

## Return value

An object.

If the source file is not in a valid JSON format then no object is created, i.e. nothing is returned.

## Example

```
equ beautify to 5
obj = $jbase::$fromfile("c:\json.txt")
if not(obj->$isobject()) then
    crt "Error -->"
    crt obj->$lasterror()->$tojson(beautify)
    stop
end
crt obj->$tojson(beautify)
```

## Notes

  
<PageFooter />
