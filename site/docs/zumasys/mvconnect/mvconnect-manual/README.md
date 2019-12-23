# MVCONNECT MANUAL

**Created At:** 6/20/2017 4:05:58 PM  
**Updated At:** 11/21/2019 10:12:09 PM  
**Original Doc:** [mv-connect-manual](https://docs.zumasys.com/36307-mv-connect/mv-connect-manual)  




MVConnect is a web application development environment for MultiValue Pick systems.  MVConnect is included in the MV Dashboard product installer that is used to create MV Dashboard.  Much of the installation instructions discuss MV Dashboard, but once it is installed you can move on to the MVConnect specific instructions.



![mv-connect-manual: 1574365223932-mv-connect-%2b-zs-software-services-(1)](./1574365223932-mv-connect-%2b-zs-software-services-(1).png)



# MVCONNECT 1.6.3 RELEASE NOTES

For a summary of new features in MVConnect 1.6.3, see [Release Notes](./../mv-connect-1.6.3-release-notes).



# GETTING TO KNOW MVCONNECT

MVConnect is a cross-platform Web/Rest API development package.  MVConnect has two components.

1. A small webserver to handle inbound web calls
2. A set of pick subroutines to build out your web/rest application


For all platforms, we have a cross-platform web server called MVAppsvr that allows access to pick by running the Pick executable.  The primary difference is with MVAppsvr an MVDB account is installed to hold the Pick side subroutines.  Since MV Dashboard uses the same MVAppsvr web API kit we combined the two installers.  Therefore if you are installing on other platforms the MVConnect installer is the same as the MV Dashboard installer.  When you are done you will have a free one user copy of MV Dashboard along with the Rest subroutines.  You only use this version if you are not on jBASE 5.6+.  This version can be installed side by side with the jAgent version but keep in mind it has it's own licensing.  On jBASE 5.6 all the pick side subroutines required for rest are built-in and available in any account.  With the MVAppsvr version, you will have to follow the instructions on how to set up q-pointers to files and code for other accounts.

- [Installing MVAppsvr cross-platform Web Server  on Windows](./../../mv-dashboard/install-mv-dashboard&mv-connect-windows)
- [Installing MVAppsvr cross-platform Web Server on UNIX](./../../mv-dashboard/install-mv-dashboard&mv-connect-unix)
- [Get Started with MVConnect](./../get-started-with-mvconnect)
- [Troubleshooting MVConnect](./../introduction-to-troubleshooting)
- [Connection Pooling with MVConnect](./../connection-pooling)




# GETTING HELP WITH MVCONNECT

If you're looking for help, you can reach out the following ways:

- MVConnect Support:
    - mvconnect@zumasys.com
    - 949-346-4228




# MVCONNECT LICENSING

To obtain a developer's version of MV Connect, please email mvconnect@zumasys.com.
