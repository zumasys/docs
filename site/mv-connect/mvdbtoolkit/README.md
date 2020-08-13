# MVDBToolkit

<PageHeader />

MVDBToolkit contains a series of functions to assist in cross platform MV development.  It wraps platform specific functions with toolkit specific functions.  Platform differences are handled via inline includes.  

## Table of Contents

| Function                                                         | Description                        |
| ---------------------------------------------------------------- | ---------------------------------- |
| [MVDBTOOLKIT.CONFIG](./mvdbtoolkit-config/README.md)             | Configuration Tool                 |
| [MVDBTOOLKIT.PACKAGE.INSTALLER](./mvdbtoolkit-package-installer) | Package installer                  |
| [MVDBTOOLKIT.WCALL](./mvdbtoolkit-wcall/README.md)               | Web Client Function (Curl wrapper) |
| [MVDBTOOLKIT.WCALL.DEBUG](./mvdbtoolkit-wcall-debug/README.md)   | Web Client debugging subroutine    |
| [MVDBTOOLKIT.WEXECUTE](./mvdbtoolkit-wexecute/README.md)         | Execute O/S commands               |
| [MVDBTOOLKIT.WFILEIO](./mvdbtoolkit-wfileio/README.md)           | Read/Write/Delete O/S commands     |
| [MVDBTOOLKIT.WGETENV](./mvdbtoolkit-wgetenv/README.md)           | Get O/S environment Variables      |
| [MVDBTOOLKIT.WPLATFORM](./mvdbtoolkit-wplatform/README.md)       | Get Config information             |
| [MVDBTOOLKIT.SWAP](./mvdbtoolkit-wswap/README.md)                | Cross platform SWAP statement      |
| [MVDBTOOLKIT.TEST](./mvdbtoolkit-test/README.md)                 | Test/QC program                    |
| [MVSENDGRID](../packages/mvsendgrid/README.md)                   | Included SendGrid API Package      |

## Config Entry

A JSON configuration record is stored in the dictionary of **MVDBTOOLKIT.BP** called `MV.PLATFORM.JSON`.  This item is initially populated by `MVDBTOOLKIT.CONFIG`.  If you wish to make changes you can edit the item directly.

```json
{
  "platform": "LINUX",      /* WINDOWS or LINUX */
  "mvtype": "D3",           /* MV type.  D3, UNIVERSE, UNIDATA, JBASE, QM */
  "filedelim": "/",         /* Platform filesystem delimiter / or \ */
  "tmpdir": "/tmp",         /* Temp directory to use */
  "curllocation": ""        /* curl binary to use */
  }
  ```

## Usage

All tools in MVDBTOOLKIT are utilized via Objects.  Instead of passing several parameters in and out of the functions you pass a single Object.  This is not unlike using a single Dynamic array to pass info in and out of the function.  At this time the only Object type understood by MVDBTOOLKIT are WOBJ objects.

Each Function has its own specific object definition.  There is very little syntax checking therefore if you are having issues it is recommended you convert your object to jSON and print out the payload.

### Example

```
URL = "https://api.ipify.org?format=json"
CALL WOBJ(OBJ,"FROMSTRING","","{}","",RERR); * BLANK OBJECT
CALL WOBJ(OBJ,"SET","method","GET","",RERR); * Set method
CALL WOBJ(OBJ,"SET","url",URL,"",RERR); * Set url

PRINT "JSON pre call"
TOBJ=OBJ; GOSUB debug.object

CALL MVDBTOOLKIT.WCALL(OBJ)

PRINT;PRINT "JSON after call";PRINT
TOBJ=OBJ; GOSUB debug.object

STOP

debug.object: *
CALL WOBJ(TOBJ,"TOSTRING","",OUT.JSON,"PRETTIFY",RERR)
PRINT OUT.JSON
RETURN
```

#### Output

