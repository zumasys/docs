# SPOOLER ERROR MESSAGES

**Created At:** 4/5/2018 1:30:29 PM  
**Updated At:** 4/18/2018 8:18:32 PM  
**Original Doc:** [306488-spooler-error-messages](https://docs.jbase.com/44205-spooler/306488-spooler-error-messages)  
**Original ID:** 306488  
**Internal:** No  

## Description

The following is a list of spooler error messages


| Error | Most Likely Cause |
| --- | --- |
| CANNOT ALIGN - PRINTER BUSY | Displayed if an attempt is made to align a formqueue, which is currently being despooled? |
| CANNOT MOVE A FORMQ TO ITSELF | Displayed if an attempt is made to move a formqueue to itself. |
| ILLEGAL ACTION CODE | Displayed if an invalid option is entered. |
| JOB #nnn ALREADY PRINTING | Displayed if you an attempt is made to move a currently despooling print job. |
| JOB ALREADY BEING EDITED BY LINE #nnn | Displayed if an attempt is made to edit a print job already being edited by another line. |
| JOB NOT QUEUED FOR OUTPUT | Displayed if an attempt is made to move a print job with FINISH status to the head of the formqueue. |
| PRINTING SUSPENDED ON JOB #nnn | Displayed when an attempt is made to edit a print job, which is currently being despooled |
| THE FORMQUEUE CANNOT BE FOUND | Displayed if a non-existent formqueue is specified. |
| THE QUEUE IS EMPTY | Displayed if an attempt is made to move a formqueue without print jobs. |
| THERE IS NO JOB WAITING FOR ALIGNMENT | Displayed if an attempt is made to execute the align option or command for a formqueue without a print job waiting for alignment. |
| CMND? | Displayed if an invalid spooler editor command is entered. |

Back to [Spooler](./../../../jbase-basic-%28jbc%29/spooler).
