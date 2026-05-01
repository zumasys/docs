# BLAUTH

<PageHeader />

The `BLAUTH` authorizes the form of payment and returns a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the api what database to use for your transactions                                                                                                         | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/location                                                                            | :heavy_check_mark: |
| reg       | this identifies the POS station, user, terminal or process requesting transaction                                                                                     | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                                                                                                 |
| tran      | This is the sequential number for the REG requesting the transaction                                                                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `BLINQUIRE`                                                                                  |
| amount    | Amount to be authorized with two implied decimal places (example: to specify "$10.00," use "1000")                                                                    | :heavy_check_mark: |
| manual    | If flag is set to 0 then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else  it will request manually-entered data |
| level23   | Optional Level 2 / Level 3 transaction data. See [Level 2 / Level 3 Data](../LEVEL23/index.md) for the schema and validation rules                                    |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |

## Example Request (basic)

``` javascript
{
    "atoken": "atoken",
    "entity": "entity",
    "store": "store",
    "reg": "reg",
    "date": "date",
    "tran": "transaction",
    "invoice": "invoiceId",
    "amount": "1000",
    "manual": "0",
    "debug": "0"
}
```

## Example Request (with Level 2 / Level 3 data)

``` javascript
{
    "atoken": "atoken",
    "entity": "entity",
    "store": "store",
    "reg": "reg",
    "date": "date",
    "tran": "transaction",
    "invoice": "invoiceId",
    "amount": "1230",
    "manual": "0",
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
    "debug": "0"
}
```

## Example Response

| Attribute     | Description                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| verified      | Flag will be set to 1 if call was successful or 0 if it failed                                                                    |
| errorCode     | Error Code, empty if call was successful                                                                                          |
| errMessage    | Error Message, empty if call was successful                                                                                       |
| resultId      | Result ID that can be used as the reqID field in BLTOKENREFUND                                                                    |
| ccvRec        | Base 64 Encoded String which holds the Token                                                                                      |
| token         | 16 character string                                                                                                               |
| expiry        | credit card expiration date                                                                                                       |
| signature     | Base 64 encoded GZIPPED BMP file                                                                                                  |
| level23Errors | Comma-delimited list of Level 2 / Level 3 validation issues, omitted when none. See [Level 2 / Level 3 Data](../LEVEL23/index.md) |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*4",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMxNTL+MjAzNTYzNzQ3MzM3/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqNP7+/v7+/v7+/v7+/jEwMDD+/v7+/v7+/kNDLUFVVEj+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+IP5Y/nJjNzAz/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNdWhFY0pBQUFEQmUwOGhURlFxUU9CcGhlcFNFR1hnUGlZaUhrSEVycjI1NSt1OVZOV2p1bGVmVVZzMUdsV3RSeitiY3dZQUFBQUFBQUJjMSsySDkvdW5Gd0FBZ0d2YUJ3QkVwc1JXYmlvQUFBPT0=",
    "token": "9478848718650076",
    "expiry": "1222",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7MuhEcJAAADBe08hTFQqQOBphepSEGXgPiYiHkHErr255+u9VNWjulefUVs1GlWtRz+bcwYAAAAAAABc1+2H9/unFwAAgGvaBwBEpsRWbioAAA=="
}
```

<PageFooter />
