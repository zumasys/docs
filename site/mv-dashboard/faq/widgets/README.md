# Widgets

<PageHeader />

## How do you get started creating your own Widgets?

When you log in to the dashboard as user ADMIN, you will see a tab for Admin Area. That tab will then give you tabs for Users, Widgets, and Dashboards. Under Dashboards, you will see several dashboards provided with the base system. In the Actions column you will see an icon to click for Edit Dashboard. Click on the Edit Dashboard for Chart Demo to see an example of how a dashboard is configured. You will note that Chart Demo consists of several widgets.

After checking out dashboards, click on the Widgets tab and you will see many widgets provided with the base system. Clicking on an item in the Widget ID column will show the display of the widget. Clicking on the associated item in the Subroutine column will show you the code used to program that widget. That code is found in the MVDB.SUBS file. To create your own widget subroutine use one of existing as a template and add your modifications. In addition to building your subroutine, you would use the Add a Widget icon to create the widget as a record in the MVDB.WIDGETS file. You must create a dashboard referencing your widget, or add your widget to an existing dashboard.

## Are the widgets scalable?

Set you W$WIDTH to 3 to get the full width on the widget.

Chose 1 column as your dashboard type to get full width within the dashboard.  To stack multiple widgets into the dashboard, do it vertically.

If the horizontal width is not sufficient to get a good display with columnar charts then use bar charts and play with the W$CHART.HEIGHT to get the window necessary to display your entire chart.

## Are FusionWidgets and Maps supported?

Zumasys has licensed a third-party product called FusionCharts as part of the MultiValue Dashboard product. FusionCharts has advanced features supporting FusionWidgets and Maps at an additional cost. Zumasys does not currently offer those features but may in the future with the additional cost passed on via different licensing options.

Back to [MVDashboard FAQ](./../README.md)

<PageFooter />
