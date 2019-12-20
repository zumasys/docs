# Method: $lasterror()

**Created At:** 2/16/2018 7:47:17 AM  
**Updated At:** 3/1/2018 2:30:47 PM  
**Original Doc:** [method-lasterror](https://docs.jbase.com/42948-dynamic-objects/method-lasterror)  


## Description

The **$lasterror** method returns an object with the results of a **$fromjson()** method call, and since it is an object its properties can be accessed.



## Syntax

See Examples below.



## Arguments

None



## Return values

An object from the last **$fromjson()** call



## Examples

```
    equ beautify to 5 ;* format $tojson() output using 4 spaces for indentation levels
    crt str("=", 50)
*
* Valid JSON
    json = \[1,2,3]\
    gosub validate_json
*
* Invalid JSON (missing comma)
    json = \[1 2,3]\
    gosub validate_json
*
* Invalid JSON (missing double-quote after "dec")
    json = \{"year":2018,"type":"wall","months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec]}\
    gosub validate_json
*
* Create JSON as a dynamic array with an error on line (attribute) 2
    json = ""
    json<1> = "{"
    json<2> = \"integer":42x\
    json<3> = "}"
    gosub validate_json
*
* Now correct the error
    json = "{":@am:\"integer":42\:@am:"}"
    gosub validate_json

    stop
*
validate_json:
*
    crt "Incoming JSON: ":oconv(json, "mcp")
    obj = json->$fromjson()
    if obj->$isobject() then
        crt "$fromjson() worked!"
    end else
        crt "$fromjson() failed:"
        crt obj->$lasterror()->$tojson(5)
        crt "The line number property is: ":obj->$lasterror()->line
        crt obj->$lasterror()->msg
    end
    crt str("=", 50)
    return
```

Results:

```
==================================================
Incoming JSON: [1,2,3]
$fromjson() worked!
==================================================
Incoming JSON: [1 2,3]
$fromjson() failed:
{
    "errno":1,
    "msg":"Parsing error at line 1 , offset 3",
    "offset":3,
    "line":1
}

The line number property is: 1
Parsing error at line 1 , offset 3
==================================================
Incoming JSON: {"year":2018,"type":"wall","months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec]}
$fromjson() failed:
{
    "errno":1,
    "msg":"Parsing error at line 1 , offset 109",
    "offset":109,
    "line":1
}

The line number property is: 1
Parsing error at line 1 , offset 109
==================================================
Incoming JSON: {^"integer":42x^}
$fromjson() failed:
{
    "errno":1,
    "msg":"Parsing error at line 2 , offset 12",
    "offset":12,
    "line":2
}

The line number property is: 2
Parsing error at line 2 , offset 12
==================================================
Incoming JSON: {^"integer":42^}
$fromjson() worked!
==================================================
```



## Notes

Usually in JSON, new lines are delimited by @LF, or on windows @CR:@LF. As an extension for jBASE, we support @AM as a new line, as shown in the above example that creates a JSON string as a dynamic array.

**$lasterror()**will always return an object; if **$fromjson()**processed a valid JSON string then the JSON representation of the object that **$lasterror()**returns will look like this:

```
{
    "errno":0,
    "msg":"",
    "offset":0,
    "line":0
}
```


