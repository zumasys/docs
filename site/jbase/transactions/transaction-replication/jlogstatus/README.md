# jlogstatus

**Created At:** 3/29/2018 7:30:55 PM  
**Updated At:** 4/18/2018 8:15:02 PM  
**Original Doc:** [305935-jlogstatus](https://docs.jbase.com/43995-transactional-journaling/305935-jlogstatus)  
**Original ID:** 305935  
**Internal:** No  

## Description

The **jlogstatus** program will give you a overview of the entire Transaction logging and replication system (**jlogdup**). This may be done as:

```
jlogstatus -options
```

where option may be:

| Option | Description |
| --- | --- |
| -a | display all available information |
| -c | display current log information |
| -d | display jlogdup process information |
| -g | display general information |
| -h | display help |
| -l | display all Log files information in summary mode |
| -r **nn** | set display to repeat every **nn** seconds |
| -v | verbose mode |

For instance the command:

```
:jlogstatus -a
```

may display something like:

```
Journal status:                            active
Configuration file created:                10:39:00 08 APR 1998 , by root from port 9
Configuration file modified:               10:47:55 08 APR 1998 , by root from port 9
Journal file sets switched:                10:41:21 08 APR 1998 , by root from port 9
Full log warning threshold:                70 percent , thereafter every 1 percent or 300 secs
Journal files synced every:                10 seconds , last sync 10:49:59 08 APR 1998
Background sync demon:                     (inactive)
Extended record:                            OFF
Admin log file:                            10 entries , in file /opt/jbase/CurrentVersion/config/jediLoggerAdminLog
Admin log notify program:                  (undefined)
Current log file set:                      1, date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998
/home/jbasedev/fb1:                        76.92% capacity
/home/jbasedev/fb2:                        76.92% capacity
Total record count:                        97.66k , 0 records/second
Total byte count:                          19.47M , 0 bytes/second
jlogdup program status:                    NONE active
Status log set 1 (current):                2 files, 100000 records , 20415568 bytes used
                                           Date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998
Status log set 2:                          No files defined
Status log set 3:                          No files defined
Status log set 4:                          No files defined
Status log totals:                         2 files, 100000 records, 20415568 bytes used
                                           Date range 10:41:21 08 APR 1998 to 10:49:59 08 APR 1998ry
```

Back to [Transactional Journaling](./../introduction-to-transaction-journaling)

<PageFooter />
