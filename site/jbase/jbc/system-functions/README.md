# jBASE BASIC: System Functions

<PageHeader />

**Tags:**
<badge text='jbcglobaldir' vertical='middle' />
<badge text='jbcreleasedir' vertical='middle' />
<badge text='trace' vertical='middle' />
<badge text='stack' vertical='middle' />

The following system functions are supported by jBASE:

- **SYSTEM(0)** Return the last error code
- **SYSTEM(1)** Return 1 if output directed to printer
- **SYSTEM(2)** Return page width
- **SYSTEM(3)** Return page depth
- **SYSTEM(4)** Return number of lines to print in current page. ([HEADING](./../heading) statement)
- **SYSTEM(5)** Return current page number ([HEADING](./../heading) statement)
- **SYSTEM(6)** Return current line number ([HEADING](./../heading) statement)
- **SYSTEM(7)** Return terminal type
- **SYSTEM(8)** Return record length for tape channel 0
- **SYSTEM(9)** Return CPU milliseconds
- **SYSTEM(10)** Return 1 if stacked input available
- **SYSTEM(11)** Returns the number of items in an active select list or 0 if no list is active
- **SYSTEM(12)** Return 1/1000, ( or 1/10 for ROS), seconds past midnight
- **SYSTEM(13)** Release time slice
- **SYSTEM(14)** Returns the number of characters available in input buffer. Invoking **SYSTEM(14)** can cause a slight delay in program execution.
- **SYSTEM(15)** Return bracket options used to invoke command
- **SYSTEM(16)** Return current [PERFORM/EXECUTE](./../execute) level
- **SYSTEM(17)** Return stop code of child process
- **SYSTEM(18)** Return port number or JBCPORTNO
- **SYSTEM(19)** Return login name or JBASICLOGNAME.
  - If the **system\_19\_timedate** emulation option is set then returns the number of seconds since midnight December 31, 1967.
  - If **system\_19\_timedate\_unique** emulation option is set then a suffix is appended if it is called more than once per second, effectively returning a unique value.
- **SYSTEM(20)** Returns last spooler file number created
- **SYSTEM(21)** Returns port number or JBCPORTNO
- **SYSTEM(22)** Reserved
- **SYSTEM(23)** Returns status of the break key  
  - 0 Enabled
  - 1 Disabled by BASIC
  - 2 Disabled by Command
  - 3 Disabled by Command and BASIC
- **SYSTEM(24)** Returns 1 if echo enabled, 0 if echo disabled
- **SYSTEM(25)** Returns 1 if background process
- **SYSTEM(26)** Returns current prompt character
- **SYSTEM(27)** Returns 1 if executed by PROC
- **SYSTEM(28)** Returns 1 if the [CASING](../../miscellaneous/case-insensitive-overview/README.md) statement is set to `ON` or if the `case_insenstive_runtime_strings` emulation option is set to `true`.
- **SYSTEM(29)** Reserved.
- **SYSTEM(30)** Returns 1 if paging is in effect ([HEADING statement](./../heading))
- **SYSTEM(31)** Reserved
- **SYSTEM(32)** Reserved
- **SYSTEM(33)** Reserved
- **SYSTEM(34)** Reserved
- **SYSTEM(35)** Returns language in use as a name or number (ROS)
- **SYSTEM(36)** Reserved
- **SYSTEM(37)** Returns thousands separator
- **SYSTEM(38)** Returns decimal separator
- **SYSTEM(39)** Returns money symbol
- **SYSTEM(40)** Returns program name
- **SYSTEM(41)** Returns release number
- **SYSTEM(42)** Reserved
- **SYSTEM(43)** Returns port number of item lock
- **SYSTEM(44)** Returns 99 for jBASE system type
- **SYSTEM(45)** Reserved
- **SYSTEM(46)** Reserved
- **SYSTEM(47)** Returns 1 if currently in a transaction
- **SYSTEM(48)** Reserved
- **SYSTEM(49)** Returns PLID environment variable
- **SYSTEM(50)** Returns login user id
- **SYSTEM(51)** Reserved
- **SYSTEM(52)** Returns system node name
- **SYSTEM(53)** Reserved
- **SYSTEM(100)** Returns program create information
- **SYSTEM(101)** Returns port number or JBCPORTNO
- **SYSTEM(102)** Reserved
- **SYSTEM(1000)** Returns command line separated by attribute marks
- **SYSTEM(1001)** Returns command line and options
- **SYSTEM(1002)** Returns temporary scratch file name
- **SYSTEM(1003)** Returns terminfo Binary definitions
- **SYSTEM(1004)** Returns terminfo Integer definitions
- **SYSTEM(1005)** Returns terminfo String definitions
- **SYSTEM(1006)** Reserved
- **SYSTEM(1007)** Returns system time
- **SYSTEM(1008)** Returns SYSTEM file path
- **SYSTEM(1009)** Returns MD file path
- **SYSTEM(1010)** Returns Print Report information
- **SYSTEM(1011)** Returns jBASE release directory path. JBCRELEASEDIR
- **SYSTEM(1012)** Returns jBASE global directory path. JBCGLOBALDIR
- **SYSTEM(1013)** Returns memory usage [see **SYSTEM(1042)**]:
  - &lt;1&gt; Free memory small blocks
  - &lt;2&gt; Free memory large blocks
  - &lt;3&gt; Used memory small blocks
  - &lt;4&gt; Used memory large blocks
