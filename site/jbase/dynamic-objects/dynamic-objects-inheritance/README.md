# Dynamic Objects: Inheritance

**Created At:** 12/4/2019 12:24:05 PM  
**Updated At:** 12/16/2019 11:11:40 AM  
**Original Doc:** [dynamic-objects-inheritance](https://docs.jbase.com/42948-dynamic-objects/dynamic-objects-inheritance)  
**Original ID:** 501495  
**Internal:** No  

Inheritance is a fundamental Object Oriented concept. Dynamic Objects implements inheritance in 2 ways:

- Class Inheritance:  Inheriting the properties **\*** and methods from one or more parent classes
- Object Inheritance: Inheriting the properties and methods from one or more objects **\*\***

**\*** Properties are only inherited from the constructor of the inherited class  
**\*\*** When we refer to an object this can be an array as well.

Inheritance is recursive, meaning that an object can inherit properties and methods from other objects or classes and those classes can, in turn, inherit properties and methods from other classes, and so on. This is illustrated in the following topics:

- [Tutorial](./../inheritance-tutorial)
- [$inherit()](./../method-$inherit%28%29---class-inheritance) - Class Inheritance
- [$inherit()](./../method-$inherit%28%29---object-inheritance) - Object Inheritance
- $global() - Globally available methods [TBD]

Back to [Dynamic Objects - Overview](./../dynamic-objects/README.md)
