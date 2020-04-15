# INPUTCLEAR

<PageHeader />

## Description

The **INPUTCLEAR** statement clears the type-ahead buffer. It is useful in situations where the user may have pressed the carriage return key several times prior to reaching an [INPUT](./../input) that requires attention.

It takes the general form:

```
INPUTCLEAR
```

**INPUTCLEAR** only clears the type-ahead buffer. It does not clear data stacked with the [DATA](./../data) statement. The statement is synonymous with [CLEARINPUT](./../clearinput).

An example of use is as:

```
CRT "Start year end processing (Yes/No) :"
INPUTCLEAR
INPUT ans
IF ans # "Yes" THEN
    CRT "Year end processing not started"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
