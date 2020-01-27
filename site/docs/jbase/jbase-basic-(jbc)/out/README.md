# OUT

**Created At:** 9/22/2017 12:02:18 PM  
**Updated At:** 1/31/2019 4:56:05 PM  
**Original Doc:** [277625-out](https://docs.jbase.com/36868-jbase-basic/277625-out)  
**Original ID:** 277625  
**Internal:** No  

**Tags:**
<badge text='output' vertical='middle' />
<badge text='terminal' vertical='middle' />

# Description

The **OUT** statement is used to send raw characters to the current output device (normally the terminal). The statement takes the general form:

```
OUT expression
```

Where **expression** should evaluate to a numeric integer in the range 0 to 255, being the entire range of ASCII characters.

## Note: 


> The numeric **expression** is first converted to the raw ASCII character specified and then sent directly to the output advice.


An example of use is as:

```
EQUATE BELL TO OUT 7
BELL ;* Sound terminal bell

FOR I = 32 TO 127;
     OUT I;* Printable chars
NEXT I ;

BELL
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
