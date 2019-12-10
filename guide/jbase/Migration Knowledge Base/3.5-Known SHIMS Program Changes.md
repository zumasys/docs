# 3.5-Known SHIMS Program Changes

**Created At:** 8/11/2017 12:05:48 AM  
**Updated At:** 8/11/2017 12:06:19 AM  


## Known program problems with most SHIMS sites

**BP/CBP GET.AUTN copy line up...**

from 063     IF AUTN.LEN = "" THEN AUTN.LEN = 5
to      002     IF AUTN.LEN = "" THEN AUTN.LEN = 5

**BP/CBP SM.INPUT EQU ‘lit’ can be replaced by assigning them AFTER variable orientation is set…**

054        IF orientation = VERTICAL THEN

055           LEFT.COOKIE = (menu.x.orig + 1)

056           RIGHT.COOKIE = (menu.x.orig + menu.width - 2)

057           RIGHT.COOKIE.EMP = (menu.x.orig + LEN(menu.items&lt;cursor.location,2&gt;))

058           CUR.LINE = (menu.y.orig + cursor.location+1)

059           SHIFT.COOKIE = 2

060           WRITE.POS = menu.x.orig

061        END ELSE

062           LEFT.COOKIE = (menu.width&lt;cursor.location,1&gt;)

063           RIGHT.COOKIE = (menu.width&lt;cursor.location,2&gt;)

064           RIGHT.COOKIE.EMP = (menu.x.orig +menu.width&lt;cursor.location,2&gt;)

065           CUR.LINE = (menu.y.orig)

066           SHIFT.COOKIE = 0

067           WRITE.POS = menu.width&lt;cursor.location,1&gt;

068        END

069        EMPH.STRING = @(RIGHT.COOKIE.EMP,CUR.LINE):iv.end:@(LEFT.COOKIE+SHIFT.COOKIE,CUR.LINE):iv.begin

:@(WRITE.EMPH,CUR.LINE):menu.items&lt;cursor.location,2&gt;:@(RIGHT.COOKIE,CUR.LINE):iv.end

070        DE.EMPH.STRING = @(LEFT.COOKIE,CUR.LINE):iv.end:@(WRITE.POS,CUR.LINE):menu.items&lt;cursor.location,1&gt;

**BP/CBP SHIMS.ALTACC replace BSCAN logic with KEY-SELECT**

163     EXECUTE 'KEY-SELECT ':FNAME:' WITH ':NAME.INDEX:' = "':SEED:']"' RTNLIST MASTER.REC CAPTURING NoOutput
164 !    BSCAN ID,REC V.FROM FILE,SEED USING NAME.INDEX BY "A" THEN
…
186 !    END

**BP/CBP SHIMS.ALTACC replace LIST process EXECUTE with newer format**

302 !    EXECUTE "LIST ":FNAME:" ":DISP ,SELECT &lt; MASTER.REC ,OUT &gt; JUNK
303     EXECUTE 'LIST ':FNAME:' ':DISP PASSLIST MASTER.REC CAPTURING JUNK
304     EXECUTE "TERM 80,24"
305     MASTER.REC=MASTER.REC.HOLD
306 !    DEL JUNK&lt;1&gt;
307 !    DEL JUNK&lt;1&gt;

**BP/CBP TS-CAT-MA replace BSCAN logic with KEY-SELECT**

127     EXECUTE 'KEY-SELECT TS.CATALOG  WITH DESC.WORDS = "':CC:']"' RTNLIST XREC CAPTURING NoOutput
128 !    BSCAN ID,REC V.FROM TSCFILE,CC USING "DESC.WORDS" BY "A" THEN
…
149 !    END



## Find MD items that are “shortcuts” and create BP items for them

jsh--&gt;SORT ONLY VOC WITH \*A1 = "V" AND WITH \*A3 = "I""Q" AND WITHOUT \*A0 = \*A2 \*A0 FMT "20L" \*A2 FMT "20L" ID-SUPP

\*A0................. \*A2.................

BREAK.VERB           BREAK

CLR                  CS

COUNT.VERB           COUNT

DATE.VERB            DATE

DECATALOG            CATALOG

DELETE.SQL           DELETE

DISPLAY.VERB         DISPLAY

