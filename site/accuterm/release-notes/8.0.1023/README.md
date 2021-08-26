# AccuTerm 8.0.1023 Release Notes

<PageHeader />

December 14, 2020

## Enhancements

* For users using ReZume, the Resume panel has been simplified. Resume used to share the same panel as the Reconnect (`Reconnect and resume` button instead of `Reconnect`). It now displays its own panel, with only two buttons: "Reconnect and resume" and "Close". If the user clicks "Close", a confirmation is required before closing the session.

* When an AccuTerm session requires attention (Reconnect, Resume or Host Key confirmation), if the AccuTerm window for that session is minimized, it will now be restored so the user can take  appropriate action. In some situations, the AccuTerm window may actually have been hidden, and in this case the Reconnect, Resume or Host Key panel will be displayed in a small popup window.

* The general setting `Open session shortcuts in new window` has been changed to `Open sessions in new window (instead of new tab)`. The behavior is different from previous AccuTerm 8 releases. In addition to opening sessions launched from a shortcut in a new window, sessions opened from the File menu (File->New, File->Open, or recent file) are also opened in a new window. This is more consistent with the actual intent of this option.

* For users using the AccuTerm VSCode connector which allows AccuTerm to provide file system functions to VSCode, a new feature for the file browser has been added. This may offer performance gains for users with large MD or VOC files. When VSCode starts, it requests a file list from the root directory of the file system. In the case of the AccuTerm connector, this maps to the account's MD or VOC. This is different than the wED editor which only requested a root file list when using the file browser.<br><br>Now, you can specify a list of files to use for the "root" file list by creating an MVCONNECTION.OPTIONS item in the ACCUTERMCTRL file. Line 1 is "X" and line 3 is a VM separated list of files or file patterns. Patterns can be [NAME to return files ending in "NAME", NAME] to return files beginning with "NAME" or [NAME] to return files containing "NAME". If exact names are used (no substring patterns), the MD/VOC scan can be bypassed, which may make the initial file list faster.

## Bug Fixes

* When AccuTerm is using multiple windows, activating any AccuTerm window caused all AccuTerm windows to be activated. Now only the single window will be activated.

* When using the menu designer to customize the toolbar, if a dropdown tool button was added to the toolbar, the saving the custom menu would fail. This has been fixed.

* When the `enable legacy device` option is selected, the process of configuring serial port or modem settings was confusing. This has now been simplified.

* The Prism P8 and P30 emulations should not support a "bold" attribute, per the Prism documentation. This has been fixed.

* When the screen size is to `variable (programmer mode)`, under some emulations, the LINES sent to the server was off by one line. This has been fixed.

* A bug which caused some extra text to be appended to an item saved from Visual Studio Code using the VSCode connector has been fixed. The problem occurred when a new item was created from the VSCode menu using New File, Rename or Copy.

* The SessionBarVisible property was not functional, and has been fixed.

<PageFooter />
