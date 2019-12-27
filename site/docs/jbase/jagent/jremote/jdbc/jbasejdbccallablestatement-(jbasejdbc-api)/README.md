# JbaseJDBCCallableStatement (jbasejdbc API)

**Created At:** 9/25/2017 10:54:43 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_jbasejdbccallablestatement](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_jbasejdbccallablestatement)  
**Original ID:** 277917  
**Internal:** Yes  

&amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JbaseJDBCCallableStatement

**All Implemented Interfaces:**[JBaseJDBCGlobals](./../jbasejdbcglobals-%28jbasejdbc---api%29 "interface in com.jbase.jdbc"), [AutoCloseable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true "class or interface in java.lang"), [CallableStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true "class or interface in java.sql"), [PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql"), [Statement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
```
public class JbaseJDBCCallableStatement
extends JBaseJDBCPreparedStatement
implements CallableStatement
```

# 


# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`JBaseJDBCGlobals.TYPES`


# 


# Field Summary



## Fields inherited from class com.jbase.jdbc.JBaseJDBCPreparedStatement
`parameters`

## Fields inherited from class com.jbase.jdbc.JBaseJDBCSocketStatement
`batchRequestsList`

## Fields inherited from interface java.sql.Statement
`CLOSE_ALL_RESULTS, CLOSE_CURRENT_RESULT, EXECUTE_FAILED, KEEP_CURRENT_RESULT, NO_GENERATED_KEYS, RETURN_GENERATED_KEYS, SUCCESS_NO_INFO`

## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`




# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JbaseJDBCCallableStatement([JBaseJDBCSocketConnection](./../jbasejdbcsocketconnection-%28jbasejdbc-api%29 "class in com.jbase.jdbc") connection, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql)<br> |






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




## 


## Methods inherited from class com.jbase.jdbc.JBaseJDBCPreparedStatement
`addBatch, clearParameters, close, countParameters, CRT, execute, execute, execute, executeQuery, getMetaData, getParameterMetaData, getResultSet, main, setArray, setAsciiStream, setBigDecimal, setBinaryStream, setBlob, setBoolean, setByte, setBytes, setCharacterStream, setClob, setDate, setDate, setDouble, setFloat, setInt, setLong, setNull, setNull, setObject, setObject, setObject, setRef, setShort, setString, setTime, setTime, setTimestamp, setTimestamp, setUnicodeStream, setURL`

## Methods inherited from class com.jbase.jdbc.JBaseJDBCSocketStatement
`addBatch, cancel, clearBatch, clearWarnings, execute, executeBatch, executeQuery, executeUpdate, executeUpdate, executeUpdate, executeUpdate, freeId, getConnection, getFetchDirection, getFetchSize, getGeneratedKeys, getId, getMaxFieldSize, getMaxRows, getMoreResults, getMoreResults, getQueryTimeout, getResultSetConcurrency, getResultSetHoldability, getResultSetType, getUpdateCount, getWarnings, setCursorName, setEscapeProcessing, setFetchDirection, setFetchSize, setId, setMaxFieldSize, setMaxRows, setQueryTimeout`

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Methods inherited from interface java.sql.CallableStatement
`getCharacterStream, getCharacterStream, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, registerOutParameter, setAsciiStream, setAsciiStream, setBinaryStream, setBinaryStream, setBlob, setBlob, setBlob, setCharacterStream, setCharacterStream, setClob, setClob, setClob, setNCharacterStream, setNCharacterStream, setNClob, setNClob, setNClob, setNString, setObject, setObject, setRowId, setSQLXML`



## 


## Methods inherited from interface java.sql.PreparedStatement
`addBatch, clearParameters, executeLargeUpdate, executeQuery, getMetaData, getParameterMetaData, setArray, setAsciiStream, setAsciiStream, setAsciiStream, setBigDecimal, setBinaryStream, setBinaryStream, setBinaryStream, setBlob, setBlob, setBlob, setBoolean, setByte, setBytes, setCharacterStream, setCharacterStream, setCharacterStream, setClob, setClob, setClob, setDate, setDate, setDouble, setFloat, setInt, setLong, setNCharacterStream, setNCharacterStream, setNClob, setNClob, setNClob, setNString, setNull, setNull, setObject, setObject, setObject, setObject, setObject, setRef, setRowId, setShort, setSQLXML, setString, setTime, setTime, setTimestamp, setTimestamp, setUnicodeStream, setURL`

## Methods inherited from interface java.sql.Statement
`addBatch, cancel, clearBatch, clearWarnings, close, closeOnCompletion, execute, execute, execute, execute, executeBatch, executeLargeBatch, executeLargeUpdate, executeLargeUpdate, executeLargeUpdate, executeLargeUpdate, executeQuery, executeUpdate, executeUpdate, executeUpdate, executeUpdate, getConnection, getFetchDirection, getFetchSize, getGeneratedKeys, getLargeMaxRows, getLargeUpdateCount, getMaxFieldSize, getMaxRows, getMoreResults, getMoreResults, getQueryTimeout, getResultSet, getResultSetConcurrency, getResultSetHoldability, getResultSetType, getUpdateCount, getWarnings, isClosed, isCloseOnCompletion, isPoolable, setCursorName, setEscapeProcessing, setFetchDirection, setFetchSize, setLargeMaxRows, setMaxFieldSize, setMaxRows, setPoolable, setQueryTimeout`

## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

# Constructor Detail

#### J**baseJDBCCallableStatement**

```
public JbaseJDBCCallableStatement(JBaseJDBCSocketConnection connection, String sql)
                           throws SQLException
```
**Throws:**`SQLException`








# Method Detail

#### **execute**

```
public boolean execute()
                throws SQLException
```

**Specified by:**`execute` in interface `PreparedStatement`
**Overrides:**`execute` in class `JBaseJDBCPreparedStatement`
**Throws:**`SQLException`






#### **executeUpdate**

```
public int executeUpdate()
                  throws SQLException
```

Executes the SQL statement in this PreparedStatement object, which must be an SQL INSERT, UPDATE or DELETE statement; or an SQL statement that returns nothing, such as a DDL statement.
**Specified by:**`executeUpdate` in interface `PreparedStatement`
**Overrides:**`executeUpdate` in class `JBaseJDBCPreparedStatement`
**Returns:**either (1) the row count for INSERT, UPDATE, or DELETE statements or (2) 0 for SQL statements that return nothing
**Throws:**`SQLException` - if a database access error occurs or the SQL statement returns a ResultSet object




#### **registerOutParameter**

```
public void registerOutParameter(int parameterIndex, int sqlType)
                          throws SQLException
```

Registers the OUT parameter in ordinal position parameterIndex to the JDBC type sqlType. All OUT parameters must be registered before a stored procedure is executed. The JDBC type specified by sqlType for an OUT parameter determines the Java type that must be used in the get method to read the value of that parameter. If the JDBC type expected to be returned to this output parameter is specific to this particular database, sqlType should be java.sql.Types.OTHER. The method getObject(int) retrieves the value.
**Specified by:**`registerOutParameter` in interface `CallableStatement`
**Parameters:**`parameterIndex` - - the first parameter is 1, the second is 2, and so on`sqlType` - - the JDBC type code defined by java.sql.Types. If the parameter is of JDBC type NUMERIC or DECIMAL, the version of registerOutParameter that accepts a scale value should be used.
Throws:`SQLException` - - if a database access error occurs
**See Also**:[`Types`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Types.html?is-external=true "class or interface in java.sql")




#### **registerOutParameter**

```
public void registerOutParameter(int parameterIndex, int sqlType, int scale)
                          throws SQLException
```

Registers the parameter in ordinal position parameterIndex to be of JDBC type sqlType. This method must be called before a stored procedure is executed. The JDBC type specified by sqlType for an OUT parameter determines the Java type that must be used in the get method to read the value of that parameter. This version of registerOutParameter should be used when the parameter is of JDBC type NUMERIC or DECIMAL.
Specified by:`registerOutParameter` in interface `CallableStatement`
**Parameters:**`parameterIndex` - - the first parameter is 1, the second is 2, and so on`sqlType` - - the SQL type code defined by java.sql.Types.`scale` - - the desired number of digits to the right of the decimal point. It must be greater than or equal to zero.
**Throws:**`SQLException` - - if a database access error occurs
See Also:[`Types`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Types.html?is-external=true "class or interface in java.sql")




#### **wasNull**

```
public boolean wasNull()
                throws SQLException
```
Specified by:`wasNull` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getString**

```
public String getString(int arg0)
                 throws SQLException
```
**Specified by:**`getString` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBoolean**

```
public boolean getBoolean(int arg0)
                   throws SQLException
```
**Specified by:**`getBoolean` in interface `CallableStatement`
Throws:`SQLException`




#### **getByte**

```
public byte getByte(int arg0)
             throws SQLException
```
**Specified by:**`getByte` in interface `CallableStatement`
**Throws:**`SQLException`




#### getShort

```
public short getShort(int i)
               throws SQLException
```
**Specified by:**`getShort` in interface `CallableStatement`
Throws:`SQLException`




#### **getInt**

```
public int getInt(int i)
           throws SQLException
```
Specified by:`getInt` in interface `CallableStatement`
Throws:`SQLException`




#### **getLong**

```
public long getLong(int i)
             throws SQLException
```
Specified by:`getLong` in interface `CallableStatement`
Throws:`SQLException`




#### **getFloat**

```
public float getFloat(int i)
               throws SQLException
```
**Specified by:**`getFloat` in interface `CallableStatement`
Throws:`SQLException`




#### **getDouble**

```
public double getDouble(int i)
                 throws SQLException
```
**Specified by:**`getDouble` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int arg0, int arg1)
                         throws SQLException
