# Rover Web v1.0.28 Release Notes

<badge text= "Version 1.0.28" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.28 (12/11/2023) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.28) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.28) today!

## New Features

-  **Rover Portal**
	- **Invoices** `AR.CONTROL` can be used to limit the Accounts Receivable record types displayed in the portal.
	- **Invoices** Convenience Fees can now be added to credit card and ACH payments by setting a convenience fee percentage in `AR.CONTROL`.
	![Register Actions](/assets/img/screenshots/20231212/RoverPortal_CFee.png)
	- **Orders** Customers can now be allowed to place orders through the portal.
   	  > Note: Currently limited to order origination and only supported by select ERPs.
   	- **Quotes** Customers can now be allowed to request quotes through the portal.
   	  > Note: Currently geared towards resellers rather than end-user customers and only supported by select ERPs. 

-  **Rover Web**
	- **Point of Sale** Now supports running in _user mode_ or _register mode_. When in _register mode_, additional information is maintained about the register's transactions and current balance within the ERP.
 	  > Note: Currently only supported by select ERPs.
  	- **Point of Sale** Register Actions are now available in _register mode_. This provides the ability to add/remove cash from register drawers backed with transactions.
	![Register Actions](/assets/img/screenshots/20231212/POS_RegisterActions.png)
	- **Point of Sale** Now supports maintaining multiple transaction types while navigating through POS. Tabs are provided to support new order origination, order finalization, and invoice payment.    
	![Multple Trans](/assets/img/screenshots/20231212/POS_SalesActions.png)
	- **Field Services** Administrator options were added to limit operation changes and require a signature.

## Updates

-  **Rover Portal**
	- **UI/UX**
 		- Rover Portal has a brand new look and feel!
		![Register Actions](/assets/img/screenshots/20231212/portal_KPI_1.png)
		- KPI Cards now provide a quick visual of key details of Invoices, Tickets, and Orders. KPI cards also allow for quick navigation through sections.
		- Updated the data table displays for invoices, orders, and tickets to improve their consistency.
		- Added administrator options for selective display of invoices, orders, and tickets sections.
	
-  **Rover Web**
	- **UI/UX** We have continued to improve the UI for better mobile display.
	- **Point of Sale** The _Aging Summary_ table has a fresh new look. 
	![Register Actions](/assets/img/screenshots/20231212/POS_Aging.png)
	- **Field Services** _General_ and _Operations_ sections have been combined to simplify user experience.
	![Register Actions](/assets/img/screenshots/20231212/fieldservices-demo.gif)

<PageFooter />
