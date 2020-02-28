# Optional Parameters

<PageHeader />

**Created At:** 9/26/2017 5:10:11 PM  
**Updated At:** 11/20/2017 9:21:51 PM  
**Original Doc:** [appendix-ii-optional-parameters](https://docs.zumasys.com/36577-mv-dashboard/appendix-ii-optional-parameters)  
**Original ID:** 278574  
**Internal:** No  


Many of the widget types allow for the specification of optional parameters. These optional parameters can be applied to the entire chart/graph using the W$CHART.OPTIONS variable, or they can be applied to individual values (such as a specific slice of a pie chart).

Optional parameters must be specified in the following format:

```
parameter=’value’ 
```

The value for each parameter must not contain any of the following characters: quote marks (single or double), greater than symbol (&gt;), less than symbol (&lt;), or ampersand (&). You may use the "&#nn;" encoding method (where nn is the decimal value of the character) if you want to use these special characters.

If multiple optional parameters are specified, they must be separated by spaces. Each widget type has a list of optional parameters.

The following topics are presented:

* [Line, Bar, Area, Column, Pie and Doughnut Charts (2D & 3D)](./line-bar-area-column-pie-and-doughnut-charts-2d-and-3d/README.md)
* [Trendlines](./trendlines/README.md)
* [2D Area Charts](./2d-area-charts/README.md)
* [2D Line Charts](./2d-line-charts/README.md)
* [Column, Line, Area & Bar](./column-line-area-and-bar/README.md)
* [Multiseries & Stacked Charts](./multiseries-and-stacked-charts/README.md)
* [Pie & Doughnut Charts](./pie-and-doughnut-charts/README.md)
* [Single Series & Pie Charts](./single-series-and-pie-charts/README.md)
