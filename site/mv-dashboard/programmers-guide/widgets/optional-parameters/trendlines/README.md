# Optional Parameters for Trendlines

<PageHeader />

Trendlines are the horizontal lines spanning the chart canvas that aid in interpretation of data with respect to some previous predetermined figure.

| <!----> | <!----> |
| --- | --- |
| startValue=’NumericalValue’ | The starting y-axis value for the trendline. E.g. if you want to plot a slanted trendline from value 102 to 109, the startValue would be 102. |
| endValue=’NumericalValue’ | The ending y-axis value for the trendline. E.g. if you want to plot a slanted trendline from value 102 to 109, the endValue would be 109. If you do not specify a value for endValue, it will automatically assume the same value as startValue |
| color=’HexCode’ | Color of the trendline and its associated text. |
| displayValue=’StringValue’ | Displays a string caption for the trendline by its side. Example: displayValue='Last Month High'. When you don't supply this attribute, it automatically takes the value of startValue. |
| Thickness=’NumericalValue’ | Thickness of the trendline. |
| isTrendZone=’1/0’ | Whether or not the trend displays a line, or a zone (filled colored rectangle). |
| showOnTop=’1/0’ | Whether or not the trendline/zone is displayed over other elements of the chart. |
| alpha=’NumericalValue0-100’ | Alpha (transparency) of the trendline. |

<PageFooter />
