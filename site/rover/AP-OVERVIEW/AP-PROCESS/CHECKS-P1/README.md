##  Post Checks (CHECKS.P1)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-P1-1/README.md)   

**Purpose**  
The CHECKS.P1 procedure is used to post Prechecks records after the successful
printing of the checks. You have the option of posting the entire check run or
a range of check numbers.  
  
In this procedure, there are prompts for the check run number, starting check
number and ending check number. If you are posting the entire check run, you
do not need to enter the starting and ending check numbers. However, if you
only wish to post part of the checks run, enter the starting and ending check
numbers. All checks that fall within that range will be posted. You may need
to partially post a check run if there were problems printing the checks and
you need to re-print some but not all of the checks.  
  
All AP records which are being paid by the check run are updated with the
check information and the open balance is changed. Register (APREG) records
are created for all amounts and accounts numbers posted.  
  
As each Prechecks record is processed, it is deleted from the Precheck file.

**Frequency of Use**  
As required.

**Prerequisites**  
A check run must have been created through the [ AP.P1 ](AP-P1/README.md) procedure and all checks must have been successfully printed. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />