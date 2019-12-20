# PN5_60607

**Created At:** 10/2/2017 1:11:38 PM  
**Updated At:** 11/21/2017 9:03:18 AM  


### Description

Implement D3 style list processing commands.



### Current Release Behavior

```
jsh home ~ -->GET-LIST -?

Command: GET-LIST

Desc:    Retrieves previously stored lists from a file or the POINTER-FILE.

Syntax:  GET-LIST {list1 list2 list3 ... listX} {(options}
         GET-LIST {DICT} filename id1 {id2 id3 ...} {{options}

Options:
         A = All Lists are in the POINTER-FILE, useful if the list name is the same as a file name

Note:    If multiple lists are specified then:
            a) the resulting list is sorted
            b) all entries in the resulting list are unique
```

```
jsh home ~ -->SAVE-LIST -?

Command: SAVE-LIST

Desc:    Saves the currently active select-list

Syntax:  SAVE-LIST {listname}
         SAVE-LIST {DICT} filename listname
```

```
jsh home ~ -->DELETE-LIST -?

Command: DELETE-LIST

Desc:    Deletes lists from a file or the POINTER-FILE

Syntax:  DELETE-LIST {list1 list2 list3 ...} {(options}
         DELETE-LIST {DICT} filename id1 {id2 id3 ...} {(options}

Options:
         A = All Lists are in the POINTER-FILE, useful if the list name is the same as a file name
         I = Suppress all messages
```

This behavior is activated by setting **d3\_list\_processing = true** in the Config\_EMULATE file.

### Description

Implement D3 style list processing commands.



### Current Release Behavior

```
jsh home ~ -->GET-LIST -?

Command: GET-LIST

Desc:    Retrieves previously stored lists from a file or the POINTER-FILE.

Syntax:  GET-LIST {list1 list2 list3 ... listX} {(options}
         GET-LIST {DICT} filename id1 {id2 id3 ...} {{options}

Options:
         A = All Lists are in the POINTER-FILE, useful if the list name is the same as a file name

Note:    If multiple lists are specified then:
            a) the resulting list is sorted
            b) all entries in the resulting list are unique
```

```
jsh home ~ -->SAVE-LIST -?

Command: SAVE-LIST

Desc:    Saves the currently active select-list

Syntax:  SAVE-LIST {listname}
         SAVE-LIST {DICT} filename listname
```

```
jsh home ~ -->DELETE-LIST -?

Command: DELETE-LIST

Desc:    Deletes lists from a file or the POINTER-FILE

Syntax:  DELETE-LIST {list1 list2 list3 ...} {(options}
         DELETE-LIST {DICT} filename id1 {id2 id3 ...} {(options}

Options:
         A = All Lists are in the POINTER-FILE, useful if the list name is the same as a file name
         I = Suppress all messages
```

This behavior is activated by setting **d3\_list\_processing = true** in the Config\_EMULATE file.
