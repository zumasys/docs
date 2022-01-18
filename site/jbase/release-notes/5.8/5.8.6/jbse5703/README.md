# JBSE-5703

<PageHeader />

## Description

In jQL the (R option suppresses records not on file when running from a select list of items. On some platforms (e.g. UniVerse) this is the default.

## Previous Release Behavior

```text
jsh SandBox ~ -->EDIT-LIST missing
List name 'missing' is a new list
.jBASE.el.400
TOP
.i
001+This item does not exist
002+
BOTTOM
.fi
Record '.jBASE.el.400' written to file '.'
1 list keys written to list 'missing'
jsh SandBox ~ -->GET-LIST missing

 1 Records selected

>LIST MD
 ** Error [ 202 ] **
Record 'This item does not exist' is not on file.

PAGE    1                                                                                                                  15:52:23  13 JAN 2022

DICT MD.......


 No Records Listed

 jsh SandBox ~ -->
```

## Current Release Behavior

```

```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
