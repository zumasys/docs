# NaiveTrustManager (jbasejdbc API)

**Created At:** 9/25/2017 10:53:19 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_naivetrustmanager](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_naivetrustmanager)  
**Original ID:** 277904  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NaiveTrustManager (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;gt;
# Class NaiveTrustManager

All Implemented Interfaces:[TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/TrustManager.html?is-external=true "class or interface in javax.net.ssl"), [X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl")
```
public class NaiveTrustManager
extends Object
implements X509TrustManager
```

This Trust Manager is "naive" because it trusts everyone.



# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`NaiveTrustManager()`<br> |








# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
 | <br>void<br> | <br>checkClientTrusted([X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")[] cert, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") authType)<br> | <br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| <br>void<br> | <br>checkServerTrusted([X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")[] cert, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") authType)<br> | <br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| <br>[X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")`[]`<br> | <br>`getAcceptedIssuers()`<br> | <br> |




## 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

#### **NaiveTrustManager**

```
public NaiveTrustManager()
```









# Method Detail

#### **checkClientTrusted**

```
public void checkClientTrusted(X509Certificate[] cert, String authType)
                        throws CertificateException
```



Doesn't throw an exception, so this is how it approves a certificate.


Specified by:`checkClientTrusted` in interface `X509TrustManager`
**Throws:**`CertificateException`
**See Also:**[`X509TrustManager.checkClientTrusted(java.security.cert.X509Certificate\[\], String)`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String- "class or interface in javax.net.ssl")






#### **checkServerTrusted**

```
public void checkServerTrusted(X509Certificate[] cert, String authType)
                        throws CertificateException
```



Doesn't throw an exception, so this is how it approves a certificate.

**Specified by:**`checkServerTrusted` in interface `X509TrustManager`
**Throws:**`CertificateException`
**See Also:**[`X509TrustManager.checkServerTrusted(java.security.cert.X509Certificate\[\], String)`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String- "class or interface in javax.net.ssl")




#### **getAcceptedIssuers**

```
public X509Certificate[] getAcceptedIssuers()
```

**Specified by:**`getAcceptedIssuers` in interface `X509TrustManager`
**See Also:**[`X509TrustManager.getAcceptedIssuers()`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers-- "class or interface in javax.net.ssl")


