# Rover Desktop v2.5.0 Release Notes

<badge text= "Version 2.5.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.5.0 of the Rover Desktop application.  Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Desktop%20v2.5.0) or [Support](mailto:help@zumasys.com?subjectRover%20Desktop%20v2.5.0) with any questions!

You can download this version [here!](https://roverdesktop.blob.core.windows.net/apps/rover-installer-2.5.0.zip)

## Updates

* Adds optional automatic exception log submission.
* Extends exception handling to cover corrupted state exceptions.
* Adds a message type for host exceptions and handles those events.
* Adds a loading indicator and blocks form interaction during loading and tab changes.
* Adds a configuration setting to control the loading overlay.
* Allows the selection grid to use up to 80% of the current screen width on initial render.
* Allows multiple lines of data to be pasted into single-textbox datagrids.
* Filters pasted input for unsafe characters.
* Adjusts installer steps to support additional login prompt configurations.
* Adds full CLI install support.
* Adds “Legacy Z-Index mode” to keep all Rover forms at the same z-index, preventing non-Rover forms from being displayed between Rover app forms.
* Repurposes the “Dock Form” button to “Switch to Workspace.”
* Updates the default installation port to 43522.
* Removes Explorer and Messages panes from Studio Designer.

## Bug Fixes

* Addresses issues with missing configuration files during client startup. Basic configuration files are created automatically when the last configuration or default configuration is unavailable.
* Addresses issues with updated field values being lost in control associations when navigating to other items via arrow keys or the mouse scroll wheel.
* Addresses issues with selection grid sorting on right-justified column data.
* Resolves a thread abort issue with the loading overlay.
* Resolves an issue with tab activation order causing unexpected issues with field focus events and, at times, unexpected tab changes.
* Resolves an issue where Tab/Enter on an empty field in a nested grid does not progress to the next field outside the grid.
* Resolves an issue with GotFocus events being suppressed incorrectly.
* Resolves an issue where selection grid height hides a single data row when column headers wrap to multiple rows.
* Resolves a regression caused by an interaction between two recent changes that clears controlling fields during tab navigation.
* Resolves an additional regression caused by an interaction between two recent changes. This restores proper behavior for both button click event handling and navigation between tabs without data being improperly cleared.
* Resolves an issue where the Up and Down arrow keys do not move to the expected row in selection grids when the row index is set via a search.
* Resolves issues with range selection and range operations on nested grids.
* Resolves an issue with range selection during mouse wheel scroll events.
* Allows text to be pasted into an existing string in controls.
* Allows a secondary click on a control to place the cursor when the “Automatically Select Text In Current Control” setting is enabled.
* Resolves an issue with form scaling during message receipt and command window host-side error text receipt.
* Resolves a timing issue with communication of after-input events impacting checkbox controls in nested datagrids.
* Resolves an issue with arrow key navigation in nested datagrids.
* Resolves an issue where pasting into a standard textbox triggers an after-input call prematurely.
* Resolves an issue with Ctrl+V not working as expected in the search field on data forms.
* Resolves an issue with button actions that redirect to tabs where controls have not been fully loaded.
* Adds a proper owner to modal dialog forms to ensure those modals are kept above their parent form.
* Ensures the workspace form is the owner of the locked record dialog when the message is displayed before an editor window is active, improving visibility.
* Ensures the “Show Multiple Configurations” setting is not overwritten by the installer unless “Overwrite Existing Configuration” is selected.
* Resolves issues where additional setting fields’ read-only state is not set properly when switching between configurations.
* Resolves an issue with before input messages being suppressed on initial focus events after tab changes.



<PageFooter />




