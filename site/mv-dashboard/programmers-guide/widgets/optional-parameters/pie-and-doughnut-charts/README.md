# Optional Parameters Unique to Pie and Doughnut Charts

<PageHeader />

## Generic Properties

| <!----> | <!----> |
| --- | --- |
| shownames=”1/0” | Option to show/hide the data names displayed alongside the pie. |
| showValues=”1/0” | Options to show/hide the data values displayed along with the pies. |
| showPercentageValues=”1/0” | If you've opted to show the data value, this attribute controls whether to show percentage values or actual values. NOTE: The normal state is to show percentages. Use showPercentageValues='1' to show values instead. |
| showPercentageInLabel=”1/0” | If you've opted to show the data value, this attribute controls whether to show percentage values or actual values in the pie labels. |
| animation=”1/0” | Sets whether or not the animation is played or the entire chart is rendered at once. (Applies only to 2D Charts) |

## Pie Properties

| <!----> | <!----> |
| --- | --- |
| pieRadius=”Numeric Pixels” | The best fit pie radius for the chart is automatically calculated. If you want to enforce radius values, you can set it using this attribute. |
| pieSliceDepth=”Numeric Value” | Sets the 3D height (depth) of the pies on the chart (in pixels). (applies only to 3D Pie Charts) |
| pieYScale=”Numeric Value 30-100” | This value sets the skewness of the pie chart (vertical slant). (applies only to 3D Pie Charts) |
| pieBorderThickness=”Numeric Value” | Sets the border of each pie on the chart. |
| pieBorderAlpha=”0-100” | Sets the border transparency for all the pie borders. |
| pieFillAlpha=”0-100” | Sets the transparency for all the pies on the chart. |

## Name/Value Display Distance Control (Applies to 2D Pie Charts Only)

| <!----> | <!----> |
| --- | --- |
| slicingDistance=”Numeric Value” | Controls the distance between the sliced pie and the center of other pies. |
| nameTBDistance=”Numeric Value” | Sets the distance of the name/value text boxes from the pie edge. |

## Pie Shadow Properties (Applies to 2D Pie Charts only)

| <!----> | <!----> |
| --- | --- |
| showShadow=”1/0” | Option to show/hide shadow. |
| shadowColor=”Hex Code” | If you want to set your own shadow color, you’ll need to specify that color for this attribute. |
| shadowAlpha=”0-100” | Sets the transparency of the shadow. |
| shadowXShift=”Numeric Value” | Sets the x shift of the shadow pie from the actual pie. That is, if you want to show the shadow 3 pixels right from the actual pie, set this attribute to 3. Similarly, if you want the shadow to appear on the left of the actual pie, set it to -3. |
| shadowYShift=”Numeric Value” | Sets the y shift of the shadow pie from the actual pie. That is, if you want to show the shadow 3 pixel below the actual pie, set this attribute to 3. Similarly, if you want the shadow to appear above the actual pie, set it to -3. |

## Name/Value Display Distance Control (Applies Only to 2D Doughnut Charts)

| <!----> | <!----> |
| --- | --- |
| nameTBDistance=”Numeric Value” | Sets the distance of the name/value text boxes from the pie edge. |

## Pie Shadow Properties (Applies only to 2D Doughnut Charts)

| <!----> | <!----> |
| --- | --- |
| showShadow=”1/0” | Option to show/hide shadow. |
| shadowColor=”Hex Color” | If you want to set your own shadow color, you’ll need to specify that color for this attribute. |

<PageFooter />
