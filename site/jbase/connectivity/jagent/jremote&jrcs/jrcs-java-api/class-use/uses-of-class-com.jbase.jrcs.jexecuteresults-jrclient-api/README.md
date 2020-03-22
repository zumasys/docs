# Uses of Class com.jbase.jrcs.JExecuteResults (jrclient   API)

**Created At:** 9/25/2017 11:27:51 AM  
**Updated At:** 9/20/2018 12:59:16 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jexecuteresults](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jexecuteresults)  
**Original ID:** 278025  
**Internal:** No  

## Uses of [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api)

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) that return [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs")**

| Modifier and Type | Method | Description |
| --- | --- | --- |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[execute](./../../jconnection-jrclient-api#execute-java.lang)(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[execute](./../../jconnection-jrclient-api#execute-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-java.lang)(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList, int blockSize) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
