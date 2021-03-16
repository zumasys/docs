# Dynamic Objects Timeline

<PageHeader />  

## 5.7.0  

Dynamic Objects introduced:

The jdynamic class.  
The jvalue class.  
The jiterator class.  

jObjectCreate(classname) -- create an empty dynamic object.  
jObjectDestroy(object) -- destroy a dynamic object.  
jObjectSet(object , key , value) -- Create/Modify an ARRAY value or OBJECT key/value pair.  
jObjectGet(object , key ) -- get an ARRAY value or OBJECT key/value.  
jObjectMethod(object , method) -- call a method. Only built-in system methods beginning with \$ currently supported.  
jObjectIterator(object , control , key , value , type) -- iterator through all the values in ARRAY or all key/value pairs in an OBJECT.  
jObjectFromJSON(source , options ) -- Parse a JSON source and return a dynamic object.  
jObjectToJSON(object , options) -- Return a JSON source based on a dynamic object.  

Methods:

\$isobject  
\$lasterror  
\$dump  
\$dumpv  
\$clear  
\$size  
\$stats  
\$classname  
\$refcount  

\$file class, \$getstats method.  

Rename \$isproperty() to \$propertytype().  
Rename \$propertytype() to \$valuetype().  
Change \$isproperty("property_name") to return a boolean, i.e. 1 if the property exists, 0 otherwise.  
Rename \$isobject() to \$objecttype().  
Change \$isobject() to return a boolean, i.e. 1 if the object is an "object" or an "array", and return 0 otherwise.  
Rename \$development::makerandom(n) to \$development::randomstring(n).  
Add the \$append(), \$prepend() and \$insert() internal methods.  
Add the \$setclassname("name") internal method to change the name of the class.  
Add the jVarargStart() and jVarargNext() calls.  
Allow Dynamic Objects to interact with the database (allow READ and WRITE operations).  
Add automatic serialisation to a dynamic object and control with \$setserialise(nn) (or \$setserialize(nn)).  
Add new internal methods \$ismethod() , \$clone() and \$equal().  
Add \$fromfile(sourcename) method.  

## 5.7.1  

Add the \$dumpmemory() internal method.  
Add static objects \$jbase , \$file, \$development and \$system.  
Support self as a synonym for this.  

## 5.7.2

Add \$merge() and \$locate() internal methods.  
Add \$system::userstats() method.  
Add the \$system::pid_active(pid) method.  
Add a new property to the \$system::userstats() method to show the status of encrypted files.  
Add options to the \$append() and \$prepend() methods to allow for duplicate rejection and case sensitivity.  

## 5.7.3

Retain the argument type of integer or string during assignment.  
Allow leading zeroes in numbers.  
Enhance \$isproperty() and \$ismethod() built-in methods to support multiple arguments.  
Enhance \$sort() built-in method so that it can sort values in a dynamic array.  
Support a period as an object pointer as an option to the arrow ->  
Add inheritance through the \$inherit() method and the \$global class.  
Add try/catch/throw constructs.  

## 5.7.4

Add extensions to dynamic objects created by document RFC 7159.  
Allow inherited classes to be nested/recursive.  

## 5.7.5

No changes.  

## 5.7.6

Add internal methods, \$split() and \$join().  
Add \$slice() method as a synonym for \$split().  
Force an inherited class to have a constructor.  
Add \$system->onexit() and \$system->onterminate() methods.  
jabba.h include file introduced.  

## 5.7.7

Add @null to the jabbascript language.  
Enhance @true and @false so that if they are used to set values in a dynamic object, they become boolean true and false rather than 1 and 0.  
Add the built-in functions \$setnumber(), \$setnumeric() and \$setstring().  
Add a generalised iterator.  
Add \$jobs() class.  

## 5.7.8 through 5.7.10

Add \$system->onexit() and \$system->onterminate() methods.  
Add \$remove() as synonym for \$delete() method.  
Add @unassigned property.  
Add JSON validator  - jsonlint

## 5.7.11

Add \$mcp(), \$mcl(), \$mcu() and \$mcpu() methods.

## 5.8.0

Add \$system->getjelf() method.  
Add \$locks class, \$locks->getjdls() method.  
Add \$global class.

Back to [Dynamic Objects](./../README.md)

<PageFooter />  
