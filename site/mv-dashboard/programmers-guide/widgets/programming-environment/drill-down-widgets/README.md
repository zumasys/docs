# Drill Down Widgets

<PageHeader />

Any widget can create a drill-down link to any other widget. If you want a link to load a widget other than the one in which the links are displayed, you may populate the "drill-down" widget information in the variables below. When a drill-down widget is invoked, it is displayed as a single, full-width widget on the page. No other widgets will be displayed along with a drill-down widget.

When using a link to invoke a drill-down widget, the values specified in W\$LINK.UD.POS and W\$LINK.UD.VAL will be applied to the WIDGET.USER.DATA variables for the drill-down widget, not the source (referring) widget.

| <!----> | <!----> |
| --- | --- |
| W$LINK.DD.WIDGET | Name of the drill-down widget to load when the link is clicked. |

The global variable G\$DRILLDOWN.MODE is set to "1" when a widget is being executed as a drill-down widget. This allows a widget to determine whether or not it is being executed as a drill-down widget. Additionally, the global variables G\$DD.REFERRER and G\$DD.FROM.DB will be set to the name of the widget and dashboard from which the drill-down occurred.

<PageFooter />
