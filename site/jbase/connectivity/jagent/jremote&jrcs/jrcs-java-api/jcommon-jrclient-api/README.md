# JCommon (jrclient API)

<PageHeader />

## Class JCommon

com.jbase.jrcs.JCommon

``` java
public final class JCommon
extends Object
```

Represents a jBASE common block

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JCommon(int handle, int numvars, [JConnection](./../jconnection-jrclient-api "class in com.jbase.jrcs") conn) |

## Method Summary

| Modifier and Type | Method |  Description |
| --- | --- | --- |
| void | close() | Closes the object and releases the server-side handle |
| protected void | finalize() |  |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | getDA(int index) | Retrieves a dynamic array from a specific position in a common block |
| [JFile](./../jfile-jrclient-api "class in com.jbase.jrcs") | getFile(int index) | Retrieves a file variable from a specific position in a common block |
| void | setDA(int index, [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") dynArray) | Stores a dynamic array into a specific position in a common block |
| void | setFile(int index, [JFile](./../jfile-jrclient-api "class in com.jbase.jrcs") file) | Stores a file variable into a specific position in a common block |

## Methods inherited from class java.lang.Object

`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JCommon

``` java
protected JCommon(int handle, int numvars, JConnection conn)
```

### Method Detail

#### getDA

```java
public JDynArray getDA(int index)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves a dynamic array from a specific position in a common block

Parameters:

`index` - Position from which to retrieve a dynamic array

Returns:  Dynamic array retrieved from the common block.

Throws:`JException`

#### getFile

``` java
public JFile getFile(int index)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves a file variable from a specific position in a common block.

Parameters:

`index` - Position from which to retrieve a file variable.

Returns: File variable retrieved from the common block.

Throws: `JException`

#### **setDA**

``` java
public void setDA(int index, JDynArray dynArray)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Stores a dynamic array into a specific position in a common block.

Parameters:

`index` - Position in which to store the dynamic array

`dynArray` - Dynamic array to store.

Throws: `JException`

#### setFile

``` java
public void setFile(int index, JFile file)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Stores a file variable into a specific position in a common block.

Parameters:

`index` - Position in which to store the file variable

`file` - File variable to store

Throws: `JException`

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the object and releases the server-side handle.

Throws: `JException`

#### finalize

``` java
protected void finalize()
```

Overides: finalize in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

Back to [jRCS java API](./../README.md)

  
<PageFooter />
