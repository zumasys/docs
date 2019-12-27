# SP-MOVEQ

**Created At:** 4/5/2018 9:54:42 AM  
**Updated At:** 1/24/2019 8:37:08 AM  
**Original Doc:** [306447-sp-moveq](https://docs.jbase.com/44205-spooler/306447-sp-moveq)  
**Original ID:** 306447  
**Internal:** No  


## Description 

This command moves all print jobs from one formqueue to another formqueue. It takes the general form:

```
SP-MOVEQ from-formqueue to-formqueue
```

where:

- from-formqueue is the source formqueue.
- to-formqueue is the destination formqueue.


If used without arguments, for instance:

the user will be prompted as:

```
FROM-FORM-QUEUE TO-FORM-QUEUE
```

the user willl then enter the appropriate information.




> ### Note: 
> 
> Root or the generating user can only move print jobs assigned with the P option. Any user can move print jobs assigned with the U option.
> Parameters must be entered in the order shown. The user will be prompted for any missing parameters.




Back to[Spooler.](./../jbase-spooler)
