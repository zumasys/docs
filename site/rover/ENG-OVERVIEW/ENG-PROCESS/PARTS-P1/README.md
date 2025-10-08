##  Stratify Parts for Cycle Counting (PARTS.P1)

<PageHeader />

**Form Details**  
[ Form Details ](PARTS-P1-1/README.md)   

**Purpose**  
The PARTS.P1 procedure assigns ABC codes to records in the Parts file. There
are two ways to assign ABC codes. The first involves two cutoff methods. The
first method assigns ABC codes based upon the unit cost of the part. Second,
they can be assigned based on a combination of cost and usage. In each case,
the parts records are sorted by the selected method and assignment is done
based upon the breakpoints entered. The second way to assign ABC codes is by
percentage breakpoints. The number of months usage is specified and used in
combination with the unit cost to rank the part numbers. Then the ABC codes
are assigned based upon the percentages entered.

**Frequency of Use**  
Normally, this is done when the system is first implemented and all parts have
been entered. It may be run any time after that, as required.

**Prerequisites**  
Entry of Parts records ( [ PARTS.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) ), assignment of costs, and the entry of Inventory locations ( [ INVLOC.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />