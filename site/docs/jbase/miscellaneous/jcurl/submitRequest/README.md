# submitRequest

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='http' vertical='middle' />

Submit an request for a given **$http** handle.

## Synax:

***result_code*** = **submitRequest**(***request_handle***, ***time_out***, ***post_data***, ***response_headers***, ***response_data***, ***http_status***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***time_out*** | integer |time out for the request
***post_data*** | string |data to submit
***response_headers*** | string |response headers
***response_data*** | string |body result of the request
***http_status*** | dyn_array |http status code and text

## Example

```
time_out = 5
post_data = 'something to post'
rc = createRequest(request_handle)
rc = submitRequest(request_handle, time_out, post_data, response_headers, response_data, http_status)
...
```

see also [createRequest](../createRequest/#heading)

Back to [jCurl.](./../README.md)
