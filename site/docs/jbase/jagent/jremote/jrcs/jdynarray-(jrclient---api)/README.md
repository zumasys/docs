# JDynArray (jrclient   API)

**Created At:** 9/20/2017 7:58:52 PM  
**Updated At:** 9/20/2018 12:54:09 PM  
**Original Doc:** [com_jbase_jrcs_jdynarray](https://docs.jbase.com/jrcs/com_jbase_jrcs_jdynarray)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JDynArray (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10,"i35":10,"i36":10,"i37":10,"i38":10,"i39":10,"i40":10,"i41":10,"i42":10,"i43":10,"i44":10,"i45":10,"i46":10,"i47":10,"i48":10,"i49":10,"i50":10,"i51":10,"i52":10,"i53":10,"i54":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JDynArray

**All Implemented Interfaces:**
[Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io"), [Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), [Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang")
```
public final class JDynArray
extends Object
implements Cloneable, Externalizable
```

Represents a jBASE dynamic arraySee Also:[Serialized Form](./../serialized-form)

# 


# Constructor Summary


| <br>Constructor<br> | <br>Description<br> |
| --- | --- |
| <br>JDynArray()<br> | <br>Default constructor<br> |
| <br>JDynArray(JDynArray src)<br> | <br>Constructs a dynamic array from another dynamic array<br> |
| <br>JDynArray(String src)<br> | <br>Constructs a dynamic array from a string<br> |








# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | <br>and Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>assign(JDynArray src)<br> | <br>Assigns the value of a dynamic array to this dynamic array<br> |
| <br>void<br> | <br>assign(String src)<br> | <br>Assigns a string value to this dynamic array<br> |
| <br>char<br> | <br>charAt(int index)<br> | <br>Gets a character at a given position in the dynamic array<br> |
| <br>Object<br> | <br>clone()<br> | <br><br> |
| <br>int<br> | <br>count(char delim)<br> | <br>Counts the number of given characters in this dynamic array<br> |
| <br>int<br> | <br>count(String delim)<br> | <br>Counts the number of given delimiters in this dynamic array<br> |
| <br>int<br> | <br>dcount(char delim)<br> | <br>Counts the number of fields separated by the given character<br> |
| <br>int<br> | <br>dcount(String delim)<br> | <br>Counts the number of fields separated by the given delimiter<br> |
| <br>void<br> | <br>delete(int amc)<br> | <br>Deletes the specified attribute<br> |
| <br>void<br> | <br>delete(int amc, int vmc)<br> | <br>Deletes the specified attribute or value<br> |
| <br>void<br> | <br>delete(int amc, int vmc, int svmc)<br> | <br>Deletes the specified attribute, value or sub-value<br> |
| <br>String<br> | <br>extract(int amc)<br> | <br>Extracts the specified attribute as a string<br> |
| <br>String<br> | <br>extract(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a string<br> |
| <br>String<br> | <br>extract(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a string<br> |
| <br>JDynArray<br> | <br>extractDA(int amc)<br> | <br>Extracts the specified attribute as a dynamic array<br> |
| <br>JDynArray<br> | <br>extractDA(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a dynamic array<br> |
| <br>JDynArray<br> | <br>extractDA(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a dynamic array<br> |
| <br>String<br> | <br>field(char delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter character<br> |
| <br>String<br> | <br>field(String delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter string<br> |
| <br>String<br> | <br>getString()<br> | <br>Retrieves the content of the dynamic array as a string<br> |
| <br>void<br> | <br>insert(JDynArray data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute<br> |
| <br>void<br> | <br>insert(JDynArray data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value<br> |
| <br>void<br> | <br>insert(JDynArray data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value<br> |
| <br>void<br> | <br>insert(String data, int amc)<br> | <br>Inserts string data into the specified attribute<br> |
| <br>void<br> | <br>insert(String data, int amc, int vmc)<br> | <br>Inserts string data into the specified attribute or value<br> |
| <br>void<br> | <br>insert(String data, int amc, int vmc, int svmc)<br> | <br>Inserts string data into the specified attribute, value or sub-value<br> |
| <br>void<br> | <br>insertDA(JDynArray data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| <br>void<br> | <br>insertDA(JDynArray data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| <br>void<br> | <br>insertDA(JDynArray data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| <br>int<br> | <br>length()<br> | <br>Returns the length, in characters, of a dynamic array<br> |
| <br>int<br> | <br>locate(String searchStr)<br> | <br>Searches for a string in all attributes of the dynamic array<br> |
| <br>int<br> | <br>locate(String searchStr, int amc, int vmc, String order)<br> | <br>Searches for a string in all sub-values within a given value of the dynamic array.<br> |
| <br>int<br> | <br>locate(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to locate(String, int, int, String), but allows for a start position<br> |
| <br>int<br> | <br>locate(String searchStr, int amc, String order)<br> | <br>Searches for a string in all values within a given attribute of the dynamic array.<br> |
| <br>int<br> | <br>locate(String searchStr, int amc, String order, int start)<br> | <br>Similar to locate(String, int, String), but allows for a start position<br> |
| <br>int<br> | <br>locate(String searchStr, String order)<br> | <br>Searches for a string in all attributes of the dynamic array, which is in a given sort order<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr)<br> | <br>Similar to locate(String), but performs a case-insensitive comparison<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr, int amc, int vmc, String order)<br> | <br>Similar to locate(String, int, int, String), but performs a case-insensitive comparison<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to locate(String, int, int, String, int), but performs a case-insensitive comparison<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr, int amc, String order)<br> | <br>Similar to locate(String, int, String), but performs a case-insensitive comparison<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr, int amc, String order, int start)<br> | <br>Similar to locate(String, int, String, int), but performs a case-insensitive comparison<br> |
| <br>int<br> | <br>locateIgnoreCase(String searchStr, String order)<br> | <br>Similar to locate(String, String), but performs a case-insensitive comparison<br> |
| <br>void<br> | <br>readExternal(ObjectInput in)<br> | <br><br> |
| <br>void<br> | <br>replace(JDynArray data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array<br> |
| <br>void<br> | <br>replace(JDynArray data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array<br> |
| <br>void<br> | <br>replace(JDynArray data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array<br> |
| <br>void<br> | <br>replace(String data, int amc)<br> | <br>Replaces the given attribute with specified string<br> |
| <br>void<br> | <br>replace(String data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with specified string<br> |
| <br>void<br> | <br>replace(String data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with specified string<br> |
| <br>void<br> | <br>replaceDA(JDynArray data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc)<br> |
| <br>void<br> | <br>replaceDA(JDynArray data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc)<br> |
| <br>void<br> | <br>replaceDA(JDynArray data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| <br>void<br> | <br>setCharAt(int index, char newChar)<br> | <br>Sets a character at a given location in the dynamic array<br> |
| <br>String<br> | <br>toString()<br> | <br><br> |
| <br>void<br> | <br>writeExternal(ObjectOutput out)<br> | <br><br> |




### 




## Methods inherited from class java.lang.Object
`equals, finalize, getClass, hashCode, notify, notifyAll, wait`

# Constructor Detail

#### JDynArray 

```
public JDynArray() 
```

throws [JException](/jrcs/com_jbase_jrcs_JException "class in com.jbase.jrcs")

Default constructor

Throws: [JException](/jrcs/com_jbase_jrcs_JException "class in com.jbase.jrcs")

#### JDynArray 

```
public JDynArray(String src)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Constructs a dynamic array from a string

Parameters: src - Source string

Throws:[JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### jDynArray 

```
public JDynArray(JDynnArray src) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Constructs a dynamic array from another dynamic array

Parameters: src - Source dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 
            

# Method Detail

#### assign

```
public void assign(JDynArray src)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Assigns the value of a dynamic array to this dynamic array

Parameters:  src - Source dynamic array

Throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")







#### ASSIGN  

```
public void assign(String src)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Assigns a string value to this dynamic array

Parameters: src - Source string

Throws:[JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### COUNT 

```
public int count(char delim) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Counts the number of given characters in this dynamic array

Parameters: delim - Delimiter char

Returns: Delimiter count

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### COUNT 

```
public int count(String delim)   
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Counts the number of given delimiters in this dynamic array

Parameters: delim - Delimiter string

Returns: Delimiter count

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### 


#### DCOUNT

```
public int dcount(char delim)           
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Counts the number of fields separated by the given character

Parameters: delim - Delimiter char

Returns: Field count
Throws:[JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")


#### 


#### DCOUNT

```
public int dcount(String delim)    
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Counts the number of fields separated by the given delimiter

Parameters: delim - Delimiter string

Returns: Field count
Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")






#### DELETE 

```
public void delete(int amc, int vmc, int svmc)        
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Deletes the specified attribute, value or sub-value

#### DELETE  

```
public void delete(int amc, int vmc) 
```

throws[JException](./../jexception-%28jrclient-api%29)

Deletes the specified attribute or value

Parameters:

amc - Attribute

vmc - Value This parameter can be 0

Throws: [JException](./../jexception-%28jrclient-api%29)

####       DELETE 

```
public void delete(int amc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Deletes the specified attribute

Parameters:

amc - Attribute

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





####         EXTRACTDA 

```
public JDynArray extractDA(int amc, int vmc, int svmc)
```

throws [JException](./../jexception-%28jrclient-api%29)

Extracts the specified attribute, value or sub-value as a dynamic array

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Returns: jDynArray containing the data extracted

Throws: [JException](./../jexception-%28jrclient-api%29)





#### EXTRACTDA 

```
public JDynArray extractDA(int amc, int vmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified attribute or value as a dynamic array

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

Returns:  JDynArray containing the data extracted

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





####       EXTRACTDA 

```
public JDynArray extractDA(int amc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified attribute as a dynamic array

Parameters:

amc - Attribute

Returns: JDynArray containing the data extracted

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")







####        extract

```
public String extract(int amc, int vmc, int svmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified attribute, value or sub-value as a string

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Returns: Extracted data

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 


#### 


####         extract

public String extract(int amc, int vmc)

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified attribute or value as a string

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

Returns: Extracted Data

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### extract

```
public String extract(int amc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified attribute as a string

Parameters:

amc - Attribute

Retruns: Extracted data

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### Field

```
public String field(char delim, int fieldNo) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified field separated by the given delimiter character

Parameters:

delim - Delimiter

fieldNo - Field number to extract Returns: Field value

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### 
FIELD

```
public String field(String delim, int fieldNo) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Extracts the specified field separated by the given delimiter string

Parameters:

delim - Delimiter

fieldNo - Field number to extract

Returns: Field value

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### INSERTDATA 

```
public void insertDA(JDynArray data, int amc, int vmc, int svmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute, value or sub-value. Same as insert(JDynArray, int, iint)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also:  insert([JDynArray](../../../com/jbase/jrcs//jrcs/com_jbase_jrcs_JDynArray "class in com.jbase.jrcs"), int, int, int)





#### INSERTDA

```
public void insertDA(JDynArray data,   int amc, int vmc)        
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute or value. Same as insert(JDynArray, int, int)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also:  insert(JDynArray, int, int)



#### insertDA

```
public void insertDA(JDynArray data,int amc)   
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute. Same as insert(JDynArray, int)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also:  insert(JDynArray, int)





#### INSERT

```
public void insert(JDynArray data,int amc, int vmc, int svmc)            
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute, value or sub-value

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### insert          

```
public void insert(JDynArray data, int amc, int vmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute or value

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 


#### 


#### INSERT 

```
public void insert(JDynArray data, int amc)             
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 


#### 


#### insert

```
public void insert(String data, int amc, int vmc, int svmc)     
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts string data into the specified attribute, value or sub-value

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### INSERT 

```
public void insert(String data, int amc, int vmc)          
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts string data into the specified attribute or value

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 


#### INSERT 

```
public void insert(String data,  int amc)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Inserts string data into the specified attribute

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### length

```
public int length()          
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Returns the length, in characters, of a dynamic array

Returns: Length of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replaceDA

```
public void replaceDA(JDynArray data, int amc, int vmc, int svmc)    
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with the content of specified dynamic array.

Same as: replace(JDynArray, int, int, int).

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also: replace(JDynArray, int, int, int)





#### replaceDA

```
public void replaceDA(JDynArray data, int amc, int vmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc)

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also: replace(JDynArray, int, int)





#### replaceDA

```
public void replaceDA(JDynArray data, int amc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc)

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

See Also: replace(JDynArray, int)





#### replace

```
public void replace(JDynArray data, int amc, int vmc, int svmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replace

```
public void replace(JDynArray data, int amc, int vmc)       
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute or value with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replace

```
public void replace(JDynArray data, int amc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replace

```
public void replace(String data, int amc, int vmc, int svmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replace

```
public void replace(String data, int amc, int vmc) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute or value with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### replace

```
public void replace(String data, int amc)            
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Replaces the given attribute with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### getString

```
public String getString()                 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Retrieves the content of the dynamic array as a string

Returns: Dynamic array content

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### toString

```
public String toString()
```

Overides :  [toString](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")





#### charAt

```
public char charAt(int index) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Gets a character at a given position in the dynamic array

Parameters:  index - Character index

Returns:  Character at the given position in the dynamic array

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

#### 


#### 


#### setCharAt

```
public void setCharAt(int index, char newChar)              
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Sets a character at a given location in the dynamic array

Parameters:

index - Position of the character

newChar - Character to set

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### locate

```
public int locate(String searchStr)          
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Searches for a string in all attributes of the dynamic array

Parameters:   searchStr - String to look for

Returns:  Positive index of matching attribute or -1 if string is not found.

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### locate

```
public int locate(String searchStr, String order)           
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Searches for a string in all attributes of the dynamic array, which is in a given sort order

Parameters:

searchStr - String to look for

order - Order of the array, interpreted as follows:


| <br>"AL"<br> | <br>ascending, left-justified<br> |
| <br>"AR"<br> | <br>ascending, right-justified<br> |
| <br>"AN"<br> | <br>ascending, numeric<br> |
| <br>"DL"<br> | <br>descending, left-justified<br> |
| <br>"DR"<br> | <br>descending, right-justified<br> |
| <br>"DN"<br> | <br>descending, numeric<br> |
| <br>""<br> | <br>no order<br> |


Returns: Positive index of matching attribute or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.
Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")


#### locate

```
public int locate(String searchStr, int amc, String order)            
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Searches for a string in all values within a given attribute of the dynamic array. The values are in the specified sort order.

Parameters:

searchStr - String to look for

amc - Attribute number

order - Order of values, interpreted as follows:


| <br>"AL"<br> | <br>ascending, left-justified<br> |
| <br>"AR"<br> | <br>ascending, right-justified<br> |
| <br>"AN"<br> | <br>ascending, numeric<br> |
| <br>"DL"<br> | <br>descending, left-justified<br> |
| <br>"DR"<br> | <br>descending, right-justified<br> |
| <br>"DN"<br> | <br>descending, numeric<br> |
| <br>""<br> | <br>no order<br> |


Returns: Positive index of matching value or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### locate

```
public int locate(String searchStr,  int amc, int vmc, String order) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Searches for a string in all sub-values within a given value of the dynamic array. The sub-values are in the specified sort order.

Parameters:

searchStr - String to look for

amc - Attribute number

vmc - Value number

order - Order of values, interpreted as follows:


| <br>"AL"<br> | <br>ascending, left-justified<br> |
| <br>"AR"<br> | <br>ascending, right-justified<br> |
| <br>"AN"<br> | <br>ascending, numeric<br> |
| <br>"DL"<br> | <br>descending, left-justified<br> |
| <br>"DR"<br> | <br>descending, right-justified<br> |
| <br>"DN"<br> | <br>descending, numeric<br> |
| <br>""<br> | <br>no order<br> |


Returns:  Positive index of matching sub-value or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")





#### locate

```
public int locate(String searchStr, int amc, String order, int start) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, String), but allows for a start position

Parameters:

start - Start position of the search

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locate

```
public int locate(String searchStr, int amc, int vmc, String order, int start)   
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String), but allows for a start position

Parameters:  start - Start position of the search

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")




#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr)        
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr, String order)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr, int amc, String order) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr, int amc, int vmc, String order)  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr, int amc, String order, int start) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, String, int), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### locateIgnoreCase

```
public int locateIgnoreCase(String searchStr, int amc, int vmc, String order, int start) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String, int), but performs a case-insensitive comparison

Throws: [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")



#### clone

```
public Object clone()
```

Overides: [clone](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#clone-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")





#### readExternal

```
public void readExternal(ObjectInput in) 
```

throws [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io"), [ClassNotFoundException](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true "class or interface in java.lang")

Specified by: readExternal in interface [Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io")

Throws: [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io"), [ClassNotFoundException](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true "class or interface in java.lang")





#### writeExternal

```
public void writeExternal(ObjectOutput out)                    
```

throws [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io")

Specified by: writeExternal in interface [Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io")

Throws:  [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io")