```
**Specified by:**`getBigDecimal` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBytes**

```
public byte[] getBytes(int arg0)
                throws SQLException
```
**Specified by:**`getBytes` in interface `CallableStatement`
**Throws:**`SQLException`




#### getDate

```
public Date getDate(int arg0)
             throws SQLException
```
Specified by:`getDate` in interface `CallableStatement`
Throws:`SQLException`




#### **getTime**

```
public Time getTime(int arg0)
             throws SQLException
```
Specified by:`getTime` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(int arg0)
                       throws SQLException
```
**Specified by:**`getTimestamp` in interface `CallableStatement`
Throws:`SQLException`




#### **getObject**

```
public Object getObject(int arg0)
                 throws SQLException
```
Specified by:`getObject` in interface `CallableStatement`
Throws:`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(int i)
                         throws SQLException
```
**Specified by:**`getBigDecimal` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(int arg0, Map arg1)
                 throws SQLException
```
**Specified by:**`getObject` in interface `CallableStatement`
Throws:`SQLException`




#### **getRef**

```
public Ref getRef(int arg0)
           throws SQLException
```
**Specified by:**`getRef` in interface `CallableStatement`
Throws:`SQLException`




#### **getBlob**

```
public Blob getBlob(int arg0)
             throws SQLException
