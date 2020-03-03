# EDIT-LIST

**Created At:** 7/9/2018 12:29:18 PM  
**Updated At:** 12/21/2018 10:29:55 PM  
**Original Doc:** [edit-list](https://docs.jbase.com/47026-lists/edit-list)  
**Original ID:** 325917  
**Internal:** No  

**Tags:**
<badge text='jql' vertical='middle' />
<badge text='lists' vertical='middle' />

## Description 

Invokes an editor session to allow for creation, modification , merging or deleting of a select list. It takes the general form:

```
EDIT-LIST {list-name {account-name}} {(options}
```

where:

- **list-name** specifies the name of the list to be edited. If the list does not already exist it will be created. If you do not specify a list name, the default list will be used.
- **account-name** is the name of the account from which the list was saved. If you do not specify account-name, the current account name will be used.
- options can be:
ED=editor editor is the name of the editor you want to use. Default is ED. It is possible to specify an editor other than ED.




## Note: 


> The **EDIT-LIST** command is used when it is desired to edit the contents of a new or existing saved list. The command will convert the list into an editable record and pass it to the editor. When the edit session is finished, the record will be reconverted to a list and stored under its original name.




### EXAMPLE

```
EDIT-LIST A.SALES ED=NOTEPAD
```

Edits the list called A.SALES. The editor used is Windows Notepad.



See also [list storage](./../list-storage).

Back to [List Processing](./../list-processing)
