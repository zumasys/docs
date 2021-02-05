# Databases in jBASE

<PageHeader />

## CREATE-ACCOUNT - Creating a jBASE Account

The CREATE-ACCOUNT command enables the user to create a new account for use within the jBASE system.

**Command Syntax:**

```
CREATE-ACCOUNT -Options <accountdirectory> <accountname>
```

**SYNTAX ELEMENTS:**

- **Account Directory** - the full path or a name relative to the current directory
- **Account Name** - the name of the account record in the SYSTEM file. If Account Name is not specified, the last element in Account Directory is used as the account name.
- **Options** -

| Option | Description |
| --- | --- |
| -m md\_path | full path to existing MD (implies -n) |
| -n          | do not create an MD for the account |
| -r          | generate remote.cmd for Telnet (Windows only) |
| -b dirs     | include additional bin directories |
| -l dirs     | include additional lib directories |
| -h or -?    | show help (ignored if there are other options) |

### Creating your demo account for this walkthrough

1. Create the jBASE account JBASEDEMO

```
JBASEADM ~ -->CREATE-ACCOUNT JBASEDEMO
Account 'JBASEDEMO' created.jsh
JBASEADM ~ -->LOGTO JBASEDEMO
jsh JBASEDEMO ~ -->PWD
C:\jBASE\JBASEDEMO
jsh JBASEDEMO
```

## CREATE-FILE - Creating a Data File

The CREATE-FILE command enables the user to create a new file for use within the jBASE system.

**Command Syntax:**

```
CREATE-FILE {DICT|DATA} FileName {DICT NumBuckets} {DATANumBuckets}

CREATE-FILE DATA SAMPLE 11 101
```

**Syntax Elements:**

- **DICT** - This is an optional keyword to specify dictionary section creation only. Leave this keyword out to create both dictionary and data file.
- **DATA** - This is an optional keyword to specify data section creation only. Leave this keyword out to create both dictionary and data file.
- **FileName** - This is the name to be used for the created file. The name can include absolute or relative path information.
- **NumBuckets** - NumBuckets specifies the number of hashing buckets to allocate to the file.

### Note

Since the introduction of dynamic files in jBASE 5.7, the default file created in jBASE is a dynamic file and does not require the size of the file to be set.  Dynamic files do not require resizing.  Additional information about dynamic files can be found [here](./../../../files/dynamic-files/README.md).  

#### Options

|  Option | Description |
| --- | --- |
| TJLOG       | Creates a stub file in the current directory that points to the current transaction log set. |
| DISTRIB     | Creates a stub file in the current directory that references a distributed file. |
| PERM        | The PERM parameters are used to set the permissions of the file as per the chmod command. |
| LOG=YES|NO  | The LOG parameters set or clear the flag which allows the file to be included or excluded when utilizing the item or transaction logging mechanism if licensed on your system. The value is set to YES by default. |
| TRANS=YES|NO | The TRANS parameters set or clear the flag which allows the file to be included or excluded from within any transaction boundaries defined by an executing program. The value is set to YES by default. |
| BACKUP=YES|NO | The BACKUP parameters set or clear the flag which allows the file to be included automatically by the jBASE jbackup utility. The value is set to YES by default. |
| NETWORK=YES|NO | The NETWORK parameters disable or enable the file for use over a network. Only applicable to HASH4 and HASH5 file types. The value is set to AUTO by default to use jDLS when enabled. |
| SECURE=YES|NO | The SECURE parameters disable or enable secure file updates. Only applicable to HASH3 and jPLUS file types. The value is set to NO by default. |

### Create a file

1. Create file (data only):

```
CREATE-FILE DATA SAMPLE
[ 417 ] File SAMPLE created , type = JD
```

2. Create file (dictionary only):

```
CREATE-FILE DICT SAMPLE
[ 417 ] File SAMPLE]D created , type = JD
```

**If the file already exists, the following message appears:**

```
[ 413 ] File name DICT SAMPLE already exists
```

3. Delete hashed file (both data and dictionary)

```
DELETE-FILE SAMPLE
[ 417 ] File SAMPLE created , type = JD
```

