# JbaseSocketConnection (framework   API)

**Created At:** 9/25/2017 10:31:31 AM  
**Updated At:** 2/15/2018 8:02:34 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbaseSocketConnection (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JbaseSocketConnection)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseSerializable.TYPE "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_NaiveTrustManager "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JbaseSocketConnection)
- [No Frames](/39220-io/com_jbase_framework_io_JbaseSocketConnection)


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
com.jbase.framework.io

## Class JbaseSocketConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.JbaseSocketConnection


- * * *


```
public class JbaseSocketConnection
extends Object
```

This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.  see also JbaseMsg.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JbaseSocketConnection(String host,<br>                     int port)`<br>Construct and connect to a jBASE host.<br> |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `protected void` | `connect(String host,<br>       int port)`  |
| `SocketAddress` | `getRemoteSocketAddress()`  |
| `void` | `read(JbaseMsg msg)`  |
| `void` | `write(JbaseMsg msg)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JbaseSocketConnection

```
public JbaseSocketConnection(String host,
                             int port)
                      throws IOException
```

Construct and connect to a jBASE host.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>host</code> - </dd>
<dd>
<code>port</code> - </dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### connect

```
protected void connect(String host,
                       int port)
                throws UnknownHostException,
                       IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/net/UnknownHostException.html?is-external=true" title="class or interface in java.net">UnknownHostException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### write

```
public void write(JbaseMsg msg)
           throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### close

```
public void close()
           throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### read

```
public void read(JbaseMsg msg)
          throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getRemoteSocketAddress

```
public SocketAddress getRemoteSocketAddress()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JbaseSocketConnection)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseSerializable.TYPE "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_NaiveTrustManager "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JbaseSocketConnection)
- [No Frames](/39220-io/com_jbase_framework_io_JbaseSocketConnection)


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
