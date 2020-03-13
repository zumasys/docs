# PN5_60900

**Created At:** 9/23/2019 10:29:07 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60900](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60900)  
**Original ID:** 459578  
**Internal:** No  

## Description

Add extensions to Dynamic Objects per RFC 7159.

### Previous Release Behavior

The jBASE JSON parser worked strictly to the standard set by the ECMA-404 standard. See [https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)

Since that standard was published, JSON has moved on, albeit very slightly and jBASE does not accept some incompatibilities caused by this latest revision. The definition of this standard can be found at [http://www.faqs.org/rfcs/rfc7159.html](http://www.faqs.org/rfcs/rfc7159.html)

The jBASE JSON parser insisted that the source text was an object or an array. The extension allows for the four primitive types to be represented as well as objects or arrays. The new revision notes this by saying:

## Note

>Certain previous specifications of JSON constrained a JSON text to be an object or an array.

### Current Release Behavior

A JSON source text can now accept the 4 primitive types of JSON as text, as well as objects and arrays as previously. For example:

```
   source = '"Hello World"'
 obj = source->$fromjson()
if obj->$isobject() then
   print "We returned an object like this"
   print obj->$tojson(1)
end else
   print "We didn't return an object, we returned this"
   print obj
end

[Screen output]

We didn't return an object, we returned this
Hello World
```

In the above example, the source for $fromjson() was neither an object nor array, so we don't return an object as such, hence $isobject() returns false. However, the source to $fromjson() is a recognised JSON primitive of "Hello World" and so we return the string "Hello World".
