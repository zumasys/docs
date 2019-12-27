# LISTPEQS

**Created At:** 4/4/2018 9:46:17 AM  
**Updated At:** 1/24/2019 8:09:03 AM  
**Original Doc:** [306222-listpeqs](https://docs.jbase.com/44205-spooler/306222-listpeqs)  
**Original ID:** 306222  
**Internal:** No  


## Description 

Displays print job status. It takes the general form:

```
LISTPEQS {options}
```

where 'options' may take the form:

- “accountname” : specifies that only the print jobs owned by accountname be to be displayed. Use single or double quotes.
- A:  displays only those print jobs, which are owned by the currently logged on account. Default action is to display all print jobs.
- F: displays print jobs grouped by formqueue/printer. Default action is to display all printjobs in sequential order.
- n: display print job number n.
- n-m: displays print jobs in number range n to m inclusive
- P sends output to the printer. Default action is to display in paged format to terminal.




```
PRINTER LIST ELEMENTS                14:28:24  01 APR 2018

# STAT LK LN STATUSES          CP FO PAGES   DATE     TIME   ACCT

4 xxxx  x  x QUEUED            1   1     1 01/04/18 14:28:09 jbase_user
1 QUEUE ELEMENTS LISTED.                 1 PAGES IN USE.
```

The STATUS column displays the status as per SP-JOBS and the specified assignment options. The FO column displays the formqueue Number. The PAGES column is equivalent to SP-JOBS SIZE field.  JobNumber, Copies, Date, Time, Acct are as per [SP-JOBS](./../sp-jobs).



Back to [Spooler.](./../jbase-spooler)
