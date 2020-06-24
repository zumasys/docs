# libutils

<PageHeader />

**Tags:**
<badge text='terminal independence' vertical='middle' />

The libutils shared library is provided to enable users to develop terminal independent code to handle keyboard input. For example:

```
* Include key definitions
INCLUDE jCmdKeys.h
* Initialize command key strings
CALL CommandInit
TimeOut = 150 ;* Set timeout value deciseconds
ECHO OFF
LOOP
    * Get Next Command Value
    CALL CommandNext(RetNo, RetString, TimeOut)
    * RetNo should match numbers in include/header file
    BEGIN CASE
        CASE RetNo = cmd_cursor_up
           CRT "Cursor up"
        CASE RetNo = cmd_cursor_down
           CRT "Cursor down"
        CASE RetNo = cmd_cursor_left
           CRT "Cursor left"
        CASE RetNo = cmd_cursor_right
           CRT "Cursor right"
        CASE RetNo = cmd_alpha_numeric
           CRT "Alpanumeric
        CASE RetNo = cmd_timeout
           CRT "Timeout"
           BREAK
    END CASE
    * Output the actual string returned
    CRT "RetString : " : OCONV(RetString,"MCP.")
REPEAT
```

[Back to Tools](./../README.md)

<PageFooter />
