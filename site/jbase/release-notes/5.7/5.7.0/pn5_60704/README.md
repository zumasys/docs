# PN5_60704

<PageHeader />

## Description

Suppress character echo on input

### Previous Release Behavior

HUSH ON would suppress both input and output; there was no ability to suppress input only.

### Current Release Behavior

HUSH command extended to make it possible to only suppress input.

New syntax:

```
HUSH ON    - Suppress input and output
HUSH OFF   - Resume input and output
HUSH INPUT - Suppress input only
```

These commands are effective for both programs and procs.

Back to [jBASE 5.7.0 Release Notes](./../README.md)
  
<PageFooter />
