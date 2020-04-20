# CONTROL-CHARS

<PageHeader />

**Tags:**
<badge text='control charaters' vertical='middle' />
<badge text='input' vertical='middle' />

## Description

The **CONTROL-CHARS** command is used to control whether or not the jBC **INPUT** statement accepts characters outside the printable range (decimal 32 through 126).

```
 CONTROL-CHARS {ON | OFF}
```

where:

- **CONTROL-CHARS ON** - disallows the input of control characters
- **CONTROL-CHARS OFF** - allows the input of control characters
- **CONTROL-CHARS** - reports the current state

An example of use is as:

```
CONTROL-CHARS
Control characters OFF (allowed)
```

## Note

> The default behavior is to allow the input of control characters. The setting is ignored by the jBC IN statement.

Back to [Utilities](./../utilities)
  
<PageFooter />
