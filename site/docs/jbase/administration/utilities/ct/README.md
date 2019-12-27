# CT

**Created At:** 8/16/2018 2:54:11 PM  
**Updated At:** 10/24/2018 9:51:24 AM  
**Original Doc:** [ct](https://docs.jbase.com/46963-utilities/ct)  
**Original ID:** 334589  
**Internal:** No  


## Description

The jBASE **CT** command utilizes the jBASE copy command to output records from a file to the terminal. The command takes the general form:

```
CT filename {recordlist} {(Options}
```

where:

- **filename** is the name of the file from which to copy records.
- **recordlist** is the list of record ids which to copy, the **recordlist**may be supplied by an active select-list or default to all records in file if no record list is specified.
- **Options**can be the following:
    - **X**    display in hexadecimal format




An example of use may be as:

```
CT CUSTOMERS SMITH
```
