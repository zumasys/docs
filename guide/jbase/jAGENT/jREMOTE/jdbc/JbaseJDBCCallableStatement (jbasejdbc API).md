# JbaseJDBCCallableStatement (jbasejdbc API)

**Created At:** 9/25/2017 10:54:43 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class JbaseJDBCCallableStatement

<dt><strong>All Implemented Interfaces:</strong></dt><dd><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals" title="interface in com.jbase.jdbc">JBaseJDBCGlobals</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true" title="class or interface in java.sql">PreparedStatement</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true" title="class or interface in java.sql">Statement</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a></dd>
```
public class JbaseJDBCCallableStatement
extends JBaseJDBCPreparedStatement
implements CallableStatement
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

## Fields inherited from class com.jbase.jdbc.JBaseJDBCPreparedStatement
`parameters`

<!--   -->

## Fields inherited from class com.jbase.jdbc.JBaseJDBCSocketStatement
`batchRequestsList`

<!--   -->

## Fields inherited from interface java.sql.Statement
`CLOSE_ALL_RESULTS, CLOSE_CURRENT_RESULT, EXECUTE_FAILED, KEEP_CURRENT_RESULT, NO_GENERATED_KEYS, RETURN_GENERATED_KEYS, SUCCESS_NO_INFO`

<!--   -->

## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`


<!--   -->

# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JbaseJDBCCallableStatement([JBaseJDBCSocketConnection](/39228-jdbc/com_jbase_jdbc_JBaseJDBCSocketConnection "class in com.jbase.jdbc") connection, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql)<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>boolean<br> | <br>execute()<br> | <br> |
| <br>int<br> | <br>executeUpdate()<br> | <br>Executes the SQL statement in this PreparedStatement object, which must be an SQL INSERT, UPDATE or DELETE statement; or an SQL statement that returns nothing, such as a DDL statement.<br> |
| <br>[Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql")<br> | <br>getArray(int arg0)<br> | <br> |
| <br>[Array](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Array.html?is-external=true "class or interface in java.sql")<br> | <br>getArray([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | <br>getBigDecimal(int i)<br> | <br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | <br>getBigDecimal(int arg0, int arg1)<br> | <br> |
| <br>[BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math")<br> | <br>getBigDecimal([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | <br>getBlob(int arg0)<br> | <br> |
| <br>[Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | <br>getBlob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>boolean<br> | <br>getBoolean(int arg0)<br> | <br> |
| <br>boolean<br> | <br>getBoolean([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>byte<br> | <br>getByte(int arg0)<br> | <br> |
| <br>byte<br> | <br>getByte([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>byte[]<br> | <br>getBytes(int arg0)<br> | <br> |
| <br>byte[]<br> | <br>getBytes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql")<br> | <br>getClob(int arg0)<br> | <br> |
| <br>[Clob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Clob.html?is-external=true "class or interface in java.sql")<br> | <br>getClob([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate(int arg0)<br> | <br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate(int arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql")<br> | <br>getDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>double<br> | <br>getDouble(int i)<br> | <br> |
| <br>double<br> | <br>getDouble([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>float<br> | <br>getFloat(int i)<br> | <br> |
| <br>float<br> | <br>getFloat([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>int<br> | <br>getInt(int i)<br> | <br> |
| <br>int<br> | <br>getInt([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>long<br> | <br>getLong(int i)<br> | <br> |
| <br>long<br> | <br>getLong([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject(int arg0)<br> | <br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject(int arg0, [Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>getObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql")<br> | <br>getRef(int arg0)<br> | <br> |
| <br>[Ref](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Ref.html?is-external=true "class or interface in java.sql")<br> | <br>getRef([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>short<br> | <br>getShort(int i)<br> | <br> |
| <br>short<br> | <br>getShort([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getString(int arg0)<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getString([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime(int arg0)<br> | <br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime(int arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql")<br> | <br>getTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp(int arg0)<br> | <br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp(int arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>[Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql")<br> | <br>getTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg1)<br> | <br> |
| <br>[URL](http://java.sun.com/j2se/1.5.0/docs/api/java/net/URL.html?is-external=true "class or interface in java.net")<br> | <br>getURL(int arg0)<br> | <br> |
| <br>[URL](http://java.sun.com/j2se/1.5.0/docs/api/java/net/URL.html?is-external=true "class or interface in java.net")<br> | <br>getURL([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0)<br> | <br> |
| <br>void<br> | <br>registerOutParameter(int parameterIndex, int sqlType)<br> | <br>Registers the OUT parameter in ordinal position parameterIndex to the JDBC type sqlType.<br> |
| <br>void<br> | <br>registerOutParameter(int parameterIndex, int sqlType, int scale)<br> | <br>Registers the parameter in ordinal position parameterIndex to be of JDBC type sqlType.<br> |
| <br>void<br> | <br>registerOutParameter(int arg0, int arg1, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg2)<br> | <br> |
| <br>void<br> | <br>registerOutParameter([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1)<br> | <br> |
| <br>void<br> | <br>registerOutParameter([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1, int arg2)<br> | <br> |
| <br>void<br> | <br>registerOutParameter([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg2)<br> | <br> |
| <br>void<br> | <br>setAsciiStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") arg1, int arg2)<br> | <br> |
| <br>void<br> | <br>setBigDecimal([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [BigDecimal](http://java.sun.com/j2se/1.5.0/docs/api/java/math/BigDecimal.html?is-external=true "class or interface in java.math") arg1)<br> | <br> |
| <br>void<br> | <br>setBinaryStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") arg1, int arg2)<br> | <br> |
| <br>void<br> | <br>setBoolean([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, boolean arg1)<br> | <br> |
| <br>void<br> | <br>setByte([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, byte arg1)<br> | <br> |
| <br>void<br> | <br>setBytes([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, byte[] arg1)<br> | <br> |
| <br>void<br> | <br>setCharacterStream([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Reader](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Reader.html?is-external=true "class or interface in java.io") arg1, int arg2)<br> | <br> |
| <br>void<br> | <br>setDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql") arg1)<br> | <br> |
| <br>void<br> | <br>setDate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Date](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html?is-external=true "class or interface in java.sql") arg1, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg2)<br> | <br> |
| <br>void<br> | <br>setDouble([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, double arg1)<br> | <br> |
| <br>void<br> | <br>setFloat([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, float arg1)<br> | <br> |
| <br>void<br> | <br>setInt([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1)<br> | <br> |
| <br>void<br> | <br>setLong([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, long arg1)<br> | <br> |
| <br>void<br> | <br>setNull([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1)<br> | <br> |
| <br>void<br> | <br>setNull([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, int arg1, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg2)<br> | <br> |
| <br>void<br> | <br>setObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") arg1)<br> | <br> |
| <br>void<br> | <br>setObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") arg1, int arg2)<br> | <br> |
| <br>void<br> | <br>setObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang") arg1, int arg2, int arg3)<br> | <br> |
| <br>void<br> | <br>setShort([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, short arg1)<br> | <br> |
| <br>void<br> | <br>setString([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg1)<br> | <br> |
| <br>void<br> | <br>setTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql") arg1)<br> | <br> |
| <br>void<br> | <br>setTime([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Time](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html?is-external=true "class or interface in java.sql") arg1, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg2)<br> | <br> |
| <br>void<br> | <br>setTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") arg1)<br> | <br> |
| <br>void<br> | <br>setTimestamp([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") arg0, [Timestamp](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html?is-external=true "class or interface in java.sql") arg1, [Calendar](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Calendar.html?is-external=true "class or interface in java.util") arg2)<br> | <br> |
| <br>void<br> | <br>`setURL(String arg0, URL arg1)`<br> | <br> |
| <br>`boolean`<br> | <br>wasNull()<br> | <br> |


<!--   -->

## 


## Methods inherited from class com.jbase.jdbc.JBaseJDBCPreparedStatement
`addBatch, clearParameters, close, countParameters, CRT, execute, execute, execute, executeQuery, getMetaData, getParameterMetaData, getResultSet, main, setArray, setAsciiStream, setBigDecimal, setBinaryStream, setBlob, setBoolean, setByte, setBytes, setCharacterStream, setClob, setDate, setDate, setDouble, setFloat, setInt, setLong, setNull, setNull, setObject, setObject, setObject, setRef, setShort, setString, setTime, setTime, setTimestamp, setTimestamp, setUnicodeStream, setURL`

<!--   -->

## Methods inherited from class com.jbase.jdbc.JBaseJDBCSocketStatement
`addBatch, cancel, clearBatch, clearWarnings, execute, executeBatch, executeQuery, executeUpdate, executeUpdate, executeUpdate, executeUpdate, freeId, getConnection, getFetchDirection, getFetchSize, getGeneratedKeys, getId, getMaxFieldSize, getMaxRows, getMoreResults, getMoreResults, getQueryTimeout, getResultSetConcurrency, getResultSetHoldability, getResultSetType, getUpdateCount, getWarnings, setCursorName, setEscapeProcessing, setFetchDirection, setFetchSize, setId, setMaxFieldSize, setMaxRows, setQueryTimeout`

<!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

## Methods inherited from interface java.sql.CallableStatement
`getCharacterStream, getCharacterStream, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, setAsciiStream, setAsciiStream, setBinaryStream, setBinaryStream, setBlob, setBlob, setBlob, setCharacterStream, setCharacterStream, setClob, setClob, setClob, setNCharacterStream, setNCharacterStream, setNClob, setNClob, setNClob, setNString, setObject, setObject, setRowId, setSQLXML`

<!--   -->

## 


## Methods inherited from interface java.sql.PreparedStatement
`addBatch, clearParameters, executeLargeUpdate, executeQuery, getMetaData, getParameterMetaData, setArray, setAsciiStream, setAsciiStream, setAsciiStream, setBigDecimal, setBinaryStream, setBinaryStream, setBinaryStream, setBlob, setBlob, setBlob, setBoolean, setByte, setBytes, setCharacterStream, setCharacterStream, setCharacterStream, setClob, setClob, setClob, setDate, setDate, setDouble, setFloat, setInt, setLong, setNCharacterStream, setNCharacterStream, setNClob, setNClob, setNClob, setNString, setNull, setNull, setObject, setObject, setObject, setObject, setObject, setRef, setRowId, setShort, setSQLXML, setString, setTime, setTime, setTimestamp, setTimestamp, setUnicodeStream, setURL`

<!--   -->

## Methods inherited from interface java.sql.Statement
`addBatch, cancel, clearBatch, clearWarnings, close, closeOnCompletion, execute, execute, execute, execute, executeBatch, executeLargeBatch, executeLargeUpdate, executeLargeUpdate, executeLargeUpdate, executeLargeUpdate, executeQuery, executeUpdate, executeUpdate, executeUpdate, executeUpdate, getConnection, getFetchDirection, getFetchSize, getGeneratedKeys, getLargeMaxRows, getLargeUpdateCount, getMaxFieldSize, getMaxRows, getMoreResults, getMoreResults, getQueryTimeout, getResultSet, getResultSetConcurrency, getResultSetHoldability, getResultSetType, getUpdateCount, getWarnings, isClosed, isCloseOnCompletion, isPoolable, setCursorName, setEscapeProcessing, setFetchDirection, setFetchSize, setLargeMaxRows, setMaxFieldSize, setMaxRows, setPoolable, setQueryTimeout`

<!--   -->

## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail

#### J**baseJDBCCallableStatement**

```
public JbaseJDBCCallableStatement(JBaseJDBCSocketConnection connection, String sql)
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>





<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **execute**

```
public boolean execute()
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true#execute--" title="class or interface in java.sql">execute</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true" title="class or interface in java.sql">PreparedStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Overrides:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCPreparedStatement#execute--">execute</a></code> in class <code><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCPreparedStatement" title="class in com.jbase.jdbc">JBaseJDBCPreparedStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>



<!--   -->


#### **executeUpdate**

```
public int executeUpdate()
                  throws SQLException
```

Executes the SQL statement in this PreparedStatement object, which must be an SQL INSERT, UPDATE or DELETE statement; or an SQL statement that returns nothing, such as a DDL statement.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true#executeUpdate--" title="class or interface in java.sql">executeUpdate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true" title="class or interface in java.sql">PreparedStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Overrides:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCPreparedStatement#executeUpdate--">executeUpdate</a></code> in class <code><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCPreparedStatement" title="class in com.jbase.jdbc">JBaseJDBCPreparedStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">either (1) the row count for INSERT, UPDATE, or DELETE statements or (2) 0 for SQL statements that return nothing</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the SQL statement returns a ResultSet object</dd></dl>

<!--   -->


#### **registerOutParameter**

```
public void registerOutParameter(int parameterIndex, int sqlType)
                          throws SQLException
```

Registers the OUT parameter in ordinal position parameterIndex to the JDBC type sqlType. All OUT parameters must be registered before a stored procedure is executed. The JDBC type specified by sqlType for an OUT parameter determines the Java type that must be used in the get method to read the value of that parameter. If the JDBC type expected to be returned to this output parameter is specific to this particular database, sqlType should be java.sql.Types.OTHER. The method getObject(int) retrieves the value.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-int-int-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>parameterIndex</code> - - the first parameter is 1, the second is 2, and so on</dd><dd style="margin-left: 60px;"><code>sqlType</code> - - the JDBC type code defined by java.sql.Types. If the parameter is of JDBC type NUMERIC or DECIMAL, the version of registerOutParameter that accepts a scale value should be used.</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also</strong>:</span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Types.html?is-external=true" title="class or interface in java.sql"><code>Types</code></a></dd></dl>

<!--   -->


#### **registerOutParameter**

```
public void registerOutParameter(int parameterIndex, int sqlType, int scale)
                          throws SQLException
```

Registers the parameter in ordinal position parameterIndex to be of JDBC type sqlType. This method must be called before a stored procedure is executed. The JDBC type specified by sqlType for an OUT parameter determines the Java type that must be used in the get method to read the value of that parameter. This version of registerOutParameter should be used when the parameter is of JDBC type NUMERIC or DECIMAL.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-int-int-int-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>parameterIndex</code> - - the first parameter is 1, the second is 2, and so on</dd><dd style="margin-left: 60px;"><code>sqlType</code> - - the SQL type code defined by java.sql.Types.</dd><dd style="margin-left: 60px;"><code>scale</code> - - the desired number of digits to the right of the decimal point. It must be greater than or equal to zero.</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Types.html?is-external=true" title="class or interface in java.sql"><code>Types</code></a></dd></dl>

<!--   -->


#### **wasNull**

```
public boolean wasNull()
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#wasNull--" title="class or interface in java.sql">wasNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getString**

```
public String getString(int arg0)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getString-int-" title="class or interface in java.sql">getString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBoolean**

```
public boolean getBoolean(int arg0)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBoolean-int-" title="class or interface in java.sql">getBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getByte**

```
public byte getByte(int arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getByte-int-" title="class or interface in java.sql">getByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getShort

```
public short getShort(int i)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getShort-int-" title="class or interface in java.sql">getShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getInt**

```
public int getInt(int i)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getInt-int-" title="class or interface in java.sql">getInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getLong**

```
public long getLong(int i)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getLong-int-" title="class or interface in java.sql">getLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getFloat**

```
public float getFloat(int i)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getFloat-int-" title="class or interface in java.sql">getFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDouble**

```
public double getDouble(int i)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDouble-int-" title="class or interface in java.sql">getDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int arg0, int arg1)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBigDecimal-int-int-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><strong><br></strong><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
public byte[] getBytes(int arg0)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBytes-int-" title="class or interface in java.sql">getBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getDate

```
public Date getDate(int arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDate-int-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(int arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTime-int-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(int arg0)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTimestamp-int-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(int arg0)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getObject-int-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int i)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBigDecimal-int-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(int arg0, Map arg1)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getObject-int-java.util.Map-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getRef**

```
public Ref getRef(int arg0)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getRef-int-" title="class or interface in java.sql">getRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBlob**

```
public Blob getBlob(int arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBlob-int-" title="class or interface in java.sql">getBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getClob

```
public Clob getClob(int arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getClob-int-" title="class or interface in java.sql">getClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getArray**

```
public Array getArray(int arg0)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getArray-int-" title="class or interface in java.sql">getArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(int arg0, Calendar arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDate-int-java.util.Calendar-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(int arg0, Calendar arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTime-int-java.util.Calendar-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(int arg0, Calendar arg1)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTimestamp-int-java.util.Calendar-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### registerOutParameter

```
public void registerOutParameter(int arg0, int arg1, String arg2)
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-int-int-java.lang.String-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### registerOutParameter

```
public void registerOutParameter(String arg0, int arg1)
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-java.lang.String-int-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **registerOutParameter**

```
public void registerOutParameter(String arg0, int arg1, int arg2)
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-java.lang.String-int-int-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **registerOutParameter**

```
public void registerOutParameter(String arg0, int arg1, String arg2)
                          throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#registerOutParameter-java.lang.String-int-java.lang.String-" title="class or interface in java.sql">registerOutParameter</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### getURL

```
public URL getURL(int arg0)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getURL-int-" title="class or interface in java.sql">getURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setURL**

```
public void setURL(String arg0, URL arg1)
            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setURL-java.lang.String-java.net.URL-" title="class or interface in java.sql">setURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setNull**

```
public void setNull(String arg0, int arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setNull-java.lang.String-int-" title="class or interface in java.sql">setNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBoolean**

```
public void setBoolean(String arg0,  boolean arg1)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setBoolean-java.lang.String-boolean-" title="class or interface in java.sql">setBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setByte**

```
public void setByte(String arg0, byte arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setByte-java.lang.String-byte-" title="class or interface in java.sql">setByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setShort**

```
public void setShort(String arg0, short arg1)
              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setShort-java.lang.String-short-" title="class or interface in java.sql">setShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setInt**

```
public void setInt(String arg0, int arg1)
            throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setInt-java.lang.String-int-" title="class or interface in java.sql">setInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setLong**

```
public void setLong(String arg0, long arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setLong-java.lang.String-long-" title="class or interface in java.sql">setLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setFloat**

```
public void setFloat(String arg0, float arg1)
              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setFloat-java.lang.String-float-" title="class or interface in java.sql">setFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setDouble**

```
public void setDouble(String arg0, double arg1)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setDouble-java.lang.String-double-" title="class or interface in java.sql">setDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBigDecimal**

```
public void setBigDecimal(String arg0, BigDecimal arg1)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setBigDecimal-java.lang.String-java.math.BigDecimal-" title="class or interface in java.sql">setBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setString**

```
public void setString(String arg0,  String arg1)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setString-java.lang.String-java.lang.String-" title="class or interface in java.sql">setString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### setBytes

```
public void setBytes(String arg0, byte[] arg1)
              throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setBytes-java.lang.String-byte:A-" title="class or interface in java.sql">setBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### setDate

```
public void setDate(String arg0, Date arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setDate-java.lang.String-java.sql.Date-" title="class or interface in java.sql">setDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### setTime

```
public void setTime(String arg0, Time arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setTime-java.lang.String-java.sql.Time-" title="class or interface in java.sql">setTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### setTimestamp

```
public void setTimestamp(String arg0, Timestamp arg1)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setTimestamp-java.lang.String-java.sql.Timestamp-" title="class or interface in java.sql">setTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setAsciiStream**

```
public void setAsciiStream(String arg0, InputStream arg1, int arg2)
                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setAsciiStream-java.lang.String-java.io.InputStream-int-" title="class or interface in java.sql">setAsciiStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setBinaryStream**

```
public void setBinaryStream(String arg0, InputStream arg1, int arg2)
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setBinaryStream-java.lang.String-java.io.InputStream-int-" title="class or interface in java.sql">setBinaryStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setObject**

```
public void setObject(String arg0, Object arg1, int arg2, int arg3)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setObject-java.lang.String-java.lang.Object-int-int-" title="class or interface in java.sql">setObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### setObject

```
public void setObject(String arg0, Object arg1, int arg2)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setObject-java.lang.String-java.lang.Object-int-" title="class or interface in java.sql">setObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setObject**

```
public void setObject(String arg0, Object arg1)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setObject-java.lang.String-java.lang.Object-" title="class or interface in java.sql">setObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setCharacterStream**

```
public void setCharacterStream(String arg0, Reader arg1, int arg2)
                        throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setCharacterStream-java.lang.String-java.io.Reader-int-" title="class or interface in java.sql">setCharacterStream</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setDate**

```
public void setDate(String arg0, Date arg1, Calendar arg2)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setDate-java.lang.String-java.sql.Date-java.util.Calendar-" title="class or interface in java.sql">setDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setTime**

```
public void setTime(String arg0, Time arg1, Calendar arg2)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setTime-java.lang.String-java.sql.Time-java.util.Calendar-" title="class or interface in java.sql">setTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setTimestamp**

```
public void setTimestamp(String arg0, Timestamp arg1, Calendar arg2)
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setTimestamp-java.lang.String-java.sql.Timestamp-java.util.Calendar-" title="class or interface in java.sql">setTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setNull**

```
public void setNull(String arg0, int arg1, String arg2)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#setNull-java.lang.String-int-java.lang.String-" title="class or interface in java.sql">setNull</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getString**

```
public String getString(String arg0)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getString-java.lang.String-" title="class or interface in java.sql">getString</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBoolean**

```
public boolean getBoolean(String arg0)
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBoolean-java.lang.String-" title="class or interface in java.sql">getBoolean</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getByte**

```
public byte getByte(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getByte-java.lang.String-" title="class or interface in java.sql">getByte</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getShort**

```
public short getShort(String arg0)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getShort-java.lang.String-" title="class or interface in java.sql">getShort</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getInt**

```
public int getInt(String arg0)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getInt-java.lang.String-" title="class or interface in java.sql">getInt</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getLong**

```
public long getLong(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getLong-java.lang.String-" title="class or interface in java.sql">getLong</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getFloat**

```
public float getFloat(String arg0)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getFloat-java.lang.String-" title="class or interface in java.sql">getFloat</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDouble**

```
public double getDouble(String arg0)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDouble-java.lang.String-" title="class or interface in java.sql">getDouble</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
public byte[] getBytes(String arg0)
                throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBytes-java.lang.String-" title="class or interface in java.sql">getBytes</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDate-java.lang.String-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTime-java.lang.String-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(String arg0)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTimestamp-java.lang.String-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(String arg0)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getObject-java.lang.String-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBigDecimal**

```
public BigDecimal getBigDecimal(String arg0)
                         throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBigDecimal-java.lang.String-" title="class or interface in java.sql">getBigDecimal</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getObject**

```
public Object getObject(String arg0, Map arg1)
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getObject-java.lang.String-java.util.Map-" title="class or interface in java.sql">getObject</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getRef**

```
public Ref getRef(String arg0)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getRef-java.lang.String-" title="class or interface in java.sql">getRef</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getBlob**

```
public Blob getBlob(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getBlob-java.lang.String-" title="class or interface in java.sql">getBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getClob**

```
public Clob getClob(String arg0)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getClob-java.lang.String-" title="class or interface in java.sql">getClob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getArray**

```
public Array getArray(String arg0)
               throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getArray-java.lang.String-" title="class or interface in java.sql">getArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getDate**

```
public Date getDate(String arg0, Calendar arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getDate-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getDate</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTime**

```
public Time getTime(String arg0, Calendar arg1)
             throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTime-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getTime</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTimestamp**

```
public Timestamp getTimestamp(String arg0, Calendar arg1)
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getTimestamp-java.lang.String-java.util.Calendar-" title="class or interface in java.sql">getTimestamp</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getURL**

```
public URL getURL(String arg0)
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true#getURL-java.lang.String-" title="class or interface in java.sql">getURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true" title="class or interface in java.sql">CallableStatement</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
