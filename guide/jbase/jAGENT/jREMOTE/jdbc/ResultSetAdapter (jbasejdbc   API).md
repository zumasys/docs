# ResultSetAdapter (jbasejdbc   API)

**Created At:** 9/25/2017 11:05:40 AM  
**Updated At:** 2/15/2018 8:02:25 AM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../overview-summary.html)
- [Package](/39228-jdbc/com_jbase_jdbc_package-summary)
- Class
- [Use](/39229-class-use/com_jbase_jdbc_class-use_ResultSetAdapter)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketstatement "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_ResultSetAdapter)
- [No Frames](/39228-jdbc/com_jbase_jdbc_ResultSetAdapter)


- [All Classes](../../../allclasses-noframe.html)




- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jdbc

## Class ResultSetAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.ResultSetAdapter


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a>
</dd></dl>
* * *


```
public class ResultSetAdapter
extends Object
implements ResultSet
```

This class represents ResultSet objects which<br>    need to provide additional data not provided<br>    by the server.

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected Object[]` | `columnValues`  |
| `protected int` | `rowIndex`  |
| `protected ResultSetMetaData` | `rsmd`  |


        - <!--   -->
### Fields inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`CLOSE_CURSORS_AT_COMMIT, CONCUR_READ_ONLY, CONCUR_UPDATABLE, FETCH_FORWARD, FETCH_REVERSE, FETCH_UNKNOWN, HOLD_CURSORS_OVER_COMMIT, TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, TYPE_SCROLL_SENSITIVE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ResultSetAdapter()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `absolute(int arg0)`  |
| `void` | `afterLast()`  |
| `void` | `beforeFirst()`  |
| `void` | `cancelRowUpdates()`  |
| `void` | `clearWarnings()`  |
| `void` | `close()`  |
| `void` | `deleteRow()`  |
| `int` | `findColumn(String columnName)`  |
| `boolean` | `first()`  |
| `Array` | `getArray(int arg0)`  |
| `Array` | `getArray(String arg0)`  |
| `InputStream` | `getAsciiStream(int arg0)`  |
| `InputStream` | `getAsciiStream(String arg0)`  |
| `BigDecimal` | `getBigDecimal(int arg0)`  |
| `BigDecimal` | `getBigDecimal(int arg0,<br>             int arg1)`  |
| `BigDecimal` | `getBigDecimal(String arg0)`  |
| `BigDecimal` | `getBigDecimal(String arg0,<br>             int arg1)`  |
| `InputStream` | `getBinaryStream(int arg0)`  |
| `InputStream` | `getBinaryStream(String arg0)`  |
| `Blob` | `getBlob(int arg0)`  |
| `Blob` | `getBlob(String arg0)`  |
| `boolean` | `getBoolean(int column)`  |
| `boolean` | `getBoolean(String columnName)`  |
| `byte` | `getByte(int arg0)`  |
| `byte` | `getByte(String arg0)`  |
| `byte[]` | `getBytes(int arg0)`  |
| `byte[]` | `getBytes(String arg0)`  |
| `Reader` | `getCharacterStream(int arg0)`  |
| `Reader` | `getCharacterStream(String arg0)`  |
| `Clob` | `getClob(int arg0)`  |
| `Clob` | `getClob(String arg0)`  |
| `Object` | `getColumnValue(int column)`<br>Retrieves the value at a specified column.<br> |
| `int` | `getConcurrency()`  |
| `String` | `getCursorName()`  |
| `Date` | `getDate(int arg0)`  |
| `Date` | `getDate(int arg0,<br>       Calendar arg1)`  |
| `Date` | `getDate(String arg0)`  |
| `Date` | `getDate(String arg0,<br>       Calendar arg1)`  |
| `double` | `getDouble(int column)`  |
| `double` | `getDouble(String columnName)`  |
| `int` | `getFetchDirection()`  |
| `int` | `getFetchSize()`  |
| `float` | `getFloat(int column)`  |
| `float` | `getFloat(String columnName)`  |
| `int` | `getInt(int column)`  |
| `int` | `getInt(String columnName)`  |
| `long` | `getLong(int column)`  |
| `long` | `getLong(String columnName)`  |
| `ResultSetMetaData` | `getMetaData()`  |
| `Object` | `getObject(int column)`  |
| `Object` | `getObject(int arg0,<br>         Map<String,Class<?>> arg1)`  |
| `Object` | `getObject(String columnName)`  |
| `Object` | `getObject(String arg0,<br>         Map<String,Class<?>> arg1)`  |
| `Ref` | `getRef(int arg0)`  |
| `Ref` | `getRef(String arg0)`  |
| `int` | `getRow()`  |
| `short` | `getShort(int column)`  |
| `short` | `getShort(String columnName)`  |
| `Statement` | `getStatement()`  |
| `String` | `getString(int column)`  |
| `String` | `getString(String columnName)`  |
| `Time` | `getTime(int arg0)`  |
| `Time` | `getTime(int arg0,<br>       Calendar arg1)`  |
| `Time` | `getTime(String arg0)`  |
| `Time` | `getTime(String arg0,<br>       Calendar arg1)`  |
| `Timestamp` | `getTimestamp(int arg0)`  |
| `Timestamp` | `getTimestamp(int arg0,<br>            Calendar arg1)`  |
| `Timestamp` | `getTimestamp(String arg0)`  |
| `Timestamp` | `getTimestamp(String arg0,<br>            Calendar arg1)`  |
| `int` | `getType()`  |
| `InputStream` | `getUnicodeStream(int arg0)`  |
| `InputStream` | `getUnicodeStream(String arg0)`  |
| `URL` | `getURL(int arg0)`  |
| `URL` | `getURL(String arg0)`  |
| `SQLWarning` | `getWarnings()`  |
| `void` | `initialize()`  |
| `void` | `insertRow()`  |
| `boolean` | `isAfterLast()`  |
| `boolean` | `isBeforeFirst()`  |
| `boolean` | `isFirst()`  |
| `boolean` | `isLast()`  |
| `boolean` | `last()`  |
| `void` | `moveToCurrentRow()`  |
| `void` | `moveToInsertRow()`  |
| `boolean` | `next()`<br>Fetch the next row<br> This method should be overridden where rowIndex should be increased if fetch was successful<br> |
| `boolean` | `previous()`  |
| `void` | `refreshRow()`  |
| `boolean` | `relative(int arg0)`  |
| `boolean` | `rowDeleted()`  |
| `boolean` | `rowInserted()`  |
| `boolean` | `rowUpdated()`  |
| `void` | `setFetchDirection(int arg0)`  |
| `void` | `setFetchSize(int arg0)`  |
| `void` | `updateArray(int arg0,<br>           Array arg1)`  |
| `void` | `updateArray(String arg0,<br>           Array arg1)`  |
| `void` | `updateAsciiStream(int arg0,<br>                 InputStream arg1,<br>                 int arg2)`  |
| `void` | `updateAsciiStream(String arg0,<br>                 InputStream arg1,<br>                 int arg2)`  |
| `void` | `updateBigDecimal(int arg0,<br>                BigDecimal arg1)`  |
| `void` | `updateBigDecimal(String arg0,<br>                BigDecimal arg1)`  |
| `void` | `updateBinaryStream(int arg0,<br>                  InputStream arg1,<br>                  int arg2)`  |
| `void` | `updateBinaryStream(String arg0,<br>                  InputStream arg1,<br>                  int arg2)`  |
| `void` | `updateBlob(int arg0,<br>          Blob arg1)`  |
| `void` | `updateBlob(String arg0,<br>          Blob arg1)`  |
| `void` | `updateBoolean(int arg0,<br>             boolean arg1)`  |
| `void` | `updateBoolean(String arg0,<br>             boolean arg1)`  |
| `void` | `updateByte(int arg0,<br>          byte arg1)`  |
| `void` | `updateByte(String arg0,<br>          byte arg1)`  |
| `void` | `updateBytes(int arg0,<br>           byte[] arg1)`  |
| `void` | `updateBytes(String arg0,<br>           byte[] arg1)`  |
| `void` | `updateCharacterStream(int arg0,<br>                     Reader arg1,<br>                     int arg2)`  |
| `void` | `updateCharacterStream(String arg0,<br>                     Reader arg1,<br>                     int arg2)`  |
| `void` | `updateClob(int arg0,<br>          Clob arg1)`  |
| `void` | `updateClob(String arg0,<br>          Clob arg1)`  |
| `void` | `updateDate(int arg0,<br>          Date arg1)`  |
| `void` | `updateDate(String arg0,<br>          Date arg1)`  |
| `void` | `updateDouble(int arg0,<br>            double arg1)`  |
| `void` | `updateDouble(String arg0,<br>            double arg1)`  |
| `void` | `updateFloat(int arg0,<br>           float arg1)`  |
| `void` | `updateFloat(String arg0,<br>           float arg1)`  |
| `void` | `updateInt(int arg0,<br>         int arg1)`  |
| `void` | `updateInt(String arg0,<br>         int arg1)`  |
| `void` | `updateLong(int arg0,<br>          long arg1)`  |
| `void` | `updateLong(String arg0,<br>          long arg1)`  |
| `void` | `updateNull(int arg0)`  |
| `void` | `updateNull(String arg0)`  |
| `void` | `updateObject(int arg0,<br>            Object arg1)`  |
| `void` | `updateObject(int arg0,<br>            Object arg1,<br>            int arg2)`  |
| `void` | `updateObject(String arg0,<br>            Object arg1)`  |
| `void` | `updateObject(String arg0,<br>            Object arg1,<br>            int arg2)`  |
| `void` | `updateRef(int arg0,<br>         Ref arg1)`  |
| `void` | `updateRef(String arg0,<br>         Ref arg1)`  |
| `void` | `updateRow()`  |
| `void` | `updateShort(int arg0,<br>           short arg1)`  |
| `void` | `updateShort(String arg0,<br>           short arg1)`  |
| `void` | `updateString(int arg0,<br>            String arg1)`  |
| `void` | `updateString(String arg0,<br>            String arg1)`  |
| `void` | `updateTime(int arg0,<br>          Time arg1)`  |
| `void` | `updateTime(String arg0,<br>          Time arg1)`  |
| `void` | `updateTimestamp(int arg0,<br>               Timestamp arg1)`  |
| `void` | `updateTimestamp(String arg0,<br>               Timestamp arg1)`  |
| `boolean` | `wasNull()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`getHoldability, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, isClosed, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBlob, updateBlob, updateBlob, updateBlob, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateClob, updateClob, updateClob, updateClob, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNString, updateNString, updateObject, updateObject, updateObject, updateObject, updateRowId, updateRowId, updateSQLXML, updateSQLXML`


        - <!--   -->
### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### rsmd

```
protected ResultSetMetaData rsmd
```

<!--   -->
        - #### columnValues

```
protected Object[] columnValues
```

<!--   -->
        - #### rowIndex

```
protected int rowIndex
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ResultSetAdapter

