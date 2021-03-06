# Defining Links

<PageHeader />

All widget programs can use the variables below to add links to the widget. When any of these links is clicked, the dashboard controller will re-run all of the widgets on the dashboard and re-display the page. However, the links can tell the dashboard controller to populate specific elements in WIDGET.USER.DATA(1…100) with specific information prior to executing this specific widget subroutine.

The link definition also includes the location(s) at which the links are to be displayed within the widget. Links may be displayed in any of the four corners of the widget window, and they may also be displayed as icons (without text) in the right-hand side of the widget’s title bar. As an example, you may want to create a widget that shows sales information for a single month with a link in the upper-left-hand corner called "Previous Month," and a link in the upper-right-hand corner called "Next Month."

Adding a link to a widget requires the following variables to be assigned, and each variable may contain a value-mark-delimited list if multiple links are desired:

| <!----> | <!----> |
| --- | --- |
| W$LINK.LABEL | The link text |
| W$LINK.LOCATION | The location(s) as quadrants 1-4, and/or "C" to display an icon in the corner of the widget. To display a single link in multiple locations, simply concatenate the locations into a single string. For example, "14C" will display the link in the upper-right-hand corner, the lower-right-hand corner, and as an icon in the title bar. |
| W$LINK.UD.POS | The WIDGET.USER.DATA array element number to store the user data value. This may include a sub-value-delimited list to populate multiple values in WIDGET.USER.DATA for a single link. |
| W$LINK.UD.VAL | The value to be stored in prescribed WIDGET.USER.DATA element. This may include a sub-value-delimited list to populate multiple values in WIDGET.USER.DATA for a single link. |
| W$LINK.ICON | This value may include the name of an icon image (in the “icons” directory of the “docs” folder) when using the “C” (corner) location. |
| W$LINK.ICON.TXT | When displaying a link as an icon in the title bar (“C”) of the widget, this text will display when the user holds the mouse pointer over the icon. |

<PageFooter />
