# JBaseJDBCSocketResultSet (jbasejdbc API)

**Created At:** 9/25/2017 10:55:54 AM  
**Updated At:** 4/3/2018 11:03:17 PM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
# <!--   -->

# Class JBaseJDBCSocketResultSet

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals" title="interface in com.jbase.jdbc">JBaseJDBCGlobals</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a></dd></dl>
```
public class JBaseJDBCSocketResultSet
extends Object
implements ResultSet, JBaseJDBCGlobals
```

<!--   -->

# 


# Nested Class Summary

<!--   -->

## Nested classes/interfaces inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`JBaseJDBCGlobals.TYPES`<!-- =========== FIELD SUMMARY =========== -->
<!--   -->

# 


# Field Summary

<!--   -->

## Fields inherited from interface java.sql.ResultSet
`CLOSE_CURSORS_AT_COMMIT, CONCUR_READ_ONLY, CONCUR_UPDATABLE, FETCH_FORWARD, FETCH_REVERSE, FETCH_UNKNOWN, HOLD_CURSORS_OVER_COMMIT, TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, TYPE_SCROLL_SENSITIVE`



<!--   -->

## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`
<!--   -->

### 


# Method Summary


| <br>Modifier and Type<br> |  Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>boolean<br> | <br>absolute(int row)<br> | <br>Moves the cursor to the given row number in this ResultSet object.<br> |
| <br>void<br> | <br>afterLast()<br> | <br>Moves the cursor to the end of this ResultSet object, just after the last row.<br> |
| <br>void<br> | <br>beforeFirst()<br> | <br>Moves the cursor to the front of this ResultSet object, just before the first row.<br> |
| <br>void<br> | cancelRowUpdates()<br> | <br>Cancels the updates made to the current row in this ResultSet object.<br> |
| <br>void<br> | <br>clearWarnings()<br> | <br>Clears all warnings reported on this ResultSet object.<br> |
| <br>void<br> | <br>close()<br> | <br>Releases this ResultSet object's database and JDBC resources immediately instead of waiting for this to happen when it is automatically closed.<br> |
| <br>void<br> | <br>deleteRow()<br> | <br>Deletes the current row from this ResultSet object and from the underlying database.<br> |
| <br>int<br> | findColumn([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>boolean<br> | <br>first()<br> | <br>Moves the cursor to the first row in this ResultSet object.<br> |
| <br>[Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql")<br> | <br>getArray(int i)<br> | <br><br> |
| <br>[Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql")<br> | <br>getArray([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") colName)<br> | <br><br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getAsciiStream(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a stream of ASCII characters.<br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getAsciiStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | getBigDecimal(int columnIndex)<br> | <br><br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | getBigDecimal(int columnIndex, int scale)<br> | <br><br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | <br>getBigDecimal([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | <br>getBigDecimal([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, int scale)<br> | <br><br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getBinaryStream(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a binary stream of uninterpreted bytes.<br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getBinaryStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | getBlob(int columnIndex)<br> | <br><br> |
| <br>[Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | getBlob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>boolean<br> | <br>getBoolean(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a boolean in the Java programming language.<br> |
| <br>boolean<br> | <br>getBoolean([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>byte<br> | <br>getByte(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a byte in the Java programming language.<br> |
| <br>byte<br> | <br>getByte([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>byte[]<br> | <br>getBytes(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language.<br> |
| <br>byte[]<br> | <br>getBytes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language.<br> |
| <br>[Reader](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Reader.html?is-external=true "class or interface in java.io")<br> | <br>getCharacterStream(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a java.io.Reader object.<br> |
| <br>[Reader](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Reader.html?is-external=true "class or interface in java.io")<br> | <br>getCharacterStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql")<br> | <br>getClob(int i)<br> | <br><br> |
| <br>[Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql")<br> | <br>getClob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") colName)<br> | <br><br> |
| <br>int<br> | <br>getConcurrency()<br> | <br>Retrieves the concurrency mode of this ResultSet object.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | getCursorName()<br> | <br><br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate(int columnIndex)<br> | <br><br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | getDate(int columnIndex, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>double<br> | <br>getDouble(int columnIndex)<br> | <br><br> |
| <br>double<br> | <br>getDouble([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>int<br> | <br>getFetchDirection()<br> | <br>Retrieves the fetch direction for this ResultSet object.<br> |
| <br>int<br> | <br>getFetchSize()<br> | <br>Retrieves the fetch size for this ResultSet object.<br> |
| <br>float<br> | <br>getFloat(int columnIndex)<br> | <br><br> |
| <br>float<br> | getFloat([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>int<br> | <br>getInt(int columnIndex)<br> | <br><br> |
| <br>int<br> | <br>getInt([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>long<br> | <br>getLong(int columnIndex)<br> | <br><br> |
| <br>long<br> | <br>getLong([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql")<br> | <br>getMetaData()<br> | <br><br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject(int columnIndex)<br> | <br>Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language.<br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject(int i, [Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util") map)<br> | <br><br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br>Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language.<br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") colName, [Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util") map)<br> | <br><br> |
| <br>[Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql")<br> | <br>getRef(int i)<br> | <br><br> |
| <br>[Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql")<br> | getRef([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") colName)<br> | <br><br> |
| <br>int<br> | <br>getRow()<br> | <br>Retrieves the current row number.<br> |
| <br>short<br> | <br>getShort(int columnIndex) [getRow](https://jbase.helpjuice.com/com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_JBaseJDBCSocketResultSet#getRow--)()<br> | <br><br> |
| <br>short<br> | <br>getShort([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Statement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true "class or interface in java.sql")<br> | <br>getStatement()<br> | <br>Retrieves the Statement object that produced this ResultSet object.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getString(int columnIndex)<br> | <br><br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getString([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a java.sql.Time object in the Java programming language.<br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime(int columnIndex, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp(int columnIndex)<br> | <br><br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp(int columnIndex, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>int<br> | <br>getType()<br> | <br>Retrieves the type of this ResultSet object.<br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getUnicodeStream(int columnIndex)<br> | <br>Deprecated. <br>use getCharacterStream in place of getUnicodeStream<br> |
| <br>[InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io")<br> | <br>getUnicodeStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[URL](http://java.sun.com/j2se/1.5.0/docs/api/java/net/URL.html?is-external=true "class or interface in java.net")<br> | <br>getURL(int columnIndex)<br> | <br><br> |
| <br>[URL](http://java.sun.com/j2se/1.5.0/docs/api/java/net/URL.html?is-external=true "class or interface in java.net")<br> | <br>getURL([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[SQLWarning](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLWarning.html?is-external=true "class or interface in java.sql")<br> | <br>getWarnings()<br> | <br><br> |
| <br>void<br> | <br>insertRow()<br> | <br>Inserts the contents of the insert row into this ResultSet object and into the database.<br> |
| <br>boolean<br> | <br>isAfterLast()<br> | <br>Retrieves whether the cursor is after the last row in this ResultSet object.<br> |
| <br>boolean<br> | <br>isBeforeFirst()<br> | <br>Retrieves whether the cursor is before the first row in this ResultSet object.<br> |
| <br>boolean<br> | <br>isFirst()<br> | <br>Retrieves whether the cursor is on the first row of this ResultSet object.<br> |
| <br>boolean<br> | <br>isLast()<br> | <br>Retrieves whether the cursor is on the last row of this ResultSet object.<br> |
| <br>boolean<br> | <br>last()<br> | <br>Moves the cursor to the last row in this ResultSet object.<br> |
| <br>void<br> | <br>moveToCurrentRow()<br> | <br>Moves the cursor to the remembered cursor position, usually the current row.<br> |
| <br>void<br> | <br>moveToInsertRow()<br> | <br>Moves the cursor to the insert row.<br> |
| <br>boolean<br> | <br>next()<br> | <br>Moves the cursor down one row from its current position.<br> |
| <br>boolean<br> | <br>previous()<br> | <br>Moves the cursor to the previous row in this ResultSet object.<br> |
| <br>void<br> | <br>refreshRow()<br> | <br>Refreshes the current row with its most recent value in the database.<br> |
| <br>boolean<br> | <br>relative(int rows)<br> | <br>Moves the cursor a relative number of rows, either positive or negative.<br> |
| <br>boolean<br> | <br>rowDeleted()<br> | <br>Retrieves whether a row has been deleted.<br> |
| <br>boolean<br> | <br>rowInserted()<br> | <br>Retrieves whether the current row has had an insertion.<br> |
| <br>boolean<br> | <br>rowUpdated()<br> | <br>Retrieves whether the current row has been updated.<br> |
| <br>void<br> | <br>setFetchDirection(int direction)<br> | <br>Gives a hint as to the direction in which the rows in this ResultSet object will be processed.<br> |
| <br>void<br> | <br>setFetchSize(int rows)<br> | <br>Gives the JDBC driver a hint as to the number of rows that should be fetched from the database when more rows are needed for this ResultSet object.<br> |
| <br>void<br> | <br>updateArray(int columnIndex, [Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | updateArray([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateAsciiStream(int columnIndex, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") x, int length)<br> | <br>Updates the designated column with an ascii stream value.<br> |
| <br>void<br> | <br>updateAsciiStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") x, int length)<br> | <br><br> |
| <br>void<br> | <br>updateBigDecimal(int columnIndex, [BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math") x)<br> | <br><br> |
| <br>void<br> | updateBigDecimal([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math") x)<br> | <br><br> |
| <br>void<br> | <br>updateBinaryStream(int columnIndex, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") x, int length)<br> | <br>Updates the designated column with a binary stream value.<br> |
| <br>void<br> | <br>updateBinaryStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") x, int length)<br> | <br><br> |
| <br>void<br> | <br>updateBlob(int columnIndex, [Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateBlob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateBoolean(int columnIndex, boolean x)<br> | <br><br> |
| <br>void<br> | <br>updateBoolean([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, boolean x)<br> | <br><br> |
| <br>void<br> | <br>updateByte(int columnIndex, byte x)<br> | <br>Updates the designated column with a byte value.<br> |
| <br>void<br> | <br>updateByte([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, byte x)<br> | <br>Updates the designated column with a byte value.<br> |
| <br>void<br> | <br>updateBytes(int columnIndex, byte[] x)<br> | <br><br> |
| <br>void<br> | <br>updateBytes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, byte[] x)<br> | <br><br> |
| <br>void<br> | <br>updateCharacterStream(int columnIndex, [Reader](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Reader.html?is-external=true "class or interface in java.io") x, int length)<br> | <br>Updates the designated column with a character stream value.<br> |
| <br>void<br> | <br>updateCharacterStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Reader](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Reader.html?is-external=true "class or interface in java.io") reader, int length)<br> | <br><br> |
| <br>void<br> | <br>updateClob(int columnIndex, [Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateClob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateDate(int columnIndex, [Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateDouble(int columnIndex, double x)<br> | <br>Updates the designated column with a double value.<br> |
| <br>void<br> | <br>updateDouble([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, double x)<br> | <br><br> |
| <br>void<br> | <br>updateFloat(int columnIndex, float x)<br> | <br><br> |
| <br>void<br> | <br>updateFloat([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, float x)<br> | <br><br> |
| <br>void<br> | <br>updateInt(int columnIndex, int x)<br> | <br><br> |
| <br>void<br> | <br>updateInt([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, int x)<br> | <br><br> |
| <br>void<br> | <br>updateLong(int columnIndex, long x)<br> | <br><br> |
| <br>void<br> | <br>updateLong([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, long x)<br> | <br><br> |
| <br>void<br> | <br>updateNull(int columnIndex)<br> | <br>Gives a nullable column a null value.<br> |
| <br>void<br> | <br>updateNull([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>void<br> | <br>updateObject(int columnIndex, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") x)<br> | <br><br> |
| <br>void<br> | <br>updateObject(int columnIndex, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") x, int scale)<br> | <br><br> |
| <br>void<br> | updateObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") x)<br> | <br><br> |
| <br>void<br> | updateObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") x, int scale)<br> | <br><br> |
| <br>void<br> | <br>updateRef(int columnIndex, [Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | updateRef([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateRow()<br> | <br>Updates the underlying database with the new contents of the current row of this ResultSet object.<br> |
| <br>void<br> | <br>updateShort(int columnIndex, short x)<br> | <br><br> |
| <br>void<br> | <br>updateShort([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, short x)<br> | <br><br> |
| <br>void<br> | <br>updateString(int columnIndex, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") x)<br> | <br><br> |
| <br>void<br> | <br>updateString([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") x)<br> | <br><br> |
| <br>void<br> | <br>updateTime(int columnIndex, [Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTimestamp(int columnIndex, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>boolean<br> | <br>wasNull()<br> | <br>Reports whether the last column read had a value of SQL NULL.<br> |


<!--   -->

## 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

## 


## Methods inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`getHoldability, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, isClosed, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBlob, updateBlob, updateBlob, updateBlob, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateClob, updateClob, updateClob, updateClob, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNString, updateNString, updateObject, updateObject, updateObject, updateObject, updateRowId, updateRowId, updateSQLXML, updateSQLXML`

<!--   -->

# 


## Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

<!--   -->

# Method Detail
<!--   -->
#### **getConcurrency**

```
public int getConcurrency()
                   throws SQLException
```

Retrieves the concurrency mode of this ResultSet object. The concurrency used is determined by the Statement object that created the result set.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getConcurrency</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the concurrency type, either ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>


<!--   -->



#### **getFetchDirection**

```
public int getFetchDirection()
                      throws SQLException
```

Retrieves the fetch direction for this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#getFetchDirection--" title="class or interface in java.sql">getFetchDirection</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the current fetch direction for this ResultSet object</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getFetchSize**

```
public int getFetchSize()
                 throws SQLException
```

Retrieves the fetch size for this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getFetchSize</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the current fetch size for this ResultSet object</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getRow**

```
public int getRow()
           throws SQLException
```

Retrieves the current row number. The first row is number 1, the second number 2, and so on.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><strong><br></strong><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the current row number; 0 if there is no current row</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getType**

```
public int getType()
            throws SQLException
```

Retrieves the type of this ResultSet object. The type is determined by the Statement object that created the result set.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getType</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><strong><br><span class="returnLabel">Returns:</span></strong></dt><dd>ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **afterLast**

```
public void afterLast()
               throws SQLException
```

Moves the cursor to the end of this ResultSet object, just after the last row. This method has no effect if the result set contains no rows.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>afterLast</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **beforeFirst**

```
public void beforeFirst()
                 throws SQLException
```

Moves the cursor to the front of this ResultSet object, just before the first row. This method has no effect if the result set contains no rows.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true#beforeFirst--" title="class or interface in java.sql">beforeFirst</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **cancelRowUpdates**

```
public void cancelRowUpdates()
                      throws SQLException
```

Cancels the updates made to the current row in this ResultSet object. This method may be called after calling an updater method(s) and before calling the method updateRow to roll back the updates made to a row. If no updates have been made or updateRow has already been called, this method has no effect.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>cancelRowUpdates</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or if this method is called when the cursor is on the insert row</dd>


<!--   -->


#### **clearWarnings**

```
public void clearWarnings()
                   throws SQLException
```

Clears all warnings reported on this ResultSet object. After this method is called, the method getWarnings returns null until a new warning is reported for this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>clearWarnings</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **close**

```
public void close()
           throws SQLException
```

Releases this ResultSet object's database and JDBC resources immediately instead of waiting for this to happen when it is automatically closed. Note: A ResultSet object is automatically closed by the Statement object that generated it when that Statement object is closed, re-executed, or is used to retrieve the next result from a sequence of multiple results. A ResultSet object is also automatically closed when it is garbage collected.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>close</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a></code></dd><dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>close</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **deleteRow**

```
public void deleteRow()
               throws SQLException
```

Deletes the current row from this ResultSet object and from the underlying database. This method cannot be called when the cursor is on the insert row.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>deleteRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or if this method is called when the cursor is on the insert row</dd>


<!--   -->


#### insertRow

```
public void insertRow()
               throws SQLException
```

Inserts the contents of the insert row into this ResultSet object and into the database. The cursor must be on the insert row when this method is called.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>insertRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs, if this method is called when the cursor is not on the insert row, or if not all of non-nullable columns in the insert row have been given a value</dd>


<!--   -->


#### **moveToCurrentRow**

```
public void moveToCurrentRow()
                      throws SQLException
```

Moves the cursor to the remembered cursor position, usually the current row. This method has no effect if the cursor is not on the insert row.<dt><strong><br></strong><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>moveToCurrentRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><strong><br></strong><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set is not updatable</dd>


<!--   -->


#### **moveToInsertRow**

```
public void moveToInsertRow()
                     throws SQLException
```

Moves the cursor to the insert row. The current cursor position is remembered while the cursor is positioned on the insert row. The insert row is a special row associated with an updatable result set. It is essentially a buffer where a new row may be constructed by calling the updater methods prior to inserting the row into the result set. Only the updater, getter, and insertRow methods may be called when the cursor is on the insert row. All of the columns in a result set must be given a value each time this method is called before calling insertRow. An updater method must be called before a getter method can be called on a column value.<dt><br><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code>moveToInsertRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set is not updatable</dd>


<!--   -->


#### **refreshRow**

```
public void refreshRow()
                throws SQLException
```

Refreshes the current row with its most recent value in the database. This method cannot be called when the cursor is on the insert row. The refreshRow method provides a way for an application to explicitly tell the JDBC driver to refetch a row(s) from the database. An application may want to call refreshRow when caching or prefetching is being done by the JDBC driver to fetch the latest value of a row from the database. The JDBC driver may actually refresh multiple rows at once if the fetch size is greater than one. All values are refetched subject to the transaction isolation level and cursor sensitivity. If refreshRow is called after calling an updater method, but before calling the method updateRow, then the updates made to the row are lost. Calling the method refreshRow frequently will likely slow performance.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>refreshRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or if this method is called when the cursor is on the insert row</dd>


<!--   -->


#### **updateRow**

```
public void updateRow()
               throws SQLException
```

Updates the underlying database with the new contents of the current row of this ResultSet object. This method cannot be called when the cursor is on the insert row.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateRow</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or if this method is called when the cursor is on the insert row</dd>


<!--   -->


#### **first**

```
public boolean first()
              throws SQLException
```

Moves the cursor to the first row in this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>first</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on a valid row; false if there are no rows in the result set</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **isAfterLast**

```
public boolean isAfterLast()
                    throws SQLException
```

Retrieves whether the cursor is after the last row in this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>isAfterLast</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is after the last row; false if the cursor is at any other position or the result set contains no rows</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **isBeforeFirst**

```
public boolean isBeforeFirst()
                      throws SQLException
```

Retrieves whether the cursor is before the first row in this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>isBeforeFirst</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is before the first row; false if the cursor is at any other position or the result set contains no rows</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **isFirst**

```
public boolean isFirst()
                throws SQLException
```

Retrieves whether the cursor is on the first row of this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>isFirst</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on the first row; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **isLast**

```
public boolean isLast()
               throws SQLException
```

Retrieves whether the cursor is on the last row of this ResultSet object. Note: Calling the method isLast may be expensive because the JDBC driver might need to fetch ahead one row in order to determine whether the current row is the last row in the result set.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>isLast</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on the last row; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **last**

```
public boolean last()
             throws SQLException
```

Moves the cursor to the last row in this ResultSet object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>last</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on a valid row; false if there are no rows in the result set</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **next**

```
public boolean next()
             throws SQLException
```

Moves the cursor down one row from its current position. A ResultSet cursor is initially positioned before the first row; the first call to the method next makes the first row the current row; the second call makes the second row the current row, and so on. If an input stream is open for the current row, a call to the method next will implicitly close it. A ResultSet object's warning chain is cleared when a new row is read.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>next</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the new current row is valid; false if there are no more rows</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **previous**

```
public boolean previous()
                 throws SQLException
```

Moves the cursor to the previous row in this ResultSet object.<dt><strong><br></strong><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>previous</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><strong><br></strong><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on a valid row; false if it is off the result set</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **rowDeleted**

```
public boolean rowDeleted()
                   throws SQLException
```

Retrieves whether a row has been deleted. A deleted row may leave a visible "hole" in a result set. This method can be used to detect holes in a result set. The value returned depends on whether or not this ResultSet object can detect deletions.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>rowDeleted</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if a row was deleted and deletions are detected; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **rowInserted**

```
public boolean rowInserted()
                    throws SQLException
```

Retrieves whether the current row has had an insertion. The value returned depends on whether or not this ResultSet object can detect visible inserts.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>rowInserted</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if a row has had an insertion and insertions are detected; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### rowUpdated

```
public boolean rowUpdated()
                   throws SQLException
```

Retrieves whether the current row has been updated. The value returned depends on whether or not the result set can detect updates.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>rowUpdated</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if both (1) the row has been visibly updated by the owner or another and (2) updates are detected</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **wasNull**

```
public boolean wasNull()
                throws SQLException
```

Reports whether the last column read had a value of SQL NULL. Note that you must first call one of the getter methods on a column to try to read its value and then call the method wasNull to see if the value read was SQL NULL.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>wasNull</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the last column value read was SQL NULL and false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getByte**

```
public byte getByte(int columnIndex)
             throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte in the Java programming language.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getByte</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the column value; if the value is SQL NULL, the value returned is 0</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getDouble**

```
public double getDouble(int columnIndex)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><strong><br></strong><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDouble</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getFloat**

```
public float getFloat(int columnIndex)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel">S<strong>pecified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getFloat</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><strong><br></strong><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getInt**

```
public int getInt(int columnIndex)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getInt</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getLong**

```
public long getLong(int columnIndex)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getLong</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getShort**

```
public short getShort(int columnIndex)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getShort</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setFetchDirection**

```
public void setFetchDirection(int direction)
                       throws SQLException
```

Gives a hint as to the direction in which the rows in this ResultSet object will be processed. The initial value is determined by the Statement object that produced this ResultSet object. The fetch direction may be changed at any time.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>setFetchDirection</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>direction</code> - an int specifying the suggested fetch direction; one of ResultSet.FETCH_FORWARD, ResultSet.FETCH_REVERSE, or ResultSet.FETCH_UNKNOWN</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the result set type is TYPE_FORWARD_ONLY and the fetch direction is not FETCH_FORWARD</dd>


<!--   -->


#### **setFetchSize**

```
public void setFetchSize(int rows)
                  throws SQLException
```

Gives the JDBC driver a hint as to the number of rows that should be fetched from the database when more rows are needed for this ResultSet object. If the fetch size specified is zero, the JDBC driver ignores the value and is free to make its own best guess as to what the fetch size should be. The default value is set by the Statement object that created the result set. The fetch size may be changed at any time.<dt><br><span class="overrideSpecifyLabel">S<strong>pecified by:</strong></span></dt><dd><code>setFetchSize</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>rows</code> - the number of rows to fetch</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the condition 0 &lt;= rows &lt;= Statement.getMaxRows() is not satisfied</dd>


<!--   -->


#### **updateNull**

```
public void updateNull(int columnIndex)
                throws SQLException
```

Gives a nullable column a null value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateNull</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **absolute**

```
public boolean absolute(int row)
                 throws SQLException
```

Moves the cursor to the given row number in this ResultSet object. If the row number is positive, the cursor moves to the given row number with respect to the beginning of the result set. The first row is row 1, the second is row 2, and so on. If the given row number is negative, the cursor moves to an absolute row position with respect to the end of the result set. For example, calling the method absolute(-1) positions the cursor on the last row; calling the method absolute(-2) moves the cursor to the next-to-last row, and so on. An attempt to position the cursor beyond the first/last row in the result set leaves the cursor before the first row or after the last row. Note: Calling absolute(1) is the same as calling first(). Calling absolute(-1) is the same as calling last().<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>absolute</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>row</code> - the number of the row to which the cursor should move. A positive number indicates the row number counting from the beginning of the result set; a negative number indicates the row number counting from the end of the result set</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on the result set; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs, or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **getBoolean**

```
public boolean getBoolean(int columnIndex)
                   throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a boolean in the Java programming language.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getBoolean</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd><code>&nbsp; &nbsp; columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the column value; if the value is SQL NULL, the value returned is false</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **relative**

```
public boolean relative(int rows)
                 throws SQLException
```

Moves the cursor a relative number of rows, either positive or negative. Attempting to move beyond the first/last row in the result set positions the cursor before/after the the first/last row. Calling relative(0) is valid, but does not change the cursor position. Note: Calling the method relative(1) is identical to calling the method next() and calling the method relative(-1) is identical to calling the method previous().<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>relative</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>rows</code> - an int specifying the number of rows to move from the current row; a positive number moves the cursor forward; a negative number moves the cursor backward</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>true if the cursor is on a row; false otherwise</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs, there is no current row, or the result set type is TYPE_FORWARD_ONLY</dd>


<!--   -->


#### **getBytes**

```
public byte[] getBytes(int columnIndex)
                throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language. The bytes represent the raw values returned by the driver.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getBytes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the column value; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateByte**

```
public void updateByte(int columnIndex, byte x)
                throws SQLException
```

Updates the designated column with a byte value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database. <dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateByte</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateDouble**

```
public void updateDouble(int columnIndex, double x)
                  throws SQLException
```

Updates the designated column with a double value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.

<dt><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateDouble</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd>

<dt><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateFloat**

```
public void updateFloat(int columnIndex, float x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateFloat</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><p><br></p><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateInt**

```
public void updateInt(int columnIndex, int x)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateInt</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateLong**

```
public void updateLong(int columnIndex, long x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateLong</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateShort**

```
public void updateShort(int columnIndex, short x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateShort</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateBoolean**

```
public void updateBoolean(int columnIndex,
                          boolean x)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBoolean</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateBytes**

```
public void updateBytes(int columnIndex, byte[] x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBytes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getAsciiStream**

```
public InputStream getAsciiStream(int columnIndex)
                           throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a stream of ASCII characters. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARCHAR values. The JDBC driver will do any necessary conversion from the database format into ASCII. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called whether there is data available or not.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getAsciiStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd><code>&nbsp; &nbsp; columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a Java input stream that delivers the database column value as a stream of one-byte ASCII characters; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getBinaryStream**

```
public InputStream getBinaryStream(int columnIndex)
                            throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a binary stream of uninterpreted bytes. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARBINARY values. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called whether there is data available or not.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getBinaryStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a Java input stream that delivers the database column value as a stream of uninterpreted bytes; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getUnicodeStream**

```
public InputStream getUnicodeStream(int columnIndex)
                             throws SQLException
```

Deprecated. use getCharacterStream in place of getUnicodeStream

Retrieves the value of the designated column in the current row of this ResultSet object as as a stream of two-byte Unicode characters. The first byte is the high byte; the second byte is the low byte. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARCHARvalues. The JDBC driver will do any necessary conversion from the database format into Unicode. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called, whether there is data available or not.
<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getUnicodeStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a Java input stream that delivers the database column value as a stream of two-byte Unicode characters; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateAsciiStream**

```
public void updateAsciiStream(int columnIndex, InputStream x, int length)
                       throws SQLException
```

Updates the designated column with an ascii stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateAsciiStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dd style="margin-left: 20px;"><code>length</code> - the length of the stream</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateBinaryStream**

```
public void updateBinaryStream(int columnIndex, InputStream x, int length)
                        throws SQLException
```

Updates the designated column with a binary stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateBinaryStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dd style="margin-left: 20px;"><code>length</code> - the length of the stream</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getCharacterStream**

```
public Reader getCharacterStream(int columnIndex)
                          throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a java.io.Reader object.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getCharacterStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language.</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateCharacterStream**

```
public void updateCharacterStream(int columnIndex, Reader x, int length)
                           throws SQLException
```

Updates the designated column with a character stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateCharacterStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dd style="margin-left: 20px;"><code>length</code> - the length of the stream</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getObject**

```
public Object getObject(int columnIndex)
                 throws SQLException
```

Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language. This method will return the value of the given column as a Java object. The type of the Java object will be the default Java object type corresponding to the column's SQL type, following the mapping for built-in types specified in the JDBC specification. If the value is an SQL NULL, the driver returns a Java null. This method may also be used to read database-specific abstract data types. In the JDBC 2.0 API, the behavior of method getObject is extended to materialize data of SQL user-defined types. When a column contains a structured or distinct value, the behavior of this method is as if it were a call to: getObject(columnIndex, this.getStatement().getConnection().getTypeMap()).<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a java.lang.Object holding the column value</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateObject**

```
public void updateObject(int columnIndex, Object x)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateObject**

```
public void updateObject(int columnIndex, Object x, int scale)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCursorName**

```
public String getCursorName()
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCursorName</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getString**

```
public String getString(int columnIndex)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getString</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateString**

```
public void updateString(int columnIndex, String x)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateString</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getByte**

```
public byte getByte(String columnName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getByte</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDouble**

```
public double getDouble(String columnName)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDouble</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getFloat**

```
public float getFloat(String columnName)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getFloat</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **findColumn**

```
public int findColumn(String columnName)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>findColumn</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getInt**

```
public int getInt(String columnName)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getInt</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getLong**

```
public long getLong(String columnName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getLong</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getShort**

```
public short getShort(String columnName)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getShort</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateNull**

```
public void updateNull(String columnName)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateNull</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBoolean**

```
public boolean getBoolean(String columnName)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBoolean</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
public byte[] getBytes(String columnName)
                throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language. The bytes represent the raw values returned by the driver.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getBytes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>columnName</code> - the SQL name of the column</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the column value; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateByte**

```
public void updateByte(String columnName, byte x)
                throws SQLException
```

Updates the designated column with a byte value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>updateByte</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnName</code> - the name of the column</dd><dd style="margin-left: 20px;"><code>x</code> - the new column value</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateDouble**

```
public void updateDouble(String columnName, double x)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by</strong>:</span></dt><dd style="margin-left: 40px;"><code>updateDouble</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateFloat

```
public void updateFloat(String columnName, float x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateFloat</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateInt

```
public void updateInt(String columnName, int x)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateInt</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateLong**

```
public void updateLong(String columnName, long x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateLong</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateShort**

```
public void updateShort(String columnName, short x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateShort</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateBoolean

```
public void updateBoolean(String columnName, boolean x)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBoolean</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateBytes**

```
public void updateBytes(String columnName, byte[] x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBytes</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int columnIndex)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int columnIndex, int scale)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateBigDecimal**

```
public void updateBigDecimal(int columnIndex, BigDecimal x)
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getURL**

```
public URL getURL(int columnIndex)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getURL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getArray**

```
public Array getArray(int i)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getArray</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateArray**

```
public void updateArray(int columnIndex, Array x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateArray</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBlob**

```
public Blob getBlob(int columnIndex)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBlob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateBlob

```
public void updateBlob(int columnIndex, Blob x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBlob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getClob**

```
public Clob getClob(int i)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getClob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateClob**

```
public void updateClob(int columnIndex, Clob x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateClob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(int columnIndex)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateDate**

```
public void updateDate(int columnIndex, Date x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getRef**

```
public Ref getRef(int i)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getRef</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateRef

```
public void updateRef(int columnIndex, Ref x)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateRef</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getMetaData**

```
public ResultSetMetaData getMetaData()
                              throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMetaData</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getWarnings**

```
public SQLWarning getWarnings()
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getWarnings</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getStatement

```
public Statement getStatement()
                       throws SQLException
```

Retrieves the Statement object that produced this ResultSet object. If the result set was generated some other way, such as by a DatabaseMetaData method, this method returns null.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the Statment object that produced this ResultSet object or null if the result set was produced some other way</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **getTime**

```
public Time getTime(int columnIndex)
             throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a java.sql.Time object in the Java programming language.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnIndex</code> - - the first column is 1, the second is 2, ...</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>the column value; if the value is SQL NULL, the value returned is null</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd>


<!--   -->


#### updateTime

```
public void updateTime(int columnIndex, Time x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(int columnIndex)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateTimestamp**

```
public void updateTimestamp(int columnIndex, Timestamp x)
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getAsciiStream**

```
public InputStream getAsciiStream(String columnName)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getAsciiStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBinaryStream**

```
public InputStream getBinaryStream(String columnName)
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBinaryStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getUnicodeStream**

```
public InputStream getUnicodeStream(String columnName)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getUnicodeStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateAsciiStream**

```
public void updateAsciiStream(String columnName, InputStream x, int length)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateAsciiStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateBinaryStream**

```
public void updateBinaryStream(String columnName, InputStream x, int length)
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBinaryStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getCharacterStream**

```
public Reader getCharacterStream(String columnName)
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCharacterStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateCharacterStream**

```
public void updateCharacterStream(String columnName, Reader reader, int length)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateCharacterStream</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(String columnName)
                 throws SQLException
```

Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language. This method will return the value of the given column as a Java object. The type of the Java object will be the default Java object type corresponding to the column's SQL type, following the mapping for built-in types specified in the JDBC specification. If the value is an SQL NULL, the driver returns a Java null. This method may also be used to read database-specific abstract data types. In the JDBC 2.0 API, the behavior of the method getObject is extended to materialize data of SQL user-defined types. When a column contains a structured or distinct value, the behavior of this method is as if it were a call to: getObject(columnIndex, this.getStatement().getConnection().getTypeMap()). jBASE note: We adopt data types defined for jDP, $JBASEHOME/include/DTYPEID.H,<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>columnName</code> - the SQL name of the column</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a java.lang.Object holding the column value</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd>


<!--   -->


#### **updateObject**

```
public void updateObject(String columnName, Object x)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateObject**

```
public void updateObject(String columnName, Object x, int scale)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(int i, Map map)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getString**

```
public String getString(String columnName)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getString</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateString

```
public void updateString(String columnName, String x)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateString</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(String columnName)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getBigDecimal

```
public BigDecimal getBigDecimal(String columnName, int scale)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateBigDecimal

```
public void updateBigDecimal(String columnName, BigDecimal x)
                      throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBigDecimal</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getURL**

```
public URL getURL(String columnName)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getURL</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getArray**

```
public Array getArray(String colName)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getArray</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateArray**

```
public void updateArray(String columnName, Array x)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateArray</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBlob**

```
public Blob getBlob(String columnName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getBlob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateBlob

```
public void updateBlob(String columnName, Blob x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateBlob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getClob**

```
public Clob getClob(String colName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getClob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateClob

```
public void updateClob(String columnName, Clob x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateClob</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(String columnName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **updateDate**

```
public void updateDate(String columnName, Date x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(int columnIndex, Calendar cal)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getRef**

```
public Ref getRef(String colName)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getRef</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateRef

```
public void updateRef(String columnName, Ref x)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateRef</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(String columnName)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateTime

```
public void updateTime(String columnName, Time x)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(int columnIndex, Calendar cal)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(String columnName)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### updateTimestamp

```
public void updateTimestamp(String columnName, Timestamp x)
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>updateTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(int columnIndex, Calendar cal)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(String colName, Map map)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getObject</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(String columnName, Calendar cal)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getDate</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(String columnName, Calendar cal)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTime</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(String columnName, Calendar cal)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTimestamp</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql">ResultSet</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
