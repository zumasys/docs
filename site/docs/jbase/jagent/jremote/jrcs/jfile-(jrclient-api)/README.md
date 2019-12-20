# jFile (jrclient API)

**Created At:** 9/25/2017 11:29:14 AM  
**Updated At:** 9/20/2018 1:05:57 PM  
**Original Doc:** [com_jbase_jrcs_jfile](https://docs.jbase.com/jrcs/com_jbase_jrcs_jfile)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JFile (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;gt;


## Class jFile

com.jbase.jrcs.JFile


```
public final class JFile
extends Object
```

Represents a jBASE file variable


## Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected` `<br> | JFile(int handle, String name, [JConnection](com_jbase_jrcs_jconnection "class in com.jbase.jrcs") conn)<br> |







## Method Summary


| Modifier and Type<br> |  Method<br> |  Description<br> |
| --- | --- | --- |
| void<br> | clearFile()<br> | Clears the file<br> |
| void<br> | close()<br> | Closes the file and releases the server-side handle<br> |
| void<br> | delete(String key)<br> | Deletes a record with the given key<br> |
| protected void<br> |  finalize()<br> | <br> |
| protected int<br> |  getHandle()<br> | <br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> |  getIndex(String indexName)<br> | Reads information about the specified index<br> |
| String<br> | getPath()<br> | Retrieves the file path<br> |
| [JIndex](/jrcs/com_jbase_jrcs_JIndex "class in com.jbase.jrcs")<br> | openIndex(String indexName)<br> | Opens a named index on this file<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | read(String key)<br> | Reads a record from the file without locking<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | read(String key, boolean locked)<br> | Reads a record from the file, optionally locking it<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | read(String key, boolean locked, boolean wait)<br> | Reads a record from the file, optionally locking it and waiting for the lock<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readNamedField(String key, String field)<br> | Reads a named field from a file record<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readNamedField(String key, String field, boolean locked)<br> | Reads a named field from a file record, optionally locking the record<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readNamedField(String key, String field, boolean locked, boolean wait)<br> | Reads a named field from a file record, optionally locking the record<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readV(String key, int attrib)<br> | Reads an attribute from a file record without locking<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readV(String key, int attrib, boolean locked)<br> | Reads an attribute from a file record, optionally locking the record<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | readV(String key, int attrib, boolean locked, boolean wait)<br> | Reads an attribute from a file record, optionally locking the record and waiting for the lock<br> |
| void<br> | release(String key)<br> | Releases a lock on a file record<br> |
| void<br> | releaseAll()<br> | Releases all locks held by the current session on the given file<br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | select()<br> | Selects all keys in the file in hash order<br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | sselect()<br> | Selects all keys in the file in ascending sorted order<br> |
| void<br> | write(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data)<br> | Writes a record to the file releasing the lock if there is one<br> |
| void<br> | write(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, boolean unlock)<br> | Writes a record to the file optionally releasing the lock<br> |
| void<br> | writeNamedField(String key, String field, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data)<br> | Writes a named record field to the file<br> |
| void<br> | writeNamedField(String key, String field, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, boolean unlock)<br> | Writes a named record field to the file optionally releasing the lock<br> |
| void<br> | writeV(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int attrib)<br> | Writes a record attribute to the file releasing the lock if there is one<br> |
| void<br> | writeV(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int attrib, boolean unlock)<br> | Writes a record attribute to the file optionally releasing the lock<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Constructor Detail

#### **JFile**

```
protected JFile(int handle, String name, JConnection conn)
```



### 


## Method Detail

#### **clearFile**

```
public void clearFile() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Clears the file

Throws: `JException `

#### 


#### 


#### **close**

```
public void close()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Closes the file and releases the server-side handle.

Throws: `JException `

#### 


#### 


#### **delete**

```
public void delete(String key)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Deletes a record with the given key

Parameters:

`key` - Record key.

Throws: `JException `

#### 


#### 


#### **getIndex**

```
public JDynArray getIndex(String indexName)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads information about the specified index.

Parameters:

`indexName` - Index name to query.

Returns: JDynArray object with index information.

Throws: `JException`

#### 


#### 


#### **openIndex**

```
public JIndex openIndex(String indexName)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Opens a named index on this file.

Parameters:

`indexName` - Index name

Returns: JIndex object representing the resulting index variable.

Throws: `JException`

#### 


#### 


#### **getPath**

```
public String getPath()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Retrieves the file path.

Returns: File path

Throws: `JException`

#### **read**

```
public JDynArray read(String key, oolean locked, boolean wait)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a record from the file, optionally locking it and waiting for the lock.

Parameters:

`    key` - Record key to read. `locked` - If true, performs a READU instead of READ to lock the record.

`    wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with record data.

Throws: `JException`

#### **read**

```
public JDynArray read(String key, boolean locked)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a record from the file, optionally locking it.

Parameters:

`    key` - Record key to read.

`    locked` - If true, performs a READU instead of READ to lock the record. The method will fail immediately if it cannot                   obtain the lock.

Returns: JDynArray with record data.

Throws: `JException`

#### **read**

```
public JDynArray read(String key)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a record from the file without locking.

Parameters:

`key` - Record key to read.

Returns: JDynArray with record data.

Throws: `JException`

#### **readV**

```
public JDynArray readV(String key, int attrib, boolean locked, boolean wait)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads an attribute from a file record, optionally locking the record and waiting for the lock.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

`locked` - If true, performs a READVU instead of READV to lock the record.

`wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **readV**

```
public JDynArray readV(String key, int attrib, boolean locked)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads an attribute from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

`locked` - If true, performs a READVU instead of READV to lock the record. The method will fail immediately if the record cannot be locked.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **readV**

```
public JDynArray readV(String key, int attrib)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads an attribute from a file record without locking.

Parameters:

`key` - Record key to read.

`attrib` - Attribute number to read.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **release**

```
public void release(String key)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Releases a lock on a file record.

Parameters:

`key` - Record key.

Throws: `JException`

#### **releaseAll**

```
public void releaseAll()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Releases all locks held by the current session on the given file.

Throws: `JException`

#### **select**

```
public JSelectList select()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Selects all keys in the file in hash order.

Returns: JSelectList representing the resulting select list.

Throws: `JException`

#### **sselect**

```
public JSelectList sselect()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Selects all keys in the file in ascending sorted order.

Returns: JSelectList representing the resulting select list.

Throws: `JException`

#### **write**

```
public void write(String key, JDynArray data, boolean unlock)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Writes a record to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`data` - Record data.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEU is performed and the lock is kept.

Throws: `JException`

#### **write**

```
public void write(String key, JDynArray data)
```

Writes a record to the file releasing the lock if there is one.

Parameters:` `

`key` - Record key to write.

`data` - Record data.

Throws: `JException `

#### 


#### 


#### **writeV**

```
public void writeV(String key, JDynArray data, int attrib, boolean unlock)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Writes a record attribute to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`data` - Attribute data.

`attrib` - Attribute number to write.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEVU is performed and the lock is kept.

Throws: `JException`

#### **readNamedField**

```
public JDynArray readNamedField(String key, String field, boolean locked, boolean wait)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a named field from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

`locked` - If true, performs a READVU instead of READV to lock the record.

`wait` - If true and the locked parameter is specified, the program will wait for the lock rather than failing.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **readNamedField**

```
public JDynArray readNamedField(String key, String field, boolean locked)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a named field from a file record, optionally locking the record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

`locked` - If true, performs a READVU instead of READV to lock the record. The method will fail immediately if the record             cannot be locked.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **readNamedField**

```
public JDynArray readNamedField(String key, String field)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads a named field from a file record.

Parameters:

`key` - Record key to read.

`field` - Field name to read.

Returns: JDynArray with attribute data.

Throws: `JException`

#### **writeNamedField**

```
public void writeNamedField(String key, String field, JDynArray data, boolean unlock)
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Writes a named record field to the file optionally releasing the lock.

Parameters:

`key` - Record key to write.

`field` - Field name to write.

`data` - Field data.

`unlock` - If true, unlocks the record after writing. Otherwise a WRITEVU is performed and the lock is kept.

Throws: `JException`

#### **writeNamedField**

```
public void writeNamedField(String key, String field, JDynArray data) 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Writes a named record field to the file.

Parameters:

`key` - Record key to write.

`field` - Field name to write.

`data` - Field data.

Throws: `JException`







#### **writeV**

public void writeV(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int attrib)

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Writes a record attribute to the file releasing the lock if there is one.

Parameters:

`key` - Record key to write.

`data` - Attribute data.

`attrib` - Attribute number to write.

Throws: `JException`







#### **getHandle**

```
protected int getHandle()
```

#### 


#### 


#### **finalize**

```
protected void finalize() 
```

Overrides: `finalize` in class `Object`


