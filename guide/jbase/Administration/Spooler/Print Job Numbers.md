# Print Job Numbers

Assigning the Job Number Prints jobs are identified by number. The jBASE spooler uses a control record in the jspool_log file - NextJobNumber - to assign print job numbers. The structure of this record is: &lt;1&gt; Date job number was last reset &lt;2&gt; Next job number to be assigned When a job is created, this record is read (and locked) by the   

**Created At:** 9/18/2018 10:12:57 AM  
**Updated At:** 1/24/2019 9:00:57 AM  

