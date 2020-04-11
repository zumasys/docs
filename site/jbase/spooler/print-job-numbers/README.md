# Print Job Numbers

<PageHeader />

## Assigning the Job Number

Prints jobs are identified by number. The jBASE spooler uses a control record in the jspool\_log file - NextJobNumber - to assign print job numbers. The structure of this record is:

```
<1> Date job number was last reset
<2> Next job number to be assigned
```

When a job is created, this record is read (and locked) by the spooler. If the date in attribute 1 does not match the current date (or the control record does not exist) then the counter in attribute 2 is reset to 1 and the current date is assigned to attribute 1.

The counter is then used to check if a print job with that number already exists. It is incremented and re-checked until an unused number is determined. In this way, gaps in the job number sequence that occur because old jobs are deleted, are filled by new jobs generated on subsequent days.

When an unused number is determined, it is assigned to the print job and the counter is incremented for the next job that is created.

If the environment variable **JBCSPOOLER\_JOBRESET** is set to a numeric value, then the counter is not reset based on date. Instead the job numbers will keep increasing until they reach the value specified by **JBCSPOOLER\_JOBRESET**. When this happens, the date in the control record is set to the current date and the next job number is set to 1.

## Determining the Job Number

In an application there is often a requirement to determine the number of a print job that has just been created. This may be for something as simple as reporting the number of the print job to the user of the application.

jBASE provides the [SPOOLER(4)](./../../../jbase-basic-%28jbc%29/spooler) function to return all relevant information about print jobs being generated. The function is particularly useful when generating multiple jobs on different report channels.

Back to [Spooler](./../jbase-spooler).

  
<PageFooter />