ENV                  ENVIRONMENT

ENVIRON              ENVIRONMENT

FROM.VERB            SELECT

GET                  GET.LIST

GL                   GET.LIST

L                    LIST

LO                   LOGOUT

LOGOFF               LOGOUT

OLD.GET              GET.LIST

P                    HUSH

Q                    QUIT

QS                   QSELECT

SET.SQL              SETSQL

SL                   SAVE.LIST

SP.TAPEOUT           SP.TAPE

SUM.VERB             SUM

T                    TIME

TIME.VERB            TIME

VCATALOG             CATALOG

From this list, find the items which would carry forward and copy the UVSHIMS program or add a BP similar to those provided in UVSHIMS to the local BP and BASIC/CATALOG it.
For Example:     COPY /usr/zumasys/UVSHIMS GL GL
                            TO: (BP GL GET

EZ BP GL GET
                                TOP
                                .&lt;Enter&gt;
                                001 Move to their BP, remove this line and BASIC/CATALOG
                                .R//!
                                001 !Move to their BP, remove this line and BASIC/CATALOG
                                .FIBC (and the same for the GET program)



## Replace EMAIL and PDF programs

jsh --&gt;EZFIND UVPROGS sendmail

jsh CSP ~ --&gt;EZFLIST

Items containing \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

/dbms/CSP\_CONVPROGS/CBP 7 items
                               EMAIL.SUB
                               EMAIL.SUB.CSV
                               EMAIL.SUB.JPG
                               EMAIL.SUB.NO.ATT
                               EMAIL.SUB.PDF
                               EMAIL.SUB.PDF.RPT
                               EMAIL.SUB5

New program is ZUMEMAIL subroutine with simple interface
                CALL ZUMEMAIL(Envelope,Body,Err)

Where Envelope is a dynamic array
                Envelope&lt;1&gt;      -              Subject
                Envelope&lt;2&gt;     -              To Email(s)                          [Multiple emails are delimited by comma (,)]
                Envelope&lt;3&gt;     -              From Email
                Envelope&lt;4&gt;     -              CC Email(s)
                Envelope&lt;5&gt;     -              BCC Emal(s)
                Envelope&lt;6&gt;     -              AttachmentPaths            [Multiple attachment paths delimited by @VM]

Body                      - Body of the email                          [Multiple lines are delimited by @AM]

Some of the mail programs send a pdf version of the text.   We accomplish this with ZUMPDF

ZUMPDF(TextString,TextFilePath,PDFFilePath,Encoding,LandPort,Err)
                TextString            -              String or Record to convert to PDF            (blank if TextFilePath used)
                TextFilePath       -              Path to text file to convert to PDF             (blank if TextString used)
                PDFFilePath        -              Full path to the .pdf file created
                Encoding              -              Type of encoding if not standard ASCII
                Encoding&lt;2&gt;      -              Optional number of lines if not standard 66
                LandPort              -              L for Landscape, P for Portrait or Blank to auto-determine

Also, they write items that they then create a pdf with a background.  Usually called EMAIL.SUB.JPG.
Lines similar to this need to be added to accomplish that:

030     EXECUTE 'sh -c "mkdir -m 777 /dbms/mailpdfs 2&gt; /dev/null"'

031     EXECUTE 'sh -c "find /dbms/mailpdfs -mtime +7 -exec rm -rf {} \; 2&gt; /dev/null"'

032     PortNo = SYSTEM(18)

033     Unique = DATE():'\_':TIME():'\_':PortNo:'\_':RND(1000)

034     TmpDir = '/dbms/mailpdfs/':Unique:'/'

035     EXECUTE 'sh -c "mkdir -m 777 ':TmpDir:' 2&gt; /dev/null"'

036     OPEN '',TmpDir TO F.TMP THEN

037        WRITE REC ON F.TMP,ARN:'.txt'

038     END

039     PerlBackground='perl /dbms/pdf/txt2pdf-no-modules.pl -con '

040     PerlBackground := '/dbms/pdf/':TYPE:'.cfg ':TmpDir:'/':ARN:'.txt'

041     EXECUTE kShell:PerlBackground

042     Envelope&lt;6&gt; = TmpDir:'/':ARN:'.pdf'
