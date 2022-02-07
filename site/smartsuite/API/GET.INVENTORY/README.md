# GET.INVENTORY

<PageHeader />
This endpoint retrieves Inventory Detail as a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service and dictate what inventory and fields will be returned                                                            | :heavy_check_mark: |
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

| Attribute  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| id         | Internal Inventory ID                                          |
| status     | Status Code                                                    |
| desc       | Description                                                    |
| mfgr       | Manufacturer Internal Number                                   |
| style      | Style Code                                                     |
| color      | Color Code                                                     |
| size       | Size Code                                                      |
| rtl.price  | Retail Unit Price                                              |
| taxable    | Taxable Flag                                                   |
| vendors    | Vendor Array                                                   |
| vend.id    | Internal Vendor ID                                             |
| vend.cat   | Vendor Catalog Number                                          |
| vend.list  | Vendor Suggested List Price                                    |
| vend.cost  | Vendor Cost                                                    |
| class      | Class Code                                                     |
| qoh        | Quantity On Hand                                               |
| serial     | Serial Number Array                                            |

```Javascript
{
    "inventory": [
        {
            "id": "1*103179200301",
            "status": "A",
            "desc": "MATRIX WITH SERIAL NUMBERS",
            "mfgr": "445",
            "style": "",
            "color": "RED",
            "size": "MD",
            "rtl.price": "2195",
            "taxable": "",
            "vendors": [
                {
                    "vend.id": "445",
                    "vend.cat": "",
                    "vend.list": "1995",
                    "vend.cost": "113500",
                },
            ],
            "class": "401",
            "qoh": "5",
            "serial": [
                "X1",
                "X2",
                "X3",
                "TEST333",
                "TEST334",
            ],
        },
        {
            "id": "1*103179200302",
            "status": "A",
            "desc": "MATRIX WITH SERIAL NUMBERS",
            "mfgr": "445",
            "style": "",
            "color": "RED",
            "size": "LG",
            "rtl.price": "2195",
            "taxable": "",
            "vendors": [
                {
                    "vend.id": "445",
                    "vend.cat": "",
                    "vend.list": "1995",
                    "vend.cost": "113500",
                },
            ],
            "class": "401",
            "qoh": "5",
            "serial": [
                "T3",
                "TEST211",
                "TEST212",
                "TEST213",
                "TEST344",
            ],
        },
    ]
}
```
<PageFooter />
