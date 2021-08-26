# PN1165

<PageHeader />

## Description

In a program, you can traverse a file with Dynamic Objects like this:

```
open "DEMO" to filevar else stop
for rec in filevar setting obj
    print "Name ":rec<2>:" in key ":obj->key
next rec
```

The way to find the record key (item id) is by adding the `setting obj`, which creates an object of which `key` is one of the properties.  

This is not only ugly, but adding `setting obj` is time consuming and almost trebles the execution time.

We have implemented a new clause `key xyz`, so we now store the key in variable `xyz` like this:

```
open "DEMO" to filevar else stop
for rec in filevar key id
    print "Name ":rec<2>:" in key ":id
next rec
```

Back to [5.8.1 Release Notes](./../README.md)

<PageFooter />
