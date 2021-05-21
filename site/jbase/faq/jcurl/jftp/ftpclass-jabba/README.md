# $ftp class

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />
<badge text='jabba' vertical='middle' />

This is a sample class that uses [jCURL](../../../jcurl) extensively to provide FTP functionality to jBC.

> see also [FTPGET](../FTPGET/#heading), [FTPPUT](../FTPPUT/#heading), [FTPGETF](../FTPGETF/#heading), [FTPPUTF](../FTPPUTF/#heading)

## ftpclass.jabba

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

Back to [jftp.](./../README.md)

  
<PageFooter />
