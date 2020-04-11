# CT

<PageHeader /> 

## Description

The jBASE **CT** command utilizes the jBASE copy command to output records from a file to the terminal. The command takes the general form:

```
CT filename {recordlist} {(Options}
```

where:

- **filename** is the name of the file from which to copy records.
- **recordlist** is the list of record ids which to copy, the **recordlist** may be supplied by an active select-list or default to all records in file if no record list is specified.
- **Options** can be the following:
  - **X**    display in hexadecimal format

An example of use may be as:

```
CT CUSTOMERS SMITH
```

  
<PageFooter />
