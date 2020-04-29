# Dynamic Objects: $system Class

<PageHeader />

The following methods can be utilized from the **$system**class:

- [\$system::getemulation()](./../class-method-$systemgetemulation%28%29)
- [\$system::getuserinfo()](./../class-method-$systemgetuserinfo%28%29)
- $system::getroutines()
- $system::getbinaries()
- [\$system::getfiles()](./../class-method-$systemgetfiles%28%29)
- [$system::onexit()](../class-method-$systemonexit()/README.md)
- [$system::onterminate()](../class-method-$systemonterminate()/README.md)

In order to call any of these methods, a **$system** object must first be created, for example:

```
sys = new object("$system")
```

Once this object is created, a call to any of the methods creates a sub-object that can be used to obtain the related information.

  
<PageFooter />
