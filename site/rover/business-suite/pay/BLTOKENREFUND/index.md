# BLTOKENREFUND

<PageHeader />
This endpoint is used to void or refund against a previously authorized transaction.  When refunding the full amount within the same batch a Void is processed, otherwise a Refund is processed.

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
| amount    | Amount to be reversed with two implied decimal places (example: to specify "$10.00," use "1000").                                                                     | :heavy_check_mark: |
| ctoken    | This is the token received from BLTOKENIZE or BLAUTH                                                                                                                  |                    |
| expiry    | Credit Card expiration date                                                                                                                                           |                    |
| reqid     | This is the resultID from the original transaction                                                                                                                    | :heavy_check_mark: |
| fee_amount | Original fee amount from original response.                                                                                                                          |                    |
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
    "invoice": "rc7826",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "-200",
    "reqid": "1*19562*110*41642*1",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| verified   | 1 if success 0 if failure                                     |
| errorCode  | Error Code                                                    |
| errMessage | Error Message                                                 |
| resultId   | If error occurred will be empty, otherwise will hold the reqID |
| ccvRec     | Base 64 Encoded String which holds the Token                  |

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

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*11",
    "auth": "123456",
    "reference": "203563747337",
    "cardType": "V",
    "cardDesc": "Visa",
    "name": "",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMxNTL+MjAzNTYzNzQ3MzM3/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqNP7+/v7+/v7+/v7+/jEwMDD+/v7+/v7+/kNDLUFVVEj+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+IP5Y/nJjNzAz/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNdWhFY0pBQUFEQmUwOGhURlFxUU9CcGhlcFNFR1hnUGlZaUhrSEVycjI1NSt1OVZOV2p1bGVmVVZzMUdsV3RSeitiY3dZQUFBQUFBQUJjMSsySDkvdW5Gd0FBZ0d2YUJ3QkVwc1JXYmlvQUFBPT0="
}
```

<PageFooter />
