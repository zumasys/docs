## Attachment Settings (ATTACHMENT.CONTROL)
<PageHeader />

##

![](./ATTACHMENT-CONTROL-1.jpg)

| **Control ID**|  Automatically loaded with the text "ATTACHMENT" to open the
correct record in the file.

-  
**Transfer Folder Client Path**|  Enter the full path to be used by the client
to access the folder to be used as the interim location into which files will
be copied before they are moved to the attachment folder.This folder must be
accessible by all users of the system that are allowed to add attachments and
they should be granted write permissions to the folder. Users need the ability
to add attachments without disturbing existing attachments. When a user adds a
file as an attachment the client program on his workstation copies the file
into the folder defined in this field and adds a unique key to the file name.
When this is completed the server moves the file from the transfer folder into
the attachment folder.

**Transfer Folder Host Path**|  Enter the full path to be used by the host to
access the folder to be used as the interim location into which files will be
copied before they are moved to the attachment folder. Users need the ability
to add attachments without disturbing existing attachments. When a user adds a
file as an attachment the client program on his workstation copies the file
into the folder defined in this field and adds a unique key to the file name.
When this is completed the server moves the file from the transfer folder into
the attachment folder. The user that logs in the service that runs the
application environment on the host must have add, change and delete access to
this folder.

**Folder Name**|  Enter the name used to identify the associated path where
attachments are stored. This name is stored in the attachment file records to
associate them with the path where the actual attachment is stored. It should
not be changed if there are any attachments currently associated with it.
Note: The folder name assigned does not have to match the folder name
identified in the path fields.

**Closed**|  This check box controls the availability of the associated folder
name and path for new attachments. If the box is unchecked attachments may be
added to the folder. If more than one folder is unchecked the user will be
asked to choose which folder to use when they add an attachment. Note: folders
which are checked are still available to access existing files. In addition,
files may be added to a closed (checked) folder if the M3 file associated with
attachment designates a specific folder name to use.

**Attachment Folder Client Path**|  Enter the full path the client is to use
for access to the folder in which attachments are to be stored. This folder
must be accessible by all users of the system that are allowed to read
attachments. This folder should allow read only rights to regular users.

**Attachment Folder Host Path**|  Enter the full path the host is to use for
access to the folder in which attachments are to be stored. The user id that
runs the service for the application environment must have add, change and
delete rights to this folder.

**File Name**|  Enter the name of the M3 file whose attachments are to
associated with a previously specified folder name. Anytime an attachment is
added that is associated with the file name it will placed in the path
associated with the folder name specified. This is true even if the folder is
flagged as closed.

**File Description**|  Displays the full name of the associated file.

**File Folder Name**|  Enter the Folder Name to be associated with the file
specified.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
