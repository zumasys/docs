# SP-DELETE

**Created At:** 4/5/2018 10:19:12 AM  
**Updated At:** 1/24/2019 8:47:56 AM  
**Original Doc:** [306454-sp-delete](https://docs.jbase.com/44205-spooler/306454-sp-delete)  


## Description 

This command deletes a list of print jobs. It takes the general form:

```
SP-DELETE print-job-list
```

where print-job-list is the list of print jobs to be deleted, separated by spaces or commas.



If used without arguments, for instance:

```
SP-DELETE
```

the user will be prompted as:

```
PRINT JOB LIST:
```

The user will then enter the print job list to be deleted.




> ### Note: 
> 
> Root or the user that generated the print job can only delete print jobs with the P option assigned. Any user can delete print jobs with the U option. Print jobs with OPEN or EDIT status cannot be deleted. Print jobs currently being despooled can be deleted. The job is killed and then deleted.




Back to [Spooler.](jbase-spooler)
