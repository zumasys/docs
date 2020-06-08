# Transaction Log

Access to the transaction log is via a special file. Use the CREATE-FILE command to create the file stub:

```
CREATE-FILE TJ1 TYPE=TJLOG [ 417 ] File TJ1]D created , type = J4 [ 417 ] File TJ1 created , type = TJLOG
```

This creates an entry in the current directory:

```
TJ1

JBC__SOB jBASE_TJ_INIT SET: set=current terminate=eos
```

When a file of type TJLOG is created, it generates a set of dictionary records in the dictionary section of the TJLOG file, which is a normal hash file. The data section of a TJLOG file is handled by a special JEDI driver which accesses the current log set. The log set can be changed by additional parameters when creating the TJLOG file after the TYPE specification.

## Example #1

```
CREATE-FILE TJ2 TYPE=TJLOG set=eldest
```

### Transaction Log File Dictionary Layout  

The transaction log files contain the following information:

| Attribute | Name | Description |
| --- | ---      | --- |
| 1   | SET      | Log Set |
| 2   | FILENO   | File Number |
| 3   | OFFSET   | File Offset |
| 4   | LOGSIZE  | Total Log Record Size |
| 5   | TYPE     | Log Record Type |
| 6   | TIME-UTC | UTC Time |
| 6   | TIME     | Update Time |
| 6   | DATE     | Update Date |
| 7   | TRANS    | Trans |
| 8   | TYPENUM  | Log Record Type |
| 9   | PID      | Update Process |
| 10  | PORT     | Update Port |
| 11  | ERR      | Error Description |
| 12  | TRANSID  | Transaction Identifier |
| 21  | PATH     | Full file path name |
| 22  | RECKEY   | Update Record Key |
| 23  | JBNAME   | jBASE Login Name |
| 24  | OSNAME   | Platform Login Name |
| 25  | TTY      | Terminal Name |
| 26  | APPID    | Application Identifier |
|     |          |                        |
|     | 1        | Default Macro will list TYPE JBNAME PATH TIME DATE |
|     | ALL      | Macro will list all fields |
|     | ERRORS   | Macro will list TYPE JBNAME PATH ERR |

### Transaction Log File Data Layout  

<PageHeader />

The following record types are used in the transaction log (see dictionary item TYPE).  

| Type       | Description |
| ---        | --- |
| EOF        | end of file |
| WRITE      | record Written |
| DELETE     | record Deleted |
| CLEARFILE  | file Cleared |
| DELETEFILE | file Deleted |
| CREATEFILE | file Created |
| TRANSTART  | transaction Started |
| TRANSEND   | transaction Committed |
| TRANSABORT | transaction Aborted  |

The jlogdup command enables selective restores to be performed by preceding the jlogdup command with a select list. The select list can be generated from the log set by generating a special file type, which uses the current log set as the data file.  

### Example #2

```
CREATE-FILE TJFILE TYPE=TJLOG
[ 417 ] File TJFILE]D created , type = J4
[ 417 ] File TJFILE created , type = TJLOG
:SELECT TJFILE WITH PATH EQ "/home/jdata/CUSTOMER" AND WITH TYPE NE "CLEARFILE"

167 Records selected
>jlogdup INPUT set=current OUTPUT set=database
```

In this example, all updates to the CUSTOMER file, which have been logged, except for any CLEARFILEs, are re-applied to the CUSTOMER file.  
The jlogmonitor command can be used to monitor potential problems with the jlogdup process. It will report errors when specific trigger events occur. jlogmonitor can be run in the foreground but will usually be run as a background process (using the standard –Jb option).

## Switching Logsets  

A logset consists of 1 to 16 files. Each file has a capacity of 2GB, so the maximum capacity of a logset is 32GB. Before the logset reaches its capacity, a switch must be made to another logset using the jlogadmin command. Failure to do so will render journaling inoperable and may result in database updates from jBASE programs failing.  
Using 16 files in a logset does not consume more space than using just 1 file. This is because updates to the logset are striped across all the files in the logset. When journaling is active on a live system, the recommendation is to define 16 files for each logset.  
At least 2 logsets must be configured (with jlogadmin) so that when the active logset nears capacity, a switch can be made to another logset. Switching to a logset causes that logset to be initialized, i.e. all files in that logset are cleared. The logset that is switched from remains intact. The usual command to switch logsets is jlogadmin -l next. If there are 4 logsets defined, this command works as follows:  

| Active logset before switch | Active logset after switch |
| --- | --- |
| 1   | 2   |
| 2   | 3   |
| 3   | 4   |
| 4   | 1   |

If a jlogdup process is running in real time to replicate to another machine, it should automatically start reading the next logset when it reaches the end of the current logset. To effect this behavior, use the parameter terminate=wait in the input specification of the jlogdup command.  

Back to [Transaction Journaling](./../README.md)

<PageFooter />
