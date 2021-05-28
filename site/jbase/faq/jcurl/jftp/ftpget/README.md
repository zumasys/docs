# FTPGET

<PageHeader />

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />

Sample ftp function that uses the [$ftp class](../ftpclass-jabba/#heading)

## FTPGET.b

```
!
! @param url      - host
! @param user     - login
! @param passwd   - password
! @param paths    - AM delimited destination paths
! @param results  - AM delimited strings to receive
! @param errors   - Any exception from the ftp class
! @param logging  - in/out (pass in true to enable and the result is passed back)
!
! @return 1 for success, 0 for failure
!
    FUNCTION FTPGET(url, user, passwd, paths, results, errors, logging)
    INCLUDE JBCFTPCOM.h
    errors = ''
!
! Retrieves the contents of the file referenced by url/path
!
    IF logging THEN ftpobj->setLogging(@true)

    results = ''
    res = ftpobj->get(0, url, user, passwd, paths, results)

    IF logging THEN
        logging = ftpobj->getLog()
    END

    IF res THEN errors = ftpobj->errors(@FALSE)
!
    RETURN NOT(res)
```

Back to [jftp.](./../README.md)

<PageFooter />
