# CLEARINPUT

**Created At:** 8/14/2017 9:26:14 AM  
**Updated At:** 10/24/2018 10:59:16 PM  
**Original Doc:** [266854-clearinput](https://docs.jbase.com/36868-jbase-basic/266854-clearinput)  
**Original ID:** 266854  
**Internal:** No  


# Description

The command clears the terminal type-ahead buffer to allow the next **INPUT** statement to force a response from the user. The statement can be used as:

```
CLEARINPUT
```

In the following example, the **CLEARINPUT** statement clears the terminal type-ahead buffer to provoke a response from the user to the prompt:

```
CLEARINPUT
PRINT "DO YOU WANT TO DELETE THIS FILE? (Y OR N)"; 
INPUT X, 1
```

# Note:


> CLEARINPUT command is synonymous with INPUTCLEAR.

