# WFLUSH

<PageHeader />

The `WFLUSH` subroutine forces MV Connect to send all buffered content to the client. ` WFLUSH` first sends all headers, then all buffered content. If buffering is not enabled (see [WSETBUFFER](../wsetbuffer/README.md)), `WFLUSH` has no effect. After calling `WFLUSH`, further buffering is disabled. When using buffering, `WFLUSH` must be called after the final call to `WSEND`.

## WFLUSH Syntax

```
CALL WFLUSH
```

<PageFooter />
