# JSelectList (jrclient   API)

<PageHeader /> 

## Class JSelectList

com.jbase.jrcs.JSelectList

``` java
public final class JSelectList
extends Object
```

Represents a jBASE select list variable

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JSelectList(int handle, boolean indexVar, [JConnection](./../jconnection-jrclient-api "class in com.jbase.jrcs") conn) |

## Method Summary

| Modifier and Type | Method | Description |
| --- | --- | --- |
| boolean | bol() | Indicates whether the select list is at its beginning |
| void | close() | Closes the select list and releases the server-side handle |
| boolean | eol() | Indicates whether the select list is at its end |
| protected void | finalize() |  |
| protected int | getHandle() |  |
| String | getIndexKey() | Returns the index key |
| String | getRecordKey() | Retrieves the record key |
| int | getVMCount() | Retrieves the multi-value index for the current key |
| boolean | isIndex() | Indicates whether this select list was generated from a jBASE index |
| String | readNext() | Reads the next key from the select list |
| void | saveList(String listName) | Saves the list under the specified name in a work file. |

## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### **JSelectList**

``` java
protected JSelectList(int handle, boolean indexVar, JConnection conn)
```

### Method Detail

#### bol

``` java
public boolean bol()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Indicates whether the select list is at its beginning.

Returns: true if the select list is at the beginning.

Throws: `JException`

#### eol

``` java
public boolean eol()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Indicates whether the select list is at its end.

Returns: true if the select list is at its end.

Throws: `JException`

#### getIndexKey

``` java
public String getIndexKey()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Returns: Index key

Throws: `JException`

#### isIndex

``` java
public boolean isIndex()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Indicates whether this select list was generated from a jBASE index.

Returns: true if the select list was generated from an index variable.

Throws: `JException`

#### readNext

``` java
public String readNext()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reads the next key from the select list.

Returns: Next key read or blank ("") if the list is exhausted.

Throws: `JException`

#### getRecordKey

``` java
public String getRecordKey()  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the record key.

Returns: Record key.

Throws: `JException`

#### saveList

``` java
public void saveList(String listName)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Saves the list under the specified name in a work file.

Parameters:

`listName` - Name to save the list as.

Throws: `JException`

#### getVMCount

``` java
public int getVMCount()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the multi-value index for the current key.

Returns: Multi-value index.

Throws: `JException`

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the select list and releases the server-side handle

Throws: `JException`

#### getHandle

``` java
protected int getHandle()
```

#### finalize

``` java
protected void finalize()
```

Overrides: `finalize` in class `Object`

Back to [jRCS java API](./../README.md)

  
<PageFooter />
