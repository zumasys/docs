# SP-ALIGN

**Created At:** 4/5/2018 1:13:16 PM  
**Updated At:** 1/24/2019 8:50:29 AM  
**Original Doc:** [306480-sp-align](https://docs.jbase.com/44205-spooler/306480-sp-align)  


## Description 

This command allows for alignment before despooling. It takes the general form:

```
SP-ALIGN formqueue
```

where formqueue is the formqueue on which to allow alignment.



If used without argument, the user will be prompted as:

```
FORM-QUEUE:
```

The user will then specify the formqueue they wish to apply the setting.

Print jobs assigned with the align option (A), will display a status of **ALIGN** while suspended and waiting for alignment, before being despooled. This menu option or command prompts for one of the following options.


| Option | Explanation |
| --- | --- |
| A  |  Align. Despools a character mask of the job to enable forms alignment.<br> |
| P | Print. Resumes printing from the formqueue until another print job with align spooler assignment reaches the head of the formqueue.<br> |
| Q  | Quit. Exits the option or command. The alignment command is available only for directly driven formqueues.<br> |




Back to [Spooler.](./../jbase-spooler)


