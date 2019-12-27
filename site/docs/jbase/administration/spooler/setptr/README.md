# SETPTR

**Created At:** 4/4/2018 9:43:37 AM  
**Updated At:** 1/24/2019 8:07:36 AM  
**Original Doc:** [306220-setptr](https://docs.jbase.com/44205-spooler/306220-setptr)  
**Original ID:** 306220  
**Internal:** No  


## Description 

The command may be used to set the line printer spooler options for a logical print channel. These changes are effective
until a subsequent use of **SETPTR** or use of LOGOUT or QUIT. It takes the general form:

```
SETPTR [ channel , l.len , p.len , top , bottom , mode , options ]
```

where all arguments are positional parameters. Each parameter is optional, but its position must be held by a comma. If no parameters, the current settings for logical print channel 0 are displayed.

- channel identifies the logical print channel assigned to the printer with the ASSIGN command. Enter a number from 0 through 255. The default is 0. If specified with no options,**SETPTR** displays the current settings for that logical print channel.
- l.len sets the line length, that is, the paper width. The default is 132.
- p.len sets the number of lines per page. The default is 66.
- top sets the top margin in number of lines. The default is 3.
- bottom sets the bottom margin in number of lines. The default is 3.
- mode is a number from 1 through 5 that is used to direct output to one of the following places:



| Mode<br> | Description<br> |
| --- | --- |
| 1<br> | Line Printer Spooler Output (default).<br> |
| 2<br> | Assigned Device. To send output to an assigned device, you must first assign the device to a logical print channel, using the ASSIGN command. The ASSIGN command does an automatic **SETPTR**command using the default parameters, except for mode, which it sets to 2. Use **SETPTR** only if you have to change the default parameters.<br> |
| 3<br> | Hold File Output. Mode 3 directs all printer output to a file called &HOLD&. If a &HOLD& filemust execute **SETPTR**with mode 3 before each report to create unique report names in &HOLD&. If a report exists with the same name, the new report overwrites it.<br> |
| 4<br> | Synonym for mode 2<br> |
| 5<br> | Synonym for mode 2<br> |




- options can be any of the following:



| Option<br> | Description<br> |
| --- | --- |
| AS [ name ]<br> | Same as BANNER.<br> |
| AT name<br> | Routes output to system printer name.<br> |
| BANNER [ name ]<br> | In mode 1, name appears on the second line of the banner page under the account name, that is, the login name. In mode 3, specifies the record ID of the record in &HOLD& which stores the report. If you do not specify name, the record ID is P#0000. If you specify name, it is the record ID of the output record. In either case, each subsequent print job uses the same record ID and overwrites the previous job.<br> |
| BANNER UNIQUE [ name ]<br> | In mode 3, appends a sequential number to the name under which successive records are created in &HOLD&. If you do not specify name, the record ID is P#0000\_nnnnnn, where nnnnnn is increased by each subsequent **SETPTR** command. If you specify name, the record ID is name\_nnnnnn.<br> |
| BANNER NEXT [ name ]<br> | In mode 3, appends a sequential number to the name under which successive reports are created in &HOLD&. If you do not specify name, the record ID is P#0000\_nnnnnn, where nnnnnn is increased for each new print job. If you specify name, the record ID is name\_nnnnnn.<br> |
| BRIEF<br> | suppresses the display of **SETPTR** settings.<br> |
| COPIES<br> | n specifies the number of copies to print (with only one banner page).<br> |
| DEFER<br> | time defers printing until time. Specify time in one of the following formats. The formats beginning with a plus sign ( + ) specify time relative to the current system time.<br><br>hh:mm<br><br>dd.hh:mm<br><br>mm.dd.hh:mm<br><br>yy.mm.dd.hh:mm<br><br>dd mm.dd<br><br>yy.mm.dd<br>+mm<br>+hh:mm<br>+dd.hh:mm<br> |
| HOLD<br> | In mode 1, sends print jobs to the spooler as hold files. The spooler does not print held jobs when they are sent. You can use the PRINT.ADMIN command to print held jobs. After a held job is printed, it is removed from the spool queue.<br> |
| LNUM<br> | Prints line numbers<br> |
| NFMT or NOFMT<br> | specifies that the application controls pagination and formatting instead of the spooler.<br> |
| NOEJECT<br> | Does not eject a page at the end of the print job<br> |






### Usage example

A command as:

```
SETPTR 0,132,66,3,3,2 
```

will display something like:

```
Unit Number   :0
Page Width    :132
Page Depth    :66
Top Margin    :3
Bottom Margin :3
Print mode    : 2 - Spooled Output

Default spool banner : "P#0000"
Destination printer  : NONE
Initial Job State    : PRINT
```





Back to [Spooler.](./../jbase-spooler)
