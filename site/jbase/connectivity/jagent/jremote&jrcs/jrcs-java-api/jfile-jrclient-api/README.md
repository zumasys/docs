# jFile (jrclient API)

<PageHeader />

## Class jFile

com.jbase.jrcs.JFile

``` java
public final class JFile
extends Object
```

Represents a jBASE file variable

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JFile(int handle, String name, [JConnection](./../jconnection-jrclient-api "class in com.jbase.jrcs") conn) |

## Method Summary

| Modifier and Type |  Method |  Description |
| --- | --- | --- |
| void | clearFile() | Clears the file |
| void | close() | Closes the file and releases the server-side handle |
| void | delete(String key) | Deletes a record with the given key |
| protected void |  finalize() |  |
| protected int |  getHandle() |  |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") |  getIndex(String indexName) | Reads information about the specified index |
| String | getPath() | Retrieves the file path |
| [JIndex](./../jindex-jrclient-api "class in com.jbase.jrcs") | openIndex(String indexName) | Opens a named index on this file |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | read(String key) | Reads a record from the file without locking |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | read(String key, boolean locked) | Reads a record from the file, optionally locking it |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | read(String key, boolean locked, boolean wait) | Reads a record from the file, optionally locking it and waiting for the lock |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readNamedField(String key, String field) | Reads a named field from a file record |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readNamedField(String key, String field, boolean locked) | Reads a named field from a file record, optionally locking the record |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readNamedField(String key, String field, boolean locked, boolean wait) | Reads a named field from a file record, optionally locking the record |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readV(String key, int attrib) | Reads an attribute from a file record without locking |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readV(String key, int attrib, boolean locked) | Reads an attribute from a file record, optionally locking the record |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | readV(String key, int attrib, boolean locked, boolean wait) | Reads an attribute from a file record, optionally locking the record and waiting for the lock |
| void | release(String key) | Releases a lock on a file record |
| void | releaseAll() | Releases all locks held by the current session on the given file |
| [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") | select() | Selects all keys in the file in hash order |
| [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") | sselect() | Selects all keys in the file in ascending sorted order |
| void | write(String key, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data) | Writes a record to the file releasing the lock if there is one |
| void | write(String key, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data, boolean unlock) | Writes a record to the file optionally releasing the lock |
| void | writeNamedField(String key, String field, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data) | Writes a named record field to the file |
| void | writeNamedField(String key, String field, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data, boolean unlock) | Writes a named record field to the file optionally releasing the lock |
| void | writeV(String key, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int attrib) | Writes a record attribute to the file releasing the lock if there is one |
| void | writeV(String key, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int attrib, boolean unlock) | Writes a record attribute to the file optionally releasing the lock |

## Methods inherited from class java.lang.Object

`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JFile

``` java
protected JFile(int handle, String name, JConnection conn)
```

### Method Detail

#### clearFile

``` java
public void clearFile()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Clears the file

Throws: `JException`

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the file and releases the server-side handle.

Throws: `JException`

#### delete

``` java
public void delete(String key)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Deletes a record with the given key

Parameters:

`key` - Record key.

Throws: `JException`

#### getIndex

``` java
public JDynArray getIndex(String indexName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads information about the specified index.

Parameters:

`indexName` - Index name to query.

Returns: JDynArray object with index information.

Throws: `JException`

#### openIndex

``` java
public JIndex openIndex(String indexName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Opens a named index on this file.

Parameters:

`indexName` - Index name

Returns: JIndex object representing the resulting index variable.

Throws: `JException`

#### getPath

``` java
public String getPath()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the file path.

Returns: File path

Throws: `JException`

#### read #1

``` java
public JDynArray read(String key, oolean locked, boolean wait)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a record from the file, optionally locking it and waiting for the lock.

Parameters:

`key` - Record key to read. `locked` - If true, performs a READU instead of READ to lock the record.

`wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with record data.

Throws: `JException`

#### read #2

``` java
public JDynArray read(String key, boolean locked)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a record from the file, optionally locking it.

Parameters:

`key` - Record key to read.

`locked` - If true, performs a READU instead of READ to lock the record. The method will fail immediately if it cannot                   obtain the lock.

Returns: JDynArray with record data.

Throws: `JException`

#### read #3

``` java
public JDynArray read(String key)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a record from the file without locking.

Parameters:

`key` - Record key to read.

Returns: JDynArray with record data.

Throws: `JException`

#### readV #1

``` java
public JDynArray readV(String key, int attrib, boolean locked, boolean wait)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads an attribute from a file record, optionally locking the record and waiting for the lock.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

`locked` - If true, performs a READVU instead of READV to lock the record.

`wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with attribute data.

Throws: `JException`

#### readV #2

``` java
public JDynArray readV(String key, int attrib, boolean locked)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads an attribute from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

`locked` - If true, performs a READVU instead of READV to lock the record. The method will fail immediately if the record cannot be locked.

Returns: JDynArray with attribute data.

Throws: `JException`

#### readV #3

``` java
public JDynArray readV(String key, int attrib)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads an attribute from a file record without locking.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

Returns: JDynArray with attribute data.

Throws: `JException`

#### release

``` java
public void release(String key)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Releases a lock on a file record.

Parameters:

`key` - Record key.

Throws: `JException`

#### releaseAll

``` java
public void releaseAll()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Releases all locks held by the current session on the given file.

Throws: `JException`

#### select

``` java
public JSelectList select()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Selects all keys in the file in hash order.

Returns: JSelectList representing the resulting select list.

Throws: `JException`

#### sselect

``` java
public JSelectList sselect()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Selects all keys in the file in ascending sorted order.

Returns: JSelectList representing the resulting select list.

Throws: `JException`

#### write #1

``` java
public void write(String key, JDynArray data, boolean unlock)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Writes a record to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`data` - Record data.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEU is performed and the lock is kept.

Throws: `JException`

#### write #2

``` java
public void write(String key, JDynArray data)
```

Writes a record to the file releasing the lock if there is one.

Parameters:

`key` - Record key to write.

`data` - Record data.

Throws: `JException`

#### writeV #1

``` java
public void writeV(String key, JDynArray data, int attrib, boolean unlock)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Writes a record attribute to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`data` - Attribute data.

`attrib` - Attribute number to write.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEVU is performed and the lock is kept.

Throws: `JException`

#### readNamedField #1

``` java
public JDynArray readNamedField(String key, String field, boolean locked, boolean wait)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a named field from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

`locked` - If true, performs a READVU instead of READV to lock the record.

`wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with attribute data.

Throws: `JException`

#### readNamedField #2

``` java
public JDynArray readNamedField(String key, String field, boolean locked)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a named field from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

`locked` - If true, performs a READVU instead of READV to lock the record. The method will fail immediately if the record cannot be locked.

Returns: JDynArray with attribute data.

Throws: `JException`

#### readNamedField #3

``` java
public JDynArray readNamedField(String key, String field)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads a named field from a file record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

Returns: JDynArray with attribute data.

Throws: `JException`

#### writeNamedField #1

``` java
public void writeNamedField(String key, String field, JDynArray data, boolean unlock)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Writes a named record field to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`field` - Field name to write.

`data` - Field data.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEVU is performed and the lock is kept.

Throws: `JException`

#### writeNamedField #2

``` java
public void writeNamedField(String key, String field, JDynArray data)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Writes a named record field to the file.

Parameters:

`key` - Record key to write.

`field` - Field name to write.

`data` - Field data.

Throws: `JException`

#### writeV #2

``` java
public void writeV(String key, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int attrib)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Writes a record attribute to the file releasing the lock if there is one.

Parameters:

`key` - Record key to write.

`data` - Attribute data.

`attrib` - Attribute number to write.

Throws: `JException`

#### getHandle

``` java
protected int getHandle()
```

#### finalize

``` java
protected void finalize()
```

Overrides: `finalize` in class `Object`

Back to [jRCS java API](./../README.md)
