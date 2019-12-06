# JBaseJDBCDriver (jbasejdbc   API)

**Created At:** 9/25/2017 10:42:23 AM  
**Updated At:** 2/15/2018 8:02:20 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseJDBCDriver (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseJDBCDriver)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39230-driver/com_jbase_jdbc_driver_JBaseDBError "class in com.jbase.jdbc.driver")
- [Next Class](/39230-driver/com_jbase_jdbc_driver_SQLState "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

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
com.jbase.jdbc.driver

## Class JBaseJDBCDriver

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.driver.JBaseJDBCDriver


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCDriverConstants" title="interface in com.jbase.jdbc">JBaseJDBCDriverConstants</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a>
</dd></dl>
* * *


```
public class JBaseJDBCDriver
extends Object
implements Driver, JBaseJDBCDriverConstants
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCDriverConstants](/39228-jdbc/com_jbase_jdbc_JBaseJDBCDriverConstants "interface in com.jbase.jdbc")
`DB_KEY_WORDS, DEFAULT_DISPLAY_SIZE, DRIVER_NAME, DRIVER_VERSION, DRV_JDBC_COMPLIANT, DRV_MAJOR_VERSION, DRV_MINOR_VERSION, JBASE_DB_VERSION, JBASE_JDBC_THIN_PREFIX, MAX_COLUMNS_IN_GROUPBY, MAX_TABLES_IN_SELECT, QUERY_SYSTEM_GET_ATTRIBUTES, QUERY_SYSTEM_GET_BESTROWIDENTIFIER, QUERY_SYSTEM_GET_CATALOGS, QUERY_SYSTEM_GET_COLUMNPRIVS, QUERY_SYSTEM_GET_COLUMNS, QUERY_SYSTEM_GET_CROSS_REFS, QUERY_SYSTEM_GET_EXPORTED_KEYS, QUERY_SYSTEM_GET_IMPORTED_KEYS, QUERY_SYSTEM_GET_INDEXINFO, QUERY_SYSTEM_GET_PRIMARY_KEYS, QUERY_SYSTEM_GET_PROCEDURECOLUMNS, QUERY_SYSTEM_GET_PROCEDURES, QUERY_SYSTEM_GET_SCHEMAS, QUERY_SYSTEM_GET_SUPERTABLES, QUERY_SYSTEM_GET_SUPERTYPES, QUERY_SYSTEM_GET_TABLE_TYPES, QUERY_SYSTEM_GET_TABLEPRIVS, QUERY_SYSTEM_GET_TABLES, QUERY_SYSTEM_GET_TYPE_INFO, QUERY_SYSTEM_GET_UDTS, QUERY_SYSTEM_GET_VERSIONCOLS, RESULT_SET_CONCURRENCY, RESULT_SET_HOLDABILITY, RESULT_SET_TYPE, SQL_STATE_TYPE, TRANSACTION_ISOLATION, URL_CONNECT_ACCOUNT, URL_CONNECT_CLIENT_TYPE, URL_CONNECT_JBASE, URL_CONNECT_MACHINE, URL_CONNECT_PORT, URL_CONNECT_TYPE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JBaseJDBCDriver()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `acceptsURL(String url)`  |
| `Connection` | `connect(String url,<br>       Properties info)`  |
| `protected JBaseJDBCConnection` | `getJbaseJDBCConnection(String url,<br>                      Properties info)`  |
| `int` | `getMajorVersion()`  |
| `int` | `getMinorVersion()`  |
| `DriverPropertyInfo[]` | `getPropertyInfo(String url,<br>               Properties info)`  |
| `boolean` | `jdbcCompliant()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface java.sql.[Driver](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true "class or interface in java.sql")
`getParentLogger`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JBaseJDBCDriver

```
public JBaseJDBCDriver()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### acceptsURL

```
public boolean acceptsURL(String url)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#acceptsURL-java.lang.String-" title="class or interface in java.sql">acceptsURL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### connect

```
public Connection connect(String url,
                          Properties info)
                   throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#connect-java.lang.String-java.util.Properties-" title="class or interface in java.sql">connect</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### getJbaseJDBCConnection

```
protected JBaseJDBCConnection getJbaseJDBCConnection(String url,
                                                     Properties info)
```

<!--   -->
        - #### getMajorVersion

```
public int getMajorVersion()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#getMajorVersion--" title="class or interface in java.sql">getMajorVersion</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd></dl>

<!--   -->
        - #### getMinorVersion

```
public int getMinorVersion()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#getMinorVersion--" title="class or interface in java.sql">getMinorVersion</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd></dl>

<!--   -->
        - #### getPropertyInfo

```
public DriverPropertyInfo[] getPropertyInfo(String url,
                                            Properties info)
                                     throws SQLException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#getPropertyInfo-java.lang.String-java.util.Properties-" title="class or interface in java.sql">getPropertyInfo</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### jdbcCompliant

```
public boolean jdbcCompliant()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true#jdbcCompliant--" title="class or interface in java.sql">jdbcCompliant</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true" title="class or interface in java.sql">Driver</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseJDBCDriver)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39230-driver/com_jbase_jdbc_driver_JBaseDBError "class in com.jbase.jdbc.driver")
- [Next Class](/39230-driver/com_jbase_jdbc_driver_SQLState "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

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
