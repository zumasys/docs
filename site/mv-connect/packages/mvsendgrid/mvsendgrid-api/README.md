# MVSENDGRID.API
<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

MVSENDGRID.API is a wrapper around SendGrid's RestFUL email api.  This function utilizes WOBJ to define options.

## Command Syntax

```
CALL MVSENDGRID.API(OBJ)
```

### Synatx Elements

Sample JSON

```JSON
 { "api":"mailsend_v2",
    "params": {
        "to": [
        {
            "email":"email address",
            "name":"Nice name"
        }
        ],
        "cc": [
        {
            "email":"email address",
            "name":"Nice name"
        }
        ],
        "bcc": [
        {
            "email":"email address",
            "name":"Nice name"
        }
        ],
        "debug":"Y or N",
        "replyto":"address",
        "from":"From email address",
        "fromname":"From name",
        "subject":"Subject",
        "text":"Plain text of your email",
        "html":"Html version of your email",
        "files": [
            {
            "sourcefile":"path to file",
            "filename":"file name to present file as",
            "type":"type of file, application/pdf for example"
            }
        ]
        },
        "result": {
        "status":"error or ok",
        "statusmsg:"status msg"
        }
    }
```

| Parameter            | Description |
| ---                  | --- |
| api                  | SendGrid API to use.  Currently only mailsend_v2 is available  |
| params               | Options to pass to the api (This is a object) |
| params.to            | Array of TO objects (Receipient)                               |
| params.to.email      | TO email address                                               |
| params.to.name       | Optional Descriptive name of the recipient.                    |
| params.cc            | Optional Array of CC objects                                            |
| params.cc.email      | CC email address                                               |
| params.cc.name       | Optional CC Descriptive Name                                   |
| params.bcc           | Optional Array of BCC objects                                  |
| params.bcc.email     | BCC email address                                               |
| params.bcc.name      | Optional BCC Descriptive Name                                   |
| params.debug         | Produces Debug output. Passed to WCALL (Y or N)                 |
| params.replyto       | Reply to email address                                          |
| params.from          | From email address                                              |
| params.fromname      | Optional Descriptive From Name                                  |
| params.subject       | Subject                                                         |
| params.text          | Plain Text version of your email                                |
| params.html          | HTML version of your email                                      |
| params.files         | Optional array of files to send                                 |
| params.files.sourcefile | Path to the file you wish to send                            |
| params.files.filename   | Name to show file as when a user does a Save AS              |
| params.files.type       | Content type (example  application/pdf)                      |
| result               | Result object                                                   |
| result.status        | Status  error or ok                                             |
| result.statusmsg     | Verbose error message                                           |
| result.wcalldebug    | Entire WCALL object.                                            |

## Optional Init function

A initialization feature exists to pre-build much of the MVSENDGRID object.

```
OBJ="MAILSEND_V2"
CALL MVSENDGRID.API(OBJ)
```
The resulting object will already have this structure.
```JSON
{ "api":"mailsend_v2",
   "params": {
        "to": [
        ],
        "cc": [
        ],
        "bcc": [
        ],
        "files": [
        ]
    }
}
```



### Samples

#### Simple Send

``` mvbasic
OBJ="MAILSEND_V2"
CALL MVSENDGRID.API(OBJ)

CALL WOBJ(OBJ,"SET","params.to[0].email","support@zumasys.com","",RERR)
CALL WOBJ(OBJ,"SET","params.to[0].name","Support Email","",RERR)

CALL WOBJ(OBJ,"SET","params.from","noreply@zumasys.com","",RERR)

CALL WOBJ(OBJ,"SET","params.subject","Sample email ":TIMEDATE(),"",RERR)

NL=CHAR(13):CHAR(10)

TEXT="Line 1"
TEXT:=NL:"Line 2"
TEXT:=NL:"Line 3"

CALL WOBJ(OBJ,"SET","params.text",TEXT,"",RERR)

CALL MVSENDGRID.API(OBJ)

CALL @WOBJ(OBJ,"GET","result.status",STATUSCODE,"",RERR)
PRINT "Result status=":STATUSCODE
CALL @WOBJ(OBJ,"GET","result.statusmsg",STATUSMSG,"",RERR)
PRINT "Result msg   =":STATUSMSG

IF STATUSCODE = "ok" OR STATUSCODE[1,1] = "2" THEN NULL ELSE
    PRINT "Failed: ":STATUSMSG
END

```

#### Attachment
 
``` mvbasic
OBJ="MAILSEND_V2"
CALL MVSENDGRID.API(OBJ)

CALL WOBJ(OBJ,"SET","params.to[0].email","support@zumasys.com","",RERR)
CALL WOBJ(OBJ,"SET","params.to[0].name","Support Email","",RERR)

CALL WOBJ(OBJ,"SET","params.from","noreply@zumasys.com","",RERR)

CALL WOBJ(OBJ,"SET","params.subject","Sample email ":TIMEDATE(),"",RERR)

NL=CHAR(13):CHAR(10)

TEXT="Line 1"
TEXT:=NL:"Line 2"
TEXT:=NL:"Line 3"

CALL WOBJ(OBJ,"SET","params.text",TEXT,"",RERR)

IF FILE.TO.SEND # "" THEN

    CALL @WOBJ(SOBJ,"FROMSTRING","","{}","",RERR)
    CALL @WOBJ(SOBJ,"SET","sourcefile","/tmp/test.pdf,"",RERR)
    CALL @WOBJ(SOBJ,"SET","filename","TEST.PDF","",RERR)
    CALL @WOBJ(SOBJ,"SET","type","application/pdf","",RERR)
    CALL @WOBJ(SOBJ,"TOSTRING","",SJSON,"",RERR)
    CALL @WOBJ(OBJ,"SET.OBJECT","params.files[-1]",SJSON,"",RERR)

END

CALL MVSENDGRID.API(OBJ)

CALL @WOBJ(OBJ,"GET","result.status",STATUSCODE,"",RERR)
PRINT "Result status=":STATUSCODE
CALL @WOBJ(OBJ,"GET","result.statusmsg",STATUSMSG,"",RERR)
PRINT "Result msg   =":STATUSMSG

IF STATUSCODE = "ok" OR STATUSCODE[1,1] = "2" THEN NULL ELSE
    PRINT "Failed: ":STATUSMSG
END

```
<PageFooter />
