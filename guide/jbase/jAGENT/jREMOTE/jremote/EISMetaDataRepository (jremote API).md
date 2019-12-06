# EISMetaDataRepository (jremote API)

**Created At:** 9/25/2017 11:40:36 AM  
**Updated At:** 12/24/2018 7:27:09 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class EISMetaDataRepository

```
public class EISMetaDataRepository
extends Object
```

Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `EISMetaDataRepository()` <br> |
| `EISMetaDataRepository(EISMetaDataResponse mdRespository)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRepositoryEntry(String key)`<br>Obtain the value of a repository entry<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### EISMetaDataRepository

```
public EISMetaDataRepository()
```



#### EISMetaDataRepository

```
public EISMetaDataRepository(EISMetaDataResponse mdRespository)
```



<!--   -->

### Method Detail
<!--   -->
#### getRepositoryEntry

```
public JDynArray getRepositoryEntry(String key)
```

Obtain the value of a repository entry
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>key</code> - key of the repository entry</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">value of the repository entry</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->Back to [jREMOTE API](com_jbase_jremote_package-summary)
