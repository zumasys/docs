# ResultSetMetaDataAdapter (jbasejdbc   API)

**Created At:** 9/25/2017 11:05:54 AM  
**Updated At:** 2/15/2018 8:02:25 AM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../overview-summary.html)
- [Package](/39228-jdbc/com_jbase_jdbc_package-summary)
- Class
- [Use](/39229-class-use/com_jbase_jdbc_class-use_ResultSetMetaDataAdapter)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_ResultSetAdapter "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter.ColumnMetaData "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter)
- [No Frames](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter)


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

## Class ResultSetMetaDataAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.ResultSetMetaDataAdapter


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a>
</dd></dl>
* * *


```
public class ResultSetMetaDataAdapter
extends Object
implements ResultSetMetaData
```

This class represents ResultSetMetaData objects<br>    which need to provide additional data not provided<br>    by the server.

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary


<caption><span>Nested Classes</span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ResultSetMetaDataAdapter.ColumnMetaData`  |

<!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from interface java.sql.[ResultSetMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true "class or interface in java.sql")
`columnNoNulls, columnNullable, columnNullableUnknown`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ResultSetMetaDataAdapter()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
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


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface java.sql.[Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
`isWrapperFor, unwrap`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ResultSetMetaDataAdapter

```
public ResultSetMetaDataAdapter()
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
        - #### getColumnCount

```
public int getColumnCount()
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnCount--" title="class or interface in java.sql">getColumnCount</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isAutoIncrement

```
public boolean isAutoIncrement(int column)
                        throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isAutoIncrement-int-" title="class or interface in java.sql">isAutoIncrement</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isCaseSensitive

```
public boolean isCaseSensitive(int column)
                        throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isCaseSensitive-int-" title="class or interface in java.sql">isCaseSensitive</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isSearchable

```
public boolean isSearchable(int column)
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isSearchable-int-" title="class or interface in java.sql">isSearchable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isCurrency

```
public boolean isCurrency(int column)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isCurrency-int-" title="class or interface in java.sql">isCurrency</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isNullable

```
public int isNullable(int column)
               throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isNullable-int-" title="class or interface in java.sql">isNullable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isSigned

```
public boolean isSigned(int column)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isSigned-int-" title="class or interface in java.sql">isSigned</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnDisplaySize

```
public int getColumnDisplaySize(int column)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnDisplaySize-int-" title="class or interface in java.sql">getColumnDisplaySize</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnLabel

```
public String getColumnLabel(int column)
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnLabel-int-" title="class or interface in java.sql">getColumnLabel</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnName

```
public String getColumnName(int column)
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnName-int-" title="class or interface in java.sql">getColumnName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### findColumnName

```
public int findColumnName(String columnName)
                   throws SQLException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getSchemaName

```
public String getSchemaName(int column)
                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getSchemaName-int-" title="class or interface in java.sql">getSchemaName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getPrecision

```
public int getPrecision(int column)
                 throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getPrecision-int-" title="class or interface in java.sql">getPrecision</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getScale

```
public int getScale(int column)
             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getScale-int-" title="class or interface in java.sql">getScale</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getTableName

```
public String getTableName(int column)
                    throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getTableName-int-" title="class or interface in java.sql">getTableName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getCatalogName

```
public String getCatalogName(int column)
                      throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getCatalogName-int-" title="class or interface in java.sql">getCatalogName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnType

```
public int getColumnType(int column)
                  throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnType-int-" title="class or interface in java.sql">getColumnType</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnTypeName

```
public String getColumnTypeName(int column)
                         throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnTypeName-int-" title="class or interface in java.sql">getColumnTypeName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isReadOnly

```
public boolean isReadOnly(int column)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isReadOnly-int-" title="class or interface in java.sql">isReadOnly</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isWritable

```
public boolean isWritable(int column)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isWritable-int-" title="class or interface in java.sql">isWritable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### isDefinitelyWritable

```
public boolean isDefinitelyWritable(int column)
                             throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#isDefinitelyWritable-int-" title="class or interface in java.sql">isDefinitelyWritable</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getColumnClassName

```
public String getColumnClassName(int column)
                          throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true#getColumnClassName-int-" title="class or interface in java.sql">getColumnClassName</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSetMetaData.html?is-external=true" title="class or interface in java.sql">ResultSetMetaData</a></code>
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
- [Use](/39229-class-use/com_jbase_jdbc_class-use_ResultSetMetaDataAdapter)
- [Tree](/39228-jdbc/com_jbase_jdbc_package-tree)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39228-jdbc/com_jbase_jdbc_ResultSetAdapter "class in com.jbase.jdbc")
- [Next Class](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter.ColumnMetaData "class in com.jbase.jdbc")


- [Frames](../../../index.html?com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter)
- [No Frames](/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter)


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
