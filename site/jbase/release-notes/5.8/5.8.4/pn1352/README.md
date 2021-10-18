# PN1352

<PageHeader />

## Description

Certain combinations of operands and conversions including an MR%n or MD conversion cause a run-time error.

## Previous Release Behavior

The following correlative:

```
F;110;C;=;110;C;#;110;(DM);(MR%2);110;(D4Y);:;D;(DM);(MR%2);D;(D4Y);:;>;*;C2;*;110;(DM);(MR%2);110;(D4Y);:;D;(DM);(MR%2);D;(D4Y);:;=;C3;*;110;(DM);(MR%2);110;(D4Y);:;D;(DM);(MR%2);D;(D4Y);:;<;C4;*;+;+;+
```

Causes

```
Error in attribute definition item TEST.REQ-SHIP-MONTH
Error in F correlative:
Embedded conversion missing close parenthesis.
```

## Current Release Behavior

Works as expected

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
