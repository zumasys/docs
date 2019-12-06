# Creating Remote Pointers

**Created At:** 4/13/2018 10:43:07 AM  
**Updated At:** 4/15/2019 7:52:28 AM  


## Description 

As an alternative to creating STUB-files on the client, remote pointers (R-pointers) can be used to access remote files. The idea of R-pointers is based on the same principles as the STUB-files . They contain basic information about the server host and the remote file.

R-pointers are defined as an entry inside the SYSTEM file, which again may be accessed with a Q-pointer from the master dictionary (MD/VOC) file.

In the SYSTEM file, a record must be created with the following information:

```
0001 R 
0002 <Account name entry in Remote SYSTEM file>
0003 
0004 <Hostname of Remote machine>
```



In the MD file, a record must be created with the following information:

```
0001 Q 
0002 <Local system account name entry>
0003 <Remote filename>
```



As can be noticed, an R-pointer does not point directly to a remote file but instead it points to an account entry in the remote SYSTEM file. This entry on the remote SYSTEM file must again have a local pointer to the remote file.

Environment variables JEDIFILENAME\_MD and JEDIFILENAME\_SYSTEM have to be set accordingly on client and server side.




> ### Note: 
> 
> The account name in the SYSTEM file on the client, must also exist in the SYSTEM file on the SERVER, pointing to a valid account location.




Back to [Remote Files](306074-remote-files).
