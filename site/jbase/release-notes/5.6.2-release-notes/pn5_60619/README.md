# PN5_60619

**Created At:** 10/2/2017 2:28:17 PM  
**Updated At:** 11/22/2017 11:03:35 AM  
**Original Doc:** [pn5_60619](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60619)  
**Original ID:** 279074  
**Internal:** No  


### Description

Utilities: jbase\_agent accepts invalid port ranges, less than 1025 and greater than 65535



### Previous Release Behavior

Accepted any port number.

Defaulted to 20002 if the port number was non-numeric.



### Current Release Behavior

Reject the port number if it's less than 1024 as this can cause many issues with other OS services.

Reject the port number if it's greater than 65534, which is the maximum number for TCP.

```
C:\home>jbase_agent -p aaaa
parse_args: Invalid port number, must be a between 1025 - 65534.
```

```
C:\home>jbase_agent -p 123
parse_args: Having the port number less than 1024 can cause many issues.
```

```
C:\home>jbase_agent -p 1231111111
parse_args: port number is to high! (max 65534)
```

```
C:\home>jbase_agent -p 10006
(8592|8672) NOTICE starting up jAgent, Process Per Connection mode, listening on port 10006, c:\src\remote\international\development\jagent\SocketAcceptor.h +63
```
