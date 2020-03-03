# DELETE-LIST

**Created At:** 7/9/2018 12:27:46 PM  
**Updated At:** 12/20/2018 10:07:32 AM  
**Original Doc:** [delete-list](https://docs.jbase.com/47026-lists/delete-list)  
**Original ID:** 325915  
**Internal:** No  


## Description 

Deletes a saved list. It takes the general form:

```
DELETE-LIST {listname {account-name}}
```

where:

- **listname**specifies the name of the list to be deleted. If you do not specify listname, the default list will be deleted.
- **account-name** is the name of the account from which the list was saved. If you do not specify account-name, the current account is assumed.




### EXAMPLE

```
:DELETE-LIST A.SALES 
List "A.SALES" deleted
```



If **d3\_list\_processing = true** is set in the **$JBCRELEASEDIR/config/Config\_EMULATE** file then the command deletes lists from a file or the POINTER-FILE, and it's use may be as:

```
DELETE-LIST {list1 list2 list3 ...} {(options}
```

or

```
DELETE-LIST {DICT} filename id1 {id2 id3 ...} {(options}
```

where Options may be :

- **A** = All Lists are in the POINTER-FILE, useful if the list name is the same as a file name
- **I**= Suppress all messages




Back to [List Processing](./../list-processing)
