# JXAConnection (jremote API)

**Created At:** 9/25/2017 12:10:24 PM  
**Updated At:** 4/5/2018 1:12:23 AM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JXAConnection

<dl><dt>All Superinterfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_JConnection" title="interface in com.jbase.jremote">JConnection</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="com_jbase_jremote_io_jconnectionimpl" title="class in com.jbase.jremote.io">JConnectionImpl</a></dd></dl>
* * *


```
public interface JXAConnection
extends JConnection, XAResource
```

<!--   -->

### Field Summary

- <!--   -->Fields inherited from interface com.jbase.jremote.JConnection
    - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- <!--   -->Fields inherited from interface javax.transaction.xa.XAResource
    - `TMENDRSCAN, TMFAIL, TMJOIN, TMNOFLAGS, TMONEPHASE, TMRESUME, TMSTARTRSCAN, TMSUCCESS, TMSUSPEND, XA_OK, XA_RDONLY`

<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

### Method Summary

- <!--   -->Methods inherited from interface com.jbase.jremote.JConnection
    - `begin, call, close, commit, createSelectList, createStatement, date, echo, execute, execute, getCharset, getCommon, getMetaData, iconv, monitoring, newJDynArray, newJDynArray, oconv, open, rollback, setTerminalOutputWriter, switchAccount, time`
- <!--   -->Methods inherited from interface javax.transaction.xa.XAResource
    - `commit, end, forget, getTransactionTimeout, isSameRM, prepare, recover, rollback, setTransactionTimeout, start`




Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
