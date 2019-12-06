# SQLState (jbasejdbc   API)

**Created At:** 9/25/2017 10:42:55 AM  
**Updated At:** 2/15/2018 8:02:45 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLState (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":9};<br>var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_SQLState)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")
- Next Class


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_SQLState)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_SQLState)


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

## Class SQLState

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.driver.SQLState


- All Implemented Interfaces:[JBaseJDBCDriverConstants](/39228-jdbc/com_jbase_jdbc_JBaseJDBCDriverConstants "interface in com.jbase.jdbc")
* * *


```
public class SQLState
extends Object
implements JBaseJDBCDriverConstants
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static String[]` | `SS_CARDINALITY_VIOLATION`  |
| `static String[]` | `SS_CHARACTER_NOT_IN_REPERTOIRE`  |
| `static String[]` | `SS_CONN_DOES_NOT_EXIST`  |
| `static String[]` | `SS_CONN_NAME_IN_USE`  |
| `static String[]` | `SS_CONNECTION_EXCEPTION`  |
| `static String[]` | `SS_CONNECTION_FAILURE`  |
| `static String[]` | `SS_CURSOR_SPEC_CANNOT_BE_EXECUTED`  |
| `static String[]` | `SS_DATA_EXCEPTION`  |
| `static String[]` | `SS_DATE_TIME_FIELD_OVERFLOW`  |
| `static String[]` | `SS_DISCONECT_ERROR`  |
| `static String[]` | `SS_DIVISION_BY_ZERO`  |
| `static String[]` | `SS_DYNAMIC_SQL_ERROR`  |
| `static String[]` | `SS_ERROR_IN_ASSIGNMENT`  |
| `static String[]` | `SS_FEATURE_NOT_SUPPORTED`  |
| `static String[]` | `SS_IMPLICIT_ZERO_BIT_PADDING`  |
| `static String[]` | `SS_INDICATOR_OVERFLOW`  |
| `static String[]` | `SS_INSUFFICIENT_ITEM_DESC_AREAS`  |
| `static String[]` | `SS_INTEGRITY_CONSTRAINT`  |
| `static String[]` | `SS_INTERVAL_FIELD_OVERFLOW`  |
| `static String[]` | `SS_INVALID_AUTH_SPEC`  |
| `static String[]` | `SS_INVALID_CHAR_VALUE_FOR_CAST`  |
| `static String[]` | `SS_INVALID_CURSOR_STATE`  |
| `static String[]` | `SS_INVALID_DATE_TIME_FORMAT`  |
| `static String[]` | `SS_INVALID_DESCRIPTOR_COUNT`  |
| `static String[]` | `SS_INVALID_DESCRIPTOR_INDEX`  |
| `static String[]` | `SS_INVALID_ESCAPE_CHAR`  |
| `static String[]` | `SS_INVALID_ESCAPE_SEQUENCE`  |
| `static String[]` | `SS_INVALID_PARAMETER_VALUE`  |
| `static String[]` | `SS_INVALID_TIME_ZONE_DISPLACEMENT_VALUE`  |
| `static String[]` | `SS_INVALID_TRANSACTION_STATE`  |
| `static String[]` | `SS_MULTIPLE_SERVER_TRANSACTIONS`  |
| `static String[]` | `SS_NO_DATA`  |
| `static String[]` | `SS_NULL_VALUE_ELIM_IN_SET`  |
| `static String[]` | `SS_NULL_VALUE_NO_INDICATOR_PARAM`  |
| `static String[]` | `SS_NUMERIC_VALUE_OUT_OF_RANGE`  |
| `static String[]` | `SS_PREPARED_STATE_NOT_A_CURSOR_SPEC`  |
| `static String[]` | `SS_PRIVILEGE_NOT_GRANTED`  |
| `static String[]` | `SS_PRIVILEGE_NOT_REVOKED`  |
| `static String[]` | `SS_QUERY_EXPRESSION_TOO_LONG`  |
| `static String[]` | `SS_RESTRICTED_DATATYPE_ATTR_VIOLATION`  |
| `static String[]` | `SS_SEARCH_CONDITION_TOO_LONG`  |
| `static String[]` | `SS_SQL_CLIENT_UNABLE_TO_ESTABLISH_SQL_CONN`  |
| `static String[]` | `SS_SQL_SERVER_REJECTED_SQL_CONNECTION`  |
| `static String[]` | `SS_SQL_STATEMENT_NAME`  |
| `static String[]` | `SS_SQL_SYNTAX_OR_ACCESS_VIOLATION`  |
| `static String[]` | `SS_STRING_DATA_LENGTH_MISMATCH`  |
| `static String[]` | `SS_STRING_DATA_RIGHT_TRUNC`  |
| `static String[]` | `SS_SUBSTRING_ERROR`  |
| `static String[]` | `SS_SUCCESSFUL_COMPLETION`  |
| `static String[]` | `SS_SYSTEM_ERRORS`  |
| `static String[]` | `SS_TRANSACTION_RESOLUTION_UNKNOWN`  |
| `static String[]` | `SS_TRIGGERED_DATA_CHANGE_VIOLATION`  |
| `static String[]` | `SS_TRIM_ERROR`  |
| `static String[]` | `SS_UNTERMINATED_C_STRING`  |
| `static String[]` | `SS_USING_CLAUSE_MATCH_PARAM_SPEC_ERROR`  |
| `static String[]` | `SS_USING_CLAUSE_MATCH_TARGET_SPEC_ERROR`  |
| `static String[]` | `SS_USING_CLAUSE_REQ_FOR_DYN_PARAM`  |
| `static String[]` | `SS_USING_CLAUSE_REQ_FOR_RESULT_FIELDS`  |
| `static String[]` | `SS_WARNING`  |


        - ### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCDriverConstants](/39228-jdbc/com_jbase_jdbc_JBaseJDBCDriverConstants "interface in com.jbase.jdbc")
`DB_KEY_WORDS, DEFAULT_DISPLAY_SIZE, DRIVER_NAME, DRIVER_VERSION, DRV_JDBC_COMPLIANT, DRV_MAJOR_VERSION, DRV_MINOR_VERSION, JBASE_DB_VERSION, JBASE_JDBC_THIN_PREFIX, MAX_COLUMNS_IN_GROUPBY, MAX_TABLES_IN_SELECT, QUERY_SYSTEM_GET_ATTRIBUTES, QUERY_SYSTEM_GET_BESTROWIDENTIFIER, QUERY_SYSTEM_GET_CATALOGS, QUERY_SYSTEM_GET_COLUMNPRIVS, QUERY_SYSTEM_GET_COLUMNS, QUERY_SYSTEM_GET_CROSS_REFS, QUERY_SYSTEM_GET_EXPORTED_KEYS, QUERY_SYSTEM_GET_IMPORTED_KEYS, QUERY_SYSTEM_GET_INDEXINFO, QUERY_SYSTEM_GET_PRIMARY_KEYS, QUERY_SYSTEM_GET_PROCEDURECOLUMNS, QUERY_SYSTEM_GET_PROCEDURES, QUERY_SYSTEM_GET_SCHEMAS, QUERY_SYSTEM_GET_SUPERTABLES, QUERY_SYSTEM_GET_SUPERTYPES, QUERY_SYSTEM_GET_TABLE_TYPES, QUERY_SYSTEM_GET_TABLEPRIVS, QUERY_SYSTEM_GET_TABLES, QUERY_SYSTEM_GET_TYPE_INFO, QUERY_SYSTEM_GET_UDTS, QUERY_SYSTEM_GET_VERSIONCOLS, RESULT_SET_CONCURRENCY, RESULT_SET_HOLDABILITY, RESULT_SET_TYPE, SQL_STATE_TYPE, TRANSACTION_ISOLATION, URL_CONNECT_ACCOUNT, URL_CONNECT_CLIENT_TYPE, URL_CONNECT_JBASE, URL_CONNECT_MACHINE, URL_CONNECT_PORT, URL_CONNECT_TYPE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `SQLState()`  |


    - ### Method Summary


All Methods [Static Methods](javascript:show%281%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `static String[]` | `getErrorString(String errorcode)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### SS\_SUCCESSFUL\_COMPLETION

```
public static final String[] SS_SUCCESSFUL_COMPLETION
```


        - #### SS\_WARNING

```
public static final String[] SS_WARNING
```


        - #### SS\_DISCONECT\_ERROR

```
public static final String[] SS_DISCONECT_ERROR
```


        - #### SS\_NULL\_VALUE\_ELIM\_IN\_SET

```
public static final String[] SS_NULL_VALUE_ELIM_IN_SET
```


        - #### SS\_STRING\_DATA\_RIGHT\_TRUNC

```
public static final String[] SS_STRING_DATA_RIGHT_TRUNC
```


        - #### SS\_INSUFFICIENT\_ITEM\_DESC\_AREAS

