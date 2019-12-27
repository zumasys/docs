# ResultSetMetaDataAdapter (jbasejdbc   API)

**Created At:** 9/25/2017 11:05:54 AM  
**Updated At:** 2/15/2018 8:02:25 AM  
**Original Doc:** [com_jbase_jdbc_ResultSetMetaDataAdapter](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter)  
**Original ID:** 278015  
**Internal:** Yes  


JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../overview-summary.html)
- [Package](./../jbase-jdbc-api)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.resultsetmetadataadapter-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../resultsetadapter-%28jbasejdbc---api%29 "class in com.jbase.jdbc")
- [Next Class](./. "class in com.jbase.jdbc")


- [Frames](./.)
- [No Frames](./.)


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

## Class ResultSetMetaDataAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.ResultSetMetaDataAdapter


- All Implemented Interfaces:[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
* * *


```
public class ResultSetMetaDataAdapter
extends Object
implements ResultSetMetaData
```

This class represents ResultSetMetaData objects<br>    which need to provide additional data not provided<br>    by the server.

- - ### Nested Class Summary


Nested Classes | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ResultSetMetaDataAdapter.ColumnMetaData`  |


    - ### Field Summary

        - ### Fields inherited from interface java.sql.[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql")
`columnNoNulls, columnNullable, columnNullableUnknown`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ResultSetMetaDataAdapter()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `findColumnName(String columnName)`  |
| `String` | `getCatalogName(int column)`  |
| `String` | `getColumnClassName(int column)`  |
| `int` | `getColumnCount()`  |
| `int` | `getColumnDisplaySize(int column)`  |
| `String` | `getColumnLabel(int column)`  |
| `String` | `getColumnName(int column)`  |
| `int` | `getColumnType(int column)`  |
| `String` | `getColumnTypeName(int column)`  |
| `int` | `getPrecision(int column)`  |
| `int` | `getScale(int column)`  |
| `String` | `getSchemaName(int column)`  |
| `String` | `getTableName(int column)`  |
| `void` | `initialize()`  |
| `boolean` | `isAutoIncrement(int column)`  |
| `boolean` | `isCaseSensitive(int column)`  |
| `boolean` | `isCurrency(int column)`  |
| `boolean` | `isDefinitelyWritable(int column)`  |
| `int` | `isNullable(int column)`  |
| `boolean` | `isReadOnly(int column)`  |
| `boolean` | `isSearchable(int column)`  |
| `boolean` | `isSigned(int column)`  |
| `boolean` | `isWritable(int column)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- - ### Constructor Detail

        - #### ResultSetMetaDataAdapter

```
public ResultSetMetaDataAdapter()
```


    - ### Method Detail

        - #### initialize

```
public void initialize()
```


        - #### getColumnCount

```
public int getColumnCount()
                   throws SQLException
```
Specified by:`getColumnCount` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isAutoIncrement

```
public boolean isAutoIncrement(int column)
                        throws SQLException
```
Specified by:`isAutoIncrement` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isCaseSensitive

```
public boolean isCaseSensitive(int column)
                        throws SQLException
```
Specified by:`isCaseSensitive` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isSearchable

```
public boolean isSearchable(int column)
                     throws SQLException
```
Specified by:`isSearchable` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isCurrency

```
public boolean isCurrency(int column)
                   throws SQLException
```
Specified by:`isCurrency` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isNullable

```
public int isNullable(int column)
               throws SQLException
```
Specified by:`isNullable` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isSigned

```
public boolean isSigned(int column)
                 throws SQLException
```
Specified by:`isSigned` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnDisplaySize

```
public int getColumnDisplaySize(int column)
                         throws SQLException
```
Specified by:`getColumnDisplaySize` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnLabel

```
public String getColumnLabel(int column)
                      throws SQLException
```
Specified by:`getColumnLabel` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnName

```
public String getColumnName(int column)
                     throws SQLException
```
Specified by:`getColumnName` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### findColumnName

```
public int findColumnName(String columnName)
                   throws SQLException
```
Throws:`SQLException`


        - #### getSchemaName

```
public String getSchemaName(int column)
                     throws SQLException
```
Specified by:`getSchemaName` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getPrecision

```
public int getPrecision(int column)
                 throws SQLException
```
Specified by:`getPrecision` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getScale

```
public int getScale(int column)
             throws SQLException
```
Specified by:`getScale` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getTableName

```
public String getTableName(int column)
                    throws SQLException
```
Specified by:`getTableName` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getCatalogName

```
public String getCatalogName(int column)
                      throws SQLException
```
Specified by:`getCatalogName` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnType

```
public int getColumnType(int column)
                  throws SQLException
```
Specified by:`getColumnType` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnTypeName

```
public String getColumnTypeName(int column)
                         throws SQLException
```
Specified by:`getColumnTypeName` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isReadOnly

```
public boolean isReadOnly(int column)
                   throws SQLException
```
Specified by:`isReadOnly` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isWritable

```
public boolean isWritable(int column)
                   throws SQLException
```
Specified by:`isWritable` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### isDefinitelyWritable

```
public boolean isDefinitelyWritable(int column)
                             throws SQLException
```
Specified by:`isDefinitelyWritable` in interface `ResultSetMetaData`Throws:`SQLException`


        - #### getColumnClassName

```
public String getColumnClassName(int column)
                          throws SQLException
```
Specified by:`getColumnClassName` in interface `ResultSetMetaData`Throws:`SQLException`

Skip navigation links

- [Overview](../../../overview-summary.html)
- [Package](./../jbase-jdbc-api)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.resultsetmetadataadapter-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../resultsetadapter-%28jbasejdbc---api%29 "class in com.jbase.jdbc")
- [Next Class](./. "class in com.jbase.jdbc")


- [Frames](./.)
- [No Frames](./.)


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
