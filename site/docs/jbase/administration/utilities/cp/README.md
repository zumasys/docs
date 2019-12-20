# CP

**Created At:** 8/16/2018 2:53:19 PM  
**Updated At:** 10/24/2018 9:50:23 AM  
**Original Doc:** [cp](https://docs.jbase.com/46963-utilities/cp)  


## Description

The jBASE CP command utilizes the jBASE copy command to output records from a file to a spooler print job. It takes the general form:

```
CP filename {recordlist} {(Options}
```

where:

- **filename** is the name of the file from which to copy records.
- **recordlist** is the list of record ids which to copy, the **recordlist**may be supplied by an active select-list or default to all records in file if no record list is specified.
- **Options**can be the following:
    - X    display in hexadecimal format.




An example of use may be as:

```
CP CUSTOMERS SMITH
```
