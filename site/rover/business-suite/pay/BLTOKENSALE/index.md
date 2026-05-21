# BLTOKENSALE

<PageHeader />

The `BLTOKENSALE` endpoint is used to finalize a sale using a tokenized form of payment. Token can be received through `BLTOKENIZE`.

## POST Request Attributes

| Attribute | Description                                                                                                                        | Required           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                 | :heavy_check_mark: |
| entity    | This tells the api what database to use for your transactions                                                                      | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/location                                         | :heavy_check_mark: |
| reg       | this identifies the POS station, user, terminal or process requesting transaction                                                  | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                                                              |
| tran      | This is the sequential number for the REG requesting the transaction                                                               |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `/blinquire`                                              |
| amount    | Amount to be authorized with two implied decimal places (example: to specify "$10.00," use "1000")                                 | :heavy_check_mark: |
| expiry    | Credit Crad expirtaion date                                                                                                        | :heavy_check_mark: |
| level23   | Optional Level 2 / Level 3 transaction data. See [Level 2 / Level 3 Data](../LEVEL23/index.md) for the schema and validation rules |                    |
| debug     | If flag is set then error messages will be more verbose                                                                            |

## Example Request (basic)

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7825",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "100",
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
    "invoice": "rc7825",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "1230",
    "level23": {
        "ponumber": "PO-30100",
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
| verified      | Flag will be set to 1 if call was successful or 0 if it failed                                                                    |
| errorCode     | Error Code, empty if call was successful                                                                                          |
| errMessage    | Error Message, empty if call was successful                                                                                       |
| resultId      | Result ID that can be used as the reqID field in BLTOKENREFUND                                                                    |
| ccvRec        | Base 64 Encoded String which holds the Token                                                                                      |
| level23Errors | Comma-delimited list of Level 2 / Level 3 validation issues, omitted when none. See [Level 2 / Level 3 Data](../LEVEL23/index.md) |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*11",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFM2MTP+MjAzMTExMTYzNTI4/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqMTH+/v7+/v7+/v7+/v4xMDD+/v7+/v7+/lRPS0VOLVNBTEX+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Wv5Y/nJjNzgyNQ=="
}
```

<PageFooter />
