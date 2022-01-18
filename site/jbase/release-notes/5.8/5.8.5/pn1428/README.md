# PN1428

<PageHeader />

## Description

SEGV can occur during a complex store

## Previous Release Behavior

The following code snippet will result in either a SEGV, or in a substantial amount of garbage data being sent to the terminal:

```
A = @FALSE
SMALL = 0.001
A = 1000000000000000 * SMALL
Y = ""
Y<1,1> = A
CRT Y->$mcp()
```

## Current Release Behavior

Works fine

```text
jsh SandBox ~ -->PN1428.Test
1000000000000
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
