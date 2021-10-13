## Email Log Settings (MAILLOG.CONTROL)
<PageHeader />

##

![](./MAILLOG-CONTROL-1.jpg)

| **ID**|  The record ID of WEBSO is automatically loaded into this field.

-  
**Log Type**|  Select the type to be associated with the log entries created
from the email files.

**Program Path**|  Enter the path on the server and program name of the Mime
decoder program that will be executed from this process. Example: C:\Software\

**Email Path**|  Enter the path name on the server where the mime coded email
files will be residing. These are the files that are captured from the email
server and are waiting for decoding by this process. Example: C:\

**Temp Path**|  Enter the path name on the server that will temporarily house
the decoded mime email files before they are processed and stored on the M3
LOG file. This will be a working area only. No files should be loaded here by
the user. It is only for use by this process as temporary workspace. Example:
C:\

**Save Path**|  This is an optional entry and is used to archive email files
that have been processed and have found a match to email addresses with the M3
Contact file.

**Error Path**|  This is an optional entry and is used only if an error occurs
with a particular email file. It will be copied to this path for further
debugging of the process.

**Save**|  Click this button to save your changes.

**Cancel**|  Click this button to exit the settings dialog without saving
changes.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
