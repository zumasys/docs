# Troubleshooting

<PageHeader />

**Created At:** 5/18/2018 7:39:31 PM  
**Updated At:** 5/29/2018 8:41:36 PM  
**Original Doc:** [317524-introduction-to-troubleshooting-mvconnect](https://docs.zumasys.com/36307-mv-connect/317524-introduction-to-troubleshooting-mvconnect)  
**Original ID:** 317524  
**Internal:** No  


## Description 

Web calls all run in the background making them very difficult to debug when things are not working correctly.  This document will show you the tools and techniques to figure out what is going on.



### General troubleshooting techniques

MVConnect is basically exposing pick subroutines out via a web server.  When something is not working we start at the easiest possible issue and then move on to more difficult issues.

1. Is the Web server running?
1. Is the Web server able to talk to Pick?
1. Is our code actually working




## Is the Web server running?

There are two different web servers for MVConnect.  On jBase jAgent can be the web server and is able to call directly into jBase using jRemote functions.  On other platforms a C based webserver called MVAppsvr is supplied that launches into Pick by running the pick executable (d3tcl on D3 for example, uv on universe) and communicating with that service.  Due to these differences debugging issues are different for both these platforms.  It is important to note that the MVAppsvr multi-platform version can also run on jBase.  You should determine which one you are running if you are on jBase.  On linux this can be determined by looking in /usr/local/mvappsvr and on windows look for MVAPPSVR in your services list.

## Table of Contents

* [Web Server](./web-server/README.md)
* [WDEBUG](./wdebug/README.md)
  
Back to [MV Connect Manual](./../README.md)
