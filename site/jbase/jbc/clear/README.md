# CLEAR

<PageHeader />

## Description

The **CLEAR** statement will initialize all the variables to numeric 0. This can be used at any time in the execution of a program. It takes the general form:

```
CLEAR
```

As can be noted below:

```
Var1 = 99
Var2 = 50
CLEAR
```

The above code will clear the variables to zero.

This does not affect COM{MON}, unless the `clear_will_clear_common` emulation option is set.  
With this emulation option in place, only normal un-named COMMON will be cleared. It will not clear named common.

See also [CLEARCOMMON](./../clearcommon "jBC CLEARCOMMON")

## Note

>`clear_will_clear_common` is set by default in "d3" emulation.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
