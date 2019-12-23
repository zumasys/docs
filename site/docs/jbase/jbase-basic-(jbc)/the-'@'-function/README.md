# The '@' Function

**Created At:** 7/17/2017 8:03:25 AM  
**Updated At:** 4/16/2019 3:17:11 PM  
**Original Doc:** [263499-the-function](https://docs.jbase.com/36868-jbase-basic/263499-the-function)  

**Tags:**
<badge text='pwd' vertical='middle' />
<badge text='@ function' vertical='middle' />
<badge text='@' vertical='middle' />

# Description

The @ function is used to position the cursor to a specific point on the terminal screen.The function can be used as follows:

```
@(col{, row})
```

Where:

- col and row can be any expression that evaluates to a numeric value.
- col specifies, to which column on the screen the cursor should be moved.
- row specifies which row (line) on the screen to position the cursor.


Specifying col on its own will locate the cursor to the required column on whichever row it currently occupies. The terminal address starts at (0,0), that being the top left hand corner of the screen.

## Note:


> When specified values exceed either of the physical limits of the current terminal, then unpredictable results will occur.
> 
> Cursor addressing will not normally work when directed at a printer. Building printer independence into a program can be achieved by accessing the terminfo database through the SYSTEM() function.


If the function is given a screen code as an argument as below:

```
@(screen_code)
```

Where *screen\_code* is any valid jBASIC screen code, the function can be used to control the behavior of the display screen. Screen color can also be controlled. For example:

```
CRT @(-1):@(2, 30):"Hi there!":
```

The above can be used to clear the screen before the greeting "Hi there!" is displayed at the location specified by the second @ function.

Some valid screen codes are listed below:


| -1<br> | clear the screen and home the cursor.<br> |
| --- | --- |
| -2<br> | home the cursor.<br> |
| -3<br> | clear screen from the cursor to the end of the screen.<br> |
| -4<br> | clear screen from cursor to the end of the current screen line.<br> |
| -9<br> | move the cursor one character to the left.<br> |
| -10<br> | move the cursor one row up the screen.<br> |




Other @ codes include:


| @ACCOUNT<br> | Current account<br> |
| @AM<br> | CHAR(254)<br> |
| @CALLSTACK<br> | Call stack (i.e. if used in a subroutine)<br> |
| @CODEPAGE<br> | For International mode<br> |
| @COMMAND<br> | see @SENTENCE<br> |
| @CR<br> | Carriage return<br> |
| @DATA<br> | DATA input (e.g. when using EXECUTE)<br> |
| @DAY<br> | Calendar day number of the month<br> |
| @EOF<br> | Explain<br> |
| @ESC<br> | CHAR(27)<br> |
| @FALSE<br> | 0<br> |
| @FF<br> | Form feed character for printing<br> |
| @FILENAME<br> | Used in I-type dictionaries<br> |
| @FM<br> | see @AM<br> |
| @ID<br> | Used in I-type dictionaries<br> |
| @IM<br> | CHAR(255)<br> |
| @LEVEL<br> | EXECUTE level of nesting<br> |
| @LF<br> | Line-feed<br> |
| @LOCALE<br> | For International mode<br> |
| @LOGNAME<br> | Operating system login name<br> |
| @LPTRHIGH<br> | Page height<br> |
| @MONTH<br> | Current month number<br> |
| @PARASENTENCE<br> | see @SENTENCE<br> |
| @PATH<br> | Current working directory<br> |
| @PID<br> | Process ID<br> |
| @RECORD<br> | Used in I-type dictionaries<br> |
| @RM<br> | see @IM<br> |
| @SELECTED<br> | Item count from active select<br> |
| @SM<br> | see @SVM<br> |
| @SVM<br> | CHAR(252)<br> |
| @TAB<br> | Tab character<br> |
| @TIMEZONE<br> | env JBASE\_TIMEZONE<br> |
| @TM<br> | CHAR(251)<br> |
| @TRUE<br> | 1<br> |
| @TTY<br> | Current tty device<br> |
| @UDTNO<br> | see @USERNO<br> |
| @UID<br> | Operating system user ID<br> |
| @USER<br> | Operating system login name<br> |
| @USERNO<br> | jBASE port number<br> |
| @USERSTATS<br> | Current user statistics:<br>1&gt; The port number<br><br>&lt;2&gt; The number of programs running in this port.<br><br>&lt;3&gt; Time the user started in Universal Co-ordinated Time or UTC  (not a dyslexic mistake). This is raw UNIX time. You can convert this to jBASE  internal time format using the U0FF0 conversion or to internal date format using  the U0FF1 conversion.<br><br>&lt;4&gt; The process ID<br><br>&lt;5&gt; Account name<br><br>&lt;6&gt; User name. Normally the operating system name.<br><br>&lt;7&gt; Terminal name in jBASE format<br><br>&lt;8&gt; Terminal name in Operating system format.<br><br>&lt;9&gt; Database name<br><br>&lt;10&gt; TTY device name<br><br>&lt;11&gt; Language name.<br><br>&lt;12&gt; Time in UTC the listening thread last found the thread  alive.<br><br>&lt;13&gt; Amount of heap space memory in free space chain on a  process wide basis. Not real-time, only updated every 15 seconds.<br><br>&lt;14&gt; Amount of heap space memory in use on a process wide basis.  Not real-time , only updated every 15 seconds<br><br>&lt;15&gt; Thread type as an internal integer.<br><br>&lt;16&gt; Type of thread as a text string.<br><br>&lt;17&gt; License counters<br><br>&lt;18&gt; Number of OPEN’s performed.<br><br>&lt;19&gt; Number of READ’s performed.<br><br>&lt;20&gt; Number of WRITE's performed.<br><br>&lt;21&gt; Number of DELETE's performed<br><br>&lt;22&gt; Number of CLEARFILE's performed<br><br>&lt;23&gt; Number of PERFORM/EXECUTE's performed.<br><br>&lt;24&gt; Number of INPUT's performed.<br><br>&lt;25&gt; Not used.<br><br>&lt;26&gt; Number of jBASE files the application thinks it has open at  the moment.<br><br>&lt;27&gt; Number of jBASE files actually opened by the operating  system at the moment.<br><br>&lt;28&gt; Any data set by the application using @USER.ROOT<br><br>&lt;29&gt; Process Identifier. A string created by the operating  system to identify the process. It is O/S specific. Currenly on IBM i-series  platform only.<br><br>&lt;30&gt; to &lt;40&gt; Reserved.<br><br>Attributes 41 onward are multi-valued, one value per perform  level, and there are &lt;2&gt; perform levels active.<br><br>&lt;41,n&gt; Program name and command line arguments.<br><br>&lt;42,n&gt; The line number in jBASE BASIC the program is currently  executing.<br><br>&lt;43,n&gt; The source name in jBASE BASIC the program is currently  executing.<br><br>&lt;44,n&gt; Not used.<br><br>&lt;45,n&gt; Not used.<br><br>&lt;46,n&gt; Status of program execution as a readable text string.<br><br>&lt;47,n&gt; Status of program execution as an internal integer.<br><br>&lt;48,n&gt; User CPU time . Depending upon the hardware this will be  either for the entire process or just the single thread.<br><br>&lt;49,n&gt; System CPU time.Depending upon the hardware this will be  either for the entire process or just the single thread.<br><br>&lt;50,n&gt; User CPU time used by any external child processes it  might have spawned.<br><br>&lt;51,n&gt; System CPU time used by any external child processes it  might have spawned.<br><br>&lt;52,n&gt; Any data set by the application using @USER.THREAD<br><br> |
| @VM<br> | CHAR(253)<br> |
| @WHO<br> | see @ACCOUNT<br> |
| @YEAR<br> | Current year number<br> |




Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
