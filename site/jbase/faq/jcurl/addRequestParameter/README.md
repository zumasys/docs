# addRequestParameter

<PageHeader />

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='http' vertical='middle' />

Add a parameter/value(s) to a given **$http** handle for subsequent execution ([submitRequest](../submitRequest/#heading)).

## Syntax

***result_code*** = **addRequestParameter**(***request_handle***, ***parameter_name***, ***parameter_value***, ***content_handling***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***parameter_name*** | string |the name of the parameter
***parameter_value*** | string |the value of the parameter
***content_handling*** | string |the MIME type

## Example

```
rc = createRequest(request_handle)
rc = addRequestParameter(request_handle, 'ZIP_CODE', '97035', '')
...
```

see also [createRequest](../createRequest/#heading)

Back to [jCurl.](./../README.md)

<PageFooter />
