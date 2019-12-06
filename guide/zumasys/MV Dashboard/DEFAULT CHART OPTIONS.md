# DEFAULT CHART OPTIONS

**Created At:** 9/26/2017 12:14:04 PM  
**Updated At:** 11/21/2017 6:02:43 AM  


Default Chart Options Each widget type has a set of default options defined in the MVDB.CONTROL file. For example, the default settings for the FC3DPIE chart is stored in the FC3DPIE.SETTINGS record as follows:

```
<graph caption='[CHART.TITLE]' decimalPrecision='0' showNames='1'
showValues='0'showPercentageInLabel='0' pieYScale='45' pieRadius='[RADIUS]' animation='0'
pieFillAlpha='100' >
[CHART.DATA]
</graph>
```

The values in brackets [] are replaced with specific information when the widget is created. For example, CHART.TITLE comes from W$PIE.CAPTION while RADIUS and CHART.DATA are created by the Dashboard Controller program.

The chart parameters described in this record for each widget type can be overridden with the W$CHART.OPTIONS variable. Any chart-level parameters can be added in this record to specify default behaviors for each widget type. For example, the parameter "showPercentageInLabel" is set to "0" in the settings record. Note that the information in the ".SETTINGS" records does not include a complete list of the available settings for each chart.
