# jRFS EXAMPLE

**Created At:** 4/13/2018 12:22:37 PM  
**Updated At:** 4/19/2018 12:22:35 PM  
**Original Doc:** [307836-jrfs-example](https://docs.jbase.com/44204-remote-files/307836-jrfs-example)  


## Description 

This is an example of how to configure jrfs with Linux Server and a Windows client.  For this example;

- Client Username on the Client PC is jdean
- Username on the server running the jRFS daemon is jason


### Initial server side configuration

Firstly we need to make sure the jRFS service is in the /etc/services file. Log in as root and vi the /etc/services file, if an entry already exists for jRFS then make note of the port number used, if not then create the following jRFS entry, then write the file back:

```
jRFS 50003/tcp # jRFS Server 
```

Now we need to be able to see all the tracing information when initially setting up the server so we can track down any configuration issues. The $JBCRELEASEDIR/jnet\_config file is modified first to :

```
accesschk=off 
trace=on 
debug=on 
display=on 
#tracemask=0x000f 
log=on 
logfile=/home/jason/jnet.log 
```



We have set accesschk to off so we do not complicate the setting up of the remote connection with more security. The $JBCRELEASEDIR/jrfs\_config file is modified next to :

```
trace=on 
debug=on 
display=on 
#tracemask=0x000f 
log=on 
logfile=/home/jason/jrfs.log 
```



Now we will create a directory called remote and create a J4 file in that directory called REMFILE.

```
mkdir remote 
cd remote 
CREATE-FILE REMFILE 1 1  13 
```



Now we do:

```
export JEDIFILEPATH=/home/jason/remote 
jRFS –ib 
```



This has now started the jRFS Server program. To check it started ok we:

```
cat jnet.log 
```



to display something like:

```
Mar 7 16:16:38:jason:13194[Accept] accept request using host , server jRFS 
Mar 7 16:16:38:jason:13194[GetAddr] find addr for host , server jRFS 
Mar 7 16:16:38:jason:13194[GetAddr] initial host name 
Mar 7 16:16:38:jason:13194[GetAddr] host name null string 
Mar 7 16:16:38:jason:13194[GetAddr] looking for server jRFS by name 
Mar 7 16:16:38:jason:13194[GetAddr] server name jRFS found 
Mar 7 16:16:38:jason:13194[GetAddr] server using port 50003 
Mar 7 16:16:38:jason:13194[GetAddr] transport address : 0200c35300000000 
Mar 7 16:16:38:jason:13194[Accept] accepting on handle 3 
```



```
cat jrfs.log 
```

Should display something like:

```
Mar 7 16:16:38:13194[Init] Server: INIT request
```



### Client Side Configuration 

Now the server has started, lets move onto the windows client. Got to the windows\system32\drivers\etc directory in windows explorer and edit the services file in notepad. Look for the jRFS entry, if it exists make sure that it matches the port number on the server. If it doesn’t exist then add the following line:

```
jRFS             50003/tcp         # jRFS Server 
```

Next we need to be able to see all the tracing information when initially setting up the client so we can track down any configuration issues. You can use notepad, jed or any other text editor to modify these files.

The %JBCRELEASEDIR%\jnet\_config file is modified first to the following:

```
trace=on 
debug=on
display=on 
#tracemask=0x000f 
log=on logfile=c:\jnet.log 
```



The %JBCRELEASEDIR%\jrfs\_config file is modified next to :

```
trace=on 
debug=on 
display=on 
#tracemask=0x000f 
log=on 
logfile=c:\jrfs.log 
```



Now we will create a remote Stub File to allow us to try and access the remote file we created on the server. In your case you will need to make sure you use the machine name/IP address of your server, the ones used in this example are of machines available to the author of this document.

Use notepad or jed to create a file called REM in the directory where you want to do the test. In this case it is c:\home\REM. Put the information relevant to your machine in place of the addresses used here.

```
JBC__SOB JediInitREMOTE REMFILE 10.44.5.37 
```

Once this has been filed, any attempt to access with any jBASE command will try to access the file on the remote machine. (So using jed again will trigger the remote jEDI, if you think you have made a mistake use jed . REM)

Next we will use the same method to create the dictionary. Use jed or notepad to create c:\home\REM]D:

```
JBC__SOB JediInitREMOTE REMFILE]D 10.44.5.37 
```

Now comes the first test of the remote file. In this case I know it will fail as the jnet\_map file has yet to be configured. But doing this initial test will aid you in working out what is required in the jnet\_map file.

```
LIST REM 
```

should get something similar appearing on your screen as:

```
6632[Open] Client: Shared object detected 
6632[Open] Client: Optional arguments REMFILE 10.44.5.37 
6632[Open] Client: CONNECT request, RemoteAccount -, RemoteFileName REMFILE, Host 10.44.5.37, Server jRFS 
6632[Open] Client: allocate file handles 
6632[Open] Client: Check if Host 10.44.5.37 already connected 
6632[Open] Client: Testing table pointer 0
6632[Open] Client: Testing table pointer 1 
6632[Open] Client: Testing table pointer 2 
6632[Open] Client: Testing table pointer 3 
6632[Open] Client: Testing table pointer 4 
6632[Open] Client: Testing table pointer 5 
6632[Open] Client: Testing table pointer 6 
6632[Open] Client: Testing table pointer 7 
6632[Open] Client: Testing table pointer 8 
6632[Open] Client: Testing table pointer 9 
6632[Open] Client: No Match find jfree host entry 
6632[Open] Client: CONNECT entry 1 allocated to Host 10.44.5.37 
6632[Connect] connect request for host 10.44.5.37, server jRFS 
6632[Connect] HostId not null 10.44.5.37 
6632[GetUser] GetUserName succesful, username jdean, size 6 
6632[Connect] RemoteId null defaulted to User jdean 
6632[NameMap] mapping host 10.44.5.37, server jRFS, user jdean, client jdean 
6632[NameMap] searching C:\jbase4.1\config\jnet_map for map string 'LOCAL:10.44.5.37 jRFS jdean jdean' 
6632[NameMap] checking entry 
6632[NameMap] rechecking entry 
6632[NameMap] no entry found for map string 
6632[GetAddr] find addr for host 10.44.5.37, server jRFS 
6632[GetAddr] initial host name 10.44.5.37 
6632[GetAddr] Initial HostName 10.44.5.37 
6632[GetAddr] using dot host name 10.44.5.37 
6632[GetAddr] looking for server jRFS by name 
6632[GetAddr] server name jRFS found 
6632[GetAddr] server using port 50003 
6632[GetAddr] transport address : 0200c3530a2c0525 
6632[Connect] initial socket connect successful, fd 1668 
6632[ChkConnect] creating connect request info 
6632[ChkConnect] connect info Host 10.44.5.37, User jdean, Remote jdean, Server jRFS 
6632[ChkConnect] ConnectStr:10.44.5.37jdeanjdeanjRFS 
6632[ChkConnect] EncryptedStr:10.44.5.37jdeanjdeanjRFS 
6632[ChkConnect] sending connect request 
6632[ChkConnect] connect request hdr sent, Tx'ed 40 
6632[ChkConnect] sending str string, Tx'ed 24 
6632[ChkConnect] waiting for connect confirmation 
6632[ChkConnect] recieving confirmation response, Rx'ed 40 
6632[ChkConnect] check for disconnect magic 
6632[ChkConnect] disconnect detected , connection refused 
6632[DisconSeen] confirming disconnect, fd 1668 
6632[DisconSeen] sent disconnect confirmation, Tx'ed 40 
6632[Connect] connect check failed 
6632[Disconnect] disconnect request, fd -1 
6632[Disconnect] disconnected already, handle invalid 
6632[Open] Client: Host 10.44.5.37 connect request failed , errno -1 
6632[Open] Client: Shared object detected 
6632[Open] Client: Optional arguments REMFILE]D 10.44.5.37 
6632[Open] Client: CONNECT request, RemoteAccount -, RemoteFileName REMFILE]D, Host 10.44.5.37, Server jRFS 
6632[Open] Client: Check if Host 10.44.5.37 already connected 
6632[Open] Client: Testing table pointer 0 
6632[Open] Client: Testing table pointer 1 
6632[Open] Client: Testing table pointer 2 
6632[Open] Client: Testing table pointer 3 
6632[Open] Client: Testing table pointer 4 
6632[Open] Client: Testing table pointer 5 
6632[Open] Client: Testing table pointer 6 
6632[Open] Client: Testing table pointer 7 
6632[Open] Client: Testing table pointer 8 
6632[Open] Client: Testing table pointer 9 
6632[Open] Client: No Match find jfree host entry 
6632[Open] Client: CONNECT entry 1 allocated to Host 10.44.5.37 
6632[Connect] connect request for host 10.44.5.37, server jRFS 
6632[Connect] HostId not null 10.44.5.37 
6632[GetUser] GetUserName succesful, username jdean, size 6 
6632[Connect] RemoteId null defaulted to User jdean 
6632[NameMap] mapping host 10.44.5.37, server jRFS, user jdean, client jdean 
6632[NameMap] searching C:\jbase4.1\config\jnet_map for map string 'LOCAL:10.44.5.37 jRFS jdean jdean' 
6632[NameMap] checking entry
6632[NameMap] rechecking entry 
6632[NameMap] rechecking entry 
6632[NameMap] no entry found for map string 
6632[GetAddr] find addr for host 10.44.5.37, server jRFS 
6632[GetAddr] initial host name 10.44.5.37 
6632[GetAddr] Initial HostName 10.44.5.37 
6632[GetAddr] using dot host name 10.44.5.37 
6632[GetAddr] looking for server jRFS by name 
6632[GetAddr] server name jRFS found 
6632[GetAddr] server using port 50003 6632[GetAddr] transport address : 0200c3530a2c0525 
6632[Connect] initial socket connect successful, fd 1668 
6632[ChkConnect] creating connect request info 
6632[ChkConnect] connect info Host 10.44.5.37, User jdean, Remote jdean, Server jRFS 
6632[ChkConnect] ConnectStr:10.44.5.37jdeanjdeanjRFS 
6632[ChkConnect] EncryptedStr:10.44.5.37jdeanjdeanjRFS 
6632[ChkConnect] sending connect request 6632[ChkConnect] connect request hdr sent, Tx'ed 40 
6632[ChkConnect] sending str string, Tx'ed 24 6632[ChkConnect] waiting for connect confirmation 
6632[ChkConnect] recieving confirmation response, Rx'ed 40 
6632[ChkConnect] check for disconnect magic 
6632[ChkConnect] disconnect detected , connection refused 
6632[DisconSeen] confirming disconnect, fd 1668 
6632[DisconSeen] sent disconnect confirmation, Tx'ed 40 
6632[Connect] connect check failed 6632[Disconnect] disconnect request, fd -1 
6632[Disconnect] disconnected already, handle invalid 
6632[Open] Client: Host 10.44.5.37 connect request failed , errno -1 
No file name could be found for your query
```



The lines we are interested in at this time are the ones with the map string:

'LOCAL:10.44.5.37 jRFS jdean jdean'

Using this information (Remember your address and usernames will be different), we will now edit the %JBCRELEASEDIR%\jnet\_map file and add the following to the end. Make sure there is a blank line at the end of the document. This is required to make the file a valid text file. Without this, you may notice that the string is still not found:

```
LOCAL:10.44.5.37 jRFS jdean jdean 
REMOTE:10.44.5.37 jRFS jason 
```

Now we will try the

```
LIST REM 
```

again. This time you should get lots of trace messages and end up with:

```
PAGE 1 
REM........... 
No Records Listed 
```

If you get the same than congratulations, you’ve set up a remote file. If not then look at the log files on the server and the client to track down what went wrong.

Now we have setup and tested our jRFS connection, there is a much easier way to create files from the client end without the need for creating the files and stub files manually. This is via the CREATE-FILE command. Let’s do it now (Remember to change the locations and addresses to match your machine setup and although the command seems to be on multiple lines below, it does, in fact, need to be typed in as one line):

```
CREATE-FILE NEWREM TYPE=REMOTE HOSTNAME=10.44.5.37 FILEREF=NEWREM FILENAME="/home/jason/remote/NEWREM" DICTMOD=1 DATAMOD=1 
```

If you check on the server, you should see in the /home/jason/remote directory (Or your equivalent directory) hash files called NEWREM and NEWREM]D And in your local directory, you will find stub files NEWREM and NEWREM]D.



Back to [Remote Files](306074-remote-files)
