## Enter Financial Report Frameworks (GLRPT.E)
<PageHeader />

## Accounts

![](./GLRPT-E-2.jpg)

| **Line #**|  Enter the line number for this line of the report. This is a
sequential number, used only to uniquely identify each line on the screen.

-  
**Account #**|  If an account number and/or name is to appear on this line of
the report, enter the number here. If you are defining an account range you
would specify the beginning account number here. If left blank, you will be
allowed to enter a miscellaneous description in the next field. Additionally,
the following special codes can be entered to help format the report:

BLANK - Prints a blank line on the report (This can also be accomplished by
leaving the description field blank.)

TOTAL - Prints the running total for a column

RESET - Resets the running total for a column to 0

ADD - Adds one total to another

SUBTRACT - Subtracts one total from another

PAGE - Skips to top of the next page

LINE - Prints a line of dashes (common before subtotals as an underline.)

DLINE - Prints a double under-line.

SIGN - Causes the sign of amounts printed after this command to be reversed.
This is used to print credit balance accounts on the balance sheet as positive
numbers.

INDENT- Indents the description field 1 position

UNDENT- Moves description field 1 position to left

TOTAL.SALES - Prints the designated total, but also identifies this total as a
net sales figure for percentage calc.

INCOME - Loads in the corresponding balances for all account numbers defined
as income accounts. This is useful for statements such as balance sheets which
typically show one line for profit and loss.

**To Account**|  If the value for the line is to be based on a range of
account numbers, enter the ending account number in this field. If the line is
only to reference one account number then enter the account number in the
"From Account" field and leave this field blank. If you want all of the
accounts in the range to be printed as individual lines, you may do so by
entering the letter "E" (expand) in the "Prn Sup" field.

**Account Mask**|  If you entered both a from and to account number you may
limit the account numbers included in the range by entering a mask to filter
account numbers. To enter a mask use square brackets as the wild card
character. For example, entering the mask [-018] will only include account
numbers that contain any characters, followed by -018 followed by any
characters. For accounts starting with 100 you would enter the mask 100] . If
you left both the from and to account number fields blank the mask you enter
in this field will be applied against all account numbers.

**Description**|  If an account number is entered in the previous field, this
field is defaulted from the account description as it appears in the GLCHART
file. If no account number was entered, and no special codes were entered
either, it is assumed you wish to enter a miscellaneous description here. You
may enter any characters up to 25. This is handy when wanting to print
headings such as "Assets" or "Liabilities" before listing the accounts and
their totals. It can also be used to label totals at the end of a grouping of
accounts.

**Acct.Types**|  The type of account or total. For account numbers the type
will automatically be loaded from the GLCHART file. This field will define how
the amount(s) will be presented. Debit account with debit amounts will be
shown as a positive number. Credit accounts with credit amounts will also be
shown with positive numbers. Debit account with credit balances and credit
accounts with debit balances will be displayed in brackets.

**Supp**|  Use this field to suppress the detail printing of account totals by
entering the letter "Y". This can be used when you wish to print only group or
department totals without showing each account amount. If you have specified
an account number range and/or mask and you waht each account and amount
listed on a separate line, enter the letter "E".

**Tot#**|  Enter the 'total#' to which you wish to add the amount of this
line. Up to six (6) separate totals
can be carried at one time. These totals are variable "buckets" which can be
used to hold
running totals in a column, to be printed at the end of a series of accounts.
These can be printed or reset any time, using the special codes available in
the account number field.

**Roll**|  This field is only used when the special code "TOTAL" is entered in
the account number
field. It is used to add the amount of one total field into another. This is
useful when it is desirable to carry multiple totals, such as totalling and
resetting each departments' amounts, but still wanting to carry a grand total
as well.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
