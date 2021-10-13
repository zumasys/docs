## Document Entry (DOC.E)
<PageHeader />

## General

![](./DOC-E-1.jpg)

| **ID**|  Enter a document ID to edit an existing document, or to create a
new document. You may also leave it blank to create a new document and have
the system assign the next sequential number.

-  
**Category**|  Enter a category, if desired. The valid values are defined in
[DOC.CONTROL](../DOC-CONTROL/README.md).

**Title**|  Enter a title for the document. This will be displayed in
[DOC.Q](../DOC-Q/README.md) and in the lookups.

**Desc**|  Enter a longer description or any notes associated with the
document.

**Status**|  The possible statuses are:
Draft - for new documents.
Change in Process - for released documents that are going through a revision
change.
Signoff - For changes or drafts in the signoff process.
Released - When a document or revision change has been fully signed off.
Retired - For documents no longer in use.

New documents are automatically set to "Draft" status. Other statuses can only
be changed by a document controller (administrator security level in
[DOC.CONTROL](../DOC-CONTROL/README.md)).

**T Curr Rev**|  This is the current revision of the document if it has been
released. This is for view only.

**T Curr Rev Eff Date**|  The current revision date of the document, if it has
been released. This is for view only.

**View**|  Press this button to view the current revision version of the
document.

**T Pending Revision**|  This is the pending revision of the document if it is
in draft, change in process, or signoff status. If you are creating a new
revision, enter the rev number here.

**Pend Rev Date**|  This is the pending revision date of the document if it is
in draft, change in process, or signoff status. It is set by the system when a
revision is started.

**View**|  Press this button to view the pending revision version of the
document.

**Key Words**|  Enter any key words that are not contained in the description
and title that you want to use for searching for this document. Words from the
title and description will automatically be included in the key word index for
searching.

**Related Docs**|  Enter any related documents for reference.

**Last Reviewed**|  Enter the date the document was last reviewed.

**Checkout User**|  This is the userid of the person who currently has checked
out the document. This person must be an editor for the document.

**Checkout Date**|  This is the date the document was checked out. It is set
by the system and is view only.

**Checkout Time**|  This is the time the document was checked out. It is set
by the system and is view only.

**Created By**|  This displays the userid who created this document.

**Date Created**|  This is the date the document was created.

**Time Created**|  This displays the time the document was created.

**Editors**|  Enter the list of people who are allowed to edit this document.
Editors are not allowed to sign off the document unless they are also added to
the signoff list to the right. A user must be an editor to check out a
document.

**Req Sign Type**|  Enter the signoff type. These must be defined in
[DOC.CONTROL](../DOC-CONTROL/README.md).

**Req Sign User**|  Enter the signoff userid. This is optional. If entered,
this userid will be allowed to sign off a pending revision. If not entered,
then any user within the signoff type will be allowed to sign off a pending
revision. The association of which users belong to which types in defined in
[DOC.CONTROL](../DOC-CONTROL/README.md).

**Req Type Dependent**|  This is to control if there is a specific order in
which the signoffs need to happen. The first in the list will have no entry
here. The second in the list could be dependent on the first signoff type, so
you would enter the first signoff type here. They need to be entered in the
order of dependency.

**Sigoff Type Done**|  This box will be checked if the associated signoff type
or user or signoff type has signed off the pending revision for the document.

**Start Doc**|  Start the document or check in or check out the document. The
button caption will change depending on the state of the document.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
