# BLIFRAME

<PageHeader />

This endpoint serves an HTML page to capture credit card information.

Store information should be placed in the query parameters as shown below

## Query String Parameters

| Attribute | Description                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| store     | The unique assignment for you location(s) Merchant accounts are assigned by store/location                     |
| reg       | this identifies the POS station, user, terminal or process requesting                                          |
| date      | Date of the request made to Rover Pay                                                                         |
| tran      | If error occurred will be empty, otherwise will hold the reqID that can be used for the BLTOKENREFUND endpoint |
| entity    | This tells the api what database to use for your transactions                                                  |
| addr      | address                                                                                                       |
| zip       | zip code                                                                                                      |

## Example URL

`https://test-gateway.total-computing.com/api/bliframe?store=<store>&reg=<reg>&date=<date>&tran=<tran>&entity=<entity>&addr=<addr>&zip=<zip>`