- **SYSTEM(1014)** Returns relative PROC level
- **SYSTEM(1015)** Returns effective user name. LOGNAME
- **SYSTEM(1016)** Returns tape assignment information
- **SYSTEM(1017)** Returns platform. UNIX, WINNT or WIN95
- **SYSTEM(1018)** Returns configured processors
- **SYSTEM(1019)** Returns system information (uname -a)
- **SYSTEM(1020)** Returns login user name
- **SYSTEM(1021)** jBASE release information:
  - &lt;1&gt; Major release number
  - &lt;2&gt; Minor release number
  - &lt;3&gt; Patch level
  - &lt;4&gt; Copyright information
- **SYSTEM(1022)** Returns the status of jBASE profiling:
  - 0 - no profiling is active
  - 1 - full profiling is active
  - 2 - short profiling is active
  - 3 - jCOVER profiling is active
- **SYSTEM (1023)** Used by [STATUS](./../status-function)
- **SYSTEM(1024)** Retrieves details about last signals
- **SYSTEM(1025)** Returns value of International mode for thread
- **SYSTEM(1026)** Total amount of memory in use formatted with commas
- **SYSTEM(1027)** Returns directory PROC; Used by WHERE, LISTU Information about running processes can be obtained via the PROC jedi....

This jEDI enables retrieval of information from executing processes and is the interface now used by the WHERE command...

```
OPEN SYSTEM(1027) TO PROC ELSE STOP 201, "PROC"
SELECT PROC TO Sel
LOOP
WHILE READNEXT key FROM Sel DO
    READ ProcessRecord FROM PROC, key ELSE CRT "Read Error"; STOP
REPEAT
```

Info for current user can be returned from the @USERSTATS variable. Attribute descriptions for Process Records returned from the PROC Jedi READ interface.

&lt;1&gt; Port number  
&lt;2&gt; Number of programs running  
&lt;3&gt; Connect time  
&lt;4&gt; Process ID  
&lt;5&gt; Account name  
&lt;6&gt; User name  
&lt;7&gt; Terminal name in jBASE format  
&lt;8&gt; Terminal name in UNIX format  
&lt;9&gt; Database name  
&lt;10&gt; Name of the tty device  
&lt;11&gt; Language name  
&lt;12&gt; Time listening thread executed  
&lt;13&gt; Mallinfo memory free  
&lt;14&gt; Mallinfo memory used  
&lt;15&gt;Type of thread as a number  
&lt;16&gt; Type of thread as a string where:  

thread\_type\_string = "Normal" = 1  
thread\_type\_string = "javaOBjEX" = 2  
thread\_type\_string = "vbOBjEX" = 3  
thread\_type\_string = "jrfs" = 4  
thread\_type\_string = "Compiler" = 5  

&lt;17&gt; Number of instructions executed and licenses allocated to work around a bug in Windows. Need to build the buffer in separate sprintf's  
&lt;18&gt; Number of OPEN's  
&lt;19&gt; Number of READ's  
&lt;20&gt; Number of WRITE's  
&lt;21&gt; Number of DELETE's  
&lt;22&gt; Number of CLEARFILE's  
&lt;23&gt; Number of EXECUTE's  
&lt;24&gt; Number of INPUT's  
&lt;25&gt; UNUSED  
&lt;26&gt; Number of files the application thinks is open  
&lt;27&gt; Number of files that in reality are opened by the OS  
&lt;28&gt; Application data set by @USER.ROOT  
&lt;29&gt; Text String to identify process  
&lt;41&gt; Command line arguments &lt; threadnext &gt;  
&lt;42&gt; Current Line Number &lt; threadnext &gt;  
&lt;43&gt; Name of source &lt;threadnext &gt;  
&lt;44&gt; Status as a text string &lt; threadnext &gt;

status = "Program running normally"  
status = "Program is SLEEPING"  
status = "Program in DEBUGGER"  
status = "Program at keyboard INPUT"  
status = "Program blocked on record LOCK"  
status = "Program performing EXECUTE/PERFORM"  
status = "Error!! Status unknown"  

&lt;47&gt; Status as an integer &lt;threadnext &gt;  
&lt;48&gt; User CPU time &lt;threadnext &gt;  
&lt;49&gt; System CPU time &lt;threadnext &gt;  
&lt;50&gt; Child User CPU time &lt;threadnext &gt;  
&lt;51&gt; Child System CPU time &lt;threadnext &gt;  
&lt;52&gt; User defined thread data &lt;threadnext &gt;  

- **SYSTEM(1028)** Logged in database name
- **SYSTEM(1029)** Shows the [CALL](./../call) stack history so that in error conditions the application, such as database I/O statistics, programs being performed and so on. Can be used with @USERSTATS.
- **SYSTEM(1030)** This new entry into the **SYSTEM()** function returns the current perform level in the  range 1 to 32. This is similar to **SYSTEM(16)**, which returns the nested execute level. The difference is that **SYSTEM(16)** does not include any procs, paragraphs or shells and returns the relative application program level
- **SYSTEM(1031)** Number of free bytes on the current file system
- **SYSTEM(1032)** Returns default frame size
- **SYSTEM(1034)** Returns handle of the current thread
- **SYSTEM(1035)** Returns the license type: 1 = Standard, 4 = MultiSession, 6 = WebSession
- **SYSTEM(1042)** The sum of **SYSTEM(1013)&lt;3&gt;** + **SYSTEM(1013)&lt;4&gt;**
- **SYSTEM(1043)** Internal system call to indicate whether the output of a program currently running is bing captured.
- **SYSTEM(2092)** Return current prompt character(s) (D3 emulation)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
