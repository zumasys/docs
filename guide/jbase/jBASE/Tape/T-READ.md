# T-READ

**Created At:** 9/25/2018 1:59:06 PM  
**Updated At:** 12/22/2018 11:03:20 AM  


## Description 

The**T-READ** command will read and display data from the tape device one block at a time. The command has the general form:

```
T-READ {CHANNEL=channel} {(options}
```

where:

- **channel** is the specific channel attachment (0-9).
- **option**may be:



| Option<br> | Description<br> |
| --- | --- |
| A<br> | Convert from EBCDIC to ASCII<br> |
| B<br> | Dumps and loads are in binary<br> |
| C<br> | Convert tabs to spaces<br> |
| I<br> | List item id's (record keys) as loaded etc.<br> |
| i<br> | Same as (I) but just write '.' for each record<br> |
| N<br> | inhibits automatic paging of output to the terminal<br> |
| O<br> | Overwrite existing records when loading data<br> |
| P<br> | Directs output to the spooler<br> |
| V<br> | Just do a verify when loading<br> |
| X<br> | Displays the output in hexadecimal format as well as character format<br> |
| n{-m}<br> | Dumps blocks n to m from the current media position. If m is omitted, n blocks are output starting from the current media position. If the entire n-m option is omitted, all blocks are displayed until an end of file mark, (EOF), is encountered.<br> |




## Note: 


> The paged display can be terminated by entering &lt;ctrl E&gt; instead of **Return** at the end of a page.




An example of use may be as:

```
T-READ 2 (X
```

to read and display two blocks in hexadecimal and character format.
