# jCL-F ;

<PageHeader />

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

- **element** - operator/operands,
- **?P** - moves the result (top stack entry) into the current parameter of the primary input buffer.
- **?r** - moves the result (top stack entry) into the reference r. Can be a direct or indirect reference to a buffer.

## Operators

| Operator | Role |
| --- | --- |
| + | Add last stack entry and penultimate stack entry. Store the result in stack entry 1. |
| - | Subtract last stack entry from penultimate stack entry. Store the result in stack entry 1. |
| \* | Multiply the last two stack entries. Store the result in stack entry 1. |
| / | Divide stack entry 2 by stack entry 1. Store the result in stack entry 1. |
| R | Divide stack entry 2 by stack entry 1. Store the remainder in stack entry 1. |
| \_ | Reverse the last two stack entries. |

## Operands

| Operand | Role |
| --- | --- |
| r | A direct or indirect reference to a buffer or select register value to be put on the stack. |
| {C}literal | Literal value specified by literal. |

## Note

> The F; command uses a stack processor similar to the one used by the F; function in jQL . Commands are processed from left to right. Each operand pushes a value on to the top of the push-down/pop-up stack. The result of a calculation can be copied into any buffer with the question mark (?) operator.

### Example

```
|     Command     |  PIB Before   |  PIB After   |
|     -------     |  ----------   |  ---------   |
| F;C100;%2;-;?%3 | 6^8^999^7^GHI | 6^8^92^7^GHI |

Stack              100
```

%2 pushes a value of 8 (the 2nd parameter of the PIB) onto the stack.

```
Stack              100
                   8
```

-subtracts last entry from penultimate entry, and replaces last entry 1 with the result of 92.

```
Stack              92
```

?%3 then copies the result to the 3rd parameter of the PIB, replacing the old value.

Back to [jCL.](./../README.md)
  
<PageFooter />