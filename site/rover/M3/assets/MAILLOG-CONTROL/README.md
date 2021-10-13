## Email Log Settings (MAILLOG.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../MAILLOG-CONTROL-1/README.md)

**Purpose**
M3 provides the ability to capture email messages and convert them into Log
records as part of the contact management system. This procedure is used to
start and stop the background process that processes the email messages. To
use this feature your email server must be able to generate Mime encoded files
for each email message. These fiels must be placed into the folder (path)
specified in this procedure.

The process will check the sender and recipient email addresses in each email
message and match them with the email adresses in the contact file. When a
match is found the system will create a log record and associate it with each
contact whose email address was included in the message. In addition, any
attachments to the email will be captured in the attachments archive and
referenced on the log record.

**Frequency of Use**
System setup, then as required to start and stop the process.

**Prerequisites**
The ATTACHMENT.CONTROL process must be setup to allow email attachments to be
archived.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
