# FTPPUT

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />

Sample ftp function that uses the [$ftp class](../ftpclass-jabba/#heading)

### FTPPUT.b

```
!
! @param url      - host
! @param user     - login
! @param passwd   - password
! @param paths    - AM delimited destination paths
! @param contents - AM delimited strings to upload; will receive error messages
! @param errors   - Any exception from the ftp class
! @param logging  - in/out (pass in true to enable and the result is passed back)
!
! @return 1 for success, 0 for failure
!
    FUNCTION FTPPUT(url, user, passwd, paths, contents, errors, logging)
    INCLUDE JBCFTPCOM.h
    errors = ''
!
! Upload the contents of "content" to the url/path
!
    IF logging THEN ftpobj->setLogging(@true)

    res = ftpobj->put(0, url, user, passwd, paths, contents)

    IF logging THEN
        logging = ftpobj->getLog()
    END

    IF res THEN errors = ftpobj->errors(@FALSE)
!
    RETURN NOT(res)
```