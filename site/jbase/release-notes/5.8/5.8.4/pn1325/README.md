# PN1325

<PageHeader />

## Description

A command that includes a filename and a quoted item-id{-list} fails if there is no whitespace between the filename and the item-id-list.

## Previous Release Behavior

```
jsh -->LIST MD"AVG"

No file name could be found for your query
```

## Current Release Behavior

```
jsh -->LIST MD"AVG"

PAGE    1

@ID...............................................

AVG


 1 Records Listed
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
