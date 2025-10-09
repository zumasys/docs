##  Start Job (EMPTIME.E3)

<PageHeader />

**Form Details**  
[ Start Time Data ](EMPTIME-E3-1/README.md)   

**Purpose**  
This procedure is used for logging employees onto a job. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. The employee enters or scans their employee number and specifies the job code and work order number if required. The employee clocks out of the job when finished using the [ EMPTIME.E4 ](EMPTIME-E4/README.md) procedure. The employee must log out of one job before starting another unless they have setup with multi-job capability through a setting in the [ EMP.E ](../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMP-E) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMP-E) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) and [ BAR.CONTROL ](../../../../../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />