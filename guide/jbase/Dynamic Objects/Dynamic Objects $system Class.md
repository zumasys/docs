# Dynamic Objects: $system Class

**Created At:** 3/12/2018 2:33:31 PM  
**Updated At:** 5/4/2018 9:58:55 AM  


The following methods can be utilized from the **$system**class:

- [$system::getemulation()](class-method-system-getemulation)
- [$system::getuserinfo()](class-method-system-getuserinfo)
- $system::getroutines()
- $system::getbinaries()
- [$system::getfiles()](class-method-system-getfiles)


In order to call any of these methods, a **$system**object must first be created, for example:

```
sys = new object("$system")
```

Once this object is created, a call to any of the methods creates a sub-object that can be used to obtain the related information.


