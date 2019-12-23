# SP-FQDELETE

**Created At:** 4/5/2018 8:42:25 AM  
**Updated At:** 1/24/2019 8:16:11 AM  
**Original Doc:** [306430-sp-fqdelete](https://docs.jbase.com/44205-spooler/306430-sp-fqdelete)  


## Description 

This command deletes a specified formqueue. It takes the general form:

```
SP-FQDELETE formqueue
```

where formqueue is the name of the formqueue to be deleted.

A formqueue cannot be deleted if the formqueue is not empty or the formqueue is assigned to logical device type. The formqueue should be changed to a device type of zero and any print jobs either deleted or reassigned to another formqueue. Any processes currently assigned to the deleted formqueue will change to NO QUEUE and any attempt to spool a job will display an error message.

If used without the formqueue argument, the user will be prompted to enter the name of the formqueue they wish to delete as:

```
QUEUE-NAME:
```

The user will then enter the formqueue to be deleted.



Back to [Spooler](./../jbase-spooler).
