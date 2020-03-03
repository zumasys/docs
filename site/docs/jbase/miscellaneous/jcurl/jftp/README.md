# FTP example using jCURL

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />

The following links provide source code to a working {S}FTP functions utilising jCURL.

* [FTPPUT](ftpput)
* [FTPGET](ftpget)
* [FTPPUTF](ftpputf)
* [FTPGETF](ftpgetf)

Each are based on the [$ftp class](ftpclass-jabba/#heading) which makes extensive use of the jCURL api.

To build these utilities you will also need the following includes:

### JBCFTP.h

```
DEFFUN FTPGET()
DEFFUN FTPGETF()
DEFFUN FTPPUT()
DEFFUN FTPPUTF()
DEFFUN FTPSTATUS()
```

### JBCFTPCOM.h

```
$option jabba
    COMMON /JBCFTP/ ftpobj
    IF UNASSIGNED(ftpobj) THEN ftbobj = 0
    IF NOT(ftpobj->$isobject()) THEN ftpobj = new object("$ftp")
```

You may also need to set the environment variable
> JBC_INCLUDE_PATH

to the directory where you place these two includes.

e.g.

```
export JBC_INCLUDE_PATH=/dbms/global/INCLUDE

set JBC_INCLUDE_PATH=c:\dbms\global\INCLUDE
```

## Example use

TESTFTP.b

```
    INCLUDE JBCFTP.h

    user = 'ftpuser'
    passwd = 'z00mpa$$'
    url = 'sftp://':user:'@localhost'

    PROMPT '?'
    CRT 'Enter a string to send':
    INPUT content

    paths = ''
    path = 'upload/content%d.txt'
    contents = ''

    FOR f = 1 TO 3
        paths<f> = CHANGE(path, '%d', f)
        contents<f> = CHANGE(content, '%d', f)
    NEXT f

    logging = @TRUE

    rc = FTPPUT(url, user, passwd, paths, contents, errors, logging)

    IF NOT(rc) THEN 
        CRT 'Errors occurred:'
        CRT errors
    END

    CRT 'FTPPUT Log:'
    CRT logging

    logging = @TRUE

    rc = FTPGET(url, user, passwd, paths<3>, result, errors, logging)

    IF NOT(rc) THEN 
        CRT 'Errors occurred:'
        CRT errors
    END

    CRT 'FTPGET Log:'
    CRT logging

    dest = 'upload/fupload.txt'
    source = '/upload/putupload.txt'

    logging = @TRUE

    rc = FTPPUTF(url, user, passwd, dest, source, errors, logging)

    IF NOT(rc) THEN 
        CRT 'Errors occurred:'
        CRT errors
    END

    CRT 'FTPPUTF Log:'
    CRT logging

    logging = @TRUE

    rc = FTPGETF(url, user, passwd, source, dest, errors, logging)

    IF NOT(rc) THEN 
        CRT 'Errors occurred:'
        CRT errors
    END

    CRT 'FTPGETF Log:'
    CRT logging
```

Back to [jCurl.](./../README.md)
