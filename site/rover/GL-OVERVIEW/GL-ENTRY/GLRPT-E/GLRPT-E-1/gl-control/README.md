##  GL Control Record Entry (GL.CONTROL)

<PageHeader />

**Form Details**  
[ General ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1)   
[ Posting Groups ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-2)   
[ Account Groups ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-3)   

**Purpose**  
The GL.CONTROL procedure is used to define control information which will be
used by the General Ledger module. The information entered in this procedure
is used to control activities such as reporting periods and module interface
procedures.  
  
When a fiscal year is closed, the system rolls the totals forward. The total
of all income statement accounts is added to the total for the retained
earnings account that is defined in this procedure and the beginning balances
for the income statement accounts are set to zero. There is an option to roll
these totals forward to all future years that have been closed (multi-year
roll) or only to the year immediately following the fiscal year being closed
(single year roll).  
  
If the multi-year roll option is selected the totals will be rolled forward to
all future fiscal years through the last closed year. Example: The current
year is 2011 and fiscal years 2006 - 2009 have been closed. If a journal entry
is made for 2007, the totals will roll forward to 2008 - 2010. The totals will
not roll forward to 2011 since 2010 has not yet been closed.  
  
Closing a fiscal period/year will prevent users from creating entries like
checks and deposits into the closed period. However, journal entries can still
be made for a closed fiscal year until the year has been finalized. When a
journal entry for a closed fiscal year is posted, the account totals are
rolled forward.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the General Ledger Module. This is usually done as part of
setting up the system. The report period and year should be changed as
required to report against prior periods.

**Prerequisites**  
All account number must have been previously defined in the [ GLCHART.E ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />