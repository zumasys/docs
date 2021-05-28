# jCURL

<PageHeader />

jCURL is a module that provides curl/http functionality in jBC (BASIC).

One of the advantages of using curl over other tcp/ip based operations is that when issuing multiple commands to the same host the connection will persist, thus improving overall performance.

It provides the following functions:

* [curlAddHeader](./curlAddHeader/README.md)
* [curlClose](./curlClose/README.md)
* [curlExec](./curlExec/README.md)
* [curlGetLog](./curlGetLog/README.md)
* [curlInit](./curlInit/README.md)
* [curlLastError](./curlLastError/README.md)
* [curlSetLogging](./curlSetLogging/README.md)
* [curlSetOpt](./curlSetOpt/README.md)
* [curlUseFile](./curlUseFile/README.md)
* [curlUseMemory](./curlUseMemory/README.md)
* [curlUseVar](./curlUseVar/README.md)

## Additional Helper Functions

These functions help facilitate simple http/SOAP requests (utilising jCURL underneath) using an **$http** (jabba) class.

* [addRequestParameter](./addRequestParameter/README.md)
* [createRequest](./createRequest/README.md)
* [setRequestContent](./setRequestContent/README.md)
* [setRequestHeader](./setRequestHeader/README.md)
* [submitRequest](./submitRequest/README.md)
* [SOAPCreateRequest](./SOAPCreateRequest/README.md)
* [SOAPSetRequestContent](./SOAPSetRequestContent/README.md)
* [SOAPSubmitRequest](./SOAPSubmitRequest/README.md)

For an in-depth example of jCURL: see [ftp example](./jftp/README.md)

## Sample Usage

```
    INCLUDE JBCCURL.h

    url = 'http://postman-echo.com/post'
    body = 'This is expected to be sent back as part of response body.'

    rc = curlInit(curlHandle)
    IF rc NE CURLE_OK THEN
        CRT 'Fatal error: curlInit failed to allocate handle'
        STOP
    END

    rc = curlSetOpt(curlHandle, CURLOPT_URL, url)
    IF rc NE CURLE_OK THEN GO failed ;! GO{TO}s used to simplify this example

    rc = curlSetOpt(curlHandle, CURLOPT_POSTFIELDS, body)
    IF rc NE CURLE_OK THEN GO failed

    rc = curlExec(curlHandle, result, header)
    IF rc NE CURLE_OK THEN GO failed
    CRT
    CRT 'result'
    CRT result
    CRT
    CRT 'header'
    CRT header

    STOP

failed:
    CRT curlLastError(curlHandle)
```

``` json
result
{"args":{},"data":"","files":{},"form":{"This is expected to be sent back as part of response body.":""},"header
s":{"x-forwarded-proto":"https","host":"postman-echo.com","content-length":"58","accept":"*/*","content-type":"a
pplication/x-www-form-urlencoded","x-forwarded-port":"80"},"json":{"This is expected to be sent back as part of
response body.":""},"url":"https://postman-echo.com/post"}
```

``` html
header
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Jan 2020 01:37:27 GMT
ETag: W/"18a-Ak6lIwL5JkKqxJspQwVUyloN4gM"
Server: nginx
set-cookie: sails.sid=s%3AgvDdJoMURB1V3XvFsnP9gCISUmWqUiGO.l9KwfYBW1rPJmqsKhRQtFM0gn4b4M2q1DEFnKhCXE1c; Path=/;
HttpOnly
Vary: Accept-Encoding
Content-Length: 394
Connection: keep-alive
```

[Back to FAQ](./../README.md)

<PageFooter />
