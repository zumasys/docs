# BLTOKENSALE
This endpoint is used to finalize a sale using a tokenized for of payment.
Token can be recieved thorugh `BLTOKENIZE`
## POST Request Attributes
| Attribute | Description                                                                                                           | Required
| --------- | --------------------------------------------------------------------------------------------------------------------- |-----------
| atoken    | Authorization token to allow access to the service                                                                    | :heavy_check_mark:
| entity    | This tells the api what databse to use for your transactions                                                          | :heavy_check_mark:
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction                             | :heavy_check_mark:
| reg       | this identifies the POS station, user, termial or process requesting transaction                                                                                                                         | :heavy_check_mark:
| date      | Date of the request made to TotaLink                                                                                  |
| tran      | This is the sequential number for the REG requesting the transaction                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `/BLINQUIRY`                                 |
| amount    | Amount to be authorized with two implied decimal places (example: to specify "$10.00," use "1000")                                                                                                                             | :heavy_check_mark:
| expiry    | Credit Crad expirtaion date                                                                                                                    | :heavy_check_mark:
| debug     | If flag is set then error messages will be more verbose                                                               |

## Example Request
```Javascript
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

## Example Response
|Attribute| Description                                     |                                                 
|----------|------------------------------------------------|
|verified  | Flag will be set to 1 if call was succesfull or 0 if it failed                    |
|errorCode | Error Code, empty if call was successfull                                     |
|errMessage| Error Message, empty if call was successfull                                  |
|resultId  |  Result ID that can be used as the reqID field in BLTOKENREFUND            |
|ccvRec    | Base 64 Encoded String which holds the Token   |


```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*11",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFM2MTP+MjAzMTExMTYzNTI4/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqMTH+/v7+/v7+/v7+/v4xMDD+/v7+/v7+/lRPS0VOLVNBTEX+OTQ3ODg0ODcxODY1MDA3Nv5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+Wv5Y/nJjNzgyNQ=="
}
```