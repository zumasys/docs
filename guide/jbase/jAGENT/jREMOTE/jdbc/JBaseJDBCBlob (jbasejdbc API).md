# JBaseJDBCBlob (jbasejdbc API)

**Created At:** 9/25/2017 10:54:36 AM  
**Updated At:** 8/17/2018 2:25:53 AM  


JavaScript is disabled on your browser.



# Class JBaseJDBCBlob
**All Implemented Interfaces:**[Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")
```
public class JBaseJDBCBlob
extends Object
implements Blob
```

jBASE Blob object


# Constructor Summary


| <br>Modifier<br> | <br>Constructor and Description<br> |
| --- | --- |
| <br>protected<br> | <br>JBaseJDBCBlob()<br> |
| <br>protected<br> | <br>JBaseJDBCBlob(byte[] bytes)<br> |








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




## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`




## Methods inherited from interface java.sql.Blob
`free, getBinaryStream`

# Constructor Detail

#### **JBaseJDBCBlob**

```
protected JBaseJDBCBlob()
```





#### **JBaseJDBCBlob**

```
protected JBaseJDBCBlob(byte[] bytes)
```







# Method Detail

#### **length**

```
public long length()
            throws SQLException
```

java.sql.Blob#length()
**Specified by:**`length` in interface `Blob`
**Throws:**`SQLException`




#### **getBytes**

```
public byte[] getBytes(long pos, int length)
                throws SQLException
```

java.sql.Blob#getBytes()
**Specified by:**`getBytes` in interface `Blob`
**Throws:**`SQLException`




#### **getBinaryStream**

```
public InputStream getBinaryStream()
                            throws SQLException
```

java.sql.Blob#getBinaryStream()
**Specified by:**`getBinaryStream` in interface `Blob`
**Throws:**`SQLException`




#### **position**

```
public long position(byte[] pattern, long start)
              throws SQLException
```

java.sql.Blob#position()
**Specified by:**`position` in interface `Blob`
**Throws:**`SQLException`




#### **position**

```
public long position(Blob pattern, long start)
              throws SQLException
```

java.sql.Blob#position()
**Specified by:**`position` in interface `Blob`
**Throws:**`SQLException`




#### **setBytes**

```
public int setBytes(long pos, byte[] bytes)
             throws SQLException
```

java.sql.Blob#setBytes()
**Specified by:**`setBytes` in interface `Blob`
**Throws:**`SQLException`




#### **setBytes**

```
public int setBytes(long pos, byte[] bytes, int offset, int len)
             throws SQLException
```

java.sql.Blob#setBytes()
**Specified by:**`setBytes` in interface `Blob`
**Throws:**`SQLException`




#### **setBinaryStream**

```
public OutputStream setBinaryStream(long pos)
                             throws SQLException
```

java.sql.Blob#setBinaryStream()
**Specified by:**`setBinaryStream` in interface `Blob`
**Throws:**`SQLException`




#### **truncate**

```
public void truncate(long len)
              throws SQLException
```

java.sql.Blob#truncate()
**Specified by:**`truncate` in interface `Blob`
**Throws:**`SQLException`




#### **checkBuffer**

```
protected static ByteBuffer checkBuffer(ByteBuffer buffer, int newDataLength)
```


