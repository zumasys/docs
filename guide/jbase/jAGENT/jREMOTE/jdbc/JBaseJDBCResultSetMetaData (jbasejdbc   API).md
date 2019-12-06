# JBaseJDBCResultSetMetaData (jbasejdbc   API)

**Created At:** 9/25/2017 10:55:40 AM  
**Updated At:** 2/15/2018 8:02:44 AM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
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
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jdbc

## Class JBaseJDBCResultSetMetaData

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.JBaseJDBCResultSetMetaData


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals" title="interface in com.jbase.jdbc">JBaseJDBCGlobals</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a>
</dd></dl>
* * *


```
public class JBaseJDBCResultSetMetaData
extends Object
implements ResultSetMetaData, JBaseJDBCGlobals
```

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary

        - <!--   -->
### Nested classes/interfaces inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`JBaseJDBCGlobals.TYPES`

<!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from interface java.sql.[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql")
`columnNoNulls, columnNullable, columnNullableUnknown`


        - <!--   -->
### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
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


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getColumnCount

```
public int getColumnCount()
                   throws SQLException
```

Returns the number of columns in this ResultSet object.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnCount--" title="class or interface in java.sql">getColumnCount</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>int the number of columns</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnDisplaySize

```
public int getColumnDisplaySize(int column)
                         throws SQLException
```

Indicates the designated column's normal maximum width in characters.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnDisplaySize-int-" title="class or interface in java.sql">getColumnDisplaySize</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>the normal maximum number of characters allowed as the width of the designated column</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnType

```
public int getColumnType(int column)
                  throws SQLException
```

Retrieves the designated column's SQL type.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnType-int-" title="class or interface in java.sql">getColumnType</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>SQL type from JBaseJDBCGlobals.TYPES (not from java.sql.Types !)</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### translateJDBCTypeToJbaseType

```
public static int translateJDBCTypeToJbaseType(int jdbcType)
```

<!--   -->
        - #### getPrecision

```
public int getPrecision(int column)
                 throws SQLException
```

Get the designated column's number of decimal digits.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getPrecision-int-" title="class or interface in java.sql">getPrecision</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>precision</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getScale

```
public int getScale(int column)
             throws SQLException
```

Gets the designated column's number of digits to right of the decimal point.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getScale-int-" title="class or interface in java.sql">getScale</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>scale</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isNullable

```
public int isNullable(int column)
               throws SQLException
```

TODO: Indicates the nullability of values in the designated column.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isNullable-int-" title="class or interface in java.sql">isNullable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>the nullability status of the given column; one of columnNoNulls, columnNullable or columnNullableUnknown</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isAutoIncrement

```
public boolean isAutoIncrement(int column)
                        throws SQLException
```

TODO: Indicates whether the designated column is automatically numbered, thus read-only.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isAutoIncrement-int-" title="class or interface in java.sql">isAutoIncrement</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isCaseSensitive

```
public boolean isCaseSensitive(int column)
                        throws SQLException
```

Indicates whether a column's case matters.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isCaseSensitive-int-" title="class or interface in java.sql">isCaseSensitive</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isCurrency

```
public boolean isCurrency(int column)
                   throws SQLException
```

TODO: (?) Indicates whether the designated column is a cash value.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isCurrency-int-" title="class or interface in java.sql">isCurrency</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isDefinitelyWritable

```
public boolean isDefinitelyWritable(int column)
                             throws SQLException
```

Indicates whether a write on the designated column will definitely succeed.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isDefinitelyWritable-int-" title="class or interface in java.sql">isDefinitelyWritable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isReadOnly

```
public boolean isReadOnly(int column)
                   throws SQLException
```

TODO: Indicates whether the designated column is definitely not writable.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isReadOnly-int-" title="class or interface in java.sql">isReadOnly</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isSearchable

```
public boolean isSearchable(int column)
                     throws SQLException
```

Indicates whether the designated column can be used in a where clause.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isSearchable-int-" title="class or interface in java.sql">isSearchable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isSigned

```
public boolean isSigned(int column)
                 throws SQLException
```

TODO (?): Indicates whether values in the designated column are signed numbers.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isSigned-int-" title="class or interface in java.sql">isSigned</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### isWritable

```
public boolean isWritable(int column)
                   throws SQLException
```

Indicates whether it is possible for a write on the designated column to succeed.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isWritable-int-" title="class or interface in java.sql">isWritable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>true if so; false otherwise</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getCatalogName

```
public String getCatalogName(int column)
                      throws SQLException
```

Gets the designated column's table's catalog name.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getCatalogName-int-" title="class or interface in java.sql">getCatalogName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>the name of the catalog for the table in which the given column appears or "" if not applicable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnClassName

```
public String getColumnClassName(int column)
                          throws SQLException
```

TODO: Returns the fully-qualified name of the Java class whose instances are manufactured<br> if the method ResultSet.getObject is called to retrieve a value from the column.<br> ResultSet.getObject may return a subclass of the class returned by this method.<br> <br> jBASE Note: Currently always return "java.lang.Object"
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnClassName-int-" title="class or interface in java.sql">getColumnClassName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>the fully-qualified name of the class in the Java programming language that would be used
         by the method ResultSet.getObject to retrieve the value in the specified column.
         This is the class name used for custom mapping.</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnLabel

```
public String getColumnLabel(int column)
                      throws SQLException
```

Gets the designated column's suggested title for use in printouts and displays.<br> <br> NOTE: Currently it always returns the same as @see getColumnName
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnLabel-int-" title="class or interface in java.sql">getColumnLabel</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>the suggested column title</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnName

```
public String getColumnName(int column)
                     throws SQLException
```

Get the designated column's name.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnName-int-" title="class or interface in java.sql">getColumnName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>column name</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getColumnTypeName

```
public String getColumnTypeName(int column)
                         throws SQLException
```

Retrieves the designated column's database-specific type name.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnTypeName-int-" title="class or interface in java.sql">getColumnTypeName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>type name used by the database. If the column type is a user-defined type, then a fully-qualified type name is returned [NOT yet implemented].</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getSchemaName

```
public String getSchemaName(int column)
                     throws SQLException
```

Get the designated column's table's schema.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getSchemaName-int-" title="class or interface in java.sql">getSchemaName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>schema name or "" if not applicable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->
        - #### getTableName

```
public String getTableName(int column)
                    throws SQLException
```

Gets the designated column's table name.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getTableName-int-" title="class or interface in java.sql">getTableName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>column</code> - the first column is 1, the second is 2, ...</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>table name or "" if not applicable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
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
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
