# setRequestContent

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='http' vertical='middle' />

Set the body content for an **$http** request.

## Synax:

***result_code*** = **setRequestContent**(***request_handle***, ***content***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***content*** | string |the data to submit in the request

## Example
```
rc = createRequest(request_handle)
content = 'some data'
rc = setRequestContent(request_handle, content)
...
```

see also [createRequest](../createRequest/#heading)