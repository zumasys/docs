# JBaseJDBCResultSetMetaData (jbasejdbc   API)

**Created At:** 9/25/2017 10:55:40 AM  
**Updated At:** 2/15/2018 8:02:44 AM  
**Original Doc:** [com_jbase_jdbc_JBaseJDBCResultSetMetaData](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_JBaseJDBCResultSetMetaData)  


JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../overview-summary.html)
- [Package](/39228-jdbc/com_jbase_jdbc_package-summary)
- Class
- [Use](/39229-class-use/com_jbase_jdbc_class-use_JBaseJDBCResultSetMetaData)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcpreparedstatement "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketconnection "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_JBaseJDBCResultSetMetaData)
- [No Frames](/39228-jdbc/com_jbase_jdbc_JBaseJDBCResultSetMetaData)


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

## Class JBaseJDBCResultSetMetaData

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.JBaseJDBCResultSetMetaData


- All Implemented Interfaces:[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc"), [ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
* * *


```
public class JBaseJDBCResultSetMetaData
extends Object
implements ResultSetMetaData, JBaseJDBCGlobals
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`JBaseJDBCGlobals.TYPES`


    - ### Field Summary

        - ### Fields inherited from interface java.sql.[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql")
`columnNoNulls, columnNullable, columnNullableUnknown`


        - ### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`


    - ### Method Summary


All Methods [Static Methods](javascript:show%281%29;) [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getCatalogName(int column)`<br>Gets the designated column's table's catalog name.<br> |
| `String` | `getColumnClassName(int column)`<br>TODO: Returns the fully-qualified name of the Java class whose instances are manufactured<br> if the method ResultSet.getObject is called to retrieve a value from the column.<br> |
| `int` | `getColumnCount()`<br>Returns the number of columns in this ResultSet object.<br> |
| `int` | `getColumnDisplaySize(int column)`<br>Indicates the designated column's normal maximum width in characters.<br> |
| `String` | `getColumnLabel(int column)`<br>Gets the designated column's suggested title for use in printouts and displays.<br> |
| `String` | `getColumnName(int column)`<br>Get the designated column's name.<br> |
| `int` | `getColumnType(int column)`<br>Retrieves the designated column's SQL type.<br> |
| `String` | `getColumnTypeName(int column)`<br>Retrieves the designated column's database-specific type name.<br> |
| `int` | `getPrecision(int column)`<br>Get the designated column's number of decimal digits.<br> |
| `int` | `getScale(int column)`<br>Gets the designated column's number of digits to right of the decimal point.<br> |
| `String` | `getSchemaName(int column)`<br>Get the designated column's table's schema.<br> |
| `String` | `getTableName(int column)`<br>Gets the designated column's table name.<br> |
| `boolean` | `isAutoIncrement(int column)`<br>TODO: Indicates whether the designated column is automatically numbered, thus read-only.<br> |
| `boolean` | `isCaseSensitive(int column)`<br>Indicates whether a column's case matters.<br> |
| `boolean` | `isCurrency(int column)`<br>TODO: (?) Indicates whether the designated column is a cash value.<br> |
| `boolean` | `isDefinitelyWritable(int column)`<br>Indicates whether a write on the designated column will definitely succeed.<br> |
| `int` | `isNullable(int column)`<br>TODO: Indicates the nullability of values in the designated column.<br> |
| `boolean` | `isReadOnly(int column)`<br>TODO: Indicates whether the designated column is definitely not writable.<br> |
| `boolean` | `isSearchable(int column)`<br>Indicates whether the designated column can be used in a where clause.<br> |
| `boolean` | `isSigned(int column)`<br>TODO (?): Indicates whether values in the designated column are signed numbers.<br> |
| `boolean` | `isWritable(int column)`<br>Indicates whether it is possible for a write on the designated column to succeed.<br> |
| `static int` | `translateJDBCTypeToJbaseType(int jdbcType)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- - ### Method Detail

        - #### getColumnCount

```
public int getColumnCount()
                   throws SQLException
```

Returns the number of columns in this ResultSet object.
Specified by:`getColumnCount` in interface `ResultSetMetaData`Returns:int the number of columnsThrows:`SQLException` - if a database access error occurs


        - #### getColumnDisplaySize

```
public int getColumnDisplaySize(int column)
                         throws SQLException
```

Indicates the designated column's normal maximum width in characters.
Specified by:`getColumnDisplaySize` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:the normal maximum number of characters allowed as the width of the designated columnThrows:`SQLException` - if a database access error occurs


        - #### getColumnType

```
public int getColumnType(int column)
                  throws SQLException
```

Retrieves the designated column's SQL type.
Specified by:`getColumnType` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:SQL type from JBaseJDBCGlobals.TYPES (not from java.sql.Types !)Throws:`SQLException` - if a database access error occurs


        - #### translateJDBCTypeToJbaseType

```
public static int translateJDBCTypeToJbaseType(int jdbcType)
```


        - #### getPrecision

```
public int getPrecision(int column)
                 throws SQLException
```

Get the designated column's number of decimal digits.
Specified by:`getPrecision` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:precisionThrows:`SQLException` - if a database access error occurs


        - #### getScale

```
public int getScale(int column)
             throws SQLException
```

Gets the designated column's number of digits to right of the decimal point.
Specified by:`getScale` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:scaleThrows:`SQLException` - if a database access error occurs


        - #### isNullable

```
public int isNullable(int column)
               throws SQLException
```

TODO: Indicates the nullability of values in the designated column.
Specified by:`isNullable` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:the nullability status of the given column; one of columnNoNulls, columnNullable or columnNullableUnknownThrows:`SQLException` - if a database access error occurs


        - #### isAutoIncrement

```
public boolean isAutoIncrement(int column)
                        throws SQLException
```

TODO: Indicates whether the designated column is automatically numbered, thus read-only.
Specified by:`isAutoIncrement` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isCaseSensitive

```
public boolean isCaseSensitive(int column)
                        throws SQLException
```

Indicates whether a column's case matters.
Specified by:`isCaseSensitive` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isCurrency

```
public boolean isCurrency(int column)
                   throws SQLException
```

TODO: (?) Indicates whether the designated column is a cash value.
Specified by:`isCurrency` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isDefinitelyWritable

```
public boolean isDefinitelyWritable(int column)
                             throws SQLException
```

Indicates whether a write on the designated column will definitely succeed.
Specified by:`isDefinitelyWritable` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isReadOnly

```
public boolean isReadOnly(int column)
                   throws SQLException
```

TODO: Indicates whether the designated column is definitely not writable.
Specified by:`isReadOnly` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isSearchable

```
public boolean isSearchable(int column)
                     throws SQLException
```

Indicates whether the designated column can be used in a where clause.
Specified by:`isSearchable` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isSigned

```
public boolean isSigned(int column)
                 throws SQLException
```

TODO (?): Indicates whether values in the designated column are signed numbers.
Specified by:`isSigned` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### isWritable

```
public boolean isWritable(int column)
                   throws SQLException
```

Indicates whether it is possible for a write on the designated column to succeed.
Specified by:`isWritable` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:true if so; false otherwiseThrows:`SQLException` - if a database access error occurs


        - #### getCatalogName

```
public String getCatalogName(int column)
                      throws SQLException
```

Gets the designated column's table's catalog name.
Specified by:`getCatalogName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:the name of the catalog for the table in which the given column appears or "" if not applicableThrows:`SQLException` - if a database access error occurs


        - #### getColumnClassName

```
public String getColumnClassName(int column)
                          throws SQLException
```

TODO: Returns the fully-qualified name of the Java class whose instances are manufactured<br> if the method ResultSet.getObject is called to retrieve a value from the column.<br> ResultSet.getObject may return a subclass of the class returned by this method.<br> <br> jBASE Note: Currently always return "java.lang.Object"
Specified by:`getColumnClassName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:the fully-qualified name of the class in the Java programming language that would be used<br>         by the method ResultSet.getObject to retrieve the value in the specified column.<br>         This is the class name used for custom mapping.Throws:`SQLException` - if a database access error occurs


        - #### getColumnLabel

```
public String getColumnLabel(int column)
                      throws SQLException
```

Gets the designated column's suggested title for use in printouts and displays.<br> <br> NOTE: Currently it always returns the same as @see getColumnName
Specified by:`getColumnLabel` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:the suggested column titleThrows:`SQLException` - if a database access error occurs


        - #### getColumnName

```
public String getColumnName(int column)
                     throws SQLException
```

Get the designated column's name.
Specified by:`getColumnName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:column nameThrows:`SQLException` - if a database access error occurs


        - #### getColumnTypeName

```
public String getColumnTypeName(int column)
                         throws SQLException
```

Retrieves the designated column's database-specific type name.
Specified by:`getColumnTypeName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:type name used by the database. If the column type is a user-defined type, then a fully-qualified type name is returned [NOT yet implemented].Throws:`SQLException` - if a database access error occurs


        - #### getSchemaName

```
public String getSchemaName(int column)
                     throws SQLException
```

Get the designated column's table's schema.
Specified by:`getSchemaName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:schema name or "" if not applicableThrows:`SQLException` - if a database access error occurs


        - #### getTableName

```
public String getTableName(int column)
                    throws SQLException
```

Gets the designated column's table name.
Specified by:`getTableName` in interface `ResultSetMetaData`Parameters:`column` - the first column is 1, the second is 2, ...Returns:table name or "" if not applicableThrows:`SQLException` - if a database access error occurs

Skip navigation links

- [Overview](../../../overview-summary.html)
- [Package](/39228-jdbc/com_jbase_jdbc_package-summary)
- Class
- [Use](/39229-class-use/com_jbase_jdbc_class-use_JBaseJDBCResultSetMetaData)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcpreparedstatement "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketconnection "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_JBaseJDBCResultSetMetaData)
- [No Frames](/39228-jdbc/com_jbase_jdbc_JBaseJDBCResultSetMetaData)


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
