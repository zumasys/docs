# SEND

<PageHeader />

## Description

The **SEND** statement sends a block of data directly to a device. This takes the general form:

```
SEND output {:} TO FileVar THEN | ELSE statements
```

Where:

**output** is an expression evaluating to a string that will be sent to the output device (specified by **FileVar**). It is expected that the device has already been opened with [OPENSER](./../openser) or [OPENSEQ](./../openseq).
The **SEND** statement will append a newline sequence to the final output expression unless it is terminated with a colon ":" character.

## Note

> As the expression can be any valid expression, it may have output formatting applied to it.
> The **SEND** syntax requires you specify either a **THEN** or **ELSE** clause, or both. IIf the data is send without error, it executes the **THEN** clause. If the data cannot be sent, it executes the **ELSE** clause.
>
> View other sequential file operations for examples of use.

See also: [SENDX](./../sendx) .

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
