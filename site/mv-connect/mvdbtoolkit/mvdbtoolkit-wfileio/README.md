# MVDBTOOLKIT.WFILEIO

MVDBTOOLKIT.WFILEIO is a multiplatform function to read and write O/S records.  It is not designed to stream read/write very large records.  Instead it is designed to allow you to quickly read/write a O/S file that can easily be handled inside a normal MV record.

## WOBJ config format

```JSON
{ "action":"read,write,delete",
  "path":"PATH TO THE FILE",
  "data":"DATA FOR A WRITE",
  "dosletter":"OPTIONAL DOS LETTER TO ADD TO PATH",
  "newline":"CR,LF,CRLF,DOS,UNIX,MV,RAW",
  "permissions":"TBD"
  "response": {
      "data":"responsedata",
      "status":1,
      "statusmsg":"statusmsg"
  }
}
```

## New Line
Due to JSON not liking char(254) it is recommended you do not work with nl->@am conversions.  The newline parameter will control how these conversions are done both on a read (how the variable will be returned to your code) or when converting to write.

| Type        | Read                                | Write                                             |
|-------------|-------------------------------------|---------------------------------------------------|
| CR          | All new lines are converted to CR   | All new lines including @AM are converted to CR   |
| LF or Unix  | All new lines are converted to LF   | All new lines including @AM are converted to LF   |
| CRLF or DOS | All new lines are converted to CRLF | All new lines including @AM are converted to CRLF |
| MV          | All new lines are converted to @AM  | ??                                                |
| RAW         | No conversion is done               | No conversion is done                             |

### Example

```BASIC
* Test WFILEIO

TMP.DIR="C:\\"
TMP.DIR="/tmp"

USER.NO=FIELD(OCONV('','U50BB'),' ',1)

* Build config object to write a item

CALL WOBJ(FOBJ,"FROMSTRING","","{}","",RERR)
CALL WOBJ(FOBJ,"SET","action","write","",RERR)
TMP.FILE.NAME=TMP.DIR:FILEDELIM:'TMP-':USER.NO:'.txt'
TEST.MSG=TMP.FILE.NAME

CALL WOBJ(FOBJ,"SET","path",TMP.FILE.NAME,"",RERR)
SAVE.FOBJ=FOBJ
TMP.DATA=TIMEDATE()
CALL WOBJ(FOBJ,"SET","data",TMP.DATA,"",RERR)

* Call WFILEIO to write the item

CALL MVDBTOOLKIT.WFILEIO(FOBJ)

* Use WFILEIO to read item back in

CALL WOBJ(FOBJ,"SET","action","read","",RERR)

* Go read the record

CALL MVDBTOOLKIT.WFILEIO(FOBJ)

CALL WOBJ(FOBJ,"GET","response.data",RESPONSE.DATA,"",RERR)

* Print out response
PRINT RESPONSE.DATA

* Lets now delete it

FOBJ=SAVE.FOBJ
CALL WOBJ(FOBJ,"SET","action","delete","",RERR)
CALL MVDBTOOLKIT.WFILEIO(FOBJ)
```

<PageFooter />
