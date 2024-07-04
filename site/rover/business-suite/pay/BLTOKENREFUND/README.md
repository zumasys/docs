# BLTOKENREFUND

This endpoint is used to refund an amount that was previously authorized through `BLAUTH` or `BLTOKENAUTH`

## POST Attribute Format

| Attribute | Description                                                                               | Required           |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                        | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                              | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction          | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                     |
| tran      | This is the sequential number for the REG requesting the transaction                      |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `blinquire`      |
| ctoken    | This is the token recieved from `BLTOKENIZE`                                              | :heavy_check_mark: |
| expiry    | Credit card expiration date                                                               | :heavy_check_mark: |
| amount    | Amount to be refunded from the previous authorized amount                                 | :heavy_check_mark: |
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
    "invoice": "rc7826",
    "ctoken": "9478848718650076",
    "expiry": "1222",
    "amount": "-200",
    "reqid": "1*19562*110*41642*1",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| verified   | 1 if success 0 if failure                                     |
| errorCode  | Error Code                                                    |
| errMessage | Error Message                                                 |
| resultId   | If error ocurred will be empty, otherwise will hold the reqID |
| ccvRec     | Base 64 Encoded String which holds the Token                  |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "",
    "ccvRec": "OTQ3ODg0ODcxODY1MDA3Nv4xMjIy/v7+/v5FTkNSWVBURUT+/v5CTP5Q/v5bRDEwXSBBIGNoYXJnZSBmb3IgdGhpcyB0cmFuc2FjdGlvbiwgYW5kIGFtb3VudCBhbHJlYWR5IGV4aXN0cyEH/TwxPj1DaGFyZ2UgdGhpcyBjYXJkIGFnYWluLCA8Mj49VXNlIGV4aXN0aW5nIGF1dGhvcml6YXRpb24sIDwzPj1FeGl0/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5UT0tFTi1SRVRVUk7+/kJPTFT+/v7+/v4xKjE5NTYyKjExMCo0MTY0Miox/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5yYzc4MjY="
}
```
