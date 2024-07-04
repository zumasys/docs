# BLTOKENFINAL

<PageHeader />
This endpoint finalizes a transaction on an authorized form of payment.

## POST Attribute Format

| Attribute | Description                                                                               | Required           |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                        | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                              | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction          | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                     |
| tran      | This is the sequential number for the REG requesting the transaction                      |
| invoice   | Invoice must be unique per card request in order to request Inquiry from blinquire        |
| ctoken    | This is the token recieved from BLTOKENIZE                                                | :heavy_check_mark: |
| expiry    | Credit Card expiration date                                                               | :heavy_check_mark: |
| amount    | Amount to be credited back to the credit card                                             |
| reqid     | This is the resultID from the transaction                                                 | :heavy_check_mark: |
| debug     | If flag is set then error messages will be more verbose                                   |

## Example Request

```Javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7823",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "800",
    "reqid": "1*19562*110*rc783*7",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was succesfull or 0 if it failed |
| errorCode  | Error Code                                                     |
| errMessage | Error Message                                                  |
| resultId   | Result ID that can be used as the reqIid                       |
| ccvRec     | Base 64 Encoded String which holds the Token                   |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*6",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMxNTL+MjAzNTYzNzQ3MzM3/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqNv7+/v7+/v7+/v7+/jgwMP7+/v7+/v7+Q0MtQ09NUExFVEX+/kJPTFT+/v7+/v4xKjE5NTYyKjExMCpyYzc4Myo1/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5yYzc4MjM="
}
```
