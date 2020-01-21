# jCURL

jCURL is a module that provides curl/http functionality in jBC (BASIC). 

One of the advantages of using curl over other tcp/ip based operations is that when issuing multiple commands to the same host the connection will persist thus improving overall performance.

It provides the following functions:

* [curlAddHeader](./curlAddHeader)
* [curlClose](./curlClose)
* [curlExec](./curlExec)
* [curlGetLog](./curlGetLog)
* [curlInit](./curlInit)
* [curlLastError](./curlLastError)
* [curlSetLogging](./curlSetLogging)
* [curlSetOpt](./curlSetOpt)
* [curlUseFile](./curlUseFile)
* [curlUseMemory](./curlUseMemory)
* [curlUseVar](./curlUseVar)

### Additional Helper Functions
These functions help facilitate simple http/SOAP requests (utilising jCURL underneath) using an **$http** (jabba) class.

* [addRequestParameter](./addRequestParameter)
* [createRequest](./createRequest)
* [setRequestContent](./setRequestContent)
* [setRequestHeader](./setRequestHeader)
* [submitRequest](./submitRequest)
* [SOAPCreateRequest](./SOAPCreateRequest)
* [SOAPSetRequestContent](./SOAPSetRequestContent)
* [SOAPSubmitRequest](./SOAPSubmitRequest)

## Sample Usage

```
    INCLUDE JBCCURL.h

    url = 'http://postman-echo.com/post'
    body = 'This is expected to be sent back as part of response body.'

    rc = curlInit(curlHandle)
    IF rc NE CURLE_OK THEN GO failed ;! GO{TO}s used to simplify this example

    rc = curlSetOpt(curlHandle, CURLOPT_URL, url)
    IF rc NE CURLE_OK THEN GO failed

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

```
result
{"args":{},"data":"","files":{},"form":{"This is expected to be sent back as part of response body.":""},"header
s":{"x-forwarded-proto":"https","host":"postman-echo.com","content-length":"58","accept":"*/*","content-type":"a
pplication/x-www-form-urlencoded","x-forwarded-port":"80"},"json":{"This is expected to be sent back as part of
response body.":""},"url":"https://postman-echo.com/post"}

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

## Indepth Example

The following is a jabba class that makes extensive use of the jCURL APIs.

### ftpclass.jabba
```
INCLUDE JBCCURL.h
INCLUDE JBC.h

!
! =====================
! $ftp methods
! =====================
!
! Constructor
!
! Establishes a curlHandle
!
! =====================
!
method $ftp::$ftp()
    rc = curlInit(curlHandle)
    this->curlHandle = curlHandle
    this->exception = new array
end method
!
! ======================
!
! Destructor
!
! ======================
!
method $ftp::~$ftp()
    rc = curlClose(this->curlHandle)
end method
!
! ======================
!
! Logging
! pass in 1 (@true) to enable logging
!         0 (@false) to disable
!
! ======================
!
method $ftp::setLogging(toggle)
    rc = curlSetLogging(this->curlHandle, toggle, '')
end method
!
! Get the current log
! (returns and clears the log)
!
! ======================
!
method $ftp::getLog()
    return curlGetLog(this->curlHandle)
end method
!
! ======================
!
! PARSE host (internal) method
!
! ======================
!
method $ftp::$parse(host)
    if not(index(host, '://',1)) then
        host = 'ftp://':host
    end
    return host
end method
!
! ======================
!
! GET method
!
! options<1> = 1 if writing to dir/file
!        <2> = mode (options to append to 'w' on writing)
! host       = url
! user       = user/login for host
! pass       = password for user
! paths      = AM delimited paths
! results    = AM delimited results
!
! ======================
!
method $ftp::get(options, host, user, pass, paths, results)
    curlHandle = this->curlHandle
    result = ''
    this->exception = new array
    usrpass = user:':':pass
    download = ''
    type = options<1>
    mode = options<2>
    host = this->$parse(host)
    this->$initGetPut(usrpass)
    if (type EQ 1) then
        destdir = results<1>
        open destdir to f.destdir then
            res = ''
            rc = ioctl(f.destdir, JIOCTL_COMMAND_FILESTATUS, res)
            if res<1> NE 'UD' then destdir = ''
        end else destdir = ''
    end
!
    fc = DCOUNT(paths, @AM)
    if fc eq 0 then
        this->exception->$append('Error: missing source path(s)')
        return -1
    end
    for f = 1 to fc
        url = host:'/':paths<f>
        dest = results<f>
        path = paths<f>
        if (type EQ 1) then
            if destdir NE '' then
                result = destdir:DIR_DELIM_CH:field(path, DIR_DELIM_CH, dcount(path, DIR_DELIM_CH))
            end else
                result = result<f>
                if result EQ '' then
                    this->exception->$append('Error: missing target file for ':path)
                    continue
                end
            end
            rc = curlUseFile(curlHandle, result, 'w':mode)
        end
        // First set the URL, the target file
        rc = curlSetOpt(curlHandle, CURLOPT_URL, url)

        // Perform the request, res will get the return code
        header = ''
        rc = curlExec(curlHandle, result, header)

        // Check for errors
        if(rc NE CURLE_OK) then
            this->exception->$append('Error processing ':path:' - ':curlLastError(curlHandle))
        end else
            if (type EQ 0) then
                if (mode NE 'b') then
                    convert @LF to @AM in result
                    result = trim(result, @AM, 'T')
                end
                results<-1> = lower(result)
            end
        end
    next f
    return this->exception->$size()
end method
!
! ======================
!
! PUT method
!
! options<1> = 1 if reading from dir/file
!        <2> = mode (options to append to 'r' on reading the source)
! host       = url
! user       = user/login for host
! pass       = password for user
! paths      = AM delimited paths
! contents   = AM delimited data to send
!
! ======================
!
method $ftp::put(options, host, user, pass, paths, contents)
!
! type - 1 contents is a series of paths
!      - 0 contents is dynarray of records
!
    curlHandle = this->curlHandle
    this->exception = new array
    usrpass = user:':':pass
    upload = ''
    type = options<1>
    mode = options<2>
    host = this->$parse(host)
    this->$initGetPut(usrpass)
    // First set the URL, the target file
    rc = curlSetOpt(curlHandle, CURLOPT_URL, host)
    fc = DCOUNT(paths, @AM)
    if fc eq 0 then
        this->exception->$append('Error: missing destination path(s)')
        return 1
    end
    for f = 1 to fc
        url = host:'/':paths<f>
        content = contents<f>
        if (type EQ 1) then
            rc = curlUseFile(curlHandle, content, 'r':mode)
        end

        // Perform the request, res will get the return code
        header = ''
        rc = curlExec(curlHandle, result, header)

        // Check for errors
        if(rc NE CURLE_OK) then
            this->exception->$append(curlLastError(curlHandle))
        end
    next f
    return this->exception->$size()
end method
!
! ======================
!
! errors method
!
! json (boolean) to return in json format
!
! returns the current exceptions from previous calls
!
! ======================
!
method $ftp::errors(json)
    if json then
        return this->exception->$tojson()
    end else
        errs = ''
        iter = new object('$iterator', this->exception)
        nextkey = ''; nextvalue = ''; nexttype = ''
        loop while iter->next(nextkey , nextvalue , nexttype) do
            errs<-1> =nextvalue
        repeat
        return errs
    end
end method
!
! ======================
!
! $initGetPut (internal) method
!
! user_pass  = user/login:password
!
! Sets the user/password for connecting to host
! Sets the libcurl useragent property
! ======================
!

method $ftp::$initGetPut(user_pass)
    curlHandle = this->curlHandle
    // User and password for the FTP login
    rc = curlSetOpt(curlHandle, CURLOPT_USERPWD, user_pass);

    // some servers don't like requests that are made
    // without a user-agent field, so we provide one
    rc = curlSetOpt(curlHandle, CURLOPT_USERAGENT, 'libcurl-agent/1.0');
end method
```