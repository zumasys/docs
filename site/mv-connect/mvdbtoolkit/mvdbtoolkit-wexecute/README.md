# MVDBTOOLKIT.WEXECUTE

<PageHeader />

MVDBTOOLKIT.WEXECUTE is a cross platform tool to execute O/S commands.  It is designed to handle all the MV differences.  

## WOBJ config format

```JSON
{ "command":"COMMAND TO USE",
    "directory":"OPTIONAL DIRECTORY TO RUN IN",
    "debug":"YES OR NO",
    "docapture":"YES OR NO, DEFAULT YES",
    "returning":"YES OR NO, DEFAULT YES",
    "rtndata":"YES OR NO, DEFAULT NO",
    "passlist":"ACTUAL PASSLIST",
    "data": ["ARRAY OF DATA STATEMENTS"],
    "result": {
                "result":"RESULT IF CAPTURED",
                "rtndata":"RESULT OF RTNDATA",
                "returning":"RESULT OF RETURNING",
                "debug":"DEBUG INFORMATION IF TURNED ON"
            }
    }
```

### Example

```BASIC
CMND='echo MVDBTOOLKIT.TEST'

CALL @WOBJ.RTNE(COBJ,"FROMSTRING","","{}","",RERR)
CALL @WOBJ.RTNE(COBJ,"SET","command",CMND,"",RERR)
CALL MVDBTOOLKIT.WEXECUTE(COBJ)
CALL @WOBJ.RTNE(COBJ,"GET","result.result",CMND.RESULT,"",RERR)
PRINT CMND.RESULT
```

</PageFooter>
