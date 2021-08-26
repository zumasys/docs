# PN642

<PageHeader />

## Description

jBC: EXECUTE'ing a SELECT/RTNLIST on an empty file returns a select-list  

## Previous Release Behavior

Given the following jBC program:

```
     test1.b
001     EXECUTE "delete-file empty" CAPTURING quiet
002     EXECUTE "create-file empty" CAPTURING quiet
003     EXECUTE "delete-list dummy" CAPTURING quiet
004     EXECUTE "SELECT empty" RTNLIST select_list CAPTURING select_output
005     EXECUTE "SAVE-LIST dummy" PASSLIST select_list CAPTURING savelist_output
006     CRT "SAVE-LIST output: ":savelist_output

jsh ~ -->test1
SAVE-LIST output: 2 record(s) saved to list 'dummy'
```

## Current Release Behavior

```
localhost-~/bp: test1
SAVE-LIST output: No default select list is active
```

Back to [5.8.1 Release Notes](./../README.md)
  
<PageFooter />
