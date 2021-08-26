# Redshelf User Guide

<PageHeader />

This guide provides instructions to implement RedShelf with the Total Computing Solutions (TCS) point of sale and web store systems. RedShelf is an online only E-book access provider. Before using this guide, assure that all RedShelf files and programs are in place by following and completing the [RedShelf Setup Manual](../redshelf-setup/README.md). The three RedShelf access points that will be covered in this guide are host registers, Smart Lane registers and web transactions.

**Labels**

RedShelf will provide tags to place on or by your textbook shelves. The RedShelf Setup Manual describes how to print RedShelf barcode labels to stick onto the RedShelf tags. These labels will typically print a 13-digit number that begins with 278, the associated bar code, available usage periods and prices as well as the title, author and course information. Since different types of printers and label size may limit some information, your labels may differ slightly from the above description. The system is intended for the student to bring a label with them to the register to be scanned or manually entered.

**Host Registers**

If your operation includes host registers, access your POS cash register screen and enter SA for sale. When prompted for an ISBN, enter or scan the 13-digit number on the label. If there are multiple usage periods for that E-book title, these will be displayed on the screen along with a price for each usage period. Select the desired usage period, and continue the transaction as usual. If multiple accesses to the same title are required, they must be entered on separate lines since quantity will always be 1 for each RedShelf item. After the transaction has been tendered, a unique RedShelf access code will print on the receipt along with instructions on how to redeem the code. This access code and instructions will also be available if the receipt needs to be reprinted. If multiple RedShelf E-books are requested, multiple access codes will print on the receipt.

**Smart Lane Registers**

If your operation includes Smart Lane Registers, follow the same procedures outlined in the Host Registers section. Your Smart Lane register will automatically communicate with RedShelf to receive the appropriate access codes and with the host machine to permanently store transaction information.

**Web Store Transactions**

When RedShelf is properly setup and activated on a system, an “E-Book” button will automatically show up when a textbook title with that option is accessed.

Version 2.x

In version 2.x of the online web store application, only one RedShelf option will be available. That option will be the longest usage period that is not a Purchase. A Purchase option will only show up if there are no other usage periods for that textbook.

Version 3.x

The new version 3.x of the online web store application is in Beta testing and is not available for general release at this writing. It will create a drop-down menu with all available usage period options and prices when the E-Book button is activated. At that point the user may select their desired usage period.

Completing the transaction

When the transaction is completed at a register and the payment is processed, an email will automatically be sent with the access code(s) and redemption instructions to the person who ordered the E-Book. It is advisable that a copy of the email be sent to an accessible in-house email address in case a review or resend is necessary.

**Refunds**

The receipts and emails containing access codes also contain a message explicitly explaining that once the access code is used there are no refunds for that product. If an access code has not been used, process refunds just as if a textbook were being returned for a refund. RedShelf is excellent to work with in case of exceptional circumstances where a student may request a refund after accessing their E-Book, and they will consider each case individually.

**Testing**

Before allowing students to order textbooks via RedShelf, we highly recommend that the POS E-Book process be tested on all host registers, Smart Lane registers and the web store. Process a transaction to purchase a RedShelf item. If the purchase is successful and has printed an activation code and redemption instructions on a receipt or email, post void that transaction and continue to the next register until all registers and the web store have successfully processed a RedShelf E-Book. If any of these point of sale, receipt printing or email processes is unsuccessful, contact the Total Computing Customer Support Team for assistance.

<PageFooter />
