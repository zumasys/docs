# BLTOKENCREDIT

<PageHeader />
This endpoint is used to CREDIT a specified amount to a tokenized form of payment.
## POST Request Attributes

| Attribute | Description                                                                               | Required           |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                        | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                              | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction          | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                     |
| tran      | This is the sequential number for the REG requesting the transaction                      |
| invoice   | Invoice must be unique per card request in order to request Inquiry from blinquire        |
| ctoken    | This is the token recieved from BLTOKENIZE or BLAUTH                                      | :heavy_check_mark: |
| expiry    | Credit Card expiration date                                                               | :heavy_check_mark: |
| amount    | Amount to be credited back to the credit card                                             | :heavy_check_mark: |
| debug     | If flag is set then error messages will be more verbose                                   |

## Example request

```Javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7827",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "-353",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| verified   | Flag will be set to 1 if call was succesfull or 0 if it failed     |
| errorCode  | Error Code                                                         |
| errMessage | Error Message                                                      |
| resultId   | If error ocurred this will be empty, otherwise will hold the reqID |
| ccvRec     | Base 64 Encoded String which holds the Token                       |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*10",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5SRUZVTkT+MjAzMjUzMTUxMDc0/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqMTD+/v7+/v7+/v7+/v4tMzUz/v7+/v7+/v5UT0tFTi1DUkVESVT+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Vf5V/nJjNzgyNw=="
}
```
