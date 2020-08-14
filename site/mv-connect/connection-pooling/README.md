# Connection Pooling

<PageHeader />

Connection pooling is a technique where you limit the number of concurrent connections to your back end service.  Users are not given an error page although and are pooled and are given connections as they are available.  This is done in multiple products as you may have resource restrictions (number of user licenses for example) and even more important performance can actually be decreased when you allow too many concurrent processes.

With MVConnect we decided to not build in connection pooling and instead recommend using off the shelf products.  In fact, we recommend never putting the MVConnector web server directly on the internet and instead it should always be proxied behind another webserver/proxy.  This is the recommend Tomcat, Node and other Frameworks recommend.

## Apache

Apache has a mod\_proxy module that can reverse proxy and create connection pools.  The connection pooling feature apparently only works on certain Apache versions due to something called MPM and/or Prefork.

```
ProxyRequests Off
ProxyTimeout 60
ProxyVia on
ProxyPass "/api" "http://127.0.0.1:8180/api" max=5
```

In this example we are telling Apache any request to /API is to be sent to MVConnector (if you are jBase the default port is 20002).  The max setting on the end tells Apache to use connection pooling and to not allow more than 5 concurrent calls.  Again this feature appears to not work on some Apache configurations due to process vs thread configurations.  The reverse-proxy directive although should work.

## NGINX

NGINX is a newer webserver competing now with Apache.  It is thread-based and in many ways faster than Apache. The [ngx\_http\_upsream\_module](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#upstream) does the same thing as the Apache mod\_proxy.  Connection pooling appears to be only available now in the commercial product.  See the link above for the max\_conns directive.

![265134-connection-pooling: 1501364364091](./1501364364091.jpg)

## HAPROXY

[HAProxy](http://www.haproxy.org/) is a standalone Linux based proxy server that is free and does have connection pooling. Haproxy can be installed on Centos with yum: yum install HAProxy.

Here is a simple config file and HAProxy running.

```bash
[root@localhost haproxy]# cat haproxy.cfg
global
maxconn 256

defaults
log     global
mode    http
option  httplog
option  dontlognull
retries 3
option redispatch
timeout connect  5000
timeout client  10000
timeout server  10000

frontend httptraffic
bind *:80
default_backend servers

backend servers
server web1 127.0.0.1:8180 maxconn 5
[root@localhost haproxy]# haproxy -f haproxy.cfg -db -V
```

In this example, we have HAProxy listening on 80 (this only works if Apache is not running).  It will proxy calls to MVConnect and will limit concurrent connections to 5.  You could also proxy HAproxy behind Apache or IIS.

Back to [MV Connect Manual](./../README.md)

<PageFooter />
