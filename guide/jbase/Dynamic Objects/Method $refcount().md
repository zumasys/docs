# Method: $refcount()

Description The $refcount() method returns the number of variables that reference the same object.  Syntax obj-&gt;$refcount() Arguments None  Return value The number of references to the object.  Examples obj = new object("Tour") crt "Reference count for obj = ":obj-&gt;$refcount() obj-&gt;$dump() ;* reference count = 1 copy = obj crt crt "Referenc  

**Created At:** 2/16/2018 12:08:24 PM  
**Updated At:** 4/23/2018 10:20:20 AM  

