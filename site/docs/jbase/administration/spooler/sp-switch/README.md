# SP-SWITCH 

**Created At:** 4/5/2018 9:59:46 AM  
**Updated At:** 1/24/2019 8:22:26 AM  
**Original Doc:** [306449-sp-switch](https://docs.jbase.com/44205-spooler/306449-sp-switch)  


## Description 

The command moves a print job to a specified formqueue. It takes the general form:

```
SP-SWITCH new-formqueue print-job-list
```

where:

- new-formqueue is the destination formqueue.
- print-job-list is the list of print job numbers to be moved, separated by spaces or commas.




If the command is without arguments, for instance:

```
SP-SWITCH 
```

the user will be prompted as:

```
NEW-FORM-QUEUE     PRINT JOB LIST:
```

The user will then enter the required information.




> ### Note:  
> 
> Any user, except root/Administrators or the generating user, cannot move print jobs assigned with the P option. Any user can move print jobs assigned with the U option.
> 
> Parameters must be entered in the order shown. The user will be prompted for any missing parameters




Back to [Spooler.](./../jbase-spooler)
