##  Generate Forecast (FORECAST.E)

<PageHeader />

**Form Details**  
[ Form Details ](FORECAST-E-1/README.md)   

**Purpose**  
The FORECAST.E procedure is used to generate a forecast which will be used in
the planning process. The user may load a calculated forecast based upon sales
or usage. If the forecast is based on more than one historical year, the
forecast quantity that is loaded into the screen for the user will be the
total quantity sold or used for each period divided by the number of
historical years. For example, if the forecast is based on two years of sales
and the total sold in January for each year was 10, the forecast quantity
would, also, be 10. The calculation would be 10 (qty sold in year 1) + 10 (qty
sold in year 2) divided by 2 (number of historical years.  
  
Once the forecast is loaded on the screen, changes may be made to any figures
on the screen, with the exception of the "original quantity" field. This field
contains the originally calculated forecast and can be used to "refresh" the
data to it's original state. To change the forecast for a period, the "factor"
field may be updated. For example, when originally loaded, the factor is set
to 100 (100%). Changing the column factor to 200 will double the forecast for
that period.  
  
This procedure can load figures into the SF (Sales Forecast) file, the ID (Independent Demand) file or the MS (Master Schedule) file. Once loaded, the figures can be manually changed using the data entry procedures provided for those files (e.g. [ SF.E ](../../../../rover/MFG-OVERVIEW/MFG-ENTRY/SF-E/README.md) , [ ID.E ](../../../../rover/MFG-OVERVIEW/MFG-ENTRY/ID-E/README.md) and [ MS.E ](../MS-E/README.md) ).   

**Frequency of Use**  
As required.

**Prerequisites**  
Part numbers must be defined in [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />