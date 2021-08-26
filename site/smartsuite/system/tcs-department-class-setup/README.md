# TCS Department/Class Setup

<PageHeader />

Before you can add any inventory items for Fee codes you must have the Department and Classed setup that the items will be a part of. Depending on the module that you are in navigate to the appropriate place to create the department or class code; GM – GM.SU.1.4 and 2, TX-TX.SU.4.6.21 and 22, POS-POS.22.3.1 and 2, AR-AR.SU.5

It does not matter which module you use to create the department or class code since they are universal and available in all modules once they have been created.

#@ Department Setup

The department needs to be setup first, in GM go to SU.1.4. Some examples of Departments would be Textbooks, Clothing, Food.

- Enter a ‘.’ to create the next sequential number or enter the number that you want to use. If you create a new department you will be prompted to Add/Copy/Cancel, select Add to create from scratch or select Copy to copy a from an existing department.
- Enter the description as you would like it to display on reports
- Non-Merchandise – Enter ‘N’ if this is a normal ‘inventoried’ department or ‘Y’ if this department is for NON merchandise classes, such as fee codes.
- Enter ‘Y’ to exclude this department’s sales for the flash report which is a special sales report that does daily/weekly/monthly/yearly sales comparison to same time for previous year.
- Enter any additional descriptions that you would like to use to help explain this department.
- GL & DSR Dist Code: - If you have created some General Ledger distribution codes then you can select them here. These are used in the reporting for general ledger.
- Transfer Out Disc %: - This is the discount that will be used when transferring inventory from one store to another, the items in this department at cost \* (1-discount). Leave the field blank for no discount.

## Class Setup

Once the department has been created, you can now create the classes that are part of that department, some examples would be (Textbooks – New Books, Used Books, E-books, Rentals: Clothing – Men’s Shirts, Women’s Shirts, Children’s shirts or just Shirts, Pants, Shorts: Food – Packaged food, Prepared Food, Snacks, Sodas, Candy Bars, Chips)

- Enter a ‘.’ to create the next sequential number or enter the number that you want to use. If you create a new class you will be prompted to Add/Copy/Cancel, select Add to create from scratch or select Copy to copy a from an existing class.
- Enter the description as you would like it to display on reports.
- Enter the Module that the class is part of (POS, GM, TX).
- Enter the Department that the Class is part of.
- ERP Method is a custom field for Datatel – call TCS if you need this.
- Category Description – this is the Class Category fields that are maintained in GM.SU.1.1, these are used with the financial aid module to group classes together for the purpose of adding them to the financial aid customer type setup.
- Status – ‘A’ is the normal status, you can also set the department to ‘I’ for Inactive.
- Taxable – Blank and ‘Y’ have the same meaning, if a department is NOT taxable then enter a ‘N’.
- Tax Table – You can enter a tax table that is different than what would be considered the Normal tax table used for the store. If a tax table is entered here it will be used for this item regardless of what is entered at the store or register level.
- Allow Discounts – Blank and ‘Y’ have the same meaning. Enter a ‘N’ if items assigned to this department should not be allowed to be discounted at the register.
- Maximum and Minimum Price- You can enter a Max and Min price to these fields, this will prevent you from entering a price that is too high or too low and prevent you from doing a price override at the cash register that is outside of the range set here.
- Target Margin - Enter what you would like your margin to be for this class of item, if an item is sold without a cost associated then the system will use the margin set here to calculate the cost for reporting.
- Default Tag type – Enter in the tag type that you would like all items in this class to use as a default, you can change this for any individual item.
- Distribution Code – Enter a 'N' here if you have a preferred customer system but you do not allow rebates for purchases of items in this class. If this field is left blank, then rebates will be allowed for purchases in the class.
- Report Group – You can enter grouping numbers here so that certain classes will report together.
- Sub-Class is setup to be used with the NACS Universal Hierarchy for reporting to NACS.
- Sub-Category is setup to be used with the NACS Universal Hierarchy for reporting to NACS.
- Sub-Other is setup to be used with the NACS Universal Hierarchy for reporting to NACS.
- NACS-Survey is setup to be used with the NACS Universal Hierarchy for reporting to NACS.
- Modifier – You can enter any modifier that has been setup in POS2.2, this modifier will automatically get used on all transactions that sell an item in this class.

<PageFooter />
