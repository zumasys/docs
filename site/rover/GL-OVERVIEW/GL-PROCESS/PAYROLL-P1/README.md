##  Export Labor Postings to Payroll (PAYROLL.P1)

<PageHeader />

**Form Details**  
[ Form Details ](PAYROLL-P1-1/README.md)   

**Purpose**  
The purpose of PAYROLL.P1 is to generate a text file of the hours worked by
employees for a specific period of time that can be interfaced/imported into
your payroll software.  
  
The file will be a tab delimited text file with the following layout.  
  
1\. Column 1 - Employee Number/Id  
2\. Column 2 - Rate Type  
3\. Column 3 - Hours Worked  
  
Columns 2 and three will be repeated for each rate type defined in the [ LABOR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) record. There will be one row of data per employee number/id.   
  

**Frequency of Use**  
Typically this process will be run for each pay period.

**Prerequisites**  
The employee numbers need to be set-up in a procedure called [ EMP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMP-E) . These employee numbers or id(s) should be the same as those used by your payroll service/software.   
  
The valid rate types used by your company must be defined in [ LABOR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) (production module > data entry section). Examples of rate types are "R" for regular, "O" for over-time and "D" for double-time. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />