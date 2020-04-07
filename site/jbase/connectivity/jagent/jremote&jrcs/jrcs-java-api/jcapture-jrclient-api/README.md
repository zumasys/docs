# JCapture (jrclient API)

<PageHeader />

## Class JCapture

com.jbase.jrcs.JCapture

``` java
    public final class JCapture
```

extends Object  
Represents a capture object designed to incrementally fetch results of program execution.

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| protected | JCapture(int handle, [JConnection](./../jconnection-jrclient-api "class in com.jbase.jrcs") conn) |

## Method Summary

| Modifier and Type | Method |  Description |
| --- | --- | --- |
| boolean | atEnd() | Indicates whether the captured output is exhausted |
| void | close() | Closes the object and releases its server-side handle |
| protected void | finalize() |  |
| int | getBlockSize() | Sets the block size for nextBlock operation |
| String | nextBlock() | Fetches next block of captured output |
| void | rewind() | Returns the current position in the saved output to the beginning of the output stream. |
| void | setBlockSize(int blockSize) | Gets the block size for the nextBlock method |

## Methods inherited from class java.lang.Object

[clone](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#clone-- "class or interface in java.lang"), [equals](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#equals-java.lang.Object- "class or interface in java.lang"), [getClass](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#getClass-- "class or interface in java.lang"), [hashCode](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#hashCode-- "class or interface in java.lang"), [notify](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#notify-- "class or interface in java.lang"), [notifyAll](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#notifyAll-- "class or interface in java.lang"), [toString](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString-- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-long- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-long-int- "class or interface in java.lang")

### Constructor Detail

#### JCapture

``` java
protected JCapture(int handle, JConnection conn)
```

### Method Detail

#### **nextBlock**

``` java
public String nextBlock()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Fetches next block of captured output

Block:  Next block of captured output

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### getBlockSize

``` java
public int getBlockSize()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Sets the block size for nextBlock operation

Returns: Size of blocks fetched by the nextBlock() method The blocks are at least the length of this block size, but may be longer to include everything up to and including the next attribute mark.

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### setBlockSize

``` java
public void setBlockSize(int blockSize)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs") Gets the block size for the nextBlock method

Parameters:

blockSize - Size of block fetched by the nextBlock method The blocks are at least the length of this block size, but may be longer to include everything up to and including the next attribute mark.

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### atEnd

``` java
public boolean atEnd()  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Indicates whether the captured output is exhausted

Returns:  true is the output is exhausted and no more lines can be fetched

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### rewind

``` java
public void rewind()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Returns:  the current position in the saved output to the beginning of the output stream.

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the object and releases its server-side handle

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### finalize

``` java
protected void finalize()
```

Overides: [finalize](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#finalize-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

Back to [jRCS java API](./../README.md)
