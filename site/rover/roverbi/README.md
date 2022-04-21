# Rover BI Quick Reference

## Creating Datasets from rest calls to Rover ERP system
Informer's Web Query designer can be used to pull data from a Rover ERP system into a Dataset.  Datasets which utilize the Rover REST API Datasource will either use `getreport` to duplicate an existing Rover report in Informer, or use `getrecord` to generate an Informer Dataset from one or more Rover data files.  All such web queries will share a few things in common:
1. Append "Dataset" to base URL from Datasource
2. Response Handler set to Custom Script
3. Required parameters:
  - account (this is your API client code)
  - routine (this will either be `getrecord` or `getreport`)
  - format (`table` for `getrecord` or `json` for `getreport`)

### getrecord
For creating a Dataset from a Rover file.
Parameters:
 - filename (reqired): the name of the Rover file from which you are pulling data
 - selection (required): select statement to determine which records to include
 - tablenames (optional): groups of columns to include
 - range (optional): range of selected records to include (e.g. 1-100 will include the first 100 records returned by the select statement)

### getreport
For creating a Dataset from an existing Rover report.
Parameters:
 - reportname (required): name of Rover report
 - If the Rover report accepts arguments, they can be optionally included as query parameters

### Response Handler
Under the Response Handler tab in the Query Designer, you can use javascript to help Informer correctly parse the incoming json data into rows and columns.  These scripts can be as complex as you like, but some simple javascript is required for queries that use `getrecord` and `getreport`.  You can reference existing queries to see javascript examples, but in general, they will look something like the following:

For `getreport`:
```
push(response.data.report_lines)
```

For `getrecord` when selecting from file $filename, which contains one "table" (subgroup of columns) called $tablename:
```
var arr = response.data.$filename_items;
if(arr.length != 0){
	arr.forEach(record => {
        push(record.$tablename);
    })
}
```
