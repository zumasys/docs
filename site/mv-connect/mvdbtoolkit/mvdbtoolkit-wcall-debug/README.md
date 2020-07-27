# MVDBTOOLKIT.WCALL.DEBUG

<PageHeader />

**Tags:**
<badge text='objects' vertical='middle' />
<badge text='rest' vertical='middle' />

MVDBTOOLKIT.WCALL.DEBUG is a debugging subroutine that will display the common items you would look at when having issues with a web call.  You can call this subroutine after calling MVDBTOOLKIT.WCALL and it will display your curl statement, the actual options object, and the debugging log.

## Command Syntax

```
CALL MVDBTOOLKIT.WCALL(OBJ)
CALL MVDBTOOOLKIT.WCALL.DEBUG(OBJ)
```
You will be shown via prompts

1. Response Status and Response code.
2. Curl Command execute (GET response.curl_cmnd)
3. Outputs the JSON representation of your passed Object.
4. Outputs the response.log which will be the verbose output of the Curl statement

You do NOT want to leave this code in production code.  This is purely a debugging tool.  The call to this function should be commented out of production code or made conditional.

<PageFooter />
