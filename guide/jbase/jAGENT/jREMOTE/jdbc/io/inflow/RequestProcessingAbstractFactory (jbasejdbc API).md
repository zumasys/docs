# RequestProcessingAbstractFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:52:00 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestProcessingAbstractFactory (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->


# Interface RequestProcessingAbstractFactory

```
public interface RequestProcessingAbstractFactory
```

<!-- ========== METHOD SUMMARY =========== -->

<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>`RequestHandler`<br> | <br>`createRequestHandler(RequestListenerService rls)`<br> | <br>In ThreadPerConnection mode this method will be called by RequestListenerService when new connection is opened.<br> |

<!-- ============ METHOD DETAIL ========== -->

<!--   -->

# Method Detail
<!--   -->
#### **createRequestHandler**

```
RequestHandler createRequestHandler(RequestListenerService rls)
```

In ThreadPerConnection mode this method will be called by RequestListenerService when new connection is opened. This creates one RequestHandler for each connection.
<dl><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>&nbsp; &nbsp; rls</code> -</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">RequestHandler instance</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