```json
 jsh JBASEADM ~ -->TEST.JSON
pre JSON
{
  "method": "GET",
  "url": "https://api.ipify.org?format=json"
  }
JSON after call
{
  "method": "GET",
  "url": "https://api.ipify.org?format=json",
  "response": {
    "headers": {
      "Server": "Cowboy",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Vary": "Origin",
      "Date": "Mon, 15 Jun 2020 01:15:46 GMT",
      "Content-Length": "21",
      "Via": "1.1 vegur"
      },
    "status": 200,
    "http_type": "HTTP/1.1",
    "statusmsg": "OK",
    "log": [
      "* Rebuilt URL to: https://api.ipify.org/?format=json",
      "*   Trying 50.19.115.217...",
      "* TCP_NODELAY set",
      "* Connected to api.ipify.org (50.19.115.217) port 443 (#0)",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 1/3)",
      "* schannel: checking server certificate revocation",
      "* schannel: sending initial handshake data: sending 184 bytes...",
      "* schannel: sent initial handshake data: sent 184 bytes",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 2/3)",
      "* schannel: failed to receive handshake, need more data",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 2/3)",
      "* schannel: encrypted data got 3900",
      "* schannel: encrypted data buffer: offset 3900 length 4096",
      "* schannel: encrypted data length: 3806",
      "* schannel: encrypted data buffer: offset 3806 length 4096",
      "* schannel: received incomplete message, need more data",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 2/3)",
      "* schannel: encrypted data got 196",
      "* schannel: encrypted data buffer: offset 4002 length 4830",
      "* schannel: received incomplete message, need more data",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 2/3)",
      "* schannel: encrypted data got 771",
      "* schannel: encrypted data buffer: offset 4773 length 5026",
      "* schannel: sending next handshake data: sending 126 bytes...",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 2/3)",
      "* schannel: encrypted data got 51",
      "* schannel: encrypted data buffer: offset 51 length 5026",
      "* schannel: SSL/TLS handshake complete",
      "* schannel: SSL/TLS connection with api.ipify.org port 443 (step 3/3)",
      "* schannel: stored credential handle in session cache",
      "> GET /?format=json HTTP/1.1",
      "> Host: api.ipify.org",
      "> User-Agent: curl/7.55.1",
      "> Accept: */*",
      "> ",
      "* schannel: client wants to read 102400 bytes",
      "* schannel: encdata_buffer resized 103424",
      "* schannel: encrypted data buffer: offset 0 length 103424",
      "* schannel: encrypted data got 228",
      "* schannel: encrypted data buffer: offset 228 length 103424",
      "* schannel: decrypted data length: 199",
      "* schannel: decrypted data added: 199",
      "* schannel: decrypted data cached: offset 199 length 102400",
      "* schannel: encrypted data buffer: offset 0 length 103424",
      "* schannel: decrypted data buffer: offset 199 length 102400",
      "* schannel: schannel_recv cleanup",
      "* schannel: decrypted data returned 199",
      "* schannel: decrypted data buffer: offset 0 length 102400",
      "< HTTP/1.1 200 OK",
      "< Server: Cowboy",
      "< Connection: keep-alive",
      "< Content-Type: application/json",
      "< Vary: Origin",
      "< Date: Mon, 15 Jun 2020 01:15:46 GMT",
      "< Content-Length: 21",
      "< Via: 1.1 vegur",
      "< ",
      "{ [21 bytes data]",
      "* Connection #0 to host api.ipify.org left intact"
      ],
    "data": "{\"ip\":\"98.173.13.82\"}",
    "curl_cmnd": "curl -s -m 45 -X GET -D \"C:\\jBASE\\JBASEADM\\mvdbtoolkit\\tmp\\WCALL-1.headers\" -v --stderr \"C:\\jBASE\\JBASEADM\\mvdbtoolkit\\tmp\\WCALL-1.stderr\" \"https://api.ipify.org?format=json\""
    }
  }
jsh JBASEADM ~ -->
```

<PageFooter />
