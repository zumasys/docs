# BLAUTH

<PageHeader />
This endpoint authorizes the form of payment and returns a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                                                                                                          | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction                                                                             | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction                                                                                      | :heavy_check_mark: |
| date      | Date of the request made to TotaLink                                                                                                                                  |
| tran      | This is the sequential number for the REG requesting the transaction                                                                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `BLINQUIRE`                                                                                  |
| amount    | Amount to be authorized with two implied decimal places (example: to specify "$10.00," use "1000")                                                                    | :heavy_check_mark: |
| manual    | If flag is set to 0 then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else  it will request manually-entered data |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |

## Example Request

```javascript
{
    "atoken" : "atoken",
    "entity" : "entity",
    "store" : "store",
    "reg" : "reg",
    "date" : "date",
    "tran" : "transaction",
    "invoice" : "invoiceId",
    "amount": "1000",
    "manual": "0",
    "debug": "0"
}
```

## Example Response

| Attribute  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was succesfull or 0 if it failed |
| errorCode  | Error Code, empty if call was successfull                      |
| errMessage | Error Message, empty if call was successfull                   |
| resultId   | Result ID that can be used as the reqID field in BLTOKENREFUND |
| ccvRec     | Base 64 Encoded String which holds the Token                   |
| token      | 16 character string                                            |
| expiry     | credit card expiration date                                    |
| signature  | Base 64 encoded GZIPPED BMP file                               |

```Javascript
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
