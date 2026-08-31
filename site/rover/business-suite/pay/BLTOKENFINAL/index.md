# BLTOKENFINAL

<PageHeader />
This endpoint finalizes and captures payment for a previous auth-only transaction.

## POST Attribute Format

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the API what database to use for your transactions.                                                                                                        | :heavy_check_mark: |
| store     | The unique assignment for your location(s). Merchant accounts are assigned by store/location. Defaults to `1` if not provided                                         |                    |
| reg       | This identifies the POS station, user, terminal or process requesting transaction. Defaults to `1` if not provided                                                    |                    |
| date      | Date of the request made to Rover Pay. Supports `MM/DD/YYYY` or `YYYY-MM-DD` formats. Defaults to current date if not provided                                        |                    |
| tran      | This is the sequential number for the REG requesting the transaction. Defaults to current time (in seconds) if not provided                                           |                    |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `BLINQUIRE`                                                                                  |                    |
| ctoken    | This is the token received from BLTOKENIZE or BLAUTH                                                                                                                  |                    |
| expiry    | Credit Card expiration date                                                                                                                                           |                    |
| amount    | Amount to be credited with two implied decimal places (example: to specify "$10.00," use "1000").                                                                     | :heavy_check_mark: |
| reqid     | This is the resultID from the auth-only transaction                                                                                                                   | :heavy_check_mark: |
| level23   | Optional Level 2 / Level 3 transaction data. See [Level 2 / Level 3 Data](../LEVEL23/index.md) for the schema and validation rules                                    |                    |
| fee_exclude_amount | Optional fee amount to exclude from surcharge calculation.                                                                                                   |                    |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |                    |

## Example Request (basic)

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc783.8",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "800",
    "reqid": "1*19562*110*rc783*7",
    "debug": {{debug}}
}
```

## Example Request (with Level 2 / Level 3 data)

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc783.8",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "1230",
    "reqid": "1*19562*110*rc783*7",
    "level23": {
        "ponumber": "PO-10042",
        "taxamnt": "80",
        "taxexempt": "N",
        "frtamnt": "150",
        "dutyamnt": "0",
        "orderdate": "20260427",
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
                "taxamnt": "80"
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
    },
    "debug": {{debug}}
}
```

## Example Response

| Attribute     | Description                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| verified      | Flag will be set to `1` if call was successful or `0` if it failed                                                                |
| errorCode     | Error code, empty if call was successful                                                                                          |
| errorMessage  | Error message, empty if call was successful                                                                                       |
| resultId      | Result ID that can be used as the `reqid` field in `BLTOKENREFUND`                                                                |
| auth          | Authorization code returned from the processor                                                                                    |
| reference     | Authorization reference number returned from the processor                                                                        |
| cardType      | Card type code (e.g., `V` for Visa, `M` for Mastercard)                                                                           |
| cardDesc      | Card type description (e.g., `Visa`, `Mastercard`)                                                                                |
| name          | Cardholder name returned from the processor                                                                                       |
| fee_amount    | Surcharge fee amount (if applicable)                                                                                              |
| fee_authcode  | Fee authorization code (if applicable)                                                                                            |
| fee_format    | Fee format (if applicable)                                                                                                        |
| fee_merchid   | Fee merchant ID (if applicable)                                                                                                   |
| fee_retref    | Fee retrieval reference (if applicable)                                                                                           |
| fee_type      | Fee type (if applicable)                                                                                                          |
| fee_value     | Fee value (if applicable)                                                                                                         |
| ccvRec        | Base64 encoded string containing the full CCV record                                                                              |
| level23Errors | Comma-delimited list of Level 2 / Level 3 validation issues, omitted when none. See [Level 2 / Level 3 Data](../LEVEL23/index.md) |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*8",
    "auth": "123456",
    "reference": "203563747337",
    "cardType": "V",
    "cardDesc": "Visa",
    "name": "",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMxNTL+MjAzNTYzNzQ3MzM3/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqNP7+/v7+/v7+/v7+/jEwMDD+/v7+/v7+/kNDLUFVVEj+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+IP5Y/nJjNzAz/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNdWhFY0pBQUFEQmUwOGhURlFxUU9CcGhlcFNFR1hnUGlZaUhrSEVycjI1NSt1OVZOV2p1bGVmVVZzMUdsV3RSeitiY3dZQUFBQUFBQUJjMSsySDkvdW5Gd0FBZ0d2YUJ3QkVwc1JXYmlvQUFBPT0="
}
```

<PageFooter />
