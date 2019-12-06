# JException (jrclient API)

**Created At:** 9/25/2017 11:29:01 AM  
**Updated At:** 9/20/2018 1:04:26 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JException (jrclient   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":9};
var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JException

<dl><dt>All Implemented Interfaces:</dt><dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a></dd></dl>
```
public final class JException
extends Exception
```

Represents an exception thrown by all JClient classes<dt><br></dt><dt><span class="seeLabel">See Also:</span></dt><dd><a href="300698-untitled-question" title="">Serialized Form</a></dd>

<!--   -->

# 


## Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| protected static String[]<br> | errComm <br> |
| protected static String[]<br> | errEncryption <br> |
| protected static String[]<br> | errLicensing <br> |
| protected static String[]<br> | errOS <br> |
| protected static String[]<br> | errParm <br> |
| protected static String[]<br> | errServer <br> |
| protected static String[]<br> | errXML <br> |
| static int<br> | JE\_AUTH\_OPEN\_TIMEOUT <br> |
| static int<br> | JE\_AUTHENTICATION\_FAILURE <br> |
| static int<br> | JE\_BAD\_USERNAME\_OR\_PASSWORD <br> |
| static int<br> | JE\_CAPTURE\_EXHAUSTED <br> |
| static int<br> | JE\_CAPTURE\_STORE\_FAILURE <br> |
| static int<br> | JE\_CLEAR\_FILE\_FAILED <br> |
| static int<br> | JE\_COMMON\_ATTACH\_FAILURE <br> |
| static int<br> | JE\_COMMON\_VAR\_TYPE\_MISMATCH <br> |
| static int<br> | JE\_CONN\_ALREADY\_ACTIVE <br> |
| static int<br> | JE\_CONN\_CLOSED\_BY\_HOST <br> |
| static int<br> | JE\_CONN\_FAILURE <br> |
| static int<br> | JE\_CONN\_NOT\_ACTIVE <br> |
| static int<br> | JE\_ERROR\_PARSING\_CONFIG <br> |
| static int<br> | JE\_FILE\_NOT\_OPENED <br> |
| static int<br> | JE\_FILE\_OR\_INDEX\_INACCESSIBLE <br> |
| static int<br> | JE\_INDEX\_NOT\_OPENED <br> |
| static int<br> | JE\_INVALID\_ATTRIBUTE\_NUMBER <br> |
| static int<br> | JE\_INVALID\_DATA\_BLOCK\_LENGTH <br> |
| static int<br> | JE\_INVALID\_ENC\_OPTION\_COMBINATION <br> |
| static int<br> | JE\_INVALID\_FIELD\_NUMBER <br> |
| static int<br> | JE\_INVALID\_FUNCTION\_CALL <br> |
| static int<br> | JE\_INVALID\_HANDLE <br> |
| static int<br> | JE\_INVALID\_KEY\_LENGTH <br> |
| static int<br> | JE\_INVALID\_NUMBER\_OF\_PARMS <br> |
| static int<br> | JE\_INVALID\_PARM <br> |
| static int<br> | JE\_INVALID\_PARM\_FORMAT <br> |
| static int<br> | JE\_INVALID\_TIMEOUT <br> |
| static int<br> | JE\_KEY\_AGREEMENT\_FAILED <br> |
| static int<br> | JE\_LIC\_EXPIRED <br> |
| static int<br> | JE\_LIC\_LIMIT\_EXCEEDED <br> |
| static int<br> | JE\_LIST\_EXHAUSTED <br> |
| static int<br> | JE\_LIST\_NOT\_FOUND <br> |
| static int<br> | JE\_LIST\_SAVE\_FAILURE <br> |
| static int<br> | JE\_NOT\_IMPLEMENTED <br> |
| static int<br> | JE\_OBJECT\_ALREADY\_RELEASED <br> |
| static int<br> | JE\_OS\_FORK\_FAILURE <br> |
| static int<br> | JE\_OS\_SHMEM\_ATTACH\_FAILURE <br> |
| static int<br> | JE\_OS\_SHMEM\_CREATE\_FAILURE <br> |
| static int<br> | JE\_OS\_SHMEM\_NOT\_ATTACHED <br> |
| static int<br> | JE\_OS\_THREAD\_CREATE\_FAILURE <br> |
| static int<br> | JE\_OUT\_OF\_MEMORY <br> |
| static int<br> | JE\_PARM\_ENC\_REQUIRED <br> |
| static int<br> | JE\_PARM\_TOO\_LONG <br> |
| static int<br> | JE\_PARSE\_INIT\_FAILURE <br> |
| static int<br> | JE\_PARSE\_INVALID\_BYTE\_ORDER <br> |
| static int<br> | JE\_PARSE\_INVALID\_ENCODING <br> |
| static int<br> | JE\_PARSE\_INVALID\_REPLY\_FORMAT <br> |
| static int<br> | JE\_PARSE\_INVALID\_REQUEST\_FORMAT <br> |
| static int<br> | JE\_PARSE\_INVALID\_REQUEST\_TYPE <br> |
| static int<br> | JE\_PARSE\_MISSING\_REQUEST\_TYPE <br> |
| static int<br> | JE\_READ\_FAILURE <br> |
| static int<br> | JE\_RECORD\_ALREADY\_LOCKED <br> |
| static int<br> | JE\_RECORD\_NOT\_FOUND <br> |
| static int<br> | JE\_RECORD\_NOT\_LOCKED <br> |
| static int<br> | JE\_REQUEST\_DENIED <br> |
| static int<br> | JE\_REQUEST\_INVALID <br> |
| static int<br> | JE\_REQUEST\_TIMED\_OUT <br> |
| static int<br> | JE\_SELECT\_FAILED <br> |
| static int<br> | JE\_SERVER\_DATA\_ENC\_REQUIRED <br> |
| static int<br> | JE\_SERVER\_ENC\_NOT\_SUPPORTED <br> |
| static int<br> | JE\_SERVER\_INIT\_FAILURE <br> |
| static int<br> | JE\_SERVER\_PASSWORD\_ENC\_REQUIRED <br> |
| static int<br> | JE\_SOCKET\_ACCEPT\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_CREATE\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_DUP\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_LISTEN\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_NONBLOCK\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_READ\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_WAIT\_FAILURE <br> |
| static int<br> | JE\_SOCKET\_WRITE\_FAILURE <br> |
| static int<br> | JE\_SUB\_NOT\_FOUND <br> |
| static int<br> | JE\_TRANSACTION\_NOT\_ABORTED <br> |
| static int<br> | JE\_TRANSACTION\_NOT\_FINISHED <br> |
| static int<br> | JE\_VALUE\_UNAVAILABLE <br> |
| static int<br> | `JE_WRITE_FAILURE` <br> |






<!--   -->

# Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected` `<br> | JException(int code, String message)<br> |






<!--   -->

## Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| int<br> | getCode()<br> |
| String<br> | getMessage()<br> |
| protected static void<br> | throwWithCode(int code)<br> |




<!--   -->

## Methods inherited from class java.lang.Throwable
`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`


<!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`
# <!--   -->

# 


## Field Detail
<!--   -->
#### **JE\_INVALID\_HANDLE**

```
public static final int JE_INVALID_HANDLE
```

#### 


#### 


#### **JE\_INVALID\_NUMBER\_OF\_PARMS**

```
public static final int JE_INVALID_NUMBER_OF_PARMS
```

#### 


#### 


#### **JE\_INVALID\_FUNCTION\_CALL**

```
public static final int JE_INVALID_FUNCTION_CALL
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_OUT\_OF\_MEMORY**

```
public static final int JE_OUT_OF_MEMORY
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_INVALID\_PARM\_FORMAT**

```
public static final int JE_INVALID_PARM_FORMAT
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_LIST\_NOT\_FOUND**

```
public static final int JE_LIST_NOT_FOUND
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_TRANSACTION\_NOT\_FINISHED**

```
public static final int JE_TRANSACTION_NOT_FINISHED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_TRANSACTION\_NOT\_ABORTED**

```
public static final int JE_TRANSACTION_NOT_ABORTED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->

#### **JE\_FILE\_NOT\_OPENED**

```
public static final int JE_FILE_NOT_OPENED
```

#### **JE\_CLEAR\_FILE\_FAILED**

```
public static final int JE_CLEAR_FILE_FAILED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_RECORD\_NOT\_FOUND**

```
public static final int JE_RECORD_NOT_FOUND
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_RECORD\_NOT\_LOCKED**

```
public static final int JE_RECORD_NOT_LOCKED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_RECORD\_ALREADY\_LOCKED**

```
public static final int JE_RECORD_ALREADY_LOCKED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_READ\_FAILURE**

```
public static final int JE_READ_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_INVALID\_ATTRIBUTE\_NUMBER**

```
public static final int JE_INVALID_ATTRIBUTE_NUMBER
```
<dl><p><br></p></dl><!--   -->
#### 


#### **JE\_WRITE\_FAILURE**

```
public static final int JE_WRITE_FAILURE
```
<dl><p><br></p><p><br></p></dl><!--   -->
#### **JE\_SELECT\_FAILED**

```
public static final int JE_SELECT_FAILED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_LIST\_EXHAUSTED**

```
public static final int JE_LIST_EXHAUSTED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### J**E\_LIST\_SAVE\_FAILURE**

```
public static final int JE_LIST_SAVE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_INDEX\_NOT\_OPENED**

```
public static final int JE_INDEX_NOT_OPENED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### JE\_FILE\_OR\_INDEX\_INACCESSIBLE

```
public static final int JE_FILE_OR_INDEX_INACCESSIBLE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_NOT\_IMPLEMENTED**

```
public static final int JE_NOT_IMPLEMENTED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_SUB\_NOT\_FOUND**

```
public static final int JE_SUB_NOT_FOUND
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_REQUEST\_INVALID**

```
public static final int JE_REQUEST_INVALID
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_INVALID\_FIELD\_NUMBER**

```
public static final int JE_INVALID_FIELD_NUMBER
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CONN\_ALREADY\_ACTIVE**

```
public static final int JE_CONN_ALREADY_ACTIVE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CONN\_NOT\_ACTIVE**

```
public static final int JE_CONN_NOT_ACTIVE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_INVALID\_TIMEOUT**

```
public static final int JE_INVALID_TIMEOUT
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_REQUEST\_TIMED\_OUT**

```
public static final int JE_REQUEST_TIMED_OUT
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CONN\_CLOSED\_BY\_HOST**

```
public static final int JE_CONN_CLOSED_BY_HOST
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CONN\_FAILURE**

```
public static final int JE_CONN_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_OBJECT\_ALREADY\_RELEASED**

```
public static final int JE_OBJECT_ALREADY_RELEASED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_VALUE\_UNAVAILABLE**

```
public static final int JE_VALUE_UNAVAILABLE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_BAD\_USERNAME\_OR\_PASSWORD**

```
public static final int JE_BAD_USERNAME_OR_PASSWORD
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_AUTHENTICATION\_FAILURE**

```
public static final int JE_AUTHENTICATION_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_INVALID\_PARM**

```
public static final int JE_INVALID_PARM
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_SERVER\_INIT\_FAILURE**

```
public static final int JE_SERVER_INIT_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CAPTURE\_EXHAUSTED**

```
public static final int JE_CAPTURE_EXHAUSTED
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_CAPTURE\_STORE\_FAILURE**

```
public static final int JE_CAPTURE_STORE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_COMMON\_VAR\_TYPE\_MISMATCH**

```
public static final int JE_COMMON_VAR_TYPE_MISMATCH
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_COMMON\_ATTACH\_FAILURE**

```
public static final int JE_COMMON_ATTACH_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_SOCKET\_CREATE\_FAILURE**

```
public static final int JE_SOCKET_CREATE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt><p><br></p></dl><!--   -->
#### **JE\_SOCKET\_NONBLOCK\_FAILURE**

```
public static final int JE_SOCKET_NONBLOCK_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_SOCKET\_ACCEPT\_FAILURE**

```
public static final int JE_SOCKET_ACCEPT_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl>
#### 


#### **JE\_SOCKET\_DUP\_FAILURE**

```
public static final int JE_SOCKET_DUP_FAILURE
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl>
#### **JE\_SOCKET\_LISTEN\_FAILURE**

```
public static final int JE_SOCKET_LISTEN_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl>
#### 


#### **JE\_SOCKET\_WAIT\_FAILURE**

```
public static final int JE_SOCKET_WAIT_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl>
#### 


#### **JE\_SOCKET\_READ\_FAILURE**

```
public static final int JE_SOCKET_READ_FAILURE
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl>
#### **JE\_SOCKET\_WRITE\_FAILURE**

```
public static final int JE_SOCKET_WRITE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_OS\_SHMEM\_NOT\_ATTACHED**

```
public static final int JE_OS_SHMEM_NOT_ATTACHED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_OS\_SHMEM\_CREATE\_FAILURE**

```
public static final int JE_OS_SHMEM_CREATE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_OS\_SHMEM\_ATTACH\_FAILURE**

```
public static final int JE_OS_SHMEM_ATTACH_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_OS\_FORK\_FAILURE**

```
public static final int JE_OS_FORK_FAILURE
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_OS\_THREAD\_CREATE\_FAILURE**

```
public static final int JE_OS_THREAD_CREATE_FAILURE
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_PARSE\_INVALID\_REQUEST\_TYPE**

```
public static final int JE_PARSE_INVALID_REQUEST_TYPE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_PARSE\_INVALID\_REQUEST\_FORMAT**

```
public static final int JE_PARSE_INVALID_REQUEST_FORMAT
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl>
#### **JE\_PARSE\_MISSING\_REQUEST\_TYPE**

```
public static final int JE_PARSE_MISSING_REQUEST_TYPE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_PARSE\_INVALID\_ENCODING**

```
public static final int JE_PARSE_INVALID_ENCODING
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_PARSE\_INIT\_FAILURE**

```
public static final int JE_PARSE_INIT_FAILURE
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_PARSE\_INVALID\_BYTE\_ORDER**

```
public static final int JE_PARSE_INVALID_BYTE_ORDER
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl>
#### **JE\_PARSE\_INVALID\_REPLY\_FORMAT**

```
public static final int JE_PARSE_INVALID_REPLY_FORMAT
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_ERROR\_PARSING\_CONFIG**

```
public static final int JE_ERROR_PARSING_CONFIG
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_REQUEST\_DENIED**

```
public static final int JE_REQUEST_DENIED
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_PARM\_TOO\_LONG**

```
public static final int JE_PARM_TOO_LONG
```
<dl><dt style="margin-left: 60px;"><br><br></dt></dl><!--   -->
#### **JE\_INVALID\_KEY\_LENGTH**

```
public static final int JE_INVALID_KEY_LENGTH
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_KEY\_AGREEMENT\_FAILED**

```
public static final int JE_KEY_AGREEMENT_FAILED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_INVALID\_DATA\_BLOCK\_LENGTH**

```
public static final int JE_INVALID_DATA_BLOCK_LENGTH
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_INVALID\_ENC\_OPTION\_COMBINATION**

```
public static final int JE_INVALID_ENC_OPTION_COMBINATION
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_SERVER\_PASSWORD\_ENC\_REQUIRED**

```
public static final int JE_SERVER_PASSWORD_ENC_REQUIRED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_SERVER\_DATA\_ENC\_REQUIRED**

```
public static final int JE_SERVER_DATA_ENC_REQUIRED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_AUTH\_OPEN\_TIMEOUT**

```
public static final int JE_AUTH_OPEN_TIMEOUT
```
<!--   -->
#### 




#### **JE\_PARM\_ENC\_REQUIRED**

```
public static final int JE_PARM_ENC_REQUIRED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_SERVER\_ENC\_NOT\_SUPPORTED**

```
public static final int JE_SERVER_ENC_NOT_SUPPORTED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_LIC\_LIMIT\_EXCEEDED**

```
public static final int JE_LIC_LIMIT_EXCEEDED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **JE\_LIC\_EXPIRED**

```
public static final int JE_LIC_EXPIRED
```
<dl><dt style="margin-left: 60px;"><br></dt></dl><!--   -->
#### 


#### **errServer**

```
protected static String[] errServer
```
<!--   -->
#### 




#### **errComm**

```
protected static String[] errComm
```
<!--   -->
#### 




#### **errOS**

```
protected static String[] errOS
```
<!--   -->
#### 




#### **errXML**

```
protected static String[] errXML
```
<!--   -->
#### 




#### **errParm**

```
protected static String[] errParm
```
<!--   -->
#### 




#### **errEncryption**

```
protected static String[] errEncryption
```
<!--   -->
#### 




#### **errLicensing**

```
protected static String[] errLicensing
```





<!--   -->

## Constructor Detail
<!--   -->
#### **JException**

```
protected JException(int code, String message)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->



## Method Detail
<!--   -->
#### **getCode**

```
public int getCode()
```


<!--   -->


#### **getMessage**

```
public String getMessage()
```

Overrides: getMessage in class [Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")


<!--   -->


#### **throwWithCode**

```
protected static void throwWithCode(int code) 
```

Throws: JException
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
