# QSELECT

**Created At:** 7/9/2018 12:30:59 PM  
**Updated At:** 7/13/2018 9:31:57 AM  

**Tags:**
<badge text='jql' vertical='middle' />
<badge text='lists' vertical='middle' />

## Description 

Generates a select list from the fields of specified items and makes it the current active (default) list. It takes the general form:

```
QSELECT {{file-name} record-list|*} {(n}
```

where:

- **file-name** specifies the source file name.
- **record-list** is a list of record keys, or an asterisk (\*) to signify all records.
- **n**is the field number in each record, from which the list is to be created. If n is not specified, all the fields in the source records will be used to generate the list elements.




## Note: 


> If the command is issued without specifying a record list, the user will be prompted to supply one.


QSELECT is similar to the FORM-LIST command but has the additional capability of creating a list from more than one source record. Also, FORM-LIST creates a list from all the attributes of a single record, QSELECT can create a list from multiple records, and you can specify that each record is only to contribute one field.



### EXAMPLE 1

```
:QSELECT SALES * (3
4000 records selected
>SAVE-LIST CUSTOMERS
```

Creates a list containing the values from field 3 of all the records in the SALES file. The list is then saved as CUSTOMERS.



### EXAMPLE 2

```
:QSELECT SALES "ABC" "DEF" "GHI" (3
3 records selected
>SAVE-LIST CUSTOMERS
```

Creates a list containing the values from field 3 of records ABC, DEF and GHI in the SALES file. The list s then saved as CUSTOMERS.



Back to [List Processing](325912-list-processing)
