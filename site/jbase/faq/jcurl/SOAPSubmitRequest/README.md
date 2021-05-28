# SOAPSubmitRequest

<PageHeader />

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='soap' vertical='middle' />
<badge text='http' vertical='middle' />

Add a header to a given curlHandle for subsequent execution ([curlExec](./../curlExec/#heading)).

## Syntax

***result_code*** = **SOAPSubmitRequest**(***request_handle***, ***time_out***, ***respHeaders***, ***respData***, ***soapStatus***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***time_out*** | integer |time out for the request
***respHeaders*** | string |response headers
***respData*** | string |body result of the request
***soapStatus*** | dyn_array |status code and text

## Example

```
time_out = 5
rc = SOAPCreateRequest(url, soapAction, request_handle)
rc = SOAPSubmitRequest(request_handle, time_out, response_headers, response_data, soap_status)
```

see also [SOAPCreateRequest](./../SOAPCreateRequest/#heading)

Back to [jCurl.](./../README.md)

<PageFooter />
