# @variables

<PageHeader />

**Tags:**
<badge text='@variable' vertical='middle' />
<badge text='pwd' vertical='middle' />
<badge text='@' vertical='middle' />

## @variables used in BASIC and I-type dictionary items

### @ACCOUNT

- Read-only
- The name of the account logged into.

### @AM

- Read-only
- Attribute mark - CHAR(254)

### @CALLSTACK

- Read-only
- Call stack (i.e. if used in a subroutine)

### @CODEPAGE  

- Read-only
- Returns the code page being used when in International mode.

### @COMMAND

- Read-only
- See [@SENTENCE](#sentence)

### @CR

- Read-only
- Carriage return - CHAR(13)

### @DATA

- Read-only
- DATA input (e.g. when using EXECUTE)

### @DAY

- Read-only
- Calendar day number of the month

### @EOF

- Read-only
- End-of-file marker - CHAR(04)

### @ESC

- Read-only
- Escape character - CHAR(27)

### @FALSE

- Read-only
- Boolean 0

### @FF

- Read-only
- Form feed character (for printing) - CHAR(12)

### @FILENAME

- Read-write
- Used in I-type dictionaries to obtain file name being used.

### @FILEVAR

- Read-only
- File variable (i.e. used in an I-type subroutine)

### @FM

- Read-only
- File Mark - [see @AM](#am)

### @ID

- Read-only
- Current record ID

### @IM

- Read-only
- Item mark - CHAR(255)

### @LEVEL

- Read-only
- EXECUTE level of nesting

### @LF

- Read-only
- Line-feed - CHAR(10)

### @LOCALE

- Read-only
- Returns the current setting for JBASE_LOCALE

### @LOGNAME

- Read-only
- Operating system login name

### @LPTRHIGH

- Read-only
- Page height of current printer device

### @MONTH

- Read-only
- Current month number

### @PARASENTENCE

- Read-only
- see [@SENTENCE](#sentence)

### @PATH

- Read-only
- Current working directory

### @PID

- Read-only
- Current Process ID

### @RECORD

- Read-only
- Current record (Used in I-type dictionaries)

### @RM

- Read-only
- Record mark - see [@IM](#im)

### @SELECTED

- Read-only  
- Item count from active select

### @SENTENCE

- Read-only
- The last sentence or paragraph that invoked the current process

### @SM

- Read-only
- Sub-value mark - see [@SVM](#svm)

### @SVM

- Read-only
- Sub-value mark - CHAR(252)

### @TAB

- Read-only
- Horzontal tab character  - CHAR(9)

### @TIMEZONE

- Read-only
- current setting for JBASE\_TIMEZONE

### @TM

- Read-only
- Text mark - CHAR(251)

### @TRUE

- Read-only
- Boolean 1

### @TTY

- Read-only
- Current terminal device name

### @UDTNO

- Read-only
- see [@USERNO](#userno)

### @UID

- Read-only
- Operating system user ID

### @UNASSIGNED

- Read-only
- Unassigns a variable

### @USER

- Read-only
- Operating system login name

### @USER0

- Read-write
- User defined

### @USER1

- Read-write
- User defined

### @USER2

- Read-write
- User defined

### @USER3

- Read-write
- User defined

### @USER4

- Read-write
- User defined

### @USERNO

- Read-only
- jBASE port number

### @USERSTATS

- Read-only
- Current user statistics:  
    <1> The port number  
    <2> The number of programs running in this port.  
    <3> Time the user started in Universal Co-ordinated Time or UTC  (not a dyslexic mistake). This is raw UNIX time. You can convert this to jBASE  internal time format using the U0FF0 conversion or to internal date format using  the U0FF1 conversion.  
    <4> The process ID.  
    <5> Account name.  
    <6> User name. Normally the operating system name.  
    <7> Terminal name in jBASE format.  
    <8> Terminal name in Operating system format.  
    <9> Database name.  
    <10> TTY device name.  
    <11> Language name.  
    <12> Time in UTC the listening thread last found the thread alive.  
    <13> Amount of heap space memory in free space chain on a  process wide basis. Not real-time, only updated every 15 seconds.  
    <14> Amount of heap space memory in use on a process wide basis.  Not real-time , only updated every 15 seconds.  
    <15> Thread type as an internal integer.  
    <16> Type of thread as a text string.  
    <17> License counters.  
    <18> Number of OPEN’s performed.  
    <19> Number of READ’s performed.  
    <20> Number of WRITE's performed.  
    <21> Number of DELETE's performed.  
    <22> Number of CLEARFILE's performed.  
    <23> Number of PERFORM/EXECUTE's performed.  
    <24> Number of INPUT's performed.  
    <25> Not used.  
    <26> Number of jBASE files the application thinks it has open at the moment.  
    <27> Number of jBASE files actually opened by the operating system at the moment.  
    <28> Any data set by the application using @USER.ROOT  
    <29> Not used.  
    <30> to <40> Reserved.  
    Attributes 41 onwards are multi-valued, one value per perform level, and there are <2> perform levels active.  
    <41,n> Program name and command line arguments.  
    <42,n> The line number in jBASE BASIC the program is currently executing.  
    <43,n> The source name in jBASE BASIC the program is currently executing.  
    <44,n> Not used.  
    <45,n> Not used.  
    <46,n> Status of program execution as a readable text string.  
    <47,n> Status of program execution as an internal integer.  
    <48,n> User CPU time. Depending upon the hardware this will be either for the entire process or just the single thread.  
    <49,n> System CPU time. Depending upon the hardware this will be either for the entire process or just the single thread.  
    <50,n> User CPU time used by any external child processes it might have spawned.  
    <51,n> System CPU time used by any external child processes it might have spawned.  
    <52,n> Any data set by the application using @USER.THREAD  

### @VM

- Read-only
- Value mark - CHAR(253)  

## @WHO

- Read-only
- see [@ACCOUNT](#account)  

### @YEAR

- Read-only
- Current year number.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
