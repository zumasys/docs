# createRequest

Create an **$http** handle for subsequent http requests (see also [SOAPCreateRequest](../SOAPCreateRequest/#heading)).

## Synax:

***result_code*** = **createRequest**(***url***, ***http_method***, ***request_handle***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***url*** | string |the address for the http request
***http_method*** | string |standard **HTTP** request
***request_handle*** | var | an **$http** handle
***value*** | string |the value of the header

## Example
```
rc = createRequest(url, 'POST', request_handle)
...
```