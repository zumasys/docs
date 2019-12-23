# DefaultJConnectionFactory (jremote API)

**Created At:** 9/25/2017 11:40:30 AM  
**Updated At:** 12/24/2018 7:24:57 PM  
**Original Doc:** [com_jbase_jremote_defaultjconnectionfactory](https://docs.jbase.com/39248-jremote/com_jbase_jremote_defaultjconnectionfactory)  

&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


## Class DefaultJConnectionFactory

### 


**All Implemented Interfaces:**

[JConnectionFactory](./../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote")

* * *


```
public class DefaultJConnectionFactory
extends Object
implements JConnectionFactory
```

The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.

### Field Summary

### 

| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| static boolean<br> | DEFAULT\_ENABLE\_COMPRESSION <br> |
| static boolean<br> | DEFAULT\_ENABLE\_NAIVETRUSTMANAGER <br> |
| static boolean<br> | DEFAULT\_ENABLE\_SSL <br> |
| static int<br> | DEFAULT\_PORT <br> |
| static String<br> | JBASE\_PRODUCT\_JREMOTEJAVA <br> |




### 


### Constructor Summary

| Constructor and Description<br> |
| --- |
| `DefaultJConnectionFactory()` <br> |




### 


### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `disableCompression()` <br> |
| `void`<br> | `disableNaiveTrustManager()` <br> |
| `void`<br> | `disableSSL()` <br> |
| `void`<br> | `enableCompression()` <br> |
| `void`<br> | `enableNaiveTrustManager()` <br> |
| `void`<br> | `enableSSL()` <br> |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |
| `protected Properties`<br> | `getConnectionProperties()` <br> |
| `protected Properties`<br> | `getConnectionProperties(Properties props)` <br> |
| `String`<br> | `getHost()` <br> |
| `int`<br> | `getPort()` <br> |
| `boolean`<br> | `isEnabledCompression()` <br> |
| `boolean`<br> | `isEnabledNaiveTrustManager()` <br> |
| `boolean`<br> | `isEnabledSSL()` <br> |
| `void`<br> | `setHost(String host)` <br> |
| `void`<br> | `setPort(int port)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`




### Field Detail

#### DEFAULT\_PORT

```
public static final int DEFAULT_PORT
```
See Also:[Constant Field Values](./../constant-field-values)


#### DEFAULT\_ENABLE\_SSL

```
public static final boolean DEFAULT_ENABLE_SSL
```
See Also:[Constant Field Values](./../constant-field-values)


#### DEFAULT\_ENABLE\_NAIVETRUSTMANAGER

```
public static final boolean DEFAULT_ENABLE_NAIVETRUSTMANAGER
```
See Also:[Constant Field Values](./../constant-field-values)


#### DEFAULT\_ENABLE\_COMPRESSION

```
public static final boolean DEFAULT_ENABLE_COMPRESSION
```
See Also:[Constant Field Values](./../constant-field-values)


#### JBASE\_PRODUCT\_JREMOTEJAVA

```
public static final String JBASE_PRODUCT_JREMOTEJAVA
```
See Also:[Constant Field Values](./../constant-field-values)




### Constructor Detail



#### DefaultJConnectionFactory

```
public DefaultJConnectionFactory()
```







### Method Detail



#### getConnection

```
public JConnection getConnection()
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(String user,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(String user,
                                 String password,
                                 Properties props)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(String user,
                                 String account,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE account.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(JConnectionCallbackHandler handler)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialization.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnectionProperties

#### 
```
protected Properties getConnectionProperties()
```




#### getConnectionProperties

```
protected Properties getConnectionProperties(Properties props)
```

#### getHost

```
public String getHost()
```

#### setHost

```
public void setHost(String host)
```

#### getPort

```
public int getPort()
```

#### setPort

```
public void setPort(int port)
```

#### enableSSL

```
public void enableSSL()
```

#### disableSSL

```
public void disableSSL()
```

#### isEnabledSSL

```
public boolean isEnabledSSL()
```

#### enableNaiveTrustManager

```
public void enableNaiveTrustManager()
```

#### disableNaiveTrustManager

```
public void disableNaiveTrustManager()
```

#### isEnabledNaiveTrustManager

```
public boolean isEnabledNaiveTrustManager()
```

#### enableCompression

```
public void enableCompression()
```

#### disableCompression

```
public void disableCompression()
```

#### isEnabledCompression

```
public boolean isEnabledCompression()
```



Return to [jREMOTE API](com_jbase_jremote_package-summary)