```
public static final String[] SS_INSUFFICIENT_ITEM_DESC_AREAS
```


        - #### SS\_PRIVILEGE\_NOT\_REVOKED

```
public static final String[] SS_PRIVILEGE_NOT_REVOKED
```


        - #### SS\_PRIVILEGE\_NOT\_GRANTED

```
public static final String[] SS_PRIVILEGE_NOT_GRANTED
```


        - #### SS\_IMPLICIT\_ZERO\_BIT\_PADDING

```
public static final String[] SS_IMPLICIT_ZERO_BIT_PADDING
```


        - #### SS\_SEARCH\_CONDITION\_TOO\_LONG

```
public static final String[] SS_SEARCH_CONDITION_TOO_LONG
```


        - #### SS\_QUERY\_EXPRESSION\_TOO\_LONG

```
public static final String[] SS_QUERY_EXPRESSION_TOO_LONG
```


        - #### SS\_NO\_DATA

```
public static final String[] SS_NO_DATA
```


        - #### SS\_DYNAMIC\_SQL\_ERROR

```
public static final String[] SS_DYNAMIC_SQL_ERROR
```


        - #### SS\_USING\_CLAUSE\_MATCH\_PARAM\_SPEC\_ERROR

```
public static final String[] SS_USING_CLAUSE_MATCH_PARAM_SPEC_ERROR
```


        - #### SS\_USING\_CLAUSE\_MATCH\_TARGET\_SPEC\_ERROR

```
public static final String[] SS_USING_CLAUSE_MATCH_TARGET_SPEC_ERROR
```


        - #### SS\_CURSOR\_SPEC\_CANNOT\_BE\_EXECUTED

```
public static final String[] SS_CURSOR_SPEC_CANNOT_BE_EXECUTED
```


        - #### SS\_USING\_CLAUSE\_REQ\_FOR\_DYN\_PARAM

```
public static final String[] SS_USING_CLAUSE_REQ_FOR_DYN_PARAM
```


        - #### SS\_PREPARED\_STATE\_NOT\_A\_CURSOR\_SPEC

```
public static final String[] SS_PREPARED_STATE_NOT_A_CURSOR_SPEC
```


        - #### SS\_RESTRICTED\_DATATYPE\_ATTR\_VIOLATION

```
public static final String[] SS_RESTRICTED_DATATYPE_ATTR_VIOLATION
```


        - #### SS\_USING\_CLAUSE\_REQ\_FOR\_RESULT\_FIELDS

```
public static final String[] SS_USING_CLAUSE_REQ_FOR_RESULT_FIELDS
```


        - #### SS\_INVALID\_DESCRIPTOR\_COUNT

```
public static final String[] SS_INVALID_DESCRIPTOR_COUNT
```


        - #### SS\_INVALID\_DESCRIPTOR\_INDEX

```
public static final String[] SS_INVALID_DESCRIPTOR_INDEX
```


        - #### SS\_CONNECTION\_EXCEPTION

```
public static final String[] SS_CONNECTION_EXCEPTION
```


        - #### SS\_SQL\_CLIENT\_UNABLE\_TO\_ESTABLISH\_SQL\_CONN

```
public static final String[] SS_SQL_CLIENT_UNABLE_TO_ESTABLISH_SQL_CONN
```


        - #### SS\_CONN\_NAME\_IN\_USE

```
public static final String[] SS_CONN_NAME_IN_USE
```


        - #### SS\_CONN\_DOES\_NOT\_EXIST

```
public static final String[] SS_CONN_DOES_NOT_EXIST
```


        - #### SS\_SQL\_SERVER\_REJECTED\_SQL\_CONNECTION

```
public static final String[] SS_SQL_SERVER_REJECTED_SQL_CONNECTION
```


        - #### SS\_CONNECTION\_FAILURE

```
public static final String[] SS_CONNECTION_FAILURE
```


        - #### SS\_TRANSACTION\_RESOLUTION\_UNKNOWN

```
public static final String[] SS_TRANSACTION_RESOLUTION_UNKNOWN
```


        - #### SS\_FEATURE\_NOT\_SUPPORTED

```
public static final String[] SS_FEATURE_NOT_SUPPORTED
```


        - #### SS\_MULTIPLE\_SERVER\_TRANSACTIONS

```
public static final String[] SS_MULTIPLE_SERVER_TRANSACTIONS
```


        - #### SS\_CARDINALITY\_VIOLATION

