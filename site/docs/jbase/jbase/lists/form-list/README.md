# FORM-LIST

**Created At:** 7/9/2018 12:29:43 PM  
**Updated At:** 7/13/2018 9:29:19 AM  
**Original Doc:** [form-list](https://docs.jbase.com/47026-lists/form-list)  

**Tags:**
<badge text='records' vertical='middle' />
<badge text='jql' vertical='middle' />
<badge text='lists' vertical='middle' />

## Description 

Creates a select list from a record in a file. It takes the general form:

```
FORM-LIST filename record-key {(n}
```

where:

- **filename**is the name of the file which contains record-key.
- **record-key**is the name of the record to be converted into a select list.
- **n**is the field number in the record from which the list is to start. If **n** is omitted the list will start from field 1.


The command will open file filename, read the record record-key and create a select list using each field in the record as a separate element for the list. The list formed becomes the active select list and will be inherited by the next jBASE command or program.

## 


## Note: 


> If record key is not specified, the user will be prompted to supply one.






### EXAMPLE

```
:FORM-LIST SALES.LISTS APRIL.SALES
200 records SELECTED
>LIST CUSTOMERS
```

A record named APRIL.SALES in file SALES.LISTS contains a list of customer keys. Each key occupies a separate field. The FORM-LIST command generates an active list of customers. You can then issue a subsequent command such as LIST CUSTOMERS which will use the active list.



Back to [List Processing](325912-list-processin)
