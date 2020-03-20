# DIFF-LIST

**Created At:** 7/9/2018 12:28:48 PM  
**Updated At:** 7/13/2018 9:27:19 AM  
**Original Doc:** [diff-list](https://docs.jbase.com/47026-lists/diff-list)  
**Original ID:** 325916  
**Internal:** No  

## Description

Creates a list from two stored lists. The new list contains all the items in the first list less any like items from the second list. It takes the general form:

```
DIFF-LIST {DICT} File1 List1 TO {TargetList}
Less: {({DICT} File2} List2
```

where:

- **List1** and **List2** are the names of stored lists.
- **File1** and **File2** represent the files in which the lists are stored. If File2 is not specified then List2 is assumed to be in File1.
- **TargetList** is the name of the resultant list. If it is not specified then an active list is created otherwise it is written to file defined to hold [stored lists](./../list-storage).

### Example

File PROFILES holds the items LISTA and LISTB:

| LISTA | LISTB |
| --- | --- |
| Jennifer | Michelle |
| Carrie | Sheila |
| Michelle | Mary |
| Renee | Carrie |
| Maryanne |  |
| Cindy |  |

The command:

```
DIFF-LIST PROFILES LISTA TO LISTV
Less:LISTB
```

generates a stored list called LISTV that contains the elements Jennifer, Renee, Maryanne and Cindy.

The command:

```
DIFF-LIST PROFILES LISTB
Less:(PROFILES LISTA
```

generates an active list that contains the elements Sheila and Mary.

Back to [List Processing](./../list-processing)
