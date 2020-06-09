# jlogstatus

<PageHeader />

The jlogstatus command displays the status of the jBASE Transaction Journal. In its simplest form the jlogstatus, command shows a summary of the current Transaction Journal activities. Additional command line options are available for output that is more verbose. The jlogstatus command can also be used to present a rolling status screen, using the ‘-r n’ option, which will update the display every ‘n’ seconds.  

## Syntax

```bash
jlogstatus -options
```

## Syntax Elements  

| Option | Description |
| ---    | ---         |
| -a     | display all available information                 |
| -c     | display current log information                   |
| -d     | display jlogdup process information               |
| -g     | display general information                       |
| -h     | display help                                      |
| -l     | display all Log files information in summary mode |
| -r nn  | set display to repeat every nn seconds            |
| -v     | verbose mode                                      |

## Example

```bash
jlogstatus -a –v –r 5
```

This will display all information and will refresh every 5 seconds.

| Journal status | Active |
| ---    | ---         |
| Configuration file created:  | 10:39:00 08 APR 1998 , by root from port 9                 |
| Configuration file modified: | 10:47:55 08 APR 1998 , by root from port 9                 |
| Journal file sets switched:  | 10:41:21 08 APR 1998 , by root from port 9                 |
| Full log warning threshold:  | 70 percent , thereafter every 1 percent or 300 secs        |
| Journal files synced every:  | 10 seconds , last sync 10:49:59 08 APR 1998                |
| Background sync demon:       | (inactive)                                                 |
| Extended record:             | OFF                                                        |
| Admin log file:              | 10 entries , in file /usr/jbc/config/jediLoggerAdminLog    |
| Admin log notify program:    | (undefined)                                                |
| Current log file set:        | 1, date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998 |
| /home/jbasedev/fb1:          | 76.92% capacity                                            |
| /home/jbasedev/fb2:          | 76.92% capacity                                            |
| Total record count:          | 97.66k , 0 records/second                                  |
| Total byte count:            | 19.47M , 0 bytes/second                                    |
| jlogdup program status:      | NONE active                                                |
| Status log set 1 (current):  | 2 files, 100000 records , 20415568 bytes used              |
|                              | Date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998    |
| Status log set 2:            | No files defined                                           |
| Status log set 3:            | No files defined                                           |
| Status log set 4:            | No files defined                                           |
| Status log totals:           | 2 files, 100000 records, 20415568 bytes used               |
|                              | Date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998    |

Back to [Transaction Journaling](./../README.md)

<PageFooter />
