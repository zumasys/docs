# WDEBUG

<PageHeader />

**Created At:** 12/21/2017 5:44:34 PM  
**Updated At:** 2/9/2018 10:08:02 PM  
**Original Doc:** [292067-wdebug](https://docs.zumasys.com/36566-mv-connect-api/292067-wdebug)  
**Original ID:** 292067  
**Internal:** No  


The WDEBUG program is a debugging tool for REST services.

### **COMMAND SYNTAX**

```
WDEBUG
```

### **SETUP**

Use the WDEBUG program to:

- View REST request headers, variables, body and response
- Modify request headers, variables, etc. and re-run the request
- Invoke your REST handler so you can use the system debugger to debug your handler


In order to use WDEBUG, the mvConnect startup routine (WDB.INIT) saves request details in the WDB.DEBUG file. When you first install mvConnect, only the dictionary of the WDB.DEBUG file is created. To use WDEBUG, you need to create the data section for the file:

```
CREATE-FILE DATA WDB.DEBUG 101
```

Debug information is enabled for each REST resource independently. Attribute 7 of the WDB.RESOURCE record for each resource contains a flag to enable debugging for that resource. Set attribute 7 of the resource record to 1 to enable debugging.

### **DEBUGGING**

With debugging enabled for the desired resource, submit a REST request you want to debug, from a client (browser, PostMan, curl, etc.). After the request has been processed, type WDEBUG from a command (TCL, ECL, jsh, etc.) prompt. Recent requests will be displayed, showing some of the request details to help identify the specific request you intend to debug. Select the request by entering the line number at the command prompt. You can also display the previous or next page of requests, refresh the list of requests, clear all requests in the WDB.DEBUG file, or quit the WDEBUG program.

```
Command: (Q)uit (R)efresh (C)lear (N)ext (P)rev (##) Line to debug:
```

After selecting a request, you can view, edit or run the request. If you run the request, any edits you have made are applied to the request. The first time you edit a request, you are prompted to select the editor you want to use (ED, JED, SED, AE,  or an editor of your choice).

```
Debugging C/HELLOWORLD/182324137882516 - command: (Q)uit (V)iew (E)dit (R)un:
```

When viewing or editing a request, the request details are organized into sections:

INFO - general request information (not editable)

HEADERS - request headers, including some pseudo-headers like PATH\_INFO

COOKIES - any cookies associated with the request, parsed from the HTTP\_COOKIE header

PARAMS - parsed from the PATH\_INFO header

SESSION - the session ID and any session variables set by calling PUT.SESSION.VAR

RESPONSE\_HEADERS - headers returned by your REST handler

RESPONSE\_CONTENT - content returned by your REST handler

Any changes you make to the request are saved in a temporary copy of the request. The original record in WDB.DEBUG is not changed. When editing the request, if you need to modify any cookies, make your changes in the [COOKIES] section rather than in the HTTP\_COOKIE header. Similarly, for request parameters, edit items in the [PARAMS] section rather than the PATH\_INFO header.

When you select Run from the command prompt, the original environment used for handling the request is reconstructed, including any edits you have made to the request. Your REST handler is called and the new response is saved in the tempoary copy of the request, which you can view, edit or run again. If you want to use the system debugger to debug your REST handler, you can test if the request is being run from WDEBUG by querying SESSION$WDEBUG.MODE:

```
CALL WGETINFO(IS.DEBUGGING,SESSION_WDEBUG_MODE)
IF IS.DEBUGGING THEN DEBUG
```


