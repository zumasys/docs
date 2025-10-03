##  End Job (EMPTIME.E4)

<PageHeader />

**Form Details**  
[ End Time Data ](EMPTIME-E4-1/README.md)   

**Purpose**  
This procedure is used for logging employees out of a job. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. The employee enters or scans their employee number. If the employee is logged into only one job no further entry is required. Otherwise they must identify which job they are loggin out of. The employee logs onto a job using the [ EMPTIME.E3 ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/EMPTIME-E3) procedure. If the employee clocks out for the day using either [ EMPTIME.E ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E) or [ EMPTIME.E2 ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2) they will be logged off all jobs. 

**Frequency of Use**  
As required.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMP-E) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) and [ BAR.CONTROL ](../../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />