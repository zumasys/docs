# Class Method: $file::fullpath()

<PageHeader />

## Description

The **\$file::fullpath()** method will resolve a relative file path into a full explicit path. It is platform independent. It will resolve relative paths, symbolic links and so on. The only thing it can't resolve are hard links which by definition are an impossible dilemma to resolve.

The following example shows how a relative path can be transformed to an absolute full path name. The first **PRINT** line uses an instance of the **\$file** class object, the second uses **\$file::fullpath()** as a static method call as no object is required.

```
$ cat test13.jabba
    relpath = "../../../../bin"         ;* A relative path
    fobj = new object("$file")          ;* Create a new instance of the $file class
    print "The absolute file path of ":dquote(relpath):" is " : dquote(fobj->fullpath(relpath))
    print "The absolute file path of ":dquote(relpath):" is " : dquote($file->fullpath(relpath))
```

```
$ test13
The absolute file path of "../../../../bin" is "/home/jbase/bin"
The absolute file path of "../../../../bin" is "/home/jbase/bin"
```

Back to [$file Class](./../class-$file/README.md)
  
<PageFooter />
