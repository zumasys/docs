## Print Blank Stock Laser Checks (CHECKS.F5)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-F5-1/README.md)

**Purpose**
The CHECKS.F5 procedure is used to print accounts payable checks on blank
check stock. All records in the Prechecks file for a selected check run are
selected for printing. After entering the check run number, the starting check
number is entered.

Should it become necessary to re-print checks for a check run, due to a
printer jam or the incorrect entry of the check number, reload the checks into
the printer and enter the new starting check number. Before reprinting, use
[CHECKS.P1](../CHECKS-P1/README.md) to post the checks that were printed correctly. The
checks that did not print correctly can be voided in
[CHECKS.E2](../CHECKS-E2/README.md) or deleted in [CHECKS.E](../CHECKS-E/README.md).

The actual Checks and AP files are not updated until the
[CHECKS.P1](../CHECKS-P1/README.md) posting process.

**Frequency of Use**
As required.

**Prerequisites**
The creation of a check run through the [AP.P1](../AP-P1/README.md) process.

**Data Fields**

| **Stub:**           |
| ------------------- | --------------------------------------------------------- |
| **Vendor**          | The name of the vendor to whom the check is being issued. |
| **Invoice No**      | The invoice number(s) being paid by this check.           |
| **Invoice Date**    | The original invoice date(s).                             |
| **Invoice Balance** | The balance due on the invoice before this check.         |
| **Amount Paid**     | The amount of the invoice being paid by this check.       |
| **Discount Taken**  | The amount of discount being taken for the invoice.       |
| **Net Check Amt**   | The net amount(s) of each invoice being paid.             |
| **Check:**          |
| **Check Date**      | The date on which the check was issued.                   |
| **Check Amount**    | The total amount of the check.                            |
| **Pay**             | The amount being paid in words.                           |
| **To the order of** | The name and address of the vendor being paid.            |

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
