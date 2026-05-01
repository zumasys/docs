# BLACHTOKENIZE

<PageHeader />

The `BLACHTOKENIZE` endpoint tokenizes a bank account (routing + account number) through the Bolt interface so that the resulting `achtoken` can be used for later [BLACHSALE](../BLACHSALE/index.md) requests without re-supplying the bank account details.

## POST Request Attributes

| Attribute  | Description                                                                                 | Required           |
| ---------- | ------------------------------------------------------------------------------------------- | ------------------ |
| atoken     | Authorization token to allow access to the service                                          | :heavy_check_mark: |
| entity     | This tells the api what database to use for your transactions                               | :heavy_check_mark: |
| store      | The unique assignment for your location(s) Merchant accounts are assigned by store/location | :heavy_check_mark: |
| reg        | This identifies the POS station, user, terminal or process requesting the transaction       | :heavy_check_mark: |
| date       | Date of the request made to Rover Pay                                                       |                    |
| tran       | This is the sequential number for the REG requesting the transaction                        |                    |
| invoice    | Invoice must be unique per request in order to request Inquiry from `BLINQUIRE`             |                    |
| achroute   | Bank routing / ABA number                                                                   | :heavy_check_mark: |
| achaccount | Bank account number                                                                         | :heavy_check_mark: |
| debug      | If flag is set then error messages will be more verbose                                     |                    |

## Example Request

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7830",
    "achroute": "021000021",
    "achaccount": "1234567890",
    "debug": {{debug}}
}
```

## Example Response

| Attribute    | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| verified     | Flag will be set to 1 if call was successful or 0 if it failed                            |
| errorCode    | Error Code, empty if call was successful                                                  |
| errorMessage | Error Message, empty if call was successful                                               |
| resultId     | Result ID for this request                                                                |
| achtoken     | Token that represents the bank account, used as `achtoken` on `BLACHSALE` / `BLACHREFUND` |
| ccvRec       | Base 64 Encoded String which holds the underlying CCV record                              |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*20",
    "achtoken": "9412345678901234",
    "ccvRec": "..."
}
```

<PageFooter />
