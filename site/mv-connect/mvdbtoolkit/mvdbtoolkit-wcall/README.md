# MVDBTOOLKIT.WCALL

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

MVDBTOOLKIT.WCALL is a outbound web client. This tool will use Curl (either command line or LIBCURL) based on the platform to make the outbound call.  A single object is passed to the function.  All inbound and outbound params are stored within the object.

To allow for cross platform support the cross platform functions of MVDBTOOLKIT are used.  These include

* MVDBTOOLKIT.FILEIO (Reading and writeing O/S files)
* MVDBTOOLKIT.WEXECUTE (Execute local O/S commands)


#### **COMMAND SYNTAX**

```
CALL MVDBTOOOLKIT.WCALL(OBJ)
```

#### **SYNTAX ELEMENTS**

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

| Parameter            | Description | Curl<br> Option |
| ---                  | --- | --- |
| method               | HTTP method to use.  GET, PUT, POST, PATCH, DELETE, etc.  | -X |
| url                  | Url to call.  This can include url variables |
| headers              | Object Containing field/value pairs of headers and their values | -H |
| headers.headername   | Header Name. |
| headers.headervalue  | Header Value |
| body                 | Optional Raw body (usually done with rest).  | --data-binary |
| formfields           | Array of form fields you wish to post | -F or --form-string |
| formfields.name      | Name of form field |
| formfields.value     | Value of form field. You can define a file with @filename |
| formfield.fieldtype  | Optional.  Set to file if supplied value is via a file |
| datafields           | Array of datafields you wish to post | -d |
| datafields.name      | Name of datafield |
| datafields.value     | Value of datafield |
| datafields.fieldtype | Optional.  Set to file if supplied value is via a file |
| insecure             | Set to insecure |
| timeout              | Timeout for call | -m |
| options              | Manually passed options to curl statement.  Only works with command line version |
| debug                | Turns debugging on for the call |
| response             | Response object.  Contains all the response information once the call is made |
| response.result      | Output from the call |
| response.headers     | Object of response headers. |
| response.header.name | Name of response header |
| response.header.value | Value of response header |
| response.status      | HTTP status code |
| response.statusmsg   | HTTP status code msg |
| response.http_type   | HTTP response HTTP type |
| response.curl_cmnd   | Curl statement generated |
| response.log         | Curl is run with debugging on. This is an array of those logging items | -v |

#### Samples

##### Simple Get

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

</responsefooter>