# UNINSTALL MV DASHBOARD WINDOWS

**Created At:** 6/20/2017 4:13:08 PM  
**Updated At:** 11/24/2017 3:52:58 AM  
**Original Doc:** [uninstall-mv-dashboard-windows](https://docs.zumasys.com/36577-mv-dashboard/uninstall-mv-dashboard-windows)  


This topic presents instructions for uninstalling MV Dashboard and optionally deleting the account and user.

## Uninstalling MV Dashboard on Windows

Complete these instructions to uninstall MV Dashboard on Windows. Note that these steps may differ slightly depending on your version of Windows.

To uninstall MV Dashboard:

1. Open the Windows Control Panel.
2. Select the Add or Remove Programs option.
3. Select Zumasys MV Dashboard from the list of programs and click Remove.
4. When the uninstall is complete, restart your system.
5. Open a Windows Explorer and navigate to the C:\Program Files (x86)\Zumasys\ folder.
6. Delete the Zumasys folder. MV Connect is uninstalled.


### **DELETING THE D3 ACCOUNT AND USER (OPTIONAL)** 

The initial MV Dashboard uninstall process does not delete the D3 account or user. To optionally do this, complete the instructions below.

To delete the d3 account and user:

1. Log into the dm account in D3.
2. Run the following command to delete the account:


```
delete-account mvdb
```

3. Respond to the prompts accordingly to delete the account.

4. Run the following command to delete the user:

```
delete users mvdashboard
```
