# JBSE-5823

<PageHeader />

## Description

An I-type that performs a TRANS followed by an EXTRACT of a specific value returns null

## Previous Release Behavior

```text
CREATE-FILE &SL&
```

```text
CT &SL& 1

001 val1]val2
```

```text
CT DICT &SL& VAL2

001 I
002 EXTRACT(TRANS(&SL&, @ID, 1, 'X'),1,2)
003
004
005 5L
```

```text
LIST &SL& VAL2
&SL&.......... VAL2.
1
```

## Current Release Behavior

```text
&SL&.......... VAL2.
1 VAL2
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
