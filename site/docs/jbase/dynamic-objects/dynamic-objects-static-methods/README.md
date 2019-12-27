# Dynamic Objects: Static Methods

**Created At:** 2/24/2018 12:29:05 PM  
**Updated At:** 3/13/2018 9:44:04 AM  
**Original Doc:** [dynamic-objects-static-methods](https://docs.jbase.com/42948-dynamic-objects/dynamic-objects-static-methods)  
**Original ID:** 300559  
**Internal:** No  


A **Static Method** is one that can be used without creating an object. This means the calling object (identified as **this-&gt;**) is either illegal or inconsequential.

In other object oriented languages a static method would be identified with the keyword **static** and the compiler would give an error if it was referenced with **this-&gt;** or **self** or whatever the keyword is that references the instance. With Dynamic Objects, we do neither as we create a transient **this-&gt;** reference to the method; when the method completes, the reference is destroyed.

Static methods are useful for performing a single task that does not need to persist once the task is done.

Just like any other method, a Static Method can accept zero or any number of arguments.

Many of the methods in the built-in Dynamic Objects classes are static.

The syntax to call a static method is:

```
Classname::methodname({arg1{, arg2, arg3, ..., argx}})
```

This will compile to a call to a static method where the called object is created only for as long as the method takes to run.

Extending our Math class from [here](./../dynamic-objects-instance-methods), add a new method called **nthroot** which calculates the nth root of some number to the nearest integer, both of which will be arguments of the method.

```
0001     method Math::Math()       ;* constructor
0002     this->pi = 3.14159
0003     end method
0004
0005     method Math::circumference(radius)
0006     return (this->pi*2) * radius
0007     end method
0008
0009     method Math::nthroot(index, base)
0010     return int(pwr(base, 1/index) + .5)
0011     end method
```

Now create a program to call the static method, passing the index and and some number to the program from the command line:

```
0001     program find_nth_root.jabba
0002     index = sentence(1)
0003     base = sentence(2)
0004     crt "The nearest integer with nth root ":
0005     crt index:" of ":base:" = ":Math::nthroot(index, base)
```

Let's run this program a few times:

```
jsh ~ -->find_nth_root 2 100
The nearest integer with nth root 2 of 100 = 10
jsh ~ -->find_nth_root 3 216
The nearest integer with nth root 3 of 216 = 6
jsh ~ -->find_nth_root 5 3125
The nearest integer with nth root 5 of 3125 = 5
jsh ~ -->find_nth_root 6 12345
The nearest integer with nth root 6 of 12345 = 5
```
