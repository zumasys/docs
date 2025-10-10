##  G/L Transaction Entry (GLTRANS.E)

<PageHeader />

**Form Details**  
[ Form Details ](GLTRANS-E-1/README.md)   

**Purpose**  
The GLTRANS.E procedure is used to make journal entries in the General Ledger
module. While entries are made automatically by the system from other modules,
it is necessary from time to time to make either adjusting or direct entries.
Entries may be made for any fiscal period which has not been finally closed.
If an entry is made into a prior year which has been closed (not finally
closed) any amounts will roll forward into the beginning balances of the
current year, as required.  
  
By setting the post flag in the [ GL.CONTROL ](../GL-CONTROL/README.md) procedure, journal entries may either be posted on-line when filed, or filed and then posted in a batch process later. The latter method allows the auditing of journal entries prior to posting, but does require additional steps. 

**Frequency of Use**  
As required.

**Prerequisites**  
The fiscal year must have been defined in the [ FY.E ](../FY-E/README.md) procedure and the account numbers must have been defined by the [ GLCHART.E ](../GLCHART-E/README.md) process. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />