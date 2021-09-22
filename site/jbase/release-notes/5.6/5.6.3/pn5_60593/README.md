# PN5_60593

<PageHeader />

## Description

jBC: D3 style input timeout

### Previous Release Behavior

In D3 emulation, the jBC statements:

```
IN c FOR 0 ELSE CRT "No input provided."
INPUT reply FOR 0 ELSE CRT "No reply entered."
```

would wait indefinitely until something was entered.

### Current Release Behavior

When the FOR value is set to zero the statement will execute the ELSE clause.

Programs requiring this behavior must be compiled in D3 emulation.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
