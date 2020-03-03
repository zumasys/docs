# FTPPUTF

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />

Sample ftp function that uses the [$ftp class](../ftpclass-jabba/#heading)

## FTPPUTF.b

```
!
! @param url      - host
! @param user     - login
! @param passwd   - password
! @param paths    - AM delimited destination paths
! @param sources  - AM delimited source paths
! @param errors   - Any exception from the ftp class
! @param logging  - in/out (pass in true to enable and the result is passed back)
!
! @return 1 for success, 0 for failure
!
    FUNCTION FTPPUTF(url, user, passwd, paths, sources, errors, logging)
    INCLUDE JBCFTPCOM.h
    errors = ''
!
! Upload the contents of files from "sources" to the url/path

    IF logging THEN ftpobj->setLogging(@true)

    res = ftpobj->put(1, url, user, passwd, paths, sources)

    IF logging THEN
        logging = ftpobj->getLog()
    END

    IF res THEN errors = ftpobj->errors(@FALSE)

    RETURN NOT(res)
```

Back to [jftp.](./../README.md)
