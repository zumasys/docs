# PN1257

<PageHeader />

## Description

In jQL there are several formatter options (e.g. COL.HDG) that can follow a dictionary.

If the dictionary is preceded by BREAK-ON and is not followed by "..." the formatter option causes an error.

## Previous Release Behavior

```text
LIST MD BREAK-ON *A1 COL.HDG "Attr one"
```

Results in

```text
Error in Statement "LIST MD BREAK-ON *A1 COL.HDG "Attr one""
Error in Statement "COL.HDG unexpected at this time"
COL.HDG unexpected at this time
```

The following does work

```text
LIST MD BREAK-ON *A1 "" COL.HDG "Attr one"
```

## Current Release Behavior

```text
LIST MD BREAK-ON *A1 COL.HDG "Attr one"
```

Produces the expected jQL output.

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
