##  Print Commission Checks (CHECKS.F3)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-F3-1/README.md)   

**Purpose**  
The CHECKS.F3 procedure is used to print commission checks on pre-printed check forms. All records in the Precomm file for a selected check run are selected for printing. After entering the check run number, the starting check number is entered. The number to enter is the first check which will actually be printed. Remember that a blank check may occur due to feeding the paper through the printer. Do not count this blank check. It must be voided manually through the [ CHECKS.E ](../../AP-ENTRY/CHECKS-E) procedure.   
  
Should it become necessary to re-print checks for a check run, due to a printer jam or the incorrect entry of the check number, reload the checks into the printer and enter the new starting check number. All previously printed checks must be voided in the [ CHECKS.E ](../../AP-ENTRY/CHECKS-E) procedure. The actual Checks and COMM files are not updated until the [ CHECKS.P3 ](CHECKS-P3/README.md) posting process. 

**Frequency of Use**  
As required.

**Prerequisites**  
The creation of a check run through the [ COMM.P3 ](COMM-P3/README.md) process. 

**Data Fields**

**Stub:**  
**Rep Number** The number of the representative to whom the check is being
issued.  
**Rep Name** The name of the representative.  
**Amount Paid** The amount being paid by this check.  
**Check:**  
**Check Date** The date on which the check was issued.  
**Check Amount** The total amount of the check.  
**Pay** The amount being paid in words.  
**To the order of** The name and address of the representative being paid.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />