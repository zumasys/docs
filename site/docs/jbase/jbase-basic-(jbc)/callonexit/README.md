# CALLONEXIT

**Created At:** 7/24/2017 12:53:24 PM  
**Updated At:** 10/25/2018 6:58:09 AM  
**Original Doc:** [264317-callonexit](https://docs.jbase.com/36868-jbase-basic/264317-callonexit)  
**Original ID:** 264317  
**Internal:** No  

## Description

The **CALLONEXIT** function call allows you to specify the name of a [SUBROUTINE](./../subroutine) to call when the program terminates. The function takes the general form:

```
CALLONEXIT("ErrorExit")
```

Where the subroutine definition would be as:

```
SUBROUTINE ErrorExit(param1)
```

Where **Param1** is a parameter passed to the function. It is possible to add parameters to the error subroutine by adding multi-values to the parameter to **CALLONEXIT**, which are passed to the called subroutine in the first parameter.

## Note

> If executed multiple times, **CALLONEXIT** with the same subroutine name, will discard other calls. If executed multiple times with a different subroutine name, then upon exit multiple subroutines will be called in the order that **CALLONEXIT** was called.

All efforts are made to call the subroutine under all circumstances. However, if a **SIGKILL** (signal 9) terminates the program, which cannot be trapped, it does not call the subroutine. This is a feature of operating systems, not a limitation. In addition, if the program terminates due to say a memory error, then calling the subroutines depends upon how badly the memory error has corrupted the memory.

The function can be used as follows:

Consider the simple programs below. The program enters the debugger. If at this point the login session terminates for any reason (the line drops, the program is killed, the user enters 'off' at the debugger prompt) , the two specified subroutines (ErrorExit and EndProgram) will still be called just as they would if the program were allowed to terminate normally.

```
PROGRAM PROG1
rc = CALLONEXIT("ErrorExit")
EXECUTE "PROG2"
```

```
PROGRAM PROG2
rc = CALLONEXIT("EndProgram")
DEBUG
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
