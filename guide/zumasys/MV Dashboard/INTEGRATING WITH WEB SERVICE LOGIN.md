# INTEGRATING WITH WEB SERVICE LOGIN

**Created At:** 9/26/2017 4:53:49 PM  
**Updated At:** 11/21/2017 6:04:29 AM  


To display any dashboard page like it had been selected by a user logged into MV Dashboard, an application would post a URL with three additional parameters added to the same URL generated when manually selecting that dashboard. Those additional parameters are:

- loginid – this would be the literal “webservice”
- passtime – this would be the current time 24 hour clock time represented as HHMMSS 
    - This time will be validated against the system clock on the multi-server running MV Dashboard.
    - If the passtime is not within 10 minutes of the system clock the user will be taken to the dashboard login page with a message that the times are not in sync.
- password – this would be a calculation based on the current date and the passtime parameter 
    - Reverse the order of the digits in the passtime parameter and add that to the MMDDYY of the date. The sum will be the password submitted in the URL.
    - For example, a login at 2:15:30 PM on 12-02-15 would reverse 141530 to get 035141 and add it to 120215 to get a password of 155356
    - An invalid password will take the user to the dashboard login page with a message to that affect.


The basic install of MV Dashboard comes with a Demo Financial Company dashboard. To pop a browser display of that dashboard from another application at 2:15:30 PM on 12-02-15, the URL post would be:

```
http://ipaddress:8180/dbc/MVDB.MAIN?dbname=Demo%20Financial%20Company&loginid=webservice&passtime=141530&pas sword=155356 
```

To get the URL string to which the three parameters should be added, simply invoke any dashboard and look at the URL window to see the URL that generated it.

Any dashboard invoked by this method will have full drilldown capability but the only option available on the tab bar will be Log Out.


> NOTE: This functionality is only available during the first 30 days on a single user MV Dashboard installation. To use it after the 30 day period, it will be necessary to purchase a multi-user license.
> 
> You must enable the webservice login from the Administrative Configuration widget in the Administrator dashboard before this feature can be used.

