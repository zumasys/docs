##  Document Control Settings (DOC.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](DOC-CONTROL-1/README.md)   

**Purpose**  
This control procedure is used to define the settings for the Document control
module.  
  
Required to be defined here is at least one Admin user under the Security
section. In addition, all four folder types must be defined - Current,
Pending, Prior, and Publish as well as the Transfer Folder.  
  
Optional entries are: document categories and the options for Sending Signoff
Notifications and Convert to PDF when publishing.  
  
If documents are to be edited by other users, then those users will need to be
listed in the Security section with Editor as their User Role. If certain
users are to be signing off on documents, then their userids need to be added
also to the Security section and they need to be assigned a signoff type, as
defined in the Signoff type list.  
  
Documents are created by Admin users in [ DOC.E ](../../../../../rover/DOC-OVERVIEW/Doc-Control/DOC-E) and can be viewed by editors and signers in [ DOC.E2 ](../../../../../rover/DOC-OVERVIEW/Doc-Control/DOC-E2) . [ DOC.Q ](../../../../../rover/DOC-OVERVIEW/Doc-Control/DOC-Q) is used for searching and displaying documents. If general users (that are not defined here) are given view access to [ DOC.Q ](../../../../../rover/DOC-OVERVIEW/Doc-Control/DOC-Q) , then they will be able to view published documents.   
  
If the Send Signoff Notifications box is checked, this will happen as follows:  
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

**Frequency of Use**  
At system setup or when changing server names or file structures. Also, when
adding or changing users of the document system.

**Prerequisites**  
File paths on the server must be created.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />