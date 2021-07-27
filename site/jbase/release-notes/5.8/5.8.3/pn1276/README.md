# PN1276

<PageHeader />

## Description

SELECT of a single item ignored by READNEXT on jBASE 5.8.2

Here's a simple example:

Create a file called 'one' and put 1 record in it.

```
program onetest
execute 'select one'
loop
    readnext id else exit
    crt id
repeat
```

```
jsh ~ 1 -->onetest

 1 Records selected

jsh ~ 1 -->
```

## Previous Release Behavior

One item selected but nothing processed/displayed by the READNEXT

## Current Release Behavior

SELECT of one item with READNEXT works correctly

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
