# Method: $clear()

<PageHeader />

## Description

The **$global()** method allows you to define methods that can be used across all classes.

## Example

Here is a global method that can be used to either return the number of properties in an object or the length of a string.

```
method $global::length()
    if this->$isobject() then
        return this->$size()
    end else
        return len(this)
    end
end method
```

It can be used like this:

```
obj = new object()
obj->one = "1"
obj->two = "2"
obj->three = "3"
crt "The number of properties is ":obj->length()
crt "The length of the JSON string is ":obj->length(obj->$tojson())
```

Result:

```
The number of properties is 3
The length of the JSON string is 33
```
  
<PageFooter />
