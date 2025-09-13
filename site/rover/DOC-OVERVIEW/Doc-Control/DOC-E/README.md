##  Document Entry (DOC.E)

<PageHeader />

**Form Details**  
[ General ](DOC-E-1/README.md)   
[ Revision History ](DOC-E-2/README.md)   
[ Change History ](DOC-E-3/README.md)   

**Purpose**  
The DOC.E procedure is used to enter new documents into the system and to change existing documents. This can only be done by "Admin" type users as defined in [ DOC.CONTROL ](../README.md) .
  
The General tab is where the main information related to the document is
entered.  
The second tab shows revision history which is the date, time, description,
and signoffs of the various revisions.  
The third tab is Change history which tracks changes to fields such as title,
description, status, editor list and signoff list. It also displays when a
document is signed out or in.  
  
When a new document is created it is automatically in "Draft" status. To start
off a new document the user must click the button "Start Doc" which will bring
up a file browser dialog to get the initial draft of the document file. Once
this is done, then the document can be edited by any users that have been
added as Editors of this document.  
  
For an existing document that has already been released and needs to be
revised, the admin user will change the status to "Change in Process" and
enter a pending revision. Once this is done, then the document can be edited
by any users that have been added as Editors of this document.  
  
The editing process is accomplished by "checking out" a document. This allows
the user to edit the document. When done the user must "check in" the
document. Only one person at a time can have the document checked out.  
  
Once a document that is in Draft or Change in Process status is ready to be
signed off, the Admin user needs to change the status to "Signoff". Only users
that have been added to the signoff list of the document will be allowed to
sign off the revision.  
  
Once the signoffs have been completed, the status can be changed to
"Released". This will update the revision history tab as follows:  
The current version (if any) becomes the most recent prior version. All prior
versions remain. The pending version becomes the Released version.  
  
Documents cannot be deleted but they can be changed to status "Retired".

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the document control record ( [ DOC.CONTROL ](../README.md) ).

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />