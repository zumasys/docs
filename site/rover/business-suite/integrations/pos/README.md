# Rover POS

<PageHeader />

This article describes how to integrate your back end to various Rover POS features.

## Table of Contents <!-- omit from toc -->

- [Rover POS](#rover-pos)
  - [Validation Codes](#validation-codes)
  - [Validation Prompts](#validation-prompts)
  - [Partial Ship Fields](#partial-ship-fields)
  - [Show Orders Tab](#show-orders-tab)
  - [Show Quotes Tab](#show-quotes-tab)
  - [Show Opportunities Tab](#show-opportunities-tab)
  - [Calc Price](#calc-price)
  - [Lookups](#lookups)
    - [Customer Lookup](#customer-lookup)
    - [Inventory Lookup](#inventory-lookup)
    - [Order Lookup](#order-lookup)
    - [Quote Lookup](#quote-lookup)
  - [Categories and Filters](#categories-and-filters)
  - [Coupons](#coupons)
  - [Sales Order Cash Deposit](#sales-order-cash-deposit)
    - [Sales Order](#sales-order)
    - [Payment metadata](#payment-metadata)
    - [Post Payment](#post-payment)
  
## Validation Codes

These validation codes are used to determine which section of POS triggered an API call to validate the current sales order.

| Code                | Description                                  |
| ------------------- | -------------------------------------------- |
| CUSTOMER_SELECTED   | Selecting a customer to create a new order.  |
| ORDER_INFO_SELECTED | Navigating to the order information section  |
| EDIT_ORDER          | Selecting an order to edit.                  |
| PARTS_SELECTED      | Navigating to the parts sections.            |
| DRAFT_ORDER         | Selecting a draft order to edit.             |
| LIS_ITEM            | Add/Edit/Remove a part from the cart.        |
| SHIP_SEQ            | Selecting a new shipping address             |
| COUPON_ID           | Add/Edit/Remove a coupon from a sales order. |

Additionally, support for specific fields in the Order Information section can trigger a validation if the field has a defined FDICT and has `web_validate` flag enabled.

## Validation Prompts

To enable a prompt to display after an error or confirmation. Add this information to the response from the validation API. A modal will appear and once a selection is made a subsequent validation API call will be made with the selection chosen.

Sample of the validation response

```json
{
    "errorDisplay": {
        "cancelButtonLabel": "Cancel Custom",
        "confirmButtonLabel": "Confirm Custom",
        "confirmValidate": true,
        "dialog": false,
        "errors": [
            "Item xxx can only be sold in qty of yyy, do you wish to override?"
        ],
        "warning": false
    },
    "record": { /* record information goes here */},
    "recordId": "",
    "status": "error"
}
```

Sample of the validation request override confirmation/dismiss

```json
{
    "metaData": {
        "validate_override": "Y" // or "N" on Cancel
    }
}
```

## Partial Ship Fields

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

## Show Orders Tab

MRK.CONTROL response JSON format to show the orders tab in the customers selection within POS.

```json
{
    "pos_show_orders_tab": "Y"
}
```
> Requires `SO.E` or `PSO.E`to be defined in the user commands. If [command rights](../security/README.md#command-rights) are enabled, `view` must be set to `true`.

## Show Quotes Tab

MRK.CONTROL response JSON format to enable the quotes tab in both the main tab as well as the customers selection within POS.

```json
{
    "show_soquote_tab": "Y"
}
```

> Requires `SOQUOTE.E` to be defined in the user commands. If [command rights](../security/README.md#command-rights) are enabled, `view` must be set to `true`.

## Show Opportunities Tab

MRK.CONTROL response JSON format to show the opportunities tab in the customers selection within POS.

> Requires `SALEOPP.E` to be defined in the user commands.

 ```json
{
    "pos_show_opp_tab": "Y"
}
```

## Calc Price

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

## Lookups

POS supports the use of database lookups to drive searches and tabular data in various sections. Generally speaking, the value expected for these lookup properties follows the format of _FILE*LOOKUP.NAME_ i.e. "INV*LASTPRICE".

Those values are used in conjunction with API calls to the _doLookup_ endpoint which is used to dynamically interact with the back end to process lookups. An example request is shown below:

``` json
{
    "lookupName": "LASTPRICE",
    "id": "10",
    "file": "INV",
    "parameters": {
        "coCode": "1",
        "custId": "71",
        "parts": "10"
    },
    "filters": {},
    "fullRecords": false
}
```

Your response should include an array called `data` to contain the data and an array called `fDicts` to contained the data schema. An example response is shown below:

``` json
{
    "data": [
        {
            "date": "03/30/22",
            "invoice": "4966869",
            "qtysold": "1",
            "price": "113.090",
            "branch": "1 Rochester",
            "writer": "Tester",
            "shiptoname": "Zumasys",
            "customer": "123"
        }
    ],
    "fDicts": [
        { 
            "conv": "D",
            "dict_name": "date"
        },
        { 
            "conv": "",
            "dict_name": "invoice"
        },
        { 
            "conv": "",
            "dict_name": "qtysold"
        },
        { 
            "conv": "MR3",
            "dict_name": "price"
        },
        { 
            "conv": "",
            "dict_name": "branch"
        },
        { 
            "conv": "",
            "dict_name": "writer"
        },
        { 
            "conv": "",
            "dict_name": "shiptoname"
        },
        { 
            "conv": "",
            "dict_name": "customer"
        },
    ]
}
```

### Customer Lookup

To add an alternative Customer Lookup, your `MRK.CONTROL` response needs to include a property called `pos_customer_lookup`. Omit or set as empty string to keep the original customer lookup table.

``` json
{
    "pos_customer_lookup": "CUST*POS.LOOKUP"
}
```

### Inventory Lookup

To enable Inventory Lookups, your `MRK.CONTROL` response needs to include an array called `pos_inv_lookups_items`. This array is optional and you are free to omit if you do not want to add inventory lookups. As this section allows for an array of lookups, the `inv_lookup_desc` property is used to present a user friendly description to select from for display purposes.

``` json
{
    "pos_inv_lookups_items": [
        {
            "pos_inv_lookups": "INV*LASTPRICE", "inv_lookup_desc": "Last Price Paid",
            "pos_inv_lookups": "INV*ALLOCATION", "inv_lookup_desc": "Order Allocation"
        }
    ]
}
```

### Order Lookup

To add an alternative Order Lookup, your `MRK.CONTROL` response needs to include a property called `pos_search_orders_lookup` for the search and `pos_customer_orders_lookup` for the customer tab. Omit or set as empty string to keep the original order lookup table.

``` json
{
    "pos_search_orders_lookup": "SO*POS.LOOKUP",
    "pos_customer_orders_lookup": "SO*POS.CUST.LOOKUP"
}
```

### Quote Lookup

The lookup for quotes is required to be set in the `MRK.CONTROL` response. Add `pos_soquote_lookup` and `pos_cust_soquote_lookup` to your response to view in POS for both the main and customer tabs.

``` json
{
    "pos_soquote_lookup": "SOQUOTE*POS.LOOKUP",
    "pos_cust_soquote_lookup": "SOQUOTE*POS.CUST.LOOKUP"
}
```

## Categories and Filters

You can provide custom categories to your users to select from with the `CAT.CONTROL` API. Each `category` object within can contain an array called `subcategories` containing more categories allowing you to create as many levels of depth as your system requires. An example JSON response is shown below:

``` json
[
    {
        "control_id": "CAT",
        "category_items": [
            {
                "category": "plumbing",
                "description": "Plumbing",
                "subcategories": [
                    {
                        "category": "plumbing-plumbing-specialties",
                        "description": "Plumbing Specialties",
                        "subcategories": [
                            {
                                "category": "plumbing-plumbing-specialties-vacuum-breakers",
                                "description": "Vacuum Breakers"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```

Filters present an additional level of power as they allow you to display different dropdown filters at the header of the parts table and those filters can be made dynamic based on the search results you are returning with your _prices_ endpoint response. To do this, make sure your prices response includes a `control_items` array, top level next to your current `price_items` array. An example is shown below:

``` json
"control_items": [
        {
            "control_id": "WEB",
            "web_category_items": [
                {
                    "web_category": "Brand",
                    "web_category_title": "Brand",
                    "web_category_description": "Brand"
                },
                {
                    "web_category": "3M",
                    "parent_category": "Brand",
                    "web_category_title": "3M",
                    "web_category_description": "Brand"
                }
            ]
        }
]
```

In this example, "Brand" serves as the top level filter and "3M" is an option within. Do not be confused by the use of the term category here even though we're describing filter functionality.

## Coupons

Add `pos_allow_coupons` to your `MRK.CONTROL` response to enable this feature.

``` json
{
    "pos_allow_coupons": "Y"
}
```

Coupons are a list of coupons objects that can be added to a sales order. A coupon can associate with either one or multiple part line items. This does required the `coupon_li` to have a match a `lis` in the order `lis_items`. The sum of `coup_li_items` `coup_li_disc` is presented in the receipt view.

``` json

    {
        "so_id": "",
        "coupon_id_items": [
            {
                "coupon_id": "11",
                "coup_disc_amt": "10.00",
                "coup_li_items": [
                    {
                        "coup_li": "1",
                        "coup_li_disc": "10.00"
                    }
                ],
                "coupon_type": "1",
                "coupon_title": "NO LIMIT 1"
            }
        ]
    }

```

Rover calculates the order total after each change to the coupon or a price/quantity change to a line item. This requires validation to be enabled by default. Each coupon update will send a validation request with the COUPON.ID

## Sales Order Cash Deposit

Add `pos_allow_cash_deposit` to your `MRK.CONTROL` response to enable this feature.

``` json
{
    "pos_allow_cash_deposit": "Y"
}
```

This process takes the `order_amount` from the order and creates an invoice similar to paying an invoice. The type of `CASH` would be `OA`. The order ID will add to the tender list.

### Sales Order

```json
{
    "so_id": "28460",
    "order_amount": "10.00",
}
```

### Payment metadata

Since deposit uses the payment API (Invoices) we send a query parameter on the request

`/payment?deposit=true`

Which adds `deposit` to the metadata payload on the request.

```json
{
    "record": {/* Invoice information */},
    "filename": "CASH" ,
    "metaData": {
        "deposit": true,
    }
}
```

### Post Payment

```json
{
    "payment_type": "CA",
    "check_amount": "10.00",
    "change_amt": 0,
    "tran_type": "fmp",
    "li_items": [
        {
            "li": "1",
            "amount": "10.00",
            "type": "OA",
            "ar_app_amt": "10.00",
            "pay_note": "",
            "new_ar_id": ""
        }
    ],
    "so_id": "28460"
}
```

<PageFooter />
