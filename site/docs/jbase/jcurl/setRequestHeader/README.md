# setRequestHeader

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='http' vertical='middle' />

Add a header/value to the given **$http** request.

## Synax:

***result_code*** = **setRequestHeader**(***request_handle***, ***header_name***, ***header_value***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***header_name*** | string |the name of the header
***header_value*** | string |the value of the header

## Example
```
rc = createRequest(request_handle)
rc = setRequestHeader(request_handle, 'accept, '*/*')
...
```

see also [createRequest](../createRequest/#heading)