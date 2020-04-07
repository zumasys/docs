# JException (jrclient API)

<PageHeader />

## Class JException

All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io")

``` java
public final class JException
extends Exception
```

Represents an exception thrown by all JClient classes
See Also:[Serialized Form](300698-untitled-question)

## Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| protected static String[] | errComm  |
| protected static String[] | errEncryption  |
| protected static String[] | errLicensing  |
| protected static String[] | errOS  |
| protected static String[] | errParm  |
| protected static String[] | errServer  |
| protected static String[] | errXML  |
| static int | JE\_AUTH\_OPEN\_TIMEOUT  |
| static int | JE\_AUTHENTICATION\_FAILURE  |
| static int | JE\_BAD\_USERNAME\_OR\_PASSWORD  |
| static int | JE\_CAPTURE\_EXHAUSTED  |
| static int | JE\_CAPTURE\_STORE\_FAILURE  |
| static int | JE\_CLEAR\_FILE\_FAILED  |
| static int | JE\_COMMON\_ATTACH\_FAILURE  |
| static int | JE\_COMMON\_VAR\_TYPE\_MISMATCH  |
| static int | JE\_CONN\_ALREADY\_ACTIVE  |
| static int | JE\_CONN\_CLOSED\_BY\_HOST  |
| static int | JE\_CONN\_FAILURE  |
| static int | JE\_CONN\_NOT\_ACTIVE  |
| static int | JE\_ERROR\_PARSING\_CONFIG  |
| static int | JE\_FILE\_NOT\_OPENED  |
| static int | JE\_FILE\_OR\_INDEX\_INACCESSIBLE  |
| static int | JE\_INDEX\_NOT\_OPENED  |
| static int | JE\_INVALID\_ATTRIBUTE\_NUMBER  |
| static int | JE\_INVALID\_DATA\_BLOCK\_LENGTH  |
| static int | JE\_INVALID\_ENC\_OPTION\_COMBINATION  |
| static int | JE\_INVALID\_FIELD\_NUMBER  |
| static int | JE\_INVALID\_FUNCTION\_CALL  |
| static int | JE\_INVALID\_HANDLE  |
| static int | JE\_INVALID\_KEY\_LENGTH  |
| static int | JE\_INVALID\_NUMBER\_OF\_PARMS  |
| static int | JE\_INVALID\_PARM  |
| static int | JE\_INVALID\_PARM\_FORMAT  |
| static int | JE\_INVALID\_TIMEOUT  |
| static int | JE\_KEY\_AGREEMENT\_FAILED  |
| static int | JE\_LIC\_EXPIRED  |
| static int | JE\_LIC\_LIMIT\_EXCEEDED  |
| static int | JE\_LIST\_EXHAUSTED  |
| static int | JE\_LIST\_NOT\_FOUND  |
| static int | JE\_LIST\_SAVE\_FAILURE  |
| static int | JE\_NOT\_IMPLEMENTED  |
| static int | JE\_OBJECT\_ALREADY\_RELEASED  |
| static int | JE\_OS\_FORK\_FAILURE  |
| static int | JE\_OS\_SHMEM\_ATTACH\_FAILURE  |
| static int | JE\_OS\_SHMEM\_CREATE\_FAILURE  |
| static int | JE\_OS\_SHMEM\_NOT\_ATTACHED  |
| static int | JE\_OS\_THREAD\_CREATE\_FAILURE  |
| static int | JE\_OUT\_OF\_MEMORY  |
| static int | JE\_PARM\_ENC\_REQUIRED  |
| static int | JE\_PARM\_TOO\_LONG  |
| static int | JE\_PARSE\_INIT\_FAILURE  |
| static int | JE\_PARSE\_INVALID\_BYTE\_ORDER  |
| static int | JE\_PARSE\_INVALID\_ENCODING  |
| static int | JE\_PARSE\_INVALID\_REPLY\_FORMAT  |
| static int | JE\_PARSE\_INVALID\_REQUEST\_FORMAT  |
| static int | JE\_PARSE\_INVALID\_REQUEST\_TYPE  |
| static int | JE\_PARSE\_MISSING\_REQUEST\_TYPE  |
| static int | JE\_READ\_FAILURE  |
| static int | JE\_RECORD\_ALREADY\_LOCKED  |
| static int | JE\_RECORD\_NOT\_FOUND  |
| static int | JE\_RECORD\_NOT\_LOCKED  |
| static int | JE\_REQUEST\_DENIED  |
| static int | JE\_REQUEST\_INVALID  |
| static int | JE\_REQUEST\_TIMED\_OUT  |
| static int | JE\_SELECT\_FAILED  |
| static int | JE\_SERVER\_DATA\_ENC\_REQUIRED  |
| static int | JE\_SERVER\_ENC\_NOT\_SUPPORTED  |
| static int | JE\_SERVER\_INIT\_FAILURE  |
| static int | JE\_SERVER\_PASSWORD\_ENC\_REQUIRED  |
| static int | JE\_SOCKET\_ACCEPT\_FAILURE  |
| static int | JE\_SOCKET\_CREATE\_FAILURE  |
| static int | JE\_SOCKET\_DUP\_FAILURE  |
| static int | JE\_SOCKET\_LISTEN\_FAILURE  |
| static int | JE\_SOCKET\_NONBLOCK\_FAILURE  |
| static int | JE\_SOCKET\_READ\_FAILURE  |
| static int | JE\_SOCKET\_WAIT\_FAILURE  |
| static int | JE\_SOCKET\_WRITE\_FAILURE  |
| static int | JE\_SUB\_NOT\_FOUND  |
| static int | JE\_TRANSACTION\_NOT\_ABORTED  |
| static int | JE\_TRANSACTION\_NOT\_FINISHED  |
| static int | JE\_VALUE\_UNAVAILABLE  |
| static int | JE\_WRITE\_FAILURE  |

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JException(int code, String message) |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| int | getCode() |
| String | getMessage() |
| protected static void | throwWithCode(int code) |

