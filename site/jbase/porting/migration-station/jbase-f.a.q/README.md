# jBASE F.A.Q.  

<PageHeader />

**Tags:**
<badge text='faq' vertical='middle' />

## Introductions

### Dan Ell - Multivalue Engineer

![250957-jbase-f-a-q: dane-1](./dane-1.jpg)Dan Ell has over thirty years of experience in building and administering MultiValue systems and applications. After founding his own computer technology and consulting company in 1992, Dan spent 13 years heading up the Technical Support Queue at jBASE, a leading MultiValue software company. Dan is an industry expert in MultiValue, specializing in on-site consulting, planning, technical support documentation, and programming for MultiValue systems.

When he’s not at work, you might find Dan hanging out on the beach at his Tampa Bay home or out taking photos. Dan is also a huge Jaguar aficionado—his pride and joy is his 2003 XJ8 Sport.

### Bruce Decker - Multivalue Presales Engineer

![250957-jbase-f-a-q: bruced](./bruced.jpg)

After being introduced to MultiValue in 1985 with ADP/Microdata, Bruce Decker immediately saw immense business value for customers. Bruce’s first foray into MultiValue was porting assembler code for a MultiValue-based electronic spreadsheet called CompuSheet. That led to his involvement in Via Systems, whose ViaDuct terminal emulation products set the standard for MultiValue in the enterprise.  At Zumasys, Bruce is responsible for helping Zumasys customers with pre-sale tech consulting, building long-lasting relationships of trust and mutual support.

When he’s not at work, Bruce is an active volleyball player and coach. He is also a certificated pilot for private planes, sailplanes, and hang gliders. His other pastimes include mountain biking, skiing, and scuba diving.

* * *

## Frequently Asked Questions

### Is there a command like &gt;HASH-HELP in jBASE that will give you a suggested file size?

We have the JSTAT command.  It shows the filestats.   I usually divide the bytes by 4000 and then add 20-25% for growth.

```
jsh REL17.7 ~ -->JSTAT OLD-PO
File ./OLD-PO
Type=J4 , Hash method = 5
Groups = 50069 , Frame size = 4096 bytes , Secondary Record Size =8192 bytes
Record Count = 136504 , Record Bytes = 124876012
Bytes/Record = 914 , Bytes/Group = 2494
Primary   file space:   Total Frames = 59594 ,Total Bytes = 120364384
Secondary file space:   Total Frames = 1415 , Total Bytes= 4511628
jsh REL17.7 ~ -->DIVD 124876012 4000
31219.003
```

### How many bytes in a frame on Linux/jBASE?

4k or 4096 byte frames

### Where is the TCL stack saved?  On UV, you can save the stack and re-load it; so the user always gets their stack back

The stack is stored in the $JBCRELEASEDIR/tmp/jutil\_ctrl file withjutil\_jsh\_ and tty with \_ in place of /
I added these two programs at GW in CBP to SAVE and GET the stack

#### GETSTACK

```
   kShell = CHAR(255):'k'
   IF NOT(GETENV('JBCRELEASEDIR',JBCRELEASEDIRenv)) THEN
      CRT
      CRT 'Cannot get thevalue of JBCRELEASEDIR'
      STOP
   END
   UserName = SYSTEM(1020)
   OPEN '',JBCRELEASEDIRenv:'/tmp/jutil_ctrl'TO F.STACK ELSE
      STOP 201,JBCRELEASEDIRenv:'/tmp/jutil_ctrl'
   END
   EXECUTE kShell:'tty ' CAPTURING TTYDir
   CONVERT '/' TO '_' IN TTYDir
   StackID = 'jutil_jsh_':TTYDir
   READ R.STACK FROM F.STACK,'savestack_':UserNameTHEN
      WRITE R.STACK ONF.STACK,StackID
   END
```

#### SAVESTACK

```
   kShell = CHAR(255):'k'
   IF NOT(GETENV('JBCRELEASEDIR',JBCRELEASEDIRenv)) THEN
      CRT
      CRT 'Cannot get thevalue of JBCRELEASEDIR'
      STOP
   END
   UserName = SYSTEM(1020)
   OPEN'',JBCRELEASEDIRenv:'/tmp/jutil_ctrl' TO F.STACK ELSE
      STOP 201,JBCRELEASEDIRenv:'/tmp/jutil_ctrl'
   END
   EXECUTE kShell:'tty ' CAPTURING TTYDir
   CONVERT '/' TO '_' IN TTYDir
   StackID = 'jutil_jsh_':TTYDir
   READ R.STACK FROM F.STACK,StackID THEN
      WRITE R.STACK ONF.STACK,'savestack_':UserName
   END
```

## Is there a &gt;HELP command like in UV for an explanation of stack & TCL commands?

No.  We recommend visiting the knowledgebase:

[https://docs.zumasys.com/jbase/](https://docs.zumasys.com/jbase/)

### Is there help for Editor commands?

jED and ED help is available here:

[https://docs.zumasys.com/jbase/editor/editors/](https://docs.zumasys.com/jbase/editor/editors/)

* * *

## Need Answers

Submit a question to Dan and Bruce by emailing [documentation@jbase.com](mailto:documentation@jbase.com)

[Back to Articles](./../README.md)
  
<PageFooter />
