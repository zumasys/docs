# NaiveTrustManager (jremote   API)

**Created At:** 9/25/2017 11:53:05 AM  
**Updated At:** 2/15/2018 8:02:16 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NaiveTrustManager (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_NaiveTrustManager)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_jstatementimpl "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_niojbaseobjectreader "class in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_NaiveTrustManager)
- [No Frames](/39250-io/com_jbase_jremote_io_NaiveTrustManager)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jremote.io

## Class NaiveTrustManager

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.NaiveTrustManager


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">TrustManager</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a>
</dd></dl>
* * *


```
public class NaiveTrustManager
extends Object
implements X509TrustManager
```

This Trust Manager is "naive" because it trusts everyone.

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `NaiveTrustManager()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `checkClientTrusted(X509Certificate[] cert,<br>                  String authType)`<br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| `void` | `checkServerTrusted(X509Certificate[] cert,<br>                  String authType)`<br>Doesn't throw an exception, so this is how it approves a certificate.<br> |
| `X509Certificate[]` | `getAcceptedIssuers()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### NaiveTrustManager

```
public NaiveTrustManager()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### checkClientTrusted

```
public void checkClientTrusted(X509Certificate[] cert,
                               String authType)
                        throws CertificateException
```

Doesn't throw an exception, so this is how it approves a certificate.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl">checkClientTrusted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/CertificateException.html?is-external=true" title="class or interface in java.security.cert">CertificateException</a></code></dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkClientTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl"><code>X509TrustManager.checkClientTrusted(java.security.cert.X509Certificate[], String)</code></a></dd></dl>

<!--   -->
        - #### checkServerTrusted

```
public void checkServerTrusted(X509Certificate[] cert,
                               String authType)
                        throws CertificateException
```

Doesn't throw an exception, so this is how it approves a certificate.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl">checkServerTrusted</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/security/cert/CertificateException.html?is-external=true" title="class or interface in java.security.cert">CertificateException</a></code></dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#checkServerTrusted-java.security.cert.X509Certificate:A-java.lang.String-" title="class or interface in javax.net.ssl"><code>X509TrustManager.checkServerTrusted(java.security.cert.X509Certificate[], String)</code></a></dd></dl>

<!--   -->
        - #### getAcceptedIssuers

```
public X509Certificate[] getAcceptedIssuers()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers--" title="class or interface in javax.net.ssl">getAcceptedIssuers</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true" title="class or interface in javax.net.ssl">X509TrustManager</a></code>
</dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true#getAcceptedIssuers--" title="class or interface in javax.net.ssl"><code>X509TrustManager.getAcceptedIssuers()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_NaiveTrustManager)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_jstatementimpl "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_niojbaseobjectreader "class in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_NaiveTrustManager)
- [No Frames](/39250-io/com_jbase_jremote_io_NaiveTrustManager)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
