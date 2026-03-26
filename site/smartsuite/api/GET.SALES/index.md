# GET.SALES

<PageHeader />
This endpoint retrieves Sales Detail as a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service and dictate which sales and fields will be returned                                                            | :heavy_check_mark: |
| entity    | This tells the api what database to use                                                                                                                               | :heavy_check_mark: |
| debug     | If flag is set then error messages will be more verbose. Also used for internal testing                                                                               |                    |

## Example Request

```javascript
{
    "atoken" : "atoken",
    "entity" : "entity",
    "debug"  : "0"
}
```

## Example Response

| Attribute     | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| store         | Store Number                                                   |
| date          | Date  (mm/dd/yy)                                               |
| reg           | Register Number                                                |
| tran          | Transaction Number                                             |
| sku           | Internal Inventory Number                                      |
| qty           | Quantity                                                       |
| net.rtl.price | Retail Price                                                   |
| serial        | Serial Number                                                  |
| dep           | DEP ID                                                         |

```Javascript
{
    "sales": [
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2959",
            "sku": "2029145",
            "qty": "1",
            "net.rtl.price": "300",
            "serial": "T1",
            "dep": "FSDFSD",
        },
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2959",
            "sku": "2029145",
            "qty": "1",
            "net.rtl.price": "300",
            "serial": "T2",
            "dep": "FSDFSD",
        },
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2979",
            "sku": "2029145",
            "qty": "1",
            "net.rtl.price": "300",
            "serial": "T1",
            "dep": "FSDFSD",
        },
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2982",
            "sku": "2029145",
            "qty": "1",
            "net.rtl.price": "300",
            "serial": "T2",
            "dep": "DEPID123XYZ",
        },
    ]
}
```
<PageFooter />
