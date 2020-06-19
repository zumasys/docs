# Single Series and Multi Series Bar Column Line and Area Charts 

<PageHeader />

Bar, column, line and area chart widgets can be created as single-series charts, or multi-series charts. A single-series chart is defined by a single list of data points, each with a corresponding value. For example, a monthly sales chart for a single year contains one data point for each of the twelve months; the sales volume. A multi-series chart is defined by more than one list of related data points, each with a corresponding value. An example of a multi-series chart would be monthly sales by product category for a single year. In such a chart, multiple data points represent one value for each category.

Line charts are most useful for representing trends, while bar and column charts provide an effective way to present comparative information. Bar charts are identical to column charts from a data perspective; however a column chart’s vertical bars are better suited for presenting a progression toward a goal like sales, profit or margin. Bar charts present horizontal bars, which are useful in presenting information such as sales by geography or demographics in which goals may not be relevant.

A multi-series column cart may be represented as a "stacked column chart" in which the columns are represented in a vertical "stack" rather than a series of individual, adjacent vertical columns. Similarly, a multi-series line chart may be represented as an "area chart" in which each line’s value represents a portion of the whole. Therefore, an area chart is ideal for presenting multiseries trend information, and a stacked column chart is ideal for presenting comparative data.

Single-series bar, column, line and area charts are created using any of the following types:

1. FCAREA2D – 2-dimensional Area Chart
2. FCBAR2D – 2-dimensional Bar Chart
3. FCCOLUMN2D – 2-dimensional Column Chart
4. FCCOLUMN3D – 3-dimensional Column Chart
5. FCLINE – Line Chart

Multi-series bar, column, line and area charts are created using any of the following types:

1. FCMSAREA2D – 2-dimensional Area Chart
2. FCMSBAR2D – 2-dimensional Bar Chart
3. FCMSCOLUMN2D – 2-dimensional Column Chart
4. FCMSCOLUMN3D – 3-dimensional Column Chart
5. FCMSLINE – Line Chart
6. FCSTACKEDAREA2D – 2-dimensional Stacked Area Chart
7. FCSTACKEDBAR2D – 2-dimensional Stacked Bar Chart
8. FCSTACKEDCOLUMN2D – 2-dimensional Stacked Column Chart
9. FCSTACKEDCOLUMN3D – 3-dimensional Stacked Column Chart

These charts are very similar, and the methods used in creating these widgets are virtually identical. The following variables are used to define both single- and multi-series charts:

| <!----> | <!----> |
| --- | --- |
| W$BAR.LABELS | AM-Array of labels for each series of a multi-series chart. Single-series charts do not use this value. |
| W$BAR.VALUES | VM-Array of data point values for any series. For multi-series charts, the variable contains a two-dimensional array in which the attributes correspond with W$BAR.LABELS. |
| W$BAR.VALUE.OPTS | VM-Array of Optional Parameters associated with each value. |
| W$BAR.CAPTION | Text caption for the chart itself. |
| W$BAR.COLORS | VM-Array of color choices to override default colors. |
| W$BAR.XLABELS | VM-Array of labels for each value on the X-axis. For multi-series charts, the variable contains a two-dimensional array in which the attributes correspond with W$BAR.LABELS. |
| W$BAR.XMEMO | The text to appear beneath the X-axis of the chart. |
| W$BAR.TMEMO |  The text to appear alongside the Y-axis of the chart. |
| W$BAR.LABEL.OPTS | AM-Array of optional parameters associated with the W$BAR.LABELS values. |
| W$BAR.XLABELS.OPTS | VM-Array of optional parameters associated with the W$BAR.XLABELS values. |
| W$BAR.TREND.BEG | M-Array of beginning points of trendlines. |
| W$BAR.TREND.END | VM-Array of ending points of trendlines. |
| W$BAR.TREND.OPTS | VM-Array of optional parameters for each trendline. |

<PageFooter />
