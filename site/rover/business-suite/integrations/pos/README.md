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

## POS Calc Price

`calc_price` is a field that replaces the POS price calculation based on `std_price_items` and `code_items`. This allows the host to calculate the price and skip any price calculation on the client side.

The PRICE FDICT should include the correlative `CALC` with the following format:

```json
{
 "fdict_items": [
  {
   "file_name": "PRICE",
   "correl_field_no_items": [
    {
     "correl_field_no": "0",
     "correl_desc": "Calc.Price",
     "correl_conv": "MD4",
     "correl_dict_id": "CALC.PRICE",
    }
   ]
  }
 ]
}
```

The PRICE API response will allow need to include `calc_price` with parts returned.

```json
{
    "price_items": [
        {
            "part_number": "93",
            "calc_price": "6.0000"
        },
        {
            "part_number": "94",
            "calc_price": "7.0000"
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