```
Specified by:`getBlob` in interface `CallableStatement`
**Throws:**`SQLException`




#### getClob

```
public Clob getClob(int arg0)
             throws SQLException
```
Specified by:`getClob` in interface `CallableStatement`
Throws:`SQLException`




#### **getArray**

```
public Array getArray(int arg0)
               throws SQLException
```
**Specified by:**`getArray` in interface `CallableStatement`
Throws:`SQLException`




#### **getDate**

```
public Date getDate(int arg0, Calendar arg1)
             throws SQLException
```
**Specified by:**`getDate` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(int arg0, Calendar arg1)
             throws SQLException
```
**Specified by:**`getTime` in interface `CallableStatement`
Throws:`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(int arg0, Calendar arg1)
                       throws SQLException
```
**Specified by:**`getTimestamp` in interface `CallableStatement`
**Throws:**`SQLException`




#### registerOutParameter

```
public void registerOutParameter(int arg0, int arg1, String arg2)
                          throws SQLException
```
**Specified by:**`registerOutParameter` in interface `CallableStatement`
Throws:`SQLException`




#### registerOutParameter

```
public void registerOutParameter(String arg0, int arg1)
                          throws SQLException
```
**Specified by:**`registerOutParameter` in interface `CallableStatement`
Throws:`SQLException`




