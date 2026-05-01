# Level 2 / Level 3 Data

<PageHeader />

Several Rover Pay endpoints accept an optional `level23` object on the request that supplies Level 2 and Level 3 transaction data. Submitting Level 2/3 data with qualifying B2B and government card transactions can lower interchange rates.

The following endpoints accept `level23`:

- [BLAUTH](../BLAUTH/index.md)
- [BLSALE](../BLSALE/index.md)
- [BLTOKENSALE](../BLTOKENSALE/index.md)
- [BLTOKENCREDIT](../BLTOKENCREDIT/index.md)
- [BLTOKENFINAL](../BLTOKENFINAL/index.md)

The `level23` object is optional. If omitted, the transaction is processed as a Level 1 sale.

## Request Schema

`level23` may be supplied as a JSON object on the request. All amounts use two implied decimal places (e.g. `"1000"` = `$10.00`), matching the transaction `amount` field.

### Level 2 fields

| Field     | Description                                             | Required for L2    |
| --------- | ------------------------------------------------------- | ------------------ |
| ponumber  | Purchase order number                                   |                    |
| taxamnt   | Sales tax amount (two implied decimals)                 | :heavy_check_mark: |
| taxexempt | `Y` if the order is tax exempt, otherwise `N` (default) |                    |

### Level 3 order fields

Level 3 data also requires the Level 2 `taxamnt` field above.

| Field         | Description                                                      | Required for L3    |
| ------------- | ---------------------------------------------------------------- | ------------------ |
| frtamnt       | Freight / shipping amount (two implied decimals)                 |                    |
| dutyamnt      | Duty amount (two implied decimals)                               |                    |
| orderdate     | Order date in `YYYYMMDD` format                                  | :heavy_check_mark: |
| shiptozip     | Ship-to ZIP / postal code (5 or 9 digits for US)                 | :heavy_check_mark: |
| shipfromzip   | Ship-from ZIP / postal code (5 or 9 digits for US)               | :heavy_check_mark: |
| shiptocountry | Ship-to country code (defaults to `US`)                          |                    |
| discamnt      | Order-level discount amount (mutually exclusive with item-level) |                    |
| items         | Array of line items (see below)                                  | :heavy_check_mark: |

### Level 3 item fields (`items[]`)

| Field       | Description                                                    | Required           |
| ----------- | -------------------------------------------------------------- | ------------------ |
| lineno      | Line number on the order                                       |                    |
| material    | Material / SKU code                                            |                    |
| description | Item description                                               | :heavy_check_mark: |
| upc         | UPC code (must not be all zeros if supplied)                   |                    |
| quantity    | Quantity ordered                                               | :heavy_check_mark: |
| uom         | Unit of measure (e.g. `EA`, `LB`, `BOX`)                       | :heavy_check_mark: |
| unitcost    | Unit cost (auto-calculated as `netamnt / quantity` if omitted) |                    |
| netamnt     | Extended net amount for the line (two implied decimals)        | :heavy_check_mark: |
| taxamnt     | Tax amount for the line (two implied decimals)                 | :heavy_check_mark: |
| discamnt    | Item-level discount amount                                     |                    |

## Validation Rules

The submitted `level23` data is validated before being sent to the processor. Any rule violations are returned in the response as a comma-delimited `level23Errors` string. The transaction itself is still processed; callers should decide whether to treat the errors as warnings or as a hard failure.

The following rules are enforced:

- `taxamnt` must be `0` when `taxexempt` is `Y`.
- `taxamnt` must be non-zero when Level 2 data is present and `taxexempt` is `N`.
- Level 3 data requires the Level 2 `taxamnt` to be supplied.
- `orderdate` is required for Level 3 and must be 8 numeric digits (`YYYYMMDD`).
- `shiptozip` and `shipfromzip` are required for Level 3.
- For US shipments (`shiptocountry` empty or `US`), ZIP codes must be 5 or 9 digits.
- At least one item is required for Level 3.
- Each item requires `description`, `quantity`, `uom`, `netamnt` and `taxamnt`.
- `upc`, when supplied, must not be all zeros.
- If `frtamnt` is non-zero, at least one line item's `netamnt` must equal `frtamnt`.
- The sum of all `items[].taxamnt` must equal the order-level `taxamnt`.

## Example `level23` Object

``` javascript
{
    "ponumber": "PO-10042",
    "taxamnt": "80",
    "taxexempt": "N",
    "frtamnt": "150",
    "dutyamnt": "0",
    "orderdate": "20260424",
    "shiptozip": "92614",
    "shipfromzip": "85284",
    "shiptocountry": "US",
    "items": [
        {
            "lineno": "1",
            "material": "WIDGET-100",
            "description": "Blue widget",
            "upc": "012345678905",
            "quantity": "2",
            "uom": "EA",
            "unitcost": "500",
            "netamnt": "1000",
            "taxamnt": "80",
            "discamnt": "0"
        },
        {
            "lineno": "2",
            "description": "Ground shipping",
            "quantity": "1",
            "uom": "EA",
            "unitcost": "150",
            "netamnt": "150",
            "taxamnt": "0"
        }
    ]
}
```

## Example Response Snippet

When validation issues are detected, a `level23Errors` attribute is added to the
endpoint's normal response:

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*7",
    "ccvRec": "...",
    "level23Errors": "orderdate is required for Level 3,shiptozip is required for Level 3"
}
```

<PageFooter />
