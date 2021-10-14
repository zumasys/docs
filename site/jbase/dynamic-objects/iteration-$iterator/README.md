# Iteration: $iterator

<PageHeader />

## Description

**$iterator** is a constructor for the Iterator class. When an object of this type is created, it allows you to iterate (loop) through all keys and values in an object or array.

## Note

>jBASE BASIC also supports a FOR iterator that can be used to interate a variety of objects and arrays.  
>You can read more about that FOR interator [here](../../jbc/for-iterator/README.md).

## Examples

Iterate through an array:

```
equ beautify to 5  ;* format $tojson() output using 4 spaces for indentation levels
types = new array
types->$append("Space the Final Frontier")    ;* string
types->$append(42)                            ;* integer
types->$append(123.4)                         ;* numeric
types->$setboolean("-1", @true)     ;* append a "boolean"
types->$setboolean("-1", @false)    ;* append a "boolean"
types->$setnull("-1")               ;* append a "null" value
crt types->$tojson(beautify)
iter = new object("$iterator", types)         ;* create the iterator object
nextkey = ""; nextvalue = ""; nexttype = ""   ;* Keeps the compiler from complaining
loop while iter->next(nextkey , nextvalue , nexttype) do
    crt "Key ":dquote(nextkey):" has value ":dquote(nextvalue):" and type ":dquote(nexttype)
repeat
```

Results:

```
[
    "Space the Final Frontier",
    42,
    123.4,
    true,
    false,
    null
]

Key "0" has value "Space the Final Frontier" and type "string"
Key "1" has value "42" and type "integer"
Key "2" has value "123.4" and type "numeric"
Key "3" has value "1" and type "boolean"
Key "4" has value "0" and type "boolean"
Key "5" has value "" and type "null"
```

Here is the equivalent of iterating through an object, using an alternate way to create an iterator object:

```
equ beautify to 5 ;* format $tojson() output using 4 spaces for indentation levels
types = new object
types->star_trek = "Space the Final Frontier"
types->the_answer = 42
types->some_number = 123.4
types->$setboolean("true", @true)
types->$setboolean("false", @false)
types->$setnull("nothing_there")
crt types->$tojson(beautify)
iter = types->$iterator() ;* create the iterator object
nextkey = ""; nextvalue = ""; nexttype = ""   ;* Keeps the compiler from complaining
loop while iter->next(nextkey , nextvalue , nexttype) do
    crt "Property ":dquote(nextkey):" has value ":dquote(nextvalue):" and type ":dquote(nexttype)
repeat
```

Results:

```
{
    "star_trek":"Space the Final Frontier",
    "the_answer":42,
    "some_number":123.4,
    "true":true,
    "false":false,
    "nothing_there":null
}

Property "star_trek" has value "Space the Final Frontier" and type "string"
Property "the_answer" has value "42" and type "integer"
Property "some_number" has value "123.4" and type "numeric"
Property "true" has value "1" and type "boolean"
Property "false" has value "0" and type "boolean"
Property "nothing_there" has value "" and type "null"
```

## Notes

An alternative way to loop through an array and produce the same results as the array example above:

```
equ beautify to 5
types = new array
types->$append("Space the Final Frontier")
types->$append(42)
types->$append(123.4 + 0)
types->$setboolean("-1", @true)
types->$setboolean("-1", @false)
types->$setnull("-1")
crt types->$tojson(beautify)
for i = 0 to types->$size()-1
    crt "Key ":dquote(i):" has value ":dquote(types->@i):" and type ":dquote(types->$valuetype(i))
next i
```

Back to [Dynamic Objects - Overview](./../README.md)
  
<PageFooter />
