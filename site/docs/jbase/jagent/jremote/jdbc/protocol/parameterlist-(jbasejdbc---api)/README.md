# ParameterList (jbasejdbc   API)

**Created At:** 9/25/2017 11:03:05 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_ParameterList](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_ParameterList)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ParameterList (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_ParameterList)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_ParameterList)


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

com.jbase.jdbc.protocol

## Class ParameterList

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.protocol.ParameterList


- All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"), [JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
* * *


```
public class ParameterList
extends Object
implements JBaseJDBCGlobals, JBaseSerializable
```

ParameterList represents list of parameters to be bound to<br> a PreparedStatement or CallableStatement.<br><br> The number of parameters hold by ParameterList must be determined when it's created<br> and cannot change (this is what we need in PreparedStatement & CallableStatement).
Author:Peter Kuchta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`JBaseJDBCGlobals.TYPES`


        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary

        - ### Fields inherited from interface com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc")
`AM, CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM, SM, VM`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ParameterList()`  |
| `ParameterList(int n)`<br>Constructor.<br> |
| `ParameterList(ParameterList pl)`<br>Constructor.<br> |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `allBound()`  |
| `void` | `clear()`<br>Clear the parameter list.<br> |
| `void` | `copyFrom(ParameterList other)`  |
| `int` | `count()`  |
| `Object` | `get(int i)`  |
| `int` | `getType()`<br>Implementation of JBaseSerializable.<br> |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`<br>Not implemented yet (currently ParameterList is only being sent from the client to the server).<br> |
| `void` | `setBigDecimal(int parameterIndex,<br>             BigDecimal x)`  |
| `void` | `setBlob(int parameterIndex,<br>       Blob x)`  |
| `void` | `setBoolean(int parameterIndex,<br>          boolean x)`  |
| `void` | `setByte(int parameterIndex,<br>       byte x)`  |
| `void` | `setBytes(int parameterIndex,<br>        byte[] x)`  |
| `void` | `setDate(int parameterIndex,<br>       Date x)`  |
| `void` | `setDate(int parameterIndex,<br>       Date x,<br>       Calendar cal)`  |
| `void` | `setDouble(int parameterIndex,<br>         double x)`  |
| `void` | `setFloat(int parameterIndex,<br>        float x)`  |
| `void` | `setInt(int parameterIndex,<br>      int x)`  |
| `void` | `setLong(int parameterIndex,<br>       long x)`  |
| `void` | `setNull(int parameterIndex,<br>       int sqlType)`  |
| `void` | `setNull(int parameterIndex,<br>       int sqlType,<br>       String typeName)`<br>Sets the parameter number parameterIndex to NULL of sqlType type and typeName name.<br> |
| `void` | `setObject(int parameterIndex,<br>         Object x)`  |
| `void` | `setObject(int parameterIndex,<br>         Object x,<br>         int targetSqlType,<br>         int scale)`  |
| `void` | `setParametersType(int parameterIndex,<br>                 int sqlType)`  |
| `void` | `setRegisterAsOutParameter(int parameterIndex,<br>                         boolean b)`  |
| `void` | `setScale(int parameterIndex,<br>        int scale)`  |
| `void` | `setShort(int parameterIndex,<br>        short x)`  |
| `void` | `setString(int parameterIndex,<br>         String x)`<br>This and following methods gets called from<br> equivalent methods in @see JBaseJDBCPreparedStatement<br> |
| `void` | `setTime(int parameterIndex,<br>       Time x,<br>       Calendar cal)`  |
| `void` | `setTimestamp(int parameterIndex,<br>            Timestamp x,<br>            Calendar cal)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`<br>Implementation of JBaseSerializable.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ParameterList

```
public ParameterList()
```


        - #### ParameterList

```
public ParameterList(int n)
```

Constructor.
Parameters:`n` - How many parameters the list will hold.


        - #### ParameterList

```
public ParameterList(ParameterList pl)
```

Constructor. Creates a copy of the given ParameterList.
Parameters:`pl` - ParameterList to be copied


    - ### Method Detail

        - #### getType

