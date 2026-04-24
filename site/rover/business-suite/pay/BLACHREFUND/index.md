# BLACHREFUND

<PageHeader />

The `BLACHREFUND` endpoint issues an ACH refund (return) against a prior ACH sale. It requires the `achtoken` representing the bank account and the `reqid` (the `resultId` returned by the original [BLACHSALE](../BLACHSALE/index.md)).

## POST Request Attributes

| Attribute | Description                                                                                      | Required           |
| --------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| atoken    | Authorization token to allow access to the service                                               | :heavy_check_mark: |
| entity    | This tells the api what database to use for your transactions                                    | :heavy_check_mark: |
| store     | The unique assignment for your location(s) Merchant accounts are assigned by store/location      | :heavy_check_mark: |
| reg       | This identifies the POS station, user, terminal or process requesting the transaction            | :heavy_check_mark: |
| date      | Date of the request made to Rover Pay                                                            |                    |
| tran      | This is the sequential number for the REG requesting the transaction                             |                    |
| invoice   | Invoice must be unique per request in order to request Inquiry from `BLINQUIRE`                  |                    |
| amount    | Amount to be refunded with two implied decimal places (example: to specify "$10.00," use "1000") | :heavy_check_mark: |
| achtype   | Account type: `ECHK` for checking or `ESAV` for savings                                          | :heavy_check_mark: |
| achtoken  | Bank account token returned by `BLACHTOKENIZE` or `BLACHSALE`                                    | :heavy_check_mark: |
| reqid     | The `resultId` returned by the original `BLACHSALE` transaction                                  | :heavy_check_mark: |
| debug     | If flag is set then error messages will be more verbose                                          |                    |

## Example Request

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7832",
    "amount": "2500",
    "achtype": "ECHK",
    "achtoken": "9412345678901234",
    "reqid": "1*19562*110*rc783*21",
    "debug": {{debug}}
}
```

## Example Response

| Attribute    | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| verified     | Flag will be set to 1 if call was successful or 0 if it failed |
| errorCode    | Error Code, empty if call was successful                       |
| errorMessage | Error Message, empty if call was successful                    |
| resultId     | Result ID for this refund request                              |
| auth         | Authorization code returned by the processor                   |
| reference    | Authorization reference returned by the processor              |
| ccvRec       | Base 64 Encoded String which holds the underlying CCV record   |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*22",
    "auth": "AUTH9999",
    "reference": "REF0001",
    "ccvRec": "..."
}
```

<PageFooter />
