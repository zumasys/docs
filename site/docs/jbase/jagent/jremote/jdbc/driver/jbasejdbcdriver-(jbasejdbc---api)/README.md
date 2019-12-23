# JBaseJDBCDriver (jbasejdbc   API)

**Created At:** 9/25/2017 10:42:23 AM  
**Updated At:** 2/15/2018 8:02:20 AM  
**Original Doc:** [com_jbase_jdbc_driver_JBaseJDBCDriver](https://docs.jbase.com/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseJDBCDriver (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.driver-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.driver.jbasejdbcdriver-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.driver-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../jbasedberror-%28jbasejdbc---api%29 "class in com.jbase.jdbc.driver")
- [Next Class](./../sqlstate-%28jbasejdbc---api%29 "class in com.jbase.jdbc.driver")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.driver

## Class JBaseJDBCDriver

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.driver.JBaseJDBCDriver


- All Implemented Interfaces:[JBaseJDBCDriverConstants](./../../jbasejdbcdriverconstants-%28jbasejdbc---api%29 "interface in com.jbase.jdbc"), [Driver](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true "class or interface in java.sql")
* * *


```
public class JBaseJDBCDriver
extends Object
implements Driver, JBaseJDBCDriverConstants
```

- - ### Field Summary

        - ### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCDriverConstants](./../../jbasejdbcdriverconstants-%28jbasejdbc---api%29 "interface in com.jbase.jdbc")
`DB_KEY_WORDS, DEFAULT_DISPLAY_SIZE, DRIVER_NAME, DRIVER_VERSION, DRV_JDBC_COMPLIANT, DRV_MAJOR_VERSION, DRV_MINOR_VERSION, JBASE_DB_VERSION, JBASE_JDBC_THIN_PREFIX, MAX_COLUMNS_IN_GROUPBY, MAX_TABLES_IN_SELECT, QUERY_SYSTEM_GET_ATTRIBUTES, QUERY_SYSTEM_GET_BESTROWIDENTIFIER, QUERY_SYSTEM_GET_CATALOGS, QUERY_SYSTEM_GET_COLUMNPRIVS, QUERY_SYSTEM_GET_COLUMNS, QUERY_SYSTEM_GET_CROSS_REFS, QUERY_SYSTEM_GET_EXPORTED_KEYS, QUERY_SYSTEM_GET_IMPORTED_KEYS, QUERY_SYSTEM_GET_INDEXINFO, QUERY_SYSTEM_GET_PRIMARY_KEYS, QUERY_SYSTEM_GET_PROCEDURECOLUMNS, QUERY_SYSTEM_GET_PROCEDURES, QUERY_SYSTEM_GET_SCHEMAS, QUERY_SYSTEM_GET_SUPERTABLES, QUERY_SYSTEM_GET_SUPERTYPES, QUERY_SYSTEM_GET_TABLE_TYPES, QUERY_SYSTEM_GET_TABLEPRIVS, QUERY_SYSTEM_GET_TABLES, QUERY_SYSTEM_GET_TYPE_INFO, QUERY_SYSTEM_GET_UDTS, QUERY_SYSTEM_GET_VERSIONCOLS, RESULT_SET_CONCURRENCY, RESULT_SET_HOLDABILITY, RESULT_SET_TYPE, SQL_STATE_TYPE, TRANSACTION_ISOLATION, URL_CONNECT_ACCOUNT, URL_CONNECT_CLIENT_TYPE, URL_CONNECT_JBASE, URL_CONNECT_MACHINE, URL_CONNECT_PORT, URL_CONNECT_TYPE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JBaseJDBCDriver()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `acceptsURL(String url)`  |
| `Connection` | `connect(String url,<br>       Properties info)`  |
| `protected JBaseJDBCConnection` | `getJbaseJDBCConnection(String url,<br>                      Properties info)`  |
| `int` | `getMajorVersion()`  |
| `int` | `getMinorVersion()`  |
| `DriverPropertyInfo[]` | `getPropertyInfo(String url,<br>               Properties info)`  |
| `boolean` | `jdbcCompliant()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface java.sql.[Driver](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Driver.html?is-external=true "class or interface in java.sql")
`getParentLogger`

- - ### Constructor Detail

        - #### JBaseJDBCDriver

```
public JBaseJDBCDriver()
```


    - ### Method Detail

        - #### acceptsURL

```
public boolean acceptsURL(String url)
                   throws SQLException
```
Specified by:`acceptsURL` in interface `Driver`Throws:`SQLException`


        - #### connect

```
public Connection connect(String url,
                          Properties info)
                   throws SQLException
```
Specified by:`connect` in interface `Driver`Throws:`SQLException`


        - #### getJbaseJDBCConnection

```
protected JBaseJDBCConnection getJbaseJDBCConnection(String url,
                                                     Properties info)
```


        - #### getMajorVersion

```
public int getMajorVersion()
```
Specified by:`getMajorVersion` in interface `Driver`


        - #### getMinorVersion

```
public int getMinorVersion()
```
Specified by:`getMinorVersion` in interface `Driver`


        - #### getPropertyInfo

```
public DriverPropertyInfo[] getPropertyInfo(String url,
                                            Properties info)
                                     throws SQLException
```
Specified by:`getPropertyInfo` in interface `Driver`Throws:`SQLException`


        - #### jdbcCompliant

```
public boolean jdbcCompliant()
```
Specified by:`jdbcCompliant` in interface `Driver`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.driver-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.driver.jbasejdbcdriver-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.driver-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../jbasedberror-%28jbasejdbc---api%29 "class in com.jbase.jdbc.driver")
- [Next Class](./../sqlstate-%28jbasejdbc---api%29 "class in com.jbase.jdbc.driver")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

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
