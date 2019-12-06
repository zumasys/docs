# ENABLE NEW HANDLER

**Created At:** 2/27/2018 10:26:47 PM  
**Updated At:** 5/29/2018 8:44:57 PM  


To enable a new handler, in addition to the WDB.RESOURCE record, you need to modify the mv\_appsvr.conf file:

C:\Program Files (x86)\Zumasys\MV Dashboard\mv\_appsvr.conf

Or

/usr/local/mvappsvr/mv\_appsvr.conf

Under [handlers], add your new handler name, same module as the existing api handler, for example:

"shipapi" = "mod\_mvconnector"

Finally, you need to add a new section that imports the existing "dbc" configuration, for example:

[shipapi]

%import "dbc"

Restart the MVDashboard service to pick up your changes.
