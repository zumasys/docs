# Running Reports Best Practices and Procedures

<PageHeader />

Below is a list of the most common report fields and what they do. The purpose of this article is to avoid having to specify "the Store field restricts the report to the specified store" on every single report article.

There is also a best practices on the more optimal ways of running reports. This includes how to report on multiple class or department codes, what to do when you get a "0 records listed" response as well as other things.

## Common Practices

- Populate as few fields as possible to get the information you need.
    - Data presented in a report is information that meets **_every single_** field criteria.
    - If you get a response of "0 records to display" then consider widening your parameters. Filling out every single field will rarely work.
    - e.g. If you specify: "Store 1, Register 101, Beginning Date 8/1/18, Ending Date 8/1/18, Department 90, Class 101, SKU 9781234567890, Tran Type RT, WEB Transactions N, History file N" you probably won't get anything.
        - If you remove the tran type criteria, or the department and class fields (you're specifying the item anyways) then you may get some results.
- Multiple criteria can be entered into most fields by separating them with a comma.
    - e.g. If you want to report on class numbers 101,102 and 103 you will enter them as 101,102,103
- There is currently no way to report on "everything except" unless you enter every valid option.
    - e.g. If you want to report on every class _other than_ 101 you would have to enter every class code except 101, into the Class field.

## Common Fields

- Store: Entering a value for Store restricts the report to only display results for the specified store.
    - Note that some items are not store specific, e.g. Class codes or fee codes are store agnostic.
- Register: Entering a value for Register restricts the report to only display data on the specified register.
    - Multiple registers can be entered by separating them with a comma. e.g. 101,102,103 will report on all three registers.
- Beginning Date: A "start date" that limits the data to not include information before this date.
    - e.g. A transaction search with a start date of 7/1/18 will not include any transactions prior to July 1st, 2018.
- Ending Date: Specifies the "stop date" in the data, nothing after this date will be displayed.
    - e.g.A transaction search with a stop date of 7/1/18 will not include any transactions done on 7/2/18 or after.
    - To report on a single day make the beginning and ending date the same.
- Department: Restricts the report to include data that falls under the specified department
- Class: Restricts the report to data that includes items that fall under that class
- SKU: Enter a SKU, ISBN, Fee Code, etc. to only report on data that includes this item
- Detail: Is used to display as much information as possible for that data being reported on.
    -  For example, a report against transaction data with Detail flagged will display every line item in the transaction, the cost, quantity and total for every transaction for the date range specified.
    - The majority of reports are either Detail or Summary, but there are a few exceptions that will report the detailed information and include a separate summary section at the bottom. One example would be inventory valuation reports that will list all of the inventory items and then include summary totals for each inventory class.
- Summary: The summary flag will combine and summarize the data reported on various break points.
    - For example, a transaction report with Summary flagged will simply report the transaction total instead of every single line item, their cost, and the total for the date range specified.
- History: Almost always a N.
    - This is not a "include History as well" flag.This is a hard switch, meaning it reads from the History ONLY and will not report on current data.
    - Data can be moved to history to separate it from current data without throwing it away.
    - Once it has been moved to history then the History field would have to be a Y to read it from the History file.
- Web: Almost always an N or empty. Entering a Y will restrict the report to ONLY web transactions similar to the History field only reporting on the History file.

<PageFooter />
