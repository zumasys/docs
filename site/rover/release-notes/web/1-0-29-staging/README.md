# Rover Web v1.0.29 Release Notes

<badge text= "Version 1.0.29" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.29 (1/3/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.28) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.28) today!

## New Features

-  **Rover Web**
	- **Point of Sale** 
		- New flags have been added to `MRK.CONTROL` in the 'POS' tab.
			- Disable editing of part description
			- Add a prompt to appear when changing the price of a part.
			![POS Price change prompt](/assets/img/screenshots/release-notes/rover-web-1.0.29/pos-show-change-price.gif)
			- Change the order of page to allow entering order information before selecting parts.
			![POS order information before parts](/assets/img/screenshots/release-notes/rover-web-1.0.29/pos-order-info-before-parts.gif)
			- A Quick Scan option has been added to support dedicated scanner support and better compatibility for keyboard-shim type scanners
			![POS order information before parts](/assets/img/screenshots/release-notes/rover-web-1.0.29/pos-quick-scan.gif)
			- Hide _New Address_ button that appears in Order Information tab.

	- **Field Services** 
		- New flags have been added to `FS.CONTROL` in the 'Report Types' tab.
			- Hide the `REP` table.
			- Hide the date info section. 

## Updates
	
-  **Rover Web**
	- **Point of Sale** 
		- Default `Ship Date` to next day.
		- The prompt to restart order has been fixed when navigating between the order creation sections.
		- Navigation header text has been updated to show 'Review Order' when there are items currently in the cart.
		![Field Service Save Order](/assets/img/screenshots/release-notes/rover-web-1.0.29/pos-review-order.png)
		- Invoice and Order table text has been improved when no information has been loaded.
	- **Field Services** 
		- Saving a field service now shows a screen to either email or download the order as a PDF or continue back to the home screen for `Field Services`
		![Field Service Save Order](/assets/img/screenshots/release-notes/rover-web-1.0.29/fieldservice-save-order.png)
		- Added to ability to manually enter `SERIAL` numbers
		- Updated operations to allow for decimal when using the number format defined in `FS.CONTROL`.
		- Updating the status of an order in the Kanban board has been fixed.

	- **Sales Orders** 
		- Order table can now show `SERVICE.REP` instead of `REP` when available.

	- **General**
		- The HTML and Secure checkboxes have been removed from the Email modal.

<PageFooter />
