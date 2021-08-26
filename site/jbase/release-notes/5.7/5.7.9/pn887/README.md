# PN887

<PageHeader />

## Description

Problem with **SELECT** and controlling attributes

## Current Release Behavior

Prior to this patch:

```
SELECT filename dictname
```

would produce a select-list containing the item-id and the data from **dictname**, where **dictname** was a controlling attribute.

It now contains only the data from **dictname**.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />