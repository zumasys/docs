# Month-End Closing

<PageHeader />

Prerequisite to End of Month Closing: all of the necessary G/L account codes must be setup in the following modules:

Point-of-Sale Accounts Payable Accounts Receivable General Ledger

**_There is no requirement to close the modules in any particular order, other than G/L needs to be last._**

**_The steps within a module should all be completed in the sequence listed._**

## General Merchandise

#### End of Period Processing

This process sets the week-to-date, month-to-date, and year-to-date sales quantity values in GM. This should be performed at the end of the day on the last day of business, or before the first day of business for each week, month, and year. (GM-23)

OR

You can run the utility to rebuild the numbers whenever you wish. (GM-SU-01-06)

## Point of Sale

Use menu path POS-23-29 (POS, End of Day Functions, General Ledger Interface)

### Create G/L Distribution

This process resolves the sales transactions with all of the associated G/L codes and creates a file for reporting and posting. (a)

- 1. Enter the sales date for the first date to be included.
    2. Enter the sales date for the last date to be included.
    3. If you want to include the Over/Short results from your daily register reconciliation then enter a “Y”, otherwise enter “N”. (b)
    4. If you enter “Y” for repost then the process will ignore any prior posting of data for the date range you’ve entered. Entering “N” will cause this process to skip sales records that were posted previously.
    5. Run the procedure.

**_If this process encounters any errors they will be displayed on the screen. You will need to correct the cause of the error before an accurate Journal Entry can be created._**

Notes: ---------------------------------------------------------------------------------------------------------------------

1. All G/L codes should have been set up during and after initial training.
2. Register Reconciliation is done at menu path POS-23-02 (POS, End of Day Functions, Register reconciliations.)

### Print G/L Distribution

This report uses the data created by step 1, above.

- 1. Enter a store number. If you only have one store then leave this field blank.
    2. Enter a register number. This field is almost always left blank.
    3. Enter a beginning date for the report. This date will appear on the report header. It should also fall within the range of the dates that you entered in step 1, above.
    4. Enter an ending date for the report. This date will also appear on the report header and should also be within the range of dates that you entered in step 1, above.
    5. Summary, Detail, or Errors.
        1. Enter “S” to get a summary report. This will show one line for each G/L account. Any errors are easy to find because there will not be G/L account description.
        2. If you enter “E” for errors then the 1st 10 errors will be on the screen. Fix those then run the report with the “E” option again until there are no errors.
        3. If you enter “D” for report details you get a report that is hard to read unless you are familiar with the data. Usually this is run by TCS personnel for advanced trouble shooting.
    6. Enter a G/L account number to limit the output for specific accounts. This only works in the “D” mode.
    7. Run the procedure. Select your printing or email destination.

### Create G/L Journal Entry

This process will use the data created in step 1, above.

1. Enter a store number. If you only have one store then leave this field blank.
2. Enter a register number. This field is almost always left blank.
3. Enter a beginning date for the report. This date will appear in the Journal Entry Comments field. It should also fall within the range of the dates that you entered in step 1, above.
4. Enter an ending date for the report. This date will also appear in the Journal Entry Comments field and should also be within the range of dates that you entered in step 1, above.
5. Enter the Accounting Period that this Journal Entry will apply to.
6. Run the procedure.

This will create a Journal Entry in the format of POS\*nnnn, where nnnn is a unique sequential number. This will need to be posted in the G/L module. (GL-01-01)

## Accounts Payable

The first step is to find any transactions that were posted to A/P from receiving and returns (in Text, Trade, and GM) that are missing valid A/P vendor numbers.

This is done by running report AP-RP-02-01 (Unpaid Transactions by Vendor). Leave all fields empty except for Vendor Number. Use Vendor Number 99999, this is the “suspense” vendor. If the report has any lines on it then you will see in the last column which inventory vendor needs to have an A/P vendor assigned to it. You can also see this and more detail if you look up the transaction (AP-01). If there are any corrections to be made then:

1. Assign them the correct A/P vendor code. (AP-04, Change Vendor or Invoice). (a)
2. Correct the Inventory vendor record. (VM in Text, Trade, or GM.) (a)

Use menu path AP-03. (A/P, End of Month)

### Pre-posting Report

Use this report to review if G/L account numbers, amounts, and vendors appear to be correct. (Ex. You probably do not want the G/L account number for cost of goods sold being assigned to a vendor that only sells you cleaning supplies.) Invoices with a status of “U” (unreconciled) will not appear on this report. Only the status codes of “O” (open for payment) and “H” (hold for payment) will be included. See note (a).

1. Enter an invoice cutoff date. All transactions older than, and including, this date that have not been journalized will be on the report.
2. Select a report type. This report has three format options depending on your level of need.
3. S = Summary. This will create a report that summarizes all of the amounts for each G/L number into one amount. This creates a shorter concise report.
4. D = Detail. This will create a report that has the G/L account number for each transaction. This report is very long but does show all of the account detail.
5. E = Errors. This will create a report of transactions that have invalidG/L account numbers on them.
6. Run the procedure. Select your printing or email destination.
7. Make any invoice corrections if necessary.

