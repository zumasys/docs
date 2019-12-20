# DATA

**Created At:** 8/16/2017 1:01:39 PM  
**Updated At:** 10/25/2018 7:12:50 AM  


# Description 

The **DATA** statement stacks the series of expressions on a terminal input FIFO stack. Terminal input statements will then treat this data as if entered at the keyboard.

```
DATA expression {, expression ...}
```

Where the **expression** may evaluate to any data type; views each comma-separated expression as one line of terminal input.

## Note:


> The data stacked for input will subsequently be treated as input by any jBASE BASIC program.
> 
> Therefore use it before [PERFORM/EXECUTE](269198-execute), [CHAIN](264324-chain) or any other method of transferring program execution. Use also to stack input for the currently executing program; do not use to stack input back to an executing program.


When a jBASE BASIC program detects stacked data, it is taken as keyboard input until the stack is exhausted. The program will then revert to the terminal device for subsequent terminal input.

Stacked data delimited by field marks (xFE) will be treated as a series of separate terminal inputs. An example of use is as:

```
001    PROGRAM EXAMPLE1
002    DATA "Y", "N", "CONTINUE" ;* stack input for PROGRAM1
003    EXECUTE "PROGRAM1"        ;* execute the program

001    PROGRAM EXAMPLE2
002    DATA "Y":@AM:"N":@AM:"CONTINUE"; * stack input for PROGRAM1
003    EXECUTE "PROGRAM1"; * execute the program
```



PROGRAM1 can simply be:

```
001    PROGRAM PROGRAM1
002    INPUT reply1
003    INPUT reply2
004    INPUT reply3
005    CRT reply1, reply2, reply3
```



Running either EXAMPLE1 or EXAMPLE2 will produce the same result:

```
jsh ~ -->EXAMPLE1
Y       N       CONTINUE
jsh ~ -->
```



See also: [CLEARDATA](266852-cleardata)

Go back to [jBASE BASIC](263498-jbase-basic).
