# BLTOKENIZE

<PageHeader />
This endpoint tokenizes a form of payment for use in other endpoints such as BLTOKENAUTH

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
| manual    | If flag is set to 0 then it requests an magnetic stripe,chip, or contactless card interaction, else if set to 1 it will request manually-entered data                 |                    |
| avs       | Optional AVS data. See [AVS Data](../AVS/index.md) for the schema and validation rules                                                                                |                    |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |                    |

## Example Request

```javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc783.9",
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
| cardType      | Card type code (e.g., `V` for Visa, `M` for Mastercard)                                                                           |
| cardDesc      | Card type description (e.g., `Visa`, `Mastercard`)                                                                                |
| name          | Cardholder name returned from the processor                                                                                       |
| token         | Card Token returned from the processor                                                                                            |
| expiry        | Credit card expiration date (MMYY format)                                                                                         |
| signature     | Base64 encoded GZIPPED BMP file of the customer signature (if applicable)                                                         |
| avsCode       | Address Verification Service (AVS) response code                                                                                  |
| cvvCode       | CVV/CVC verification response code                                                                                                |
| ccvRec        | Base64 encoded string containing the full CCV record                                                                              |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*4",
    "cardType": "V",
    "cardDesc": "Visa",
    "name": "JOHN DOE",
    "token": "9478848718650076",
    "expiry": "1222",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7MuhEcJAAADBe08hTFQqQOBphepSEGXgPiYiHkHErr255+u9VNWjulefUVs1GlWtRz+bcwYAAAAAAABc1+2H9/unFwAAgGvaBwBEpsRWbioAAA==",
    "avsCode": "Y",
    "cvvCode": "M",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMxNTL+MjAzNTYzNzQ3MzM3/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqNP7+/v7+/v7+/v7+/jEwMDD+/v7+/v7+/kNDLUFVVEj+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+IP5Y/nJjNzAz/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNdWhFY0pBQUFEQmUwOGhURlFxUU9CcGhlcFNFR1hnUGlZaUhrSEVycjI1NSt1OVZOV2p1bGVmVVZzMUdsV3RSeitiY3dZQUFBQUFBQUJjMSsySDkvdW5Gd0FBZ0d2YUJ3QkVwc1JXYmlvQUFBPT0="
}
```

<PageFooter />
