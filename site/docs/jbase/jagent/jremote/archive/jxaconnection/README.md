# JXAConnection

**Created At:** 9/13/2017 7:46:43 PM  
**Updated At:** 4/3/2018 9:33:33 PM  
**Original Doc:** [jxaconnection](https://docs.jbase.com/39719-archive/jxaconnection)  


# Interface JXAConnection
All Superinterfaces:[JConnection](com_jbase_jremote_JConnection "interface in com.jbase.jremote"), [XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")All Known Implementing Classes:[JConnectionImpl](com_jbase_jremote_io_JConnectionImpl "class in com.jbase.jremote.io")
```
public interface JXAConnection
extends JConnection, XAResource
```



#  

# Field Summary

## Fields inherited from interface com.jbase.jremote.[JConnection](com_jbase_jremote_JConnection "interface in com.jbase.jremote")

`DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`

##  

## Fields inherited from interface javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")

`TMENDRSCAN, TMFAIL, TMJOIN, TMNOFLAGS, TMONEPHASE, TMRESUME, TMSTARTRSCAN, TMSUCCESS, TMSUSPEND, XA_OK, XA_RDONLY`



#  

# Method Summary

## Methods inherited from interface com.jbase.jremote.[JConnection](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html "interface in com.jbase.jremote")

`begin, call, close, commit, createSelectList, createStatement, date, echo, execute, execute, getCharset, getCommon, getMetaData, iconv, monitoring, newJDynArray, newJDynArray, oconv, open, rollback, setTerminalOutputWriter, switchAccount, time`

##  

## Methods inherited from interface javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")

`commit, end, forget, getTransactionTimeout, isSameRM, prepare, recover, rollback, setTransactionTimeout, start`
