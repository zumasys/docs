# JCL.F ;

**Created At:** 5/28/2018 10:24:11 AM  
**Updated At:** 6/11/2018 4:18:05 AM  
**Original Doc:** [318627-jcl-f](https://docs.jbase.com/45792-jcl/318627-jcl-f)  

**Tags:**
<badge text='arithmetic' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command provides a range of arithmetic functions. It takes the general form:

```
F;element{;element}...;?[P|r]
```

where:

- element - operator/operands,
- ?p - moves the result (top stack entry) into the current parameter of the primary input buffer.
- ?r - moves the result (top stack entry) into the reference r. Can be a direct or indirect reference to a buffer.




**Operators**


| Operator<br> | Role<br> |
| --- | --- |
| +<br> | Add last stack entry and penultimate stack entry. Store the result in stack entry 1.<br> |
| -<br> | Subtract last stack entry from penultimate stack entry. Store the result in stack entry 1.<br> |
| \*<br> | Multiply the last two stack entries. Store the result in stack entry 1.<br> |
| /<br> | Divide stack entry 2 by stack entry 1. Store the result in stack entry 1.<br> |
| R<br> | Divide stack entry 2 by stack entry 1. Store the remainder in stack entry 1.<br> |
| \_<br> | Reverse the last two stack entries.<br> |




**Operands**


| Operand<br> | Role<br> |
| --- | --- |
| r<br> | A direct or indirect reference to a buffer or select register value to be put on the stack.<br> |
| {C}literal<br> | Literal value specified by literal.<br> |




## Note: 


> The F; command uses a stack processor similar to the one used by the F; function in jQL . Commands are processed from left to right. Each operand pushes a value on to the top of the push-down/pop-up stack. The result of a calculation can be copied into any buffer with the question mark (?) operator.




##### EXAMPLE


| Command<br> | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| F;C100;%2;-;?%3<br> | 6^8^999^7^GHI<br> | 6^8^92^7^GHI<br> |
| Stack<br> | 100<br> |


%2 pushes a value of 8 (the 2nd parameter of the PIB) onto the stack.


| Stack<br> | 100<br> |
| <br> | 8<br> |


-subtracts last entry from penultimate entry, and replaces last entry 1 with the result of 92.


| Stack<br> | 92<br> |


?%3 then copies the result to the 3rd parameter of the PIB, replacing the old value.



Back to [JCL Commands](jcl-commands).
