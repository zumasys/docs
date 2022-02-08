# GET.MODS

<PageHeader />
This endpoint retrieves Modified Sales Detail as a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service and dictate which modified sales and fields will be returned                                                            | :heavy_check_mark: |
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
| old.serial    | Old Serial Number                                              |
| new.serial    | New Serial Number                                              |
| dep           | DEP ID                                                         |

```Javascript
{
    "refunds": [
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2961",
            "sku": "2029145",
            "qty": "-1",
            "net.rtl.price": "-300",
            "old.serial": "T1",
            "new.serial": "TEST1",
            "dep": "FSDFSD",
        },
        {
            "store": "1",
            "date": "11/09/21",
            "reg": "888",
            "tran": "2961",
            "sku": "2029145",
            "qty": "-1",
            "net.rtl.price": "-300",
            "old.serial": "T2",
            "new.serial": "TEST2",
            "dep": "FSDFSD",
        },
    ]
}
```
<PageFooter />
