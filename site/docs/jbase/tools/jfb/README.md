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


| Option<br> | Explanation<br> |
| --- | --- |
| -A or (A<br> | alternate indenting of CASE statements.<br> |
| -C or (C<br> | indent comments with the source code not column 1<br> |
| -Ln,m or (Ln,m<br> | set indentation to n spaces, with initial set at n\*m<br> |
| -Mnn or(Mnn<br> | set maximum number of indentations to nn, default 10<br> |
| -N or (N<br> | do wait for keyboard input between pages<br> |
| -P or (P<br> | send output to the current printer queue<br> |
| -Snn or (Snn<br> | set the percentage split of code to comments to nn%<br> |
| -V or (V<br> | display indentation with + character<br> |




For example, to list the file batch.b in sub-directory source to the printer, indenting by four spaces per level and starting non-labeled code at 8 spaces from the left margin:

```
jfb -L4,2 -V source/batch.b
```
