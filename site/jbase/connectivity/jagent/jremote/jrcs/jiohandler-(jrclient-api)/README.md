# JIOHandler (jrclient API)

**Created At:** 9/25/2017 11:29:26 AM  
**Updated At:** 9/20/2018 1:07:06 PM  
**Original Doc:** [com_jbase_jrcs_jiohandler](https://docs.jbase.com/jrcs/com_jbase_jrcs_jiohandler)  
**Original ID:** 278040  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JIOHandler (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface JIOHandler

All Known Implementing Classes:[JDefaultIOHandler](./../jdefaultiohandler-%28jrclient---api%29 "class in com.jbase.jrcs")
```
public interface JIOHandler
```

The jRCS I/O handler interface, which a class must implement to replace the default JClient I/O handler

## Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| String<br> | getTermType()<br> |
| String<br> | input(int maxChars)<br> |
| void<br> | output(String characters)<br> |

### 




## Method Detail

#### input

```
String input(int maxChars)
```





#### output

```
void output(String characters)
```

#### 


#### 


#### getTermType

```
String getTermType()
```
