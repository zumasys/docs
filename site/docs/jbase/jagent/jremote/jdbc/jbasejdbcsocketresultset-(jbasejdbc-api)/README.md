# JBaseJDBCSocketResultSet (jbasejdbc API)

**Created At:** 9/25/2017 10:55:54 AM  
**Updated At:** 4/3/2018 11:03:17 PM  
**Original Doc:** [com_jbase_jdbc_jbasejdbcsocketresultset](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketresultset)  
**Original ID:** 277927  
**Internal:** Yes  

&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;
# 

# Class JBaseJDBCSocketResultSet

All Implemented Interfaces:[JBaseJDBCGlobals](./../jbasejdbcglobals-%28jbasejdbc---api%29 "interface in com.jbase.jdbc"), [AutoCloseable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true "class or interface in java.lang"), [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
```
public class JBaseJDBCSocketResultSet
extends Object
implements ResultSet, JBaseJDBCGlobals
```

# 


# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`JBaseJDBCGlobals.TYPES`


# 


# Field Summary



## Fields inherited from interface java.sql.ResultSet
`CLOSE_CURSORS_AT_COMMIT, CONCUR_READ_ONLY, CONCUR_UPDATABLE, FETCH_FORWARD, FETCH_REVERSE, FETCH_UNKNOWN, HOLD_CURSORS_OVER_COMMIT, TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, TYPE_SCROLL_SENSITIVE`





## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`


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
| <br>[Time](./../../../../administration/utilities/time "class or interface in java.sql")<br> | <br>getTime(int columnIndex)<br> | <br>Retrieves the value of the designated column in the current row of this ResultSet object as a java.sql.Time object in the Java programming language.<br> |
| <br>[Time](./../../../../administration/utilities/time "class or interface in java.sql")<br> | <br>getTime(int columnIndex, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
| <br>[Time](./../../../../administration/utilities/time "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName)<br> | <br><br> |
| <br>[Time](./../../../../administration/utilities/time "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") cal)<br> | <br><br> |
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
| <br>void<br> | <br>updateTime(int columnIndex, [Time](./../../../../administration/utilities/time "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Time](./../../../../administration/utilities/time "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTimestamp(int columnIndex, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>void<br> | <br>updateTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") columnName, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") x)<br> | <br><br> |
| <br>boolean<br> | <br>wasNull()<br> | <br>Reports whether the last column read had a value of SQL NULL.<br> |




## 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`



## 


## Methods inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`getHoldability, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, isClosed, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBlob, updateBlob, updateBlob, updateBlob, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateClob, updateClob, updateClob, updateClob, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNString, updateNString, updateObject, updateObject, updateObject, updateObject, updateRowId, updateRowId, updateSQLXML, updateSQLXML`



# 


## Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

# Method Detail

#### **getConcurrency**

```
public int getConcurrency()
                   throws SQLException
```

Retrieves the concurrency mode of this ResultSet object. The concurrency used is determined by the Statement object that created the result set.
**Specified by:**`getConcurrency` in interface `ResultSet`
**Returns:**the concurrency type, either ResultSet.CONCUR\_READ\_ONLY or ResultSet.CONCUR\_UPDATABLE
**Throws:**`SQLException` - if a database access error occurs






#### **getFetchDirection**

```
public int getFetchDirection()
                      throws SQLException
```

Retrieves the fetch direction for this ResultSet object.
**Specified by:**`getFetchDirection` in interface `ResultSet`
**Returns:**the current fetch direction for this ResultSet object
**Throws:**`SQLException` - if a database access error occurs





#### **getFetchSize**

```
public int getFetchSize()
                 throws SQLException
```

Retrieves the fetch size for this ResultSet object.
**Specified by:**`getFetchSize` in interface `ResultSet`
**Returns:**the current fetch size for this ResultSet object
**Throws:**`SQLException` - if a database access error occurs





#### **getRow**

```
public int getRow()
           throws SQLException
```

Retrieves the current row number. The first row is number 1, the second number 2, and so on.
**Specified by:**`getRow` in interface `ResultSet`
**Returns:**the current row number; 0 if there is no current row
**Throws:**`SQLException` - if a database access error occurs





#### **getType**

```
public int getType()
            throws SQLException
```

Retrieves the type of this ResultSet object. The type is determined by the Statement object that created the result set.
**Specified by:**`getType` in interface `ResultSet`**Returns:**ResultSet.TYPE\_FORWARD\_ONLY, ResultSet.TYPE\_SCROLL\_INSENSITIVE, or ResultSet.TYPE\_SCROLL\_SENSITIVE
**Throws:**`SQLException` - if a database access error occurs





#### **afterLast**

```
public void afterLast()
               throws SQLException
```

Moves the cursor to the end of this ResultSet object, just after the last row. This method has no effect if the result set contains no rows.
**Specified by:**`afterLast` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY





#### **beforeFirst**

```
public void beforeFirst()
                 throws SQLException
```

Moves the cursor to the front of this ResultSet object, just before the first row. This method has no effect if the result set contains no rows.
**Specified by:**`beforeFirst` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY





#### **cancelRowUpdates**

```
public void cancelRowUpdates()
                      throws SQLException
```

Cancels the updates made to the current row in this ResultSet object. This method may be called after calling an updater method(s) and before calling the method updateRow to roll back the updates made to a row. If no updates have been made or updateRow has already been called, this method has no effect.
**Specified by:**`cancelRowUpdates` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or if this method is called when the cursor is on the insert row





#### **clearWarnings**

```
public void clearWarnings()
                   throws SQLException
```

Clears all warnings reported on this ResultSet object. After this method is called, the method getWarnings returns null until a new warning is reported for this ResultSet object.
**Specified by:**`clearWarnings` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs





#### **close**

```
public void close()
           throws SQLException
```

Releases this ResultSet object's database and JDBC resources immediately instead of waiting for this to happen when it is automatically closed. Note: A ResultSet object is automatically closed by the Statement object that generated it when that Statement object is closed, re-executed, or is used to retrieve the next result from a sequence of multiple results. A ResultSet object is also automatically closed when it is garbage collected.
**Specified by:**`close` in interface `AutoCloseable`
**Specified by:**`close` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs





#### **deleteRow**

```
public void deleteRow()
               throws SQLException
```

Deletes the current row from this ResultSet object and from the underlying database. This method cannot be called when the cursor is on the insert row.
**Specified by:**`deleteRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or if this method is called when the cursor is on the insert row





#### insertRow

```
public void insertRow()
               throws SQLException
```

Inserts the contents of the insert row into this ResultSet object and into the database. The cursor must be on the insert row when this method is called.
**Specified by:**`insertRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs, if this method is called when the cursor is not on the insert row, or if not all of non-nullable columns in the insert row have been given a value





#### **moveToCurrentRow**

```
public void moveToCurrentRow()
                      throws SQLException
```

Moves the cursor to the remembered cursor position, usually the current row. This method has no effect if the cursor is not on the insert row.
**Specified by:**`moveToCurrentRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or the result set is not updatable





#### **moveToInsertRow**

```
public void moveToInsertRow()
                     throws SQLException
```

Moves the cursor to the insert row. The current cursor position is remembered while the cursor is positioned on the insert row. The insert row is a special row associated with an updatable result set. It is essentially a buffer where a new row may be constructed by calling the updater methods prior to inserting the row into the result set. Only the updater, getter, and insertRow methods may be called when the cursor is on the insert row. All of the columns in a result set must be given a value each time this method is called before calling insertRow. An updater method must be called before a getter method can be called on a column value.
Specified by:`moveToInsertRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or the result set is not updatable





#### **refreshRow**

```
public void refreshRow()
                throws SQLException
```

Refreshes the current row with its most recent value in the database. This method cannot be called when the cursor is on the insert row. The refreshRow method provides a way for an application to explicitly tell the JDBC driver to refetch a row(s) from the database. An application may want to call refreshRow when caching or prefetching is being done by the JDBC driver to fetch the latest value of a row from the database. The JDBC driver may actually refresh multiple rows at once if the fetch size is greater than one. All values are refetched subject to the transaction isolation level and cursor sensitivity. If refreshRow is called after calling an updater method, but before calling the method updateRow, then the updates made to the row are lost. Calling the method refreshRow frequently will likely slow performance.
**Specified by:**`refreshRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or if this method is called when the cursor is on the insert row





#### **updateRow**

```
public void updateRow()
               throws SQLException
```

Updates the underlying database with the new contents of the current row of this ResultSet object. This method cannot be called when the cursor is on the insert row.
**Specified by:**`updateRow` in interface `ResultSet`
**Throws:**`SQLException` - if a database access error occurs or if this method is called when the cursor is on the insert row





#### **first**

```
public boolean first()
              throws SQLException
```

Moves the cursor to the first row in this ResultSet object.
**Specified by:**`first` in interface `ResultSet`
**Returns:**true if the cursor is on a valid row; false if there are no rows in the result set
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY





#### **isAfterLast**

```
public boolean isAfterLast()
                    throws SQLException
```

Retrieves whether the cursor is after the last row in this ResultSet object.
**Specified by:**`isAfterLast` in interface `ResultSet`
**Returns:**true if the cursor is after the last row; false if the cursor is at any other position or the result set contains no rows
**Throws:**`SQLException` - if a database access error occurs





#### **isBeforeFirst**

```
public boolean isBeforeFirst()
                      throws SQLException
```

Retrieves whether the cursor is before the first row in this ResultSet object.
**Specified by:**`isBeforeFirst` in interface `ResultSet`
**Returns:**true if the cursor is before the first row; false if the cursor is at any other position or the result set contains no rows
**Throws:**`SQLException` - if a database access error occurs





#### **isFirst**

```
public boolean isFirst()
                throws SQLException
```

Retrieves whether the cursor is on the first row of this ResultSet object.
**Specified by:**`isFirst` in interface `ResultSet`
**Returns:**true if the cursor is on the first row; false otherwise
**Throws:**`SQLException` - if a database access error occurs





#### **isLast**

```
public boolean isLast()
               throws SQLException
```

Retrieves whether the cursor is on the last row of this ResultSet object. Note: Calling the method isLast may be expensive because the JDBC driver might need to fetch ahead one row in order to determine whether the current row is the last row in the result set.
**Specified by:**`isLast` in interface `ResultSet`
**Returns:**true if the cursor is on the last row; false otherwise
**Throws:**`SQLException` - if a database access error occurs





#### **last**

```
public boolean last()
             throws SQLException
```

Moves the cursor to the last row in this ResultSet object.
**Specified by:**`last` in interface `ResultSet`
**Returns:**true if the cursor is on a valid row; false if there are no rows in the result set
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY





#### **next**

```
public boolean next()
             throws SQLException
```

Moves the cursor down one row from its current position. A ResultSet cursor is initially positioned before the first row; the first call to the method next makes the first row the current row; the second call makes the second row the current row, and so on. If an input stream is open for the current row, a call to the method next will implicitly close it. A ResultSet object's warning chain is cleared when a new row is read.
**Specified by:**`next` in interface `ResultSet`
**Returns:**true if the new current row is valid; false if there are no more rows
**Throws:**`SQLException` - if a database access error occurs





#### **previous**

```
public boolean previous()
                 throws SQLException
```

Moves the cursor to the previous row in this ResultSet object.
**Specified by:**`previous` in interface `ResultSet`
**Returns:**true if the cursor is on a valid row; false if it is off the result set
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY





#### **rowDeleted**

```
public boolean rowDeleted()
                   throws SQLException
```

Retrieves whether a row has been deleted. A deleted row may leave a visible "hole" in a result set. This method can be used to detect holes in a result set. The value returned depends on whether or not this ResultSet object can detect deletions.
**Specified by:**`rowDeleted` in interface `ResultSet`
**Returns:**true if a row was deleted and deletions are detected; false otherwise
**Throws:**`SQLException` - if a database access error occurs





#### **rowInserted**

```
public boolean rowInserted()
                    throws SQLException
```

Retrieves whether the current row has had an insertion. The value returned depends on whether or not this ResultSet object can detect visible inserts.
**Specified by:**`rowInserted` in interface `ResultSet`
**Returns:**true if a row has had an insertion and insertions are detected; false otherwise
**Throws:**`SQLException` - if a database access error occurs





#### rowUpdated

```
public boolean rowUpdated()
                   throws SQLException
```

Retrieves whether the current row has been updated. The value returned depends on whether or not the result set can detect updates.
**Specified by:**`rowUpdated` in interface `ResultSet`
**Returns:**true if both (1) the row has been visibly updated by the owner or another and (2) updates are detected
**Throws:**`SQLException` - if a database access error occurs





#### **wasNull**

```
public boolean wasNull()
                throws SQLException
```

Reports whether the last column read had a value of SQL NULL. Note that you must first call one of the getter methods on a column to try to read its value and then call the method wasNull to see if the value read was SQL NULL.
**Specified by:**`wasNull` in interface `ResultSet`
**Returns:**true if the last column value read was SQL NULL and false otherwise
**Throws:**`SQLException` - if a database access error occurs





#### **getByte**

```
public byte getByte(int columnIndex)
             throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte in the Java programming language.
**Specified by:**`getByte` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**the column value; if the value is SQL NULL, the value returned is 0
**Throws:**`SQLException` - if a database access error occurs





#### **getDouble**

```
public double getDouble(int columnIndex)
                 throws SQLException
```

**Specified by:**`getDouble` in interface `ResultSet`
**Throws:**`SQLException`




#### **getFloat**

```
public float getFloat(int columnIndex)
               throws SQLException
```

S**pecified by:**`getFloat` in interface `ResultSet`
**Throws:**`SQLException`




#### **getInt**

```
public int getInt(int columnIndex)
           throws SQLException
```

**Specified by:**`getInt` in interface `ResultSet`
**Throws:**`SQLException`




#### **getLong**

```
public long getLong(int columnIndex)
             throws SQLException
```

**Specified by:**`getLong` in interface `ResultSet`
**Throws:**`SQLException`




#### **getShort**

```
public short getShort(int columnIndex)
               throws SQLException
```

**Specified by:**`getShort` in interface `ResultSet`
**Throws:**`SQLException`




#### **setFetchDirection**

```
public void setFetchDirection(int direction)
                       throws SQLException
```

Gives a hint as to the direction in which the rows in this ResultSet object will be processed. The initial value is determined by the Statement object that produced this ResultSet object. The fetch direction may be changed at any time.
**Specified by:**`setFetchDirection` in interface `ResultSet`
**Parameters:**`direction` - an int specifying the suggested fetch direction; one of ResultSet.FETCH\_FORWARD, ResultSet.FETCH\_REVERSE, or ResultSet.FETCH\_UNKNOWN
**Throws:**`SQLException` - if a database access error occurs or the result set type is TYPE\_FORWARD\_ONLY and the fetch direction is not FETCH\_FORWARD





#### **setFetchSize**

```
public void setFetchSize(int rows)
                  throws SQLException
```

Gives the JDBC driver a hint as to the number of rows that should be fetched from the database when more rows are needed for this ResultSet object. If the fetch size specified is zero, the JDBC driver ignores the value and is free to make its own best guess as to what the fetch size should be. The default value is set by the Statement object that created the result set. The fetch size may be changed at any time.
S**pecified by:**`setFetchSize` in interface `ResultSet`
**Parameters:**`rows` - the number of rows to fetch
**Throws:**`SQLException` - if a database access error occurs or the condition 0 &lt;= rows &lt;= Statement.getMaxRows() is not satisfied





#### **updateNull**

```
public void updateNull(int columnIndex)
                throws SQLException
```

Gives a nullable column a null value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.
**Specified by:**`updateNull` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Throws:**`SQLException` - if a database access error occurs





#### **absolute**

```
public boolean absolute(int row)
                 throws SQLException
```

Moves the cursor to the given row number in this ResultSet object. If the row number is positive, the cursor moves to the given row number with respect to the beginning of the result set. The first row is row 1, the second is row 2, and so on. If the given row number is negative, the cursor moves to an absolute row position with respect to the end of the result set. For example, calling the method absolute(-1) positions the cursor on the last row; calling the method absolute(-2) moves the cursor to the next-to-last row, and so on. An attempt to position the cursor beyond the first/last row in the result set leaves the cursor before the first row or after the last row. Note: Calling absolute(1) is the same as calling first(). Calling absolute(-1) is the same as calling last().
**Specified by:**`absolute` in interface `ResultSet`
**Parameters:**`row` - the number of the row to which the cursor should move. A positive number indicates the row number counting from the beginning of the result set; a negative number indicates the row number counting from the end of the result set
**Returns:**true if the cursor is on the result set; false otherwise
**Throws:**`SQLException` - if a database access error occurs, or the result set type is TYPE\_FORWARD\_ONLY





#### **getBoolean**

```
public boolean getBoolean(int columnIndex)
                   throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a boolean in the Java programming language.
**Specified by:**`getBoolean` in interface `ResultSet`
**Parameters:**`    columnIndex` - the first column is 1, the second is 2, ...
**Returns:**the column value; if the value is SQL NULL, the value returned is false
**Throws:**`SQLException` - if a database access error occurs





#### **relative**

```
public boolean relative(int rows)
                 throws SQLException
```

Moves the cursor a relative number of rows, either positive or negative. Attempting to move beyond the first/last row in the result set positions the cursor before/after the the first/last row. Calling relative(0) is valid, but does not change the cursor position. Note: Calling the method relative(1) is identical to calling the method next() and calling the method relative(-1) is identical to calling the method previous().
**Specified by:**`relative` in interface `ResultSet`
**Parameters:**`rows` - an int specifying the number of rows to move from the current row; a positive number moves the cursor forward; a negative number moves the cursor backward
**Returns:**true if the cursor is on a row; false otherwise
**Throws:**`SQLException` - if a database access error occurs, there is no current row, or the result set type is TYPE\_FORWARD\_ONLY





#### **getBytes**

```
public byte[] getBytes(int columnIndex)
                throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language. The bytes represent the raw values returned by the driver.
**Specified by:**`getBytes` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**the column value; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - if a database access error occurs





#### **updateByte**

```
public void updateByte(int columnIndex, byte x)
                throws SQLException
```

Updates the designated column with a byte value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database. 
**Specified by:**`updateByte` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...`x` - the new column value
**Throws:**`SQLException` - if a database access error occurs





#### **updateDouble**

```
public void updateDouble(int columnIndex, double x)
                  throws SQLException
```

Updates the designated column with a double value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.

**Specified by:**`updateDouble` in interface `ResultSet`

**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...`x` - the new column value
**Throws:**`SQLException` - if a database access error occurs





#### **updateFloat**

```
public void updateFloat(int columnIndex, float x)
                 throws SQLException
```

**Specified by:**`updateFloat` in interface `ResultSet`

**Throws:**`SQLException`




#### **updateInt**

```
public void updateInt(int columnIndex, int x)
               throws SQLException
```

**Specified by:**`updateInt` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateLong**

```
public void updateLong(int columnIndex, long x)
                throws SQLException
```

**Specified by:**`updateLong` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateShort**

```
public void updateShort(int columnIndex, short x)
                 throws SQLException
```

**Specified by:**`updateShort` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateBoolean**

```
public void updateBoolean(int columnIndex,
                          boolean x)
                   throws SQLException
```

**Specified by:**`updateBoolean` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateBytes**

```
public void updateBytes(int columnIndex, byte[] x)
                 throws SQLException
```

**Specified by:**`updateBytes` in interface `ResultSet`
**Throws:**`SQLException`




#### **getAsciiStream**

```
public InputStream getAsciiStream(int columnIndex)
                           throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a stream of ASCII characters. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARCHAR values. The JDBC driver will do any necessary conversion from the database format into ASCII. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called whether there is data available or not.
**Specified by:**`getAsciiStream` in interface `ResultSet`
**Parameters:**`    columnIndex` - the first column is 1, the second is 2, ...
**Returns:**a Java input stream that delivers the database column value as a stream of one-byte ASCII characters; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - if a database access error occurs





#### **getBinaryStream**

```
public InputStream getBinaryStream(int columnIndex)
                            throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a binary stream of uninterpreted bytes. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARBINARY values. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called whether there is data available or not.
**Specified by:**`getBinaryStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**a Java input stream that delivers the database column value as a stream of uninterpreted bytes; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - if a database access error occurs





#### **getUnicodeStream**

```
public InputStream getUnicodeStream(int columnIndex)
                             throws SQLException
```

Deprecated. use getCharacterStream in place of getUnicodeStream

Retrieves the value of the designated column in the current row of this ResultSet object as as a stream of two-byte Unicode characters. The first byte is the high byte; the second byte is the low byte. The value can then be read in chunks from the stream. This method is particularly suitable for retrieving large LONGVARCHARvalues. The JDBC driver will do any necessary conversion from the database format into Unicode. Note: All the data in the returned stream must be read prior to getting the value of any other column. The next call to a getter method implicitly closes the stream. Also, a stream may return 0 when the method InputStream.available is called, whether there is data available or not.

**Specified by:**`getUnicodeStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**a Java input stream that delivers the database column value as a stream of two-byte Unicode characters; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - if a database access error occurs





#### **updateAsciiStream**

```
public void updateAsciiStream(int columnIndex, InputStream x, int length)
                       throws SQLException
```

Updates the designated column with an ascii stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.
**Specified by:**`updateAsciiStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...`x` - the new column value`length` - the length of the stream
**Throws:**`SQLException` - if a database access error occurs





#### **updateBinaryStream**

```
public void updateBinaryStream(int columnIndex, InputStream x, int length)
                        throws SQLException
```

Updates the designated column with a binary stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.
**Specified by:**`updateBinaryStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...`x` - the new column value`length` - the length of the stream
**Throws:**`SQLException` - if a database access error occurs





#### **getCharacterStream**

```
public Reader getCharacterStream(int columnIndex)
                          throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a java.io.Reader object.
**Specified by:**`getCharacterStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**a java.io.Reader object that contains the column value; if the value is SQL NULL, the value returned is null in the Java programming language.
**Throws:**`SQLException` - if a database access error occurs





#### **updateCharacterStream**

```
public void updateCharacterStream(int columnIndex, Reader x, int length)
                           throws SQLException
```

Updates the designated column with a character stream value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.
**Specified by:**`updateCharacterStream` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...`x` - the new column value`length` - the length of the stream
**Throws:**`SQLException` - if a database access error occurs





#### **getObject**

```
public Object getObject(int columnIndex)
                 throws SQLException
```

Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language. This method will return the value of the given column as a Java object. The type of the Java object will be the default Java object type corresponding to the column's SQL type, following the mapping for built-in types specified in the JDBC specification. If the value is an SQL NULL, the driver returns a Java null. This method may also be used to read database-specific abstract data types. In the JDBC 2.0 API, the behavior of method getObject is extended to materialize data of SQL user-defined types. When a column contains a structured or distinct value, the behavior of this method is as if it were a call to: getObject(columnIndex, this.getStatement().getConnection().getTypeMap()).
**Specified by:**`getObject` in interface `ResultSet`
**Parameters:**`columnIndex` - the first column is 1, the second is 2, ...
**Returns:**a java.lang.Object holding the column value
**Throws:**`SQLException` - if a database access error occurs





#### **updateObject**

```
public void updateObject(int columnIndex, Object x)
                  throws SQLException
```

**Specified by:**`updateObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateObject**

```
public void updateObject(int columnIndex, Object x, int scale)
                  throws SQLException
```
**Specified by:**`updateObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **getCursorName**

```
public String getCursorName()
                     throws SQLException
```

**Specified by:**`getCursorName` in interface `ResultSet`
**Throws:**`SQLException`




#### **getString**

```
public String getString(int columnIndex)
                 throws SQLException
```

**Specified by:**`getString` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateString**

```
public void updateString(int columnIndex, String x)
                  throws SQLException
```

**Specified by:**`updateString` in interface `ResultSet`
**Throws:**`SQLException`




#### **getByte**

```
public byte getByte(String columnName)
             throws SQLException
```

**Specified by:**`getByte` in interface `ResultSet`
**Throws:**`SQLException`




#### **getDouble**

```
public double getDouble(String columnName)
                 throws SQLException
```

**Specified by:**`getDouble` in interface `ResultSet`
**Throws:**`SQLException`




#### **getFloat**

```
public float getFloat(String columnName)
               throws SQLException
```

**Specified by:**`getFloat` in interface `ResultSet`
**Throws:**`SQLException`




#### **findColumn**

```
public int findColumn(String columnName)
               throws SQLException
```

**Specified by:**`findColumn` in interface `ResultSet`
**Throws:**`SQLException`




#### **getInt**

```
public int getInt(String columnName)
           throws SQLException
```

**Specified by:**`getInt` in interface `ResultSet`
**Throws:**`SQLException`




#### **getLong**

```
public long getLong(String columnName)
             throws SQLException
```

**Specified by:**`getLong` in interface `ResultSet`
**Throws:**`SQLException`




#### **getShort**

```
public short getShort(String columnName)
               throws SQLException
```

**Specified by:**`getShort` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateNull**

```
public void updateNull(String columnName)
                throws SQLException
```

**Specified by:**`updateNull` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBoolean**

```
public boolean getBoolean(String columnName)
                   throws SQLException
```

**Specified by:**`getBoolean` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBytes**

```
public byte[] getBytes(String columnName)
                throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a byte array in the Java programming language. The bytes represent the raw values returned by the driver.
**Specified by:**`getBytes` in interface `ResultSet`
Parameters:`columnName` - the SQL name of the column
**Returns:**the column value; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - if a database access error occurs





#### **updateByte**

```
public void updateByte(String columnName, byte x)
                throws SQLException
```

Updates the designated column with a byte value. The updater methods are used to update column values in the current row or the insert row. The updater methods do not update the underlying database; instead the updateRow or insertRow methods are called to update the database.
**Specified by:**`updateByte` in interface `ResultSet`
**Parameters:**`columnName` - the name of the column`x` - the new column value
**Throws:**`SQLException` - if a database access error occurs





#### **updateDouble**

```
public void updateDouble(String columnName, double x)
                  throws SQLException
```

**Specified by**:`updateDouble` in interface `ResultSet`
**Throws:**`SQLException`




#### updateFloat

```
public void updateFloat(String columnName, float x)
                 throws SQLException
```

**Specified by:**`updateFloat` in interface `ResultSet`
**Throws:**`SQLException`




#### updateInt

```
public void updateInt(String columnName, int x)
               throws SQLException
```

**Specified by:**`updateInt` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateLong**

```
public void updateLong(String columnName, long x)
                throws SQLException
```

**Specified by:**`updateLong` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateShort**

```
public void updateShort(String columnName, short x)
                 throws SQLException
```

**Specified by:**`updateShort` in interface `ResultSet`
**Throws:**`SQLException`




#### updateBoolean

```
public void updateBoolean(String columnName, boolean x)
                   throws SQLException
```

**Specified by:**`updateBoolean` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateBytes**

```
public void updateBytes(String columnName, byte[] x)
                 throws SQLException
```

**Specified by:**`updateBytes` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int columnIndex)
                         throws SQLException
```

**Specified by:**`getBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int columnIndex, int scale)
                         throws SQLException
```

**Specified by:**`getBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateBigDecimal**

```
public void updateBigDecimal(int columnIndex, BigDecimal x)
                      throws SQLException
```

**Specified by:**`updateBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### **getURL**

```
public URL getURL(int columnIndex)
           throws SQLException
```

**Specified by:**`getURL` in interface `ResultSet`
**Throws:**`SQLException`




#### **getArray**

```
public Array getArray(int i)
               throws SQLException
```

**Specified by:**`getArray` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateArray**

```
public void updateArray(int columnIndex, Array x)
                 throws SQLException
```

**Specified by:**`updateArray` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBlob**

```
public Blob getBlob(int columnIndex)
             throws SQLException
```

**Specified by:**`getBlob` in interface `ResultSet`
**Throws:**`SQLException`




#### updateBlob

```
public void updateBlob(int columnIndex, Blob x)
                throws SQLException
```

**Specified by:**`updateBlob` in interface `ResultSet`
**Throws:**`SQLException`




#### **getClob**

```
public Clob getClob(int i)
             throws SQLException
```

**Specified by:**`getClob` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateClob**

```
public void updateClob(int columnIndex, Clob x)
                throws SQLException
```

**Specified by:**`updateClob` in interface `ResultSet`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(int columnIndex)
             throws SQLException
```

**Specified by:**`getDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateDate**

```
public void updateDate(int columnIndex, Date x)
                throws SQLException
```

**Specified by:**`updateDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **getRef**

```
public Ref getRef(int i)
           throws SQLException
```

**Specified by:**`getRef` in interface `ResultSet`
**Throws:**`SQLException`




#### updateRef

```
public void updateRef(int columnIndex, Ref x)
               throws SQLException
```

**Specified by:**`updateRef` in interface `ResultSet`
**Throws:**`SQLException`




#### **getMetaData**

```
public ResultSetMetaData getMetaData()
                              throws SQLException
```

**Specified by:**`getMetaData` in interface `ResultSet`
**Throws:**`SQLException`




#### **getWarnings**

```
public SQLWarning getWarnings()
                       throws SQLException
```

**Specified by:**`getWarnings` in interface `ResultSet`
**Throws:**`SQLException`




#### getStatement

```
public Statement getStatement()
                       throws SQLException
```

Retrieves the Statement object that produced this ResultSet object. If the result set was generated some other way, such as by a DatabaseMetaData method, this method returns null.
**Specified by:**`getStatement` in interface `ResultSet`
**Returns:**the Statment object that produced this ResultSet object or null if the result set was produced some other way
**Throws:**`SQLException` - if a database access error occurs





#### **getTime**

```
public Time getTime(int columnIndex)
             throws SQLException
```

Retrieves the value of the designated column in the current row of this ResultSet object as a java.sql.Time object in the Java programming language.
**Specified by:**`getTime` in interface `ResultSet`
**Parameters:**`columnIndex` - - the first column is 1, the second is 2, ...
**Returns:**the column value; if the value is SQL NULL, the value returned is null
**Throws:**`SQLException` - - if a database access error occurs





#### updateTime

```
public void updateTime(int columnIndex, Time x)
                throws SQLException
```

**Specified by:**`updateTime` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(int columnIndex)
                       throws SQLException
```

**Specified by:**`getTimestamp` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateTimestamp**

```
public void updateTimestamp(int columnIndex, Timestamp x)
                     throws SQLException
```

**Specified by:**`updateTimestamp` in interface `ResultSet`
**Throws:**`SQLException`




#### **getAsciiStream**

```
public InputStream getAsciiStream(String columnName)
                           throws SQLException
```

**Specified by:**`getAsciiStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBinaryStream**

```
public InputStream getBinaryStream(String columnName)
                            throws SQLException
```

**Specified by:**`getBinaryStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **getUnicodeStream**

```
public InputStream getUnicodeStream(String columnName)
                             throws SQLException
```

**Specified by:**`getUnicodeStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateAsciiStream**

```
public void updateAsciiStream(String columnName, InputStream x, int length)
                       throws SQLException
```

**Specified by:**`updateAsciiStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateBinaryStream**

```
public void updateBinaryStream(String columnName, InputStream x, int length)
                        throws SQLException
```

**Specified by:**`updateBinaryStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **getCharacterStream**

```
public Reader getCharacterStream(String columnName)
                          throws SQLException
```

**Specified by:**`getCharacterStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateCharacterStream**

```
public void updateCharacterStream(String columnName, Reader reader, int length)
                           throws SQLException
```

**Specified by:**`updateCharacterStream` in interface `ResultSet`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(String columnName)
                 throws SQLException
```

Gets the value of the designated column in the current row of this ResultSet object as an Object in the Java programming language. This method will return the value of the given column as a Java object. The type of the Java object will be the default Java object type corresponding to the column's SQL type, following the mapping for built-in types specified in the JDBC specification. If the value is an SQL NULL, the driver returns a Java null. This method may also be used to read database-specific abstract data types. In the JDBC 2.0 API, the behavior of the method getObject is extended to materialize data of SQL user-defined types. When a column contains a structured or distinct value, the behavior of this method is as if it were a call to: getObject(columnIndex, this.getStatement().getConnection().getTypeMap()). jBASE note: We adopt data types defined for jDP, $JBASEHOME/include/DTYPEID.H,
**Specified by:**`getObject` in interface `ResultSet`
**Parameters:**`columnName` - the SQL name of the column
**Returns:**a java.lang.Object holding the column value
**Throws:**`SQLException` - if a database access error occurs





#### **updateObject**

```
public void updateObject(String columnName, Object x)
                  throws SQLException
```

**Specified by:**`updateObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateObject**

```
public void updateObject(String columnName, Object x, int scale)
                  throws SQLException
```

**Specified by:**`updateObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(int i, Map map)
                 throws SQLException
```

**Specified by:**`getObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **getString**

```
public String getString(String columnName)
                 throws SQLException
```

**Specified by:**`getString` in interface `ResultSet`
**Throws:**`SQLException`




#### updateString

```
public void updateString(String columnName, String x)
                  throws SQLException
```

**Specified by:**`updateString` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(String columnName)
                         throws SQLException
```

**Specified by:**`getBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### getBigDecimal

```
public BigDecimal getBigDecimal(String columnName, int scale)
                         throws SQLException
```

**Specified by:**`getBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### updateBigDecimal

```
public void updateBigDecimal(String columnName, BigDecimal x)
                      throws SQLException
```

**Specified by:**`updateBigDecimal` in interface `ResultSet`
**Throws:**`SQLException`




#### **getURL**

```
public URL getURL(String columnName)
           throws SQLException
```

**Specified by:**`getURL` in interface `ResultSet`
**Throws:**`SQLException`




#### **getArray**

```
public Array getArray(String colName)
               throws SQLException
```

**Specified by:**`getArray` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateArray**

```
public void updateArray(String columnName, Array x)
                 throws SQLException
```

**Specified by:**`updateArray` in interface `ResultSet`
**Throws:**`SQLException`




#### **getBlob**

```
public Blob getBlob(String columnName)
             throws SQLException
```

**Specified by:**`getBlob` in interface `ResultSet`
**Throws:**`SQLException`




#### updateBlob

```
public void updateBlob(String columnName, Blob x)
                throws SQLException
```

**Specified by:**`updateBlob` in interface `ResultSet`
**Throws:**`SQLException`




#### **getClob**

```
public Clob getClob(String colName)
             throws SQLException
```

**Specified by:**`getClob` in interface `ResultSet`
**Throws:**`SQLException`




#### updateClob

```
public void updateClob(String columnName, Clob x)
                throws SQLException
```

**Specified by:**`updateClob` in interface `ResultSet`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(String columnName)
             throws SQLException
```

**Specified by:**`getDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **updateDate**

```
public void updateDate(String columnName, Date x)
                throws SQLException
```

**Specified by:**`updateDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(int columnIndex, Calendar cal)
             throws SQLException
```

**Specified by:**`getDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **getRef**

```
public Ref getRef(String colName)
           throws SQLException
```

**Specified by:**`getRef` in interface `ResultSet`
**Throws:**`SQLException`




#### updateRef

```
public void updateRef(String columnName, Ref x)
               throws SQLException
```

**Specified by:**`updateRef` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(String columnName)
             throws SQLException
```
**Specified by:**`getTime` in interface `ResultSet`
**Throws:**`SQLException`




#### updateTime

```
public void updateTime(String columnName, Time x)
                throws SQLException
```

**Specified by:**`updateTime` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(int columnIndex, Calendar cal)
             throws SQLException
```

**Specified by:**`getTime` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(String columnName)
                       throws SQLException
```

**Specified by:**`getTimestamp` in interface `ResultSet`
**Throws:**`SQLException`




#### updateTimestamp

```
public void updateTimestamp(String columnName, Timestamp x)
                     throws SQLException
```

**Specified by:**`updateTimestamp` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(int columnIndex, Calendar cal)
                       throws SQLException
```

**Specified by:**`getTimestamp` in interface `ResultSet`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(String colName, Map map)
                 throws SQLException
```

**Specified by:**`getObject` in interface `ResultSet`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(String columnName, Calendar cal)
             throws SQLException
```

**Specified by:**`getDate` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(String columnName, Calendar cal)
             throws SQLException
```

**Specified by:**`getTime` in interface `ResultSet`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(String columnName, Calendar cal)
                       throws SQLException
```

**Specified by:**`getTimestamp` in interface `ResultSet`
**Throws:**`SQLException`


