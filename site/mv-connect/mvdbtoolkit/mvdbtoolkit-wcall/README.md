# MVDBTOOLKIT.WCALL

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

`MVDBTOOLKIT.WCALL` is an outbound web client. This tool will use [Curl](https://curl.haxx.se/) (either command line or LIBCURL) based on the platform specified to make the outbound call.  A single object is passed to the function.  All inbound and outbound parameters are stored within the object.

To allow for cross platform support the cross platform functions of MVDBTOOLKIT are used.  These include

* `MVDBTOOLKIT.FILEIO` (Reading and writeing O/S files)
* `MVDBTOOLKIT.WEXECUTE` (Execute local O/S commands)

## Command Syntax

```
CALL MVDBTOOOLKIT.WCALL(OBJ)
```

### Synatx Elements

Sample JSON

```JSON
MVDBTOOLKIT.WOBJ
 { "method":"GET,PUT,POST,ETC",
    "url":"URL TO CALL",
    "headers": { "HEADERNAME":"VALUE", "HEADERNAME":"VALUE" },
    "body":"BODY",
    "formfields": [
        { "name":"field name","value":"field value", "fieldtype":"Optional=file if this should be a file, value is the path" }
    ],
    "datafields": [
        { "name":"field name","value":"field value"}
    ],
    "files": [
        {
           "sourcefile":"Location of file on the server",
           "filename":"Name to save file on client",
           "type":"Content type, like application/pdf"
        }
    ],
    "insecure":"Yes,Y,YES - Sets the -k on curl",
    "options":"curl options to add to curl command",
    "timeout": 45,
    "response": {
        "data":"RESULT",
        "status":"STATUS",
        "curl_cmnd":"Actual curl command created",
        "status": 200,
        "statusmsg": "status msg",
        "http_type": "http type",
        "headers": { "header1name":"header1value", "header2name":"header2value" },
        "log": [ "log line1", "log line2" ]
    }
  }
```

| Parameter             | Description                                                                      | Curl<br> Option     |
| --------------------- | -------------------------------------------------------------------------------- | ------------------- |
| method                | HTTP method to use.  GET, PUT, POST, PATCH, DELETE, etc.                         | -X                  |
| url                   | Url to call.  This can include url variables                                     |                     |
| headers               | Object Containing field/value pairs of headers and their values                  | -H                  |
| headers.headername    | Header Name                                                                      |                     |
| headers.headervalue   | Header Value                                                                     |                     |
| body                  | Optional Raw body (usually done with rest).                                      | --data-binary       |
| formfields            | Array of form fields you wish to post                                            | -F or --form-string |
| formfields.name       | Name of form field                                                               |                     |
| formfields.value      | Value of form field. You can define a file with @filename                        |                     |
| formfield.fieldtype   | Optional.  Set to file if supplied value is via a file                           |                     |
| datafields            | Array of datafields you wish to post                                             | -d                  |
| datafields.name       | Name of datafield                                                                |                     |
| datafields.value      | Value of datafield                                                               |                     |
| datafields.fieldtype  | Optional.  Set to file if supplied value is via a file                           |                     |
| files                 | Files to upload                                                                  |                     |
| files.sourcefile      | File on server to upload                                                         |                     |
| files.filename        | Suggested name to save file on client, no paths                                  |                     |
| files.type            | Content type.  Standard internet types                                           |                     |
| insecure              | Set to insecure                                                                  |                     |
| timeout               | Timeout for call                                                                 | -m                  |
| options               | Manually passed options to curl statement.  Only works with command line version |                     |
| debug                 | Turns debugging on for the call                                                  |                     |
| response              | Response object.  Contains all the response information once the call is made    |                     |
| response.data         | Output from the call                                                             |                     |
| response.headers      | Object of response headers.                                                      |                     |
| response.header.name  | Name of response header                                                          |                     |
| response.header.value | Value of response header                                                         |                     |
| response.status       | HTTP status code                                                                 |                     |
| response.statusmsg    | HTTP status code msg                                                             |                     |
| response.http_type    | HTTP response HTTP type                                                          |                     |
| response.curl_cmnd    | Curl statement generated                                                         |                     |
| response.log          | Curl is run with debugging on. This is an array of those logging items           | -v                  |

## Samples

### Simple Get

``` mvbasic
* First build us a object to build our options

CALL WOBJ.RTNE(OBJ,"FROMSTRING","","{}","",RERR)

* Set Method
CALL WOBJ.RTNE(OBJ,"SET","method","GET","",RERR)

* Set URL
CALL WOBJ.RTNE(OBJ,"SET","url","https://postman-echo.com/get?foo1=bar1&foo2=bar2","",RERR)

* Make the call
CALL MVDBTOOLKIT.WCALL(OBJ)

* Get the response

CALL WOBJ(OBJ,"GET","response.result",RESPONSE.RESULT,"",RERR)
PRINT RESPONSE.RESULT
```

### Full Post with Headers
```
* First build us a object to build our options

CALL WOBJ(OBJ,"FROMSTRING","","{}","",RERR)

* Set Method

CALL WOBJ(OBJ,"SET","method","POST","",RERR)

* Set URL

CALL WOBJ(OBJ,"SET","url","https://postman-echo.com/post","",RERR)

* Lets send some JSON

CALL WOBJ(BOBJ,"FROMSTRING","","{}","",RERR)
CALL WOBJ(BOBJ,"SET","field","value","",RERR)
* LETS MAKE THIS MORE COMPLICATED
CALL WOBJ(BOBJ,"SET.ARRAY","colors","[]","",RERR)
CALL WOBJ(BOBJ,"SET","colors[-1]","red","",RERR)
CALL WOBJ(BOBJ,"SET","colors[-1]","blue","",RERR)
CALL WOBJ(BOBJ,"SET","colors[-1]","green","",RERR)

* Insert a number
CALL WOBJ(BOBJ,"SET.NUMBER","amount",15.23,"",RERR)
CALL WOBJ(BOBJ,"SET.BOOLEAN","testboolean","TRUE","",RERR)

* BUILD SUB OBJECT AND INSERT IT
CALL WOBJ(SOBJ,"FROMSTRING","","{}","",RERR)
CALL WOBJ(SOBJ,"SET","address","123 Some Street","",RERR)
CALL WOBJ(SOBJ,"SET","street","Street Name","",RERR)

* Convert our object to JSON. We can only insert json, not objects at this time
CALL WOBJ(SOBJ,"TOSTRING","",SJSON,"",RERR)

* Add our JSON as a object 
CALL WOBJ(BOBJ,"SET.OBJECT","address",SJSON,"",RERR)

CALL WOBJ(BOBJ,"TOSTRING","",BJSON,"",RERR)

CALL WOBJ(OBJ,"SET","body",BJSON,"",RERR)

* Need to set our content type to application/json

CALL WOBJ(OBJ,"SET.OBJECT","headers","{}","",RERR); * create headers object
CALL WOBJ(OBJ,"SET","headers.content-type","application/json","",RERR)

* Demonstrate adding other headers

CALL WOBJ(OBJ,"SET","headers.Authorization","Bearer: xxxxxxxxxxxxxxx","",RERR)

* Make the call

CALL MVDBTOOLKIT.WCALL(OBJ)

* Get the response

CALL WOBJ(OBJ,"GET","response.status",RESPONSE.STATUS,"",RERR)
CALL WOBJ(OBJ,"GET","response.statusmsg",RESPONSE.STATUS.MSG,"",RERR)

PRINT "STATUS: ":RESPONSE.STATUS,RESPONSE.STATUS.MSG

CALL WOBJ(OBJ,"GET","response.data",RESPONSE.RESULT,"",RERR)

* LETS MAKE IT MORE READABLE

CALL WOBJ(RESPONSEOBJ,"FROMSTRING","",RESPONSE.RESULT,"",RERR)
CALL WOBJ(RESPONSEOBJ,"TOSTRING","",RESPONSE.JSON,"PRETTIFY",RERR)

CONVERT CHAR(13) TO CHAR(254) IN RESPONSE.JSON
CONVERT CHAR(10) TO '' IN RESPONSE.JSON

NUM.LINES=DCOUNT(RESPONSE.JSON,CHAR(254))
FOR X=1 TO NUM.LINES
    PRINT RESPONSE.JSON<X>
NEXT X

* Process our response, Lets show how we can dynamically
* go thru a result

* Get all the fields in our json object
CALL WOBJ(RESPONSEOBJ,"KEYS","json",KEYS,"",RERR)
* Seperated by svm marks
PRINT KEYS

* Get number of colors
CALL WOBJ(RESPONSEOBJ,"LENGTH","json.colors",NUMBER.COLORS,"",RERR)
PRINT "NUMBER COLORS=":NUMBER.COLORS
FOR X=1 TO NUMBER.COLORS
    P="json.colors[":X-1:"]"
    CALL WOBJ(RESPONSEOBJ,"GET",P,COLOR,"",RERR)
    PRINT P,COLOR
NEXT X

CALL WOBJ(RESPONSEOBJ,"GET","json.address.address",ADDRESS,"",RERR)
PRINT "Address:":ADDRESS

* GET ENTIRE ADDRESS OBJECT
CALL WOBJ(RESPONSEOBJ,"GET","json.address",ADDRESSJSON,"",RERR)
PRINT ADDRESSJSON

```

<PageFooter />
