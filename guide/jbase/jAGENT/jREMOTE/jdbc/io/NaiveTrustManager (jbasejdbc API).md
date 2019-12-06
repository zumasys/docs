# NaiveTrustManager (jbasejdbc API)

**Created At:** 9/25/2017 10:53:19 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NaiveTrustManager (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
# <!--   -->Class NaiveTrustManager

<dl><dt>All Implemented Interfaces:</dt><dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">TrustManager</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></dd></dl>
```
public class NaiveTrustManager
extends Object
implements X509TrustManager
```

This Trust Manager is "naive" because it trusts everyone.



<!-- ======== CONSTRUCTOR SUMMARY ======== -->

<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`NaiveTrustManager()`<br> |





<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
<caption>&nbsp;</caption>| <br>void<br> | <br>checkClientTrusted([X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")[] cert, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") authType)<br> | <br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| <br>void<br> | <br>checkServerTrusted([X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")[] cert, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") authType)<br> | <br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| <br>[X509Certificate](http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/X509Certificate.html?is-external=true "class or interface in java.security.cert")`[]`<br> | <br>`getAcceptedIssuers()`<br> | <br> |


<!--   -->

## 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail
<!--   -->
#### **NaiveTrustManager**

```
public NaiveTrustManager()
```






<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **checkClientTrusted**

```
public void checkClientTrusted(X509Certificate[] cert, String authType)
                        throws CertificateException
```



Doesn't throw an exception, so this is how it approves a certificate.


<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl">checkClientTrusted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/CertificateException.html?is-external=true" title="class or interface in java.security.cert">CertificateException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl"><code>X509TrustManager.checkClientTrusted(java.security.cert.X509Certificate[], String)</code></a></dd></dl>



<!--   -->


#### **checkServerTrusted**

```
public void checkServerTrusted(X509Certificate[] cert, String authType)
                        throws CertificateException
```



Doesn't throw an exception, so this is how it approves a certificate.
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl">checkServerTrusted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/CertificateException.html?is-external=true" title="class or interface in java.security.cert">CertificateException</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl"><code>X509TrustManager.checkServerTrusted(java.security.cert.X509Certificate[], String)</code></a></dd></dl>

<!--   -->


#### **getAcceptedIssuers**

```
public X509Certificate[] getAcceptedIssuers()
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers--" title="class or interface in javax.net.ssl">getAcceptedIssuers</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code></dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers--" title="class or interface in javax.net.ssl"><code>X509TrustManager.getAcceptedIssuers()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
