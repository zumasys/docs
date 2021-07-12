# JXAConnection (jremote API)

<PageHeader />

## Interface JXAConnection

All Superinterfaces:[JConnection](./../jconnection-(jremote-api) "interface in com.jbase.jremote"), [XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")  
All Known Implementing Classes:[JConnectionImpl](./../io/jconnectionimpl-(jremote-api) "class in com.jbase.jremote.io")

* * *

```java
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

Back to [jRemote API](./../../README.md)
  
<PageFooter />
