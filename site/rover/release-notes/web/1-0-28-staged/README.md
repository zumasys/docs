# Rover Web v1.0.28 Release Notes

<badge text= "Version 1.0.28" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.28 (12/11/2023) of the Rover Web application.

## New Features

-  **Rover Portal**

	-  **Invoices** `AR.CONTROL` can be used to limit the Accounts Receivable record types displayed in the portal.
	-  **Invoices** Convenience Fees can now be added to credit card and ACH payments by setting a convenience fee percentage in `AR.CONTROL`.
![Register Actions](/assets/img/screenshots/20231212/RoverPortal_CFee.png)
-  **Rover Web**

	- **Point of Sale** Now supports running in user mode or register mode. When in register mode, additional information is maintained about the register's transactions and current balance within the ERP. Note: only supported by select ERPs/versions.
  	- **Point of Sale** Register Actions are now available.  This provides the ability to add/remove cash from register drawers backed with transactions.
![Register Actions](/assets/img/screenshots/20231212/POS_RegisterActions.png)
	- **Point of Sale** Now supports maintaining multiple transaction types while navigating through POS. Tabs are provided to support new order origination, order finalization, and invoice payment.    
![Multple Trans](/assets/img/screenshots/20231212/POS_SalesActions.png)
	- **Field Services** Administrator options were added to limit operation changes and require a signature.

## Updates

-  **Rover Portal**

	- UI/UX redesign
		- KPI Cards now provide a quick visual of key details of Invoices, Tickets, and Orders.  KPI cards also allow for quick navigation through sections.
		![Register Actions](/assets/img/screenshots/20231212/portal_KPI_1.png)
		- Consistent table display for invoices, orders, and tickets.
		- Administrator options for selective display of invoices, orders, and tickets sections.
	
-  **Rover Web**
	- **UI/UX enhancements** including continued adjustments for better mobile responsive display.
	- **Point of Sale** Updated aging summary display. 
![Register Actions](/assets/img/screenshots/20231212/POS_Aging.png)
    - Dynamic element display based on configuration flags.
	- **Field Services** General and Operations sections have been combined to simplify user experience.
![Register Actions](/assets/img/screenshots/20231212/fieldservices-demo.gif)

<PageFooter />