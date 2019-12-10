# ResultSetAdapter (jbasejdbc   API)

**Created At:** 9/25/2017 11:05:40 AM  
**Updated At:** 2/15/2018 8:02:25 AM  


JavaScript is disabled on your browser.

Skip navigation links

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

com.jbase.jdbc

## Class ResultSetAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.ResultSetAdapter


- All Implemented Interfaces:[AutoCloseable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true "class or interface in java.lang"), [ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
* * *


```
public class ResultSetAdapter
extends Object
implements ResultSet
```

This class represents ResultSet objects which<br>    need to provide additional data not provided<br>    by the server.

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected Object[]` | `columnValues`  |
| `protected int` | `rowIndex`  |
| `protected ResultSetMetaData` | `rsmd`  |


        - ### Fields inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`CLOSE_CURSORS_AT_COMMIT, CONCUR_READ_ONLY, CONCUR_UPDATABLE, FETCH_FORWARD, FETCH_REVERSE, FETCH_UNKNOWN, HOLD_CURSORS_OVER_COMMIT, TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, TYPE_SCROLL_SENSITIVE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ResultSetAdapter()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
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


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface java.sql.[ResultSet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")
`getHoldability, getNCharacterStream, getNCharacterStream, getNClob, getNClob, getNString, getNString, getObject, getObject, getRowId, getRowId, getSQLXML, getSQLXML, isClosed, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateAsciiStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBinaryStream, updateBlob, updateBlob, updateBlob, updateBlob, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateCharacterStream, updateClob, updateClob, updateClob, updateClob, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNCharacterStream, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNClob, updateNString, updateNString, updateObject, updateObject, updateObject, updateObject, updateRowId, updateRowId, updateSQLXML, updateSQLXML`


        - ### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- - ### Field Detail

        - #### rsmd

```
protected ResultSetMetaData rsmd
```


        - #### columnValues

```
protected Object[] columnValues
```


        - #### rowIndex

```
protected int rowIndex
```


    - ### Constructor Detail

        - #### ResultSetAdapter

```
public ResultSetAdapter()
```


    - ### Method Detail

        - #### initialize

```
public void initialize()
```


        - #### getColumnValue

```
public Object getColumnValue(int column)
                      throws SQLException
```

Retrieves the value at a specified column.
Parameters:`column` - Returns:The record's value at the specified columnThrows:`SQLException` - if a database access error occurs


        - #### next

```
public boolean next()
             throws SQLException
```

Fetch the next row<br> This method should be overridden where rowIndex should be increased if fetch was successful
Specified by:`next` in interface `ResultSet`Returns:True if there are rows left, false otherwiseThrows:`SQLException`


        - #### close

```
public void close()
           throws SQLException
```
Specified by:`close` in interface `AutoCloseable`Specified by:`close` in interface `ResultSet`Throws:`SQLException`


        - #### wasNull

```
public boolean wasNull()
                throws SQLException
```
Specified by:`wasNull` in interface `ResultSet`Throws:`SQLException`


        - #### getString

```
public String getString(int column)
                 throws SQLException
```
Specified by:`getString` in interface `ResultSet`Throws:`SQLException`


        - #### getBoolean

```
public boolean getBoolean(int column)
                   throws SQLException
```
Specified by:`getBoolean` in interface `ResultSet`Throws:`SQLException`


        - #### getByte

```
public byte getByte(int arg0)
             throws SQLException
```
Specified by:`getByte` in interface `ResultSet`Throws:`SQLException`


        - #### getShort

```
public short getShort(int column)
               throws SQLException
```
Specified by:`getShort` in interface `ResultSet`Throws:`SQLException`


        - #### getInt

```
public int getInt(int column)
           throws SQLException
```
Specified by:`getInt` in interface `ResultSet`Throws:`SQLException`


        - #### getLong

```
public long getLong(int column)
             throws SQLException
```
Specified by:`getLong` in interface `ResultSet`Throws:`SQLException`


        - #### getFloat

```
public float getFloat(int column)
               throws SQLException
```
Specified by:`getFloat` in interface `ResultSet`Throws:`SQLException`


        - #### getDouble

```
public double getDouble(int column)
                 throws SQLException
```
Specified by:`getDouble` in interface `ResultSet`Throws:`SQLException`


        - #### getBigDecimal

```
public BigDecimal getBigDecimal(int arg0,
                                int arg1)
                         throws SQLException
```
Specified by:`getBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### getBytes

```
public byte[] getBytes(int arg0)
                throws SQLException
```
Specified by:`getBytes` in interface `ResultSet`Throws:`SQLException`


        - #### getDate

```
public Date getDate(int arg0)
             throws SQLException
```
Specified by:`getDate` in interface `ResultSet`Throws:`SQLException`


        - #### getTime

```
public Time getTime(int arg0)
             throws SQLException
```
Specified by:`getTime` in interface `ResultSet`Throws:`SQLException`


        - #### getTimestamp

```
public Timestamp getTimestamp(int arg0)
                       throws SQLException
```
Specified by:`getTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### getAsciiStream

```
public InputStream getAsciiStream(int arg0)
                           throws SQLException
```
Specified by:`getAsciiStream` in interface `ResultSet`Throws:`SQLException`


        - #### getUnicodeStream

```
public InputStream getUnicodeStream(int arg0)
                             throws SQLException
```
Specified by:`getUnicodeStream` in interface `ResultSet`Throws:`SQLException`


        - #### getBinaryStream

```
public InputStream getBinaryStream(int arg0)
                            throws SQLException
```
Specified by:`getBinaryStream` in interface `ResultSet`Throws:`SQLException`


        - #### getString

```
public String getString(String columnName)
                 throws SQLException
```
Specified by:`getString` in interface `ResultSet`Throws:`SQLException`


        - #### getBoolean

```
public boolean getBoolean(String columnName)
                   throws SQLException
```
Specified by:`getBoolean` in interface `ResultSet`Throws:`SQLException`


        - #### getByte

```
public byte getByte(String arg0)
             throws SQLException
```
Specified by:`getByte` in interface `ResultSet`Throws:`SQLException`


        - #### getShort

```
public short getShort(String columnName)
               throws SQLException
```
Specified by:`getShort` in interface `ResultSet`Throws:`SQLException`


        - #### getInt

```
public int getInt(String columnName)
           throws SQLException
```
Specified by:`getInt` in interface `ResultSet`Throws:`SQLException`


        - #### getLong

```
public long getLong(String columnName)
             throws SQLException
```
Specified by:`getLong` in interface `ResultSet`Throws:`SQLException`


        - #### getFloat

```
public float getFloat(String columnName)
               throws SQLException
```
Specified by:`getFloat` in interface `ResultSet`Throws:`SQLException`


        - #### getDouble

```
public double getDouble(String columnName)
                 throws SQLException
```
Specified by:`getDouble` in interface `ResultSet`Throws:`SQLException`


        - #### getBigDecimal

```
public BigDecimal getBigDecimal(String arg0,
                                int arg1)
                         throws SQLException
```
Specified by:`getBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### getBytes

```
public byte[] getBytes(String arg0)
                throws SQLException
```
Specified by:`getBytes` in interface `ResultSet`Throws:`SQLException`


        - #### getDate

```
public Date getDate(String arg0)
             throws SQLException
```
Specified by:`getDate` in interface `ResultSet`Throws:`SQLException`


        - #### getTime

```
public Time getTime(String arg0)
             throws SQLException
```
Specified by:`getTime` in interface `ResultSet`Throws:`SQLException`


        - #### getTimestamp

```
public Timestamp getTimestamp(String arg0)
                       throws SQLException
```
Specified by:`getTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### getAsciiStream

```
public InputStream getAsciiStream(String arg0)
                           throws SQLException
```
Specified by:`getAsciiStream` in interface `ResultSet`Throws:`SQLException`


        - #### getUnicodeStream

```
public InputStream getUnicodeStream(String arg0)
                             throws SQLException
```
Specified by:`getUnicodeStream` in interface `ResultSet`Throws:`SQLException`


        - #### getBinaryStream

```
public InputStream getBinaryStream(String arg0)
                            throws SQLException
```
Specified by:`getBinaryStream` in interface `ResultSet`Throws:`SQLException`


        - #### getWarnings

```
public SQLWarning getWarnings()
                       throws SQLException
```
Specified by:`getWarnings` in interface `ResultSet`Throws:`SQLException`


        - #### clearWarnings

```
public void clearWarnings()
                   throws SQLException
```
Specified by:`clearWarnings` in interface `ResultSet`Throws:`SQLException`


        - #### getCursorName

```
public String getCursorName()
                     throws SQLException
```
Specified by:`getCursorName` in interface `ResultSet`Throws:`SQLException`


        - #### getMetaData

```
public ResultSetMetaData getMetaData()
                              throws SQLException
```
Specified by:`getMetaData` in interface `ResultSet`Throws:`SQLException`


        - #### getObject

```
public Object getObject(int column)
                 throws SQLException
```
Specified by:`getObject` in interface `ResultSet`Throws:`SQLException`


        - #### getObject

```
public Object getObject(String columnName)
                 throws SQLException
```
Specified by:`getObject` in interface `ResultSet`Throws:`SQLException`


        - #### findColumn

```
public int findColumn(String columnName)
               throws SQLException
```
Specified by:`findColumn` in interface `ResultSet`Throws:`SQLException`


        - #### getCharacterStream

```
public Reader getCharacterStream(int arg0)
                          throws SQLException
```
Specified by:`getCharacterStream` in interface `ResultSet`Throws:`SQLException`


        - #### getCharacterStream

```
public Reader getCharacterStream(String arg0)
                          throws SQLException
```
Specified by:`getCharacterStream` in interface `ResultSet`Throws:`SQLException`


        - #### getBigDecimal

```
public BigDecimal getBigDecimal(int arg0)
                         throws SQLException
```
Specified by:`getBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### getBigDecimal

```
public BigDecimal getBigDecimal(String arg0)
                         throws SQLException
```
Specified by:`getBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### isBeforeFirst

```
public boolean isBeforeFirst()
                      throws SQLException
```
Specified by:`isBeforeFirst` in interface `ResultSet`Throws:`SQLException`


        - #### isAfterLast

```
public boolean isAfterLast()
                    throws SQLException
```
Specified by:`isAfterLast` in interface `ResultSet`Throws:`SQLException`


        - #### isFirst

```
public boolean isFirst()
                throws SQLException
```
Specified by:`isFirst` in interface `ResultSet`Throws:`SQLException`


        - #### isLast

```
public boolean isLast()
               throws SQLException
```
Specified by:`isLast` in interface `ResultSet`Throws:`SQLException`


        - #### beforeFirst

```
public void beforeFirst()
                 throws SQLException
```
Specified by:`beforeFirst` in interface `ResultSet`Throws:`SQLException`


        - #### afterLast

```
public void afterLast()
               throws SQLException
```
Specified by:`afterLast` in interface `ResultSet`Throws:`SQLException`


        - #### first

```
public boolean first()
              throws SQLException
```
Specified by:`first` in interface `ResultSet`Throws:`SQLException`


        - #### last

```
public boolean last()
             throws SQLException
```
Specified by:`last` in interface `ResultSet`Throws:`SQLException`


        - #### getRow

```
public int getRow()
           throws SQLException
```
Specified by:`getRow` in interface `ResultSet`Throws:`SQLException`


        - #### absolute

```
public boolean absolute(int arg0)
                 throws SQLException
```
Specified by:`absolute` in interface `ResultSet`Throws:`SQLException`


        - #### relative

```
public boolean relative(int arg0)
                 throws SQLException
```
Specified by:`relative` in interface `ResultSet`Throws:`SQLException`


        - #### previous

```
public boolean previous()
                 throws SQLException
```
Specified by:`previous` in interface `ResultSet`Throws:`SQLException`


        - #### setFetchDirection

```
public void setFetchDirection(int arg0)
                       throws SQLException
```
Specified by:`setFetchDirection` in interface `ResultSet`Throws:`SQLException`


        - #### getFetchDirection

```
public int getFetchDirection()
                      throws SQLException
```
Specified by:`getFetchDirection` in interface `ResultSet`Throws:`SQLException`


        - #### setFetchSize

```
public void setFetchSize(int arg0)
                  throws SQLException
```
Specified by:`setFetchSize` in interface `ResultSet`Throws:`SQLException`


        - #### getFetchSize

```
public int getFetchSize()
                 throws SQLException
```
Specified by:`getFetchSize` in interface `ResultSet`Throws:`SQLException`


        - #### getType

```
public int getType()
            throws SQLException
```
Specified by:`getType` in interface `ResultSet`Throws:`SQLException`


        - #### getConcurrency

```
public int getConcurrency()
                   throws SQLException
```
Specified by:`getConcurrency` in interface `ResultSet`Throws:`SQLException`


        - #### rowUpdated

```
public boolean rowUpdated()
                   throws SQLException
```
Specified by:`rowUpdated` in interface `ResultSet`Throws:`SQLException`


        - #### rowInserted

```
public boolean rowInserted()
                    throws SQLException
```
Specified by:`rowInserted` in interface `ResultSet`Throws:`SQLException`


        - #### rowDeleted

```
public boolean rowDeleted()
                   throws SQLException
```
Specified by:`rowDeleted` in interface `ResultSet`Throws:`SQLException`


        - #### updateNull

```
public void updateNull(int arg0)
                throws SQLException
```
Specified by:`updateNull` in interface `ResultSet`Throws:`SQLException`


        - #### updateBoolean

```
public void updateBoolean(int arg0,
                          boolean arg1)
                   throws SQLException
```
Specified by:`updateBoolean` in interface `ResultSet`Throws:`SQLException`


        - #### updateByte

```
public void updateByte(int arg0,
                       byte arg1)
                throws SQLException
```
Specified by:`updateByte` in interface `ResultSet`Throws:`SQLException`


        - #### updateShort

```
public void updateShort(int arg0,
                        short arg1)
                 throws SQLException
```
Specified by:`updateShort` in interface `ResultSet`Throws:`SQLException`


        - #### updateInt

```
public void updateInt(int arg0,
                      int arg1)
               throws SQLException
```
Specified by:`updateInt` in interface `ResultSet`Throws:`SQLException`


        - #### updateLong

```
public void updateLong(int arg0,
                       long arg1)
                throws SQLException
```
Specified by:`updateLong` in interface `ResultSet`Throws:`SQLException`


        - #### updateFloat

```
public void updateFloat(int arg0,
                        float arg1)
                 throws SQLException
```
Specified by:`updateFloat` in interface `ResultSet`Throws:`SQLException`


        - #### updateDouble

```
public void updateDouble(int arg0,
                         double arg1)
                  throws SQLException
```
Specified by:`updateDouble` in interface `ResultSet`Throws:`SQLException`


        - #### updateBigDecimal

```
public void updateBigDecimal(int arg0,
                             BigDecimal arg1)
                      throws SQLException
```
Specified by:`updateBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### updateString

```
public void updateString(int arg0,
                         String arg1)
                  throws SQLException
```
Specified by:`updateString` in interface `ResultSet`Throws:`SQLException`


        - #### updateBytes

```
public void updateBytes(int arg0,
                        byte[] arg1)
                 throws SQLException
```
Specified by:`updateBytes` in interface `ResultSet`Throws:`SQLException`


        - #### updateDate

```
public void updateDate(int arg0,
                       Date arg1)
                throws SQLException
```
Specified by:`updateDate` in interface `ResultSet`Throws:`SQLException`


        - #### updateTime

```
public void updateTime(int arg0,
                       Time arg1)
                throws SQLException
```
Specified by:`updateTime` in interface `ResultSet`Throws:`SQLException`


        - #### updateTimestamp

```
public void updateTimestamp(int arg0,
                            Timestamp arg1)
                     throws SQLException
```
Specified by:`updateTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### updateAsciiStream

```
public void updateAsciiStream(int arg0,
                              InputStream arg1,
                              int arg2)
                       throws SQLException
```
Specified by:`updateAsciiStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateBinaryStream

```
public void updateBinaryStream(int arg0,
                               InputStream arg1,
                               int arg2)
                        throws SQLException
```
Specified by:`updateBinaryStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateCharacterStream

```
public void updateCharacterStream(int arg0,
                                  Reader arg1,
                                  int arg2)
                           throws SQLException
```
Specified by:`updateCharacterStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateObject

```
public void updateObject(int arg0,
                         Object arg1,
                         int arg2)
                  throws SQLException
```
Specified by:`updateObject` in interface `ResultSet`Throws:`SQLException`


        - #### updateObject

```
public void updateObject(int arg0,
                         Object arg1)
                  throws SQLException
```
Specified by:`updateObject` in interface `ResultSet`Throws:`SQLException`


        - #### updateNull

```
public void updateNull(String arg0)
                throws SQLException
```
Specified by:`updateNull` in interface `ResultSet`Throws:`SQLException`


        - #### updateBoolean

```
public void updateBoolean(String arg0,
                          boolean arg1)
                   throws SQLException
```
Specified by:`updateBoolean` in interface `ResultSet`Throws:`SQLException`


        - #### updateByte

```
public void updateByte(String arg0,
                       byte arg1)
                throws SQLException
```
Specified by:`updateByte` in interface `ResultSet`Throws:`SQLException`


        - #### updateShort

```
public void updateShort(String arg0,
                        short arg1)
                 throws SQLException
```
Specified by:`updateShort` in interface `ResultSet`Throws:`SQLException`


        - #### updateInt

```
public void updateInt(String arg0,
                      int arg1)
               throws SQLException
```
Specified by:`updateInt` in interface `ResultSet`Throws:`SQLException`


        - #### updateLong

```
public void updateLong(String arg0,
                       long arg1)
                throws SQLException
```
Specified by:`updateLong` in interface `ResultSet`Throws:`SQLException`


        - #### updateFloat

```
public void updateFloat(String arg0,
                        float arg1)
                 throws SQLException
```
Specified by:`updateFloat` in interface `ResultSet`Throws:`SQLException`


        - #### updateDouble

```
public void updateDouble(String arg0,
                         double arg1)
                  throws SQLException
```
Specified by:`updateDouble` in interface `ResultSet`Throws:`SQLException`


        - #### updateBigDecimal

```
public void updateBigDecimal(String arg0,
                             BigDecimal arg1)
                      throws SQLException
```
Specified by:`updateBigDecimal` in interface `ResultSet`Throws:`SQLException`


        - #### updateString

```
public void updateString(String arg0,
                         String arg1)
                  throws SQLException
```
Specified by:`updateString` in interface `ResultSet`Throws:`SQLException`


        - #### updateBytes

```
public void updateBytes(String arg0,
                        byte[] arg1)
                 throws SQLException
```
Specified by:`updateBytes` in interface `ResultSet`Throws:`SQLException`


        - #### updateDate

```
public void updateDate(String arg0,
                       Date arg1)
                throws SQLException
```
Specified by:`updateDate` in interface `ResultSet`Throws:`SQLException`


        - #### updateTime

```
public void updateTime(String arg0,
                       Time arg1)
                throws SQLException
```
Specified by:`updateTime` in interface `ResultSet`Throws:`SQLException`


        - #### updateTimestamp

```
public void updateTimestamp(String arg0,
                            Timestamp arg1)
                     throws SQLException
```
Specified by:`updateTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### updateAsciiStream

```
public void updateAsciiStream(String arg0,
                              InputStream arg1,
                              int arg2)
                       throws SQLException
```
Specified by:`updateAsciiStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateBinaryStream

```
public void updateBinaryStream(String arg0,
                               InputStream arg1,
                               int arg2)
                        throws SQLException
```
Specified by:`updateBinaryStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateCharacterStream

```
public void updateCharacterStream(String arg0,
                                  Reader arg1,
                                  int arg2)
                           throws SQLException
```
Specified by:`updateCharacterStream` in interface `ResultSet`Throws:`SQLException`


        - #### updateObject

```
public void updateObject(String arg0,
                         Object arg1,
                         int arg2)
                  throws SQLException
```
Specified by:`updateObject` in interface `ResultSet`Throws:`SQLException`


        - #### updateObject

```
public void updateObject(String arg0,
                         Object arg1)
                  throws SQLException
```
Specified by:`updateObject` in interface `ResultSet`Throws:`SQLException`


        - #### insertRow

```
public void insertRow()
               throws SQLException
```
Specified by:`insertRow` in interface `ResultSet`Throws:`SQLException`


        - #### updateRow

```
public void updateRow()
               throws SQLException
```
Specified by:`updateRow` in interface `ResultSet`Throws:`SQLException`


        - #### deleteRow

```
public void deleteRow()
               throws SQLException
```
Specified by:`deleteRow` in interface `ResultSet`Throws:`SQLException`


        - #### refreshRow

```
public void refreshRow()
                throws SQLException
```
Specified by:`refreshRow` in interface `ResultSet`Throws:`SQLException`


        - #### cancelRowUpdates

```
public void cancelRowUpdates()
                      throws SQLException
```
Specified by:`cancelRowUpdates` in interface `ResultSet`Throws:`SQLException`


        - #### moveToInsertRow

```
public void moveToInsertRow()
                     throws SQLException
```
Specified by:`moveToInsertRow` in interface `ResultSet`Throws:`SQLException`


        - #### moveToCurrentRow

```
public void moveToCurrentRow()
                      throws SQLException
```
Specified by:`moveToCurrentRow` in interface `ResultSet`Throws:`SQLException`


        - #### getStatement

```
public Statement getStatement()
                       throws SQLException
```
Specified by:`getStatement` in interface `ResultSet`Throws:`SQLException`


        - #### getObject

```
public Object getObject(int arg0,
                        Map<String,Class<?>> arg1)
                 throws SQLException
```
Specified by:`getObject` in interface `ResultSet`Throws:`SQLException`


        - #### getRef

```
public Ref getRef(int arg0)
           throws SQLException
```
Specified by:`getRef` in interface `ResultSet`Throws:`SQLException`


        - #### getBlob

```
public Blob getBlob(int arg0)
             throws SQLException
```
Specified by:`getBlob` in interface `ResultSet`Throws:`SQLException`


        - #### getClob

```
public Clob getClob(int arg0)
             throws SQLException
```
Specified by:`getClob` in interface `ResultSet`Throws:`SQLException`


        - #### getArray

```
public Array getArray(int arg0)
               throws SQLException
```
Specified by:`getArray` in interface `ResultSet`Throws:`SQLException`


        - #### getObject

```
public Object getObject(String arg0,
                        Map<String,Class<?>> arg1)
                 throws SQLException
```
Specified by:`getObject` in interface `ResultSet`Throws:`SQLException`


        - #### getRef

```
public Ref getRef(String arg0)
           throws SQLException
```
Specified by:`getRef` in interface `ResultSet`Throws:`SQLException`


        - #### getBlob

```
public Blob getBlob(String arg0)
             throws SQLException
```
Specified by:`getBlob` in interface `ResultSet`Throws:`SQLException`


        - #### getClob

```
public Clob getClob(String arg0)
             throws SQLException
```
Specified by:`getClob` in interface `ResultSet`Throws:`SQLException`


        - #### getArray

```
public Array getArray(String arg0)
               throws SQLException
```
Specified by:`getArray` in interface `ResultSet`Throws:`SQLException`


        - #### getDate

```
public Date getDate(int arg0,
                    Calendar arg1)
             throws SQLException
```
Specified by:`getDate` in interface `ResultSet`Throws:`SQLException`


        - #### getDate

```
public Date getDate(String arg0,
                    Calendar arg1)
             throws SQLException
```
Specified by:`getDate` in interface `ResultSet`Throws:`SQLException`


        - #### getTime

```
public Time getTime(int arg0,
                    Calendar arg1)
             throws SQLException
```
Specified by:`getTime` in interface `ResultSet`Throws:`SQLException`


        - #### getTime

```
public Time getTime(String arg0,
                    Calendar arg1)
             throws SQLException
```
Specified by:`getTime` in interface `ResultSet`Throws:`SQLException`


        - #### getTimestamp

```
public Timestamp getTimestamp(int arg0,
                              Calendar arg1)
                       throws SQLException
```
Specified by:`getTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### getTimestamp

```
public Timestamp getTimestamp(String arg0,
                              Calendar arg1)
                       throws SQLException
```
Specified by:`getTimestamp` in interface `ResultSet`Throws:`SQLException`


        - #### getURL

```
public URL getURL(int arg0)
           throws SQLException
```
Specified by:`getURL` in interface `ResultSet`Throws:`SQLException`


        - #### getURL

```
public URL getURL(String arg0)
           throws SQLException
```
Specified by:`getURL` in interface `ResultSet`Throws:`SQLException`


        - #### updateRef

```
public void updateRef(int arg0,
                      Ref arg1)
               throws SQLException
```
Specified by:`updateRef` in interface `ResultSet`Throws:`SQLException`


        - #### updateRef

```
public void updateRef(String arg0,
                      Ref arg1)
               throws SQLException
```
Specified by:`updateRef` in interface `ResultSet`Throws:`SQLException`


        - #### updateBlob

```
public void updateBlob(int arg0,
                       Blob arg1)
                throws SQLException
```
Specified by:`updateBlob` in interface `ResultSet`Throws:`SQLException`


        - #### updateBlob

```
public void updateBlob(String arg0,
                       Blob arg1)
                throws SQLException
```
Specified by:`updateBlob` in interface `ResultSet`Throws:`SQLException`


        - #### updateClob

```
public void updateClob(int arg0,
                       Clob arg1)
                throws SQLException
```
Specified by:`updateClob` in interface `ResultSet`Throws:`SQLException`


        - #### updateClob

```
public void updateClob(String arg0,
                       Clob arg1)
                throws SQLException
```
Specified by:`updateClob` in interface `ResultSet`Throws:`SQLException`


        - #### updateArray

```
public void updateArray(int arg0,
                        Array arg1)
                 throws SQLException
```
Specified by:`updateArray` in interface `ResultSet`Throws:`SQLException`


        - #### updateArray

```
public void updateArray(String arg0,
                        Array arg1)
                 throws SQLException
```
Specified by:`updateArray` in interface `ResultSet`Throws:`SQLException`

Skip navigation links

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

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
