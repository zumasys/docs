# Upgrading MV Dashboard

<PageHeader />

Complete the appropriate set of instructions for your implementation to upgrade to the latest MV Dashboard release.

- **For D3 Windows and D3 AIX implementations:** If you are upgrading on either the D3 Windows or D3 AIX platforms, there is no need to uninstall your current version. Complete the instructions in Installing the Dashboard to upgrade to the latest release.
- **For D3 Linux implementations:** If you are upgrading on the D3 Linux platform, you will need to perform a file-save of your D3 system, backup the Dashboard’s docroot directory and uninstall the Dashboard before installing the latest version. Complete the instructions below to upgrade to the latest release.

To upgrade MV Dashboard:

1. Perform a full filesave on your multivalue system or, at a minimum, perform an account-save of the MVDB account. Any changes you may have made to the dashboards, templates, widgets and widget subroutines provided with the MV Dashboard application will be copied to a CLASHES file within the MVDB account.
2. Create a backup of the Dashboard’s docroot directory. This will allow you to re-apply any themes or images you have added or any changes you have made to the installed .css files.
3. (UNIX Only) Uninstall your current copy of MV Dashboard. See [Uninstalling the Dashboard](https://docs.zumasys.com/mv-dashboard/installation-guide/uninstall/linux-and-aix/) for specific uninstallation instructions for your platform. Note that you should *not*remove the account or user.
4. Install the latest Dashboard version.  
   a. See the following for specific instructions for your platform:  
    - [UNIX](https://docs.zumasys.com/mv-dashboard/installation-guide/install/linux-and-aix/)
    - [Windows](https://docs.zumasys.com/mv-dashboard/installation-guide/install/windows/)
5. Reconfigure your database connection. See [MV Dashboard Configuration](https://docs.zumasys.com/mv-dashboard/installation-guide/configuration/) for instructions.
6. Re-apply any changes you may have made to installed components.
7. If you had made any changes to the installed Dashboard components (that is, the dashboards, templates, widgets and widget subroutines provided with the MV Dashboard application), carefully re-apply those changes using the saved item in the CLASHES file as a reference.
8. If you had added any themes, images or .css files, copy the added items from the backup of the docroot directory and manually apply your changes to the installed dashboard components.

<PageFooter />
