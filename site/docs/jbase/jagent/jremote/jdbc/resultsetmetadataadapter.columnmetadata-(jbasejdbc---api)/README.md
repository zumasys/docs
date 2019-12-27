# ResultSetMetaDataAdapter.ColumnMetaData (jbasejdbc   API)

**Created At:** 9/25/2017 11:05:48 AM  
**Updated At:** 2/15/2018 8:02:44 AM  
**Original Doc:** [com_jbase_jdbc_ResultSetMetaDataAdapter.ColumnMetaData](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_ResultSetMetaDataAdapter.ColumnMetaData)  
**Original ID:** 278014  
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

- [Prev Class](./../resultsetmetadataadapter-%28jbasejdbc---api%29 "class in com.jbase.jdbc")
- Next Class


- [Frames](./../resultsetmetadataadapter-%28jbasejdbc---api%29)
- [No Frames](./../resultsetmetadataadapter-%28jbasejdbc---api%29)


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

## Class ResultSetMetaDataAdapter.ColumnMetaData

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.ResultSetMetaDataAdapter.ColumnMetaData


- Enclosing class:[ResultSetMetaDataAdapter](./../resultsetmetadataadapter-%28jbasejdbc---api%29 "class in com.jbase.jdbc")
* * *


```
public class ResultSetMetaDataAdapter.ColumnMetaData
extends Object
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ColumnMetaData(String tableName,<br>              String columnName,<br>              int jbaseDataType,<br>              int scale,<br>              int precision)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getColumnName()`  |
| `int` | `getJBaseDataType()`  |
| `int` | `getPrecision()`  |
| `int` | `getScale()`  |
| `String` | `getTableName()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ColumnMetaData

```
public ColumnMetaData(String tableName,
                      String columnName,
                      int jbaseDataType,
                      int scale,
                      int precision)
```


    - ### Method Detail

        - #### getTableName

```
public String getTableName()
```


        - #### getColumnName

```
public String getColumnName()
```


        - #### getJBaseDataType

```
public int getJBaseDataType()
```


        - #### getScale

```
public int getScale()
```


        - #### getPrecision

```
public int getPrecision()
```

Skip navigation links

- [Overview](../../../overview-summary.html)
- [Package](./../jbase-jdbc-api)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.resultsetmetadataadapter-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../deprecated-list.html)
- [Help](../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../resultsetmetadataadapter-%28jbasejdbc---api%29 "class in com.jbase.jdbc")
- Next Class


- [Frames](./../resultsetmetadataadapter-%28jbasejdbc---api%29)
- [No Frames](./../resultsetmetadataadapter-%28jbasejdbc---api%29)


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
