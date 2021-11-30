##  Document Control Settings (DOC.CONTROL)

<PageHeader />

##

![](./DOC-CONTROL-1.jpg)

**Control ID**  
  
**Transfer Folder Client Path** Enter the full path to be used by the client
to access the folder to be used as the interim location into which files will
be copied before they are moved to the document folder. This folder must be
accessible by all users of the system that are allowed to add documents and
they should be granted write permissions to the folder. Users need the ability
to add documents without disturbing existing documents. When a user adds a
file as a document the client program on his workstation copies the file into
the folder defined in this field and adds a unique key to the file name. When
this is completed the server moves the file from the transfer folder into the
document folder.  
  
**Transfer Folder Host Path** Enter the full path to be used by the host to
access the folder to be used as the interim location into which files will be
copied before they are moved to the document folder. Users need the ability to
add documents without disturbing existing documents. When a user adds a file
as a document the client program on his workstation copies the file into the
folder defined in this field and adds a unique key to the file name. When this
is completed the server moves the file from the transfer folder into the
document folder. The user that logs in the service that runs the application
environment on the host must have add, change and delete access to this
folder.  
  
**Folder Type** Select the folder type. One open folder for each type must be
defined:  
  
Current - Folder where the current released version of documents reside.  
  
Pending - Folder where the pending version of documents reside.  
  
Prior - Folder for prior versions of documents.  
  
Publish - Folder for the published (most likely .pdf) version of the current
released document. Once a document is released, only the file in this folder
is viewable to the general users. Admin users can access the editable file in
the Current folder.  
  
**Folder Name** Enter the name used to identify the associated path where
documents are stored. This name is stored in the document file records to
associate them with the path where the actual document is stored. It should
not be changed if there are any documents currently associated with it. Note:
The folder name assigned does not have to match the folder name identified in
the path fields.  
  
**Closed** This check box controls the availability of the associated folder
name and path for new documents. If the box is unchecked documents may be
added to the folder. Only one folder of each type should be open (unchecked).
Note: folders which are checked are still available to access existing files.  
  
**Attachment Folder Client Path** Enter the full path the client is to use for
access to the folder in which documents are to be stored. This folder must be
accessible by all users of the system that are allowed to view documents. This
folder should allow read only rights to regular users.  
  
**Attachment Folder Host Path** Enter the full path the host is to use for
access to the folder in which documents are to be stored. The user id that
runs the service for the application environment must have add, change and
delete rights to this folder.  
  
**Signoff Type** Define the signoff type. This could be a level - 1, 2, 3 or
acronym such as MGMT, ENG, etc.  
This is for defining what approval types may be required for document changes.
One or more of these types can be associated to a document revision.  
  
**Signoff Description** Enter a description of the associated signoff type.  
  
**Categories** Define the valid document categories to be used in [ DOC.E ](../../../../../../rover/DOC-OVERVIEW/Doc-Control/DOC-E) . More than one category can be assigned to a document.   
  
**Userid** Enter the userid of the person to define their role within the
document control module.  
  
**User Type** Enter the user role to define their security within the document
control module:  
  
Editor - These users will be able to check in/out a document and sign off on a
document revision.  
Note: Editors will only be able to edit documents that they have been added to
as Editors. They will also only be able to sign off on document revisions if
they have been added to the signoff list of the document, or if they belong to
a signoff type that has been added to the signoff list for a document.  
  
Admin - These users have access to perfom all functions of the document system
such as initiating new documents, initiating a change, changing the status,
signing off a document, cancelling a pending revision, etc.  
  
Leave blank if this user will only be signing off on documents, and not
editing them.  
  
**Signoff Type** Enter the signoff type that this user is allowed to perform.  
  
**Send emails** Check this box if you want alert messages automatically sent.
This will happen as follows:  
1\. When a pending revision is started, editors will be notified.  
2\. When an editor is added to an existing document in a pending revision or
signoff status, the editor will be notified.  
3\. When a document is changed to signoff status, the signers will be
notified. Only those signers who are not dependent on another signer will be
notified at this step.  
4\. When a document is signed off by one of the approvers, the admin user(s)
will be notified. Additionally, if another signer is dependent on that
signoff, that person will be notified.  
5\. When a document has been fully signed off, the admin user(s) will be
notified.  
  
**Convert to PDF** Check this box if you want .doc or .xls documents converted
to .pdf for a published version that can be viewable by the general user
population that are given security rights to view released documents.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />