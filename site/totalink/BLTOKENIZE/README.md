# BLTOKENIZE

<PageHeader />
This endpoint tokenizes a form of payment for use in other endpoints such as `/BLTOKENAUTH`

## POST Attribute Format

| Attribute | Description                                                                                                           | Required
| --------- | --------------------------------------------------------------------------------------------------------------------- |-----------
| atoken    | Authorization token to allow access to the service                                                                    | :heavy_check_mark:
| entity    | This tells the api what databse to use for your transactions                                                          | :heavy_check_mark:
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction                             | :heavy_check_mark:
| reg       | this identifies the POS station, user, termial or process requesting transaction                                                                                                                         | :heavy_check_mark:
| date      | Date of the request made to TotaLink                                                                                  |
| tran      | This is the sequential number for the REG requesting the transaction                                                  |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `/BLINQUIRY`                                 | :heavy_check_mark:
| manual     | If flag is set to 0 then it requests an MSR (magnetic stripe), EMV (chip), or NFC (contactless) payment card interaction, else if set to 1 it will request manually-entered data                                                                                                               |
| debug     | If flag is set then error messages will be more verbose                                                               |

## Example Request
```javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7824",
    "manual": "0",
    "debug": {{debug}}
}
```
## Example Response
|Attribute| Description                                     |                                                 
|----------|------------------------------------------------|
|verified  | Flag will be set to 1 if call was succesfull or 0 if it failed                    |
|errorCode | Error Code                                     |
|errMessage| Error Message                                  |
|resultId  | If error ocurred will be empty, otherwise will hold the reqID that can be used for |
|ccvRec    | Base 64 Encoded String which holds the Token   |
|token     | 16 character string                            |
|expiry    | credit card expiration date                     |
|signature | Base 64 encode GZIPPED BMP file                |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*9",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFM0NDP+MjAzNDQxMDQ3ODU0/v5FTkNSWVBURUT+Vv5WaXNh/v5B/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqOf7+/v7+/v7+/v7+/v7+/v7+/v7+VE9LRU4tTkVX/jk0Nzg4NDg3MTg2NTAwNzb+Qk9MVP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/lr+WP5yYzc4MzD+SDRzSUNBQUFBQUFDLzFOSlJ5NUNUVkFBN05DaEVjSlFBQVhCK3cxUVFqU0Rvb0tJK0xTUzZpaUlUbjRNQXNzZ1luYnR6VE52MjQ5SFZhM1Z2WHFQZWxXalVkWHowNy9OT1FNQUFBQUFnRjhzZjJ4djdnTUFBQUNBeTV3REFDand4ejF1S2dBQQ==",
    "token": "9478848718650076",
    "expiry": "1222",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7NChEcJQAAXB+w1QQjSDooKI+LSS6iiITn4MAssgYnbtzTNv249HVa3VvXqPelWjUdXz07/NOQMAAAAAgF8sf2xv7gMAAACAy5wDACjwxz1uKgAA"
}
```

