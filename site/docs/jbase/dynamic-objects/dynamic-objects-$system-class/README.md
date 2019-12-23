# Dynamic Objects: $system Class

**Created At:** 3/12/2018 2:33:31 PM  
**Updated At:** 5/4/2018 9:58:55 AM  
**Original Doc:** [dynamic-objects-system-class](https://docs.jbase.com/42948-dynamic-objects/dynamic-objects-system-class)  


The following methods can be utilized from the **$system**class:

- [$system::getemulation()](./../class-method-$systemgetemulation%28%29)
- [$system::getuserinfo()](./../class-method-$systemgetuserinfo%28%29)
- $system::getroutines()
- $system::getbinaries()
- [$system::getfiles()](./../class-method-$systemgetfiles%28%29)


In order to call any of these methods, a **$system**object must first be created, for example:

```
sys = new object("$system")
```

Once this object is created, a call to any of the methods creates a sub-object that can be used to obtain the related information.


