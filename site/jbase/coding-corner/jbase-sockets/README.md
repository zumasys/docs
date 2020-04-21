# jBASE Sockets

<PageHeader />

jBASE offers some internal functions to gain access to Sockets.  jBASE socket functions are built in C based functions and can be accessed by using DEFC and importing the functions.

- DEFC VAR SOCKOPEN(handle, ip, port, timeout, setting)
- DEFC VAR SOCKCLOSE(handle, setting)
- DEFC VAR SOCKSEND(client\_handle, data\_to\_send, setting)
- DEFC VAR SOCKRECV(client\_handle, recieve\_message, setting)
- DEFC VAR SOCKSERV(port, server\_handle, conDetails)
- DEFC VAR SOCKACCEPT(server\_handle, client\_handle\_number, setting)
- DEFC VAR SOCKBIND(server\_handle, client\_handle\_number, client\_handle, setting)
- DEFC VAR GETSOCKBASE(server\_handle)
- DEFC VAR GETSERVERHANDLE(server\_handle, ctx)

Here is a github project with a good example on how to create both a socket client and server.

[https://github.com/zumasys/jbase\_sockets](https://github.com/zumasys/jbase_sockets)

[Back to Coding Corner](./../README.md)

<PageFooter />
