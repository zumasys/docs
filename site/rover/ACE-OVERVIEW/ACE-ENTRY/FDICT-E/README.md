##  Define File Dictionaries (FDICT.E)

<PageHeader />

**Form Details**  
[ Fields ](FDICT-E-1/README.md)   
[ Synonyms/Correlatives ](FDICT-E-2/README.md)   
[ Lookups ](FDICT-E-3/README.md)   
[ File Views ](FDICT-E-4/README.md)   
[ SQL Definition ](FDICT-E-5/README.md)   
[ Settings ](FDICT-E-6/README.md)   

**Purpose**  
The FDICT.E procedure provides for the entry and maintenance of the master
file dictionary records. These records are used to create or update complete
file dictionaries at file time of FDICT.E. The main intent of this procedure
is to make the creation of file dictionaries easier and more consistent.  
  
Additionally, when filed program inserts are created in the BP file which are
used by many of the report procedures.  
  
CAUTION:  
Changing dictionaries, especially the program inserts, may cause unpredictable
results when the report procedures are run. These should only be updated by
someone with detailed technical knowledge of the system.

**Frequency of Use**  
When changes are necessary to file dictionaries.

**Prerequisites**  
The file must exist in the account.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />