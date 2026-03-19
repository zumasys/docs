# Resolving Unexpected "Trakker" Menu Display and Slow Remote Login in RoverERP

<PageHeader />
Problem Statement
Users attempting to log in remotely to RoverERP may encounter the legacy “Trakker” menu, typically intended for handheld/scanner devices, even when not using such devices. Additionally, users may experience unusually slow login times (1–2 minutes) after entering their credentials.

Symptoms
After logging in remotely, the system displays the old “Trakker” menu instead of the standard user interface.
The login process is significantly slower than usual, taking 1–2 minutes to complete.
The issue may occur after system updates or changes in device usage (e.g., using a Surface Pro or similar device).
The problem persists across different environments (e.g., production and test systems).
Cause
The login process is incorrectly launching the legacy “Trakker” menu, which is designed for handheld barcode scanner devices.
This may be due to configuration settings or program logic that does not properly detect the type of device being used.
In some cases, the issue may be related to the “disable legacy barcode” option not being set for users who do not use handheld devices.
Slow login times may be a side effect of the system attempting to load unnecessary components or encountering configuration mismatches.
Resolution Steps
Check the “Disable Legacy Barcode” Option:

If you are on a recent version of RoverERP, navigate to the relevant user or system settings.
Locate and enable the “disable legacy barcode” option.
This prevents the system from launching the legacy “Trakker” menu for users not using handheld barcode devices.
Verify Device Usage:

Only enable the “disable legacy barcode” option if you are not using handheld barcode scanner devices.
If you are using such devices, do not enable this option.
Program Adjustment (If Needed):

If enabling the option does not resolve the issue, contact RoverERP support.
Support can make a programmatic change to ensure the correct menu is launched during login, as was done in similar cases.
Address Slow Login:

After resolving the menu issue, monitor login times.
If login remains slow, consider restarting the device or reinstalling the RoverERP client.
Contact support if performance does not improve.
Verification
Log in remotely and confirm that the standard RoverERP menu appears instead of the “Trakker” menu.
Ensure that login times return to normal (comparable to desktop login speeds).
Verify that all required functionality is accessible and that no barcode scanner menus appear unless intended.
Note:

The “disable legacy barcode” option should only be enabled for users who do not require handheld barcode scanner functionality.
RoverERP is no longer actively developing or supporting commands for legacy handheld barcode scanner devices.
Additional Information
If you are running an older version of RoverERP and do not see the “disable legacy barcode” option, contact RoverERP support for assistance.
For persistent issues or unique configurations, support can implement a custom solution to prevent the legacy menu from appearing.
<PageFooter />
