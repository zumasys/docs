# WSEND

**Created At:** 6/2/2017 6:28:25 PM  
**Updated At:** 11/20/2017 9:01:17 PM  
**Original Doc:** [wsend](https://docs.jbase.com/34473-docs/wsend)  


The WSEND subroutines send body data back to the client.  This is usually HTML or JSON.

### **COMMAND SYNTAX**

```
CALL WSEND(DATATOSEND)
```

### **SYNTAX ELEMENTS**

The WSEND subroutine expects a string as a input parameter.  You can call this program multiple times during a Web Call.

### EXAMPLE

```
CALL WSEND("Hello World")
```
