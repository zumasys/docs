## Change Control Entry Procedure (CHANGE.CONTROL)
<PageHeader />

## Po

![](./CHANGE-CONTROL-9.jpg)

| **Email Address**|  Enter the email addresses that will be sent a change
notice. The email addresses will appear in a list when the purchase order
record is saved. They can optionally be selected or not at that time. The
default selection is controlled with the next field.

-  
**Default Email**|  When a purchase order is filed and a change notice is
triggered, then the email addresses will appear in a list to optionally be
sent the notice. This field controls whether this email address is always
defaulted to send a notice.

**Po Field Number**|  This is the field number in the PO file. Use the help
option to load in selected fields that when changed will cause a change notice
to be sent and/or will appear on the change notice itself. The fields that
trigger a change notice will also be maintained in a PO change history log.

**PO Field Name**|  This is the field name corresponding with the field number
entered/selected.

**Trigger Change Notice?**|  If checked, then a change to this field on a po
number record will cause a change notice to be sent and po history data to be
stored indicating what changed.

**Include in Change Notice?**|  If checked, then this data will be included in
the change notice. By default, any data field that triggers a change
notice/change history will be included in any email sent.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
