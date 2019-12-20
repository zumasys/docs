# jAgent Administration

**Created At:** 8/29/2018 1:49:08 AM  
**Updated At:** 11/13/2019 1:53:53 AM  
**Original Doc:** [336525-jagent-administration](https://docs.jbase.com/30312-jagent/336525-jagent-administration)  


# 


jAgent is a standalone program that you can start from any command prompt to launch a jAgent Service.  The actual program is located in the jBase install directory under the bin directory.  You can run multiple copies of jAgent each with it's own configuration.  jAgent can be configured either thru command line switches or thru a configuration file.  A default configuration file is located in the jbase install directory under configuration and is called jagent\_config.  jAgent can also be configured to run as a service.

## 


## STARTING AND CONFIGURING jAGENT:



**COMMAND SYNTAX:**

```
jbase_agent [service options] [options]
```

**COMMAND ELEMENTS:**

- **Service Options -** install, start, stop and remove jagent service.
- **Options -** configure jagent behavior. Most options have both long and short forms. For convenience, most options can be specified in a configuration file, and only the --config option is needed on the command line.



| **Option** <br> | **Description** <br> |
| --- | --- |
| --config=[config file name]<br> | Use [config file name] to specify jagent options. When using the jBASE HTTP API (RESTful services), a configuration file is required, as it specifies how HTTP requests are handled.  E.g. jbase\_agent --config=$JBCRELEASEDIR/config/ jagent\_config<br>You must put a = sign in the switch.  If you do not define a config file then jagent will look for one in your jbase install directory config/jagent\_config.  Therefore jagent\_config --config myconfig will not use "myconfig" but will pull the default config due to the missing equal sign.<br> |
| -A [mode]    --authentication=[mode]<br> | [mode] = the mode (none|user|account) used to authenticate client connections. This option is ignored for jBASE HTTP connections.  E.g. jbase\_agent -A user It is recommended you do not use none for non HTTP sessions.  <br> |
| -b [interfaceName]--bind\_address=[interfaceName]<br> | Bind to a specific local interface. If not specified then bind to all local interfaces.  e.g. jbase\_agent -b 1.2.3.4<br> |
| -c [path to certificate]--certificate=[path to certificate]<br> | [path to certificate] = the path to a valid x509 certificate.  Note --private\_key is mandatory with this option.<br> |
| -F<br> | Create log files for each client connection (P[pid].log)<br> |
| -h<br> | Print this screen<br> |
| -k [path to private key]--private\_key=[path to private key]<br> | [path to privatekey] = the path to a valid private key.  Certificate is mandatory with this option.  E.g. jbase\_agent --private\_key=key.pem --certificate=cert.pem<br> |
| L [logLevel]--loglevel=[logLevel]<br> | [logLevel] = a numeric log level that determines the detail to be logged (default level is LOG\_NOTICE).0 NO LOGGING1  LOG\_TRACE2  LOG\_DEBUG3 LOG\_INFO4  LOG\_NOTICE5  LOG\_WARNING6  LOG\_ERROR7  LOG\_CRITICAL8  LOG\_ALERT9  LOG\_EMERGENCY<br> |
| -n [serviceName]--service\_name=[serviceName]<br> | [serviceName] = name of the service to install, start, stop or remove. (windows)<br> |
| -N<br> | Do not set TCP\_NO\_DELAY. Useful for performance tuning.<br> |
| -p [listenPort]--port=[listenPort]<br> | [listenPort] = theport that will listen for client connections.  E.g. jbase\_agent -p 20003<br> |
| -R [bufferSize]--read\_buf\_size=[bufferSize]<br> | Set read buffer size (in bytes) to [bufferSize]. If not specified uses default buffer size.<br> |
| -W [bufferSize]--write\_buf\_size=[bufferSize]<br> | Set write buffer size (in bytes) to [bufferSize]. If not specified uses default buffer size.<br> |




##  RUNNING jAGENT AS A SERVICE:

When running jAgent as a service on Windows, the startup directory will be C:\Windows\System32. On non-Windows platforms, it will be the current directory of the process that starts the jAgent service. If you need jAgent to run in a different directory, you can set the HOME environment variable in the jAgent configuration file [ENVIRONMENT] section.  The example below uses the DEMO\_REST account used in the Introduction to jAgent REST Services.



```
[ENVIRONMENT] 
; Use the standard jbase_env script to set up the jBASE 
; system environment variables. 
; Set up the "account" environment variables. 
;HOME=$CURDIR 
HOME=/opt/jbase/DEMO_REST 
PATH=$HOME/bin:$PATH 
JBCOBJECTLIST=$HOME/lib 
JEDIFILEPATH=$HOME 
JEDIFILENAME_MD=$HOME/MD 
```

*Note: APPDIR and CURDIR if not set refer to the  location of the **jbase\_agent** executable and the current directory respectively.*

#### jAgent Environment Variables

The jbase\_agent process inherits the environment from the invoking process. If a config file is used at startup then additional environment variables can be set/modified in the [ENVIRONMENT] section (see above).

## STARTING jAGENT AS A SERVICE:

The service options allow jAgent to be installed and started as a Win32 Service on Windows platforms, and as a daemon on Unix platforms.

**Windows Service**

jbase\_agent **install** [-n &lt;Service Name&gt;] &lt;options&gt;

jbase\_agent **start** [-n &lt;Service Name&gt;]

jbase\_agent **stop** [-n &lt;Service Name&gt;]

jbase\_agent **remove** [-n &lt;Service Name&gt;]

Note that jAgent Win32 services will send logger messages to the Windows **Event Log**. Changing the tracing level (option -L) is not applicable to a jAgent service and only error messages will be logged.

Example:

Using the DEMO\_REST account used in the Introduction to jAgent REST Services, the default location used by CREATE-ACCOUNT to create the DEMO\_REST account is C:\jbase, so the working directory for jAgent service would be C:\jbase\DEMO\_REST. That is the path to use for HOME in the jagent\_config file. The commands to start jAgent service:

```
; In this example it is using the default config.  It is recommend for production you copy this config to your application and reference that config file. 
; You must still setup all your environment stuff correctly in the [ENVIRONMENT]  area for your application

jbase_agent install --config=C:\jbase\CurrentVersion\config\jagent_config

jbase_agent start
```

**Unix Service**

On unix it is recommended you install jAgent as a systemd service.  This is a system administrator level duty.  It is best to be familiar with systemd and how scripts are configured.  Below is a sample.

```
;First create our scripts and our environment.
# cd /path/to/myscripts
# cp /opt/jbase/CurrentVersion/config/jagent_config ./jagent_20002_config
# cp /opt/jbase/CurrentVersion/jbase_env.sh ./jagent_20002.sh
# vi jagent_20002.sh
# add these two lines to the top of the script
export HOME=/path/to/jbase/account
cd $HOME
FI
# add to bottom of script
# jbase_agent --config=./jagent_20002.sh
FI
# run script to verify it is working
# ./jagent_20002.sh
```

When the service is working add a systemd script.

```
# sudo su
# useradd jagent
# usermod -g jbase jagent     # this is optional, but you must run jagent as a user that has correct permissions.  You must adjust the jbase group to be whatever group your platform users.
# cd /usr/lib/systemd/system
# vi jagent_20002.service
[Unit]
Description=systemctl service: jagent port 20002
After=network.target

[Service]
Type=simple
User=jagent
Restart=always
RestartSec=25
ExecStart=<path to your jagent_20002.sh

[Install]
WantedBy=multi-user.target
:FI

# systemctl daemon-reload                   ; This reloads systemd which will load your new config
# systemctl start jagent_20002.sh
# systemctl status jagent_20002.sh          ; verify it is running
● jagent_20002.service - systemctl service: jagent port 20002
Loaded: loaded (/usr/lib/systemd/system/jagent_20002.service; enabled; vendor preset: disabled)
Active: active (running) since Tue 2018-08-14 13:24:37 PDT; 1 weeks 2 days ago
Main PID: 19584 (jagent_20002.sh)
CGroup: /system.slice/jagent_20002.service
├─19584 /bin/bash /dbms/profilesource/jagent_20002.sh
└─19625 jbase_agent --config /dbms/profilesource/jagent_config

Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  IO: Command (20) OUTPUT , ResponseCOUNT.cpp +169
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  ResponseCOUNT: rc=0, ResponseCOUNT.cpp +267
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  IO: Command (4) RESET_PROCESS , ResponseCOUNT.cpp +169
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  ResponseCOUNT: rc=0, ResponseCOUNT.cpp +267
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  IO: Command (1) INITIALISE_PROCESS , ResponseCOUNT.cpp +169
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  ResponseCOUNT: rc=0, ResponseCOUNT.cpp +267
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  IO: Command (20) OUTPUT , ResponseCOUNT.cpp +169
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  ResponseCOUNT: rc=0, ResponseCOUNT.cpp +267
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  IO: Command (4) RESET_PROCESS , ResponseCOUNT.cpp +169
Aug 24 11:14:49 rrmjBase01 jagent_20002.sh[19584]: (10085|140213281888320) DEBUG  ResponseCOUNT: rc=0, ResponseCOUNT.cpp +267
# systemctl enable jbase_20002       ; # this will start jagent on reboots
```





## jAGENT CONFIGURATION FILE:

All jAgent options and settings can be specified in a configuration file. Use the **--config** command line option to specify the path to the configuration file. A default configuration file, ***jagent\_config***, can be found in the ***config*** directory under the jBASE release directory.

The jAgent configuration file is divided into sections, where section names are enclosed in square brackets. For example, the jBASE environment for jAgent is specified in the [ENVIRONMENT] section. Within each section, settings for that section are specified using name=value syntax. Names may not contain spaces, and are separated from the value using an equal sign. Spaces before or after the equal sign are ignored. Values may be enclosed in double-quotes, if desired. Any lines beginning with "#" or ";" are comments and are ignored when parsing the file. Section names and item names are not case sensitive.

The following sections are supported: [MAIN], [OPTIONS], [ENVIRONMENT], [HTTP], [HTTP\_RESOURCE], [HTTP\_CONTENT\_TYPE] and [HTTP\_MIME\_TYPE].

Comments in the sample jagent\_config file describe the various settings and options for each section.

Sample jagent\_config file:

```
#
# Configuration file for jagent
#

[MAIN]

; List the services that this instance of jagent will honor.
; Separate selections with commas. Possible choices are jremote,
; jodbc and http.
services=jremote,jodbc,http

; For Linux/Unix/AIX, specify the desired umask for jagent in octal.
umask=0002

#-----------------------------------------------------------------------#

[OPTIONS]

; Set the log level to a value from 0 to 7. Each lower level (except 0)
; includes all of the higher levels. This duplicates the -L (--logLevel)
; command line option.
;  0 = no logging
;  1 = trace - show code execution flow
;  2 = debug - mainly useful for debugging jagent
;  3 = info - show interesting information
;  4 = notice - show notices
;  5 = warning - show warnings
;  6 = errors - show any error conditions
;  7 = critical - show critical errors only
;loglevel = 4

; Set the authentication mode for jodbc and jremote connections.
; Available options are none, user or account. This duplicates the
; -A (--authentication) command line option.
;authentication = none

; If the hostname_lookups option is enabled, a reverse DNS lookup
; is performed on the IP address of incoming connections. If private
; IP addresses are used, there may be no reverse DNS available, and
; the lookup may require up to 5 seconds before it times out. Set
; this option to 'true' only if you need to resolve incoming IP
; addresses into actual host names. This option is not available
; as a command line option.
hostname_lookups = 0

; Disables the "nagle algorithm" for TCP connections. Setting this
; option to 'true' disables nagle, and may increase performance.
; This option duplicates the -N command line option.
;tcp_nodelay = 0

; Specify the port that jagent will listen on for incoming connections.
; The default port is 20002. This option duplicates the -p (--port)
; command line option.
;port = 20002

; If the server has multiple network interfaces, specify the IP address
; where jagent will listen for incoming connections. This duplicates
; the -b (--bind_address) command line option.
;bind_address = <IP address to listen on>

; For SSL connections, specify the path of the x509 certificate to
; use. When a certificate is specified, a private key must also be
; specified. This option duplicates the -c (--certificate) command
; line option.
;certificate = <path to certificate (.pem) file>

; For SSL connections, specify the path of the private key for the
; certificate being used. This option duplicates the -k (--private_key)
; command line option.
;private_key = <path to private key (.pem) file>

#-----------------------------------------------------------------------#

; The ENVIRONMENT section is used to set up the jBASE
; environment. This section automatically expands environment
; variables found in the value on the right of the equal sign
; when the variable is prefixed by '$' (Linux) or enclosed by
; '%' (Windows).
;
; You can "include" the standard jbase_env.cmd or jbase_env.sh
; script by using the !include directive, followed by the path
; of the script. !include processing is primitive, and any lines
; in the form of VAR=value, set VAR=value or export VAR=value
; are treated as environment variables.
;
; Before this section is processed, two special environment
; variables available: APPDIR, referencing the directory where
; the jagent executable exists (normally, the jBASE bin directory),
; and CURDIR, which refers to the current directory when jagent
; was started.

[ENVIRONMENT]

; Use the standard jbase_env script to set up the jBASE
; system environment variables.
!include $APPDIR/../jbase_env.sh

; Set up the "account" environment variables.
HOME=$CURDIR
PATH=$HOME/bin:$PATH
JBCOBJECTLIST=$HOME/lib
JEDIFILEPATH=$HOME
JEDIFILENAME_MD=$HOME/MD

; Disable debugger for common errors
JBASE_ERRMSG_ZERO_USED=2
JBASE_ERRMSG_NON_NUMERIC=2
JBASE_ERRMSG_DIVIDE_ZERO=2

; Log runtime errors to $JBCRELEASEDIR/tmp/jbase_error_trace (see documentation before enabling this)
;JBASE_ERRMSG_TRACE=1


#-----------------------------------------------------------------------#

; The HTTP section defines global options when jagent is used as
; an HTTP (REST) server.

[HTTP]

; Specify the maximum size of an incoming request to accept
;maxrequest = 100000

; Specify the value of the Cache-Control header when sending
; static content like html or image files.
cache_control=public

; By default, when a JBC subroutine is used as the resource for
; an HTTP request, the query string included on the URL (or in the
; body when an HTML form is POSTed) is parsed and the query string
; or form variables are passed in the request_vars and request_vals
; arguments. If this is not desired, set no_parse_qstring to 'true'.
no_parse_qstring = false

; Specify the default path to use if the URL path is '/'.
default_path = /api/wresttest

; Specify the default file name to use if the resource
; path ends in '/'.
;default_file = <your default file; eg. index.html>

; Specify the HTTP headers to pass to a JBC subroutine. The header names
; are converted to upper-case, prefixed with "HTTP_" and any dashes (-)
; are converted to underscores (_). For example, "User-Agent" is passed
; as "HTTP_USER_AGENT".
http_headers = Accept,Cookie,Connection,User-Agent,Referer,Host

#-----------------------------------------------------------------------#

; The HTTP_RESOURCE section maps a URL path to a server resource.
; The longest part of the URL path is matched against items in this
; section. Specify the URL path on left of the equal sign, and the
; local resource path or JBC subroutine name on the right. Except
; for the root path, the URL path never ends with a '/'.
;
; JBC subroutine resource:
; The resource name is the name of the subroutine with @ prefix,
; for example: /myapi=@MYSUB.
;
; Local directory:
; If the local directory path ends with a trailing directory separator
; ('/' or '\'), the tail of the URL path will be appended to the local
; directory path to form the final resource file name. If the URL
; path ends with '/', and a default_file is specified in the [HTTP]
; section, the default file name will be appended to the directory
; path to form the full path for the resource.
;
; Local file:
; Use the local path for the file to be used as the resource. If the
; URL path has a tail after the matched path, the tail is ignored.

[HTTP_RESOURCE]

;<URL path> = <@subname>
;<URL path> = <local directory>
;<URL path> = <local file>
;
; examples:
;/dbc  = @MY.HTTP.SUB
;/img  = C:\www\images\
;
; Use JAGENTWDBINIT subroutine for REST services
/api  = @JAGENTWDBINIT

#-----------------------------------------------------------------------#

; The HTTP_CONTENT_TYPE section is used to properly process
; binary or text content received in the body of an HTTP
; request. The content type on the left of the equal sign
; is matched with the first segment of the HTTP Content-Type
; header. Content type includes a sub-type using a slash
; to separate the main and sub-types. To match any sub-type,
; specify a '*' as the sub-type. For example,  text/* = text
; will treat any 'text' content type as text no matter what
; the sub-type might be.
;
; If a content type is defined as text, CR/LF in the request_body
; argument passed to the JBC subroutine will converted to @AM.
; Otherwise the request_body argument will be treated as binary
; data. Any content type not defined will be treated as binary.

[HTTP_CONTENT_TYPE]

text/*           = text
application/json = text
application/xml  = text
application/problem+json = text
application/problem+xml = text

#-----------------------------------------------------------------------#

;
; The HTTP_MIME_TYPE section associates file extensions for
; static content with a "mime type", which is sent in the
; HTTP response Content-Type header.
;
[HTTP_MIME_TYPE]
.default= "text/html"
txt     = "text/plain"
html    = "text/html"
htm     = "text/html"
gif     = "image/gif"
jpg     = "image/jpg"
jpe     = "image/jpg"
jpeg    = "image/jpg"
png     = "image/png"
swf     = "application/x-shockwave-flash"
mid     = "audio/midi"
midi    = "audio/midi"
kar     = "audio/midi"
xls     = "application/vnd.ms-excel"
ppt     = "application/vnd.ms-powerpoint"
gz      = "application/x-gzip"
tgz     = "application/x-gzip"
js      = "application/x-javascript"
css     = "text/css"
```

## 