#### **registerOutParameter**

```
public void registerOutParameter(String arg0, int arg1, int arg2)
                          throws SQLException
```
**Specified by:**`registerOutParameter` in interface `CallableStatement`
**Throws:**`SQLException`




#### **registerOutParameter**

```
public void registerOutParameter(String arg0, int arg1, String arg2)
                          throws SQLException
```
**Specified by:**`registerOutParameter` in interface `CallableStatement`
**Throws:**`SQLException`




#### getURL

```
public URL getURL(int arg0)
           throws SQLException
```
Specified by:`getURL` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setURL**

```
public void setURL(String arg0, URL arg1)
            throws SQLException
```
**Specified by:**`setURL` in interface `CallableStatement`
Throws:`SQLException`




#### **setNull**

```
public void setNull(String arg0, int arg1)
             throws SQLException
```
**Specified by:**`setNull` in interface `CallableStatement`
Throws:`SQLException`




#### **setBoolean**

```
public void setBoolean(String arg0,  boolean arg1)
                throws SQLException
```
**Specified by:**`setBoolean` in interface `CallableStatement`
Throws:`SQLException`




#### **setByte**

```
public void setByte(String arg0, byte arg1)
             throws SQLException
```
Specified by:`setByte` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setShort**

```
public void setShort(String arg0, short arg1)
              throws SQLException
```
**Specified by:**`setShort` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setInt**

```
public void setInt(String arg0, int arg1)
            throws SQLException
```
Specified by:`setInt` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setLong**

```
public void setLong(String arg0, long arg1)
             throws SQLException
```
Specified by:`setLong` in interface `CallableStatement`
Throws:`SQLException`




#### **setFloat**

```
public void setFloat(String arg0, float arg1)
              throws SQLException
```
Specified by:`setFloat` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setDouble**

```
public void setDouble(String arg0, double arg1)
               throws SQLException
```
**Specified by:**`setDouble` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setBigDecimal**

```
public void setBigDecimal(String arg0, BigDecimal arg1)
                   throws SQLException
```
Specified by:`setBigDecimal` in interface `CallableStatement`
Throws:`SQLException`




#### **setString**

```
public void setString(String arg0,  String arg1)
               throws SQLException
```
Specified by:`setString` in interface `CallableStatement`
Throws:`SQLException`




#### setBytes

```
public void setBytes(String arg0, byte[] arg1)
              throws SQLException
```
**Specified by:**`setBytes` in interface `CallableStatement`
**Throws:**`SQLException`




#### setDate

```
public void setDate(String arg0, Date arg1)
             throws SQLException
```
**Specified by:**`setDate` in interface `CallableStatement`
**Throws:**`SQLException`




#### setTime

```
public void setTime(String arg0, Time arg1)
             throws SQLException
```
**Specified by:**`setTime` in interface `CallableStatement`
**Throws:**`SQLException`




#### setTimestamp

```
public void setTimestamp(String arg0, Timestamp arg1)
                  throws SQLException
```
**Specified by:**`setTimestamp` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setAsciiStream**

```
public void setAsciiStream(String arg0, InputStream arg1, int arg2)
                    throws SQLException
```
Specified by:`setAsciiStream` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setBinaryStream**

```
public void setBinaryStream(String arg0, InputStream arg1, int arg2)
                     throws SQLException
```
**Specified by:**`setBinaryStream` in interface `CallableStatement`
Throws:`SQLException`




#### **setObject**

