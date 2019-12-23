# ONGOTO

**Created At:** 9/21/2017 11:57:14 AM  
**Updated At:** 1/5/2018 5:51:32 PM  
**Original Doc:** [277534-ongoto](https://docs.jbase.com/36868-jbase-basic/277534-ongoto)  


# Description

The [ON...GOSUB](./../gosub) and**ON...GOTO** statements are used to transfer program execution to a label based upon a calculation, or a condition being met. They take the general form:

```
ON expression GOTO label{, label...}
```

or

```
ON expression GOSUB label{, label...}
```

Where:

expression should evaluate to an integer numeric value. Labels should be defined somewhere in the current source file.

**ON GOTO** will transfer execution to the labeled source code line in the program.

[ON GOSUB](./../gosub) will transfer execution to the labeled subroutine within the source code.

## Note: 


> - Use the value of expression as an index to the list of labels supplied. If the expression evaluates to 1 then the first label will be jumped to, 2 then the second label will be used and so on.
> - If the program was compiled when the emulation included the setting generic\_pick = true, then no validations are performed on the index to see if it is valid. Therefore, if the index is out of range this instruction will take no action and report no error.
> - If the program was compiled for other emulations then the index will be range checked. If found that the index is less than 1, it is assumed to be 1 and a warning message is issued If the index is found to be too big, then the last label in the list will be used to transfer execution and a warning message issued.


An example of use may be as:

```
PROMPT ":"
3 *
PRINT @(29,28): "HELLO, PLEASE ENTER 1 TO CONTINUE OR ANOTHER KEY TO EXIT":
INPUT VAL
IF NUM(VAL) THEN
    IF VAL = 1 THEN
        GOTO 3
    END
    ELSE
        STOP
    END
END
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
