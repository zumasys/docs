# LIST-INDEX

**Created At:** 8/16/2018 1:56:23 PM  
**Updated At:** 9/26/2018 10:46:12 PM  
**Original Doc:** [list-index](https://docs.jbase.com/48152-indexes/list-index)  
**Original ID:** 334557  
**Internal:** No  

**Tags:**
<badge text='file indexing' vertical='middle' />

## Description 

This command is used to display to the screen details of all the current definitions. A format similar to jQL is produced. It is called as:

```
list-index -Options filename {Same as jQL options}
```

where options may be:


| Option<br> | Description<br> |
| --- | --- |
| -ffile<br> | Use the filename "file" instead of a temporary file<br> |
| -m<br> | Output is in Machine readable format (see table below)<br> |
| -v<br> | Verbose mode - all fields will be displayed<br> |




- Option **-f** allows you to specify your own file name instead of list-index creating a temporary file. This way you can find out what DICTionary items are created by list-index, and if you want to you can modify them and pass them on the command line. Using this option therefore allows you to define your own output format for the command.
- Option **-m** produce "machine readable" displays. In other words the detail is displayed simply as a series of lines, one line per index definition, with a tab character (CHAR(9)) to delimit the fields. This makes it easily parsed by another program or UNIX script.
- Option **-v** is for verbose mode -- all details will be printed instead of a smaller selection.


For instance to display all the index definitions, in full, for file CUSTOMERS, and send the output to the printer, one would proceed as follows:

```
jsh--> LIST-INDEX -v CUSTOMERS (P
```



### BREAKDOWN OF MACHINE READABLE FORMAT:


| Tab Number<br> | Description<br> | [INDICES()](./../introduction-to-secondary-indexes) Attribute reference<br> |
| --- | --- | --- |
| 1<br> | Index Name<br> | &lt;0&gt;<br> |
| 2<br> | Not used<br> | na<br> |
| 3<br> | Sort criteria<br> | &lt;1&gt;<br> |
| 4<br> | Base FID of Index<br> | na<br> |
| 5<br> | Always '1'<br> | na<br> |
| 6<br> | Index Type<br> | &lt;2&gt;<br> |
| 7<br> | Create time<br> | &lt;5&gt;<br> |
| 8<br> | Modify time<br> | &lt;6&gt;<br> |
| 9<br> | Index number (zero based)<br> | na<br> |
| 10<br> | DEBUG flag<br> | &lt;7&gt;<br> |
| 11<br> | NULL flag<br> | &lt;8&gt;<br> |
| 12<br> | CASE flag<br> | &lt;9&gt;<br> |
| 13<br> | MULTI-VALUE flag<br> | &lt;10&gt;<br> |
| 14<br> | SYNC flag<br> | &lt;11&gt;<br> |
| 15<br> | VALUE MAX count<br> | &lt;12&gt;<br> |
| 16 thru 19<br> | Not used<br> | na<br> |
| 20<br> | INDEX definition<br> | &lt;3&gt;<br> |
| 21<br> | Lookup definition<br> | &lt;4&gt;<br> |

