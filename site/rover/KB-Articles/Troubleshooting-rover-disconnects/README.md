# Troubleshooting Rover Disconnects 

Rover ERP – Client Update Installation, Logging & GDI Monitoring Guide

Table of Contents
Overview
Prerequisites
Check Your Current Client Version
Install the Update
Enable Diagnostic Logging
Managing Performance Impact of Logging
Collect & Send Crash Logs
Monitor GDI Objects in Task Manager
Troubleshooting & Workarounds
Best Practices
Glossary
Quick Reference
Overview
This update ensures improved stability and diagnostic capabilities. Users should confirm their installed version, upgrade to the version shared by their support engineer, enable logging, and follow crash reporting and monitoring procedures.

Summary: Confirm installed client version → install update provided by engineer → enable logging → collect crash logs → monitor GDI object counts.

Prerequisites
Windows user with local admin rights.
Stable internet connection.
Space to download and unzip the installer package.
Target PCs selected for update.
Summary: Confirm admin access and internet; prepare PCs for update.

Check Your Current Client Version
Before updating, verify which version of the Rover ERP client you are running.

Launch Rover ERP Client.

Go to Help → About.

In the About dialog, note the version number displayed.

If it is lower than the version provided by your support engineer, proceed with the update.
If already at that version, no further update is required.
Tip: Capture a screenshot of the version info if you need to confirm with IT.

Summary: Use Help → About to confirm if you need the update.

Install the Update
Your support engineer will provide:

The version number you should update to.
The download link to the installer package.
Download the installer package from the link provided.

Right-click the ZIP → Extract All… to a local folder (e.g., C:\Temp\RoverUpdate).

In the extracted folder, right-click the installer (.exe or setup) → Run as administrator.

Follow on-screen prompts to complete the installation.

Launch Rover ERP to confirm it opens without errors.

Repeat the Check Your Current Client Version step to confirm you are now running the new version.

Summary: Use the link from the engineer, extract, run installer as admin, then verify version matches what they provided.

Enable Diagnostic Logging
Open Rover ERP.
Go to File → Settings.
Check Enable logging.
Click Save (or OK) to apply.
Restart Rover ERP to ensure logging is active.
Summary: Enable logging under File → Settings and restart the app.

Managing Performance Impact of Logging
While logging is useful for diagnosing crashes, it may slow down performance in some cases.

If you notice sluggish performance or lag after enabling logging:

Go back to File → Settings.
Uncheck Enable logging.
Save your changes and restart Rover ERP.
If a crash occurs while logging is disabled, you will not have logs to send to support. Consider re‑enabling logging temporarily if directed by your engineer.

Summary: Disable logging if it significantly slows down performance, but re-enable when asked to collect logs.

Collect & Send Crash Logs
When Rover ERP crashes, a dialog will appear with the log file path.

Copy the file path from the crash dialog (use the copy button or Ctrl+C).

Paste the path into File Explorer and press Enter.

Locate the log file (and any related .dmp files).

Send these files to your support contact, including:

What you were doing when it crashed
Number of open Rover windows
Current GDI objects count (if monitored)
Summary: Copy the crash path → open in Explorer → send log/dump with context.

Monitor GDI Objects in Task Manager
Open Task Manager (Ctrl+Shift+Esc).
Go to Details tab.
Right-click column header → Select columns.
Enable GDI objects → click OK.
Keep Task Manager open while working.
If the Rover process approaches 10,000 GDI objects, save work and restart Rover ERP.
Summary: Add GDI objects column; restart Rover before 10K.

![Troubleshooting Rover Disconnects ](./Troubleshooting-Rover-Disconnects.png)

![Troubleshooting Rover Disconnects 2 ](./Troubleshooting-Rover-Disconnects-2.png)

![Troubleshooting Rover Disconnects 3 ](./Troubleshooting-Rover-Disconnects-3.png)

Troubleshooting & Workarounds
Installer blocked: Run as admin, allow-list on test PCs if security tools block it.
No crash dialog: Confirm logging is enabled; check %LOCALAPPDATA%\\Rover\\Logs manually.
Cannot open crash path: Ensure path copied correctly. Paste directly into File Explorer.
High idle GDI: Close unused Rover windows. Restart periodically.
Summary: Confirm logging, retrieve logs manually if needed, restart Rover to manage GDI counts.

Best Practices
Always confirm your version before and after updating.
Enable logging on all updated PCs (disable only if performance is degraded).
Monitor GDI counts during heavy usage.
Restart Rover proactively at 8–10K GDI objects.
Provide detailed context with crash logs.
Summary: Confirm version, manage logging settings, monitor GDI counts, restart proactively, and submit detailed crash reports.

Glossary
Rover ERP Client: The Windows desktop application.
Update: Installation package intended to replace/upgrade existing client.
GDI Objects: Windows graphical resources; excessive counts (~10,000) can cause app closure.
Crash dialog: Pop-up after a crash showing log file location.
Summary: Key terms include Rover ERP client, update, GDI objects, and crash dialog.

Quick Reference
Check version: Help → About
Download update: Link provided by your support engineer
Enable logging: File → Settings → Enable logging → Save
Disable logging (if slow): File → Settings → uncheck Enable logging → Save
On crash: Copy path from dialog → open in Explorer → send log/dump
Monitor GDI: Task Manager → Details → Select columns → GDI objects; restart Rover before 10K
<PageFooter />
