# UNINSTALL MV DASHBOARD UNIX

**Created At:** 6/20/2017 4:08:12 PM  
**Updated At:** 11/22/2017 10:36:47 AM  
**Original Doc:** [uninstall-mv-dashboard-unix](https://docs.zumasys.com/36577-mv-dashboard/uninstall-mv-dashboard-unix)  


This topic presents instructions for uninstalling MV Dashboard and optionally deleting the account and user.

## **Uninstalling MV Dashboard on Linux or AIX**

Complete these instructions to uninstall MV Dashboard on Linux or AIX. To uninstall MV Dashboard:

1. Logon as the root user.

2. Run the following command:

```
cd /usr/local/mvappsvr/bin
```

3. Run the following command:

```
./DBUninstall.sh
```

4. Change back to the original directory. MV Dashboard is uninstalled.

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
