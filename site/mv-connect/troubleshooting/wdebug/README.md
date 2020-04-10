# WDEBUG

<PageHeader />

## Description

Once you have verified that MVConnect is successfully responding and is able to call WRESTTEST you are ready to start writing your first Web Service.  Because web functions all run in the background and not in a terminal it is often difficult to troubleshoot what is going on.  All MVConnect programs are executable programs (not subroutines) and can actually be ran directly from TCL.  The issue becomes passing in information from the client.  To assist with this MVConnect has a program called WDEBUG that allows you to save and re-play any web calls.

### Build a test web program

To start we are first going to create a simple HELLOWORD web api.  Go into your system and start a new program called HELLOWORD.RTNE.  Follow the steps below.  Adjust your basic/compile commands based on your environment.  When you have created the program compile and catalog the program and then run it.

```
jsh DEMOS ~ -->ED BP HELLOWORLD.RTNE
New record
HELLOWORLD.RTNE
TOP
.I
001+CALL WSEND("HELLO FROM MVCONNECT")
002+
BOTTOM
.F
TOP
.P
TOP
001 CALL WSEND("HELLO FROM MVCONNECT")
BOTTOM
.F
TOP
.FI
Record 'HELLOWORLD.RTNE' written to file 'BP'
jsh DEMOS ~ -->BASIC BP HELLOWORLD.RTNE
HELLOWORLD.RTNE
BASIC_3.c
Source file HELLOWORLD.RTNE compiled successfully
jsh DEMOS ~ -->CATALOG BP HELLOWORLD.RTNE
HELLOWORLD.RTNE
Object HELLOWORLD.RTNE cataloged successfully
jsh DEMOS ~ -->HELLOWORLD.RTNE
Content-type: application/json
Cache-Control: no-cache

HELLO FROM MVCONNECT
jsh DEMOS ~ -->
```

You should see the displayed output.  This has verified that our program is working.  Now we need to create a api resource.

```
jsh DEMOS ~ -->ED WDB.RESOURCE API*HELLOWORLD
API*HELLOWORLD
TOP
.I
001+P
002+HELLO WORLD DEMO
003+HELLOWORLD.RTNE
004+
005+1
006+1
007+
BOTTOM
.FI
Record 'API*HELLOWORLD' written to file 'WDB.RESOURCE'
```

Now use your browser and call your WEB API

![317564-troubleshooting-with-wdebug: 1526850840838-1526850840838](./1526850840838-1526850840838.jpg)

To turn on debugging you need to do a couple steps.

```
1. Create the file WDB.DEBUG.  This can be any file type.  MVconnect will save away requests into this file.
2. Put a 1 in Attribute 7 of the WDB.RESOURCE item for the WEB API you wish to debug.
```

Refresh you web call to HELLOWORLD.  Then from pick type WDEBUG.  You should a debug screen showing your call.

```
Ln Date. Time.... Path................ Remote Address...... Request ID.........
1 05-20 14:19:23 /api/helloworld      127.0.0.1            18403515634868808
Showing items 1-1 of 1
Command: (Q)uit (R)efresh (C)lear (N)ext (P)rev (##) Line to debug:
```

Type the number of your request and you can then view the entire web call and even re-run the call directly on your line.

