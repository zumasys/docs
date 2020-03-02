# FTPGETF

**Tags:**
<badge text='curl' vertical='middle' />
<badge text='ftp' vertical='middle' />

Sample ftp function that uses the [$ftp class](../ftpclass-jabba/#heading)

### FTPGETF.b
```
!
! @param url      - host
! @param user     - login
! @param passwd   - password
! @param paths    - AM delimited source paths
! @param dests    - AM delimited destination paths
! @param errors   - Any exception from the ftp class
! @param logging  - in/out (pass in true to enable and the result is passed back)
!
! @return 1 for success, 0 for failure
!
    FUNCTION FTPGETF(url, user, passwd, paths, dests, errors, logging)
    INCLUDE JBCFTPCOM.h
    errors = ''
!
! Retrieves the contents of the file referenced by url/path
! and writes them to the corresponding dest
!
    IF UNASSIGNED(dests) THEN dests = ''
    IF LEN(dests) = '' THEN
        RETURN 'Destination argument not supplied'
    END
    
    IF logging THEN ftpobj->setLogging(@true)
        
    res = ftpobj->get(1, url, user, passwd, paths, dests)

    IF logging THEN
        logging = ftpobj->getLog()
    END

    IF res THEN errors = ftpobj->errors(@FALSE)

!
    RETURN NOT(res)
```