## Methods inherited from class java.lang.Throwable

`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

## Methods inherited from class java.lang.Object

`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

### Field Detail

#### JE\_INVALID\_HANDLE

``` java
public static final int JE_INVALID_HANDLE
```

#### JE\_INVALID\_NUMBER\_OF\_PARMS

``` java
public static final int JE_INVALID_NUMBER_OF_PARMS
```

#### JE\_INVALID\_FUNCTION\_CALL

``` java
public static final int JE_INVALID_FUNCTION_CALL
```

#### JE\_OUT\_OF\_MEMORY

``` java
public static final int JE_OUT_OF_MEMORY
```

#### JE\_INVALID\_PARM\_FORMAT

``` java
public static final int JE_INVALID_PARM_FORMAT
```

#### JE\_LIST\_NOT\_FOUND

``` java
public static final int JE_LIST_NOT_FOUND
```

#### JE\_TRANSACTION\_NOT\_FINISHED

``` java
public static final int JE_TRANSACTION_NOT_FINISHED
```

#### JE\_TRANSACTION\_NOT\_ABORTED

``` java
public static final int JE_TRANSACTION_NOT_ABORTED
```

#### JE\_FILE\_NOT\_OPENED

``` java
public static final int JE_FILE_NOT_OPENED
```

#### JE\_CLEAR\_FILE\_FAILED

``` java
public static final int JE_CLEAR_FILE_FAILED
```

#### JE\_RECORD\_NOT\_FOUND

``` java
public static final int JE_RECORD_NOT_FOUND
```

#### JE\_RECORD\_NOT\_LOCKED

``` java
public static final int JE_RECORD_NOT_LOCKED
```

#### JE\_RECORD\_ALREADY\_LOCKED

``` java
public static final int JE_RECORD_ALREADY_LOCKED
```

#### JE\_READ\_FAILURE

``` java
public static final int JE_READ_FAILURE
```

#### JE\_INVALID\_ATTRIBUTE\_NUMBER

``` java
public static final int JE_INVALID_ATTRIBUTE_NUMBER
```

#### JE\_WRITE\_FAILURE

``` java
public static final int JE_WRITE_FAILURE
```

#### JE\_SELECT\_FAILED

``` java
public static final int JE_SELECT_FAILED
```

#### JE\_LIST\_EXHAUSTED

``` java
public static final int JE_LIST_EXHAUSTED
```

#### JE\_LIST\_SAVE\_FAILURE

``` java
public static final int JE_LIST_SAVE_FAILURE
```

