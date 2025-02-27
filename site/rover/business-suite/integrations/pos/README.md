# Rover POS

<PageHeader />

## Validation Codes

These validation codes are used to determine which section of POS triggered an API call to validate the current sales order.

| Code                | Description                                 |
| ------------------- | ------------------------------------------- |
| CUSTOMER_SELECTED   | Selecting a customer to create a new order. |
| ORDER_INFO_SELECTED | Navigating to the order information section |
| EDIT_ORDER          | Selecting an order to edit.                 |
| PARTS_SELECTED      | Navigating to the parts sections.           |
| DRAFT_ORDER         | Selecting a draft order to edit.            |
| LIS_ITEM            | Add/Edit/Remove a part from the cart.       |
| SHIP_SEQ            | Selecting a new shipping address            |

Additionally, support for specific fields in the Order Information section can trigger a validation if the field has a defined FDICT and has `web_validate` flag enabled.

## POS Partial Ship Fields

MRK.CONTROL response JSON format to show additional fields in the POS Partial Ship section.

```json
{
    "pos_partial_ship_field_items": [
        {
            "pos_partial_ship_field": "46" // Ship Quantity
        },
        {
            "pos_partial_ship_field": "101" // Vendor
        },
                {
            "pos_partial_ship_field": "103" // PO Number
        },
        {
            "pos_partial_ship_field": "80" // Custom field 1
        }
    ]
}
```

## POS Lookups

### Customer Lookup

MRK.CONTROL response JSON format to show additional fields in the POS Customer lookup. Omit or set as empty string to keep the original customer lookup table.

```json
{
    "pos_customer_lookup": "CUST*POS.LOOKUP"
}
```


<PageFooter />
