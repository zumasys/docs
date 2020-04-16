# WEOF

<PageHeader />

## Description

The **WEOF** statement allows the program to write an EOF mark on an attached tape device. It takes the general form:

```
WEOF {ON expression}
```

Where:

**expression** specifies the device channel to use and should evaluate to a numeric integer argument in the range 0-9, the default value is zero.

If the **WEOF** fails it then executes the statements associated with any **ELSE** clause. [SYSTEM(0)](./../system-functions) will return the reason for the failure as follows:

| <!----> | <!----> |
| --- | --- |
| 1 | There is no media attached to the channel |
| 2 | End of media found |

A "tape" refers not only to magnetic tape devices but to any device described previously to jBASE.

If the specified channel has no assigned tape device, it enters the jBASE debugger with an appropriate message.

An example of use is as:

```
WEOF ON 5 ELSE
    CRT "No tape device exists for channel 5"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
