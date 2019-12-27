# NaiveTrustManager (jremote   API)

**Created At:** 9/25/2017 11:53:05 AM  
**Updated At:** 2/15/2018 8:02:16 AM  
**Original Doc:** [com_jbase_jremote_io_NaiveTrustManager](https://docs.jbase.com/39250-io/com_jbase_jremote_io_NaiveTrustManager)  
**Original ID:** 278169  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NaiveTrustManager (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.naivetrustmanager-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jstatementimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./../niojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io")


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

com.jbase.jremote.io

## Class NaiveTrustManager

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.NaiveTrustManager


- All Implemented Interfaces:[TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/TrustManager.html?is-external=true "class or interface in javax.net.ssl"), [X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl")
* * *


```
public class NaiveTrustManager
extends Object
implements X509TrustManager
```

This Trust Manager is "naive" because it trusts everyone.

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `NaiveTrustManager()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `checkClientTrusted(X509Certificate[] cert,<br>                  String authType)`<br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| `void` | `checkServerTrusted(X509Certificate[] cert,<br>                  String authType)`<br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| `X509Certificate[]` | `getAcceptedIssuers()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### NaiveTrustManager

```
public NaiveTrustManager()
```


    - ### Method Detail

        - #### checkClientTrusted

```
public void checkClientTrusted(X509Certificate[] cert,
                               String authType)
                        throws CertificateException
```

Doesn't throw an exception, so this is how it approves a certificate.
Specified by:`checkClientTrusted` in interface `X509TrustManager`Throws:`CertificateException`See Also:[`X509TrustManager.checkClientTrusted(java.security.cert.X509Certificate\[\], String)`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String- "class or interface in javax.net.ssl")


        - #### checkServerTrusted

```
public void checkServerTrusted(X509Certificate[] cert,
                               String authType)
                        throws CertificateException
```

Doesn't throw an exception, so this is how it approves a certificate.
Specified by:`checkServerTrusted` in interface `X509TrustManager`Throws:`CertificateException`See Also:[`X509TrustManager.checkServerTrusted(java.security.cert.X509Certificate\[\], String)`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String- "class or interface in javax.net.ssl")


        - #### getAcceptedIssuers

```
public X509Certificate[] getAcceptedIssuers()
```
Specified by:`getAcceptedIssuers` in interface `X509TrustManager`See Also:[`X509TrustManager.getAcceptedIssuers()`](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers-- "class or interface in javax.net.ssl")

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.naivetrustmanager-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jstatementimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./../niojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io")


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
