# MVDBTOOLKIT.WFILEIO

MVDBTOOLKIT.WFILEIO is a multiplatform function to read and write O/S records.  It is not designed to stream read/write very large records.  Instead it is designed to allow you to quickly read/write a O/S file that can easily be handled inside a normal MV record.

## WOBJ config format

```JSON
{ "ACTION":"READ,WRTE,DELETE",
  "PATH":"PATH TO THE FILE",
  "DATA":"DATA FOR A WRITE",
  "dosletter":"OPTIONAL DOS LETTER TO ADD TO PATH",
  "NEWLINE":"CR,LF,CRLF,DOS,UNIX",
  "PERMISSIONS":"TBD"
  "response": {
      "data":"responsedata",
      "status":1,
      "statusmsg":"statusmsg"
  }
}
```

### Example

```BASIC
* Test WFILEIO

TMP.DIR="C:\\"
TMP.DIR="/tmp"

USER.NO=FIELD(OCONV('','U50BB'),' ',1)

* Build config object to write a item

CALL WOBJ(FOBJ,"FROMSTRING","","{}","",RERR)
CALL WOBJ(FOBJ,"SET","action","WRITE","",RERR)
TMP.FILE.NAME=TMP.DIR:FILEDELIM:'TMP-':USER.NO:'.txt'
TEST.MSG=TMP.FILE.NAME

CALL WOBJ(FOBJ,"SET","path",TMP.FILE.NAME,"",RERR)
SAVE.FOBJ=FOBJ
TMP.DATA=TIMEDATE()
CALL WOBJ(FOBJ,"SET","data",TMP.DATA,"",RERR)

* Call WFILEIO to write the item

CALL MVDBTOOLKIT.WFILEIO(FOBJ)

* Use WFILEIO to read item back in

CALL WOBJ(FOBJ,"SET","action","READ","",RERR)

* Go read the record

CALL MVDBTOOLKIT.WFILEIO(FOBJ)

CALL WOBJ(FOBJ,"GET","response.data",RESPONSE.DATA,"",RERR)

* Print out response
PRINT RESPONSE.DATA

* Lets now delete it

FOBJ=SAVE.FOBJ
CALL WOBJ(FOBJ,"SET","action","DELETE","",RERR)
CALL MVDBTOOLKIT.WFILEIO(FOBJ)
```

<PageFooter />
