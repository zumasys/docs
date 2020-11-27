# DECATALOG and DELETE-CATALOG

<PageHeader />

The **DECATALOG** and **DELETE-CATALOG** commands are used to remove the run-time versions of cataloged jBASE BASIC programs.

The commands take the general form:

```
DECATALOG {-d} SourceFilename ProgramName
```

or:

```
DELETE-CATALOG {-d} SourceFilename ProgramName
```

The **-d** option will delete the object code file. This is the file that either starts with a "$" or ends with ".obj" (Windows) / ".o" (UNIX). Alternatively, you can set the [DECATALOG\_DELETE\_OBJECT\_CODE](../../environment-variables/decatalog_delete_object_code/README.md) environment variable.

The **DECATALOG** command can be run from an active select list:

```
SELECT BP = "[TEST]"
>DECATALOG BP
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
