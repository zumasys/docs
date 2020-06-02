# T-READ

<PageHeader />

## Description  

The**T-READ** command will read and display data from the tape device one block at a time. The command has the general form:

```
T-READ {CHANNEL=channel} {(options}
```

where:

- **channel** is the specific channel attachment (0-9).
- **option**may be:

| Option | Description |
| --- | --- |
| A | Convert from EBCDIC to ASCII |
| B | Dumps and loads are in binary |
| C | Convert tabs to spaces |
| I | List item id's (record keys) as loaded etc. |
| i | Same as (I) but just write '.' for each record |
| N | inhibits automatic paging of output to the terminal |
| O | Overwrite existing records when loading data |
| P | Directs output to the spooler |
| V | Just do a verify when loading |
| X | Displays the output in hexadecimal format as well as character format |
| n{-m} | Dumps blocks n to m from the current media position. If m is omitted, n blocks are output starting from the current media position. If the entire n-m option is omitted, all blocks are displayed until an end of file mark, (EOF), is encountered. |

## Note

> The paged display can be terminated by entering &lt;ctrl E&gt; instead of **Return** at the end of a page.

An example of use may be as:

```
T-READ 2 (X
```

to read and display two blocks in hexadecimal and character format.

Back to [Tape Commands](./../tape-commands/README.md)
  
<PageFooter />
