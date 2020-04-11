# The '@' Function

**Created At:** 7/17/2017 8:03:25 AM  
**Updated At:** 4/16/2019 3:17:11 PM  
**Original Doc:** [263499-the-function](https://docs.jbase.com/36868-jbase-basic/263499-the-function)  
**Original ID:** 263499  
**Internal:** No  

**Tags:**
<badge text='pwd' vertical='middle' />
<badge text='@ function' vertical='middle' />
<badge text='@' vertical='middle' />

## Description

The @ function is used to position the cursor to a specific point on the terminal screen.The function can be used as follows:

```
@(col{, row})
```

Where:

- col and row can be any expression that evaluates to a numeric value.
- col specifies, to which column on the screen the cursor should be moved.
- row specifies which row (line) on the screen to position the cursor.

Specifying col on its own will locate the cursor to the required column on whichever row it currently occupies. The terminal address starts at (0,0), that being the top left hand corner of the screen.

## Note

> When specified values exceed either of the physical limits of the current terminal, then unpredictable results will occur.
>
> Cursor addressing will not normally work when directed at a printer. Building printer independence into a program can be achieved by accessing the terminfo database through the SYSTEM() function.

If the function is given a screen code as an argument as below:

```
@(screen_code)
```

Where **screen\_code** is any valid jBASIC screen code.

The function can be used to control the behavior of the display screen. Screen color can also be controlled. For example:

```
CRT @(-1):@(2, 30):"Hi there!":
```

The above can be used to clear the screen before the greeting "Hi there!" is displayed at the location specified by the second @ function.

Some valid screen codes are listed below:

| <!----> | <!----> |
| --- | --- |
| -1 | clear the screen and home the cursor. |
| -2 | home the cursor. |
| -3 | clear screen from the cursor to the end of the screen. |
| -4 | clear screen from cursor to the end of the current screen line. |
| -9 | move the cursor one character to the left. |
| -10 | move the cursor one row up the screen. |

Other @ codes include:

| <!----> | <!----> |
| --- | --- |
| @ACCOUNT | Current account |
| @AM | CHAR(254) |
| @CALLSTACK | Call stack (i.e. if used in a subroutine) |
| @CODEPAGE | For International mode |
| @COMMAND | see @SENTENCE |
| @CR | Carriage return |
| @DATA | DATA input (e.g. when using EXECUTE) |
| @DAY | Calendar day number of the month |
| @EOF | Explain |
| @ESC | CHAR(27) |
| @FALSE | 0 |
| @FF | Form feed character for printing |
| @FILENAME | Used in I-type dictionaries |
| @FM | see @AM |
| @ID | Used in I-type dictionaries |
| @IM | CHAR(255) |
| @LEVEL | EXECUTE level of nesting |
| @LF | Line-feed |
| @LOCALE | For International mode |
| @LOGNAME | Operating system login name |
| @LPTRHIGH | Page height |
| @MONTH | Current month number |
| @PARASENTENCE | see @SENTENCE |
| @PATH | Current working directory |
| @PID | Process ID |
| @RECORD | Used in I-type dictionaries |
| @RM | see @IM |
| @SELECTED | Item count from active select |
| @SM | see @SVM |
| @SVM | CHAR(252) |
| @TAB | Tab character |
| @TIMEZONE | current JBASE\_TIMEZONE |
| @TM | CHAR(251) |
| @TRUE | 1 |
| @TTY | Current tty device |
| @UDTNO | see @USERNO |
| @UID | Operating system user ID |
| @USER | Operating system login name |
| @USERNO | jBASE port number |
| @USERSTATS | Current user statistics:  <br>1&gt; The port number<br><br>&lt;2&gt; The number of programs running in this port.<br><br>&lt;3&gt; Time the user started in Universal Co-ordinated Time or UTC  (not a dyslexic mistake). This is raw UNIX time. You can convert this to jBASE  internal time format using the U0FF0 conversion or to internal date format using  the U0FF1 conversion.<br><br>&lt;4&gt; The process ID<br><br>&lt;5&gt; Account name<br><br>&lt;6&gt; User name. Normally the operating system name.<br><br>&lt;7&gt; Terminal name in jBASE format<br><br>&lt;8&gt; Terminal name in Operating system format.<br><br>&lt;9&gt; Database name<br><br>&lt;10&gt; TTY device name<br><br>&lt;11&gt; Language name.<br><br>&lt;12&gt; Time in UTC the listening thread last found the thread  alive.<br><br>&lt;13&gt; Amount of heap space memory in free space chain on a  process wide basis. Not real-time, only updated every 15 seconds.<br><br>&lt;14&gt; Amount of heap space memory in use on a process wide basis.  Not real-time , only updated every 15 seconds<br><br>&lt;15&gt; Thread type as an internal integer.<br><br>&lt;16&gt; Type of thread as a text string.<br><br>&lt;17&gt; License counters<br><br>&lt;18&gt; Number of OPEN’s performed.<br><br>&lt;19&gt; Number of READ’s performed.<br><br>&lt;20&gt; Number of WRITE's performed.<br><br>&lt;21&gt; Number of DELETE's performed<br><br>&lt;22&gt; Number of CLEARFILE's performed<br><br>&lt;23&gt; Number of PERFORM/EXECUTE's performed.<br><br>&lt;24&gt; Number of INPUT's performed.<br><br>&lt;25&gt; Not used.<br><br>&lt;26&gt; Number of jBASE files the application thinks it has open at  the moment.<br><br>&lt;27&gt; Number of jBASE files actually opened by the operating  system at the moment.<br><br>&lt;28&gt; Any data set by the application using @USER.ROOT<br><br>&lt;29&gt; Process Identifier. A string created by the operating  system to identify the process. It is O/S specific. Currenly on IBM i-series  platform only.<br><br>&lt;30&gt; to &lt;40&gt; Reserved.<br><br>Attributes 41 onward are multi-valued, one value per perform  level, and there are &lt;2&gt; perform levels active.<br><br>&lt;41,n&gt; Program name and command line arguments.<br><br>&lt;42,n&gt; The line number in jBASE BASIC the program is currently  executing.<br><br>&lt;43,n&gt; The source name in jBASE BASIC the program is currently  executing.<br><br>&lt;44,n&gt; Not used.<br><br>&lt;45,n&gt; Not used.<br><br>&lt;46,n&gt; Status of program execution as a readable text string.<br><br>&lt;47,n&gt; Status of program execution as an internal integer.<br><br>&lt;48,n&gt; User CPU time . Depending upon the hardware this will be  either for the entire process or just the single thread.<br><br>&lt;49,n&gt; System CPU time.Depending upon the hardware this will be  either for the entire process or just the single thread.<br><br>&lt;50,n&gt; User CPU time used by any external child processes it  might have spawned.<br><br>&lt;51,n&gt; System CPU time used by any external child processes it  might have spawned.<br><br>&lt;52,n&gt; Any data set by the application using @USER.THREAD<br><br> |
| @VM | CHAR(253) |
| @WHO | see @ACCOUNT |
| @YEAR | Current year number |

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