4. Create both data and dictionary file:

```
CREATE-FILE SAMPLE
[ 417 ] File SAMPLE]D created , type = JD
[ 417 ] File SAMPLE created , type = JD
```

## jBASE Editor (jED) -Add and edit data

jBASE is supplied with its own fully-featured screen editor, which can be used for creating, modifying, or deleting records. The jED editor has been designed for ease of use, easy personal configuration and is especially suited to the editing of jBC programs. The jED editor is used in two different modes; command mode and edit mode, with edit being the default mode and the current mode displayed at the top of the screen.

**Command mode** - For entering editor commands.

**Edit mode** - For entering or modifying data.

**Command Syntax:**

```
jed <filename> <record-list>
```

**Syntax Elements:**

- **Filename** - This is the name of the "file" containing the records.
- **Record-list** - It is possible to furnish a list of records to be successively edited. This can be a list of records separated by a space, or "\\*" to indicate all records in the file. Note that the \ is the shell escape character to stop the \* being treated as a wild card that would otherwise be expanded. Additionally, the record-list can be fed to this Command by preceding the jed Command with a jBASE list generating Command such as SELECT or SSELECT. In this case, the record-list is ignored.
- **Enter Edit Mode** - press the &lt;Esc&gt; key or one that has been reconfigured to perform the same action.
- **Exit and Update** - FI writes the updated version of the file or record back to disk and releases any lock set. The edit session then terminates or continues with the next record, if this choice is in effect.
- **Exit and Discard** - EX leaves the file or record as it was at the start of the session, and releases any lock set. If updates have been made you will be prompted for confirmation before the updates are discarded. The edit session then terminates or continues with the next record, if this choice is in effect.

### Add data to file

1. Enter the following command to create the REC1 record in SAMPLE and open in jEditor.

```
JED SAMPLE REC1
```

2. Add the following data into the corresponding row.

```
File SAMPLE , Record 'REC1'                 Insert 14:23:43
Command->FI
0001 JBASE
0002 IRVINE
0003 CA
End Of Record
```

3. Press Esc to exit edit mode; then type FI to save and exit the record.
4. List contents of SAMPLE file.

```
LIST SAMPLE
SAMPLE......
REC1
1 Records Listed
```

5. List contents of SAMPLE file and specify the header.

```
LIST SAMPLE ∗A1 ∗A2 ∗A3
SAMPLE......   ∗A1...........   ∗A2...........  ∗A3.......... REC1
                JBASE              IRVINE          CA
```

### Create a dictionary

1. Enter the following command to create the dictionary COMPANY for SAMPLE and open in jEditor.

```
JED DICT SAMPLE COMPANY
```

2. Add the following data into the corresponding rows.

```
File SAMPLE , Record 'COMPANY' Insert 14:23:43
Command->
0001 A
0002 1
0003
0004
0005
0006
0007
0008
0009 L
0010 15
End Of Record
```

Attribute 0009 - Is specifying the text justification as left

Attribute 0010 - Is specifying the text length as 15 characters

### [Dictionary Data Structure](./../../jql/data-definition-records---dictionary-structure)

| Field | Description |
| --- | --- |
| 001 | D/CODE |
| 002   | FMC (field-mark count) |
| 003 | Column heading |
| 004 | Controlling/Dependent Attributes |
| 005 - 006 | Not used |
| 007 | Input/Output Conversion Codes |
| 008 | Pre-process Conversion Codes |
| 009 | Format |
| 010 | Width |

3. Press Esc to exit edit mode; then type FI to save and exit the record.
4. Repeat step #2, adding the dictionaries CITY and STATE as the headers for A2 and A3, update attribute 0002 as follows:

```
Dictionary CITY - Attribute 0002 = 2  
Dictionary STATE- Attribute 0002 = 3
```

5. List contents of SAMPLE file.

```
LIST SAMPLE COMPANY CITY STATE
```

```
PAGE 1        14:25:31 19 NOV 2016
SAMPLE.... COMPANY...... CITY...... STATE
REC1 JBASE IRVINE CA
1 Records Listed
```

Back to [Getting Started](./../../README.md)

<PageFooter />
