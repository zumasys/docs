# Theme Management

<PageHeader />

**Created At:** 9/26/2017 5:08:11 PM  
**Updated At:** 11/21/2017 6:01:57 AM  
**Original Doc:** [theme-management](https://docs.zumasys.com/36577-mv-dashboard/theme-management)  
**Original ID:** 278573  
**Internal:** No  


The administrative configuration widget allows an alternate logo and theme colors to be specified. Theme colors can be specified for individual dashboards from within the dashboard definition page. This allows MV Dashboard to be branded with the user's corporate identity. A few themes are included as examples.

An alternate logo may be specified in two ways. A fully-qualified URL may be provided if the logo image to be used resides on a remote system. For example, a reference to a remote image file might look like this: "http://www.example.com/images/logo.jpg". Alternatively, an image file can be stored in the docroot/db/images folder under the install directory for mvappsvr (/usr/local/mvappsvr by default). In this case, the filename alone must be specified in the alternate logo image field. If an image file is saved in the images folder used by MV Dashboard, specify only the file name (e.g. "logo.jpg") as the alternate logo image.

There are two parts to creating a custom theme. First, create a new css file and store under the docroot/db/themes directory. Use one of the provided themes as a starting point. When the new css file is in place, you must add to the available theme configurations in the D3 account into which MV Dashboard was installed. Add a record to MVDB.THEMES. The record key is the theme name. In the first field, enter the name of the css file you created in the docroot/db/themes directory. In fields two through six, specify colors to be used in the charts. The chart colors should be specified in the format #rrggbb where rr, gg and bb are hexadecimal values between 00 and FF, inclusive. These colors will be used to by the FusionCharts and FusionWidgets as defaults when widget colors are not explicitly set by the widget subroutine.

When the new css file and MVDB.THEMES entry are in place, the new theme will become available for selection from the theme drop down list in the Administrative Configuration widget or dashboard definition page.
