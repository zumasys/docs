# Method: $clone()

**Created At:** 3/28/2018 3:10:12 PM  
**Updated At:** 4/23/2018 10:26:34 AM  


## Description

The **$clone()** method creates an exact copy of an existing object.

Making any changes to the original object does not affect the cloned object, and vice versa.

The cloned object contains all nested objects and arrays.



## Syntax

```
obj1->$clone() 
```

## Arguments

None



## Return value

An exact copy of an object or array including all nested properties.



## Example

In this example, we clone the **music**object to create **newmusic**, then add a new value to the nested array of the cloned **newmusic**object. When both objects are displayed they show different contents.

```
equ beautify to 5

music = new object
music->composer = "Wolfgang Amadeus Mozart"
music->category = "Classical"

favorites = new array
favorites->$append("Clarinet Concerto in A, K622")
favorites->$append("Piano Concerto No. 20, K466")
favorites->$append("Symphony No. 40 in G minor, K550")
favorites->$append("Symphony No. 34 in C major, K338")
music->favorites = favorites

newmusic = music->$clone()
newmusic->favorites->$append("Eine Kleine Nachtmusik, K525")

crt "music:"
crt music->$tojson(beautify)
crt
crt "newmusic:"
crt newmusic->$tojson(beautify)
```

This will output:

```
music:
{
    "composer":"Wolfgang Amadeus Mozart",
    "category":"Classical",
    "favorites":[
        "Clarinet Concerto in A, K622",
        "Piano Concerto No. 20, K466",
        "Symphony No. 40 in G minor, K550",
        "Symphony No. 34 in C major, K338"
    ]
}

newmusic:
{
    "composer":"Wolfgang Amadeus Mozart",
    "category":"Classical",
    "favorites":[
        "Clarinet Concerto in A, K622",
        "Piano Concerto No. 20, K466",
        "Symphony No. 40 in G minor, K550",
        "Symphony No. 34 in C major, K338",
        "Eine Kleine Nachtmusik, K525"
    ]
}
```

If the line:

```
newmusic = music->$clone()
```

is changed to:

```
newmusic = music
```

then appending the new value to the **favorites**array would result in both objects showing the same contents because they both refer to the same internal object address and the reference count of the object would then increase to 2 (refer to the [$refcount()](method-refcount) method):

```
music:
{
    "composer":"Wolfgang Amadeus Mozart",
    "category":"Classical",
    "favorites":[
        "Clarinet Concerto in A, K622",
        "Piano Concerto No. 20, K466",
        "Symphony No. 40 in G minor, K550",
        "Symphony No. 34 in C major, K338",
        "Eine Kleine Nachtmusik, K525"
    ]
}

newmusic:
{
    "composer":"Wolfgang Amadeus Mozart",
    "category":"Classical",
    "favorites":[
        "Clarinet Concerto in A, K622",
        "Piano Concerto No. 20, K466",
        "Symphony No. 40 in G minor, K550",
        "Symphony No. 34 in C major, K338",
        "Eine Kleine Nachtmusik, K525"
    ]
}
```



## Notes

The [$dump()](method-dump) method can be used to see the internal address of any object or array.
