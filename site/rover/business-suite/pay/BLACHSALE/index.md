# BLACHSALE

<PageHeader />

The `BLACHSALE` endpoint captures an ACH payment. The bank account can be identified either by an `achtoken` previously returned from [BLACHTOKENIZE](../BLACHTOKENIZE/index.md) or by supplying the raw `achroute` and `achaccount` values directly.

## POST Request Attributes

| Attribute  | Description                                                                                     | Required           |
| ---------- | ----------------------------------------------------------------------------------------------- | ------------------ |
| atoken     | Authorization token to allow access to the service                                              | :heavy_check_mark: |
| entity     | This tells the api what database to use for your transactions                                   | :heavy_check_mark: |
| store      | The unique assignment for your location(s) Merchant accounts are assigned by store/location     | :heavy_check_mark: |
| reg        | This identifies the POS station, user, terminal or process requesting the transaction           | :heavy_check_mark: |
| date       | Date of the request made to Rover Pay                                                           |                    |
| tran       | This is the sequential number for the REG requesting the transaction                            |                    |
| invoice    | Invoice must be unique per request in order to request Inquiry from `BLINQUIRE`                 |                    |
| amount     | Amount to be debited with two implied decimal places (example: to specify "$10.00," use "1000") | :heavy_check_mark: |
| achtype    | Account type: `ECHK` for checking or `ESAV` for savings                                         | :heavy_check_mark: |
| achtoken   | Token returned by `BLACHTOKENIZE`. Supply this _or_ both `achroute` and `achaccount`            |                    |
| achroute   | Bank routing / ABA number (required when `achtoken` is not supplied)                            |                    |
| achaccount | Bank account number (required when `achtoken` is not supplied)                                  |                    |
| avs        | Optional AVS object: `name`, `addr`, `addr2`, `city`, `state`, `zip`                            |                    |
| debug      | If flag is set then error messages will be more verbose                                         |                    |

## Example Request

``` javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "rc783",
    "invoice": "rc7831",
    "amount": "2500",
    "achtype": "ECHK",
    "achtoken": "9412345678901234",
    "avs": {
        "name": "Jane Doe",
        "addr": "123 Main St",
        "addr2": "",
        "city": "Irvine",
        "state": "CA",
        "zip": "92614"
    },
    "debug": {{debug}}
}
```

## Example Response

| Attribute    | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| verified     | Flag will be set to 1 if call was successful or 0 if it failed                            |
| errorCode    | Error Code, empty if call was successful                                                  |
| errorMessage | Error Message, empty if call was successful                                               |
| resultId     | Result ID that can be used as the `reqid` field in `BLACHREFUND`                          |
| auth         | Authorization code returned by the processor                                              |
| reference    | Authorization reference returned by the processor                                         |
| cardType     | Account / card type code                                                                  |
| cardDesc     | Account / card type description                                                           |
| achtoken     | Bank account token (returned even when raw routing/account were supplied)                 |
| name         | Account holder name (echoed from `avs.name`, falling back to the stored CCV record value) |
| avsCode      | AVS response code from the processor                                                      |
| ccvRec       | Base 64 Encoded String which holds the underlying CCV record                              |

``` javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*rc783*21",
    "auth": "AUTH1234",
    "reference": "REF5678",
    "cardType": "ECHK",
    "cardDesc": "Checking",
    "achtoken": "9412345678901234",
    "name": "Jane Doe",
    "avsCode": "Y",
    "ccvRec": "..."
}
```

<PageFooter />
