# EISMetaDataRepository (jremote API)

<PageHeader />

## Class EISMetaDataRepository

```java
public class EISMetaDataRepository
extends Object
```

Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.

### Constructor Summary

| Constructor and Description |
| --- |
| `EISMetaDataRepository()`  |
| `EISMetaDataRepository(EISMetaDataResponse mdRespository)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getRepositoryEntry(String key)`<br>Obtain the value of a repository entry |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### EISMetaDataRepository

```java
public EISMetaDataRepository()
```

#### EISMetaDataRepository

```java
public EISMetaDataRepository(EISMetaDataResponse mdRespository)
```

### Method Detail

#### getRepositoryEntry

```java
public JDynArray getRepositoryEntry(String key)
```

Obtain the value of a repository entry
Parameters:`key` - key of the repository entryReturns:value of the repository entry

Back to [jRemote API](./../../README.md)
  
<PageFooter />
