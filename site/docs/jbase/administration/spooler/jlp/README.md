# jlp

**Created At:** 9/18/2018 10:03:41 AM  
**Updated At:** 10/1/2018 3:51:04 PM  
**Original Doc:** [jlp](https://docs.jbase.com/44205-spooler/jlp)  


## Description 

The jBASE spooler program. This is the jBASE equivalent of the unix lp command. It takes the general form:

where:

```
jlp {options} {filename}
```

where:

- **FileName**can be any of the following:
    - Windows or Unix file name
    - Database file + record keys
    - Database file + '\*'
    - Database file + Select list.


If FileName is omitted, then all input is assumed to come from stdin.

- **options** may be:



| Option<br> | Description<br> |
| --- | --- |
| -aAssignOptions<br> | Change the default assignment options<br> |
| -cCount<br> | Change the default number of copies to Count<br> |
| -m<br> | Multi-queue support. Data MUST come from stdin, and an 8-byte header preceeds each print element.<br> |
| -qQueueName<br> | Override the default queue name.<br> |
| -rReportNumber <br> | Use a different report number other than 0.<br> |
| -s<br> | Do not display what queue we have printed to.<br> |


### 


## Note: 


> The jlp command will respect the current form queue assignment from the most recent SP-ASSIGN command. The action of this program is also affected by the 'JBC\_PRINT\_ASSIGN\_n' environment variables.

