# BLSIGNATURE

This endpoint is used to request a signature capture from the POS Bolt device.

## POST Request Attributes

| Attribute | Description                                                                               | Required           |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                        | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                              | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction          | :heavy_check_mark: |
| date      | Date of the request made to TotaLink                                                      |
| tran      | This is the sequential number for the REG requesting the transaction                      |
| invoice   | Invoice must be unique per card request in order to request Inquiry from blinquire        |
| debug     | If flag is set then error messages will be more verbose                                   |

## Example Request

```javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "",
    "invoice": "",
    "debug": {{debug}}
}
```

## Example Response

| Attribute  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was succesfull or 0 if it failed |
| errorCode  | Error Code                                                     |
| errMessage | Error Message                                                  |
| resultId   | This is the reqid  for the transaction                         |
| ccvRec     | Base 64 Encoded String which holds the Token                   |
| signature  | Base 64 encode GZIPPED BMP FILE                                |

```Javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19562*110*40954*1",
    "ccvRec": "/v7+SU5HLVNJR05BVFVSRf7+/kVOQ1JZUFRFRP7+/kJM/kH+/ltEMjBdIENoYXJnZSBBY2NlcHRlZC7+/v7+/v4xKjE5NTYyKjExMCo0MDk1NCox/v7+/v7+/v7+/v7+MP7+/v7+/v7+SU5HLVNJR05BVFVSRf7+Qk9MVP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdOQ2hEY0pRQUVYUit4ZEJOeWdtUU5SM0ZjSndETVFrL1JnRXZvWTA1OWlYYTk2NlBhNVZkYStXNmozcVZZMUdWYmZ2L212T0dRQUFBQUIvNkhLZzNRKzBUOWNEQUFBQUFNQlpmUVlBQk92QjAyNHFBQUE9",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7NChDcJQAEXR+xdBNygmQNR3FcJwDMQk/RgEvoY059iXa966Pa5Vda+W6j3qVY1GVbfv/mvOGQAAAAB/6HKg3Q+0T9cDAAAAAMBZfQYABOvB024qAAA="
}
```
