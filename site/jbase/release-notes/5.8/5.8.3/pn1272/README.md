# PN1272

<PageHeader />

## Description

For some multi-value platforms, such as UniVerse, the @SELECTED variable returns the number of records from LIST/SORT (as well as SELECT).

In "universe" emulation, jBASE previously only reported results from SELECT.

## Previous Release Behavior

For example:

```
JBCEMULATE=universe 

make-demo-file 10 mdf jd

PROGRAM COUNT.TEST
EXECUTE 'COUNT mdf' CAPTURING IO
CRT 'Counted: ':@SELECTED

Counted:
```

## Current Release Behavior

```
Counted: 10
```

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