```
public ResultSetAdapter()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### initialize

```
public void initialize()
```

<!--   -->
        - #### getColumnValue

```
public Object getColumnValue(int column)
                      throws SQLException
```

Retrieves the value at a specified column.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - </dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>The record's value at the specified column</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### next

```
public boolean next()
             throws SQLException
```

Fetch the next row<br> This method should be overridden where rowIndex should be increased if fetch was successful
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#next--" title="class or interface in java.sql">next</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>True if there are rows left, false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### close

```
public void close()
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true#close--" title="class or interface in java.lang">close</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#close--" title="class or interface in java.sql">close</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### wasNull

```
public boolean wasNull()
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#wasNull--" title="class or interface in java.sql">wasNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getString

```
public String getString(int column)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getString-int-" title="class or interface in java.sql">getString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBoolean

```
public boolean getBoolean(int column)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBoolean-int-" title="class or interface in java.sql">getBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getByte

```
public byte getByte(int arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getByte-int-" title="class or interface in java.sql">getByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getShort

```
public short getShort(int column)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getShort-int-" title="class or interface in java.sql">getShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getInt

```
public int getInt(int column)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getInt-int-" title="class or interface in java.sql">getInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getLong

```
public long getLong(int column)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getLong-int-" title="class or interface in java.sql">getLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getFloat

```
public float getFloat(int column)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getFloat-int-" title="class or interface in java.sql">getFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDouble

```
public double getDouble(int column)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDouble-int-" title="class or interface in java.sql">getDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBigDecimal

```
public BigDecimal getBigDecimal(int arg0,
                                int arg1)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBigDecimal-int-int-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
public byte[] getBytes(int arg0)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBytes-int-" title="class or interface in java.sql">getBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDate

```
public Date getDate(int arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDate-int-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTime

```
public Time getTime(int arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTime-int-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTimestamp

```
public Timestamp getTimestamp(int arg0)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTimestamp-int-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getAsciiStream

```
public InputStream getAsciiStream(int arg0)
                           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getAsciiStream-int-" title="class or interface in java.sql">getAsciiStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getUnicodeStream

```
public InputStream getUnicodeStream(int arg0)
                             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getUnicodeStream-int-" title="class or interface in java.sql">getUnicodeStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBinaryStream

```
public InputStream getBinaryStream(int arg0)
                            throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBinaryStream-int-" title="class or interface in java.sql">getBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getString

```
public String getString(String columnName)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getString-java.lang.String-" title="class or interface in java.sql">getString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBoolean

```
public boolean getBoolean(String columnName)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBoolean-java.lang.String-" title="class or interface in java.sql">getBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getByte

```
public byte getByte(String arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getByte-java.lang.String-" title="class or interface in java.sql">getByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getShort

```
public short getShort(String columnName)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getShort-java.lang.String-" title="class or interface in java.sql">getShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getInt

```
public int getInt(String columnName)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getInt-java.lang.String-" title="class or interface in java.sql">getInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getLong

```
public long getLong(String columnName)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getLong-java.lang.String-" title="class or interface in java.sql">getLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getFloat

```
public float getFloat(String columnName)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getFloat-java.lang.String-" title="class or interface in java.sql">getFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDouble

```
public double getDouble(String columnName)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDouble-java.lang.String-" title="class or interface in java.sql">getDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBigDecimal

```
public BigDecimal getBigDecimal(String arg0,
                                int arg1)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBigDecimal-java.lang.String-int-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
public byte[] getBytes(String arg0)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBytes-java.lang.String-" title="class or interface in java.sql">getBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDate

```
public Date getDate(String arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDate-java.lang.String-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTime

```
public Time getTime(String arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTime-java.lang.String-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTimestamp

```
public Timestamp getTimestamp(String arg0)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTimestamp-java.lang.String-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getAsciiStream

```
public InputStream getAsciiStream(String arg0)
                           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getAsciiStream-java.lang.String-" title="class or interface in java.sql">getAsciiStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getUnicodeStream

```
public InputStream getUnicodeStream(String arg0)
                             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getUnicodeStream-java.lang.String-" title="class or interface in java.sql">getUnicodeStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBinaryStream

```
public InputStream getBinaryStream(String arg0)
                            throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBinaryStream-java.lang.String-" title="class or interface in java.sql">getBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getWarnings

```
public SQLWarning getWarnings()
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getWarnings--" title="class or interface in java.sql">getWarnings</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### clearWarnings

```
public void clearWarnings()
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#clearWarnings--" title="class or interface in java.sql">clearWarnings</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getCursorName

```
public String getCursorName()
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getCursorName--" title="class or interface in java.sql">getCursorName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getMetaData

```
public ResultSetMetaData getMetaData()
                              throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getMetaData--" title="class or interface in java.sql">getMetaData</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getObject

```
public Object getObject(int column)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getObject-int-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getObject

```
public Object getObject(String columnName)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getObject-java.lang.String-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### findColumn

```
public int findColumn(String columnName)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#findColumn-java.lang.String-" title="class or interface in java.sql">findColumn</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getCharacterStream

```
public Reader getCharacterStream(int arg0)
                          throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getCharacterStream-int-" title="class or interface in java.sql">getCharacterStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getCharacterStream

```
public Reader getCharacterStream(String arg0)
                          throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getCharacterStream-java.lang.String-" title="class or interface in java.sql">getCharacterStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBigDecimal

```
public BigDecimal getBigDecimal(int arg0)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBigDecimal-int-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBigDecimal

```
public BigDecimal getBigDecimal(String arg0)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBigDecimal-java.lang.String-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isBeforeFirst

```
public boolean isBeforeFirst()
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#isBeforeFirst--" title="class or interface in java.sql">isBeforeFirst</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isAfterLast

```
public boolean isAfterLast()
                    throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#isAfterLast--" title="class or interface in java.sql">isAfterLast</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isFirst

```
public boolean isFirst()
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#isFirst--" title="class or interface in java.sql">isFirst</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isLast

```
public boolean isLast()
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#isLast--" title="class or interface in java.sql">isLast</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### beforeFirst

```
public void beforeFirst()
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#beforeFirst--" title="class or interface in java.sql">beforeFirst</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### afterLast

```
public void afterLast()
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#afterLast--" title="class or interface in java.sql">afterLast</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### first

```
public boolean first()
              throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#first--" title="class or interface in java.sql">first</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### last

```
public boolean last()
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#last--" title="class or interface in java.sql">last</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getRow

```
public int getRow()
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getRow--" title="class or interface in java.sql">getRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### absolute

```
public boolean absolute(int arg0)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#absolute-int-" title="class or interface in java.sql">absolute</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### relative

```
public boolean relative(int arg0)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#relative-int-" title="class or interface in java.sql">relative</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### previous

```
public boolean previous()
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#previous--" title="class or interface in java.sql">previous</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### setFetchDirection

```
public void setFetchDirection(int arg0)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#setFetchDirection-int-" title="class or interface in java.sql">setFetchDirection</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getFetchDirection

```
public int getFetchDirection()
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getFetchDirection--" title="class or interface in java.sql">getFetchDirection</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### setFetchSize

```
public void setFetchSize(int arg0)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#setFetchSize-int-" title="class or interface in java.sql">setFetchSize</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getFetchSize

```
public int getFetchSize()
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getFetchSize--" title="class or interface in java.sql">getFetchSize</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getType

```
public int getType()
            throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getType--" title="class or interface in java.sql">getType</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getConcurrency

```
public int getConcurrency()
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getConcurrency--" title="class or interface in java.sql">getConcurrency</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### rowUpdated

```
public boolean rowUpdated()
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#rowUpdated--" title="class or interface in java.sql">rowUpdated</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### rowInserted

```
public boolean rowInserted()
                    throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#rowInserted--" title="class or interface in java.sql">rowInserted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### rowDeleted

```
public boolean rowDeleted()
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#rowDeleted--" title="class or interface in java.sql">rowDeleted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateNull

```
public void updateNull(int arg0)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateNull-int-" title="class or interface in java.sql">updateNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBoolean

```
public void updateBoolean(int arg0,
                          boolean arg1)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBoolean-int-boolean-" title="class or interface in java.sql">updateBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateByte

```
public void updateByte(int arg0,
                       byte arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateByte-int-byte-" title="class or interface in java.sql">updateByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateShort

```
public void updateShort(int arg0,
                        short arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateShort-int-short-" title="class or interface in java.sql">updateShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateInt

```
public void updateInt(int arg0,
                      int arg1)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateInt-int-int-" title="class or interface in java.sql">updateInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateLong

```
public void updateLong(int arg0,
                       long arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateLong-int-long-" title="class or interface in java.sql">updateLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateFloat

```
public void updateFloat(int arg0,
                        float arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateFloat-int-float-" title="class or interface in java.sql">updateFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateDouble

```
public void updateDouble(int arg0,
                         double arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateDouble-int-double-" title="class or interface in java.sql">updateDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBigDecimal

```
public void updateBigDecimal(int arg0,
                             BigDecimal arg1)
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBigDecimal-int-java.math.BigDecimal-" title="class or interface in java.sql">updateBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateString

```
public void updateString(int arg0,
                         String arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateString-int-java.lang.String-" title="class or interface in java.sql">updateString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBytes

```
public void updateBytes(int arg0,
                        byte[] arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBytes-int-byte:A-" title="class or interface in java.sql">updateBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateDate

```
public void updateDate(int arg0,
                       Date arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateDate-int-java.sql.Date-" title="class or interface in java.sql">updateDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateTime

```
public void updateTime(int arg0,
                       Time arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateTime-int-java.sql.Time-" title="class or interface in java.sql">updateTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateTimestamp

```
public void updateTimestamp(int arg0,
                            Timestamp arg1)
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateTimestamp-int-java.sql.Timestamp-" title="class or interface in java.sql">updateTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateAsciiStream

```
public void updateAsciiStream(int arg0,
                              InputStream arg1,
                              int arg2)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateAsciiStream-int-java.io.InputStream-int-" title="class or interface in java.sql">updateAsciiStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBinaryStream

```
public void updateBinaryStream(int arg0,
                               InputStream arg1,
                               int arg2)
                        throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBinaryStream-int-java.io.InputStream-int-" title="class or interface in java.sql">updateBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateCharacterStream

```
public void updateCharacterStream(int arg0,
                                  Reader arg1,
                                  int arg2)
                           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateCharacterStream-int-java.io.Reader-int-" title="class or interface in java.sql">updateCharacterStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateObject

```
public void updateObject(int arg0,
                         Object arg1,
                         int arg2)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateObject-int-java.lang.Object-int-" title="class or interface in java.sql">updateObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateObject

```
public void updateObject(int arg0,
                         Object arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateObject-int-java.lang.Object-" title="class or interface in java.sql">updateObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateNull

```
public void updateNull(String arg0)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateNull-java.lang.String-" title="class or interface in java.sql">updateNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBoolean

```
public void updateBoolean(String arg0,
                          boolean arg1)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBoolean-java.lang.String-boolean-" title="class or interface in java.sql">updateBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateByte

```
public void updateByte(String arg0,
                       byte arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateByte-java.lang.String-byte-" title="class or interface in java.sql">updateByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateShort

```
public void updateShort(String arg0,
                        short arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateShort-java.lang.String-short-" title="class or interface in java.sql">updateShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateInt

```
public void updateInt(String arg0,
                      int arg1)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateInt-java.lang.String-int-" title="class or interface in java.sql">updateInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateLong

```
public void updateLong(String arg0,
                       long arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateLong-java.lang.String-long-" title="class or interface in java.sql">updateLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateFloat

```
public void updateFloat(String arg0,
                        float arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateFloat-java.lang.String-float-" title="class or interface in java.sql">updateFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateDouble

```
public void updateDouble(String arg0,
                         double arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateDouble-java.lang.String-double-" title="class or interface in java.sql">updateDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBigDecimal

```
public void updateBigDecimal(String arg0,
                             BigDecimal arg1)
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBigDecimal-java.lang.String-java.math.BigDecimal-" title="class or interface in java.sql">updateBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateString

```
public void updateString(String arg0,
                         String arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateString-java.lang.String-java.lang.String-" title="class or interface in java.sql">updateString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBytes

```
public void updateBytes(String arg0,
                        byte[] arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBytes-java.lang.String-byte:A-" title="class or interface in java.sql">updateBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateDate

```
public void updateDate(String arg0,
                       Date arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateDate-java.lang.String-java.sql.Date-" title="class or interface in java.sql">updateDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateTime

```
public void updateTime(String arg0,
                       Time arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateTime-java.lang.String-java.sql.Time-" title="class or interface in java.sql">updateTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateTimestamp

```
public void updateTimestamp(String arg0,
                            Timestamp arg1)
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateTimestamp-java.lang.String-java.sql.Timestamp-" title="class or interface in java.sql">updateTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateAsciiStream

```
public void updateAsciiStream(String arg0,
                              InputStream arg1,
                              int arg2)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateAsciiStream-java.lang.String-java.io.InputStream-int-" title="class or interface in java.sql">updateAsciiStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBinaryStream

```
public void updateBinaryStream(String arg0,
                               InputStream arg1,
                               int arg2)
                        throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBinaryStream-java.lang.String-java.io.InputStream-int-" title="class or interface in java.sql">updateBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateCharacterStream

```
public void updateCharacterStream(String arg0,
                                  Reader arg1,
                                  int arg2)
                           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateCharacterStream-java.lang.String-java.io.Reader-int-" title="class or interface in java.sql">updateCharacterStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateObject

```
public void updateObject(String arg0,
                         Object arg1,
                         int arg2)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateObject-java.lang.String-java.lang.Object-int-" title="class or interface in java.sql">updateObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateObject

```
public void updateObject(String arg0,
                         Object arg1)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateObject-java.lang.String-java.lang.Object-" title="class or interface in java.sql">updateObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### insertRow

```
public void insertRow()
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#insertRow--" title="class or interface in java.sql">insertRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateRow

```
public void updateRow()
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateRow--" title="class or interface in java.sql">updateRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### deleteRow

```
public void deleteRow()
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#deleteRow--" title="class or interface in java.sql">deleteRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### refreshRow

```
public void refreshRow()
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#refreshRow--" title="class or interface in java.sql">refreshRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### cancelRowUpdates

```
public void cancelRowUpdates()
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#cancelRowUpdates--" title="class or interface in java.sql">cancelRowUpdates</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### moveToInsertRow

```
public void moveToInsertRow()
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#moveToInsertRow--" title="class or interface in java.sql">moveToInsertRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### moveToCurrentRow

```
public void moveToCurrentRow()
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#moveToCurrentRow--" title="class or interface in java.sql">moveToCurrentRow</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getStatement

```
public Statement getStatement()
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getStatement--" title="class or interface in java.sql">getStatement</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getObject

```
public Object getObject(int arg0,
                        Map<String,Class<?>> arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getObject-int-java.util.Map-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getRef

```
public Ref getRef(int arg0)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getRef-int-" title="class or interface in java.sql">getRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBlob

```
public Blob getBlob(int arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBlob-int-" title="class or interface in java.sql">getBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getClob

```
public Clob getClob(int arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getClob-int-" title="class or interface in java.sql">getClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getArray

```
public Array getArray(int arg0)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getArray-int-" title="class or interface in java.sql">getArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getObject

```
public Object getObject(String arg0,
                        Map<String,Class<?>> arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getObject-java.lang.String-java.util.Map-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getRef

```
public Ref getRef(String arg0)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getRef-java.lang.String-" title="class or interface in java.sql">getRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getBlob

```
public Blob getBlob(String arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getBlob-java.lang.String-" title="class or interface in java.sql">getBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getClob

```
public Clob getClob(String arg0)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getClob-java.lang.String-" title="class or interface in java.sql">getClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getArray

```
public Array getArray(String arg0)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getArray-java.lang.String-" title="class or interface in java.sql">getArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDate

```
public Date getDate(int arg0,
                    Calendar arg1)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDate-int-java.util.Calendar-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getDate

```
public Date getDate(String arg0,
                    Calendar arg1)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getDate-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTime

```
public Time getTime(int arg0,
                    Calendar arg1)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTime-int-java.util.Calendar-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTime

```
public Time getTime(String arg0,
                    Calendar arg1)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTime-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTimestamp

```
public Timestamp getTimestamp(int arg0,
                              Calendar arg1)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTimestamp-int-java.util.Calendar-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTimestamp

```
public Timestamp getTimestamp(String arg0,
                              Calendar arg1)
                       throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getTimestamp-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getURL

```
public URL getURL(int arg0)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getURL-int-" title="class or interface in java.sql">getURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getURL

```
public URL getURL(String arg0)
           throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getURL-java.lang.String-" title="class or interface in java.sql">getURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateRef

```
public void updateRef(int arg0,
                      Ref arg1)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateRef-int-java.sql.Ref-" title="class or interface in java.sql">updateRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateRef

```
public void updateRef(String arg0,
                      Ref arg1)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateRef-java.lang.String-java.sql.Ref-" title="class or interface in java.sql">updateRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBlob

```
public void updateBlob(int arg0,
                       Blob arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBlob-int-java.sql.Blob-" title="class or interface in java.sql">updateBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateBlob

```
public void updateBlob(String arg0,
                       Blob arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateBlob-java.lang.String-java.sql.Blob-" title="class or interface in java.sql">updateBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateClob

```
public void updateClob(int arg0,
                       Clob arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateClob-int-java.sql.Clob-" title="class or interface in java.sql">updateClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateClob

```
public void updateClob(String arg0,
                       Clob arg1)
                throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateClob-java.lang.String-java.sql.Clob-" title="class or interface in java.sql">updateClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateArray

```
public void updateArray(int arg0,
                        Array arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateArray-int-java.sql.Array-" title="class or interface in java.sql">updateArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### updateArray

```
public void updateArray(String arg0,
                        Array arg1)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#updateArray-java.lang.String-java.sql.Array-" title="class or interface in java.sql">updateArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../overview-summary.html)
- [Package](/39228-jdbc/com_jbase_jdbc_package-summary)
- Class
- [Use](/39229-class-use/com_jbase_jdbc_class-use_ResultSetAdapter)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketstatement "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_ResultSetAdapter)
- [No Frames](/39228-jdbc/com_jbase_jdbc_ResultSetAdapter)


- [All Classes](../../../allclasses-noframe.html)




- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
