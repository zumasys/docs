# ECHO

**Created At:** 8/23/2017 2:35:51 PM  
**Updated At:** 10/25/2018 7:48:03 AM  
**Original Doc:** [268495-echo](https://docs.jbase.com/36868-jbase-basic/268495-echo)  
**Original ID:** 268495  
**Internal:** No  

**Tags:**
<badge text='keyboard entry' vertical='middle' />

# Description

The **ECHO** statement will turn on or off the echoing of characters typed at the keyboard.

```
ECHO ON
```

or

```
ECHO OFF
```

or

```
ECHO expression
```

Where the statement, if used with the keywords **ON** and **OFF**, may serve to specify echoing or not.

If used with an **expression**, then the expression should evaluate to a Boolean TRUE or FALSE result.

TRUE: echoing on

FALSE: echoing off.

## Note:


> The [SYSTEM](./../system-functions) function is used to determine the current state of character echoing. [SYSTEM(24)](./../system-functions) returns Boolean TRUE if enabled and returns Boolean FALSE if disabled.


An example of use is as:

```
ECHO OFF
CRT "Enter your password ":
INPUT Password
ECHO ON
```

The above would disable the character input echoing while typing in a password. After the character echoing will be turned back on.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
