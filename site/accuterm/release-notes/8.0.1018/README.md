# AccuTerm 8.0.1018 Release Notes

<PageHeader />

December 10, 2019

## Enhancements

* phiReport is now supported, and the installation process has been streamlined.

* The maximum number of history rows has been changed from 10,000 to 30,000.

* Support for device-based licensing has been added. When you first configure AccuTerm in the customer portal, you must select either user-based, or device-based licensing. Device-based licensing uses a single license key for all machines. The machine must be activated, like with user-based licensing, except the email is not used for device-based licensing.

## Bug Fixes

* A problem with session files (.atsp) where the default file transfer directory was not saved has been fixed.

* When using a background picture, if a URL (instead of a local or network file path) was used, when opening a session file (.atsp), the picture would fail to load.

* When upgrading from AccuTerm 7 to AccuTerm 8, the GUI Designer would not import the preferences from the older version, including the “snap-to-grid” setting in the designer.

<PageFooter />
