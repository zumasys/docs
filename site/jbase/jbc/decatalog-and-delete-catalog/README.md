# DECATALOG and DELETE-CATALOG

**Created At:** 8/14/2017 10:31:17 AM  
**Updated At:** 9/9/2019 12:21:40 PM  
**Original Doc:** [266875-decatalog-and-delete-catalog](https://docs.jbase.com/36868-jbase-basic/266875-decatalog-and-delete-catalog)  
**Original ID:** 266875  
**Internal:** No  

The **DECATALOG** and **DELETE-CATALOG** commands are used to remove the run-time versions of cataloged jBASE BASIC programs.

The commands take the general form:

```
DECATALOG {-d} SourceFilename ProgramName
```

or:

```
DELETE-CATALOG {-d} SourceFilename ProgramName
```

The **-d** option will delete the object code file. This is the file that either starts with a "$" or ends with ".obj" (Windows) / ".o" (UNIX). Alternatively, you can set the **DECATALOG\_DELETE\_OBJECT\_CODE** environment variable.

The **DECATALOG** command can be run from an active select list:

```
SELECT BP = [TEST]
>DECATALOG BP
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
