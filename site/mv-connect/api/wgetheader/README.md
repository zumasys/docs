# WGETHEADER 

<PageHeader />

The WGETHEADER subroutine allows you retrieve headers sent by the client.

### **COMMAND SYNTAX**

```
CALL WGETHEADER(HEADERVALUE,HEADERNAME)
```

### **SYNTAX ELEMENTS**


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| HEADERVALUE | This is the returned value of the header. |
| HEADERNAME | Set to the name of the header you want. |


EXAMPLE

```
CALL WGETHEADER(TOKEN,"Token")
* TOKEN will have the passed header
```
