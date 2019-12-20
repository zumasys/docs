# ByteTools (jbasejdbc API)

**Created At:** 9/25/2017 10:43:22 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_bytetools](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_bytetools)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteTools (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":9,"i1":9,"i2":9,"i3":9};<br>var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your brow


# Class ByteTools

```
public class ByteTools
extends Object
```





# Field Summary


| <br>Modifier and Type<br> | <br>Field and Description<br> |
| --- | --- |
| <br>static short<br> | <br>MASK\_TO\_BYTE<br> |
| <br>static int<br> | <br>NUMBER\_OF\_BITS\_IN\_A\_BYTE<br> |
| <br>static int<br> | <br>SIZE\_OF\_AN\_INT\_IN\_BYTES<br> |






# 

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>ByteTools()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>static [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>dumpBytes(byte[] bs)<br> |
| <br>static byte[]<br> | <br>intToByteArray(int value)<br> |
| <br>static int<br> | <br>readInt(byte[] p\_src)<br> |
| <br>static void<br> | <br>writeInt(byte[] p\_dest, int p\_toWrite)<br> |




# 

# Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# 

# Field Detail

#### NUMBER\_OF\_BITS\_IN\_A\_BYTE

```
public static final int NUMBER_OF_BITS_IN_A_BYTE
```







#### **MASK\_TO\_BYTE**

```
public static final short MASK_TO_BYTE
```






#### **SIZE\_OF\_AN\_INT\_IN\_BYTES**

```
public static final int SIZE_OF_AN_INT_IN_BYTES
```






# Constructor Detail

#### **ByteTools**

```
public ByteTools()
```







# Method Detail

#### **writeInt**

```
public static void writeInt(byte[] p_dest,
                            int p_toWrite)
```





#### **intToByteArray**

```
public static final byte[] intToByteArray(int value)
```





#### **readInt**

```
public static int readInt(byte[] p_src)
```





#### **dumpBytes**

```
public static String dumpBytes(byte[] bs)
```


