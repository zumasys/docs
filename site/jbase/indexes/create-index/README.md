# CREATE-INDEX

**Created At:** 8/18/2018 7:06:26 PM  
**Updated At:** 9/26/2018 10:45:15 PM  
**Original Doc:** [create-index](https://docs.jbase.com/48152-indexes/create-index)  
**Original ID:** 335208  
**Internal:** No  

## Description

The CREATE-INDEX command creates indexes on jBase files

```
create-index -Options filename indexname index-definition
```

Where Options can be:

| Option | Description |
| --- | --- |
| -a | Defer building the index (See REBUILD-INDEX) |
| -c | Make the index case insensitive |
| -d | Debug of the index code allowed |
| -lcode | Index Lookup Code |
| -n | Any indexes that produce null strings are ignored |
| -o | Overwrite any existing definition |
| -s | Write out a pseudo source files |
| -v | Verbose display, display one period for each 1000 records rebuilt |
| -m | Supress multivalue index build use multivalues as single key |
| -N | Synonymous with -n option |
| -S | Silent operation |
| -M | Synonymous with -m |
| -Vnn | Limit multivalue used in index key. e.g. V0 = M option |
| -w | Permanent Write Mode (default) |
| -X | Skip building index but mark as "in-sync" |

This command can be used to create a new definition or update an existing definition. In either case, the index will be marked as "out of sync" and will not be available to the query-index , key-select or any of the jQL commands, such as SORT or SELECT.

In order to make the index available to these commands, two options are available:

- When the index is created using the create-index command, use the **-r** option -- this will then systematically go through the data file and rebuild the index based on all the records in the file.
- Run the rebuild-index command against the index.

In both cases, when the operation is completed the index will be marked as "in sync" and the index can be used by the aforementioned programs.

The full format of the index-definition command argument is given in [Appendix A](./../indexes-appendix-a).

- Option **-c** means the indexes created will be done in a case insensitive fashion. For example "Fred" and "FRED" will be the same index. This is used automatically in the key-select or query-index command. However if a jQL command such as SORT or SELECT wants to use the index, then the command must be done in such a way that the jQL command would also be case insensitive (for example, attribute 7 of the DICT item is MCU and the selection criteria is all upper case).
- Option **-d** means the pseudo-code created to build the index key can be debugged. This assumes that the debugger is enabled for the rest of the jBC code anyway.
- Option **-l** is the lookup code. It is used with key-select and query- index. The selection criteria will be converted using an ICONV call before being used. For example if you create a right justified (numeric) index on say attribute 6 of all items, this could be a date field in internal format. If you want to look at a range of dates then instead of doing this:

```
jsh -->key-select ORDERS WITH PLACE-DATE > 10638
```

where 10638 is a date in internal format, then by using the option "-lD" we will perform an ICONV on the selection criteria of format "D" thus translating the date in external format to internal format, and so your command line would be:

```
jsh -->key-select ORDERS WITH PLACE-DATE > 14-feb-1997
```

This also applies to selection criteria passed with a jQL command such as LIST or SELECT.

- Option **-n** shows that any index keys that are created as zero length strings will not be entered into the index. This is useful for suppressing unwanted index keys. It is especially useful when used in conjunction with the CALL statement in the index definition (see [Appendix A](./../indexes-appendix-a)) so that if the subroutine decides the index is not interested in being stored, it creates a null index key.
- Option **-o** will overwrite any existing index definition. Without this, attempts to re-define an index definition will result in an error. If the -o option is used to re-define an existing index definition, then all the index data for the definition previously associated with the index will be deleted.
- Option **-a** means the index data will not be built once the index definition is created. The default action is to build the index, depending upon the size of the file data, this could be a lengthy operation! Once the index data is built it then becomes in-sync with the file data and is available to all the index commands such as key-select and available to jQL commands such as SELECT to improve the performance of them. With this option necessitates a rebuild-index command to rebuild the index data.
- Option **-s** causes some pseudo source code to be created. This is used with option -d to aid debug complex index definitions.
- Option **-v** is the verbose mode and is only applicable when the -r option is also used. It will display a period character for every 1000 records in the file that are rebuilt.
- Option **-w** keeps the index in Permanent Write Mode. When creating an index on a file, the list of values for each key is stored as a B-tree. Normally, when this process is complete, the B-tree is then converted to a linked-list of values. This is generally quicker to retrieve than building the list from the B-tree for each select. However, if using an index on a file that is actively being written to, **especially when the number of values per key is high**, then the 'w' option should be used when creating the index. This will leave the index in Permanent Write Mode, which keeps the values in the index as B-tree rather than as a linked-list. Therefore, **it is recommended to create all indexes with this option**. The primary reason is that it does faster index **writes** (as it does not have to convert the B-tree to a linked-list) and does not noticeably hinder **read** speed. A secondary reason is that it eliminates any need to understand the data, especially if the index changes complexion in the future. Note that the index will be larger when this option is used. As to how much larger depends on the data being indexed.

Example: Create an index based on attribute 1 , concatenated with attribute 2. The index will be kept in Permanent Write Mode.

```
jsh -->create-index -w filename indexname by 1 : 2
```

Example: Create an index on the attribute given in the DICTionary definition NAME and a second attribute number 3 , but in descending order

```
jsh -->create-index filename indexname by NAME by-dl 3
```

Example: Create an index on attribute 4 which is normally an internal date. It is better to be able to specify dates in external format when doing selections against it. Additionally if the field is a null string, then it is not advisable to store any index information.

```
jsh -->CREATE-INDEX -lD -n ORDERS BY-AR 4
```

Example: Create an index using three attributes.

```
jsh -->create-index FILENAME INDEXNAME BY 1 BY 2 : "*" : 3
```

In the above definition the index key is built out of three attributes. Should these attributes all have differing numbers of multi-values it makes it difficult to create an index key that is logically consistent. Therefore in the above example it would fail to create the index definition.

- Option **N** is synonymous with the -n option on create-index. When used, any index keys that equate to a null string will not be stored.This is a compatibility option.
- Option **S** is a compatibility option which provides for silent operation when an index is created.
- Option **M** or -m option suppresses creating individual index keys for each mutlivalue, in other words all mutlivalues are used to create the index key.

For example, if an index is generated on a record with an attribute as follows:

```
PIPE
001 123]456]789
```

Then by default three index values based on "123" , "456" and "789" will be created. With the -m or (M) option on create-index, a single index value will be built based on "123]456]789".

- Option **Vn**. This option provides compatibility and is used to limit the number of multivalues used to generate an index key. Without this option then ALL multi-values will each generate an index definition. This option restricts it to the first nnn values. A special case of (V0) exists. In this case where the multi-value count is set to 0, we assume no multi-values are required and so we don"t split the attribute into multi-values but treat the entire attribute as a single entity -- in effect then (V0) option is identical to the (M) option.

Remember the jBASE syntax already allows an individual value to be used instead. For example

```
CREATE-INDEX FILENAME INDEXNAME BY 4.3
```

means just use the third multi-value in attribute 4.

- Option **X**. This option on CREATE-INDEX will set-up the index, but not run the existing file through it - in other words, it doesn"t make any attempt to index what is already in the file. The file will still me marked as "in-sync". The net result is that you get an index later with only newly-written or modified records - very nice when you're dealing with huge files and you only want to process what's changed or created since the index was set-up.

In addition to the above syntax a compatible form of the CREATE-INDEX command can also be used.

```
CREATE-INDEX FILENAME DICTITEM
```

This creates an index called DICTITEM and the index definition is based on the dictionary item DICTITEM.

jBASE supports this by converting on-line the syntax to the jBASE syntax and notifying the user of the equivalent converted command (unless the (S) option is used).

When this happens the dictionary definition is used as follows:

| Attribute # | Definition |
| --- | --- |
| Attribute 2 | indicates what attribute number to extract |
| Attribute 7 | indicates any lookup code i.e. what to convert any matching string using |
| Attribute 8 | indicates any conversions to apply when building the index data |
| Attribute 9 | indicates the justification of the index keys (left or right) |

jBASE allows indexes created in this manner to be used with some jQL commands like SELECT or SORT. An index which is not created via a dictionary item must query the index with KEY-SELECT or QUERY-INDEX.

If a complex definition exists in attribute 8, then the conversion will fail and the user will have to use the jBASE syntax.

This example shows a DICT item in jBASE and how , if you run the create-index command against it, it will be converted to the jBASE syntax and run.

```
INDEX1
001 A
002 3
003 Description
004
005
006
007 D2
008 MCU
009 R
010 10
```

For example

```
CREATE-INDEX -a filename INDEX1
```

```
Notice: Command converted to "CREATE-INDEX -lD2 filename BY-AR OCONV(3,"MCU")"
Index definition "INDEX1" created successfully
Warning: You now need to rebuild the index data for file "filename" using rebuild-index.
```

Back to [Indexes](./../README.md)