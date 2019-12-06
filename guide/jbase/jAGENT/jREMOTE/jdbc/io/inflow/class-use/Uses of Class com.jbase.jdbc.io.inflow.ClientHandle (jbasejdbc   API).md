# Uses of Class com.jbase.jdbc.io.inflow.ClientHandle (jbasejdbc   API)

**Created At:** 9/25/2017 10:49:37 AM  
**Updated At:** 2/15/2018 8:02:51 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jdbc.io.inflow.ClientHandle (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- [Class](/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle "class in com.jbase.jdbc.io.inflow")
- Use
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jdbc/io/inflow/class-use//39239-class-use/com_jbase_jdbc_io_inflow_class-use_ClientHandle)
- [No Frames](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_ClientHandle)


- [All Classes](../../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= -->
## Uses of Class
com.jbase.jdbc.io.inflow.ClientHandle

- <caption><span>Packages that use <a href="/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle" title="class in com.jbase.jdbc.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io.inflow |   |
- - <!--   -->
### Uses of [ClientHandle](/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle "class in com.jbase.jdbc.io.inflow") in [com.jbase.jdbc.io.inflow](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)


<caption><span>Methods in <a href="/39238-inflow/com_jbase_jdbc_io_inflow_package-summary">com.jbase.jdbc.io.inflow</a> with parameters of type <a href="/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle" title="class in com.jbase.jdbc.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | RequestHandler.`handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | RequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | RequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | RequestHandler.`handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- [Class](/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle "class in com.jbase.jdbc.io.inflow")
- Use
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jdbc/io/inflow/class-use//39239-class-use/com_jbase_jdbc_io_inflow_class-use_ClientHandle)
- [No Frames](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_ClientHandle)


- [All Classes](../../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
