# Optional Parameters Unique to Column Line Area and Bar

<PageHeader />

## Canvas Properties for 2D Charts ONLY 

| <!----> | <!----> |
| --- | --- |
| canvasBgColor=”HexColorCode” | Sets the background color of the canvas. |
| canvasBgAlpha=”NumericalValue(0-100)” | Sets the alpha (transparency) of the canvas. |
| canvasBorderColor=”HexColorCode” | Sets the border color of the canvas. |
| canvasBorderThickness=”NumericalValue(0-100)” | Sets the border thickness (in pixels) of the canvas. |

## Canvas Properties for 3D Charts Only

| <!----> | <!----> |
| --- | --- |
| canvasBgColor=”HexColorCode” | Sets the background color of the canvas. The background of the canvas is the one behind the columns. |
| canvasBaseColor=”HexColorCode” | Sets the color of the canvas base, the base on which the columns are placed. |
| canvasBaseDepth=”Numerical Value” | Sets the height (3D Depth) of the canvas base. |
| canvasBgDepth=”Numerical Value” S | Sets the 3D Depth of the canvas background. |
| showCanvasBg=”1/0” | Sets whether or not to show the canvas background. |
| showCanvasBase=”1/0” | Sets whether to show the canvas base. |

## Chart Numerical Limits

| <!----> | <!----> |
| --- | --- |
| yAxisMinValue=”value” | Determines the lower limit of y-axis |
| yAxisMaxValue=”value” | Determines the upper limit of y-axis. |

## Note 

>If you don’t specify any of the above values, it is automatically calculated based on the data provided.

## Generic Properties

| <!----> | <!----> |
| --- | --- |
| shownames=”1/0” | Can be set to 1 or 0. It sets the configuration whether the x-axis values (for the data sets) are displayed or not. By default, this attribute assumes the value 1, which means the x-axis names will be displayed. |
| showValues=”1/0” | Can be set to 1 or 0. It sets the configuration whether the data numerical values will be displayed along with the columns, bars, lines, and pies. By default, this attribute assumes the value 1, which means the values will be displayed. |
| showLimits=”1/0” | Option to show/hide the chart limit textboxes. |
| rotateNames=”1/0” | Configuration that sets whether or not the category name text boxes would be rotated. |
| animation=”1/0” | Sets whether the animation is played or whether the entire chart is rendered at once. |
| showColumnShadow=”1/0” | Whether or not the 2D shadow for the columns would be shown. (for 2D charts only). |
| showLegend=”1/0” | Sets whether the legend would be displayed at the bottom of the chart. (for multiseries charts only). |

## Font Properties

| <!----> | <!----> |
| --- | --- |
| outCnvBaseFont=”FontName” | Sets the base font family for all the values and names in the chart that lie outside the canvas. |
| outCnvBaseFontSze=”FontSize” | Sets the base font size of all the values and the names in the chart that lie outside the canvas. |
| outCnvBaseFontColor=”HexColorCode” | Sets the base font color of all the values and the names in the chart that lie outside the canvas. |

## Number Formatting Options

| <!----> | <!----> |
| --- | --- |
| divLineDecimalPrecision=”2” | Number of decimal places all divisional line (horizontal) values on the chart are rounded to. |
| limitsDecimalPrecision=”2” | Number of decimal places upper and lower limit values on the chart are rounded to. |

## Zero Plane (for 2D Charts)

The zero plane is a simple plane (line) that signifies the 0 position on the chart. If there are no negative numbers on the chart, you won't see a visible zero plane.

| <!----> | <!----> |
| --- | --- |
| zeroPlaneThickness=”Numeric Value” | Thickness (in pixels) of the line indicating the zero plane. |
| zeroPlaneColor=”Hex Code” | The color for the zero plane. |
| zeroPlaneAlpha=”Numerical Value 0-100” | The transparency for the zero plane. |

## Zero Plane (for 3D Charts)  

The zero plane is a 3D plane that signifies the 0 position on the chart. If there are no negative numbers on the chart, you won't see a visible zero plane.

| <!----> | <!----> |
| --- | --- |
| zeroPlaneShowBorder=”1/0” | Whether or not the border of a 3D zero plane is plotted. |
| zeroPlaneBorderColor=”Hex Code” | If the border is plotted, sets the border color for the plane. |
| zeroPlaneColor=”Hex Code” | Color for the zero plane. |
| zeroPlaneAlpha=”Numerical Value 0-100” | The intended transparency for the zero plane. |

## Divisional Lines (Horizontal)

Divisional Lines are horizontal or vertical lines running through the canvas. Each divisional line signifies a smaller unit of the entire axis thus aiding the users in interpreting the chart.

| <!----> | <!----> |
| --- | --- |
| numdivlines=”NumericalValue” | Sets the number of divisional lines to be drawn. |
| divlinecolor=”HexColorCode” | Color of the grid divisional line. |
| divLineThickness=”NumericalValue” | Thickness (in pixels) of the grid divisional line. |
| divLineAlpha=”NumericalValue0-100” | Alpha (transparency) of the grid divisional line. |
| showDivLineValue=”1/0” | Option to show/hide the textual value of the divisional line. |

### These only apply to 2D Charts

| <!----> | <!----> |
| --- | --- |
| showAlternateGridColor=”1/0” | Option on whether to show alternate colored horizontal grid bands. |
| alternateHGridColor=”HexColorCode” | Color of the alternate horizontal grid bands. |
| alternateGridAlpha=”NumericalValue0-100” A | Alpha (transparency) of the alternate horizontal grid bands. |

## Divisional Lines (Vertical) for 2D Charts

| <!----> | <!----> |
| --- | --- |
| numVDivLines=”NumericalValue: | Sets the number of vertical divisional lines to be drawn. |
| VDivlinecolor=”HexColorCode” | Color of vertical grid divisional line. |
| VDivLineThickness=”NumericalValue” | Thickness (in pixels) of the line. |
| VDivLineAlpha=”NumericalValue0-100” | Alpha (transparency) of the line. |
| showAlternateVGridColor=”1/0” | Option on whether or not to show alternate colored vertical grid bands. |
| alternateVGridColor=”HexColorCode” | Color of the alternate vertical grid bands. |
| alternateVGridAlpha=”NumericalValue0-100” | Alpha (transparency) of the alternate vertical grid bands. |

<PageFooter />
