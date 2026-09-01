# BLINQUIRE

<PageHeader />
This endpoint provides information on a given transaction through the provided reference, reqid or invoice.  It is best to use reference or reqid to inquire about a specific transaction.

## POST Request Format

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                                                                                                    | :heavy_check_mark: |
| entity    | This tells the API what database to use for your transactions.                                                                                                        | :heavy_check_mark: |
| store     | The unique assignment for your location(s). Merchant accounts are assigned by store/location. Defaults to `1` if not provided                                         |                    |
| reg       | This identifies the POS station, user, terminal or process requesting transaction. Defaults to `1` if not provided                                                    |                    |
| date      | Date of the request made to Rover Pay. Supports `MM/DD/YYYY` or `YYYY-MM-DD` formats. Defaults to current date if not provided                                        |                    |
| tran      | This is the sequential number for the REG requesting the transaction. Defaults to current time (in seconds) if not provided                                           |                    |
| reference | reference number of the transaction to inquire about.  (must provided one of the following: reference, reqid or invoice)                                              |                    |
| reqid     | resultId of the transaction to inquire about.          (must provided one of the following: reference, reqid or invoice)                                              |                    |
| invoice   | invoice number of the transaction to inquire abount.   (must provided one of the following: reference, reqid or invoice)                                              |                    |
| debug     | If flag is set then error messages will be more verbose                                                                                                               |                    |

## Sample Request

```Javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "",
    "invoice": "",
    "reference": "187023742627",
    "reqid": "",
    "debug": {{debug}}
}
```

## Sample Response

| Attribute     | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| verified      | 1 if success 0 if failure                                                          |
| errorCode     | Error Code                                                                         |
| errMessage    | Error Message                                                                      |
| resultId      | If error occurred will be empty, otherwise will hold the reqID                     |
| auth          | Authorization code returned from the processor                                     |
| reference     | Authorization reference number returned from the processor                         |
| cardType      | Card type code (e.g., `V` for Visa, `M` for Mastercard)                            |
| cardDesc      | Card type description (e.g., `Visa`, `Mastercard`)                                 |
| name          | Cardholder name returned from the processor                                        |
| token         | Card Token returned from the processor                                             |
| expiry        | Credit card expiration date (MMYY format)                                          |
| amount        | Transaction amount                                                                 |
| fee_amount    | Surcharge fee amount (if applicable)                                               |
| fee_authcode  | Fee authorization code (if applicable)                                             |
| fee_format    | Fee format (if applicable)                                                         |
| fee_merchid   | Fee merchant ID (if applicable)                                                    |
| fee_retref    | Fee retrieval reference (if applicable)                                            |
| fee_type      | Fee type (if applicable)                                                           |
| fee_value     | Fee value (if applicable)                                                          |
| ccvRec        | Base64 encoded string containing the full CCV record                               |

```javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*21396*110*46585*1",
    "auth": "PPS010",
    "reference": "187023742627",
    "cardType": "M",
    "cardDesc": "Master Card",
    "name": "",
    "token": "9545666483645454",
    "expiry": "1228",
    "amount": "0",
    "ccvRec": "NSoqKioqKioqNTQ1NP4xMjI4/v5QUFMwMTD+MTg3MDIzNzQyNjI3/v5FTkNSWVBURUT+Tf5NYXN0ZXIgQ2FyZP7+Qf7+W0QyMF0gQ2hhcmdlIEFjY2VwdGVkLv7+/v7+/jk5KjIxMzk2KjExMCo0NjU4NSox/v7+/v7+/v7+/v7+MP7+/v7+/v7+VFJBTi1JTlH+OTU0NTY2NjQ4MzY0NTQ1NP5CT0xU/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v50dDMyMS0wMDP+/v7+ZmVlX2Ftb3VudP1mZWVfYXV0aGNvZGX9ZmVlX3R5cGX9ZmVlX2Zvcm1hdP1mZWVfdmFsdWX9ZmVlX21lcmNoaWT9ZmVlX3JldHJlZv4wLjAw/VJFVkVSU/1TVVJDSFJH/f0w/f0="
}
```

<PageFooter />
