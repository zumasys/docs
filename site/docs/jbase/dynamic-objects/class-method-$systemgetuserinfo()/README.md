# Class Method: $system::getuserinfo()

**Created At:** 5/4/2018 9:54:09 AM  
**Updated At:** 5/4/2018 9:58:03 AM  
**Original Doc:** [class-method-system-getuserinfo](https://docs.jbase.com/42948-dynamic-objects/class-method-system-getuserinfo)  


## Description

The **getuserinfo()** method is used to obtain user information based on port number. It creates a sub-object with a property name of **user**. The **user** sub-object contains sub-objects of a specific port number or ALL active port numbers.

If no arguments are given then all port numbers will be created as sub-objects.

If a specific port number is specified then only that port number's information will be created as a single sub-object.

If an invalid port number is specified then the sub-object will be void of any properties.



## Return value

The total number of active ports.



## Examples

```
program userinfo
portno = sentence(1)
sys = new object("$system")
user_count = sys->getuserinfo(portno)
userinfo = sys->user
print "User count = ":user_count
crt userinfo->$tojson(5)
crt
```

The following shows the results of running this program when the only active ports are 6 and 24:

```
jsh ~ -->userinfo 6
User count = 1
{
    "6":{
        "port_number":6,
        "number_programs":2,
        "connect_time":152,
        "listen_time":2,
        "pid":10740,
        "account_name":"Jedi",
        "user_name":"Yoda",
        "os_name":"Yoda",
        "terminal_jbase":"ntcon",
        "terminal_os":"ntcon",
        "database":"default",
        "tty":"CONIN$",
        "language":"en_US",
        "memory_free":556112,
        "memory_used":181872,
        "thread_type":"Normal",
        "open_app":7,
        "open_os":5,
        "host_name":"Dagobah",
        "stats":{
            "open":11,
            "read":22,
            "write":6,
            "delete":2,
            "clearfile":0,
            "execute":5,
            "input":39,
            "transend":0,
            "transabort":0,
            "lock":0,
            "lock_blocked":0,
            "release":4,
            "release_file":0
        }
    }
}

jsh ~ -->userinfo 1
User count = 0
{

}

jsh ~ -->userinfo
User count = 2
{
    "6":{
        "port_number":6,
        "number_programs":2,
        "connect_time":166,
        "listen_time":1,
        "pid":10740,
        "account_name":"Jedi",
        "user_name":"Yoda",
        "os_name":"Yoda",
        "terminal_jbase":"ntcon",
        "terminal_os":"ntcon",
        "database":"default",
        "tty":"CONIN$",
        "language":"en_US",
        "memory_free":554864,
        "memory_used":182102,
        "thread_type":"Normal",
        "open_app":8,
        "open_os":6,
        "host_name":"Dagobah",
        "stats":{
            "open":13,
            "read":28,
            "write":8,
            "delete":2,
            "clearfile":0,
            "execute":7,
            "input":53,
            "transend":0,
            "transabort":0,
            "lock":0,
            "lock_blocked":0,
            "release":6,
            "release_file":0
        }
    },
    "24":{
        "port_number":24,
        "number_programs":1,
        "connect_time":158,
        "listen_time":3,
        "pid":12104,
        "account_name":"Jedi",
        "user_name":"Yoda",
        "os_name":"Yoda",
        "terminal_jbase":"ntcon",
        "terminal_os":"ntcon",
        "database":"default",
        "tty":"CONIN$",
        "language":"en_US",
        "memory_free":523728,
        "memory_used":181371,
        "thread_type":"Normal",
        "open_app":7,
        "open_os":5,
        "host_name":"Dagobah",
        "stats":{
            "open":7,
            "read":8,
            "write":1,
            "delete":2,
            "clearfile":0,
            "execute":1,
            "input":5,
            "transend":0,
            "transabort":0,
            "lock":0,
            "lock_blocked":0,
            "release":1,
            "release_file":0
        }
    }
}

jsh ~ -->
```



## Notes
