# JXAConnection (jremote API)

**Created At:** 9/25/2017 12:10:24 PM  
**Updated At:** 4/5/2018 1:12:23 AM  
**Original Doc:** [com_jbase_jremote_jxaconnection](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jxaconnection)  


JavaScript is disabled on your browser.



## Interface JXAConnection

All Superinterfaces:[JConnection](/39248-jremote/com_jbase_jremote_JConnection "interface in com.jbase.jremote"), [XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")All Known Implementing Classes:[JConnectionImpl](./../io/jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
* * *


```
public interface JXAConnection
extends JConnection, XAResource
```

### Field Summary

- Fields inherited from interface com.jbase.jremote.JConnection
    - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- Fields inherited from interface javax.transaction.xa.XAResource
    - `TMENDRSCAN, TMFAIL, TMJOIN, TMNOFLAGS, TMONEPHASE, TMRESUME, TMSTARTRSCAN, TMSUCCESS, TMSUSPEND, XA_OK, XA_RDONLY`




### Method Summary

- Methods inherited from interface com.jbase.jremote.JConnection
    - `begin, call, close, commit, createSelectList, createStatement, date, echo, execute, execute, getCharset, getCommon, getMetaData, iconv, monitoring, newJDynArray, newJDynArray, oconv, open, rollback, setTerminalOutputWriter, switchAccount, time`
- Methods inherited from interface javax.transaction.xa.XAResource
    - `commit, end, forget, getTransactionTimeout, isSameRM, prepare, recover, rollback, setTransactionTimeout, start`




Back to [jREMOTE API](com_jbase_jremote_package-summary)


