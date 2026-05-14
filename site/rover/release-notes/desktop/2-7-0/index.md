# Rover Desktop v2.7.0 Release Notes

<badge text= "Version 2.7.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.7.0 of the Rover Desktop application.  Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Desktop%20v2.7.0) or [Support](mailto:help@zumasys.com?subjectRover%20Desktop%20v2.7.0) with any questions!

You can download this version [here!](https://roverdesktop.blob.core.windows.net/apps/rover-installer-2.7.0.zip)

## Updates
- Improved GDI font object handling, with a focus on complex inquiry-only forms that use large read-only GridView controls.
- Added automated reporting of application state when a GDI threshold warning is shown to a user.
- Enabled Copy/Paste in the command window.
- Enabled arrow key navigation in the command window while in TCL mode.

## Bug Fixes
- Fixed readability issues for unselected text in read-only GridView controls.
- Fixed issues preventing full text display and selection in read-only GridView controls.
- Fixed a scroll wheel regression affecting read-only GridView cells.
- Fixed selection and copy issues in read-only GridView cells.
- Improved rendering of long text in read-only GridView cells.
- Fixed a regression with Find Next / Find Previous in the ME Editor.
- Fixed a regression in ME search and added Enter-to-find-next behavior.
- Fixed a regression where the FDICT.E background in GridView was impacted by the read-only cell control implementation.
- Fixed a login exception when the Windows Print Spooler service is unavailable by falling back to reading printers from the registry.
- Fixed additional issues with nested selection grids and added an option to disable cell double-click.
- Fixed exceptions encountered during ME Editor searches.
- Fixed an issue where GridView links could fail to open in target programs due to an extra line feed appended to record IDs.
- Fixed exceptions that could occur when closing selection grids in certain scenarios.

<PageFooter />




