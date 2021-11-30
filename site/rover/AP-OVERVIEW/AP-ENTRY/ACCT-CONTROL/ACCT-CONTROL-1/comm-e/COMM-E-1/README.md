##  Enter Commission Records (COMM.E)

<PageHeader />

##  General

![](./COMM-E-1.jpg)

**Comm Id** Enter the ID of the record in the COMM file which you wish to
update. To enter a new record, press RETURN to leave this field null and a
new, sequen- tial number will be assigned when filed.  
  
**Co.Code** Enter the company code this record should be applied to. The
company code must be pre-defined in the CO.CONTROL procedure.  
  
**Register Date** If you will be creating commission accrual records, enter
the register date that should be applied to those records. The current date
will be loaded into this field for you but can be changed as required.  
  
**Rep.No** The number of the sales rep (from the REP file).  
  
**Rep.Name** The name of the rep, as it appears in the REP file.  
  
**Order Pct** The percent of the order for which the rep is receiving credit.
If there is only one rep, normally 100 (100%) is entered. In the event of a
split commission order, enter the amount each rep will receive. Note that this
is not the commission percent.  
  
**Comm Pct** The actual commission percent the sales rep will receive for this
order.  
  
**Cust.No** The number of the customer for which the order was placed
(shipped).  
  
**Cust.Name** The customer name, as it appears in the CUST file.  
  
**Ship.No** The record id which generated this commission record. A commission
record can be created from a sales order shipment, rma receipt, accounts
receivable invoice or COMM.E.  
  
**Record Type** This field contains the type of procedure that was used to
create the commission record. A commission record can be generated from a
sales order shipment, RMA receipt or a/r invoice. Records can also be
generated directly in COMM.E. The only time this field can be updated is in
the creation of new records.  
  
Please note that when entering new records, you may associated the commission
to a shipment, rma receipt or invoice. However, if you are creating a misc.
record that is not related to a shipment, receipt or invoice, select a record
type of "commiission".  
  
**Ship Li** The line item number on the shipment record which generated this
commission record. Note that each line of the shipment record may contain
different reps and/or commission amounts.  
  
**Invoice.No** The number of the invoice as it appears in the AR file.  
  
**Invoice Amt Paid** This field contains the percentage of the invoice that
has been paid through the current date. This percentage is used to calculate
the eligible commission amount.  
  
**Trans Date** This represents the date on which this transaction was
originally created.  
  
**Gross.Sales** The total gross sales for the line item of the shipment. This
is used to calculate gross profit figures, in conjunction with the cost of
goods.  
  
**Cost.Goods** The cost of the goods which were shipped.  
  
**Commission Amount** Entry in this field is only required if you do not want
the system to calculate the commission for you based on the sales/profit
amount. This field is typically used when creating commission records from
COMM.E and you want to pay a rep commission but are not associating it to a
particular invoice/shipper. When commission records are created for you from
the shipping or RMA procedures, no data will appear in this field. Instead the
commission will be based on the sales and/or profit amount.  
  
**Commission Amount** This field displays the extended commission amount (1). If a flat commission amount is entered, it is loaded into this field. (2). If no flat commissiion amount is entered, the commission and order percents will be multiplied by either the gross sales or profit amount. In the [ ACCT.CONTROL ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL) procedure, you tell the system if the commission amount should be based on the sales amount or the profit. If the amount is based on the profit, the cost of goods amount will be subtracted from the gross sales before calculating the commission amount.   
  
**Eligible Amount** Displays the portion of the total commision amount that is
due and payable. The eligible amount is the commission amount multiplied by
the percent of the invoice that has been paid.  
  
**Net Payable** Contains the net commision amount payable after subtracting
all payments.  
  
**Notes** Enter any notes in this field that apply to this commission record.  
  
**Payment Amount** This field displays all of the amounts that have been paid
against the commision record. As payments are made they should be added to
this list.  
  
**Date Paid** Enter the date on which the associated amount was paid.  
  
**Check No** The check number associate with the payment.  
  
**Check Run** The check run number that created the associated check.  
  
**Total Payments** The total of payments made against the comission amount.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />