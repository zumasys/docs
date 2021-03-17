# End of Day Procedures

<PageHeader />

These are procedures that need to be performed at each register.

1. As you complete the transactions needed at any one of the registers and are ready to close the register, press the **X-REPORT** key. The **X-REPORT** will give you all the same information as the **Z** report, only it will not zero out any totals.
2. If you are satisfied with the result of the X-report, or are ready to close the register, press the **CLOSE** key. The _CLOSE_ is the **Z-report** and will zero out all the totals for that individual register.
3. Collect all the cash, coin, credit card, checks, and any other form of tender that was taken on that register.

These are procedures to be completed after all registers have been _CLOSED_. (This can be performed at the computer that you normally do your Back Office work at.)

1. Close-out your credit cards. (Self hosted customers only)
    1. From the POS Master Menu, choose option **5** for _Credit Cards & Communications_.
    2. Choose option **2** for _Close Batch / Data Capture / Post Auth_
    3. Type in the protocol that you use to process credit cards in the **Communications Link ID** field.
        1. This field may already default to the protocol that you already use. If it does, just press _Enter_.
    4. Click **Continue** as the box that contains the process warning is displayed.
    5. Click on option **1** to _Capture all open batches for all merchant Ids_.
    6. Click on **Yes** to continue.
    7. The batch will be processed and closed, and you should see a **GB** (Good Batch) or **Accepted**, or something similar to let you know that the batch has been closed. If you receive a different message, try steps _a-f_ again to see if the batch will close. If the batch still does not close, call the credit card company (call the number that you would use for voice authorizations).
2. Print a _Tender Summary_ report to reconcile your registers.
    1. From the POS Master Menu, choose the **RP** option for the _Report Menu_.
    2. Choose option **2** for _Tender Reports_.
    3. Choose option **21** for _Tender / Register Summary_.
    4. Enter your store number (**1**) unless it has already defaulted to your store number.
    5. Enter the **Beginning Date** of the date you want to report on.
        1. Normally, this date would be the current date, or the date that you are closing for.
        2. If you wanted to report on any previous date, or a date range, enter the beginning date that you want to report on.
    6. Enter the **Ending Date** of the date you want to report on.
        1. Normally, this date would be the current date, or the date that you are closing for.
        2. If you wanted to report on any previous date, or a date range, enter the ending date that you want to report on.
    7. Unless you want to report on a _specific register_, leave the **Register** field blank.
        1. By leaving the field blank, **all** registers will be reported on, and separate reports will be printed for each register.
        2. If you wanted to report on a specific register, enter the **three digit** register number.
    8. Enter _N_ for the **Summarize Registers** field.
        1. Entering a _Y_ will combine all the registers together into a single report and will not produce separate reports for each of the individual registers.
    9. Choose the **Y** option to _Run the Procedure_.
    10. Make sure you choose the **printer** option to print the report to the printer.
    11. Choose the appropriate printer to print to.
        1. This will normally be your main system printer. If you use another printer, choose that printer.
    12. Reconcile your registers.
3. Perform the nightly **Backup**.
    1. From the POS Master Menu, choose option **23** for _End of Day Functions_.
    2. Next choose option **28** for _Nightly Resize & Backup_.
    3. The **Tape Device #** should be **3**.
    4. The **Start Time** should be blank.
    5. The **Run in Background, Resize Files,** and **Process History** fields should all be **N** unless otherwise instructed.
    6. Choose the **S** option to **Start**.
    7. At the prompt “_Is the correct tape in the tape drive_”, choose **Yes**.
    8. When the backup is completed, the screen will return to asking for your **User Code** and **Password**.

<PageFooter />
