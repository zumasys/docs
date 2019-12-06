# JBaseJDBCBlob (jbasejdbc API)

**Created At:** 9/25/2017 10:54:36 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class JBaseJDBCBlob
<dl><dt><strong>All Implemented Interfaces:</strong></dt><dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></dd><pre>public class <span class="typeNameLabel">JBaseJDBCBlob</span>
extends <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a>
implements <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></pre></dl>
jBASE Blob object
<dl><dt><br></dt></dl>
<!--   -->

# Constructor Summary


| <br>Modifier<br> | <br>Constructor and Description<br> |
| --- | --- |
| <br>protected<br> | <br>JBaseJDBCBlob()<br> |
| <br>protected<br> | <br>JBaseJDBCBlob(byte[] bytes)<br> |





<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>protected static [ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio")<br> | <br>checkBuffer([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") buffer, int newDataLength)<br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getBinaryStream()<br><br>java.sql.Blob#getBinaryStream()<br> |
| <br>byte[]<br> | <br>getBytes(long pos, int length)<br><br>java.sql.Blob#getBytes()<br> |
| <br>long<br> | <br>length()<br><br>java.sql.Blob#length()<br> |
| <br>long<br> | <br>position([Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql") pattern, long start)<br><br>java.sql.Blob#position()<br> |
| <br>long<br> | <br>position(byte[] pattern, long start)<br><br>java.sql.Blob#position()<br> |
| <br>[OutputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/OutputStream.html?is-external=true "class or interface in java.io")<br> | <br>setBinaryStream(long pos)<br><br>java.sql.Blob#setBinaryStream()<br> |
| <br>int<br> | <br>setBytes(long pos, byte[] bytes)<br><br>java.sql.Blob#setBytes()<br> |
| <br>int<br> | <br>setBytes(long pos, byte[] bytes, int offset, int len)<br><br>java.sql.Blob#setBytes()<br> |
| <br>void<br> | <br>truncate(long len)<br><br>java.sql.Blob#truncate()<br> |


<!--   -->

## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


<!--   -->

## Methods inherited from interface java.sql.Blob
`free, getBinaryStream`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail
<!--   -->
#### **JBaseJDBCBlob**

```
protected JBaseJDBCBlob()
```




<!--   -->
#### **JBaseJDBCBlob**

```
protected JBaseJDBCBlob(byte[] bytes)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **length**

```
public long length()
            throws SQLException
```

java.sql.Blob#length()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#length--" title="class or interface in java.sql">length</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
public byte[] getBytes(long pos, int length)
                throws SQLException
```

java.sql.Blob#getBytes()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#getBytes-long-int-" title="class or interface in java.sql">getBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBinaryStream**

```
public InputStream getBinaryStream()
                            throws SQLException
```

java.sql.Blob#getBinaryStream()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#getBinaryStream--" title="class or interface in java.sql">getBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **position**

```
public long position(byte[] pattern, long start)
              throws SQLException
```

java.sql.Blob#position()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#position-byte:A-long-" title="class or interface in java.sql">position</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **position**

```
public long position(Blob pattern, long start)
              throws SQLException
```

java.sql.Blob#position()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#position-java.sql.Blob-long-" title="class or interface in java.sql">position</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBytes**

```
public int setBytes(long pos, byte[] bytes)
             throws SQLException
```

java.sql.Blob#setBytes()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#setBytes-long-byte:A-" title="class or interface in java.sql">setBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBytes**

```
public int setBytes(long pos, byte[] bytes, int offset, int len)
             throws SQLException
```

java.sql.Blob#setBytes()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#setBytes-long-byte:A-int-int-" title="class or interface in java.sql">setBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBinaryStream**

```
public OutputStream setBinaryStream(long pos)
                             throws SQLException
```

java.sql.Blob#setBinaryStream()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#setBinaryStream-long-" title="class or interface in java.sql">setBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **truncate**

```
public void truncate(long len)
              throws SQLException
```

java.sql.Blob#truncate()
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true#truncate-long-" title="class or interface in java.sql">truncate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true" title="class or interface in java.sql">Blob</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl><!--   -->




#### **checkBuffer**

```
protected static ByteBuffer checkBuffer(ByteBuffer buffer, int newDataLength)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
