# WSETBUFFER

<PageHeader />

The WSETBUFFER subroutine enables or disables buffering of content passed to the WSEND subroutine. It accepts a single argument, specifying the buffer size in characters, or zero to disable buffering. Buffering may improve performance, and also may aid in producing cleaner output, especially if your handler displays spurious error or warning messages. Be sure to specify a buffer size sufficient for the content created by your handler. Otherwise, when the buffer exceeds the buffer size, all headers and buffered content are sent to the client, and further buffering is disabled.

When buffering is enabled, all content passed to WSEND is buffered. A final call to WFLUSH is used to send the complete response to the client, including all the headers and buffered content. The first header sent by WSEND, Content-Type, indicates the beginning of the response, so any error or warning messages generated before the call to WFLUSH are discarded when buffering is enabled.

Buffering is disabled by default.

#### **COMMAND SYNTAX**

```
CALL WSETBUFFER(BUF.SIZE)
```

#### SYNTAX ELEMENTS


| **Parameter**<br> | **Description**<br> |
| --- | --- |
| BUF.SIZE<br> | Maximum number of characters to buffer, or zero to disable buffering<br> |

