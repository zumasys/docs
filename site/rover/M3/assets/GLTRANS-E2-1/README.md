## G/L Transaction Reversal (GLTRANS.E2)
<PageHeader />

##

![](./GLTRANS-E2-1.jpg)

| **Gltrans ID**|  To reverse an existing transaction, leave this field null
and enter the transaction number in the next field. If the posting status is
not set to post on-line, and you wish to modify an existing reversal, enter
that number here.

-  
**Previous.id**|  Enter the transaction number you wish to reverse. The
transaction must exist on file and must have been previously posted. If it was
not posted, you should use [GLTRANS.E](../GLTRANS-E/README.md) to modify the existing
record. If found, the transaction will be loaded into the current screen, with
all dollar amounts reversed. To completely reverse the prior tran- saction,
simply file the record. You may, if you wish, make any other adjustments to
this transaction once it has been loaded.

**Fiscal year**|  Enter the fiscal year into which this is being posted. This
year must exist in the FY file and must not have been finally closed.

**Date**|  Enter the transaction date for this record. This date must be
within the defined fiscal year already entered.

**Journal #**|  Enter the journal number. The journal number can be any user
defined number up to 4 digits.

**Desc**|  Enter a description for this line entry. Multiple lines are
permitted, so make it as detailed a description as you wish.

**Line number**|  Enter the line item number. This line item number identifies
each account and amount which is part of this transaction. When filed, the
numbers will be re-sequenced in case there have been any insertions or
deletions prior to filing.

**Account number**|  Enter the account number for this line to which to dollar
amount will be posted. The account number must exist on the GLCHART file.

**Acct desc**|  The account description is loaded from the GLCHART file
automatically. This is for verif- ication only and cannot be changed.

**Amount**|  Enter the amount to be posted to the account number on this line.
For credit amounts, enter them as a negative number (preceded by a minus sign
"-"). Each time you enter a dollar amount, the balance field will be updated
to help you keep track of the running balance. This balance must be zero to
sucessfully file (and post) the record.

**Balance**|  Running balance of


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
