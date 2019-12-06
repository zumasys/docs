# JRemoteException (jremote API)

**Created At:** 9/25/2017 12:09:49 PM  
**Updated At:** 12/24/2018 4:25:50 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteException

<dl><dt>All Implemented Interfaces:</dt><dd>Serializable</dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jauthenticationexception" title="class in com.jbase.jremote">JAuthenticationException</a>, <a href="/39248-jremote/com_jbase_jremote_jrecordlockedexception" title="class in com.jbase.jremote">JRecordLockedException</a>, <a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a>, <a href="/39248-jremote/com_jbase_jremote_JSubroutineNotFoundException" title="class in com.jbase.jremote">JSubroutineNotFoundException</a></dd></dl>
* * *


```
public class JRemoteException
extends Exception
```

A generic exception thrown when an unexpected error occurs whilst communicating with the remote jBASE instance.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteException()` <br> |
| `JRemoteException(ErrorResponse response)` <br> |
| `JRemoteException(String msg)` <br> |
| `JRemoteException(String msg, int error)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getError()` <br> |


<!--   -->

- Methods inherited from class java.lang.Throwable
    - `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteException

```
public JRemoteException()
```
<!--   -->
#### JRemoteException

```
public JRemoteException(String msg)
```
<!--   -->
#### JRemoteException

```
public JRemoteException(String msg,
                        int error)
```
<!--   -->
#### JRemoteException

```
public JRemoteException(ErrorResponse response)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getError

```
public int getError()
```



Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
