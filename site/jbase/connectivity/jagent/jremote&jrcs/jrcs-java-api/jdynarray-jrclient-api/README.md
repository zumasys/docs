# JDynArray (jrclient   API)

<PageHeader />

## Class JDynArray

**All Implemented Interfaces:**

[Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io"), [Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), [Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang")

``` java
public final class JDynArray
extends Object
implements Cloneable, Externalizable
```

Represents a jBASE dynamic array  

See Also : [Serialized Form](./../serialized-form)

## Constructor Summary

| Constructor | Description |
| --- | --- |
| JDynArray() | Default constructor |
| JDynArray(JDynArray src) | Constructs a dynamic array from another dynamic array |
| JDynArray(String src) | Constructs a dynamic array from a string |

## Method Summary

| Modifier and Type | Method | and Description |
| --- | --- | --- |
| void | assign(JDynArray src) | Assigns the value of a dynamic array to this dynamic array |
| void | assign(String src) | Assigns a string value to this dynamic array |
| char | charAt(int index) | Gets a character at a given position in the dynamic array |
| Object | clone() |  |
| int | count(char delim) | Counts the number of given characters in this dynamic array |
| int | count(String delim) | Counts the number of given delimiters in this dynamic array |
| int | dcount(char delim) | Counts the number of fields separated by the given character |
| int | dcount(String delim) | Counts the number of fields separated by the given delimiter |
| void | delete(int amc) | Deletes the specified attribute |
| void | delete(int amc, int vmc) | Deletes the specified attribute or value |
| void | delete(int amc, int vmc, int svmc) | Deletes the specified attribute, value or sub-value |
| String | extract(int amc) | Extracts the specified attribute as a string |
| String | extract(int amc, int vmc) | Extracts the specified attribute or value as a string |
| String | extract(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a string |
| JDynArray | extractDA(int amc) | Extracts the specified attribute as a dynamic array |
| JDynArray | extractDA(int amc, int vmc) | Extracts the specified attribute or value as a dynamic array |
| JDynArray | extractDA(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a dynamic array |
| String | field(char delim, int fieldNo) | Extracts the specified field separated by the given delimiter character |
| String | field(String delim, int fieldNo) | Extracts the specified field separated by the given delimiter string |
| String | getString() | Retrieves the content of the dynamic array as a string |
| void | insert(JDynArray data, int amc) | Inserts data from the given dynamic array into the specified attribute |
| void | insert(JDynArray data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value |
| void | insert(JDynArray data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value |
| void | insert(String data, int amc) | Inserts string data into the specified attribute |
| void | insert(String data, int amc, int vmc) | Inserts string data into the specified attribute or value |
| void | insert(String data, int amc, int vmc, int svmc) | Inserts string data into the specified attribute, value or sub-value |
| void | insertDA(JDynArray data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | insertDA(JDynArray data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | insertDA(JDynArray data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| int | length() | Returns the length, in characters, of a dynamic array |
| int | locate(String searchStr) | Searches for a string in all attributes of the dynamic array |
| int | locate(String searchStr, int amc, int vmc, String order) | Searches for a string in all sub-values within a given value of the dynamic array. |
| int | locate(String searchStr, int amc, int vmc, String order, int start) | Similar to locate(String, int, int, String), but allows for a start position |
| int | locate(String searchStr, int amc, String order) | Searches for a string in all values within a given attribute of the dynamic array. |
| int | locate(String searchStr, int amc, String order, int start) | Similar to locate(String, int, String), but allows for a start position |
| int | locate(String searchStr, String order) | Searches for a string in all attributes of the dynamic array, which is in a given sort order |
| int | locateIgnoreCase(String searchStr) | Similar to locate(String), but performs a case-insensitive comparison |
| int | locateIgnoreCase(String searchStr, int amc, int vmc, String order) | Similar to locate(String, int, int, String), but performs a case-insensitive comparison |
| int | locateIgnoreCase(String searchStr, int amc, int vmc, String order, int start) | Similar to locate(String, int, int, String, int), but performs a case-insensitive comparison |
| int | locateIgnoreCase(String searchStr, int amc, String order) | Similar to locate(String, int, String), but performs a case-insensitive comparison |
| int | locateIgnoreCase(String searchStr, int amc, String order, int start) | Similar to locate(String, int, String, int), but performs a case-insensitive comparison |
| int | locateIgnoreCase(String searchStr, String order) | Similar to locate(String, String), but performs a case-insensitive comparison |
| void | readExternal(ObjectInput in) |  |
| void | replace(JDynArray data, int amc) | Replaces the given attribute with the content of specified dynamic array |
| void | replace(JDynArray data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array |
| void | replace(JDynArray data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array |
| void | replace(String data, int amc) | Replaces the given attribute with specified string |
| void | replace(String data, int amc, int vmc) | Replaces the given attribute or value with specified string |
| void | replace(String data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with specified string |
| void | replaceDA(JDynArray data, int amc) | Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc) |
| void | replaceDA(JDynArray data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc) |
| void | replaceDA(JDynArray data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | setCharAt(int index, char newChar) | Sets a character at a given location in the dynamic array |
| String | toString() |  |
| void | writeExternal(ObjectOutput out) |  |

## Methods inherited from class java.lang.Object

`equals, finalize, getClass, hashCode, notify, notifyAll, wait`

### Constructor Detail

#### JDynArray #1

``` java
public JDynArray()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Default constructor

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### JDynArray #2

``` java
public JDynArray(String src)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Constructs a dynamic array from a string

Parameters: src - Source string

Throws:[JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### jDynArray #3

``` java
public JDynArray(JDynnArray src)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Constructs a dynamic array from another dynamic array

Parameters: src - Source dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

### Method Detail

#### assign #1

``` java
public void assign(JDynArray src)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Assigns the value of a dynamic array to this dynamic array

Parameters:  src - Source dynamic array

Throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### assign #2

``` java
public void assign(String src)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Assigns a string value to this dynamic array

Parameters: src - Source string

Throws:[JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### count #1

``` java
public int count(char delim)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Counts the number of given characters in this dynamic array

Parameters: delim - Delimiter char

Returns: Delimiter count

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### count #2

``` java
public int count(String delim)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Counts the number of given delimiters in this dynamic array

Parameters: delim - Delimiter string

Returns: Delimiter count

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### dcount #1

``` java
public int dcount(char delim)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Counts the number of fields separated by the given character

Parameters: delim - Delimiter char

Returns: Field count
Throws:[JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### dcount #2

``` java
public int dcount(String delim)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Counts the number of fields separated by the given delimiter

Parameters: delim - Delimiter string

Returns: Field count
Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### delete #1

``` java
public void delete(int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Deletes the specified attribute, value or sub-value

#### delete #2

``` java
public void delete(int amc, int vmc)
```

throws[JException](./../jexception-jrclient-api)

Deletes the specified attribute or value

Parameters:

amc - Attribute

vmc - Value This parameter can be 0

Throws: [JException](./../jexception-jrclient-api)

#### delete #3

``` java
public void delete(int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Deletes the specified attribute

Parameters:

amc - Attribute

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### extractDA #1

``` java
public JDynArray extractDA(int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api)

Extracts the specified attribute, value or sub-value as a dynamic array

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Returns: jDynArray containing the data extracted

Throws: [JException](./../jexception-jrclient-api)

#### extractDA #2

``` java
public JDynArray extractDA(int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified attribute or value as a dynamic array

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

Returns:  JDynArray containing the data extracted

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### extractDA #3

``` java
public JDynArray extractDA(int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified attribute as a dynamic array

Parameters:

amc - Attribute

Returns: JDynArray containing the data extracted

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### extract #1

``` java
public String extract(int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified attribute, value or sub-value as a string

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

svmc - Sub-value. This parameter can be 0

Returns: Extracted data

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### extract #2

``` java
public String extract(int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified attribute or value as a string

Parameters:

amc - Attribute

vmc - Value. This parameter can be 0

Returns: Extracted Data

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### extract #3

``` java
public String extract(int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified attribute as a string

Parameters:

amc - Attribute

Retruns: Extracted data

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### field #1

``` java
public String field(char delim, int fieldNo)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified field separated by the given delimiter character

Parameters:

delim - Delimiter

fieldNo - Field number to extract Returns: Field value

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### field #2

``` java
public String field(String delim, int fieldNo)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Extracts the specified field separated by the given delimiter string

Parameters:

delim - Delimiter

fieldNo - Field number to extract

Returns: Field value

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insertDA #1

``` java
public void insertDA(JDynArray data, int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute, value or sub-value. Same as insert(JDynArray, int, iint)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also:  insert([JDynArray](./. "class in com.jbase.jrcs"), int, int, int)

#### insertDA #2

``` java
public void insertDA(JDynArray data,   int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute or value. Same as insert(JDynArray, int, int)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also:  insert(JDynArray, int, int)

#### insertDA #3

``` java
public void insertDA(JDynArray data,int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute. Same as insert(JDynArray, int)

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also:  insert(JDynArray, int)

#### insert #1

``` java
public void insert(JDynArray data,int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute, value or sub-value

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insert #2

``` java
public void insert(JDynArray data, int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute or value

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insert #3

``` java
public void insert(JDynArray data, int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts data from the given dynamic array into the specified attribute

Parameters:

data - Dynamic array to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insert #4

``` java
public void insert(String data, int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts string data into the specified attribute, value or sub-value

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insert #5

``` java
public void insert(String data, int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts string data into the specified attribute or value

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to insert at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### insert #6

``` java
public void insert(String data,  int amc)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Inserts string data into the specified attribute

Parameters:

data - String to insert

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### length

``` java
public int length()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Returns the length, in characters, of a dynamic array

Returns: Length of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replaceDA #1

``` java
public void replaceDA(JDynArray data, int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with the content of specified dynamic array.

Same as: replace(JDynArray, int, int, int).

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also: replace(JDynArray, int, int, int)

#### replaceDA #2

``` java
public void replaceDA(JDynArray data, int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc)

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also: replace(JDynArray, int, int)

#### replaceDA #3

``` java
public void replaceDA(JDynArray data, int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc)

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

See Also: replace(JDynArray, int)

#### replace #1

``` java
public void replace(JDynArray data, int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replace #2

``` java
public void replace(JDynArray data, int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute or value with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replace #3

``` java
public void replace(JDynArray data, int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute with the content of specified dynamic array

Parameters:

data - Dynamic array used for replacement

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replace #4

``` java
public void replace(String data, int amc, int vmc, int svmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute, value or sub-value with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

svmc - Sub-value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replace #5

``` java
public void replace(String data, int amc, int vmc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute or value with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

vmc - Value. This parameter can be 0 or -1 to append the data at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### replace #6

``` java
public void replace(String data, int amc)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Replaces the given attribute with specified string

Parameters:

data - Replacement string

amc - Attribute. This parameter can be -1 to append data at the end of the dynamic array

Throws:  [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### getString

``` java
public String getString()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the content of the dynamic array as a string

Returns: Dynamic array content

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### toString

``` java
public String toString()
```

Overides :  [toString](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

#### charAt

``` java
public char charAt(int index)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Gets a character at a given position in the dynamic array

Parameters:  index - Character index

Returns:  Character at the given position in the dynamic array

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### setCharAt

``` java
public void setCharAt(int index, char newChar)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Sets a character at a given location in the dynamic array

Parameters:

index - Position of the character

newChar - Character to set

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #1

``` java
public int locate(String searchStr)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Searches for a string in all attributes of the dynamic array

Parameters:   searchStr - String to look for

Returns:  Positive index of matching attribute or -1 if string is not found.

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #2

``` java
public int locate(String searchStr, String order)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Searches for a string in all attributes of the dynamic array, which is in a given sort order

Parameters:

searchStr - String to look for

order - Order of the array, interpreted as follows:

| "AL" | ascending, left-justified |
| "AR" | ascending, right-justified |
| "AN" | ascending, numeric |
| "DL" | descending, left-justified |
| "DR" | descending, right-justified |
| "DN" | descending, numeric |
| "" | no order |

Returns: Positive index of matching attribute or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.
Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #3

``` java
public int locate(String searchStr, int amc, String order)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Searches for a string in all values within a given attribute of the dynamic array. The values are in the specified sort order.

Parameters:

searchStr - String to look for

amc - Attribute number

order - Order of values, interpreted as follows:

| "AL" | ascending, left-justified |
| "AR" | ascending, right-justified |
| "AN" | ascending, numeric |
| "DL" | descending, left-justified |
| "DR" | descending, right-justified |
| "DN" | descending, numeric |
| "" | no order |

Returns: Positive index of matching value or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #4

``` java
public int locate(String searchStr,  int amc, int vmc, String order)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Searches for a string in all sub-values within a given value of the dynamic array. The sub-values are in the specified sort order.

Parameters:

searchStr - String to look for

amc - Attribute number

vmc - Value number

order - Order of values, interpreted as follows:

| "AL" | ascending, left-justified |
| "AR" | ascending, right-justified |
| "AN" | ascending, numeric |
| "DL" | descending, left-justified |
| "DR" | descending, right-justified |
| "DN" | descending, numeric |
| "" | no order |

Returns:  Positive index of matching sub-value or negative index of insertion point if a match is not found. If order is specified as a blank string, the function always returns -1 to indicate that the string was not found.

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #5

``` java
public int locate(String searchStr, int amc, String order, int start)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, String), but allows for a start position

Parameters:

start - Start position of the search

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locate #6

``` java
public int locate(String searchStr, int amc, int vmc, String order, int start)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String), but allows for a start position

Parameters:  start - Start position of the search

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #1

``` java
public int locateIgnoreCase(String searchStr)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #2

``` java
public int locateIgnoreCase(String searchStr, String order)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #3

``` java
public int locateIgnoreCase(String searchStr, int amc, String order)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #4

``` java
public int locateIgnoreCase(String searchStr, int amc, int vmc, String order)  
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #5

``` java
public int locateIgnoreCase(String searchStr, int amc, String order, int start)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, String, int), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### locateIgnoreCase #6

``` java
public int locateIgnoreCase(String searchStr, int amc, int vmc, String order, int start)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Similar to: locate(String, int, int, String, int), but performs a case-insensitive comparison

Throws: [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

#### clone

``` java
public Object clone()
```

Overides: [clone](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#clone-- "class or interface in java.lang") in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")

#### readExternal

``` java
public void readExternal(ObjectInput in)
```

throws [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io"), [ClassNotFoundException](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true "class or interface in java.lang")

Specified by: readExternal in interface [Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io")

Throws: [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io"), [ClassNotFoundException](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true "class or interface in java.lang")

#### writeExternal

``` java
public void writeExternal(ObjectOutput out)
```

throws [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io")

Specified by: writeExternal in interface [Externalizable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Externalizable.html?is-external=true "class or interface in java.io")

Throws:  [IOException](http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true "class or interface in java.io")

Back to [jRCS java API](./../README.md)

  
<PageFooter />
