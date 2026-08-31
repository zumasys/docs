# BLCREDIT

<PageHeader />
This endpoint is used to **credit** the specified amount to an authorized form of payment.

## POST Request Format

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the API what database to use for your transactions.                                                                                                        | :heavy_check_mark: |
| store     | The unique assignment for your location(s). Merchant accounts are assigned by store/location. Defaults to `1` if not provided                                         |                    |
| reg       | This identifies the POS station, user, terminal or process requesting transaction. Defaults to `1` if not provided                                                    |                    |
| date      | Date of the request made to Rover Pay. Supports `MM/DD/YYYY` or `YYYY-MM-DD` formats. Defaults to current date if not provided                                        |                    |
| tran      | This is the sequential number for the REG requesting the transaction. Defaults to current time (in seconds) if not provided                                           |                    |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `BLINQUIRE`                                                                                  |                    |
| amount    | Amount to be credited with two implied decimal places (example: to specify "-$10.00," use "-1000").  (Note: negative amount)                                          | :heavy_check_mark: |
| manual    | If flag is set to `0` then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else it will request manually-entered data. Defaults to `0` |                    |
| forcezip  | Force ZIP code entry. Set to `TRUE` to force ZIP, `FALSE` to skip ZIP, or leave empty to use default AVS settings                                                     |                    |
| level23   | Optional Level 2 / Level 3 transaction data. See [Level 2 / Level 3 Data](../LEVEL23/index.md) for the schema and validation rules                                    |                    |
| debug     | If flag is set to `1` then error messages will be more verbose. Set to `2` to enable debugger mode                                                                    |                    |

## Example Request

```Javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7822",
    "amount": "-353",
    "manual": "0",
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
| token         | Card Token returned from the processor                                                                                            |
| expiry        | Credit card expiration date (MMYY format)                                                                                         |
| signature     | Base64 encoded GZIPPED BMP file of the customer signature (if applicable)                                                         |
| avsCode       | Address Verification Service (AVS) response code                                                                                  |
| cvvCode       | CVV/CVC verification response code                                                                                                |
| fee_amount    | Surcharge fee amount (if applicable)                                                                                              |
| fee_authcode  | Fee authorization code (if applicable)                                                                                            |
| fee_format    | Fee format (if applicable)                                                                                                        |
| fee_merchid   | Fee merchant ID (if applicable)                                                                                                   |
| fee_retref    | Fee retrieval reference (if applicable)                                                                                           |
| fee_type      | Fee type (if applicable)                                                                                                          |
| fee_value     | Fee value (if applicable)                                                                                                         |
| ccvRec        | Base64 encoded string containing the full CCV record                                                                              |
| level23Errors | Comma-delimited list of Level 2 / Level 3 validation issues, omitted when none. See [Level 2 / Level 3 Data](../LEVEL23/index.md) |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*10",
    "auth": "123456",
    "reference": "203563747337",
    "cardType": "V",
    "cardDesc": "Visa",
    "name": "",
    "avsCode": "Y",
    "cvvCode": "M",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5SRUZVTkT+MjAzMjUzMTUxMDc0/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqMTD+/v7+/v7+/v7+/v4tMzUz/v7+/v7+/v5UT0tFTi1DUkVESVT+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Vf5V/nJjNzgyNw=="
}
```

<PageFooter />
