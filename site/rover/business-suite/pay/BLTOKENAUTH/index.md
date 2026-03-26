# BLTOKENAUTH

<PageHeader />
This endpoint authorizes a tokenized form of payment for a specified amount.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the api what database to use for your transactions                                                                                                          | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/location                                                                             | :heavy_check_mark: |
| reg       | this identifies the POS station, user, terminal or process requesting transaction                                                                                      | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                                                                                                 |
| tran      | This is the sequential number for the REG requesting the transaction                                                                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from blinquire                                                                                    |
| ctoken    | This is the token received from BLTOKENIZE                                                                                                                            | :heavy_check_mark: |
| amount    | Amount to be authorized with two implied decimal places (example: to specify "$10.00," use "1000")                                                                    | :heavy_check_mark: |
| manual    | If flag is set to 0 then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else  it will request manually-entered data |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |

## Example Request

```javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "",
    "invoice": "",
    "ctoken": "",
    "expiry": "",
    "amount": "",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was successful or 0 if it failed |
| errorCode  | Error Code                                                     |
| errMessage | Error Message                                                  |
| resultId   | Result ID that can be used as the reqID field                  |
| ccvRec     | Base 64 Encoded String which holds the Token                   |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*41642*1",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFM4ODn+MjAzNzg0MDQ4ODQz/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqNDE2NDIqMf7+/v7+/v7+/v7+/jEwMDD+/v7+/v7+/lRPS0VOLUFWU/45NDc4ODQ4NzE4NjUwMDc2/kJPTFT+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4g/lj+/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNc3hFY0pBQUFEQmV4ZEl5S1NLQWdyNmVFQUI2aUlJSjA5RFFVK1JHZGh0Yis2MlA5YXF1bFpMOVJ4MVZLTlIxZmJ1bithY0FRQUFBQURudXB6MGJsKzg5ejk3QVFBQUFBQit3V3NBQ09Jb1ZHNHFBQUE9"
}
```
