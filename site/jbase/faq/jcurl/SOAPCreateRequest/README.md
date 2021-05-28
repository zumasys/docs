# SOAPCreateRequest

<PageHeader />

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='soap' vertical='middle' />
<badge text='http' vertical='middle' />

Create an **$http** handle (see also [createRequest](./../createRequest/#heading)) using the [jCURL](./../README.md) module.

The **SOAPCreateRequest** function is basically a wrapper to **createRequest**, but additionally sets some header values in preparation for making ***SOAP*** requests.

## Syntax

***result_code*** = **SOAPCreateRequest**(***url***, ***soapAction***, ***request_handle***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***url*** | string |the address for the SOAP request
***soapAction*** | string |the SOAP action to be performed
***request_handle*** | var | an **$http** handle

## Example

```
rc = SOAPCreateRequest(url, soapAction, request_handle)
```

Back to [jCurl.](./../README.md)

<PageFooter />
