# Document Control Overview

<PageHeader />

- [Data Entry Procedures](DOC-ENTRY/README.md)
- [Reports and Inquiries](DOC-REPORT/README.md)
- [Update Processes](DOC-PROCESS/README.md)

**Purpose**  
The document control module provides the ability to track documents and
revisions while maintaining secure access for editing, approving and viewing.

**Prerequisites**  
Entry of the control information in [Doc.Control](Doc-Control/README.md) is required before any documents can be added to the system. This includes userids and roles for those users that will be involved as administrators, editors, or signers of documents. Additionaly, the server file paths where the document files will reside need to be defined.

**Data Files**  
There are only two files explicitly associated with the document system.  
  
DOC contains all of the information defining the document, change history,
revision history and all of the file names that have been linked to this
document. The file names are referencing different versions of the document,
if applicable. File names are not apparant to the user within the procedures
themselves, but the ability exists to view prior revisions of documents.  
  
DOCSIGN stores information about signoffs of the document revisions. This file
enables signoffs to occur while or if the DOC record itself is locked.

**System Interface**  
The document module does not interface with other modules in M3.

**User Interface**  
The user interface to the document module consists of one main data entry screen, [DOC.E](Doc-Control/DOC-E/README.md) , which administrators use to add or change general document data, and to start a document. Additionally, the [DOC.E2](Doc-Control/DOC-E2/README.md) screen displays all the same detail data as [DOC.E](Doc-Control/DOC-E/README.md) but is not updatable. This screen is used by authorized editors and/or signers of documents to view more detailed information than is visible in the inquiry screen, [DOC.Q](Doc-Control/DOC-Q/README.md) . Both [DOC.E2](Doc-Control/DOC-E2/README.md) and [DOC.Q](Doc-Control/DOC-Q/README.md) allow editors to check in/out a document and signers to sign off on a document.
  
In addition to these procedures there is a set of notifications that are optional based on a setting in [Doc.Control](Doc-Control/README.md) . These notifications happen as follows:
  
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
  
The notification is sent as an alert viewable from Message.Q and the message has a link to [DOC.E2](Doc-Control/DOC-E2/README.md) . The message will be emailed to the user if the user's particular security settings have that option specified.

**Setup Procedures**  
[Doc.Control](Doc-Control/README.md) must be set up before documents can be created in [DOC.E](Doc-Control/DOC-E/README.md) .
  
The following user roles are defined in [DOC.CONTROL](Doc-Control/README.md):
  
Editor - These users will be able to check in/out a document and sign off on a
document revision.  
Note: Editors will only be able to edit documents that they have been added to
as Editors. They will also only be able to sign off on document revisions if
they have been added to the signoff list of the document, or if they belong to
a signoff type that has been added to the signoff list for a document.  
  
Admin - These users have access to perfom all functions of the document system
such as initiating new documents, initiating a change, changing the status,
signing off a document, cancelling a pending revision, etc.  
  
Userids are assigned a role. If a user is only to be a signer and not an
editor, then they do not need to be assigned a role.  
  
If documents will need signoffs (approvals), then signoff types need to be defined in [Doc.Control](Doc-Control/README.md) . Users that will be signers will need to be assigned a type. Types are user defined such as departments, sections, or levels of management.

**Flow of Activities**  
The flow of activites in the document module begins wth starting a document in [DOC.E](Doc-Control/DOC-E/README.md) . This must be done by an administrator. The status of a new document is "Draft". A revision must also be entered. The initial document must be retrieved using the "Start Doc" button. Once that is done, it is allowed to be edited. Editors and signers are added specifically to a document.
  
Once editing is complete, the administrator can change the status to "Signoff"
if approvals are required. If notifications are turned on, then signers will
be notified about the document.  
Once all approvals are complete, if notifications are turned on, the administrator will be notified, and can change the document status to "Released". The release process "publishes" the current revision. It is now viewable to general users that have view access to [DOC.Q](Doc-Control/DOC-Q/README.md) .
  
For existing documents that have been released, and are needing a revision, the adminstrator should enter a pending revision and change the status to "Change in Process". Once this is done, the flow is the same as described previously for the new document. Once this revision is released, then the current version of the document becomes the prior version, and the new revision becomes the current published version. All prior versions are viewable in [DOC.E](Doc-Control/DOC-E/README.md) or [DOC.E2](Doc-Control/DOC-E2/README.md) .
  
[DOC.Q](Doc-Control/DOC-Q/README.md) can be used at any time to search for documents in various statuses, or to search by keywords or categories.
In addition, there are various lookups activated by double clicking the
Document ID.  
  
The last review date can be updated at any time, and there is a report, [DOC.R1](DOC-REPORT/DOC-R1/README.md) that can be used to list documents needing review based on a user entered time parameter.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
