## Description

You can traverse a file with Dynamic Objects like this:

```
open "DEMO" to filevar else stop
for rec in filevar setting obj
    print "Name ":rec<2>:" in key ":obj->key
next rec
```

The way to find the record key (item id) is by adding the `setting obj` which creates an object of which `key` is one of the properties. This is not only ugly, but adding `setting obj` is time consuming and almost trebles the execution time.

What is needed is a new clause `key xyz` so we store the key in `xyz` like this:

```
open "DEMO" to filevar else stop
for rec in filevar key id
    print "Name ":rec<2>:" in key ":id
next rec
```
