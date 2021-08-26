# BLSALE

<PageHeader />

The BLSALE endpoint authorizes the form of payment and captures the payment. See below for request/response examples.

## POST Request Format

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to access API                                                                                                                                     | :heavy_check_mark: |
| entity    | Description of the resource / service                                                                                                                                 | :heavy_check_mark: |
| store     | This is a unique assignment for your location(s) Merchant accounts are assigned by store/Location                                                                     | :heavy_check_mark: |
| reg       | This identifies the POS station, user, terminal or process requesting a transaction                                                                                   | :heavy_check_mark: |
| date      | This is the date of the request made to TotaLink                                                                                                                      |
| tran      | This is the sequential number for the REG requesting the transaction                                                                                                  |
| invoice   | This is the sequential number that will allow INQUIRY based on this ID through blinquire                                                                              |
| amount    | Amount to be authorized with two implied decimals places (example: to specify "$10.00," use "1000")                                                                   | :heavy_check_mark: |
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
    "amount": "353",
    "manual": "0",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was succesfull or 0 if it failed                                                |
| errorCode  | Error Code                                                                                                    |
| errMessage | Error Message                                                                                                 |
| resultId   | If error ocurred will be empty, otherwise will hold the reqID that can be used for the BLTOKENREFUND endpoint |
| ccvRec     | Base 64 Encoded String which holds the Token                                                                  |
| token      | Token that is represented as a 16 character string                                                            |
| expiry     | Expiration date for card used formated as MMYY                                                                |
| signature  | Base 64 encode GZIPPED BMP FILE                                                                               |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*7",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFM0MTP+MjAzMzEzMDQ3Njgx/v5FTkNSWVBURUT+Vv5WaXNh/v5Q/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MioxMTAqcmM3ODMqN/4yMDT+/v7+/v7+/v7+/jM1M/7+/v7+/v7+Q0MtU0FMRf45NDc4ODQ4NzE4NjUwMDc2/kJPTFT+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4g/lj+cmM3ODI3/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdOR2hEY0pRQUVYUis3Zm9DQTJxc3FxaW5sV1lqb0hZNUdNUWVFUkRjbzU5dWVxZDk4ZXRxbzVxclY2am50Vm9WTFY5OW05enpnQUFBQUFBZ0wreVhkVHVQN1NMMndBQUFBQ3U5eDRBYVgxZ1cyNHFBQUE9",
    "token": "9478848718650076",
    "expiry": "1222",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7NGhDcJQAEXR+7foCA2qsqqinlWYjoHY5GMQeERDco59ueqd98etqo5qrV6jntVoVLV99m9zzgAAAAAAgL+yXdTuP7SL2wAAAACu9x4AaX1gW24qAAA="
}
```
