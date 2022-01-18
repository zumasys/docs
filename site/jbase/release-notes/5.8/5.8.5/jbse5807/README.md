# JBSE-5807

<PageHeader />

## Description

A jQL query that has multiple conditions separated by a 0 attribute based dictionary output token causes a segv.

## Previous Release Behavior

```text
LIST mdf WITH *A0 = "00]" ID LASTNAME = "JONES"

fails
```

## Current Release Behavior

```text
PAGE    1                                                                                                                  11:46:14  13 JAN 2022

mdf    Last Name.

004
008
001
005
009
003
007    JONES
002
006


 9 Records Listed
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
