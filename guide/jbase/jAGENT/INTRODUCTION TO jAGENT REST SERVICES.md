# INTRODUCTION TO jAGENT REST SERVICES

**Created At:** 3/10/2017 2:36:08 PM  
**Updated At:** 1/18/2019 6:33:07 PM  


# DOCUMENT SCOPE

The Introduction to jAgent REST Services document serves as a starting point for Administrators that are new to jBASE and would like to setup RESTful Services for integration of web services into their jBASE system.

# PREREQUISITES

To perform this steps in this walkthrough document, you will need an installed and licensed system running jBASE 5.6. If you need to complete this task, please review jBASE 5.6 Installation Guide for Windows or Linux.
You should also have reviewed Introduction to jBASE, for knowledge of commands and utilities used in this walkthrough.

# jAGENT SYNOPSIS

jAgent is a server-side jBASE component responsible for accepting and processing incoming client requests. jAgent was introduced in jBASE 5.2 release.

Communication is established via TCP socket connections and by means of a well defined protocol. jAgent is a socket server listening on a user-defined TCP port and has the capability to serve a wide range of client applications as long as they speak the same protocol.

This protocol is currently implemented by the following jBASE components:

- jBASE jRemote Client API (Requires Client)
- jBASE JDBC Driver 2.0+ (Requires Client)
- jBASE ODBC Driver (Requires Client)
- HTTP-based RESTful APIs


# RESOURCES

<iframe src="//www.youtube.com/embed/7Nu7cRn4Wc4?wmode=opaque" allowfullscreen="" frameborder="0" height="360" width="640" class="fr-draggable"></iframe>

# CONFIGURING jAGENT

**COMMAND SYNTAX:**

```
jbase_agent [service options] [options]
```

**COMMAND ELEMENTS:**

- **Service Options -** install, start, stop and remove jagent service.
- **Options -**configure jagent behavior. Most options have both long and short forms. For convenience, most options can be specified in a configuration file, and only the --config option is needed on the command line.



| **Option**             <br> | **Description**                                                                     <br> |
| --- | --- |
| --config=[config file name]<br> |  Use [config file name] to specify jagent options. When using the jBASE HTTP API (RESTful services), a configuration file is required, as it specifies how HTTP requests are handled.  E.g. jbase\_agent --config=$JBCRELEASEDIR/config/ jagent\_config<br> |
| -A [mode]    --authentication=[mode]<br> | [mode] = the mode (none|user|account) used to authenticate client connections. This option is ignored for jBASE HTTP connections.  E.g. jbase\_agent -A user<br> |
| -b [interfaceName]--bind\_address=[interfaceName]<br> | Bind to a specific local interface. If not specified then bind to all local interfaces.  E.g. jbase\_agent -b 1.2.3.4<br> |
| -c [path to certificate]--certificate=[path to certificate]<br> | [path to certificate] = the path to a valid x509 certificate.  Note --private\_key is mandatory with this option.<br> |
| -F                        <br> |  Create log files for each client connection (P[pid].log)<br> |
| -h                        <br> |  Print this screen<br> |
| -k [path to private key]--private\_key=[path to private key]<br> | [path to privatekey] = the path to a valid private key.  Certificate is mandatory with this option.  E.g. jbase\_agent --private\_key=key.pem --certificate=cert.pem<br> |
| L [logLevel]--loglevel=[logLevel]<br> |  [logLevel] = a numeric log level that determines the detail to be logged (default level is LOG\_NOTICE).0 NO LOGGING1  LOG\_TRACE2  LOG\_DEBUG3 LOG\_INFO4  LOG\_NOTICE5  LOG\_WARNING6  LOG\_ERROR7  LOG\_CRITICAL8  LOG\_ALERT9  LOG\_EMERGENCY<br> |
| -n [serviceName]--service\_name=[serviceName]<br> | [serviceName] = name of the service to install, start, stop or remove.<br> |
| -N                        <br> | Do not set TCP\_NO\_DELAY. Useful for performance tuning.<br> |
| -p [listenPort]--port=[listenPort]<br> | [listenPort] = theport that will listen for client connections.  E.g. jbase\_agent -p 20003<br> |
| -R [bufferSize]--read\_buf\_size=[bufferSize]<br> | Set read buffer size (in bytes) to [bufferSize]. If not specified uses default buffer size.<br> |
| -W [bufferSize]--write\_buf\_size=[bufferSize]<br> | Set write buffer size (in bytes) to [bufferSize]. If not specified uses default buffer size.<br> |


- Windows will receive prompt to allow access to ports for OS firewall
- Linux will need to open ports for OS firewall