```
public void setObject(String arg0, Object arg1, int arg2, int arg3)
               throws SQLException
```
**Specified by:**`setObject` in interface `CallableStatement`
**Throws:**`SQLException`




#### setObject

```
public void setObject(String arg0, Object arg1, int arg2)
               throws SQLException
```
**Specified by:**`setObject` in interface `CallableStatement`
Throws:`SQLException`




#### **setObject**

```
public void setObject(String arg0, Object arg1)
               throws SQLException
```
Specified by:`setObject` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setCharacterStream**

```
public void setCharacterStream(String arg0, Reader arg1, int arg2)
                        throws SQLException
```
**Specified by:**`setCharacterStream` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setDate**

```
public void setDate(String arg0, Date arg1, Calendar arg2)
             throws SQLException
```
Specified by:`setDate` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setTime**

```
public void setTime(String arg0, Time arg1, Calendar arg2)
             throws SQLException
```
**Specified by:**`setTime` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setTimestamp**

```
public void setTimestamp(String arg0, Timestamp arg1, Calendar arg2)
                  throws SQLException
```
**Specified by:**`setTimestamp` in interface `CallableStatement`
**Throws:**`SQLException`




#### **setNull**

```
public void setNull(String arg0, int arg1, String arg2)
             throws SQLException
```
**Specified by:**`setNull` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getString**

```
public String getString(String arg0)
                 throws SQLException
```
**Specified by:**`getString` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBoolean**

```
public boolean getBoolean(String arg0)
                   throws SQLException
```
**Specified by:**`getBoolean` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getByte**

```
public byte getByte(String arg0)
             throws SQLException
```
**Specified by:**`getByte` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getShort**

```
public short getShort(String arg0)
               throws SQLException
```
**Specified by:**`getShort` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getInt**

```
public int getInt(String arg0)
           throws SQLException
```
**Specified by:**`getInt` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getLong**

```
public long getLong(String arg0)
             throws SQLException
```
**Specified by:**`getLong` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getFloat**

```
public float getFloat(String arg0)
               throws SQLException
```
**Specified by:**`getFloat` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getDouble**

```
public double getDouble(String arg0)
                 throws SQLException
```
**Specified by:**`getDouble` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBytes**

```
public byte[] getBytes(String arg0)
                throws SQLException
```
**Specified by:**`getBytes` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(String arg0)
             throws SQLException
```
**Specified by:**`getDate` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(String arg0)
             throws SQLException
```
**Specified by:**`getTime` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(String arg0)
                       throws SQLException
```
**Specified by:**`getTimestamp` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(String arg0)
                 throws SQLException
```
**Specified by:**`getObject` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBigDecimal**

```
public BigDecimal getBigDecimal(String arg0)
                         throws SQLException
```
**Specified by:**`getBigDecimal` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getObject**

```
public Object getObject(String arg0, Map arg1)
                 throws SQLException
```
**Specified by:**`getObject` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getRef**

```
public Ref getRef(String arg0)
           throws SQLException
```
**Specified by:**`getRef` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getBlob**

```
public Blob getBlob(String arg0)
             throws SQLException
```
**Specified by:**`getBlob` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getClob**

```
public Clob getClob(String arg0)
             throws SQLException
```
**Specified by:**`getClob` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getArray**

```
public Array getArray(String arg0)
               throws SQLException
```
**Specified by:**`getArray` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getDate**

```
public Date getDate(String arg0, Calendar arg1)
             throws SQLException
```
**Specified by:**`getDate` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTime**

```
public Time getTime(String arg0, Calendar arg1)
             throws SQLException
```
**Specified by:**`getTime` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getTimestamp**

```
public Timestamp getTimestamp(String arg0, Calendar arg1)
                       throws SQLException
```
**Specified by:**`getTimestamp` in interface `CallableStatement`
**Throws:**`SQLException`




#### **getURL**

```
public URL getURL(String arg0)
           throws SQLException
```
**Specified by:**`getURL` in interface `CallableStatement`
**Throws:**`SQLException`


