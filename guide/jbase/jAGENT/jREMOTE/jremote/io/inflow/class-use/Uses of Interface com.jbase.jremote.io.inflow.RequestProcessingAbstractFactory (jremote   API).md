# Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)

**Created At:** 9/25/2017 11:49:21 AM  
**Updated At:** 2/15/2018 8:02:20 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)


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
## Uses of Interface
com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory

- <caption><span>Packages that use <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory" title="interface in com.jbase.jremote.io.inflow">RequestProcessingAbstractFactory</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
- - <!--   -->
### Uses of [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


<caption><span>Constructors in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory" title="interface in com.jbase.jremote.io.inflow">RequestProcessingAbstractFactory</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      String host,<br>                      int port)`<br>Construct service that will not create new threads for client connections.<br> |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      javax.resource.spi.work.WorkManager workManager,<br>                      String host,<br>                      int port,<br>                      boolean threadPerConnection)`<br>Supply a work manager and optionally create a new thread to handle<br> each client connection.<br> |
    - <!--   -->
### Uses of [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Classes in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that implement <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory" title="interface in com.jbase.jremote.io.inflow">RequestProcessingAbstractFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteRequestProcessingFactory`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)


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
