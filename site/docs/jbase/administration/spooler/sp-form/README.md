# SP-FORM

**Created At:** 4/4/2018 1:45:12 PM  
**Updated At:** 1/24/2019 8:42:47 AM  
**Original Doc:** [306273-sp-form](https://docs.jbase.com/44205-spooler/306273-sp-form)  


## Description 

This command may be used to rename an existing formqueue. It takes the general form:

```
SP-FORM old-formqueue new-formqueue
```

where:

- old-formqueue is the existing formqueue name.
- new-formqueue is the new name for the formqueue.




If the command is issued without arguments, for instance as:

```
SP-FORM
```

the user will be prompted for any missing parameters, as:

```
OLD-NAME     NEW-NAME:
```

The user will then enter the old name, and the new name on the same line, and push the return button to rename the formqueue.




> ### Note: 
> 
> If old-formqueue is invalid, the following error message will be displayed: "FORM-QUEUE CANNOT BE FOUND". Only the name of the formqueue is changed, device assignments remain unchanged




Back to [Spooler.](jbase-spooler)
