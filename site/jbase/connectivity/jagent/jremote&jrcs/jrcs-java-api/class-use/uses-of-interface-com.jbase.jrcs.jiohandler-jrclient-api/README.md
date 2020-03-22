# Uses of Interface com.jbase.jrcs.JIOHandler (jrclient   API)

**Created At:** 9/25/2017 11:28:10 AM  
**Updated At:** 9/20/2018 1:01:39 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jiohandler](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jiohandler)  
**Original ID:** 278028  
**Internal:** No  

## Uses of [JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api)

**Classes in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) that implement [JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs")**

| Modifier and Type | Class | Description |
| --- | --- | --- |
| class | [JDefaultIOHandler](./../../jdefaultiohandler-jrclient-api "class in com.jbase.jrcs") | | ``Default i**mplementation of jRCS I/O handler.** | |

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) that return [JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs")**

| Modifier and Type | Method | Description |
| --- | --- | --- |
| [JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs") | JConnection.[getTermIOHandler](./../../jconnection-jrclient-api#getTermIOHandler-)() | Retrieves a reference to the current terminal I/O handler. |

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) with parameters of type [JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs")**

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | JConnection.[setTermIOHandler](./../../jconnection-jrclient-api#setTermIOHandler-com.jbase.jrcs)([JIOHandler](./../../jiohandler-jrclient-api "interface in com.jbase.jrcs") handler) | Sets a terminal I/O handler. |
