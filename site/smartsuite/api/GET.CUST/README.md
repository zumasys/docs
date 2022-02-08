# GET.CUST

<PageHeader />
This endpoint retrieves Customer Detail as a JSON encoded repsonse.

## POST Request Attributes

| Attribute | Description                                                                                                                                                           | Required           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| atoken    | Authorization token to allow access to the service and dictate which customers and fields will be returned                                                            | :heavy_check_mark: |
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

| Attribute    | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| id           | Internal Customer ID                                           |
| lname        | Last Name                                                      |
| fname        | First Name                                                     |
| addr         | Address Array (two lines)                                      |
| city         | City                                                           |
| state        | State                                                          |
| zip          | Postal Code                                                    |
| country      | Country                                                        |
| day.phone    | Daytime Phone Number                                           |
| night.phone  | Nighttime Phone Number                                         |
| ship.name    | Shipping Name                                                  |
| ship.addr    | Shipping Address Array (two lines)                             |
| ship.city    | Shipping City                                                  |
| ship.state   | Shipping State                                                 |
| ship.zip     | Shipping Postal Code                                           |
| ship.country | Shipping Country                                               |
| status       | Status Code  (null, Active, Inactive, Deletable)               |
| email        | Email Address                                                  |
| type         | Customer Type                                                  |
| dep.id       | DEP ID                                                         |

```Javascript
{
    "customers": [
        {
            "id": "cust1",
            "lname": "One",
            "fname": "Customer",
            "addr": [
                "Address Line 1",
                "Address Line 2",
            ],
            "city": "CITY",
            "state": "ST",
            "zip": "12345",
            "country": "US",
            "day.phone": "800-800-1234",
            "night.phone": "800-800-1234",
            "ship.name": "Customer One",
            "ship.addr": [
                "Address Line 1",
                "Address Line 2",
            ],
            "ship.city": "CITY",
            "ship.state": "ST",
            "ship.zip": "12345",
            "ship.country": "US",
            "status": "",
            "email": "custone@email.address.com",
            "type": "A",
            "depid": "123456",
        },
        {
            "id": "cust2",
            "lname": "Two",
            "fname": "Customer",
            "addr": [
                "Address Line 1",
                "Address Line 2",
            ],
            "city": "CITY",
            "state": "ST",
            "zip": "12345",
            "country": "US",
            "day.phone": "800-800-1234",
            "night.phone": "800-800-1234",
            "ship.name": "Customer Two",
            "ship.addr": [
                "Address Line 1",
                "Address Line 2",
            ],
            "ship.city": "CITY",
            "ship.state": "ST",
            "ship.zip": "12345",
            "ship.country": "US",
            "status": "",
            "email": "custtwo@email.address.com",
            "type": "A",
            "depid": "789012",
        },
    ]
}
```
<PageFooter />
