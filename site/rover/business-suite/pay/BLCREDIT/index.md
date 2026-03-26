# BLCREDIT

<PageHeader />
This endpoint Credits an authorized form of payment with the specified amount in the request

## POST Request Format

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the api what database to use for your transactions                                                                                                          | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/location                                                                             | :heavy_check_mark: |
| reg       | this identifies the POS station, user, terminal or process requesting transaction                                                                                      | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                                                                                                 |
| tran      | This is the sequential number for the REG requesting the transaction                                                                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `/blinquire`                                                                                 |
| amount    | This is the amount that will be credited back to the credit card                                                                                                      | :heavy_check_mark: |
| manual    | If flag is set to 0 then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else  it will request manually-entered data |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |

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

| Attribute  | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| verified   | 1 if success 0 if failure                                                          |
| errorCode  | Error Code                                                                         |
| errMessage | Error Message                                                                      |
| resultId   | If error occurred will be empty, otherwise will hold the reqID that can be used for |
| ccvRec     | Base 64 Encoded String which holds the Token                                       |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*10",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5SRUZVTkT+MjAzMjUzMTUxMDc0/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqMTD+/v7+/v7+/v7+/v4tMzUz/v7+/v7+/v5UT0tFTi1DUkVESVT+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Vf5V/nJjNzgyNw=="
}
```
