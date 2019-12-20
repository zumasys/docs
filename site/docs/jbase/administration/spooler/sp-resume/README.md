# SP-RESUME

**Created At:** 4/5/2018 10:28:46 AM  
**Updated At:** 1/24/2019 8:26:49 AM  
**Original Doc:** [306460-sp-resume](https://docs.jbase.com/44205-spooler/306460-sp-resume)  


## Description 

This command resumes despooling from a formqueue. It takes the general form:

```
SP-RESUME formqueue
```

where formqueue is the formqueue from which to resume despooling.



If used without arguments, as:

```
SP-RESUME
```

the user will be prompted as:

```
FORM-QUEUE:
```

The user will then enter the formqueue to resume printing.




> ### Note: 
> 
> Despooling will be resumed from the point at which the formqueue was either [SUSPENDED](306472-untitled-question) or [STOPPED](306456-untitled-question).




Back to [Spooler.](jbase-spooler)
