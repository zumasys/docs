# JRemoteRequest (jremote API)

<PageHeader />

## Class JRemoteRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  
Direct Known Subclasses:[AccountAuthenticationRequest](./../accountauthenticationrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [AuthenticationRequest](./../authenticationrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [BeginTransactionRequest](./../begintransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CallSubroutineRequest](./../callsubroutinerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ClearFileRequest](./../clearfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CloseFileRequest](./../closefilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CommitTransactionRequest](./../committransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ConvRequest](./../convrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [DateTimeRequest](./../datetimerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [DeleteRecordRequest](./../deleterecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [EchoRequest](./../echorequest-(jremote-api) "class in com.jbase.jremote.protocol"), [EISMetaDataRequest](./../eismetadatarequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ExistsRecordRequest](./../existsrecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [JExecuteRequest](./../jexecuterequest-(jremote-api) "class in com.jbase.jremote.protocol"), [MonitoringRequest](./../monitoringrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [OpenFileRequest](./../openfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReadCommonRequest](./../readcommonrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReadRecordRequest](./../readrecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReleaseRecordLockRequest](./../releaserecordlockrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [RemoteInputRequest](./../remoteinputrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [RollbackTransactionRequest](./../rollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectFileRequest](./../selectfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListCloseRequest](./../selectlistcloserequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListCommitRequest](./../selectlistcommitrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListFetchRequest](./../selectlistfetchrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SetPropertiesRequest](./../setpropertiesrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [StatementExecuteQueryRequest](./../statementexecutequeryrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [StatementFetchRequest](./../statementfetchrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SwitchAccountRequest](./../switchaccountrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [WriteRecordRequest](./../writerecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XACommitTransactionRequest](./../xacommittransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAEndTransactionRequest](./../xaendtransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAPrepareTransactionRequest](./../xapreparetransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XARollbackTransactionRequest](./../xarollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAStartTransactionRequest](./../xastarttransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol")

* * *

```java
public abstract class JRemoteRequest
extends Object
implements JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteRequest()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `getType`

### Constructor Detail

#### JRemoteRequest

```java
public JRemoteRequest()
```

### Method Detail

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jRemote API](./../../README.md)

<PageFooter />
