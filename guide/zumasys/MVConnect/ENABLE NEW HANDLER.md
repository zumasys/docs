# ENABLE NEW HANDLER

To enable a new handler, in addition to the WDB.RESOURCE record, you need to modify the mv_appsvr.conf file: C:\Program Files (x86)\Zumasys\MV Dashboard\mv_appsvr.conf Or /usr/local/mvappsvr/mv_appsvr.conf Under [handlers], add your new handler name, same module as the existing api handler, for example: "shipapi" = "mod_mvconnector" Finally, you nee  

**Created At:** 2/27/2018 10:26:47 PM  
**Updated At:** 5/29/2018 8:44:57 PM  

