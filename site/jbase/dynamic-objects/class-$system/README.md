# Dynamic Objects: $system Class

<PageHeader />

The following methods can be utilized from the **\$system** class:

- [\$system::getemulation()](../class-method-$systemgetemulation()/README.md)
- [\$system::getuserinfo()](../class-method-$systemgetuserinfo()/README.md)
- $system::getbinaries()
- $system::getroutines()
- [\$system::isroutine()](../class-method-$systemisroutine()/README.md)
- [\$system::getfiles()](../class-method-$systemgetfiles()/README.md)
- [\$system::onexit()](../class-method-$systemonexit()/README.md)
- [\$system::onterminate()](../class-method-$systemonterminate()/README.md)

In order to call any of these methods, a **\$system** object must first be created, for example:

```
sys = new object("$system")
```

Once this object is created, a call to any of the methods creates a sub-object that can be used to obtain the related information.

<PageFooter />
