# SAVE-LIST

<PageHeader />

**Tags:**
<badge text='lists' vertical='middle' />

## Description

Saves the currently active select list to a named list record. It takes the general form:

```
SAVE-LIST {listname}
```

Where **list-name** specifies the name under which the list is to be stored. If you do not specify a list name, the default list will be used.

The **SAVE-LIST** command is used to store the currently active (default) select list under a permanent list name. If the specified list name already exists, it will be overwritten.

A **list-name** cannot be saved to a number in the range of 0 through 10 as these are reserved for internal select-lists. Any list saved to a number in this range is saved to an internal list (JBC\_NUMBERED\_LISTS in jBASEWORK). For example, if a list is saved with...

```
SAVE-LIST 6
```

...it is then only available to the next command entered. In other words, you can only do at most one **GET-LIST 6** which then uses the internal list (Note that it is not stored in the POINTER-FILE or any file pointed to by JBCLISTFILE). Any subsequent **GET-LIST 6** will fail since the list no longer exists internally or externally. If you need to use numbered lists, we recommendation that you use numbers greater than 10 to avoid conflicts with the internal (and reserved) list numbers.

### Example

```
jsh ~ -->SSELECT CUSTOMERS WITH POST.CODE = "MK]"
40 records selected
>SAVE-LIST CUSTOMERS.MK
jsh ~ -->
```

Sorts and selects records from the CUSTOMER file which have a POST.CODE value that starts with MK. Saves the list as CUSTOMERS.MK.

If **d3\_list\_processing = true** is set in the **$JBCRELEASEDIR/config/Config\_EMULATE** file then you can alternatively save the list to a specified file, e.g.

```
SAVE-LIST {DICT} filename listname
```

See Also: [List storage](./../list-storage).

Back to [List Processing](./../list-processing)
