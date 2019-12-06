# EXTERNAL LINKS

**Created At:** 9/26/2017 12:28:17 AM  
**Updated At:** 11/21/2017 6:01:29 AM  


This advanced feature allows you to configure the widget links as external links. When using external links, no information is fed back to the widget itself, and the widget producing the external link will not be notified that the link was clicked. Adding an external link is done by assigning the following variables, and by doing so the values in W$LINK.UD.POS, W$LINK.UD.VAL and W$LINK.DD.WIDGET are ignored.



NOTE on HTML type widgets: The W$LINK.DD and W$LINK.URL functionality is not available on an HTML type widget since the HTML must be fully formed and there is no formatting applied to it. If drilldowns are desired from an HTML type widget, the HTML must contain &lt;a href&gt; attributes defining the destinations and any parameters.

In the HTML widget, to have the word Sales highlighted so that clicking on it would drill down to the DISPLAY REV.GP SALES widget with a parameter of “REVENUES” you would replace the word Sales with this &lt;a href&gt; string:

```
<a href="/dbc/MVDB.MAIN?dbname=DISPLAY REV.GP SALES CHART&udview=DISPLAY REV.GP SALES CHART&udpos1=1&udval1=REVENUES">Sales</a>
```

When using an  you are linking to a dashboard, not a widget, so it is necessary to create a dashboard with a one to one relationship with the desired widget.
