# WFLUSH

**Created At:** 6/27/2017 12:11:13 AM  
**Updated At:** 2/9/2018 10:07:25 PM  
**Original Doc:** [261270-wflush](https://docs.zumasys.com/36566-mv-connect-api/261270-wflush)  


The WFLUSH subroutine forces mvConnect to send all buffered content to the client.  WFLUSH first sends all headers, then all buffered content. If buffering is not enabled (see WSETBUFFER), WFLUSH has no effect. After calling WFLUSH, further buffering is disabled. When using buffering, WFLUSH must be called after the final call to WSEND.

#### **COMMAND SYNTAX**

```
CALL WFLUSH
```


