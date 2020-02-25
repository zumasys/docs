# Optional Parameters for Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)

<PageHeader />

**Created At:** 9/26/2017 5:12:49 PM  
**Updated At:** 11/21/2017 10:57:10 AM  
**Original Doc:** [optional-parameters-for-line-bar-area-column-pie-and-doughnut-charts-2d-3d](https://docs.zumasys.com/36577-mv-dashboard/optional-parameters-for-line-bar-area-column-pie-and-doughnut-charts-2d-3d)  
**Original ID:** 278575  
**Internal:** No  


# Background Properties


| <!----> | <!----> |
| --- | --- |
| bgColor=”HexColorCode”<br> | Sets the background color for the chart. You can set any hex color code as the value of this attribute. Must be used in conjunction with bgAlpha. IMPORTANT: You CANNOT assign a # at the beginning of the hex color code as this corrupts the XML data passed back to the chart. This also prohibits the use of the COLOR$ equates assigned in the WBPD, MVDB.INCLUDE file. This is true for all color options for all FusionCharts.<br> |
| bgAlpha=”NumericValue(0-100)”<br> | Sets the alpha (transparency) of the graph. Used to set the intensity of the background color defined in bgColor.<br> |


# 


# Font Properties 


| <!----> | <!----> |
| --- | --- |
| baseFont=”FontName”<br> | Sets the base font family of the chart font which lies on the canvas i.e., all the values and the names in the chart which lie on the canvas will be displayed using the font name provided here.<br> |
| baseFontSize=”FontSize”<br> | Sets the base font size of the chart i.e., all the values and the names in the chart that lie on the canvas.<br> |
| baseFontColor=”HexColorCode”<br> | Sets the base font color of the chart i.e., all the values and the names in the chart that lie on the canvas.<br> |




# Charts and Axis Titles 


| <!----> | <!----> |
| --- | --- |
| caption=”String”<br> | Determines the caption that appears at the top of the chart.<br> |
| subCaption=”String”<br> | Sub-caption of the chart.<br> |
| xAxisName=”String”<br> | x-Axis text title (if the chart supports axis, not available for Pie and Doughnut charts).<br> |
| yAxisName=”String”<br> | y-Axis text title (if the chart supports axis, not available for Pie and Doughnut charts).<br> |




# Number Formatting Options 


| <!----> | <!----> |
| --- | --- |
| numberPrefix=”$”<br> | Using this attribute, you can add a prefix to all the numbers visible on the graph. For example, to represent all dollars figure on the chart, you could specify this attribute to ' $' to show like $40000, $50000.<br> |
| numberSuffix=”p.a”<br> | Using this attribute, you can add a prefix to all the numbers visible on the graph. For example, to represent all figures quantified as per annum on the chart, you could specify this attribute as ' /a' to show 40000/a, 50000/a.<br> |


To use special characters for numberPrefix or numberSuffix, you'll need to URL Encode them. That is, suppose you want to have numberSuffix as% (like 30%), you'll need to specify it as under: numberSuffix='%25'.


| <!----> | <!----> |
| --- | --- |
| formatNumber=”1/0”<br> | This configuration determines whether the numbers displayed on the chart will be formatted using commas, e.g., 40,000 if formatNumber='1' and 40000 if formatNumber='0 '<br> |
| formatNumberScale=”1/0”<br><br> | Configuration whether to add K (thousands) and M (millions) to a number after truncating and rounding it - e.g., if formatNumberScale is set to 1, 10434 would become 1.04K (with decimalPrecision set to 2 places). Same with numbers in millions - an M will added at the end.<br> |
| decimalSeparator=”.”<br> | This option specifies the character used as the decimal separator in a number. thousandSeparator=”,” This option specifies the character used as the thousands separator in a number.<br> |
| decimalPrecision=”2”<br> | Number of decimal places all numbers on the chart are rounded to.<br> |




# Hover Caption Properties

The hover caption is the tool tip that shows up when the user moves his/her mouse over a particular data item (column, line, pie, bar etc.).


| <!----> | <!----> |
| --- | --- |
| showhovercap=”1/0”<br> | Option whether to show/hide hover caption box<br> |
| hoverCapBgColor=”HexColorCode”<br> | Background color of the hover caption box.<br> |
| hoverCapBorderColor=”HexColorCode”<br> | Border color of the hover caption box.<br> |
| hoverCapSepChar=”Char”<br> | The character specified as the value of this attribute separates the name and value displayed in the hover caption box.<br> |

