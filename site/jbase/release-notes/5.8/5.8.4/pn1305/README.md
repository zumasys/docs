# PN1305

<PageHeader />

## Description

Debugger stack issue

## Previous Release Behavior

The debugger stack was not correctly tracking all the subroutines called, i.e.:

```
    PAT.TEST.SUB1.b
001     PROGRAM PAT.TEST.SUB1
002 *
003     A=1
004     CALL PAT.TEST.SUB2(A)
005     CRT "Done"
006 *
007 END

    PAT.TEST.SUB2.b
001     SUBROUTINE PAT.TEST.SUB2(A)
002     A+=1
003     CRT "Depth = " : A
004     CRT "X to go back, <Return> to go deeper ":; INPUT OPT
005     IF OPT='X' THEN RETURN
006     CALL PAT.TEST.SUB2(A)
007     RETURN
008 *
009 END
```

When running the above test, at a stack depth of three or more there was no indication that TEST.SUB2 had been called.

## Current Release Behavior

Debugger stack correctly reflects the stack depth and the subroutines called:

```bash
# Using the "stack" option in the debugger, the following is an example of the output which can be obtained:

"stack_list":[
        {
                "call_level":4,
                "gosub_level":1,
                "source_name":"PAT.TEST.SUB2.b",
                "line_number":4,
                "source":"0004     CRT \"X to go back, <Return> to go deeper \":; INPUT OPT"
        },
        {
                "call_level":3,
                "gosub_level":1,
                "source_name":"PAT.TEST.SUB2.b",
                "line_number":6,
                "source":"0006     CALL PAT.TEST.SUB2(A)"
        },
        {
                "call_level":2,
                "gosub_level":1,
                "source_name":"PAT.TEST.SUB2.b",
                "line_number":6,
                "source":"0006     CALL PAT.TEST.SUB2(A)"
        },
        {
                "call_level":1,
                "gosub_level":1,
                "source_name":"PAT.TEST.SUB1.b",
                "line_number":4,
                "source":""
        }
]
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
