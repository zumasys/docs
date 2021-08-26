# AccuTerm 8.0.1016 Release Notes

<PageHeader />

September 23, 2019

## Enhancements

* A new advanced setting, `Send environment variable to server`, has been added to the `Terminal` panel in the settings. This can be used to send a user-defined environment variable and value to the server when the connection opens.

* A new setting, `Notify server when number of columns or rows change` has been added to the Connection category. When this is checked, AccuTerm will send a `screen-resize` signal (SIGWINCH) to the server when the screen size is changed. This is normally necessary to use `programmer mode`, however it is disabled by default when using normal mode to prevent unwanted side effects of the SIGWINCH signal on some servers (d3).

## Bug Fixes

* A problem with importing layout (.atly) from AccuTerm 7 where custom colors were lost has been fixed.

* A crash that occurs when using the PC speaker for a terminal bell has been fixed.

* The `Server name or IP` field in the `Quick Connect` dialog had a problem where the cursor could move back to the beginning of the field while typing, causing the order of characters to be scrambled. This has been fixed.

* A problem which prevented AccuTerm from shutting down while waiting for certain script operations to complete has been fixed.

<PageFooter />