**Creating your demo account and REST file**
1. Create the jBASE account DEMO\_REST

```
JBASEADM ~ -->CREATE-ACCOUNT DEMO_REST 
Account 'DEMO_REST' created.jsh  
JBASEADM ~ -->LOGTO DEMO_REST 
jsh DEMO_REST ~ -->PWD 
C:\jBASE\DEMO_REST 
jsh DEMO_REST ~ --> 
```

2. Create WDB.RESOURCE file in the DEMO\_REST account

```
jsh DEMO_REST ~ -->CREATE-FILE WDB.RESOURCE 1 51 
[ 417 ] File WDB.RESOURCE]D created , type = J4 
[ 417 ] File WDB.RESOURCE created , type = J4 
```

3. Edit the WDB.RESOURCE file with JED.  Enter edit mode by pressing Enter and adding the highlighted data below:

```
jsh DEMO_REST ~ -->JED WDB.RESOURCE API*HELLOWORLD 
File WDB.RESOURCE , Record 'API*HELLOWORLD' Insert 14:26:12 
Command-> 
0001 P 
0002 TEST HELLO WORLD 
0003 HELLOWORLD 
0004 
0005 1 
0006 1 
 End Of Record 
```

4. Save and exit by pressing Esc and entering FI into the command line



**CONFIGURE JAGENT**
1. Identify the path of your demo account, keep note of it for step #3

```
jsh DEMO_REST ~ -->PWD 
C:\jBASE\DEMO_REST 
jsh DEMO_REST ~ --> 
```

2. Open jSHELL  and change directories to the Current Version directory

```
jsh DEMO_REST ~ -->CD C:\JBASE\CURRENTVERSION\CONFIG 
```

3. Open JED and edit JAGENT\_CONFIG file, adding the highlighted information below in lines 100-102

```
jsh DEMO_REST C:\JBASE\CURRENTVERSION\CONFIG -->JED JAGENT_CONFIG 
File . , Record 'JAGENT_CONFIG'         Insert 15:14:36 
Command-> 
0001 # 
0002 # Configuration file for jAgent 
0003 # 
0004 
0005 [MAIN] 
**Skip to line 98** 
0098 ; Set up the "account" environment variables. 
0099 HOME=%CURDIR% 
0100 PATH=%HOME%\bin;%PATH%;C:\JBASE\DEMO_REST\BIN 
0101 JBCOBJECTLIST=%HOME%\lib;C:\JBASE\DEMO_REST\LIB 
0102 JEDIFILEPATH=%HOME%;C:\JBASE\DEMO_REST 
0103 JEDIFILENAME_MD=%HOME%\MD 
```

4. Save and exit by pressing Esc and entering FI into the command line

**Create your REST Program**

1. Create your REST program file

```
jsh DEMO_REST ~ -->CREATE-FILE BP TYPE=UD 
[ 417 ] File BP]D created , type = UD 
[ 417 ] File BP created , type = UD 
```

2. Create your REST program record

```
JED BP HELLOWORLD 
NEW *File BP , Record 'HELLOWORLD' Insert 14:46:48 
Command->0001 CALL WSEND("HELLO FROM LINE ":@USER.NO) 
0002 
```

3.Save and exit by pressing Esc and entering FI into the command line

4. Compile and catalog your program BP HELLOWORLD

```
jsh DEMO_REST ~ -->BASIC BP HELLOWORLD 
HELLOWORLD 
BASIC_10.c 
Source file HELLOWORLD compiled successfully 
jsh DEMO_REST ~ -->CATALOG BP HELLOWORLD 
HELLOWORLD 
Object HELLOWORLD cataloged successfully 
```

4. Verify program BP HELLOWORLD runs

```
jsh DEMO_REST ~ -->HELLOWORLD 
Content-type: application/json 
Cache-Control: no-cache 
HELLO FROM LINE 10 
```

5. Initiate jAgent session

```
jsh DEMO_REST ~ -->CD C:\JBASE\CURRENTVERSION\ 
jsh DEMO_REST C:\JBASE\CURRENTVERSION -->JBASE_AGENT  
--config CONFIG\JAGENT_CONFIG 
(5756|12660) NOTICE starting up jAgent,  
Process Per Connection mode, listening on port 20002 
, c:\zumasys\src\international\5.6.x\jagent\ 
SocketAcceptor.h +63 
```

6. Keep the terminal session open and open an Internet browser and browse to:

- [<u>http://localhost:20002/api/helloworld</u>](http://localhost:20002/api/helloworld)


7. Once finished, close the browser and enter Ctrl + C to terminate jAgent session
