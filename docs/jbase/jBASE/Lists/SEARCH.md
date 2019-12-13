# SEARCH

**Created At:** 7/9/2018 12:31:45 PM  
**Updated At:** 7/13/2018 9:59:50 AM  

**Tags:**
<badge text='records' vertical='middle' />
<badge text='lists' vertical='middle' />

## Description 

The SEARCH command is used to create a list of all records in a file which contain one or more text sequences. It takes the general form:

```
SEARCH {DICT} filename {record list} {(options{)}}
String : string
String : string
...
```

or

```
SEARCH -h | -? 
```

where:

- **filename**is the name of the file to be searched
- **record list** is a space delimited list or record keys
- each **string** entered are the text strings to search for. You will be prompted for any number of strings to search. Pressing the &lt;Enter&gt; key terminates the String prompting.


options:

- A - all strings must be present for item to be selected
- C - search strings are case insensitive
- D - display line(s) containing the string(s) in select-list produced (implies the I option)
- I - display selected ID's
- L - save line(s) as multivalue in select-list produced
- N - select items *not*containing **string(s)**
- S - no select-list produced (implies the I option)


[Options are case insensitive]

The **SEARCH**command will scan the file specified by filename looking for records which contain the specified text string(s). If it finds any records that match the criteria, it will create a select list containing the record keys. This list then becomes the default select list and will be inherited by the next jBASE command or program.

The **SEARCH**command can be preceded by a select-list.

Back to [List Processing](325912-list-processing)
