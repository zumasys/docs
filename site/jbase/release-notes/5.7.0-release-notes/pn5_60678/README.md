# PN5_60678

<PageHeader />

### Description

Implement Dynamic Sizing files



### Previous Release Behavior

The only dynamic sizing files were type JR and their performance was so dire they were impractical to use for any useful purpose.



### Current Release Behavior

The new file type allows files to be created without specifying a size (modulo, separation, secondary size). The format is simple:

```
fbcentos-~: create-file DEMO
[ 417 ] File DEMO]D created , type = JDYNAMIC
[ 417 ] File DEMO created , type = JDYNAMIC
fbcentos-~: ls -l DEMO*
-rw-rw-r-- 1 gregc gregc 32768 Dec  1 12:04 DEMO
-rw-rw-r-- 1 gregc gregc 32768 Dec  1 12:04 DEMO]D
```

Simply omit all of the size parameters and jBASE will default to dynamic files instead of the usual default of JP (jPlus) files.

An alternate way to create dynamic files is using TYPE=HASHD as below, in which case we ignore the all of the size parameters, e.g. modulo, separation, secondary size.

```
fbcentos-~: create-file DEMO 1 23 TYPE=HASHD
[ 417 ] File DEMO]D created , type = JDYNAMIC
[ 417 ] File DEMO created , type = JDYNAMIC
```

A final way to use dynamic files is to set the JEDI\_PREFILEOP environment variable as shown below, in which case this forces the TYPE=HASHD to be added to all create-file commands, thus over-riding the usual default of jPlus files and ignoring any modulo/separation provided.

```
fbcentos-~: export JEDI_PREFILEOP=TYPE=HASHD
fbcentos-~: create-file DEMO 1 23
[ 417 ] File DEMO]D created , type = JDYNAMIC
[ 417 ] File DEMO created , type = JDYNAMIC
```

The jstat and jchmod commands work correctly with the new file type.

The **make-demo-file** command includes an option to create the file as type **JD**; this will eventually become the default file type.
