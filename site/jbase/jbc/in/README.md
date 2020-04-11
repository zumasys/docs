# IN

**Created At:** 9/13/2017 2:03:36 PM  
**Updated At:** 11/27/2018 9:07:55 AM  
**Original Doc:** [in](https://docs.jbase.com/36868-jbase-basic/in)  
**Original ID:** 276637  
**Internal:** No  

**Tags:**
<badge text='external input' vertical='middle' />

## Description

The **IN** statement allows the program to receive raw data from the input device, which is normally the terminal keyboard, one character at a time. It takes the general form:

```
IN Var {FOR expression THEN|ELSE statements}
```

Where:

- **Var** will be assigned the numeric value (0 - 255 decimal) of the next character received from the input device. The statement will normally wait indefinitely (block) for a character from the keyboard.
- Specifying the **FOR** clause to the **IN** statement allows the statement to stop waiting for keyboard after a specified amount of time. The expression should evaluate to a positive numeric value, which will be taken as the number of deci-seconds (tenths of a second) to wait before abandoning the input, at which time it will take the **ELSE** clause.
- If **expression** is 0 (zero) then input will wait indefinitely until something is entered.  In D3 emulation, a value of 0 will automatically take the **ELSE** clause.

The **FOR** clause must have either or both of the **THEN** or **ELSE** clauses If a character is received from the input device before the time-out period then **Var** is assigned its numeric value and the THEN clause is executed (if present). If the input statement times out before a character is received then **Var** is unaltered and the **ELSE** clause is executed (if present).

An example of use is as:

```
 * Echoes the keystroke and its decimal equivalent
 *
PROMPT ""
doomsday = @FALSE
CRT "Stops if no input in 5 seconds."
LOOP UNTIL doomsday DO
    ECHO OFF
    IN chr FOR 50 ELSE ECHO ON; STOP
    ECHO ON
    IF chr >= 32 AND chr < 128 THEN CRT CHAR(chr) "#2" : ELSE CRT "  " :
    CRT chr "R#4"
REPEAT
```

Sample output would be as follows:

```
Stops if no input in 5 seconds.
1   49
2   50
5   53
6   54
*   42
7   55
+   43
=   61
!   33
"   34
   163
|  124
\   92
/   47
```

See also: [INPUT](./../input) , [INPUTNULL](./../inputnull).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
