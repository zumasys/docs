## Import Payroll Data to G/L (PAYROLL.P2)
<PageHeader />

**Form Details**
[Form Details](../PAYROLL-P2-1/README.md)

**Purpose**
The purpose of payroll.p2 is to create a journal (gltrans record) for payroll
charges from a file. Typically this file is generated from the
software/service that your company is using to process payroll. The file can
be a text (comma or tab delimited) or an Excel file.

Below is the layout of the file.

1\. Column 1 - G/L account number
2\. Column 2 - Date
3\. Column 3 - Debit Amount
4\. Column 4 - Credit Amount

If the g/l account numbers do not exist in the database or have been
inactivated, they will not be added to the journal. You can use
[GLTRANS.E](../GLTRANS-E/README.md) to update the information on the record.

Please note that this journal entry will not autumatically post to the general
ledger. The status will be set to hold. However, you will we be given an
option to open [GLTRANS.E](../GLTRANS-E/README.md) to view the journal. If you have set
the post status to "P" in [GL.CONTROL](../GL-CONTROL/README.md), when you save the
record in [GLTRANS.E](../GLTRANS-E/README.md), the journal will be posted.

**Frequency of Use**
As required.

**Prerequisites**
The general ledger account numbers that will be referenced on the file that
will be used in this process need to be defined in the system. Use
[glchart.e](../Glchart-e/README.md) to enter account numbers.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
