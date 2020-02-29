# jfb

**Created At:** 8/30/2018 1:45:10 PM  
**Updated At:** 11/5/2018 10:37:16 AM  
**Original Doc:** [jfb](https://docs.jbase.com/48399-tools/jfb)  
**Original ID:** 336894  
**Internal:** No  

**Tags:**
<badge text='source code listings' vertical='middle' />

## Description

The jfb command is used to produce source code listings in a standard format for listing to the terminal or printer. The format of the command is as follows:

```
jfb -Options FileName Itemlist (Options
```

where options may be:


| Option | Explanation |
| --- | --- |
| -A or (A | alternate indenting of CASE statements. |
| -C or (C | indent comments with the source code not column 1 |
| -Ln,m or (Ln,m | set indentation to n spaces, with initial set at n\*m |
| -Mnn or(Mnn | set maximum number of indentations to nn, default 10 |
| -N or (N | do wait for keyboard input between pages |
| -P or (P | send output to the current printer queue |
| -Snn or (Snn | set the percentage split of code to comments to nn% |
| -V or (V | display indentation with + character |

For example, to list the file batch.b in sub-directory source to the printer, indenting by four spaces per level and starting non-labeled code at 8 spaces from the left margin:

```
jfb -L4,2 -V source/batch.b

```

[Back to Tools](./../README.md)