### Post Transactions

Invoices with a status of “U” (unreconciled) will not be journalized. Only the status codes of “O” (open for payment) and “H” (hold for payment) can be journalized.

1. Enter an Invoice cutoff date. You should use the same date you used in the Pre-posting Report.
2. Enter the accounting period that the transactions will be posted to.
3. Run the procedure.

This will create a Journal Entry in the format of AP\*nnnn, where nnnn is a unique sequential number. This will need to be posted in the G/L module. (GL-01-01)

Once a transaction has been journalized you cannot change the G/L distribution on the transaction and you cannot change the transaction amount.

If you completely mess up you can choose number 6 to remove the posting flag from all transactions for a specific Journal Entry number. Be sure to delete or void the original Journal Entry so you don’t have a double posting. This is done in GL-01-01 using a Journal Type of “V”.

Notes: ---------------------------------------------------------------------------------------------------------------------

1. In order for you to stay on top of your adjustments you can run these reports daily if desired. To see your “U”nreconciled and “H”old invoices run report AP-RP-02-01; it is sorted by status so that each status code is grouped together.

## Accounts Receivable

This process copies miscellaneous cash receipts from the A/R module to the G/L module. They are then posted in the G/L module. Generally, most users enter their cash receipts at the cash register and this step is not necessary.

Use menu path AR-03-24 (A/R, Invoices & Payments, Post Payments to G/L).

1. Enter a valid store number.
2. Enter a cutoff date. All miscellaneous payments that have not been copied to the G/L cash receipts file that are older than or equal to this date will be copied.
3. Enter a valid bank code. If you have multiple bank codes then run this process once for each bank code.

## General Ledger

This module is the last one to process and is only done after completing all of the above steps. If your system is not configured for a specific module you can skip that section.

Use menu path GL-22 (General Ledger, End of Period) for steps 1-4.

### Post Cash Disbursements (checks)

1. Run this process for all of your Bank Types.
2. Enter a check date to start with.
3. Enter a check date to end with.
4. Enter the accounting period that pertains to the date range in b and c.
5. Select Summary
6. Run the process.

### Post Miscellaneous Receipts

- 1. Run this process for all of your Bank Types.
    2. Enter a beginning receipt date.
    3. Enter an ending receipt date.
    4. Enter the accounting period that pertains to the date range in b and c.
    5. Select Summary
    6. Run the process

### Bank Reconciliation

If you are using the bank reconciliation option then complete this task and then post the journal entry that you create.

### 21\. Close a Month (1-11)

Select this option now to close any or all prior months to bring their YTD, QTD account balances forward into the current month. (This could have been the 1st step in G/L. It is not critical when you run this as long as it is before you begin running reports or doing AI (account inquiry).) Many users do this step multiple times - beginning of the period, end of the period.

- 1. In the Month to Close field you can enter either a specific month to close or for ease of use enter an “\*” to close all months. The “\*” option is preferred in case you have posted any entries to a prior period/month.
    2. Enter the 4-digit year that you are working with.
    3. Run the process.

### Journal Entry Creation, Correction, and Posting.

After you have created journal entry records with several of the above process it is now time to review them for reasonableness, make any necessary corrections, and then post the entry.

Posting the entries updates the YTD, QTD, and MTD account balances.

Use menu option GL-01.

### 21\. List Unposted JEs

This will give you a complete list of journals that have not been posted.

### Journal Entries

- 1. Review each entry, make any necessary corrections, enter “P” to post.

### Batch Post Open Journals

- 1. This allows you to skip the tedium of processing #1 multiple times and posting all open journals at once.

# Year-End Closing

Prior to closing the year you will need to close your last month – month 11 following the Month-End Closing guide.

G/L Account Numbers are broken into two general categories – real and nominal. Real accounts are assets, liabilities, and equity. Nominal accounts are income and expenses.

When the year is closed the ending balance of real accounts are closed to their each real account, i.e. cash closes to cash, payables close to payables, etc. Nominal accounts close to a single common equity account, something like retained earnings (equity).

The Year-End Closing is very simple but it is important to first ensure that all of your income and expense G/L Account Numbers are set to close to the correct equity account number. This is done by running the Account Master report with all columns (GL-RP-01). Print this report if possible and go down account by account and very that the Closing Account is correct. If you need to make any adjustments do this in Account Master (GL-02).

Make certain that any Journal Entries for your 12th month are posted. (GL-01-21).

Print your Income statement and Balance sheet to make sure that they are correct. Make any necessary corrections with Journal Entries (GL-01-01), be sure to post them.

When you are satisfied that the year is ready to close then select menu option GL-22-22. Use month 12.

Do Account Inquiry (AI) and have a look at your closing account for the new year, period 1 and make sure that it looks correct.

<PageFooter />
