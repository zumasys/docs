# General Ledger Training

<PageHeader />

# Initial Setup

## Fiscal Periods

(GL-SU-1 also GL-24) Fiscal periods define the ending date of an accounting period. The most current date is at the end of the list. All dates for at lease one fiscal year should be always beentered.

You can set all dates initially to the open status. They are closed automatically when the period is closed through the menus.

Generally there are 12 periods in a year. You should never need more because you can reopen and close a period multiple times.

Generlly there are 4 quarters in a year.

### Account Status (GL-SU-21)

There are 3 account status codes. A – Active (Open for posting and entry) I – Inactive (Open for posting if already entered in a Journal Entry that is not H – Header Used for Chart of Accounts report heading.

### Account Category (GL-SU-22)

Set up as many account categories as you like. These are generally such things as Assets, Liabilities, Sales Revenue, Sales Expenses, etc.

### Bank Codes (GL-SU-23)

Set up a bank code for each bank where you deposit or withdraw money.

### Journal Codes (GL-SU-24)

Journal codes are used for classifying journal entries. You should have the following codes and more if desired:

- GJ – General Journal
- POS – Sales Journal
- AP – Accounts Payable Journal
- AR – Accounts Receivable Journal

## Account Master (GL-2)

Set up your chart of accounts. Use any formatting structure you desire but be consistent. We find it best if you choose to use a fixed number of numbers for the accounts. This is not necessary as long as you remember that all sorting is done from the left (even though most people choose to use numbers). You can use letters if you want. You can also use periods or dashes if you desire.

One method to use is 6 numbers. Enter the headers first so that you have a feel for the accounts. One structure that you can use is:

10000 - Assets 13000 - Inventory 17000 - Other Assets 20000 - Current Liabilities 30000 - Capitol 40000 - Revenue 50000 - Cost of Goods Sold 60000 - Operating Expenses 80000 - Other Income

Account type is D for debit and C for credit. This is to identify the accounts normal balance.

Income Statement or Balance Sheet. Enter an I or B depending on the type of account.

All Income Statement type accounts need to have a Closing Account. This closing account is where the account balance is transferred to at the end of the year/beginning of a new year. Balance Sheet accounts do not get transferred.

## Journal Entries

The journal entry process is the only process that updates the general ledger. From here you review, create, and post entries into the general ledger.

### Regular Journal Entry

Enter a valid journal code – the default is GJ. Enter ?? for a list of journal codes.

Enter a journal number. The system will automatically assign a number if you enter a period.

Enter a type.

- M - is for manual entry.
- S - is for system generated entry (filled in automatically by A/P, POS, etc.)
- R - is to reverse a previous entry.
- B - is to create beginning balances.

Enter a valid accounting period.

Enter the date the entry is for.

Enter any comments. These will be seen on reports so be very descriptive.

Enter all of the account numbers, projects, references, debit amounts and credit amounts. Leave fields blank if there is not value for them.

Either save or post the entry when you are done. If debits don’t equal credits you cannot post the entry. You can save entries that are out of balance to be corrected and posted later.

### Beginning Balance Journal Entry

Do everything like a regulary journal entry but use “B” for the type field. This will post to the beginning balance fields in the database.

### Reverse a Journal Entry

Heaven forbid you might make a mistake! Enter an “R” for type. You will be prompted for the entry to reverse. The entry will be something like GJ\*1655. This is the journal code and asterisk and the journal number of the entry you want to reverse. The debits and credits are displayed in the opposite way that they were entered. Just press enter through every field and post it.

## Disbursements (Checks)

If you are using TCS A/P then in the A/P module choose option 21 (end of period) and post your checks to G/L. This process updates the GL.CD file (CashDisbursements).

### Enter/Modify Checks

Enter the check number and the bank that it is drawn on. Enter the date, payee, amount, and any comments. Enter the Account (G/L) distribution. It is not wise to enter the same account as the bank that is drawn on, rather enter an account(s) for expenses, inventory, etc.

### Cleared Check Entry

Enter the bank code that the checks are drawn on. Enter the beginning check and ending check using your bank statement as a guide. Any gaps on the bank statement should be a gap in your entry. You can use the same check number for both beginning and ending check.

If you make a mistake you can use Cleared Check Reversal. The input is identical to cleared check entry only when the record is updated the “clear bank” flag is set to indicate that the check has not cleared.

### Outstanding Check List

Once you have entered the cleared check list you can run the outstanding check list report. This report is a list of all of your outstanding (uncashed) checks.

## Miscellaneous Receipts

Use this option to enter receipts that were not taken at the cash register or though A/R. Inputs are nearly identical to checks.

## End of Period (Month or Year)

There are 4 things that happen here.

1. Post Cash Disbursements (usually pushed here from A/P).
2. Post Miscellaneous Receipts (manually entered in G/L).
3. Close a Month (Months 1-11).
4. Close a Year

(When we say month it is synonymous with fiscal period.)

**Before you close a month be sure to print your income and balance sheets to make certain that there are no more journal entries to be made.**

### Post Cash Disbursements

Enter the bank code you are posting. Enter the check date range to use for posting. Enter the accounting period to use. Indicate if you will be posting detail or summary. Most people post summary. _When you choose detail posting then if there were 1,000 checks to post there would be 1,000 line items on the journal entry._

### Post Miscellaneous Receipts

Same criteria as Cash Disbursements

### Close a Month

This process creates beginning balances for the next period. It updates year-to-date, quarter-to-date and project-to-date values for both financial activity and for budgets.

<PageFooter />
