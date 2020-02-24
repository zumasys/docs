# OPTIONAL PARAMETERS UNIQUE TO PIE & DOUGHNUT CHARTS

**Created At:** 9/26/2017 6:17:21 PM  
**Updated At:** 11/20/2017 9:21:47 PM  
**Original Doc:** [optional-parameters-unique-to-pie-doughnut-charts](https://docs.zumasys.com/36577-mv-dashboard/optional-parameters-unique-to-pie-doughnut-charts)  
**Original ID:** 278584  
**Internal:** No  


# Generic Properties


| <!----> | <!----> |
| --- | --- |
| shownames=”1/0”<br> | Option to show/hide the data names displayed alongside the pie.<br> |
| showValues=”1/0”<br> | Options to show/hide the data values displayed along with the pies.<br> |
| showPercentageValues=”1/0”<br> | If you've opted to show the data value, this attribute controls whether to show percentage values or actual values. NOTE: The normal state is to show percentages. Use showPercentageValues='1' to show values instead.<br> |
| showPercentageInLabel=”1/0”<br> | If you've opted to show the data value, this attribute controls whether to show percentage values or actual values in the pie labels.<br> |
| animation=”1/0”<br> | Sets whether or not the animation is played or the entire chart is rendered at once. (Applies only to 2D Charts)<br> |




# Pie Properties


| <!----> | <!----> |
| --- | --- |
| pieRadius=”Numeric Pixels”<br> | The best fit pie radius for the chart is automatically calculated. If you want to enforce radius values, you can set it using this attribute.<br> |
| pieSliceDepth=”Numeric Value”<br> | Sets the 3D height (depth) of the pies on the chart (in pixels). (applies only to 3D Pie Charts)<br> |
| pieYScale=”Numeric Value 30-100”<br> | This value sets the skewness of the pie chart (vertical slant). (applies only to 3D Pie Charts)<br> |
| pieBorderThickness=”Numeric Value”<br> | Sets the border of each pie on the chart.<br> |
| pieBorderAlpha=”0-100”<br> | Sets the border transparency for all the pie borders.<br> |
| pieFillAlpha=”0-100”<br> | Sets the transparency for all the pies on the chart.<br> |




# Name/Value Display Distance Control (Applies to 2D Pie Charts Only)


| <!----> | <!----> |
| --- | --- |
| slicingDistance=”Numeric Value”<br> | Controls the distance between the sliced pie and the center of other pies.<br> |
| nameTBDistance=”Numeric Value”<br> | Sets the distance of the name/value text boxes from the pie edge.<br> |




# Pie Shadow Properties (Applies to 2D Pie Charts only)


| <!----> | <!----> |
| --- | --- |
| showShadow=”1/0”<br> | Option to show/hide shadow.<br> |
| shadowColor=”Hex Code”<br> | If you want to set your own shadow color, you’ll need to specify that color for this attribute.<br> |
| shadowAlpha=”0-100”<br> | Sets the transparency of the shadow.<br> |
| shadowXShift=”Numeric Value”<br> | Sets the x shift of the shadow pie from the actual pie. That is, if you want to show the shadow 3 pixels right from the actual pie, set this attribute to 3. Similarly, if you want the shadow to appear on the left of the actual pie, set it to -3.<br> |
| shadowYShift=”Numeric Value”<br> | Sets the y shift of the shadow pie from the actual pie. That is, if you want to show the shadow 3 pixel below the actual pie, set this attribute to 3. Similarly, if you want the shadow to appear above the actual pie, set it to -3.<br> |




# Name/Value Display Distance Control (Applies Only to 2D Doughnut Charts)


| <!----> | <!----> |
| --- | --- |
| nameTBDistance=”Numeric Value”<br> | Sets the distance of the name/value text boxes from the pie edge.<br> |




# Pie Shadow Properties (Applies only to 2D Doughnut Charts)


| <!----> | <!----> |
| --- | --- |
| showShadow=”1/0”<br> | Option to show/hide shadow.<br> |
| shadowColor=”Hex Color”<br> | If you want to set your own shadow color, you’ll need to specify that color for this attribute.<br> |

