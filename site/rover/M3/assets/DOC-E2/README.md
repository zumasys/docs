## View, Checkout, Signoff Documents (DOC.E2)
<PageHeader />

**Form Details**
[General](../DOC-E2-1/README.md)
[Revision History](../DOC-E2-2/README.md)
[Change History](../DOC-E2-3/README.md)

**Purpose**
The DOC.E2 procedure is used to view existing documents and to check out/in a
document revision or sign off on a document revision. The data within the
screen is view only.

The General tab is where the main information related to the document is
displayed.
The second tab shows revision history which is the date, time, description,
and signoffs of the various revisions.
The third tab is Change history which displays changes to fields such as
title, description, status, editor list and signoff list. These types of
changes would have to be done by an Admin user in [DOC.E](../DOC-E/README.md) It also
displays when a document is signed out or in.

For a document to be edited, it must be in "Draft" or "Change in Process"
status. The editing process is accomplished by "checking out" a document. This
allows the user to edit the document. When done the user must "check in" the
document. Only one person at a time can have the document checked out.

The signoff process is started when the Admin user changes a pending revision
to status "Signoff". Only users that are listed as signers or that have been
specified in [Doc.Control](../Doc-Control/README.md) as part of the signoff type listed
here will be allowed to sign off a revision.

**Frequency of Use**
As required.

**Prerequisites**
Initialization of the document control record ([DOC.CONTROL](../DOC-CONTROL/README.md))
and creation of the document record using [DOC.E](../DOC-E/README.md) by an Admin user.
Any user of this screen must be defined in [DOC.CONTROL](../DOC-CONTROL/README.md) and
must be either an "Editor" or "Signer" for the document accessed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