#### JE\_INDEX\_NOT\_OPENED

``` java
public static final int JE_INDEX_NOT_OPENED
```

#### JE\_FILE\_OR\_INDEX\_INACCESSIBLE

``` java
public static final int JE_FILE_OR_INDEX_INACCESSIBLE
```

#### JE\_NOT\_IMPLEMENTED

``` java
public static final int JE_NOT_IMPLEMENTED
```

#### JE\_SUB\_NOT\_FOUND

``` java
public static final int JE_SUB_NOT_FOUND
```

#### JE\_REQUEST\_INVALID

``` java
public static final int JE_REQUEST_INVALID
```

#### JE\_INVALID\_FIELD\_NUMBER

``` java
public static final int JE_INVALID_FIELD_NUMBER
```

#### JE\_CONN\_ALREADY\_ACTIVE

``` java
public static final int JE_CONN_ALREADY_ACTIVE
```

#### JE\_CONN\_NOT\_ACTIVE

``` java
public static final int JE_CONN_NOT_ACTIVE
```

#### JE\_INVALID\_TIMEOUT

``` java
public static final int JE_INVALID_TIMEOUT
```

#### JE\_REQUEST\_TIMED\_OUT

``` java
public static final int JE_REQUEST_TIMED_OUT
```

#### JE\_CONN\_CLOSED\_BY\_HOST

``` java
public static final int JE_CONN_CLOSED_BY_HOST
```

#### JE\_CONN\_FAILURE

``` java
public static final int JE_CONN_FAILURE
```

#### JE\_OBJECT\_ALREADY\_RELEASED

``` java
public static final int JE_OBJECT_ALREADY_RELEASED
```

#### JE\_VALUE\_UNAVAILABLE

``` java
public static final int JE_VALUE_UNAVAILABLE
```

#### JE\_BAD\_USERNAME\_OR\_PASSWORD

``` java
public static final int JE_BAD_USERNAME_OR_PASSWORD
```

#### JE\_AUTHENTICATION\_FAILURE

``` java
public static final int JE_AUTHENTICATION_FAILURE
```

#### JE\_INVALID\_PARM

``` java
public static final int JE_INVALID_PARM
```

#### JE\_SERVER\_INIT\_FAILURE

``` java
public static final int JE_SERVER_INIT_FAILURE
```

#### JE\_CAPTURE\_EXHAUSTED

``` java
public static final int JE_CAPTURE_EXHAUSTED
```

#### JE\_CAPTURE\_STORE\_FAILURE

``` java
public static final int JE_CAPTURE_STORE_FAILURE
```

#### JE\_COMMON\_VAR\_TYPE\_MISMATCH

``` java
public static final int JE_COMMON_VAR_TYPE_MISMATCH
```

#### JE\_COMMON\_ATTACH\_FAILURE

``` java
public static final int JE_COMMON_ATTACH_FAILURE
```

#### JE\_SOCKET\_CREATE\_FAILURE

``` java
public static final int JE_SOCKET_CREATE_FAILURE
```

#### JE\_SOCKET\_NONBLOCK\_FAILURE

``` java
public static final int JE_SOCKET_NONBLOCK_FAILURE
```

#### JE\_SOCKET\_ACCEPT\_FAILURE

``` java
public static final int JE_SOCKET_ACCEPT_FAILURE
```

#### JE\_SOCKET\_DUP\_FAILURE

``` java
public static final int JE_SOCKET_DUP_FAILURE
```

#### JE\_SOCKET\_LISTEN\_FAILURE

``` java
public static final int JE_SOCKET_LISTEN_FAILURE
```

#### JE\_SOCKET\_WAIT\_FAILURE

``` java
public static final int JE_SOCKET_WAIT_FAILURE
```

#### JE\_SOCKET\_READ\_FAILURE

``` java
public static final int JE_SOCKET_READ_FAILURE
```

#### JE\_SOCKET\_WRITE\_FAILURE

``` java
public static final int JE_SOCKET_WRITE_FAILURE
```

#### JE\_OS\_SHMEM\_NOT\_ATTACHED

``` java
public static final int JE_OS_SHMEM_NOT_ATTACHED
```

#### JE\_OS\_SHMEM\_CREATE\_FAILURE

``` java
public static final int JE_OS_SHMEM_CREATE_FAILURE
```

