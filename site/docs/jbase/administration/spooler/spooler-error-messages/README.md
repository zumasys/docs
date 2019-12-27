# SPOOLER ERROR MESSAGES

**Created At:** 4/5/2018 1:30:29 PM  
**Updated At:** 4/18/2018 8:18:32 PM  
**Original Doc:** [306488-spooler-error-messages](https://docs.jbase.com/44205-spooler/306488-spooler-error-messages)  
**Original ID:** 306488  
**Internal:** No  


## Description 

The following is a list of spooler error messages


| Error<br> | Most Likely Cause<br> |
| --- | --- |
| CANNOT ALIGN - PRINTER BUSY<br> | Displayed if an attempt is made to align a formqueue, which is currently being despooled?<br> |
| CANNOT MOVE A FORMQ TO ITSELF<br> | Displayed if an attempt is made to move a formqueue to itself.<br> |
| ILLEGAL ACTION CODE<br> | Displayed if an invalid option is entered.<br> |
| JOB #nnn ALREADY PRINTING<br> | Displayed if you an attempt is made to move a currently despooling print job.<br> |
| JOB ALREADY BEING EDITED BY LINE #nnn<br> | Displayed if an attempt is made to edit a print job already being edited by another line.<br> |
| JOB NOT QUEUED FOR OUTPUT<br> | Displayed if an attempt is made to move a print job with FINISH status to the head of the formqueue.<br> |
| PRINTING SUSPENDED ON JOB #nnn<br> | Displayed when an attempt is made to edit a print job, which is currently being despooled<br> |
| THE FORMQUEUE CANNOT BE FOUND<br> | Displayed if a non-existent formqueue is specified.<br> |
| THE QUEUE IS EMPTY<br> | Displayed if an attempt is made to move a formqueue without print jobs.<br> |
| THERE IS NO JOB WAITING FOR ALIGNMENT<br> | Displayed if an attempt is made to execute the align option or command for a formqueue without a print job waiting for alignment.<br> |
| CMND?<br> | Displayed if an invalid spooler editor command is entered.<br> |




Back to [Spooler](./../../../jbase-basic-%28jbc%29/spooler).
