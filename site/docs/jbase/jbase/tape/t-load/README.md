# T-LOAD

**Created At:** 9/25/2018 1:55:41 PM  
**Updated At:** 12/22/2018 11:18:50 AM  
**Original Doc:** [t-load](https://docs.jbase.com/49399-tape/t-load)  


## Description 

The **T-LOAD**command selectively loads records from a tape device formatted in dump format by the [T-DUMP](./../t-dump) command. The command has the general form:

```
T-LOAD file-specifier {record-list} {selection-criteria} {USING file-specifier} {(options}
```

where option may be:


| Option<br> | Description<br> |
| --- | --- |
| I<br> | Suppress or display the record ids as they are loaded.<br> |
| O<br> | Overwrite existing records of the same id.<br> |
| P<br> | Direct output to the spooler.<br> |


Refer to the [jQL documentation](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/jql2_OVERVIEW.htm) for explanation of the remaining syntax elements.



## Note: 


> T-LOAD can only be used on the default channel. Records ids are displayed or suppressed depending upon the emulation mode.




An example of use may be as:

```
T-LOAD SALES WITH S.CODE EQ "DEF]"
```

Loads all records with first three characters of attribute, defined by S.CODE, equal to string "DEF" into file SALES. Do not overwrite any existing record ids.
