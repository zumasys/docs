# OPTIONAL PARAMETERS FOR TRENDLINES

**Created At:** 9/26/2017 5:58:42 PM  
**Updated At:** 11/24/2017 6:04:50 AM  
**Original Doc:** [optional-parameters-for-trendlines](https://docs.zumasys.com/36577-mv-dashboard/optional-parameters-for-trendlines)  
**Original ID:** 278581  
**Internal:** No  


Trendlines are the horizontal lines spanning the chart canvas that aid in interpretation of data with respect to some previous predetermined figure.


| startValue=’NumericalValue’<br> | The starting y-axis value for the trendline. E.g. if you want to plot a slanted trendline from value 102 to 109, the startValue would be 102.<br> |
| --- | --- |
| endValue=’NumericalValue’<br> | The ending y-axis value for the trendline. E.g. if you want to plot a slanted trendline from value 102 to 109, the endValue would be 109. If you do not specify a value for endValue, it will automatically assume the same value as startValue<br> |
| color=’HexCode’<br> | Color of the trendline and its associated text.<br> |
| displayValue=’StringValue’<br> | Displays a string caption for the trendline by its side. Example: displayValue='Last Month High'. When you don't supply this attribute, it automatically takes the value of startValue.<br> |
| Thickness=’NumericalValue’<br> | Thickness of the trendline.<br> |
| isTrendZone=’1/0’<br> | Whether or not the trend displays a line, or a zone (filled colored rectangle).<br> |
| showOnTop=’1/0’<br> | Whether or not the trendline/zone is displayed over other elements of the chart.<br> |
| alpha=’NumericalValue0-100’<br> | Alpha (transparency) of the trendline.<br> |

