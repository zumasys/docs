# List Processing

**Created At:** 7/9/2018 12:26:03 PM  
**Updated At:** 4/26/2019 8:17:45 AM  
**Original Doc:** [list-processing](https://docs.jbase.com/47026-lists/list-processing)  

**Tags:**
<badge text='lists' vertical='middle' />


| [List storage](./../list-storage) | How saved lists are stored<br> |
| --- | --- |
| AND-LISTS | **AND** two or more save-lists together to produce a new default list containing only values common in all lists (Intersection), e.g. AND-LISTS list1 list2 ... listX<br> |
| [COPY-LIST](./../copy-list) | Copy a saved list to another list or to another file |
| [DELETE-LIST](./../delete-list) | Deletes a saved list |
| [DIFF-LIST](./../diff-list) | Creates a list which is the difference between two stored lists |
| [EDIT-LIST](./../edit-list) | Edit an existing list. The default editor is **ED**, however an alternate editor can be specifed using the **ED=**option, e.g.<br>**edit-list planets ed=jed<br> edit-list employees ed=notepad<br>edit-list books ed=nano** |
| [FORM-LIST](./../form-list) | Creates a list from a record in a file |
| [GET-LIST](./../get-list) | Retrieves a stored list and makes it the active list |
| [LIST-LISTS](./../list-lists) | Displays a list of all select lists available |
| OR-LISTS | **OR** two or more save-lists together to produce a new default list containing all values both common and unique from each list (Union), e.g. OR-LISTS list1 list2 ... listX<br> |
| [QSELECT](./../qselect) | Generates a select list from the fields of specified items and makes it the active list |
| [SAVE-LIST](./../save-list) | Saves the currently active select list to a named list record |
| [SEARCH](./../search) | Creates a list of all records in a file which contain one or more text sequences |
| [SORT-LIST](./../sort-list) | Sorts a saved select list |
| XOR-LISTS | **XOR**(eXclusive OR) two or more save-lists together to produce a new default list containing only unique values from each list. In other words, entries selected from each list do not appear in any of the other lists.<br> |
| [XSELECT](./../xselect) | Generates a select list of keys in a file which do not match given selection criteria |

