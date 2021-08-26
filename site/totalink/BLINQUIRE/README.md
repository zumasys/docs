# BLINQUIRE

<PageHeader />
This endpoint provides information on a given transaction through the provided invoice in the response

## POST Request Format

| Attribute | Description                                                                               | Required           |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service                                        | :heavy_check_mark: |
| entity    | This tells the api what databse to use for your transactions                              | :heavy_check_mark: |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/loction | :heavy_check_mark: |
| reg       | this identifies the POS station, user, termial or process requesting transaction          | :heavy_check_mark: |
| date      | Date of the request made to TotaLink                                                      |
| tran      | This is the sequential number for the REG requesting the transaction                      |
| invoice   | Invoice must be unique per card request in order to request Inquiry from `/blinquire`     | :heavy_check_mark: |
| debug     | If flag is set then error messages will be more verbose                                   |

## Sample Request

```Javascript
{
    "atoken": {{atoken}},
    "entity": {{entity}},
    "store": {{store}},
    "reg": {{reg}},
    "date": "",
    "tran": "",
    "invoice": "rc7823",
    "debug": {{debug}}
}
```

## Sample Response

| Attribute  | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| verified   | Flag will be set to 1 if call was successfull or 0 if it failed |
| errorCode  | Error Code                                                      |
| errMessage | Error Message                                                   |
| resultId   | This is the reqid of the transaction                            |
| ccvRec     | Base 64 Encoded String which holds the Token                    |
| signature  | Base 64 encoded GZIPPED BMP file                                |

```javascript
{
    "verified": "1",
    "errorCode": "",
    "errorMessage": "",
    "resultId": "1*19561*110*40666*1",
    "ccvRec": "NCoqKioqKioqMDA3Nv4xMjIy/v5QUFMzNzX+MTk0MjM3NzU4OTU1/v5FTkNSWVBURUT+Vv5WaXNh/v5B/v5bRDIwXSBDaGFyZ2UgQWNjZXB0ZWQu/v7+/v7+MSoxOTU2MSoxMTAqNDA2NjYqMf7+/v7+/v7+/v7+/jD+/v7+/v7+/lRSQU4tSU5R/jk0Nzg4NDg3MTg2NTAwNzb+Qk9MVP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+cmM3ODIz/kg0c0lDQUFBQUFBQy8xTkpSeTVDVFZBQTdNc3hFY0pBQUFEQmV6ZE1xaWlnb01kREZLQUJVUWhBQ2s2ZWhvS2VJaE5tdDcyNXkvVzJWTlc1T2xXdlVZOXFOS3BhUC8zYm5ETUFBQUFBZ0grMS9mQSs5M25IL1hndkFBQUFBSEFRN3dFQVB2MkN5MjRxQUFBPQ==",
    "signature": "H4sICAAAAAAC/1NJRy5CTVAA7MsxEcJAAADBezdMqiigoMdDFKABUQhACk6ehoKeIhNmt725y/W2VNW5OlWvUY9qNKpaP/3bnDMAAAAAgH+1/fA+93nH/XgvAAAAAHAQ7wEAPv2Cy24qAAA="
}
```