```
Ln Date. Time.... Path................ Remote Address...... Request ID.........
1 05-20 14:19:23 /api/helloworld      127.0.0.1            18403515634868808
Showing items 1-1 of 1
Debugging C/HELLOWORLD.RTNE/1840351563 - command: (Q)uit (V)iew (E)dit (R)un: V

Page 1 of 2          C/HELLOWORLD.RTNE/18403515634868808

[INFO] (do not edit this section)
Date            = 20 MAY 2018
Time            = 14:19:23
Duration        = 42
Port            = 4
Handler         = api
Resource        = helloworld
Controller      = HELLOWORLD.RTNE
Program         =
RequestID       = 18403515634868808
Method          = GET
Path            = /api/helloworld
RemoteAddr      = 127.0.0.1
Status          = 200

[HEADERS]
REMOTE_ADDR     = 127.0.0.1
REMOTE_HOST     = 127.0.0.1
PROTOCOL_VERSION= HTTP/1.1
REQUEST_METHOD  = GET
PATH_INFO       = /api/helloworld
SERVER_PORT     = 20002
HTTP_ACCEPT     =
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
HTTP_CONNECTION = Keep-Alive
HTTP_USER_AGENT = Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
(KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
HTTP_HOST       = localhost:20002

[PARAMS]

[RESPONSE_HEADERS]
Content-type    = application/json
Cache-Control   = no-cache

[RESPONSE_CONTENT]
HELLO FROM MVCONNECT

Debugging C/HELLOWORLD.RTNE/1840351563 - command: (Q)uit (V)iew (E)dit (R)un: E   - Here you can actually edit and modify the inbound request

Select the editor you want to use: 1 = ED, 2 = JED, 3 = other: 1
DC/HELLOWORLD.RTNE/18403515634868808
TOP
.P
TOP
001 [INFO] (do not edit this section)
002 Date            = 20 MAY 2018
003 Time            = 14:19:23
004 Duration        = 42
005 Port            = 4
006 Handler         = api
007 Resource        = helloworld
008 Controller      = HELLOWORLD.RTNE
009 Program         =
010 RequestID       = 18403515634868808
011 Method          = GET
012 Path            = /api/helloworld
013 RemoteAddr      = 127.0.0.1
014 Status          = 200
015
016 [HEADERS]
017 REMOTE_ADDR     = 127.0.0.1
018 REMOTE_HOST     = 127.0.0.1
019 PROTOCOL_VERSION= HTTP/1.1
020 REQUEST_METHOD  = GET
021 PATH_INFO       = /api/helloworld
022 SERVER_PORT     = 20002
022 SERVER_PORT     = 20002
023 HTTP_ACCEPT     = text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
024 HTTP_CONNECTION = Keep-Alive
025 HTTP_USER_AGENT = Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
026 HTTP_HOST       = localhost:20002
027
028 [PARAMS]
029
030 [RESPONSE_HEADERS]
031 Content-type    = application/json
032 Cache-Control   = no-cache
033
034 [RESPONSE_CONTENT]
035 HELLO FROM MVCONNECT

Debugging C/HELLOWORLD.RTNE/1840351563 - command: (Q)uit (V)iew (E)dit (R)un: r

Executing the request: C/HELLOWORLD.RTNE/18403515634868808

Request complete. Press <enter> to parse results
```

The run option is key to debugging your code.  You can even put debug statements into your program and debug as normal.  Just remember to turn debugging back off and remove any debug statements when you are done.

## Manual Debugging

Since all MVConnect modules are true programs you can always run the programs directly from the shell.  What is missing is the actual web incoming data.  For simple debugging/testing you can always force data for answers.

Example

```
CALL WGETHEADER(REQUEST.METHOD,"REQUEST_METHOD")
CALL WGETBODY(BODY)
* This is the request method passed via the request, if we wanted to test this directly from tcl without using wdebug we could just force it here temporarily
IF DOING.DEBUG THEN
    REQUEST.METHOD="POST"
    BODY='{ "firstname":"Patrick" }
END
```

You can now run your MVConnect program directly from your shell and exercise different functions without needing a browser/web call at all.

## Monitoring/Runtime Errors

Because web/rest functions run in the background it is difficult to see actual errors.  Most platforms offer some type of logging for errors.

jBASE documentation on Error Logging [Link](./../../../jbase/jbc-error-handling/README.md)

New run-time errors option [Link](./../../../jbase/release-notes/5.6.1-release-notes/pn5_60517/README.md)

Most pick platforms also have a where command to give you some information on what a process is doing.  If a program is taking a long time to finish you may get a invalid request back to your browser but when you look inside your system with a list of processes you may still see the process running.  Use you normal system tools such as where to see what the process is doing.  On jBase you can use the (v option to get more information.

Example

In this example the rest service which is running on line 3 is running jbase\_agent, then SLEEP.TEST.RTNE, and it currently running the jQL command "SSELECT MD BY A1".

```
Port   Device     Account      PID      Command
3      ntcon      patrickp     25172    jbase_agent
SLEEP.TEST.RTNE 184194160917625172
SSELECT MD BY A1
jsh DEMOS ~ -->
```

Back to [Troubleshooting](./../README.md)

  
<PageFooter />
