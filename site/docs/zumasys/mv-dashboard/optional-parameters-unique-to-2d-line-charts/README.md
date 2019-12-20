# OPTIONAL PARAMETERS UNIQUE TO 2D LINE CHARTS

**Created At:** 9/26/2017 6:25:04 PM  
**Updated At:** 11/23/2017 5:53:07 AM  
**Original Doc:** [optional-parameters-unique-to-2d-line-charts](https://docs.zumasys.com/36577-mv-dashboard/optional-parameters-unique-to-2d-line-charts)  


# Line Properties


| lineColor=”Hex Code”<br> | If you want the entire line chart to be plotted in one color, set that color for this attribute.<br> |
| --- | --- |
| lineThickness=”Numeric Value”<br> | Thickness of the line (in pixels).<br> |
| lineAlpha=”0-100”<br> | Transparency of the line.<br> |




# Line Shadow Properties


| showShadow=”1/0”<br> | Option to show/hide the shadow.<br> |
| shadowColor=”Hex Code”<br> | If you want to set your own shadow color, you’ll need to specify that color for this attribute.<br> |
| shadowThickness=”Numeric Value”<br> | Sets the thickness of the shadow line (in pixels).<br> |
| shadowAlpha=”0-100”<br> | Sets the transparency of the shadow line.<br> |
| shadowXShift=”Numeric Value”<br> | Sets the x shift of the shadow line from the chart line. That is, if you want to show the shadow 3 pixel right from the actual line, set this attribute to 3. Similarly, if you want the shadow to appear on the left of the actual line, set it to -3.<br> |
| shadowYShift=”Numeric Value”<br> | Sets the y shift of the shadow line from the chart line. That is, if you want to show the shadow 3 pixel below the actual line, set this attribute to 3. Similarly, if you want the shadow to appear above the actual line, set it to -3.<br> |




# Anchor Properties

Anchors (or the marker points) are the polygons that appear at the joint of two consecutive lines. On a line chart, the anchors are the elements that react to the hover caption and link for that particular data point. You can customize all the facets of the anchors using the properties below:


| showAnchors=”1/0”<br> | Configures whether or not the anchors are shown on the chart. If the anchors are not shown, then the hover caption and link functions won’t work.<br> |
| anchorSides=”Numeric Value greater than 3”<br> | Sets the number of sides the anchor will have. E.g., an anchor with 3 sides would represent a triangle; with 4 it would be a square and so on.<br> |
| anchorRadius=”Numeric Value”<br> | Sets the radius (in pixels) of the anchor. The greater the radius, the bigger the anchor size.<br> |
| anchorBorderColor=”Hex Code”<br> | Border color of the anchor<br> |
| anchorBorderThickness=”Numeric Value”<br> | Thickness of the anchor border (in pixels).<br> |
| anchorBgColor=”Hex Code”<br> | Background color of the anchor.<br> |
| anchorBgAlpha=”Numeric Value”<br> | Alpha of the anchor background.<br> |
| anchorAlpha=”Numeric Value”<br> | This function lets you set the transparency of the entire anchor (including the border). This attribute is useful, when you do not want the anchors to be visible on the chart, but you want the hover caption and link functionality. In that case, you can set anchorAlpha to 0.<br> |

