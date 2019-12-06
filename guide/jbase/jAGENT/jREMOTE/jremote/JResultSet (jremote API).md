# JResultSet (jremote API)

**Created At:** 9/25/2017 12:09:55 PM  
**Updated At:** 12/24/2018 7:52:41 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JResultSet

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jresultsetimpl" title="class in com.jbase.jremote.io">JResultSetImpl</a></dd></dl>
* * *


```
public interface JResultSet
```

Allows iteration of a result set fetched in blocks.
<dl><dt><br></dt></dl>

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRow()` <br> |
| `boolean`<br> | `next()` <br> |

<!--   -->

### Method Detail
<!--   -->


#### next

```
boolean next()
      throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>




#### getRow

```
JDynArray getRow()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


