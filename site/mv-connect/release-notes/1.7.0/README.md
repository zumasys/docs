# MV Dashboard/Connect 1.7.0 Release Notes

<PageHeader />

Date: 05/11/2020

## MV Dashboard Enhancements/Patches

- New Dashboards
  - PORTAL DASHBOARD
  - PORTAL DASHBOARD DOCUMENTATION
  - PORTAL REPORTS SETUP
- New Widgets
  - DISPLAY PORTAL AP BALANCE PIE CHART
  - DISPLAY PORTAL AR BALANCE PIE CHART
  - PORTAL AP REPORTS
  - PORTAL AR REPORTS
  - PORTAL DAYS TO PAY PIE
  - PORTAL MARGINS
  - PORTAL SALES REPORTS

## MV Connect Enhancements/Patches

- MVDBToolkit - Cross platform toolkit for building packages
  - MVDBTOOLKIT.WCALL - Curl based wrapper to allow outbound Rest/Web calls.
  - MVDBTOOLKIT.WFILEIO - O/S reading/writing of files.
  - MVDBTOOLKIT.WEXECUTE - O/S executing of programs
  - MVDBTOOLKIT.WSWAP - Cross platform swap statement
  - MVDBTOOLKIT.WPLATFORM - Platform configuration
  - MVDBTOOLKIT.MVMAKE - Package installation tool
  - Windows - Includes Curl binary
- WOBJ Enhancements
  - UDO support on Universe and Unidata.  Improved performance
  - Refactored project.  Eliminated platform specific differences that were not needed.
  - Validates required parameters are assigned.
  - Patched WDB.VARS to properly size inbound payloads vs cutting them off at 99999 characters.
  - Null type always returns a NULL
  - TOJSON added as alias to TOSTRING
  - TOJSON added as alias to FROMJSON
  - SET.ARRAY if not assigned a value defaults to []
  - SET.OBJECT if not assigned value defaults to {}

<PageFooter />
