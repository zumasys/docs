# JCapture (jrclient API)

**Created At:** 9/25/2017 11:28:22 AM  
**Updated At:** 9/20/2018 12:54:53 PM  
**Original Doc:** [com_jbase_jrcs_jcapture](https://docs.jbase.com/jrcs/com_jbase_jrcs_jcapture)  

<!-- try { if (location.href.indexOf('is-external=true') == -1) { parent.document.title="JCapture (jrclient API)"; } } catch(err) { } //--> var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10}; var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]}; var altColor = "altColor"; var rowColor = "rowColor"; var tableTab = "tableTab"; var activeTableTab = "activeTableTab"; &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


## Class JCapture

com.jbase.jrcs.JCapture

```
    public final class JCapture
```

extends Object
Represents a capture object designed to incrementally fetch results of program execution.

## Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected<br> | JCapture(int handle, [JConnection](./../jconnection-%28jrclient-api%29 "class in com.jbase.jrcs") conn)<br> |




### 


## Method Summary
 

| Modifier and Type<br> | Method<br> |  Description<br> |
| --- | --- | --- |
| boolean<br> | atEnd()<br> | Indicates whether the captured output is exhausted<br> |
| void<br> | close()<br> | Closes the object and releases its server-side handle<br> |
| protected void<br> | finalize()<br> | <br> |
| int<br> | getBlockSize()<br> | Sets the block size for nextBlock operation<br> |
| String<br> | nextBlock()<br> | Fetches next block of captured output<br> |
| void<br> | rewind()<br> | Returns the current position in the saved output to the beginning of the output stream.<br> |
| void<br> | setBlockSize(int blockSize)<br> | Gets the block size for the nextBlock method<br> |



## Methods inherited from class java.lang.Object
[clone](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#clone-- "class or interface in java.lang"), [equals](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#equals-java.lang.Object- "class or interface in java.lang"), [getClass](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#getClass-- "class or interface in java.lang"), [hashCode](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#hashCode-- "class or interface in java.lang"), [notify](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#notify-- "class or interface in java.lang"), [notifyAll](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#notifyAll-- "class or interface in java.lang"), [toString](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString-- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-long- "class or interface in java.lang"), [wait](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#wait-long-int- "class or interface in java.lang")

## Constructor Detail

#### JCapture

```
protected JCapture(int handle, JConnection conn)
```







## Method Detail

#### **nextBlock**

```
public String nextBlock() 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Fetches next block of captured output

Block:  Next block of captured output

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")







#### **getBlockSize**

```
public int getBlockSize() 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Sets the block size for nextBlock operation

Returns: Size of blocks fetched by the nextBlock() method The blocks are at least the length of this block size, but may be longer to include everything up to and including the next attribute mark.

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### **setBlockSize**

```
public void setBlockSize(int blockSize) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs") Gets the block size for the nextBlock method

Parameters:

blockSize - Size of block fetched by the nextBlock method The blocks are at least the length of this block size, but may be longer to include everything up to and including the next attribute mark.

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### **atEnd**

```
public boolean atEnd()  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Indicates whether the captured output is exhausted

Returns:  true is the output is exhausted and no more lines can be fetched

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### **rewind**

```
public void rewind() 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Returns:  the current position in the saved output to the beginning of the output stream.

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### **close**

```
public void close() 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Closes the object and releases its server-side handle

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### **finalize**

```
protected void finalize()
```

Overides: [finalize](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#finalize-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")


