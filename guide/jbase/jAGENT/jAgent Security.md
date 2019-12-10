# jAgent Security

**Created At:** 8/29/2018 1:52:08 AM  
**Updated At:** 8/2/2019 9:41:20 PM  

**Tags:**
<badge text='jagent_user' vertical='middle' />

# ENABLING SSL ENCRYPTION:

jAgent may be configured to use SSL encryption. To activate SSL encryption, you must specify a valid x509 certificate and a private key. The certificate and key may be specified using command line options, or in the jAgent configuration file.

The following example describes how to create a self-signed certificate with *OpenSSL*:

**Create a self-signed certificate with OpenSSL**

1. Create an RSA private key:

```
C:\programs\openssl\bin>openssl req -x509 -sha256 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes

Generating a 2048 bit RSA private key
.....+++
................................+++
writing new private key to 'key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []: 
```

2. Start jAgent in SSL mode

```
C:\programs\openssl\bin>jbase_agent -c cert.pem -k key.pem --config %HOME%\jagent_config
```



## AUTHENTICATION MODES:

For jRemote, ODBC and JDBC clients, jAgent supports three different authentication modes (See command line options):

- ***1. Anonymous -*** authentication does not verify any user credentials.
- ***2. User -*** authentication verifies user credentials against a local user credentials database.
- ***3. Account -*** authentication will attempt to use the provided user credentials to log into a specific jBASE account.


For REST clients, an appropriate HTTP-based authentication mechanism must be implemented in the REST code.

**Setting up user authentication**

1.  Create the jAgent user file

```
CREATE-FILE JAGENT_USER 1 53 
[ 417 ] File JAGENT_USER]D created , type = J4 
[ 417 ] File JAGENT_USER created , type = J4 
```

2.  Create the user and set the password

```
jbase_agent adduser test 
jbase_agent passwd test newpassword 
```

3.  Now start jbase\_agent with user authentication.

```
jbase_agent -A user 
```

**Setting up account authentication**

The environment should be configured with JEDIFILENAME\_SYSTEM set to a valid jBASE SYSTEM file that contains the jBASE accounts you wish to connect to. This can be set in the jAgent configuration file [ENVIRONMENT] section, if desired.

1. Start jbase\_agent to authentication with account authentication

```
jbase_agent -A account 
```



## 

