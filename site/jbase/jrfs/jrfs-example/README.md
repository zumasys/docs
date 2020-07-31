# jRFS Example

<PageHeader />

## Description  

With this example we will setup two jBASE linux machines.  One will act as the server and the other the client.

### Initial server configuration

We need to define what port jRFS will use both as a client and a server.  The best way to do this is to define it in the $JBCRELEASEDIR/jrfs_config file.

```bash
serverport = 5001
```

On linux you can add a jRFS service to /etc/services

```bash
jRFS 5001/tcp # jRFS Server
```

Now we need to be able to see all the tracing information when initially setting up the server so we can track down any configuration issues. The $JBCRELEASEDIR/jnet\_config file is modified first to :

```notepad
accesschk=off
trace=on
debug=on
display=off
#tracemask=0x000f
log=on
logfile=/tmp/jnet.log
```

We have set accesschk to off so we do not complicate the setting up of the remote connection with more security. The $JBCRELEASEDIR/jrfs\_config file is modified next to :

```
trace=on
debug=on
display=off
serverport=5001
#tracemask=0x000f
log=on
logfile=/tmp/jrfs.log
```

Lets LOGTO JBASEADM and create a demo.file

```
LOGTO JBASEADM
jsh JBASEADM ~ --> MAKE-DEMO-FILE 200 DEMO.FILE JD 
```

Now we do:

```
jsh JBASEADM ~ --> jRFS –ib
```

This has now started the jRFS Server program. To check it started ok we:

```
cat /tmp/jnet.log
```

to display something like:

```
Mar 7 16:16:38:jbase:13194[Accept] accept request using host , server jRFS
Mar 7 16:16:38:jbase:13194[GetAddr] find addr for host , server jRFS
Mar 7 16:16:38:jbase:13194[GetAddr] initial host name
Mar 7 16:16:38:jbase:13194[GetAddr] host name null string
Mar 7 16:16:38:jbase:13194[GetAddr] looking for server jRFS by name
Mar 7 16:16:38:jbase:13194[GetAddr] server name jRFS found
Mar 7 16:16:38:jbase:13194[GetAddr] server using port 5001
Mar 7 16:16:38:jbase:13194[GetAddr] transport address : 0200c35300000000
Mar 7 16:16:38:jbase:13194[Accept] accepting on handle 3
```

```
cat jrfs.log
```

Should display something like:

```
Mar 7 16:16:38:13194[Init] Server: INIT request
```

### Client Side Configuration  

On the client jBASE linux machine we make the same changes as we did on the server

We need to define what port jRFS will use both as a client and a server.  The best way to do this is to define it in the $JBCRELEASEDIR/jrfs_config file.

```bash
serverport = 5001
```

On linux you can add a jRFS service to /etc/services

```bash
jRFS 5001/tcp # jRFS Server
```

Now we need to be able to see all the tracing information when initially setting up the server so we can track down any configuration issues. The $JBCRELEASEDIR/jnet\_config file is modified first to :

```notepad
accesschk=off
trace=on
debug=on
display=off
#tracemask=0x000f
log=on
logfile=/tmp/jnet.log
```

We have set accesschk to off so we do not complicate the setting up of the remote connection with more security. The $JBCRELEASEDIR/jrfs\_config file is modified next to :

```
trace=on
debug=on
display=off
serverport=5001
#tracemask=0x000f
log=on
logfile=/tmp/jrfs.log
```

Now we will create a remote Stub File to allow us to try and access the remote file we created on the server. In your case you will need to make sure you use the machine name/IP address of your server, the ones used in this example are of machines available to the author of this document.


```
LOGTO JBASEADM
jsh JBASEADM ~ --> JED . DEMO.FILE
1> JBC__SOB JediInitREMOTE DEMO.FILE IP.OF.SERVER
(SAVE) - JBC__ is two underlines!!!
jsh JBASEADM ~ --> JED . DEMO.FILE]D
1> JBC_SOB JediInitREMOTE DEMO.FILE]D IP.OF.SERVER
(SAVE)
jsh JBASEADM ~ --> LIST DEMO.FILE
```

If you are having issues look at the log files on both systems and look for errors. You should see activity in both files.  If you do not see activity on the server you either do not have the ports/ip's setup correctly or you have firewall issues.

Back to [Remote Files](./../jbase-remote-file-service-%28jrfs%29)

<PageFooter />
