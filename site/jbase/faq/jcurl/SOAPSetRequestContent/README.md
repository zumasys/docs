# SOAPSetRequestContent

<PageHeader />

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='soap' vertical='middle' />
<badge text='http' vertical='middle' />

Set the content for a SOAP request (**$http** handle).

## Syntax

***result_code*** = **SOAPSetRequestContent**(***request_handle***, ***reqDoc***, ***stringFlag***)

where:

| Variable | Type | Description |
|--|--|--|
***result_code*** | integer |an integer result code (0 for success)
***request_handle*** | var | an **$http** handle
***reqDoc*** | string |string content or name of a file
***stringFlag*** | integer |**0** = ***reqDoc*** is a file; **1** = ***reqDoc*** is data

## Example

```
rc = SOAPCreateRequest(url, soapAction, request_handle)
xml_data = '<?xml version="1.0" encoding="utf-8"?>'
xml_data := '<soapenv:Envelope xmlns:q0="':NameSpace:'" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xml_data := '<soapenv:Body>'
xml_data := '<q0:':Action:'>'
xml_data := '<q0:':NodeName:'>'
xml_data := XML.IN
xml_data := '</q0:':NodeName:'>'
xml_data := '</q0:':Action:'>'
xml_data := '</soapenv:Body>'
xml_data := '</soapenv:Envelope>'

rc = SOAPSetRequestContent(request_handle, xml_data, 1)
...
```

see also [SOAPCreateRequest](./../SOAPCreateRequest/#heading)

Back to [jCurl.](./../README.md)

<PageFooter />
