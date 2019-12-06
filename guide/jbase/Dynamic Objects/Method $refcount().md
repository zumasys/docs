# Method: $refcount()

**Created At:** 2/16/2018 12:08:24 PM  
**Updated At:** 4/23/2018 10:20:20 AM  


## Description

The **$refcount()** method returns the number of variables that reference the same object.



## Syntax

```
obj->$refcount() 
```



## Arguments

None



## Return value

The number of references to the object.



## Examples

```
obj = new object("Tour")
crt "Reference count for obj = ":obj->$refcount()
obj->$dump()    ;* reference count = 1
copy = obj
crt
crt "Reference count for obj  = ":obj->$refcount()
obj->$dump()
crt
crt "Reference count for copy = ":copy->$refcount()
copy->$dump()
crt
obj = ""
crt "Reference count for obj  = ":obj->$refcount()
crt
crt "Reference count for copy = ":copy->$refcount()
copy->$dump()   ;* this shows that the object is still 'alive and well'
stop  ;* The object's destructor is called
```

Create this method separately from the main code:

```
method Tour::~Tour()
crt "Destructor called!"
end method
```

Results:

```
Reference count for obj = 1
Object dump: Class "Tour", refcount 1, type = OBJECT
             Number of values 0, object address 0000000000E94DD0

Reference count for obj  = 2
Object dump: Class "Tour", refcount 2, type = OBJECT
             Number of values 0, object address 0000000000E94DD0

Reference count for copy = 2
Object dump: Class "Tour", refcount 2, type = OBJECT
             Number of values 0, object address 0000000000E94DD0

Reference count for obj  = 0

Reference count for copy = 1
Object dump: Class "Tour", refcount 1, type = OBJECT
             Number of values 0, object address 0000000000E94DD0
Destructor called!
```

Notice that the address for both objects is the same.

## Notes

The $dump() method also reports the number of references as well as the object's address which is useful to determine if 2 or more variables point to the same object.

An object's reference count is incremented when it is embedded in another object.

An object's destructor method, if it exists, will not be called until the reference count goes to zero. This happens automatically when a program terminates.

An object can be dereferenced by setting the variable to which the object points to "", zero or some other value that does not point to that object, e.g.

```
obj = new object
crt obj->$isobject() ;* returns 1
crt obj->$refcount() ;* reference count is 1
obj = ""             ;* the object no longer exists
crt obj->$isobject() ;* returns 0 (zero)
```
