# Unable to save shipper records in SHIP.E2 for UPS shipments

<PageHeader />
Problem Statement
Users are unable to save shipper records in SHIP.E2 when the shipment is scheduled to ship via UPS. The application locks up, requiring a forced reboot through Task Manager. This issue affects multiple customers and occurs when adding freight and shipping details to unconfirmed shipments.

Symptoms
Inability to save shipper records in SHIP.E2 when shipping via UPS.
Application becomes unresponsive (“locks up”) and must be closed via Task Manager.
Issue occurs across multiple customers, not limited to a single account.
Typically happens after migrating data to a new local server.
Cause
The issue is caused by insufficient Windows folder permissions on the directory used for UPS export files. When interfacing with UPS, the system writes data to the M3EXPORT.csv file located in a specific folder (commonly named m3-ups). If users do not have “modify” rights to this folder, the save operation fails and the application may become unresponsive.

The full path to the export file can be found in the SHIP.CONTROL configuration.
Resolution Steps
Identify the Export Folder:

Locate the folder used for UPS export files. The folder name may vary by customer (e.g., m3-ups).
The full path is specified in the SHIP.CONTROL configuration.
Adjust Windows Folder Permissions:

On the server where the export folder resides, right-click the folder and select Properties.
Go to the Security tab.
Grant the relevant user group or users “Modify” rights to the folder.
Apply the changes.
Test the Solution:

Open SHIP.E2 and attempt to save a shipper record scheduled to ship via UPS.
Confirm that the record saves successfully and the application does not lock up.
Verification
After adjusting permissions, open a previously problematic shipper in SHIP.E2 and attempt to save.
Verify that the record saves without error and that the application remains responsive.
Confirm that the M3EXPORT.csv file is updated in the export folder.
Note: The export folder name and location may differ for each customer. Always verify the correct path in SHIP.CONTROL before making changes.

Additional Information
If issues persist after adjusting permissions, verify that the server migration did not alter folder paths or user group assignments.
Ensure all users who need to save shippers via UPS have the necessary folder permissions.

<PageFooter />
