## Change Control Entry Procedure (CHANGE.CONTROL)
<PageHeader />

## So

![](./CHANGE-CONTROL-18.jpg)

| **Send Email to Rep**|  This controls whether the rep is emailed the sales
order changes. The email address on the REP file is used.

-  
**Email Address**|  Enter the email addresses that will be sent a change
notice. The email addresses will appear in a list when the price record is
saved. They can optionally be selected or not at that time. The default
selection is controlled with the next field.

**Default Email**|  When a sales order is filed and a change notice is
triggered, then the email addresses will appear in a list to optionally be
sent the notice. This field controls whether this email address is always
defaulted to send a notice.

**So Field Number**|  This is the field number in the SO file. Use the help
option to load in selected fields that when changed will cause a change notice
to be sent and/or will appear on the change notice itself. The fields that
trigger a change notice will also be maintained in a SO change history log.

**So Field Name**|  This is the field name corresponding with the field number
entered/selected.

**Trigger Change Notice?**|  If checked, then a change to this field on a SO
record will cause a change notice to be sent and SO history data to be stored
indicating what changed.

**Include in Change Notice?**|  If checked, then this data will be included in
the change notice. By default, any data field that triggers a change
notice/change history will be included in any email sent.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
