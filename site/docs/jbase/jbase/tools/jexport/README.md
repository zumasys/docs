# jexport

**Created At:** 4/17/2019 7:20:01 AM  
**Updated At:** 4/17/2019 12:34:08 PM  
**Original Doc:** [jexport](https://docs.jbase.com/48399-tools/jexport)  
**Original ID:** 380778  
**Internal:** No  


## Description

The **jexport** command generates output of delimited values using jQL syntax. Output can be to a file, stdout (typically the screen) or the spooler.



## Syntax

```
jexport {options} filename {sort-criteria} {selection-critera} {output-specs} {LPTR}
```



## Options


| <!----> | <!----> |
| --- | --- |
| Option | Description |
| -f filepath | **filepath** is the full or relative path to where the file is to be generated. If this option is omitted then output is sent to stdout. Enclose the path in double-quotes if it contains spaces. |
| -d delimiter | The character(s) used to delimit the values, default is @TAB<br><br>This character can be specified as:<br>        **@TAB** = Horizontal Tab char(9)<br>        **@CSV** = Each value is enclosed in quotes and comma separated<br>**@SVM**= Sub-Value-Mark char(252<br>**@VM**= Value-Mark char(253)<br>**@AM** = Attribute Mark char(254)<br>        e.g. **-d @VM**<br><br>Any single character in the range CHAR(33) - CHAR(126), e.g. **-d:**<br>The following characters cannot be used in this manner:<br>**-** (dash)<br>**"** (double-quote)<br>**'** (single-quote)<br>**\xnn** - where 'nn' is a hexadecimal number in the range 0x00 - 0xFF<br>Invalid hex digits defaults to 0x00<br>                 e.g. **-d \xFD** |
| -o | Overwrite existing file when the **-f** option is used, ignored otherwise |
| -h | Help screen |
| -? | Help screen |




## Notes

- The **jexport** command and options are case insensitive.
- Options can appear anywhere on the command line.
- Column headers are generated from dictionary definitions unless COL-HDR-SUPP is used.
- Output will page unless **NO.PAGE**, **NOPAGE**, **COL-HDR-SUPP** or the **-f** option is used.
- Use **COUNT-SUPP** or **NI-SUPP** to suppress the **nnn records processed** message at the end of the report, ignored if the **-f** option is used.
- If no output-specs are specified then the default output for the file is used.
- Only detail lines are processed so things like **BREAK-ON**s, **TOTAL**s, **HEADING**s are ignored.
- A preceeding select-list will limit the records to process.
- The **-f** option takes precedence over spooler output.




## Examples

```
JEXPORT PRODUCTS SAMPLE 100
```

```
JEXPORT -D@csv -F .\members.txt -o MEMBERS WITH STATE "OH" BY LASTNAME BY FIRSTNAME LASTNAME FIRSTNAME ZIP MEMBER.NO ID-SUPP
```

```
jexport -f /tmp/active_customers -d@vm CUSTOMERS WITH ACTIVITY BY-DSND TOTAL_SALES CUSTNAME TOTAL_SALES
```



Back to [Tools](./../tools)



## 

