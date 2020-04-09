# Optional Parameters Unique to Column Line Area and Bar

<PageHeader />

# Canvas Properties for 2D Charts ONLY 


| <!----> | <!----> |
| --- | --- |
| canvasBgColor=”HexColorCode”<br> | Sets the background color of the canvas.<br> |
| canvasBgAlpha=”NumericalValue(0-100)”<br> | Sets the alpha (transparency) of the canvas.<br> |
| canvasBorderColor=”HexColorCode”<br> | Sets the border color of the canvas.<br> |
| canvasBorderThickness=”NumericalValue(0-100)”<br> | Sets the border thickness (in pixels) of the canvas.<br> |




# Canvas Properties for 3D Charts Only


| <!----> | <!----> |
| --- | --- |
| canvasBgColor=”HexColorCode”<br> | Sets the background color of the canvas. The background of the canvas is the one behind the columns.<br> |
| canvasBaseColor=”HexColorCode”<br> | Sets the color of the canvas base, the base on which the columns are placed.<br> |
| canvasBaseDepth=”Numerical Value”<br> | Sets the height (3D Depth) of the canvas base.<br> |
| canvasBgDepth=”Numerical Value” S<br> | Sets the 3D Depth of the canvas background.<br> |
| showCanvasBg=”1/0”<br> | Sets whether or not to show the canvas background.<br> |
| showCanvasBase=”1/0”<br> | Sets whether to show the canvas base.<br> |




# Chart Numerical Limits


| <!----> | <!----> |
| --- | --- |
| yAxisMinValue=”value”<br> | Determines the lower limit of y-axis<br> |
| yAxisMaxValue=”value”<br> | Determines the upper limit of y-axis.<br> |





> NOTE: If you don’t specify any of the above values, it is automatically calculated based on the data provided.




Generic Properties


| <!----> | <!----> |
| --- | --- |
| shownames=”1/0”<br> | Can be set to 1 or 0. It sets the configuration whether the x-axis values (for the data sets) are displayed or not. By default, this attribute assumes the value 1, which means the x-axis names will be displayed.<br> |
| showValues=”1/0”<br> | Can be set to 1 or 0. It sets the configuration whether the data numerical values will be displayed along with the columns, bars, lines, and pies. By default, this attribute assumes the value 1, which means the values will be displayed.<br> |
| showLimits=”1/0”<br> | Option to show/hide the chart limit textboxes.<br> |
| rotateNames=”1/0”<br> | Configuration that sets whether or not the category name text boxes would be rotated.<br> |
| animation=”1/0”<br> | Sets whether the animation is played or whether the entire chart is rendered at once.<br> |
| showColumnShadow=”1/0”<br> | Whether or not the 2D shadow for the columns would be shown. (for 2D charts only).<br> |
| showLegend=”1/0”<br> | Sets whether the legend would be displayed at the bottom of the chart. (for multiseries charts only).<br> |




# Font Properties


| <!----> | <!----> |
| --- | --- |
| outCnvBaseFont=”FontName”<br> | Sets the base font family for all the values and names in the chart that lie outside the canvas.<br> |
| outCnvBaseFontSze=”FontSize”<br> | Sets the base font size of all the values and the names in the chart that lie outside the canvas.<br> |
| outCnvBaseFontColor=”HexColorCode”<br> | Sets the base font color of all the values and the names in the chart that lie outside the canvas.<br> |




# Number Formatting Options


| <!----> | <!----> |
| --- | --- |
| divLineDecimalPrecision=”2”<br> | Number of decimal places all divisional line (horizontal) values on the chart are rounded to.<br> |
| limitsDecimalPrecision=”2”<br> | Number of decimal places upper and lower limit values on the chart are rounded to.<br> |




# Zero Plane (for 2D Charts)

The zero plane is a simple plane (line) that signifies the 0 position on the chart. If there are no negative numbers on the chart, you won't see a visible zero plane.


| <!----> | <!----> |
| --- | --- |
| zeroPlaneThickness=”Numeric Value”<br> | Thickness (in pixels) of the line indicating the zero plane.<br> |
| zeroPlaneColor=”Hex Code”<br> | The color for the zero plane.<br> |
| zeroPlaneAlpha=”Numerical Value 0-100”<br> | The transparency for the zero plane.<br> |




# Zero Plane (for 3D Charts) 

The zero plane is a 3D plane that signifies the 0 position on the chart. If there are no negative numbers on the chart, you won't see a visible zero plane.


| <!----> | <!----> |
| --- | --- |
| zeroPlaneShowBorder=”1/0”<br> | Whether or not the border of a 3D zero plane is plotted.<br> |
| zeroPlaneBorderColor=”Hex Code”<br> | If the border is plotted, sets the border color for the plane.<br> |
| zeroPlaneColor=”Hex Code”<br> | Color for the zero plane.<br> |
| zeroPlaneAlpha=”Numerical Value 0-100”<br> | The intended transparency for the zero plane.<br> |




# Divisional Lines (Horizontal)

Divisional Lines are horizontal or vertical lines running through the canvas. Each divisional line signifies a smaller unit of the entire axis thus aiding the users in interpreting the chart.


| <!----> | <!----> |
| --- | --- |
| numdivlines=”NumericalValue”<br> | Sets the number of divisional lines to be drawn.<br> |
| divlinecolor=”HexColorCode”<br> | Color of the grid divisional line.<br> |
| divLineThickness=”NumericalValue”<br> | Thickness (in pixels) of the grid divisional line.<br> |
| divLineAlpha=”NumericalValue0-100”<br> | Alpha (transparency) of the grid divisional line.<br> |
| showDivLineValue=”1/0”<br> | Option to show/hide the textual value of the divisional line.<br> |


## These only apply to 2D Charts


| <!----> | <!----> |
| --- | --- |
| showAlternateGridColor=”1/0”<br> | Option on whether to show alternate colored horizontal grid bands.<br> |
| alternateHGridColor=”HexColorCode”<br> | Color of the alternate horizontal grid bands.<br> |
| alternateGridAlpha=”NumericalValue0-100” A<br> | Alpha (transparency) of the alternate horizontal grid bands.<br> |




# Divisional Lines (Vertical) for 2D Charts


| <!----> | <!----> |
| --- | --- |
| numVDivLines=”NumericalValue:<br> | Sets the number of vertical divisional lines to be drawn.<br> |
| VDivlinecolor=”HexColorCode”<br> | Color of vertical grid divisional line.<br> |
| VDivLineThickness=”NumericalValue”<br> | Thickness (in pixels) of the line.<br> |
| VDivLineAlpha=”NumericalValue0-100”<br> | Alpha (transparency) of the line.<br> |
| showAlternateVGridColor=”1/0”<br> | Option on whether or not to show alternate colored vertical grid bands.<br> |
| alternateVGridColor=”HexColorCode”<br> | Color of the alternate vertical grid bands.<br> |
| alternateVGridAlpha=”NumericalValue0-100”<br> | Alpha (transparency) of the alternate vertical grid bands.<br> |

<PageFooter />
