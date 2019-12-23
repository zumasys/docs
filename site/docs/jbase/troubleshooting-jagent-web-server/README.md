# Troubleshooting jAgent Web Server

**Created At:** 5/18/2018 7:55:44 PM  
**Updated At:** 5/19/2018 3:07:56 PM  
**Original Doc:** [317527-troubleshooting-jagent-web-server](https://docs.jbase.com//317527-troubleshooting-jagent-web-server)  


# Troubleshooting jAgent Web Server

This document explains how the jAgent web server works and how to diagnose when things are not working.

First you must determine what port the jAgent web server is listening on.  jAgent must have been started and pointed at a configuration file.  Review that configuration file and look for the port definition.

## Services

First verify that http is specified in the services line.  This tells this instance of jAgent what services to respond to.  A single jAgent instance can actually respond to different services but this is not recommended.  Bellow we see that this jAgent is configured to answer jremote (c# and java), odbc, and web

```
[MAIN]

; List the services that this instance of jagent will honor.
; Separate selections with commas. Possible choices are jremote,
; jodbc and http.
services=jremote,jodbc,http
```



## IP Address and Port

The second section to review is the port and ip address assignment.  If commented out as below then by default jagent will listen on port 20002 and listen on all ports.

```
; Specify the port that jagent will listen on for incoming connections.
; The default port is 20002. This option duplicates the -p (--port)
; command line option.
;port = 20002

; If the server has multiple network interfaces, specify the IP address
; where jagent will listen for incoming connections. This duplicates
; the -b (--bind_address) command line option.
;bind_address = <IP address to listen on>
```



## Try and connect

Since MVConnect is a web server you can connect to it with any browser.  Due to firewalls it is usually best to use a local tool such as curl to test the webserver.  Curl is usually included with all linux distributions.  If you are on a windows server you can log into the main server desktop and use IE or Chrome.  You can also download dos versions of curl for windows [here](https://curl.haxx.se/dlwiz/).

If you are using curl you can do the following

```
C:\jBASE\DEMOS>curl http://localhost:20002/api/wresttest
{"RestVersion":"1.1", "Who":"3 patrickp", "pwd":"C:\\jBASE\\DEMOS", "wresttest": [ "File path:                C:\\jBASE\\DEMOS\\md]D","File path:                C:\\jBASE\\DEMOS","File path:                C:\\JBASE\\PMIPORTAL","File path:                .","Subroutine object:        main()","Subroutine object:        C:\\jBASE\\DEMOS\\lib\\lib0.dll","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjbaseutil","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjcon","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjee","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjrest","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjsub","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libjwobj","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libsql","Subroutine object:        C:\\jBASE\\CurrentVersion\\lib\\libSQLSYS","Execute path:             C:\\jBASE\\DEMOS\\md]D","Shared Object             C:\\jBASE\\CurrentVersion\\bin\\WRESTTEST.dll","Executable (DUP!!)        C:\\jBASE\\CurrentVersion\\bin\\WRESTTEST.exe"], "vars": {}, "cookies": {}, "headers": {"REMOTE_ADDR":"127.0.0.1", "REMOTE_HOST":"127.0.0.1", "PROTOCOL_VERSION":"HTTP\/1.1", "REQUEST_METHOD":"GET", "PATH_INFO":"\/api\/wresttest", "SERVER_PORT":"20002", "HTTP_ACCEPT":"*\/*", "HTTP_USER_AGENT":"curl\/7.55.1", "HTTP_HOST":"localhost:20002"}, "body":"", "status":"ok", "statusmsg":""}
C:\jBASE\DEMOS>
```

If you get any successful request then the actual web server is up and running (it may still not be configured correctly but it is running).

Here is the same thing with Microsoft Edge.

![317527-troubleshooting-jagent-web-server: 1526674654522-1526674654522](./1526674654522-1526674654522.jpg)

If you cannot connect using either of the above techniques then it usually means jAgent is not running.  You should review the jAgent [documentation](/30312-jagent/introduction-to-jagent)

## Run jAgent in the Foreground

When doing develpment and testing it is usually best to run jAgent directly in a dos or unix box (command line).  This allows you to directly see what jAgent is saying.

To do this log into your jBase system and logto a account from where you normally can run programs, compile code, work with your data.  From there jump out to tcl if you are on windows type CMD to get to a dos prompt and on linux type bash in lower case to get to a bash.

Next lets run a test server on a different port from the default

Windows

```
C:\Users\patrickp>jb
Account name or path: DEMOS
jsh DEMOS ~ -->cmd
Microsoft Windows [Version 10.0.17134.48]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\jBASE\DEMOS>jbase_agent --port 20003
(20544|19132) NOTICE starting up jAgent, Process Per Connection mode, listening on port 20003, c:\petes\src\international\5.7.0\jagent\SocketAcceptor.h +63
```

Linux

```
jsh DEV ~ -->bash
bash-4.2$ jbase_agent --port 20003
(31400|140710873688128) NOTICE starting up jAgent, Process Per Connection mode, listening on port 20003, SocketAcceptor.h +63
```



In both cases we have fired up the jAgent on port 20003.  Because we have not defined a configuration file http is actually disabled.  That is ok because the web server will still respond but tell us http is disabled.  Now test the web server again

Curl

```
C:\Users\patrickp>curl http://localhost:20003/wresttest
<!DOCTYPE html>
.... chopped out a bunch of output as it is all html/css stuff ....
<body>
<div class="cover">
<h1><small>Error 500</small></h1>
<p class="lead">Service Disabled</p>
</div>
<footer>
<p>Please contact the system administrator.</p>
</footer>
</body>
</html>

C:\Users\patrickp>
```

Or with the browser

![317527-troubleshooting-jagent-web-server: 1526675586835-1526675586835](./1526675586835-1526675586835.jpg)

Both represent we are talking to the web server which is a good thing.  If this is still not working you may need to review your firewall rules.  Verify you have put in the right port number (in this test it was 20003).  Also verify when jAgent fired up it did not throw any errors.  The primary one you may run into is that something is already listening on the port chose (20003 in this example).  If that happens try another port (20004 and on).

to parent document here
