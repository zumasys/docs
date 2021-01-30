# JKEYAUTO GOTO

<PageHeader />

## Description

Transfer execution of the script to a specified label.

## Syntax

```
goto label
```

**label** is the label to which execution should go.

## Example

```
    counter = 0
nextloop: counter = counter + 1
    IF counter le 10 then print "loop ":counter ; goto nextloop
```

Back to [jkeyauto](./../jkeyauto/README.md)

<PageFooter />
