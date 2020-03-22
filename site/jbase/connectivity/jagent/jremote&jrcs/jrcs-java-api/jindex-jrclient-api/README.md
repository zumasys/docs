# jIndex (jrclient API)

**Created At:** 9/25/2017 11:29:21 AM  
**Updated At:** 9/20/2018 1:06:14 PM  
**Original Doc:** [com_jbase_jrcs_jindex](https://docs.jbase.com/jrcs/com_jbase_jrcs_jindex)  
**Original ID:** 278039  
**Internal:** No  

## Class jIndex

com.jbase.jrcs.JIndex

``` java
public final class JIndex
extends Object
```

Represents a jBASE index variable

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JIndex(int handle, [JConnection](./../jconnection-jrclient-api "class in com.jbase.jrcs") conn) |

## Method Summary

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | close() | Closes the index and releases the server-side handle |
| protected void | finalize() |  |
| [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") | select() | Generates a select list from this index variable |

## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JIndex

``` java
protected JIndex(int handle, JConnection conn)
```

### Method Detail

#### select

``` java
public JSelectList select()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Generates a select list from this index variable.

Returns: JSelectList representing the resulting select list.

Throws:`JException`

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the index and releases the server-side handle.

Throws: `JException`

#### finalize

``` java
protected void finalize()
```

Overrides: `finalize` in class `Object`

Back to [jRCS java API](./../README.md)
