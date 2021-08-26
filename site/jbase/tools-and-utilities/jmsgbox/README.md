# JMSGBOX

<PageHeader />

The jmsgbox utility can be used to display a message box on Windows platforms.  

It can only be used with a console process and the buttons are not configurable.

## Command Syntax

```
jmsgbox text 
```

## Example

```
PERFORM "jmsgbox Test Box" SETTING Result
IF Result<1,1> = 0 THEN CRT "Ok was clicked"
IF Result<1,1> = 1 THEN CRT "Cancel was clicked"
```

Back to [Tools and Utilities](./../README.md)

<PageFooter />