```
public static final String[] SS_CARDINALITY_VIOLATION
```


        - #### SS\_DATA\_EXCEPTION

```
public static final String[] SS_DATA_EXCEPTION
```


        - #### SS\_NULL\_VALUE\_NO\_INDICATOR\_PARAM

```
public static final String[] SS_NULL_VALUE_NO_INDICATOR_PARAM
```


        - #### SS\_NUMERIC\_VALUE\_OUT\_OF\_RANGE

```
public static final String[] SS_NUMERIC_VALUE_OUT_OF_RANGE
```


        - #### SS\_ERROR\_IN\_ASSIGNMENT

```
public static final String[] SS_ERROR_IN_ASSIGNMENT
```


        - #### SS\_INVALID\_DATE\_TIME\_FORMAT

```
public static final String[] SS_INVALID_DATE_TIME_FORMAT
```


        - #### SS\_DATE\_TIME\_FIELD\_OVERFLOW

```
public static final String[] SS_DATE_TIME_FIELD_OVERFLOW
```


        - #### SS\_INVALID\_TIME\_ZONE\_DISPLACEMENT\_VALUE

```
public static final String[] SS_INVALID_TIME_ZONE_DISPLACEMENT_VALUE
```


        - #### SS\_SUBSTRING\_ERROR

```
public static final String[] SS_SUBSTRING_ERROR
```


        - #### SS\_DIVISION\_BY\_ZERO

```
public static final String[] SS_DIVISION_BY_ZERO
```


        - #### SS\_INTERVAL\_FIELD\_OVERFLOW

```
public static final String[] SS_INTERVAL_FIELD_OVERFLOW
```


        - #### SS\_INVALID\_CHAR\_VALUE\_FOR\_CAST

```
public static final String[] SS_INVALID_CHAR_VALUE_FOR_CAST
```


        - #### SS\_INVALID\_ESCAPE\_CHAR

```
public static final String[] SS_INVALID_ESCAPE_CHAR
```


        - #### SS\_CHARACTER\_NOT\_IN\_REPERTOIRE

```
public static final String[] SS_CHARACTER_NOT_IN_REPERTOIRE
```


        - #### SS\_INDICATOR\_OVERFLOW

```
public static final String[] SS_INDICATOR_OVERFLOW
```


        - #### SS\_INVALID\_PARAMETER\_VALUE

```
public static final String[] SS_INVALID_PARAMETER_VALUE
```


        - #### SS\_UNTERMINATED\_C\_STRING

```
public static final String[] SS_UNTERMINATED_C_STRING
```


        - #### SS\_INVALID\_ESCAPE\_SEQUENCE

```
public static final String[] SS_INVALID_ESCAPE_SEQUENCE
```


        - #### SS\_STRING\_DATA\_LENGTH\_MISMATCH

```
public static final String[] SS_STRING_DATA_LENGTH_MISMATCH
```


        - #### SS\_TRIM\_ERROR

```
public static final String[] SS_TRIM_ERROR
```


        - #### SS\_INTEGRITY\_CONSTRAINT

```
public static final String[] SS_INTEGRITY_CONSTRAINT
```


        - #### SS\_INVALID\_CURSOR\_STATE

```
public static final String[] SS_INVALID_CURSOR_STATE
```


        - #### SS\_INVALID\_TRANSACTION\_STATE

```
public static final String[] SS_INVALID_TRANSACTION_STATE
```


        - #### SS\_SQL\_STATEMENT\_NAME

```
public static final String[] SS_SQL_STATEMENT_NAME
```


        - #### SS\_TRIGGERED\_DATA\_CHANGE\_VIOLATION

```
public static final String[] SS_TRIGGERED_DATA_CHANGE_VIOLATION
```


        - #### SS\_INVALID\_AUTH\_SPEC

```
public static final String[] SS_INVALID_AUTH_SPEC
```


        - #### SS\_SQL\_SYNTAX\_OR\_ACCESS\_VIOLATION

```
public static final String[] SS_SQL_SYNTAX_OR_ACCESS_VIOLATION
```


        - #### SS\_SYSTEM\_ERRORS

```
public static final String[] SS_SYSTEM_ERRORS
```


    - ### Constructor Detail

        - #### SQLState

```
public SQLState()
```


    - ### Method Detail

        - #### getErrorString

```
public static String[] getErrorString(String errorcode)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_SQLState)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")
- Next Class


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_SQLState)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_SQLState)


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