```
public int getType()
```

Implementation of JBaseSerializable.
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization


        - #### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`


        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Implementation of JBaseSerializable.
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Not implemented yet (currently ParameterList is only being sent from the client to the server).
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`


        - #### count

```
public int count()
```
Returns:numer of parameters kept in this ParameterList.


        - #### get

```
public Object get(int i)
```


        - #### allBound

```
public boolean allBound()
```
Returns:true if all parameters have been bound, false otherwise.


        - #### clear

```
public void clear()
```

Clear the parameter list. After calling this method all parameters will be unbound.


        - #### setString

```
public void setString(int parameterIndex,
                      String x)
               throws SQLException
```

This and following methods gets called from<br> equivalent methods in @see JBaseJDBCPreparedStatement
Throws:`SQLException`


        - #### setNull

```
public void setNull(int parameterIndex,
                    int sqlType,
                    String typeName)
             throws SQLException
```

Sets the parameter number parameterIndex to NULL of sqlType type and typeName name.<br><br> FIXME: the type codes (sqlType) we use, adopted from jDP, are different<br> then standard JDBC ones.
Throws:`SQLException`


        - #### setObject

```
public void setObject(int parameterIndex,
                      Object x)
               throws SQLException
```
Throws:`SQLException`


        - #### setBlob

```
public void setBlob(int parameterIndex,
                    Blob x)
             throws SQLException
```
Throws:`SQLException`


        - #### setByte

```
public void setByte(int parameterIndex,
                    byte x)
             throws SQLException
```
Throws:`SQLException`


        - #### setDouble

```
public void setDouble(int parameterIndex,
                      double x)
               throws SQLException
```
Throws:`SQLException`


        - #### setFloat

```
public void setFloat(int parameterIndex,
                     float x)
              throws SQLException
```
Throws:`SQLException`


        - #### setInt

```
public void setInt(int parameterIndex,
                   int x)
            throws SQLException
```
Throws:`SQLException`


        - #### setNull

```
public void setNull(int parameterIndex,
                    int sqlType)
             throws SQLException
```
Throws:`SQLException`


        - #### setLong

```
public void setLong(int parameterIndex,
                    long x)
             throws SQLException
```
Throws:`SQLException`


        - #### setShort

```
public void setShort(int parameterIndex,
                     short x)
              throws SQLException
```
Throws:`SQLException`


        - #### setBoolean

```
public void setBoolean(int parameterIndex,
                       boolean x)
                throws SQLException
```
Throws:`SQLException`


        - #### setDate

```
public void setDate(int parameterIndex,
                    Date x,
                    Calendar cal)
             throws SQLException
```
Throws:`SQLException`


        - #### setTime

```
public void setTime(int parameterIndex,
                    Time x,
                    Calendar cal)
             throws SQLException
```
Throws:`SQLException`


        - #### setTimestamp

```
public void setTimestamp(int parameterIndex,
                         Timestamp x,
                         Calendar cal)
                  throws SQLException
```
Throws:`SQLException`


        - #### setDate

```
public void setDate(int parameterIndex,
                    Date x)
             throws SQLException
```
Throws:`SQLException`


        - #### setBytes

```
public void setBytes(int parameterIndex,
                     byte[] x)
              throws SQLException
```
Throws:`SQLException`


        - #### setObject

```
public void setObject(int parameterIndex,
                      Object x,
                      int targetSqlType,
                      int scale)
               throws SQLException
```
Throws:`SQLException`


        - #### setBigDecimal

```
public void setBigDecimal(int parameterIndex,
                          BigDecimal x)
                   throws SQLException
```
Throws:`SQLException`


        - #### setParametersType

```
public void setParametersType(int parameterIndex,
                              int sqlType)
```


        - #### setScale

```
public void setScale(int parameterIndex,
                     int scale)
```


        - #### setRegisterAsOutParameter

```
public void setRegisterAsOutParameter(int parameterIndex,
                                      boolean b)
```


        - #### copyFrom

```
public void copyFrom(ParameterList other)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_ParameterList)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_ParameterList)


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
