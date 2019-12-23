# APPENDIX II: OPTIONAL PARAMETERS

**Created At:** 9/26/2017 5:10:11 PM  
**Updated At:** 11/20/2017 9:21:51 PM  
**Original Doc:** [appendix-ii-optional-parameters](https://docs.zumasys.com/36577-mv-dashboard/appendix-ii-optional-parameters)  


Many of the widget types allow for the specification of optional parameters. These optional parameters can be applied to the entire chart/graph using the W$CHART.OPTIONS variable, or they can be applied to individual values (such as a specific slice of a pie chart).

Optional parameters must be specified in the following format:

```
parameter=’value’ 
```

The value for each parameter must not contain any of the following characters: quote marks (single or double), greater than symbol (&gt;), less than symbol (&lt;), or ampersand (&). You may use the "&#nn;" encoding method (where nn is the decimal value of the character) if you want to use these special characters.

If multiple optional parameters are specified, they must be separated by spaces. Each widget type has a list of optional parameters.

The following topics are presented:

[Optional Parameters for Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)](./../optional-parameters-for-line,-bar,-area,-column,-pie-and-doughnut-charts-%282d-&-3d%29)

[Optional Parameters Unique to Column, Line, Area & Bar](./../optional-parameters-unique-to-column,-line,-area-&-bar)

[Optional Parameters for Trendlines](./../optional-parameters-for-trendlines)

[Optional Parameters Unique to Single Series & Pie Charts](./../optional-parameters-unique-to-single-series-&-pie-charts)

[Optional Parameters Unique to Multiseries & Stacked Charts](./../optional-parameters-unique-to-multiseries-&-stacked-charts)

[Optional Parameters Unique to Pie & Doughnut](./../optional-parameters-unique-to-pie-&-doughnut-charts)[Charts](./../optional-parameters-unique-to-pie-&-doughnut-charts)

[Optional Parameters Unique to 2D Line Charts](./../optional-parameters-unique-to-2d-line-charts)

[Optional Parameters Unique to 2D Area Charts](./../optional-parameters-unique-to-2d-area-charts)
