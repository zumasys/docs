# Optional Parameters Unique to 2D Line Charts

<PageHeader />

## Line Properties


| <!----> | <!----> |
| --- | --- |
| lineColor=”Hex Code” | If you want the entire line chart to be plotted in one color, set that color for this attribute. |
| lineThickness=”Numeric Value” | Thickness of the line (in pixels). |
| lineAlpha=”0-100” | Transparency of the line. |

## Line Shadow Properties

| <!----> | <!----> |
| --- | --- |
| showShadow=”1/0” | Option to show/hide the shadow. |
| shadowColor=”Hex Code” | If you want to set your own shadow color, you’ll need to specify that color for this attribute. |
| shadowThickness=”Numeric Value” | Sets the thickness of the shadow line (in pixels). |
| shadowAlpha=”0-100” | Sets the transparency of the shadow line. |
| shadowXShift=”Numeric Value” | Sets the x shift of the shadow line from the chart line. That is, if you want to show the shadow 3 pixel right from the actual line, set this attribute to 3. Similarly, if you want the shadow to appear on the left of the actual line, set it to -3. |
| shadowYShift=”Numeric Value” | Sets the y shift of the shadow line from the chart line. That is, if you want to show the shadow 3 pixel below the actual line, set this attribute to 3. Similarly, if you want the shadow to appear above the actual line, set it to -3. |

## Anchor Properties

Anchors (or the marker points) are the polygons that appear at the joint of two consecutive lines. On a line chart, the anchors are the elements that react to the hover caption and link for that particular data point. You can customize all the facets of the anchors using the properties below:

| <!----> | <!----> |
| --- | --- |
| showAnchors=”1/0” | Configures whether or not the anchors are shown on the chart. If the anchors are not shown, then the hover caption and link functions won’t work. |
| anchorSides=”Numeric Value greater than 3” | Sets the number of sides the anchor will have. E.g., an anchor with 3 sides would represent a triangle; with 4 it would be a square and so on. |
| anchorRadius=”Numeric Value” | Sets the radius (in pixels) of the anchor. The greater the radius, the bigger the anchor size. |
| anchorBorderColor=”Hex Code” | Border color of the anchor |
| anchorBorderThickness=”Numeric Value” | Thickness of the anchor border (in pixels). |
| anchorBgColor=”Hex Code” | Background color of the anchor. |
| anchorBgAlpha=”Numeric Value” | Alpha of the anchor background. |
| anchorAlpha=”Numeric Value” | This function lets you set the transparency of the entire anchor (including the border). This attribute is useful, when you do not want the anchors to be visible on the chart, but you want the hover caption and link functionality. In that case, you can set anchorAlpha to 0. |

<PageFooter />