#### JE\_OS\_SHMEM\_ATTACH\_FAILURE

``` java
public static final int JE_OS_SHMEM_ATTACH_FAILURE
```

#### JE\_OS\_FORK\_FAILURE

``` java
public static final int JE_OS_FORK_FAILURE
```

#### JE\_OS\_THREAD\_CREATE\_FAILURE

``` java
public static final int JE_OS_THREAD_CREATE_FAILURE
```

#### JE\_PARSE\_INVALID\_REQUEST\_TYPE

``` java
public static final int JE_PARSE_INVALID_REQUEST_TYPE
```

#### JE\_PARSE\_INVALID\_REQUEST\_FORMAT

``` java
public static final int JE_PARSE_INVALID_REQUEST_FORMAT
```

#### JE\_PARSE\_MISSING\_REQUEST\_TYPE

``` java
public static final int JE_PARSE_MISSING_REQUEST_TYPE
```

#### JE\_PARSE\_INVALID\_ENCODING

``` java
public static final int JE_PARSE_INVALID_ENCODING
```

#### JE\_PARSE\_INIT\_FAILURE

``` java
public static final int JE_PARSE_INIT_FAILURE
```

#### JE\_PARSE\_INVALID\_BYTE\_ORDER

``` java
public static final int JE_PARSE_INVALID_BYTE_ORDER
```

#### JE\_PARSE\_INVALID\_REPLY\_FORMAT

``` java
public static final int JE_PARSE_INVALID_REPLY_FORMAT
```

#### JE\_ERROR\_PARSING\_CONFIG

``` java
public static final int JE_ERROR_PARSING_CONFIG
```

#### JE\_REQUEST\_DENIED

``` java
public static final int JE_REQUEST_DENIED
```

#### JE\_PARM\_TOO\_LONG

``` java
public static final int JE_PARM_TOO_LONG
```

#### JE\_INVALID\_KEY\_LENGTH

``` java
public static final int JE_INVALID_KEY_LENGTH
```

#### JE\_KEY\_AGREEMENT\_FAILED

``` java
public static final int JE_KEY_AGREEMENT_FAILED
```

#### JE\_INVALID\_DATA\_BLOCK\_LENGTH

``` java
public static final int JE_INVALID_DATA_BLOCK_LENGTH
```

#### JE\_INVALID\_ENC\_OPTION\_COMBINATION

``` java
public static final int JE_INVALID_ENC_OPTION_COMBINATION
```

#### JE\_SERVER\_PASSWORD\_ENC\_REQUIRED

``` java
public static final int JE_SERVER_PASSWORD_ENC_REQUIRED
```

#### JE\_SERVER\_DATA\_ENC\_REQUIRED

``` java
public static final int JE_SERVER_DATA_ENC_REQUIRED
```

#### JE\_AUTH\_OPEN\_TIMEOUT

``` java
public static final int JE_AUTH_OPEN_TIMEOUT
```

#### JE\_PARM\_ENC\_REQUIRED

``` java
public static final int JE_PARM_ENC_REQUIRED
```

#### JE\_SERVER\_ENC\_NOT\_SUPPORTED

``` java
public static final int JE_SERVER_ENC_NOT_SUPPORTED
```

#### JE\_LIC\_LIMIT\_EXCEEDED

``` java
public static final int JE_LIC_LIMIT_EXCEEDED
```

#### JE\_LIC\_EXPIRED

``` java
public static final int JE_LIC_EXPIRED
```

#### errServer

``` java
protected static String[] errServer
```

#### errComm

``` java
protected static String[] errComm
```

#### errOS

``` java
protected static String[] errOS
```

#### errXML

``` java
protected static String[] errXML
```

#### errParm

``` java
protected static String[] errParm
```

#### errEncryption

``` java
protected static String[] errEncryption
```

#### errLicensing

``` java
protected static String[] errLicensing
```

### Constructor Detail

#### JException

``` java
protected JException(int code, String message)
```

### Method Detail

#### getCode

``` java
public int getCode()
```

#### getMessage

``` java
public String getMessage()
```

Overrides: getMessage in class [Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")

#### throwWithCode

``` java
protected static void throwWithCode(int code)
```

Throws: JException

Back to [jRCS java API](./../README.md)
