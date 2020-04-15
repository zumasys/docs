# CLOSE

<PageHeader />

## Description

The **CLOSE** statement is used to close an opened file, which is no longer required. The statement can be used as:

```
CLOSE variable {, variable ...}
```

The **variable** list should contain a list of previously opened file variables that are no longer needed. The variables will be cleared and may be reused as ordinary variables.

## Note

> It is possible to have an unlimited amount of files open within jBASE BASIC, however leaving them open consumes valuable system resources. It is good practice to hold open only those file descriptors that are constantly accessed.

An example of use is as:

```
OPEN "DATAFILE" TO fileVar ELSE ABORT 201, "DATAFILE"
*Operations on file data
CLOSE fileVar
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
