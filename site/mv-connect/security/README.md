# MV Connect Security

<PageHeader />

MV Connect is a lightweight web server that works as a transport layer to get inside your MV system.  It is not meant to be serving web pages directly on the internet.  Standard practice today is to run your application code as a standalone web container and then proxy your application behind a full feature web server.  This allows a central admin control security permissions, Certs, rules, maintenance, etc.

Here are a couple articles discussing this type of setup

* [Host ASP.NET Core on Linux with NGINX](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2)
* [Host ASP.NET Core on Linux with Apache](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2)
* [Configure Nginx Proxy Server For Tomcat 9 On Ubuntu 16.04 | 17.10 | 18.04](https://websiteforstudents.com/configure-nginx-proxy-server-for-tomcat-9-on-ubuntu-16-04-17-10-18-04/)
* [Quick Start Guides for Caddy](https://caddyserver.com/docs/quick-starts)

The recommended way to do this with MV Connect is to install NGINX, Caddy or Apache directly on the same box where MV Connect/jAgent is running.  You then setup a proxy in NGINX, Caddy or Apache to redirect traffic via localhost to MV Connect.

## Apache

Apache has a mod\_proxy module that can reverse proxy. The actual way to configure you settings is based on how your apache configuration files are setup.  A simple way to do this is to add these lines to the end of your /etc/httpd/httpd.conf file.  Set the port on the ProxyPass line to match the port where MVConnect/jAgent is running. By default MV Connect usually runs on 8180 while jAgent is usually running on 20002.

```
ProxyRequests Off
ProxyTimeout 60
ProxyVia on
ProxyPass "/api" "http://127.0.0.1:8180/api"
```

### NGINX

NGIX is a newer webserver competing now with Apache.  It is thread based and in many ways faster than Apache.  This example also shows how you can pass additional headers down to MV Connect.  This is often required if you need to know the Client's real IP address.  Since these are all proxies MV Connect will see NGINX or Apache as the source.  In this example we are setting a new header called X-Real-IP that will hold the clients real ip.

```
location /api/ {
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

       proxy_pass http://127.0.0.1:2002/api/;
       proxy_redirect off;
 }
```

### Caddy

Caddy is a cross-platform web server focused on automating traffic via HTTPS. It is implemented in Golang and is delivered as a single executable with no dependencies. This makes it extremely powerful and light weight which is perfect for scenarios like proxying MV Connect.

From [caddyserver.com](https://caddyserver.com/):

> Caddy simplifies your infrastructure. It takes care of TLS certificate renewals, OCSP stapling, static file serving, reverse proxying, Kubernetes ingress, and more.
> Its modular architecture means you can do more with a single, static binary that compiles for any platform.
> 
> Caddy runs great in containers because it has no dependencies—not even libc. Run Caddy practically anywhere.

To reverse-proxy MV Connect with HTTPS via Caddy, you simply need to run this command:

``` bash
caddy reverse-proxy --from subdomain.example.com --to localhost:8180
```

Due to the fact that Caddy will enforce HTTPS automatically and will also automatically provision certificates for you via LetsEncrypt, you do need to take care to have DNS for your domain (and/or subdomain, if used) setup.

### IIS

IIS has a URL Rewrite module that does the same function as the proxy.  Here are some good docs explaining the design. If you are on Windows and do not need IIS you can also download Apache or NGINX or Caddy for Windows and follow the above rules.

[Setup IIS with URL Rewrite as a reverse proxy for real world apps.](https://blogs.msdn.microsoft.com/friis/2016/08/25/setup-iis-with-url-rewrite-as-a-reverse-proxy-for-real-world-apps/)

### Encryption/HTTPS/SSL

All the above web servers have well documented ways to add Certs.  If this is internal only you can do a self signed cert.  A new great option is to use LetsEncrypt and install free certs.

[Let's Encrypt](https://letsencrypt.org/)

### Securing Resources

Normally with web services you establish a X-API-KEY header and all rest/web calls must pass that header with their API key to gain access.  MV Connect via WGETHEADER can allow the pick developer do this.  A better solution although is to implement this security directly in the web server.

#### NGINX

Here we have added a if statement that checks for a header X-API-KEY and it must match apipassword or the user gets a rejection.  You can put multiple if statements for different clients.  Your entire mvconnect server is now secured by your NGINX admin.

```
location /zgateway/vpsupply/api/ {

                if ($http_x_api_key !~* "apipassword") {
                        return 403;
                }
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

                proxy_pass http://127.0.0.1:20002/api/;
                proxy_redirect off;
        }
```

#### Apache

Here is the same feature in Apache.

```
<Location /api>

<If "%{HTTP:X-API-KEY} != '12345'">
Require all denied
</If>

ProxyPass "http://127.0.0.1:20002/api"
</Location>


Back to MV Connect Manual
```

<PageFooter />
