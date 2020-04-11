# LIST-INDEX

<PageHeader />

**Tags:**
<badge text='file indexing' vertical='middle' />

## Description

This command is used to display to the screen details of all the current definitions. A format similar to jQL is produced. It is called as:

```
list-index -Options filename {Same as jQL options}
```

where options may be:

| Option | Description |
| --- | --- |
| -ffile | Use the filename "file" instead of a temporary file |
| -m | Output is in Machine readable format (see table below) |
| -v | Verbose mode - all fields will be displayed |

- Option **-f** allows you to specify your own file name instead of list-index creating a temporary file. This way you can find out what DICTionary items are created by list-index, and if you want to you can modify them and pass them on the command line. Using this option therefore allows you to define your own output format for the command.
- Option **-m** produce "machine readable" displays. In other words the detail is displayed simply as a series of lines, one line per index definition, with a tab character (CHAR(9)) to delimit the fields. This makes it easily parsed by another program or UNIX script.
- Option **-v** is for verbose mode -- all details will be printed instead of a smaller selection.

For instance to display all the index definitions, in full, for file CUSTOMERS, and send the output to the printer, one would proceed as follows:

```
jsh--> LIST-INDEX -v CUSTOMERS (P
```

### Breakdown of Machine Readable format

| Tab Number | Description | [INDICES()](./../introduction-to-secondary-indexes) Attribute reference |
| --- | --- | --- |
| 1 | Index Name | &lt;0&gt; |
| 2 | Not used | na |
| 3 | Sort criteria | &lt;1&gt; |
| 4 | Base FID of Index | na |
| 5 | Always '1' | na |
| 6 | Index Type | &lt;2&gt; |
| 7 | Create time | &lt;5&gt; |
| 8 | Modify time | &lt;6&gt; |
| 9 | Index number (zero based) | na |
| 10 | DEBUG flag | &lt;7&gt; |
| 11 | NULL flag | &lt;8&gt; |
| 12 | CASE flag | &lt;9&gt; |
| 13 | MULTI-VALUE flag | &lt;10&gt; |
| 14 | SYNC flag | &lt;11&gt; |
| 15 | VALUE MAX count | &lt;12&gt; |
| 16 thru 19 | Not used | na |
| 20 | INDEX definition | &lt;3&gt; |
| 21 | Lookup definition | &lt;4&gt; |

Back to [Indexes](./../README.md)

  
<PageFooter />
